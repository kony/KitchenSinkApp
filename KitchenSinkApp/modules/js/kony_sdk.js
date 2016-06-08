/*
  * kony-sdk-ide Version 1.0.0.0
  */
        
/**
 * Kony namespace
 * @namespace kony
 */
if (typeof(kony) === "undefined") {
	kony = {};
}

/**
 * Constructor for creating the kony client instance.
 * @class
 * @classdesc kony Class
 * @memberof kony
 */
kony.sdk = function() {
	this.mainRef = {};
	var clientParams = {};
	this.tokens = {};
	this.currentClaimToken = null;
	this.currentBackEndToken = null;
	var userId = "";
	var sessionId = "";

	if (kony.internal && kony.internal.sdk && kony.internal.sdk.Services) {
		this.internalSdkObject = new kony.internal.sdk.Services();
	}

	var localDataStore = new konyDataStore();
	this.getDataStore = function() {
		return localDataStore;
	}
	this.setDataStore = function(dataStore) {
		localDataStore = dataStore;
	}

	this.getUserId = function() {
		return userId;
	}
	this.setCurrentUserId = function(newUserID) {
		userId = newUserID;
	}
	this.getSessionId = function() {
		return sessionId;
	}
	this.setSessionId = function(newSessionId) {
		sessionId = newSessionId;
	}
	this.setClientParams = function(clientParamsMap) {
		clientParams = clientParamsMap;
	}

	this.getClientParams = function() {
		return clientParams;
	}
}

kony.mbaas = kony.sdk;
kony.sdk.isDebugEnabled = true;
kony.sdk.isInitialized = false;
kony.sdk.currentInstance = null;
kony.sdk.isLicenseUrlAvailable = true;

kony.sdk.version = "1.0.0.0";


kony.sdk.getDefaultInstance = function() {
	return kony.sdk.currentInstance;
};

 // This is to be deprecated with getDefaultInstance
kony.sdk.getCurrentInstance = function() {
	return kony.sdk.currentInstance;
};

kony.sdk.claimsRefresh = function(callback, failureCallback) {
	var konyRef = kony.sdk.getCurrentInstance();
	var logger = new konyLogger();
	var networkProvider = new konyNetworkProvider();
	var loginWithAnonymousProvider = function(successCallback, failureCallback) {
		var identityObject = konyRef.getIdentityService("$anonymousProvider");
		identityObject.login(null,
			function(res) {
				successCallback();
			},
			function(res) {
				kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(res));
			});
	};

	if (konyRef.currentClaimToken === null) {
		logger.log("claims Token is Unavialable");
		if (konyRef.isAnonymousProvider) {
			loginWithAnonymousProvider(callback, failureCallback);
		} else {
			kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getNullClaimsTokenErrObj());
		}
	} else if (konyRef.claimTokenExpiry && new Date().getTime() > konyRef.claimTokenExpiry) {
		if (konyRef.isAnonymousProvider) {
			loginWithAnonymousProvider(callback, failureCallback);		
		} else {
			logger.log("claims token has expired. fetching new token..")
			var _serviceUrl = stripTrailingCharacter(konyRef.rec.url, "/");
			var _url = _serviceUrl + "/claims";
			logger.log("service url is " + _url);
			if (konyRef.currentRefreshToken === null) {
				kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getNullRefreshTokenErrObj());
			} else {
				networkProvider.post(_url, {}, {
						"Authorization": konyRef.currentRefreshToken,
						"Content-Type": "application/x-www-form-urlencoded"
					}, function(tokens) {
					    tokens = kony.sdk.formatSuccessResponse(tokens);
						logger.log("refresh success..acquiring new tokens");
						konyRef.currentClaimToken = tokens.claims_token.value;
						konyRef.claimTokenExpiry = tokens.claims_token.exp;
						konyRef.currentRefreshToken = tokens.refresh_token;
						callback();
					},
					function(data) {
						logger.log("failed to acquire refresh token");
						/*reset the claims token*/
						konyRef.currentClaimToken = null;
						konyRef.claimTokenExpiry = null;
						konyRef.currentRefreshToken = null;
						kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(data));
					});
			}
		}
	} else {
		callback();
	}
};

kony.sdk.prototype.setIntegrationServiceEndpoint = function(serviceName, endPoint) {
	if (!kony.sdk.isInitialized) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before this, else your changes will be overridden when init is called");
	}
	var konyRef = kony.sdk.getCurrentInstance();
	if (!konyRef.integsvc) {
		throw new Exception(Errors.INTEGRATION_FAILURE, "no valid integration services available");
	}
	if (!konyRef.integsvc[serviceName]) {
		throw new Exception(Errors.INTEGRATION_FAILURE, "no valid integration services available for " + serviceName);
	}
	konyRef.integsvc[serviceName] = endPoint;
};

kony.sdk.prototype.setAuthServiceEndpoint = function(providerName, endPoint) {

	if (!kony.sdk.isInitialized) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before this, else your changes will be overridden when init is called");
	}

	var konyRef = kony.sdk.getCurrentInstance();

	if (!konyRef.login) {
		throw new Exception(Errors.AUTH_FAILURE, "no valid authentication services available");
	}

	var i = 0;
	for (i = 0; i < konyRef.login.length; i++) {
		var rec = konyRef.login[i];
		if (rec.prov.toUpperCase() === providerName.toUpperCase()) {
			break;
		}
	}

	if (i === konyRef.login.length) {
		throw new Exception(Errors.AUTH_FAILURE, "no valid authentication services available for " + providerName);
	}

	konyRef.login[i].url = endPoint;
};

kony.sdk.prototype.setSyncServiceEndpoint = function(endPoint) {

	if (!kony.sdk.isInitialized) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before this, else your changes will be overridden when init is called");
	}

	var konyRef = kony.sdk.getCurrentInstance();

	if (!konyRef.sync) {
		throw new Exception(Errors.SYNC_FAILURE, "no valid sync services available");
	}

	//assuming only one sync service per app
	konyRef.sync.url = endPoint;
}

kony.sdk.prototype.setReportingServiceEndPoint = function(serviceType, endPoint) {
	if (!kony.sdk.isInitialized) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before this, else your changes will be overridden when init is called");
	}

	var konyRef = kony.sdk.getCurrentInstance();
	if (!serviceType) {
		throw new Exception(Errors.METRICS_FAILURE, serviceType + " is not a valid reporting service");
	}
	serviceType = serviceType.toLowerCase();
	if (serviceType === "custom") {
		konyRef.customReportingURL = endPoint;
	} else if (serviceType === "session") {
		konyRef.sessionReportingURL = endPoint;
	} else {
		throw new Exception(Errors.METRICS_FAILURE, serviceType + " is not a valid reporting service");
	}
}

kony.sdk.prototype.setMessagingServiceEndPoint = function(endPoint) {
	if (!kony.sdk.isInitialized) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before this, else your changes will be overridden when init is called");
	}

	var konyRef = kony.sdk.getCurrentInstance();

	if (!konyRef.messagingsvc) {
		throw new Exception(Errors.MESSAGING_FAILURE, "no valid reporting services available");
	}

	konyRef.messagingsvc.url = endPoint;
}

/**
 * Init success callback method.
 * @callback initSuccessCallback
 * @param {json} mainRef - Application Configuration
 */

/**
 * Init failure callback method.
 * @callback initFailureCallback
 */

/**
 * Initialization method for the kony SDK.
 * This method will fetch the app configuration from the kony server and stores in memory.
 * This method has to be invoked before invoking any other SDK methods.
 * @param {string} appKey - Appkey of the kony application
 * @param {string} appSecret - App Secret of the kony application
 * @param {string} serviceUrl - URL of the kony Server
 * @param {initSuccessCallback} successCallback  - Callback method on success
 * @param {initFailureCallback} failureCallback - Callback method on failure
 */
kony.sdk.prototype.init = function(appKey, appSecret, serviceUrl, successCallback, failureCallback) {
	var logger = new konyLogger();
	if (!(appKey && appSecret && serviceUrl)) {
		logger.log("### init:: Invalid credentials passed");
		kony.sdk.verifyAndCallClosure(failureCallback, "Invalid initialization parameters passed. Please check appKey, appSecret and ServiceUrl parameters");
		return;
	}
	var networkProvider = new konyNetworkProvider();
	serviceUrl = serviceUrl.trim();
	this.mainRef.serviceUrl = serviceUrl;
	var konyRef = this;

	logger.log("### init:: calling GET on appConfig to retrieve servicedoc");

	networkProvider.post(
		serviceUrl,
		null, {
			"X-Kony-App-Key": appKey,
			"X-Kony-App-Secret": appSecret,
			"X-HTTP-Method-Override": "GET"
		},
		function(data) {
			data = kony.sdk.formatSuccessResponse(data);
			logger.log("### init::_doInit fetched servicedoc successfuly");
			logger.log("### init:: retrieved data from service doc");
			logger.log(data);
			konyRef.mainRef.config = data;
			konyRef.servicedoc = data;
			konyRef.mainRef.appId = data.appId;
			var processServiceDocResult = konyRef.initWithServiceDoc(appKey, appSecret, data);
			if (processServiceDocResult === true) {
				logger.log("### init::_doInit processing service document successful");
				var svcDataStr = JSON.stringify(data);
				logger.log("### init::_doInit saving done. Calling success callback");
				konyRef.setCurrentUserId("");
				kony.sdk.initiateSession(konyRef);
				if (kony.sdk.metric) {
					kony.sdk.metric.flushEvents();
				}
				var identityObject = kony.sdk.getCurrentInstance().getIdentityService("$anonymousProvider");
				identityObject.login(null,
					function(res) {
						kony.sdk.verifyAndCallClosure(successCallback, konyRef.mainRef);
					},
					function(res) {
						kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(res));
					});
			} else {
				logger.log("### init::_doInit processing servicedoc failed. Calling failure callback");
				kony.sdk.verifyAndCallClosure(failureCallback, JSON.stringify(processServiceDocResult));
			}
		},
		function(data) {
			logger.log("### init::_doInit fetching service document from Server failed" + data);
			logger.log("### init::_doInit calling failure callback");
			kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(data));
		});
};


kony.sdk.prototype.initWithServiceDoc = function(appKey, appSecret, serviceDoc) {
	konyRef = this;
	kony.sdk.currentInstance = this;
	if (serviceDoc instanceof kony.sdk.serviceDoc) {
		var servConfig = serviceDoc.toJSON();
		processServiceDocMap(servConfig);
	} else {
		return processServiceDocMap(serviceDoc);
	}

	function processServiceDocMap(servConfig) {
		var logger = new konyLogger();


		for (var item in servConfig) {
			if (kony.sdk.isEmptyObject(servConfig[item])) {
				delete servConfig[item];
			}
		}

		logger.log("### init::_doInit::_processServiceDoc" + JSON.stringify(servConfig));
		try {
			konyRef.mainRef.appKey = appKey;
			konyRef.mainRef.appSecret = appSecret;
			konyRef.mainRef.appId = servConfig.appId;

			/* if (!servConfig.baseId) {
				throw new Exception(Errors.INIT_FAILURE, "invalid baseId " + servConfig.baseId);
			} */
			konyRef.mainRef.baseId = servConfig.baseId;

			/* if (!servConfig.name) {
				throw new Exception(Errors.INIT_FAILURE, "invalid name " + servConfig.name);
			} */
			konyRef.mainRef.name = servConfig.name;

			if (servConfig.login) {
				konyRef.login = servConfig.login;
			} else {
				konyRef.login = [];
			}

			var url = servConfig.selflink;
			if (url) {
				var lastPos = url.indexOf("/appconfig");
				if (lastPos != -1) {
					url = url.slice(0, lastPos);
				} else {
					throw new Exception(Errors.INIT_FAILURE, "invalid self link");
				}
				var anonymousLoginProvider = {};
				anonymousLoginProvider.type = "anonymous";
				anonymousLoginProvider.url = url;
				anonymousLoginProvider.prov = "$anonymousProvider";
				konyRef.login.push(anonymousLoginProvider);
			}

			if (typeof(servConfig.integsvc) !== 'undefined') {
				logger.log("### init::_doInit::_processServiceDoc parsing Integration services");
				konyRef.integsvc = servConfig.integsvc;
				logger.log("### init::_doInit::konyRef integration Services" + JSON.stringify(konyRef.integsvc));
			}

			if (typeof(servConfig.messagingsvc) !== 'undefined') {
				logger.log("### init::_doInit::_processServiceDoc parsing Messaging services");
				konyRef.messagingsvc = servConfig.messagingsvc;
			}

			if (typeof(servConfig.sync) !== 'undefined') {
				konyRef.sync = servConfig.sync;
			}
			if(kony.sdk.isLicenseUrlAvailable) {
				if (servConfig.reportingsvc && servConfig.reportingsvc.custom && servConfig.reportingsvc.session) {
					konyRef.customReportingURL = servConfig.reportingsvc.custom;
					konyRef.sessionReportingURL = servConfig.reportingsvc.session;
				} else {
					throw new Exception(Errors.INIT_FAILURE, "invalid url for reporting service");
				}
			}

			if (konyRef.internalSdkObject) {
				if (konyRef.internalSdkObject.setClientParams) {
					konyRef.internalSdkObject.setClientParams(konyRef.getClientParams());
				}

				konyRef.internalSdkObject.initWithServiceDoc(appKey, appSecret, servConfig);
				logger.log("### init::internal sdk object initialized");
			}
			logger.log("### init::_doInit::_processServiceDoc parsing service document done");
			kony.sdk.isInitialized = true;
			return true;
		} catch (err) {
			logger.log("### init::_doInit::_processServiceDoc failed with an exception: " + err);
			return ("processing the ServiceDoc failed with an exception: " + JSON.stringify(err));
		}

	}

};

kony.sdk.prototype.sessionChangeHandler = function(changes) {

	var konyRef = kony.sdk.getCurrentInstance();
	var sessionId = null;
	var userId = null;
	if (changes["sessionId"] != undefined) {
		sessionId = changes["sessionId"];
		konyRef.setSessionId(sessionId);
		if (konyRef.metricsServiceObject) {
			konyRef.metricsServiceObject.setSessionId(sessionId);
		}
	}
	if (changes["userId"] != undefined) {
		userId = changes["userId"];
		konyRef.setCurrentUserId(userId);
		if (konyRef.metricsServiceObject) {
			konyRef.metricsServiceObject.setUserId(userId);
		}
	}
	// if (konyRef.internalSdkObject) {
	// 	//TODO implement across native sdk's ios/andriod
	// 	//konyRef.internalSdkObject.sessionChangeHandler(changes);
	// 	if(sessionId) {
	// 		konyRef.internalSdkObject.setSessionId(sessionId);
	// 	}
	// 	if(userId) {
	// 		konyRef.internalSdkObject.setUserId(userId);
	// 	}
	// }
};

kony.sdk.getSdkType = function() {
	return "js";
}

if (typeof(kony.sdk) === "undefined") {
	kony.sdk = {};
}

if (typeof(kony.sdk.error) === "undefined") {
	kony.sdk.error = {};
}

kony.sdk.error.getAuthErrObj = function(errResponse) {
	if (errResponse && errResponse.httpresponse) {
		delete errResponse.httpresponse;
	}
	if (errResponse && (errResponse.opstatus == 1013 || errResponse.opstatus == 1011)) {
		errResponse["message"] = errResponse["errmsg"];
		delete errResponse.errmsg;
	}
	try {
		var mfcode = errResponse["mfcode"];
		var message = errResponse["message"];
		var details = errResponse["details"];
		if (mfcode) {
			return kony.sdk.error.getMFcodeErrObj(mfcode, message, details, "");
		}
		return errResponse;
	} catch (err) {
		return errResponse;
	}
}

kony.sdk.error.getNullClaimsTokenErrObj = function() {
	var errorObj = {};
	//TODO move error code and constants in to constants.
	errorObj.opstatus = kony.sdk.errorcodes.cliams_token_null
	errorObj.message = kony.sdk.errormessages.cliams_token_null
	errorObj.details = {};
	errorObj.mfcode = "";
	return errorObj;
}

kony.sdk.error.getNullRefreshTokenErrObj = function() {
	var errorObj = {};
	//TODO move error code and constants in to constants.
	errorObj.opstatus = kony.sdk.errorcodes.invalid_session_or_token_expiry
	errorObj.message = kony.sdk.errormessages.invalid_session_or_token_expiry
	errorObj.details = {};
	errorObj.mfcode = "";
	return errorObj;
}

kony.sdk.error.getIntegrationErrObj = function(errResponse) {
	try {
		var mfcode = errResponse["mfcode"];
		var message = errResponse["errmsg"];
		var details = errResponse["mferrmsg"];
		var service = errResponse["service"];
		if (!service) {
			service = "";
		}
		if (!details) {
			details = "";
		}
		var errorMessagePrefixForIntegration = "";
		if (service) {
			errorMessagePrefixForIntegration = "Integration Service Request Failed for " + service + ":";
		} else {
			errorMessagePrefixForIntegration = "Integration Service Request Failed:";
		}
		if (mfcode) {
			return kony.sdk.error.getMFcodeErrObj(mfcode, message, details, errorMessagePrefixForIntegration);
		}
		return errResponse;
	} catch (err) {
		return errResponse;
	}
}

kony.sdk.error.getMFcodeErrObj = function(mfcode, message, details, errMessagePrefix) {
	var errorObj = {};
	errorObj.details = {};
	if (details) {
		errorObj.details = details;
	}
	errorObj.mfcode = mfcode;
	if (mfcode === "Auth-4") {
		if (!message) {
			message = kony.sdk.errormessages.invalid_user_credentials
		}
		errorObj.opstatus = kony.sdk.errorcodes.invalid_user_credentials
		errorObj.message = errMessagePrefix + message;

	} else if (mfcode === "Auth-9") {
		if (!message) {
			message = kony.sdk.errormessages.invalid_app_credentials
		}
		errorObj.opstatus = kony.sdk.errorcodes.invalid_app_credentials
		errorObj.message = errMessagePrefix + message;
	} else if (mfcode === "Auth-3") {
		if (!message) {
			message = kony.sdk.errormessages.invalid_user_app_credentials
		}
		errorObj.opstatus = kony.sdk.errorcodes.invalid_user_app_credentials
		errorObj.message = errMessagePrefix + message;
	} else if ((mfcode === "Auth-5") || (mfcode === "Auth-6") || (mfcode === "Gateway-31") || (mfcode === "Gateway-33") || (mfcode === "Gateway-35") || (mfcode === "Gateway-36") || (mfcode === "Auth-46") || (mfcode === "Auth-55")) {
		errorObj.opstatus = kony.sdk.errorcodes.invalid_session_or_token_expiry
		errorObj.message = errMessagePrefix + kony.sdk.errormessages.invalid_session_or_token_expiry
	} else if (mfcode === "Auth-7" || mfcode === "Auth-27") {
		if (!message) {
			message = errMessagePrefix + kony.sdk.errormessages.invalid_user_app_services
		}
		errorObj.opstatus = kony.sdk.errorcodes.invalid_user_app_services
		errorObj.message = message;
	} else {
		errorObj.opstatus = kony.sdk.errorcodes.default_code
		errorObj.message = errMessagePrefix + kony.sdk.errormessages.default_message
	}
	return errorObj;
}

function getAuthErrorMessage(mfcode) {
	if (mfcode === "Auth-4") {
		return kony.sdk.errormessages.invalid_user_credentials
	} else if (mfcode === "Auth-9") {
		return kony.sdk.errormessages.invalid_app_credentials
	} else if (mfcode === "Auth-3") {
		return kony.sdk.errormessages.invalid_user_app_credentials
	} else if ((mfcode === "Auth-5") || (mfcode === "Auth-6") || (mfcode === "Gateway-31") || (mfcode === "Gateway-33") || (mfcode === "Gateway-35") || (mfcode === "Gateway-36") || (mfcode === "Auth-46") || (mfcode === "Auth-55")) {
		return kony.sdk.errormessages.invalid_session_or_token_expiry
	} else if (mfcode === "Auth-7" || mfcode === "Auth-27") {
		return kony.sdk.errormessages.invalid_user_app_services
	} else {
		return mfcode + ":" + kony.sdk.errormessages.default_message
	}
}
if (typeof(kony.sdk) === "undefined") {
	kony.sdk = {};
}

if (typeof(kony.sdk.errorcodes) === "undefined") {
	kony.sdk.errorcodes = {};
}

if (typeof(kony.sdk.errormessages) === "undefined") {
	kony.sdk.errormessages = {};
}

kony.sdk.errorcodes.invalid_user_credentials = 101;
kony.sdk.errormessages.invalid_user_credentials = "Invalid User Credentials.";

kony.sdk.errorcodes.invalid_app_credentials = 102;
kony.sdk.errormessages.invalid_app_credentials = "Invalid App Credentials.";

kony.sdk.errorcodes.invalid_user_app_credentials = 103;
kony.sdk.errormessages.invalid_user_app_credentials = "Invalid User/App Credentials.";

kony.sdk.errorcodes.invalid_session_or_token_expiry = 104;
kony.sdk.errormessages.invalid_session_or_token_expiry = "Session/Token got invalidated in the backend.Please login.";

kony.sdk.errorcodes.invalid_user_app_services = 105;
kony.sdk.errormessages.invalid_user_app_services = "Invalid provider in appServices.";

kony.sdk.errorcodes.cliams_token_null = 106;
kony.sdk.errormessages.cliams_token_null = "Claims Token is Unavialable";

kony.sdk.errorcodes.default_code = 100;
kony.sdk.errormessages.default_message = "UnhandledMFcode";

kony.sdk.errorcodes.unknown_error_code = 1000;
kony.sdk.errormessages.unknown_error_message = "An unknown error has occured";

kony.sdk.errorcodes.connectivity_error_code = 1011;
kony.sdk.errormessages.connectivity_error_message = "An error occurred while making the request. Please check device connectivity, server url and request parameters";

kony.sdk.errorcodes.invalid_json_code = 1013;
kony.sdk.errormessages.invalid_json_message = "Invalid Json response was returned";

kony.sdk.errorcodes.request_timed_out_code = 1014;
kony.sdk.errormessages.request_timed_out_message = "Request to server has timed out";

/**
 * Method to create the Identity service instance with the provided provider name.
 * @param {string} providerName - Name of the provider
 * @returns {IdentityService} Identity service instance
 */
kony.sdk.prototype.getIdentityService = function(providerName) {
	if (!kony.sdk.isInitialized) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
	}
	var logger = new konyLogger();
	var provider = null;
	if (providerName) {
		if (this.login != null) {
			for (var i = 0; i < this.login.length; i++) {
				var rec = this.login[i];
				if ((rec.alias && rec.alias.toUpperCase() === providerName.toUpperCase()) || (rec.prov.toUpperCase() === providerName.toUpperCase())) {
					provider = new IdentityService(this, rec);
					break;
				}

			}
			if (provider === null) {
				throw new Exception(Errors.AUTH_FAILURE, "Invalid providerName");
			}
			//TODO: what if the providerName is not passed by the user? 
			logger.log("### auth:: returning authService for providerName = " + provider.getProviderName());
			return provider;
		}
	} else {
		throw new Exception(Errors.AUTH_FAILURE, "Invalid providerName");
	}
};
/**
 * Should not be called by the developer.
 * @class
 * @classdesc Identity service instance for handling login/logout calls.
 */
function IdentityService(konyRef, rec) {
	var logger = new konyLogger();
	var networkProvider = new konyNetworkProvider();
	var serviceObj = rec;
	konyRef.rec = rec;
	var mainRef = konyRef.mainRef;
	if (serviceObj === undefined || serviceObj.prov == undefined || serviceObj.type == undefined) {
		throw new Exception(Errors.INIT_FAILURE, "Invalid service url and service type");
	}

	var _type = serviceObj.type;
	var _serviceUrl = stripTrailingCharacter(serviceObj.url, "/");;
	var _providerName = serviceObj.prov;

	logger.log("### AuthService:: initialized for provider " + _providerName + " with type " + _type);

	var dsKey = _serviceUrl + "::" + _providerName + "::" + _type + "::RAW";

	function resetAllCurrentTokens(konyRef, _providerName) {
		kony.sdk.resetCacheKeys(konyRef, _providerName);
	}

	/**
	 * Login success callback method.
	 * @callback loginSuccessCallback
	 * @param {string} claimsToken - Claims token value
	 */

	/**
	 * Login failure callback method.
	 * @callback loginFailureCallback
	 * @param {json} error - Error information
	 */
	/**
	 * Login with the given credentials asynchronously and executes the given callback.
	 * @param {object} options - User name and password
	 * @param {loginSuccessCallback} successCallback  - Callback method on success
	 * @param {loginFailureCallback} failureCallback - Callback method on failure
	 */
	this.login = function(options, successCallback, failureCallback) {

		konyRef.isAnonymousProvider = false;
		logger.log("### AuthService::login Invoked login for provider " + _providerName + " of type " + _type);
		if (typeof(options) == 'undefined') {
			throw new Exception(Errors.AUTH_FAILURE, "Missing required number of arguments to login function");
		}

		function invokeAjaxCall(url, params, headers) {

			if (!headers) {
				headers = {};
			}
			headers["X-Kony-App-Key"] = mainRef.appKey;
			headers["X-Kony-App-Secret"] = mainRef.appSecret;
			headers["Accept"] = "application/json";

			var endPointUrl = null;
			if (_type === "anonymous") {
				endPointUrl = _serviceUrl + url;
			} else {
				endPointUrl = _serviceUrl + url + "?provider=" + _providerName;
				params["provider"] = _providerName;
			}

			networkProvider.post(endPointUrl, params, headers,
				function(data) {
					data = kony.sdk.formatSuccessResponse(data);
					logger.log("### AuthService::login successful. Retrieved Data:: ");
					konyRef.tokens[_providerName] = data;
					logger.log("### AuthService::login extracted token. Calling success callback");
					konyRef.currentClaimToken = data.claims_token.value;
					konyRef.currentBackEndToken = data.provider_token;
					konyRef.claimTokenExpiry = data.claims_token.exp;
					konyRef.currentRefreshToken = data.refresh_token;
					if (!konyRef.getUserId() && data.profile) {
						konyRef.setCurrentUserId(data.profile.userid);
					}
					logger.log("userid is " + konyRef.getUserId());
					kony.sdk.verifyAndCallClosure(successCallback, {});
				},
				function(data) {
					logger.log("### AuthService::login login failure. retrieved data:: ");
					logger.log(data);
					logger.log("### AuthService::login Calling failure callback");
					/*resetting all the token in case of error */
					resetAllCurrentTokens(konyRef, _providerName);
					failureCallback(kony.sdk.error.getAuthErrObj(data));
				});
		}

		if (_type === "anonymous") {
			konyRef.isAnonymousProvider = true;
			logger.log("### AuthService::login Adapter type is anonymous ");
			invokeAjaxCall("/login", {}, {
				"Content-Type": "application/x-www-form-urlencoded"
			});
		} else if (_type == "basic") {
			var mandatory_fields = ["userid", "password"];
			if (serviceObj.mandatory_fields && kony.sdk.isArray(serviceObj.mandatory_fields)) {
				mandatory_fields = serviceObj.mandatory_fields;
			}
			for (var i = 0; i < mandatory_fields.length; ++i) {
				if (kony.sdk.isNullOrUndefined(options[mandatory_fields[i]])) {
					throw new Exception(Errors.AUTH_FAILURE, " Require " + mandatory_fields[i]);
				}
			}
			var payload = {};
			for (var option in options) {
				payload[option] = options[option];
			}
			payload["provider"] = _providerName;

			logger.log("### AuthService::login Adapter type is basic ");
			invokeAjaxCall("/login", payload, {
				"Content-Type": "application/x-www-form-urlencoded"
			});
		} else {
			if (options.userid && options.password) {
				var payload = {};
				for(var option in options){
					payload[option] = options[option];
				}
				payload["provider"] = _providerName;
				invokeAjaxCall("/login",payload);
			} else {
				logger.log("### AuthService::login Adapter type is " + _type);
				OAuthHandler(_serviceUrl, _providerName, invokeAjaxCall, _type);
			}
		}
	};
	/**
	 * Logout success callback method.
	 * @callback logoutSuccessCallback
	 */

	/**
	 * Logout failure callback method.
	 * @callback logoutFailureCallback
	 */
	/**
	 * Logout and executes the given callback.
	 * @param {logoutSuccessCallback} successCallback  - Callback method on success
	 * @param {logoutFailureCallback} failureCallback - Callback method on failure
	 */
	this.logout = function(successCallback, failureCallback) {
		function logoutHandler() {
			_logout(successCallback, failureCallback);
		}
		kony.sdk.claimsRefresh(logoutHandler, failureCallback);
	};

	function _logout(successCallback, failureCallback) {
		logger.log("### AuthService::logout invoked on provider " + _providerName + " of type " + _type);
		var claimsTokenValue = null;
		if (konyRef.tokens[_providerName]) {
			claimsTokenValue = konyRef.tokens[_providerName]["claims_token"]["value"];
			delete konyRef.tokens[_providerName];
		}

		networkProvider.post(_serviceUrl + "/logout", {}, {
				"Authorization": claimsTokenValue,
				"Accept" : "*/*"
			},
			function(data) {
				logger.log("AuthService::logout successfully logged out. Calling success callback");
                resetAllCurrentTokens(konyRef, _providerName);
				kony.sdk.verifyAndCallClosure(successCallback, {});
			},
			function(err) {
					logger.log("### AuthService::logout logged out Failed. Calling failure callback");
					kony.sdk.verifyAndCallClosure(failureCallback,kony.sdk.error.getAuthErrObj(err));
			});
	};
	/**
	 * Fetch backend token callback method.
	 * @callback fetchBackendTokenSuccessCallback
	 * @param {string} providerToken - Provider token value
	 */

	/**
	 * Fetch backend token callback method.
	 * @callback fetchBackendTokenFailureCallback
	 * @param {json} error - Error information
	 */
	/**
	 * Fetch the backend datasource token.
	 * @param {boolean} fromserver - Flag to force fetch from server only.
	 * @param {object} options - Options
	 * @param {fetchBackendTokenSuccessCallback} successCallback  - Callback method on success
	 * @param {fetchBackendTokenFailureCallback} failureCallback - Callback method on failure
	 */
	this.getBackendToken = function(fromserver, options, successCallback, failureCallback) {
		logger.log("### AuthService::getBackendToken called for provider " + _providerName + " of type " + _type);
		if (fromserver != undefined && fromserver === true) {
			logger.log("### AuthService::getBackendToken fromserver is enabled. Trying to login");
			_claimsRefresh(null,
				function(token) {
					konyRef.tokens[_providerName] = token;
					konyRef.currentBackEndToken = token.provider_token;
					kony.sdk.verifyAndCallClosure(successCallback, token.provider_token);
				},
				failureCallback);
		} else {
			if (konyRef.tokens[_providerName]) {
				var val = konyRef.tokens[_providerName];
				var _exp = val.provider_token.exp;
				logger.log("token expiry time: " + _exp);
				logger.log("Current time: " + (new Date().getTime()));
				if (_exp && _exp < (new Date().getTime())) {
					logger.log("### AuthService::getBackendToken Token expired. Fetching refresh from claims api");
					_claimsRefresh(null,
						function(token) {
							konyRef.tokens[_providerName] = token.claims_token.value;
							logger.log("### AuthService::getBackendToken fetching refresh successfull. Calling success callback");
							konyRef.currentBackEndToken = token.provider_token;
							kony.sdk.verifyAndCallClosure(successCallback, token.provider_token);
						},
						function(error) {
							logger.log("### AuthService::getBackendToken fetching refresh failed. Calling failure callback");
							konyRef.tokens[_providerName] = null;
							konyRef.currentBackEndToken = null;
							kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(error));
						});
				} else {
					logger.log("### AuthService::getBackendToken present token is valid/doesn't have expiry time. Calling success callback");
					konyRef.currentBackEndToken = val.provider_token;
					kony.sdk.verifyAndCallClosure(successCallback, val.provider_token);
				}
			} else {
				logger.log("### AuthService::getBackendToken failed for find info for key " + dsKey + "in database. calling failure callback");
				kony.sdk.verifyAndCallClosure(failureCallback, null);
			}
		}
	};
	/**
	 * Get profile callback method.
	 * @callback getProfileSuccessCallback
	 * @param {object} profile - Profile object
	 */

	/**
	 * Get profile callback method.
	 * @callback getProfileFailureCallback
	 */
	/**
	 * Get profile.
	 * @param {boolean} fromserver - Flag to force fetch from server only.
	 * @param {getProfileSuccessCallback} successCallback  - Callback method on success
	 * @param {getProfileFailureCallback} failureCallback - Callback method on failure
	 */
	this.getProfile = function(fromserver, successCallback, failureCallback) {
		if (fromserver && fromserver == true) {
			_claimsRefresh(null,
				function(token) {
					konyRef.tokens[_providerName] = token;
					kony.sdk.verifyAndCallClosure(successCallback, token.profile);
				},
				failureCallback)
		} else {
			if (konyRef.tokens[_providerName]) {
				var val = konyRef.tokens[_providerName]
				kony.sdk.verifyAndCallClosure(successCallback, val.profile);
			} else {
				kony.sdk.verifyAndCallClosure(failureCallback, null);
			}
		}
	};
	/**
	 * Get the provider name.
	 * @returns {string} Provider name.
	 */
	this.getProviderName = function() {
		return _providerName;
	};
	/**
	 * Get the provider type.
	 * @returns {string} Provider type.
	 */
	this.getProviderType = function() {
		return _type;
	};

	/**
	 * Get the generic session data type.
	 * @returns {string} session data.
	 */
	this.getUserData = function(successCallback, failureCallback) {
		var userDataUrl = _serviceUrl + "/session/user_data";
		getSessionData(userDataUrl, successCallback, failureCallback);
	};

	/**
	 * Get the user attributes returned by a provider
	 * @returns {string} user attributes.
	 */
	this.getUserAttributes = function(successCallback, failureCallback) {
		var userAttributesUrl = _serviceUrl + "/session/user_attributes?provider=" + _providerName;
		getSessionData(userAttributesUrl, successCallback, failureCallback);
	};

	/**
	 * Get the security attributes returned by a provider
	 * @returns {string} security attributes.
	 */
	this.getSecurityAttributes = function(successCallback, failureCallback) {
		var securityAttributesUrl = _serviceUrl + "/session/security_attributes?provider=" + _providerName;
		getSessionData(securityAttributesUrl, successCallback, failureCallback);
	};

	/**
		utility method to get session data
		@private
	*/
	var getSessionData = function(sessionAttributesEndPointUrl, successCallback, failureCallback) {
		if (konyRef.currentClaimToken === null) {
			kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getNullClaimsTokenErrObj());
		}

		networkProvider.post(sessionAttributesEndPointUrl, {}, {
				"Authorization": konyRef.currentClaimToken,
				"X-HTTP-Method-Override": "GET"
			},
			function(data) {
			    data = kony.sdk.formatSuccessResponse(data);
				kony.sdk.verifyAndCallClosure(successCallback, data);
			},
			function(err) {
				kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(err));
			});
	};



	/**
	 * Method to refresh the claims token.
	 * @private
	 */
	var _claimsRefresh = function(options, success, failure) {
		logger.log("### AuthService::_claimsRefresh fetching claims from server for provider " + _providerName);
		var value = konyRef.tokens[_providerName];
		var refreshToken = null;
		if (value) {
			refreshToken = value.refresh_token;
		}
		var _url = _serviceUrl + "/claims";
		if (options && options.requestParams != null) {
			_url = _url + "?"
			for (var i in options.requestParams) {
				if (options.requestParams.hasOwnProperty(i) && typeof(i) !== 'function') {
					_url = _url + (i + "=" + options.requestParams[i] + "&");
				}
			}
			_url = stripTrailingCharacter(_url, "&");
		}
		if (refreshToken) {
			logger.log("### AuthService::_claimsRefresh making POST request to claims endpoint");
			networkProvider.post(_url, {}, {
					"Authorization": refreshToken,
					"Content-Type": "application/x-www-form-urlencoded"
				},
				function(data) {
					data = kony.sdk.formatSuccessResponse(data);
					logger.log("### AuthService::_claimsRefresh Fetching claims succcessfull");
					konyRef.tokens[_providerName] = data;
					logger.log("### AuthService::_claimsRefresh saved locally. Calling success callback");
					kony.sdk.verifyAndCallClosure(success, data);
				},
				function(xhr, status, err) {
					logger.log("### AuthService::_claimsRefresh fetching claims failed. Calling failure callback");
					kony.sdk.verifyAndCallClosure(failure, kony.sdk.error.getAuthErrObj(err));
				});
		} else {
			logger.log("### AuthService::_claimsRefresh no refreshtoken found. calling failure callback");
			kony.sdk.verifyAndCallClosure(failure, kony.sdk.error.getNullRefreshTokenErrObj());
		}
	};
};
stripTrailingCharacter = function(str, character) {
	if (str.substr(str.length - 1) == character) {
		return str.substr(0, str.length - 1);
	}
	return str;
};

var Constants = {
	APP_KEY_HEADER: "X-Kony-App-Key",
	APP_SECRET_HEADER: "X-Kony-App-Secret",
	AUTHORIZATION_HEADER: "Authorization"
};

var Errors = {
	INIT_FAILURE: "INIT_FAILURE",
	DATA_STORE_EXCEPTION: "DATASTORE_FAILURE",
	AUTH_FAILURE: "AUTH_FAILURE",
	INTEGRATION_FAILURE: "INTEGRATION_FAILURE",
	MESSAGING_FAILURE: "MESSAGING_FAILURE",
	SYNC_FAILURE: "SYNC_FAILURE",
	METRICS_FAILURE: "METRICS_FAILURE",
	MISC_FAILURE: "MISCELLANEOUS_FAILURE"
};
kony.sdk.prototype.enableDebug = function() {
	kony.sdk.isDebugEnabled = true;
}

kony.sdk.prototype.disableDebug = function() {
	kony.sdk.isDebugEnabled = false;
}

function Exception(name, message) {
	alert(name + ": " + message);
	return {
		code: name,
		message: message
	};
};

kony.sdk.verifyAndCallClosure = function(closure, params) {
	if (typeof(closure) === 'function') {
		closure(params);
	} else {
		var logger = new konyLogger();
		logger.log("invalid callback");
	}
}

kony.sdk.formatCurrentDate = function(inputDateString) {
	var dateObj = new Date(inputDateString);
	var year = dateObj.getUTCFullYear();
	var month = kony.sdk.formatDateComponent(dateObj.getUTCMonth() + 1);
	var date = kony.sdk.formatDateComponent(dateObj.getUTCDate());
	var hours = kony.sdk.formatDateComponent(dateObj.getUTCHours());
	var minutes = kony.sdk.formatDateComponent(dateObj.getUTCMinutes());
	var seconds = kony.sdk.formatDateComponent(dateObj.getUTCSeconds());
	var dateSeparator = "-"
	var timeSeparator = ":"
	var dateString = year + dateSeparator + month + dateSeparator + date + " " + hours + timeSeparator + minutes + timeSeparator + seconds;
	return dateString;
}

kony.sdk.formatDateComponent = function(dateComponent) {
	if (dateComponent < 10) {
		dateComponent = "0" + dateComponent;
	}
	return dateComponent;
}

kony.sdk.isNullOrUndefined = function(val) {
	if (val === null || val === undefined) {
		return true;
	} else {
		return false;
	}
};

kony.sdk.constants = {
	reportingType: {
		session: "session",
		custom: "custom"
	}
};

kony.sdk.isEmptyObject = function(obj) {
	for (var prop in obj) {
		return false;
	}
	return true;
};


kony.sdk.isArray = function(data) {
	if (data && Object.prototype.toString.call(data) === '[object Array]') {
		return true;
	}
	return false;
}


kony.sdk.formatSuccessResponse = function(data)
{
	if(data && data.httpresponse)
	{
		delete data.httpresponse;
	}
	return data;
}

kony.sdk.isJson = function(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

//private method to identify whether session/token expired or not based on error code
kony.sdk.isSessionOrTokenExpired = function(mfcode) {
	if (mfcode && (mfcode === "Auth-5" || mfcode === "Auth-6" || mfcode === "Gateway-31" || mfcode === "Gateway-33" || mfcode === "Gateway-35" || mfcode === "Gateway-36" || mfcode === "Auth-46" || mfcode === "Auth-55")) {
		return true;
	}
	return false;
}

//private method to clear cache
kony.sdk.resetCacheKeys = function(konyRef, _providerName) {
	try {
		if (konyRef) {
			konyRef.currentClaimToken = null;
			konyRef.currentBackEndToken = null;
			konyRef.claimTokenExpiry = null;
			konyRef.currentRefreshToken = null;
			if (_providerName) {
				if (konyRef.tokens.hasOwnProperty(_providerName)) {
					konyRef.tokens[_providerName] = null;
				}
			}
		}
	} catch(e) {
		var logger = new konyLogger();
		logger.log("Error while clearing the cache..");
	}
}
kony.sdk.serviceDoc = function() {
	var appId = "";
	var baseId = "";
	var name = "";
	var selflink = "";
	var login = [];
	var integsvc = {};
	var reportingsvc = {};
	var messagingsvc = {};
	var sync = {};

	this.toJSON = function() {
		servConfig = {};
		servConfig.appId = this.getAppId();
		servConfig.baseId = this.getBaseId();
		servConfig.name = this.getAppName();
		servConfig.selflink = this.getSelfLink();
		servConfig.login = this.getAuthServices();
		servConfig.integsvc = this.getIntegrationServices();
		servConfig.messagingsvc = this.getMessagingServices();
		servConfig.sync = this.getSyncServices();
		servConfig.reportingsvc = this.getReportingServices();
		return servConfig;
	}

	this.setAppId = function(appIdStr) {
		appId = appIdStr;
	};

	this.getAppId = function() {
		return appId;
	};

	this.setBaseId = function(baseIdStr) {
		baseId = baseIdStr;
	};

	this.getBaseId = function() {
		return baseId;
	};

	this.setAppName = function(appName) {
		name = appName;
	};

	this.getAppName = function() {
		return name;
	};

	this.setSelfLink = function(selfLinkStr) {
		selflink = selfLinkStr;
	};

	this.getSelfLink = function() {
		return selflink;
	};

	function setEndPoints(providerType, providerValues) {
		for (var provider in providerValues) {
			providerType[provider] = providerValues[provider];
		}
	}

	this.setAuthService = function(loginProvider) {
		login.push(loginProvider);
	};

	//what will this return? name?
	this.getAuthServiceByName = function(authServiceProvider) {
		for (var i in login) {
			var provider = login[i];
			if (provider.prov == authServiceProvider) {
				return provider;
			}
		}
	};

	this.getAuthServices = function() {
		return login;
	};

	this.setIntegrationService = function(providerName, endPointUrl) {
		integsvc[providerName] = endPointUrl;
	};

	this.getIntegrationServiceByName = function(integrationServiceProviderName) {
		return integsvc[integrationServiceProviderName];
	};

	this.getIntegrationServices = function() {
		return integsvc;
	};

	this.setReportingService = function(reportingType, url) {
		if (reportingType == kony.sdk.constants.reportingType.session || reportingType == kony.sdk.constants.reportingType.custom) {
			reportingsvc[reportingType] = url;
		} else {
			throw new Exception(Errors.INIT_FAILURE, "invalid reporting type " + reportingType);
		}
	}

	this.getReportingServiceByType = function(reportingServiceProviderType) {
		return reportingsvc[reportingServiceProviderType];
	};

	this.getReportingServices = function() {
		return reportingsvc;
	};

	this.setMessagingService = function(appId, url) {
		messagingsvc[appId] = url;
	};

	this.getMessagingServiceByName = function(messagingServiceProviderName) {
		return messagingsvc[messagingServiceProviderName];
	};

	this.getMessagingServices = function() {
		return messagingsvc;
	}

	this.setSyncService = function(syncServiceProvider) {
		sync = syncServiceProvider;
	};

	this.getSyncServices = function() {
		return sync;
	};

};
if (typeof(kony.sdk.metric) === "undefined") {
	kony.sdk.metric = {};
}

kony.sdk.metric.eventFlowTag = "";
kony.sdk.metric.eventConfig = {
	"confType": "BUFFER",
	"eventBufferAutoFlushCount": kony.sdk.metric.eventBufferAutoFlushValue,
	"eventBufferMaxCount": kony.sdk.metric.eventBufferMaxValue
};
kony.sdk.metric.eventBufferMaxValue = 1000;
kony.sdk.metric.eventBufferAutoFlushValue = 15;
kony.sdk.metric.characterLengthLimit = 256;
kony.sdk.metric.reportEventBufferArray = [];
kony.sdk.metric.reportEventBufferBackupArray = [];
kony.sdk.metric.retrievedDS = false;
kony.sdk.metric.eventBufferCount = 0;
kony.sdk.metric.eventTypeMap = {
	"formentry": "FormEntry",
	"touch": "Touch",
	"servicecall": "ServiceCall",
	"gesture": "Gesture",
	"orientation": "Orientation",
	"custom": "Custom"
};
kony.sdk.metric.errorCodeMap = {
	"1000": true,
	"1011": true,
	"1012": true,
	"1014": true,
	"1015": true,
	"1016": true
};

kony.sdk.metric.setEventFlowTag = function(flowTag) {
	if (kony.sdk.isNullOrUndefined(flowTag)) {
		throw new Exception(Errors.METRICS_FAILURE, "Invalid value for event flow tag");
	} else if (flowTag.length <= kony.sdk.metric.characterLengthLimit) {
		kony.sdk.metric.eventFlowTag = flowTag;
	} else {
		throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + kony.sdk.metric.characterLengthLimit + " characters");
	}
};

kony.sdk.metric.clearEventFlowTag = function() {
	kony.sdk.metric.eventFlowTag = "";
};

kony.sdk.metric.getEventFlowTag = function() {
	return kony.sdk.metric.eventFlowTag;
};

kony.sdk.metric.setEventConfig = function(confType, eventBufferAutoFlushCount, eventBufferMaxCount) {
	if (kony.sdk.isNullOrUndefined(confType)) {
		throw new Exception(Errors.METRICS_FAILURE, "Config Type can not be null");
	} else {
		confType = confType.toUpperCase();
	}
	if (confType === "BUFFER") {
		kony.sdk.metric.eventConfig["confType"] = confType;
	} else {
		throw new Exception(Errors.METRICS_FAILURE, "Invalid value for config type");
	}
	if (!kony.sdk.isNullOrUndefined(eventBufferMaxCount) && typeof(eventBufferMaxCount) === "number" && eventBufferMaxCount > 0) {
		kony.sdk.metric.eventConfig["eventBufferMaxCount"] = eventBufferMaxCount;
	} else {
		throw new Exception(Errors.METRICS_FAILURE, "eventBufferMaxCount has to be a Number and greater than 0");
	}
	if (!kony.sdk.isNullOrUndefined(eventBufferAutoFlushCount) && typeof(eventBufferAutoFlushCount) === "number" && eventBufferAutoFlushCount > 0 && eventBufferAutoFlushCount <= eventBufferMaxCount) {
		kony.sdk.metric.eventConfig["eventBufferAutoFlushCount"] = eventBufferAutoFlushCount;
	} else if (eventBufferAutoFlushCount >= eventBufferMaxCount) {
		kony.sdk.metric.eventConfig["eventBufferMaxCount"] = 1000;
		throw new Exception(Errors.METRICS_FAILURE, "eventBufferAutoFlushCount can not be greater than eventBufferMaxCount");
	} else {
		throw new Exception(Errors.METRICS_FAILURE, "eventBufferAutoFlushCount has to be a Number and greater than 0");
	}
};

kony.sdk.metric.reportEvent = function(evttype, evtSubType, formID, widgetID, flowTag) {
	if (kony.sdk.metric.reportEventBufferBackupArray.length === 0) {
		kony.sdk.metric.readFromDS();
	}
	kony.sdk.metric.eventBufferCount = kony.sdk.metric.reportEventBufferBackupArray.length + kony.sdk.metric.reportEventBufferArray.length;

	if (kony.sdk.metric.eventBufferCount === kony.sdk.metric.eventConfig["eventBufferMaxCount"]) {
		throw new Exception(Errors.DATA_STORE_EXCEPTION, "Reached maximum limit to store events");
		return;
	}
	var reportEventMap = {};
	reportEventMap.ts = kony.sdk.formatCurrentDate(new Date());
	evttype = evttype.toLowerCase();
	if (kony.sdk.isNullOrUndefined(kony.sdk.metric.eventTypeMap[evttype])) {
		throw new Exception(Errors.METRICS_FAILURE, "Invalid value for event type");
		return;
	} else {
		reportEventMap["evttype"] = kony.sdk.metric.eventTypeMap[evttype];
	}
	if (kony.sdk.isNullOrUndefined(evtSubType)) {
		reportEventMap["evtSubType"] = "";
	} else if (evtSubType.length <= kony.sdk.metric.characterLengthLimit) {
		reportEventMap["evtSubType"] = evtSubType;
	} else {
		throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + kony.sdk.metric.characterLengthLimit + " characters");
		return;
	}
	if (kony.sdk.isNullOrUndefined(formID)) {
		reportEventMap["formID"] = kony.application.getCurrentForm().id;
	} else if (formID.length <= kony.sdk.metric.characterLengthLimit) {
		reportEventMap["formID"] = formID;
	} else {
		throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + kony.sdk.metric.characterLengthLimit + " characters");
		return;
	}
	if (kony.sdk.isNullOrUndefined(widgetID)) {
		reportEventMap["widgetID"] = "";
	} else if (widgetID.length <= kony.sdk.metric.characterLengthLimit) {
		reportEventMap["widgetID"] = widgetID;
	} else {
		throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + kony.sdk.metric.characterLengthLimit + " characters");
		return;
	}
	if (kony.sdk.isNullOrUndefined(flowTag)) {
		reportEventMap["flowTag"] = kony.sdk.metric.getEventFlowTag();
	} else if (flowTag.length <= kony.sdk.metric.characterLengthLimit) {
		reportEventMap["flowTag"] = flowTag;
	} else {
		throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + kony.sdk.metric.characterLengthLimit + " characters");
		return;
	}
	reportEventMap.SID = kony.ds.read("konyUUID")[0];
	kony.sdk.metric.reportEventBufferArray.push(reportEventMap);

	if (kony.sdk.metric.reportEventBufferArray.length % kony.sdk.metric.eventConfig["eventBufferAutoFlushCount"] === 0) {
		kony.sdk.metric.flushEvents();
	}
};

kony.sdk.metric.flushEvents = function() {
	var logger = new konyLogger();
	if (kony.sdk.metric.reportEventBufferBackupArray.length === 0) {
		kony.sdk.metric.readFromDS();
	}
	if (kony.sdk.metric.reportEventBufferBackupArray.length === 0 && kony.sdk.metric.reportEventBufferArray.length === 0) {
		logger.log("There are no events to flush");
		return;
	}
	var payload = kony.sdk.getPayload(kony.sdk.getCurrentInstance());
	var params = {};
	if (kony.sdk.metric.reportEventBufferArray.length !== 0) {
		kony.sdk.metric.pushEventsToBufferArray();
	}
	var headers = {
		"Content-Type": "application/x-www-form-urlencoded"
	};
	params.httpheaders = headers;
	payload.events = kony.sdk.metric.reportEventBufferBackupArray;
	payload.svcid = "SendEvents";
	payload.rsid = kony.sdk.metric.reportEventBufferBackupArray[0].SID;
	params.konyreportingparams = JSON.stringify(payload);
	kony.net.invokeServiceAsync(kony.sdk.currentInstance.customReportingURL, params, flushCallback);

	function flushCallback(status, response) {
		if (status === 400) {
			if (response.opstatus === 0) {
				kony.sdk.metric.clearBufferEvents();
			} else if (kony.sdk.metric.errorCodeMap[response.opstatus]) {
				kony.sdk.metric.saveInDS();
			} else {
				kony.sdk.metric.clearBufferEvents();
			}
		} else if (status === 300) {
			kony.sdk.metric.saveInDS();
		}
	}
};

/*Stores event data in Data Store on failure of service Call*/
kony.sdk.metric.saveInDS = function() {
	var eventsToSave = [];
	eventsToSave.push(JSON.stringify(kony.sdk.metric.reportEventBufferBackupArray));
	kony.ds.save(eventsToSave, "konyMetricsBuffer");
	kony.sdk.metric.reportEventBufferBackupArray = [];
};

/*Clearing events sent to server */
kony.sdk.metric.clearBufferEvents = function() {
	kony.sdk.metric.reportEventBufferBackupArray = [];
	kony.ds.remove("konyMetricsBuffer");
};

/*Reading any pending events from Data Store */
kony.sdk.metric.readFromDS = function() {
	var eventsFromDS = kony.ds.read("konyMetricsBuffer");
	if (eventsFromDS !== null) {
		var pushToArray = [];
		pushToArray.push(JSON.parse(eventsFromDS[0]));
		kony.sdk.metric.reportEventBufferBackupArray.push.apply(kony.sdk.metric.reportEventBufferBackupArray, pushToArray);
	}
};

/*Pushes events received from user to BufferBackupArray which will be flushed to server */
kony.sdk.metric.pushEventsToBufferArray = function() {
	kony.sdk.metric.reportEventBufferBackupArray.push.apply(kony.sdk.metric.reportEventBufferBackupArray, kony.sdk.metric.reportEventBufferArray);
	kony.sdk.metric.reportEventBufferArray = [];
};

kony.sdk.metric.getEventsInBuffer = function() {
	var eventsFromDS = kony.ds.read("konyMetricsBuffer");
	var eventsToReturn = [];
	if (!kony.sdk.isNullOrUndefined(eventsFromDS)) {
		eventsToReturn.push(JSON.parse(eventsFromDS[0]));
	}
	if (kony.sdk.metric.reportEventBufferArray.length !== 0) {
		eventsToReturn.push.apply(eventsToReturn, kony.sdk.metric.reportEventBufferArray);
	}
	if (eventsToReturn.length !== 0) {
		return eventsToReturn;
	} else {
		return null;
	}
};
/**
 * Method to create the integration service instance with the provided service name.
 * @param {string} serviceName - Name of the service
 * @returns {IntegrationService} Integration service instance
 */
kony.sdk.prototype.getIntegrationService = function(serviceName) {
	if (!kony.sdk.isInitialized) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
	}
	var konyRef = kony.sdk.getCurrentInstance();
	if (!this.currentClaimToken && !konyRef.isAnonymousProvider) {
		throw new Exception(Errors.AUTH_FAILURE, "Please call login in Identity Service before invoking this service");
	}
	var logger = new konyLogger();
	var integrationService = null;
	if (this.integsvc != null) {
		if (this.integsvc[serviceName] != null) {
			logger.log("found integration service" + this.integsvc[serviceName]);
			return new IntegrationService(this, serviceName);
		}

	}

	throw new Exception(Errors.INTEGRATION_FAILURE, "Invalid serviceName");

};
/**
 * Should not be called by the developer.
 * @class
 * @classdesc Integration service instance for invoking the integration services.
 */
function IntegrationService(konyRef, serviceName) {
	var logger = new konyLogger();
	var dataStore = new konyDataStore();
	var homeUrl = konyRef.integsvc[serviceName];
	var networkProvider = new konyNetworkProvider();
	if (homeUrl == undefined || serviceName == undefined) {
		throw new Exception(Errors.INIT_FAILURE, "Invalid homeUrl and serviceName");
	}
	homeUrl = stripTrailingCharacter(homeUrl, "/");


	this.getUrl = function() {
		return homeUrl;
	};
	/**
	 * Integration service success callback method.
	 * @callback integrationSuccessCallback
	 * @param {json} response - Integration service response
	 */

	/**
	 * Integration service failure callback method.
	 * @callback integrationFailureCallback
	 * @param {json} error - Error information
	 */
	/**
	 * invoke the specified operation
	 * @param {string} operationName - Name of the operation
	 * @param {object} headers - Input headers for the operation
	 * @param {object} data - Input data for the operation
	 * @param {integrationSuccessCallback} successCallback  - Callback method on success
	 * @param {integrationFailureCallback} failureCallback - Callback method on failure
	 */
	this.invokeOperation = function(operationName, headers, data, successCallback, failureCallback) {
		function invokeOperationHandler() {
			_invokeOperation(operationName, headers, data, successCallback, failureCallback);
		}
		kony.sdk.claimsRefresh(invokeOperationHandler, failureCallback);
	};

	function _invokeOperation(operationName, headers, data, successCallback, failureCallback) {
		var requestData = {};
		var logger = new konyLogger();
		var reportingData = kony.sdk.getPayload(konyRef);
		reportingData.rsid = kony.ds.read("konyUUID")[0];
		if(!reportingData.rsid)
		{
			logger.log("rsid is either empty,null or undefined");
		}
		if (kony.sdk.metric) {
			if (kony.sdk.metric.reportEventBufferBackupArray.length === 0) {
				kony.sdk.metric.readFromDS();
			}
			kony.sdk.metric.pushEventsToBufferArray();
			requestData.events = kony.sdk.metric.reportEventBufferBackupArray;
		}
		for (var key in data) {
			requestData[key] = data[key];
		}
		reportingData.svcid = operationName;
		var token;
		for (var i in konyRef.tokens) {
			if (konyRef.tokens.hasOwnProperty(i) && typeof(i) !== 'function') {
				token = konyRef.tokens[i];
				break;
			}
		}

		requestData["konyreportingparams"] = JSON.stringify(reportingData);
		var defaultHeaders = {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Kony-Authorization": konyRef.currentClaimToken
		}

		// if the user has defined his own headers, use them
		if (headers) {
			for (var header in headers) {
				defaultHeaders[header] = headers[header];
			}
		}

		networkProvider.post(homeUrl + "/" + operationName,
			requestData, defaultHeaders,
			function(res) {
				if (kony.sdk.metric) {
					kony.sdk.metric.clearBufferEvents();
				}
				kony.sdk.verifyAndCallClosure(successCallback, res);
			},
			function(xhr, status, err) {
				if (xhr && !(status && err)) {
					err = xhr;
				}
				if (kony.sdk.metric) {
					if (kony.sdk.metric.errorCodeMap[xhr.opstatus]) {
						kony.sdk.metric.saveInDS();
					}
				}
				if(err["mfcode"]){
					var konyRef = kony.sdk.getCurrentInstance();
					//clear the cache if the error code related to session/token expiry
					if (kony.sdk.isSessionOrTokenExpired(err["mfcode"])) {
						kony.sdk.resetCacheKeys(konyRef);
					}
				}
				kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getIntegrationErrObj(err));
			}, true);
	};


};
/**
 * Method to create the messaging service instance.
 * @returns {MessagingService} Messaging service instance
 */
kony.sdk.prototype.getMessagingService = function() {
	if (!kony.sdk.isInitialized) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
	}
	return new MessagingService(this);
}

/**
 * Should not be called by the developer.
 * @class
 * @classdesc Messaging service instance for invoking the Messaging services.
 *@param reference to kony object
 */
function MessagingService(konyRef) {

	var homeUrl = konyRef.messagingsvc.url;
	var KSID;
	var appId = konyRef.messagingsvc.appId;
	var logger = new konyLogger();
	var networkProvider = new konyNetworkProvider();
	var dsKey = homeUrl + ":KMS:AppId";

	this.getUrl = function() {
		return homeUrl;
	};

	this.setKSID = function(ksid) {
		konyRef.getDataStore().setItem(dsKey, ksid);
		KSID = ksid;
	};

	this.getKSID = function() {
		if (!KSID) {
			KSID = konyRef.getDataStore().getItem(dsKey);
		}
		return KSID;
	};

	this.setKmsAppId = function(id) {
		appId = id;
	};

	this.getKmsAppId = function() {
		return appId;
	};
	/**
	 * register success callback method.
	 * @callback registerSuccessCallback
	 * @param {json} response - register response
	 */

	/**
	 * Register service failure callback method.
	 * @callback registerFailureCallback
	 * @param {json} error - Error information
	 */
	/**
	 * register to messaging service
	 * @param {string} osType - Type of the operating system
	 * @param {string} deviceId - Device Id
	 * @param {string} pnsToken - Token value
	 * @param {registerSuccessCallback} successCallback - Callback method on success
	 * @param {registerFailureCallback} failureCallback - Callback method on failure
	 */
	this.register = function(osType, deviceId, pnsToken, email, successCallback, failureCallback) {
		if (typeof(pnsToken) === 'undefined' || pnsToken === null) {
			throw new Exception(Errors.MESSAGING_FAILURE, "Invalid pnsToken/sId. Please check your messaging provider");
		}
		if (typeof(osType) === 'undefined' || osType === null) {
			throw new Exception(Errors.MESSAGING_FAILURE, "Invalid osType.");
		}
		if (typeof(deviceId) === 'undefined' || deviceId === null) {
			throw new Exception(Errors.MESSAGING_FAILURE, "Invalid deviceId.");
		}
		if (typeof(email) === 'undefined' || email === null) {
			throw new Exception(Errors.MESSAGING_FAILURE, "Invalid email.");
		}
		var uri = homeUrl + "/subscribers";
		jsonParam = {
			"subscriptionService": {
				"subscribe": {
					"sid": pnsToken,
					"appId": this.getKmsAppId(),
					"ufid": email,
					"osType": osType,
					"deviceId": deviceId
				}
			}
		};
		logger.log(JSON.stringify(jsonParam));
		var headers = {
			"Content-Type": "application/json"
		};
		var payload = {
			postdata: JSON.stringify(jsonParam)
		};
		networkProvider.post(uri,
			payload,
			headers,
			function(data) {
				KSID = data.id;
				konyRef.getDataStore().setItem(dsKey, KSID);
				logger.log("Device registered to KMS with KSID:" + KSID);
				kony.sdk.verifyAndCallClosure(successCallback, data);
			},
			function(data, status, error) {

				logger.log("ERROR: Failed to register device for KMS");
				var errorObj = {};
				errorObj.data = data;
				errorObj.status = status;
				errorObj.error = error;
				kony.sdk.verifyAndCallClosure(failureCallback, errorObj);
			});
	};
	/**
	 * unregister success callback method.
	 * @callback unregisterSuccessCallback
	 */

	/**
	 * unregister service failure callback method.
	 * @callback unregisterFailureCallback
	 */
	/**
	 * unregister to messaging service
	 * @param {unregisterSuccessCallback} successCallback - Callback method on success
	 * @param {unregisterFailureCallback} failureCallback - Callback method on failure
	 */
	this.unregister = function(successCallback, failureCallback) {
		var uri = homeUrl + "/subscribers"
		var sub = {
			"ksid": this.getKSID()
		};
		var inp = {
			"subscriptionService": {
				"unsubscribe": sub
			}
		};
		var headers = {
			"Content-Type": "application/json"
		};
		var payload = {
			postdata: JSON.stringify(inp)
		}
		logger.log("unsubscribe uri:" + uri);
		konyRef.getDataStore().removeItem(dsKey);
		networkProvider.post(uri,
			payload,
			headers,
			function(data) {
				kony.sdk.verifyAndCallClosure(successCallback, data);
			},
			function(data, status, error) {

				logger.log("ERROR: Failed to unregister device for KMS");
				var errorObj = {};
				errorObj.data = data;
				errorObj.status = status;
				errorObj.error = error;
				kony.sdk.verifyAndCallClosure(failureCallback, errorObj);
			});
	};
	/**
	 * Fetch all messages success callback method.
	 * @callback fetchAllMessagesSuccessCallback
	 * @param {json} response - Fetch all messages response
	 */

	/**
	 * Fetch all messages service failure callback method.
	 * @callback fetchAllMessagesFailureCallback
	 * @param {json} error - Error information
	 */
	/**
	 * Fetch all messages
	 * @param {fetchAllMessagesSuccessCallback} successCallback - Callback method on success
	 * @param {fetchAllMessagesFailureCallback} failureCallback - Callback method on failure
	 */
	this.fetchAllMessages = function(startIndex, pageSize, successCallback, failureCallback) {
		var uri = homeUrl + "/messages/fetch";

		var data = {
			"ksid": this.getKSID(),
			"startElement": startIndex,
			"elementsPerPage": pageSize
		};
		var headers = {
			"Content-Type": "application/json"
		};
		var payload = {
			postdata: JSON.stringify(data)
		};

		networkProvider.post(uri, payload, headers, successCallback, failureCallback);
	};
	/**
	 * Update location service success callback method.
	 * @callback updateLocationSuccessCallback
	 * @param {json} response - Update location response
	 */

	/**
	 * Update location service failure callback method.
	 * @callback updateLocationFailureCallback
	 * @param {json} error - Error information
	 */
	/**
	 * Update the location
	 * @param {string} latitude - Latitude value
	 * @param {string} longitude - Longitude value
	 * @param {string} locationName - Location name
	 * @param {updateLocationSuccessCallback} successCallback - Callback method on success
	 * @param {updateLocationFailureCallback} failureCallback - Callback method on failure
	 */
	this.updateGeoLocation = function(latitude, longitude, locationName, successCallback, failureCallback) {
		if (typeof(latitude) === 'undefined' || latitude === null) {
			throw new Exception(MESSAGING_FAILURE, "invalid latitude paramter value");
		}
		if (typeof(longitude) === 'undefined' || longitude === null) {
			throw new Exception(MESSAGING_FAILURE, "invalid longitude paramter value");
		}
		if (typeof(locationName) === 'undefined' || locationName === null) {
			throw new Exception(MESSAGING_FAILURE, "invalid locationName paramter value");
		}

		var uri = homeUrl + "/location";
		var data = {
			"ksid": this.getKSID(),
			"latitude": latitude,
			"locname": locationName,
			"longitude": longitude
		};
		var headers = {
			"Content-Type": "application/json"
		};

		var payload = {
			postdata: JSON.stringify(data)
		};
		logger.log("updateLocation payload: " + JSON.stringify(payload));
		networkProvider.post(uri, payload, headers, successCallback, failureCallback);
	};
	/**
	 * Mark meesage as read service success callback method.
	 * @callback markReadSuccessCallback
	 * @param {json} response - Mark meesage as read service response
	 */
	/**
	 * Mark meesage as read service failure callback method.
	 * @callback markReadFailureCallback
	 * @param {json} error - Error information
	 */
	/**
	 * Mark the message as read for a given message id
	 * @param {string} messageId - Message id
	 * @param {markReadSuccessCallback} successCallback - Callback method on success
	 * @param {markReadFailureCallback} failureCallback - Callback method on failure
	 */
	this.markMessageRead = function(fetchId, successCallback, failureCallback) {
		if (typeof(fetchId) === 'undefined' || fetchId === null) {
			throw new Exception(MESSAGING_FAILURE, "invalid fetchId paramter value");
		}
		var headers = {};
		headers["X-HTTP-Method-Override"] = "get";
		headers["Content-Type"] = "application/json";
		var uri = homeUrl + "/messages/open/" + fetchId;
		networkProvider.post(uri, null, headers, successCallback, failureCallback);

	};
	/**
	 * Message content service success callback method.
	 * @callback messageContentSuccessCallback
	 * @param {json} response - Message content service response
	 */
	/**
	 * Message content service failure callback method.
	 * @callback messageContentFailureCallback
	 * @param {json} error - Error information
	 */
	/**
	 * Fetches the message conetent for a given message id
	 * @param {string} messageId - Message id
	 * @param {messageContentSuccessCallback} successCallback - Callback method on success
	 * @param {messageContentFailureCallback} failureCallback - Callback method on failure
	 */
	this.fetchMessageContent = function(fetchId, successCallback, failureCallback) {
		if (typeof(fetchId) === 'undefined' || fetchId === null) {
			throw new Exception(MESSAGING_FAILURE, "invalid fetchId paramter value");
		}
		var uri = homeUrl + "/messages/content/" + fetchId;
		networkProvider.post(uri, null, null, successCallback, failureCallback);
	};
};
/**
 * Method to create the Metrics service instance with the provided service name.
 * @returns {MetricsService} Metrics service instance
 */
kony.sdk.prototype.getMetricsService = function() {
	if (!kony.sdk.isInitialized) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
	}
	if(!kony.sdk.isLicenseUrlAvailable) {
		throw new Exception(Errors.METRICS_FAILURE, "metrics is not enabled");
	}

	//var metricsServiceObject = null;
	if (this.metricsServiceObject) {
		return this.metricsServiceObject;
	}

	if (this.internalSdkObject) {
		//framework implementation
		this.metricsServiceObject = this.internalSdkObject.getMetricsService();
	} else {
		//sdk local implementation
		this.metricsServiceObject = new MetricsService(this);
	}
	return this.metricsServiceObject;
};

/**
 * Should not be called by the developer.
 * @class
 * @classdesc Metrics service instance for invoking the Metrics services.
 */
function MetricsService(konyRef) {
	var logger = new konyLogger();
	var url = konyRef.customReportingURL;
	if (typeof(url) === 'undefined') {
		throw new Exception(Errors.METRICS_FAILURE, "reporting url is undefined");
		return;
	}
	var networkProvider = new konyNetworkProvider();


	/**
	 * invoke the getUserId operation
	 */

	this.getUserId = function(userId) {
		return konyRef.getUserId();
	}

	//start of event api
	var eventFlowTag = "";
	var eventBufferMaxValue = 1000;
	var eventBufferAutoFlushValue = 15;
	var characterLengthLimit = 256;
	var eventConfig = {
		"confType": "BUFFER",
		"eventBufferAutoFlushCount": eventBufferAutoFlushValue,
		"eventBufferMaxCount": eventBufferMaxValue
	};
	var reportEventBufferArray = [];
	var reportEventBufferBackupArray = [];
	var retrievedDS = false;
	var eventBufferCount = 0;
	var eventTypeMap = {
		"formentry": "FormEntry",
		"formexit": "FormExit",
		"touch": "Touch",
		"servicerequest": "ServiceRequest",
		"serviceresponse": "ServiceResponse",
		"gesture": "Gesture",
		"orientation": "Orientation",
		"error": "Error",
		"exception": "Exception",
		"crash": "Crash",
		"custom": "Custom",
		"servicecall": "ServiceCall"
	};
	var errorCodeMap = {
		"1000": true,
		"1011": true,
		"1012": true,
		"1014": true,
		"1015": true,
		"1016": true
	};
	var currentSessionId = "";
	/**
	 * This method will take the a String to set a Flow Tag for the reported events.
	 * @param {string} flowTag - sets flow tag for reporting the events.
	 */
	this.setFlowTag = function(flowTag) {
		if (kony.sdk.isNullOrUndefined(flowTag)) {
			throw new Exception(Errors.METRICS_FAILURE, "Invalid value for event flow tag");
		} else if (flowTag.length <= characterLengthLimit) {
			eventFlowTag = flowTag;
		} else {
			throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + characterLengthLimit + " characters");
		}
	};

	/**
	 * This method will clear the flow tag set by the user previously.
	 */
	this.clearFlowTag = function() {
		eventFlowTag = "";
	};

	/**
	 * This method will return the a String to set a Flow Tag for the reported events.
	 * @return {string} flowTag - flow tag set by the user for reporting the events.
	 */
	this.getFlowTag = function() {
		return eventFlowTag;
	};

	/**
	 * This method will take the required values to set the event Configuration values.
	 * @param {string} confType - sets the Current Configuration Type
	 * 					possible values BUFFER or INSTANT.
	 * @param {number} eventBufferAutoFlushCount - event buffer count to auto flush the events
	 * 								possible values any positive integer
	 * 								Default value 15
	 * @param {number} eventBufferMaxCount - Maximum event buffer count to store the events
	 * 								possible values any positive integer
	 * 								Default value 1000
	 */
	this.setEventConfig = function(confType, eventBufferAutoFlushCount, eventBufferMaxCount) {
		if (kony.sdk.isNullOrUndefined(confType)) {
			throw new Exception(Errors.METRICS_FAILURE, "Config Type can not be null");
		} else {
			confType = confType.toUpperCase();
		}
		if (confType === "BUFFER") {
			eventConfig["confType"] = confType;
		} else {
			throw new Exception(Errors.METRICS_FAILURE, "Invalid value for config type");
		}
		if (!kony.sdk.isNullOrUndefined(eventBufferMaxCount) && typeof(eventBufferMaxCount) === "number" && eventBufferMaxCount > 0) {
			eventConfig["eventBufferMaxCount"] = eventBufferMaxCount;
		} else {
			throw new Exception(Errors.METRICS_FAILURE, "eventBufferMaxCount has to be a Number and greater than 0");
		}
		if (!kony.sdk.isNullOrUndefined(eventBufferAutoFlushCount) && typeof(eventBufferAutoFlushCount) === "number" && eventBufferAutoFlushCount > 0 && eventBufferAutoFlushCount <= eventBufferMaxCount) {
			eventConfig["eventBufferAutoFlushCount"] = eventBufferAutoFlushCount;
		} else if (eventBufferAutoFlushCount >= eventBufferMaxCount) {
			eventConfig["eventBufferMaxCount"] = 1000;
			throw new Exception(Errors.METRICS_FAILURE, "eventBufferAutoFlushCount can not be greater than eventBufferMaxCount");
		} else {
			throw new Exception(Errors.METRICS_FAILURE, "eventBufferAutoFlushCount has to be a Number and greater than 0");
		}
	};

	/**
	 * This method takes the event details from the developer and schedule it for sending to server as per Configuration values set by the developer.
	 * @param {string} evttype - Event Type for the reported event.
	 * @param {string} evtSubType - string literal for eventSubType(max 256 Chars)
	 * @param {string} formID -   string literal for formID(max 256 Chars)
	 * @param {string} widgetID - string literal for widgetID(max 256 Chars)
	 * @param {string} flowTag - string literal to override flow tag (max 256 Chars)
	 * @param {string} metaData - string to describe metaData
	 * @throws Exception
	 */

	this.sendEvent = function(evttype, evtSubType, formID, widgetID, flowTag, metaData) {
		if (reportEventBufferBackupArray.length === 0) {
			this.readFromDS();
		}
		eventBufferCount = reportEventBufferBackupArray.length + reportEventBufferArray.length;

		if (eventBufferCount === eventConfig["eventBufferMaxCount"]) {
			throw new Exception(Errors.DATA_STORE_EXCEPTION, "Reached maximum limit to store events");
			return;
		}
		var reportEventMap = {};
		reportEventMap.ts = kony.sdk.formatCurrentDate(new Date());
		evttype = evttype.toLowerCase();
		if (kony.sdk.isNullOrUndefined(eventTypeMap[evttype])) {
			throw new Exception(Errors.METRICS_FAILURE, "Invalid value for event type");
			return;
		} else {
			reportEventMap["evttype"] = eventTypeMap[evttype];
		}
		if (kony.sdk.isNullOrUndefined(evtSubType)) {
			reportEventMap["evtSubType"] = "";
		} else if (evtSubType.length <= characterLengthLimit) {
			reportEventMap["evtSubType"] = evtSubType;
		} else {
			throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + characterLengthLimit + " characters");
			return;
		}
		if (kony.sdk.isNullOrUndefined(formID)) {
			reportEventMap["formID"] = kony.application.getCurrentForm().id;
		} else if (formID.length <= characterLengthLimit) {
			reportEventMap["formID"] = formID;
		} else {
			throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + characterLengthLimit + " characters");
			return;
		}
		if (kony.sdk.isNullOrUndefined(widgetID)) {
			reportEventMap["widgetID"] = "";
		} else if (widgetID.length <= characterLengthLimit) {
			reportEventMap["widgetID"] = widgetID;
		} else {
			throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + characterLengthLimit + " characters");
			return;
		}
		if (kony.sdk.isNullOrUndefined(flowTag)) {
			reportEventMap["flowTag"] = this.getFlowTag();
		} else if (flowTag.length <= characterLengthLimit) {
			reportEventMap["flowTag"] = flowTag;
		} else {
			throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + characterLengthLimit + " characters");
			return;
		}
		reportEventMap.SID = currentSessionId;
		reportEventMap.metaData = metaData;
		//checking each event data is a proper json or not
		// if (!kony.sdk.isJson(reportEventMap)) {
		// 	throw new Exception(Errors.METRICS_FAILURE, "Invalid json string passed for events data");
		// }

		reportEventBufferArray.push(reportEventMap);

		if (reportEventBufferArray.length % eventConfig["eventBufferAutoFlushCount"] === 0) {
			this.flushEvents();
		}
	};

	/**
	 * This method will send the buffered events to the server at once.
	 */

	this.flushEvents = function() {
		var logger = new konyLogger();
		var ref = this;
		if (reportEventBufferBackupArray.length === 0) {
			ref.readFromDS();
		}
		if (reportEventBufferBackupArray.length === 0 && reportEventBufferArray.length === 0) {
			logger.log("There are no events to flush");
			return;
		}
		var payload = kony.sdk.getPayload(kony.sdk.getCurrentInstance());
		var params = {};
		if (reportEventBufferArray.length !== 0) {
			ref.pushEventsToBufferArray();
		}
		var headers = {
			"Content-Type": "application/x-www-form-urlencoded"
		};
		params.httpheaders = headers;
		payload.events = reportEventBufferBackupArray;
		payload.svcid = "SendEvents";
		payload.rsid = reportEventBufferBackupArray[0].SID;
		params.konyreportingparams = JSON.stringify(payload);
		kony.net.invokeServiceAsync(kony.sdk.currentInstance.customReportingURL, params, flushCallback);

		function flushCallback(status, response) {
			if (status === 400) {
				if (response.opstatus === 0) {
					ref.clearBufferEvents();
				} else if (errorCodeMap[response.opstatus]) {
					ref.saveInDS();
				} else {
					ref.clearBufferEvents();
				}
			} else if (status === 300) {
				ref.saveInDS();
			}
		}
	};

	/*Stores event data in Data Store on failure of service Call*/
	this.saveInDS = function() {
		var eventsToSave = [];
		eventsToSave.push(JSON.stringify(reportEventBufferBackupArray));
		kony.ds.save(eventsToSave, "konyMetricsBuffer");
		reportEventBufferBackupArray = [];
	};

	/*Clearing events sent to server */
	this.clearBufferEvents = function() {
		reportEventBufferBackupArray = [];
		kony.ds.remove("konyMetricsBuffer");
	};

	/*Reading any pending events from Data Store */
	this.readFromDS = function() {
		var eventsFromDS = kony.ds.read("konyMetricsBuffer");
		if (eventsFromDS !== null) {
			var pushToArray = [];
			pushToArray.push(JSON.parse(eventsFromDS[0]));
			reportEventBufferBackupArray.push.apply(reportEventBufferBackupArray, pushToArray);
		}
	};

	/*Pushes events received from user to BufferBackupArray which will be flushed to server */
	this.pushEventsToBufferArray = function() {
		reportEventBufferBackupArray.push.apply(reportEventBufferBackupArray, reportEventBufferArray);
		reportEventBufferArray = [];
	};

	/**
	 * This method will return the a List of the buffered events.
	 * @return {object} events - list of events stored in buffer.
	 */

	this.getEventsInBuffer = function() {
		var eventsFromDS = kony.ds.read("konyMetricsBuffer");
		var eventsToReturn = [];
		if (!kony.sdk.isNullOrUndefined(eventsFromDS)) {
			eventsToReturn.push(JSON.parse(eventsFromDS[0]));
		}
		if (reportEventBufferArray.length !== 0) {
			eventsToReturn.push.apply(eventsToReturn, reportEventBufferArray);
		}
		if (eventsToReturn.length !== 0) {
			return eventsToReturn;
		} else {
			return null;
		}
	};

	/**
	 * invoke the sendCustomMetrics operation
	 * @param {string} reportingGroupID - reporting Group ID
	 * @param {object} metrics - metrics being reported
	 */
	this.sendCustomMetrics = function(reportingGroupID, metrics) {
		if (typeof(metrics) !== "object") {
			throw new Exception(Errors.METRICS_FAILURE, "Invalid type for metrics data.");
			return;
		}
		var sessionID = currentSessionId;
		var reportData = konyRef.getDataStore().getItem("konyCustomReportData");
		if (!reportData) {
			reportData = new Array();
		} else {
			reportData = JSON.parse(reportData);
		}

		konyRef.getDataStore().removeItem("konyCustomReportData");

		var currentData = {};
		currentData.ts = kony.sdk.formatCurrentDate(new Date().toString());
		currentData.fid = reportingGroupID;
		currentData.metrics = metrics;
		currentData.rsid = sessionID;
		reportData.push(currentData);
		//nyRef.getDataStore().setItem("konyCustomReportData",JSON.stringify(reportData));
		var payload = kony.sdk.getPayload(konyRef);
		if (kony.sdk.metric) {
			if (kony.sdk.metric.reportEventBufferBackupArray.length === 0) {
				kony.sdk.metric.readFromDS();
			}
			kony.sdk.metric.pushEventsToBufferArray();
			payload.events = kony.sdk.metric.reportEventBufferBackupArray;
		}
		payload.reportData = reportData;
		payload.rsid = sessionID;
		payload.svcid = "CaptureKonyCustomMetrics";
		// if (!kony.sdk.isJson(payload)) {
		// 	throw new Exception(Errors.METRICS_FAILURE, "Invalid json string passed for custom metrics");
		// }
		var newData = {};
		newData["konyreportingparams"] = JSON.stringify(payload);

		networkProvider.post(url, newData, {
				"Content-Type": "application/x-www-form-urlencoded"
			}, function(res) {
				//successcallback
				//konyRef.getDataStore().removeItem("konyCustomReportData");
				if (kony.sdk.metric) {
					kony.sdk.metric.clearBufferEvents();
				}
				logger.log("metric data successfully sent" + JSON.stringify(res));
			},
			function(res) {

				var storeData = konyRef.getDataStore().getItem("konyCustomReportData");
				if (!storeData) {
					storeData = new Array();
				} else {
					storeData = JSON.parse(storeData);
				}
				if (kony.sdk.metric) {
					if (kony.sdk.metric.errorCodeMap[res.opstatus]) {
						kony.sdk.metric.saveInDS();
					}
				}
				storeData.push(reportData);
				konyRef.getDataStore().setItem("konyCustomReportData", JSON.stringify(storeData));

				logger.log("Unable to send metric report" + JSON.stringify(res));
			}, true);
	};

	/**
	 * This method takes the event details from the developer and schedule it for sending to server as per Configuration values set by the developer.
	 * @param {string} errorCode - errorCode of the reported error. Can be empty if not applicable
	 * @param {string} errorType -   errorType of the reported error. Can be empty if not applicable
	 * @param {string} errorMessage - errorMessage of the reported error. Can be empty if not applicable
	 * @param {json} errorDetails - errorDetails of the reported error as a json string that can have key-value pairs for the following
					keys errfile, errmethod, errline, errstacktrace, formID, widgetID, flowTag.
	 * @throws Exception
	 */

	this.reportError = function(errorCode, errorType, errorMessage, errorDetails) {
		var metaData = {};
		metaData.errorcode = errorCode ? errorCode : "";
		metaData.errmsg = errorMessage ? errorMessage : "";
		if (errorDetails && kony.sdk.isJson(errorDetails)) {
			metaData.errfile = errorDetails.errfile ? errorDetails.errfile : "";
			metaData.errmethod = errorDetails.errmethod ? errorDetails.errmethod : "";
			metaData.errline = errorDetails.errline ? errorDetails.errline : "";
			metaData.errstacktrace = errorDetails.errstacktrace ? errorDetails.errstacktrace : "";
			metaData.errcustommsg = errorDetails.errcustommsg ? errorDetails.errcustommsg : "";
			var formID = errorDetails.formID ? errorDetails.formID : "";
			var widgetID = errorDetails.widgetID ? errorDetails.widgetID : "";
			var flowTag = errorDetails.flowTag ? errorDetails.flowTag : "";
			var evtSubType = errorType ? errorType : "";
			this.sendEvent("Error", evtSubType, formID, widgetID, flowTag, metaData);
		} else {
			throw new Exception(Errors.METRICS_FAILURE, "Invalid json string passed for error details.");
		}
	};


	/**
	 * This method takes the event details from the developer and schedule it for sending to server as per Configuration values set by the developer.
	 * @param {string} exceptionCode - Code for the reported exception. Can be empty if not applicable
	 * @param {string} exceptionType -   Type of the reported exception. Can be empty if not applicable
	 * @param {string} exceptionMessage - Message of the reported exception. Can be empty if not applicable
	 * @param {json}   exceptionDetails - Details of the reported exception as a JSON string that can have key-value pairs for the
					following keys exceptioncode, exceptionfile, exceptionmethod, exceptionline,
					exceptionstacktrace, formID, widgetID, flowTag.
	 * @throws Exception
	 */

	this.reportHandledException = function(exceptionCode, exceptionType, exceptionMessage, exceptionDetails) {
		var metaData = {};
		metaData.exceptioncode = exceptionCode ? exceptionCode : "";
		metaData.exceptionmsg = exceptionMessage ? exceptionMessage : "";
		if (exceptionDetails && kony.sdk.isJson(exceptionDetails)) {
			metaData.errfile = exceptionDetails.errfile ? exceptionDetails.errfile : "";
			metaData.errmethod = exceptionDetails.errmethod ? exceptionDetails.errmethod : "";
			metaData.errline = exceptionDetails.errline ? exceptionDetails.errline : "";
			metaData.errstacktrace = exceptionDetails.errstacktrace ? exceptionDetails.errstacktrace : "";
			metaData.errcustommsg = exceptionDetails.errcustommsg ? exceptionDetails.errcustommsg : "";
			var formID = exceptionDetails.formID ? exceptionDetails.formID : "";
			var widgetID = exceptionDetails.widgetID ? exceptionDetails.widgetID : "";
			var flowTag = exceptionDetails.flowTag ? exceptionDetails.flowTag : "";
			var evtSubType = exceptionType ? exceptionType : "";
			this.sendEvent("Exception", evtSubType, formID, widgetID, flowTag, metaData);
		} else {
			throw new Exception(Errors.METRICS_FAILURE, "Invalid json string passed for exception details.");
		}
	};

	/**
	 * sets the current sessionId
	 * @param {string} sessionId
	 */

	this.setSessionId = function(sessionId) {
		if (sessionId) {
			currentSessionId = sessionId;
		}
	}

	/**
	 * get the current sessionID
	 *
	 */


	this.getSessionId = function() {
		return currentSessionId;
	}

	/**
	 * stub method used for event tracking
	 *
	 */
	this.setEventTracking = function(eventTypes) {
		// Stub.  This is implemented in native->js binding
	}
}


//stub method
kony.sdk.initiateSession = function() {
	return;
}
/**
 * Method to create the Reporting service instance with the provided service name.
 * @returns {ReportingService} Reporting service instance
 */
kony.sdk.prototype.getReportingService = function() {
	if (!kony.sdk.isInitialized) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
	}
	return new ReportingService(this);
};
/**
 * Should not be called by the developer.
 * @class
 * @classdesc Reporting service instance for invoking the reporting services.
 */
function ReportingService(konyRef) {
	var logger = new konyLogger();
	var url = konyRef.customReportingURL;
	if (typeof(url) === 'undefined') {
		throw new Exception(Errors.METRICS_FAILURE, "reporting url is undefined");
		return;
	}
	var networkProvider = new konyNetworkProvider();
	/**
	 * invoke the setUserId operation
	 * @param {string} userId - userId specified by user
	 */

	this.setUserId = function(userId) {
		konyRef.setCurrentUserId(userId);
	}

	/**
	 * invoke the getUserId operation
	 */

	this.getUserId = function(userId) {
		return konyRef.getUserId();
	}

	/**
	 * invoke the report operation
	 * @param {string} reportingGroupID - reporting Group ID
	 * @param {object} metrics - metrics being reported
	 */
	this.report = function(reportingGroupID, metrics) {
		if (typeof(metrics) !== "object") {
			throw new Exception(Errors.METRICS_FAILURE, "Invalid type for metrics data.");
			return;
		}
		var sessionID = kony.ds.read("konyUUID");
		var reportData = konyRef.getDataStore().getItem("konyCustomReportData");
		if (!reportData) {
			reportData = new Array();
		} else {
			reportData = JSON.parse(reportData);
		}

		konyRef.getDataStore().removeItem("konyCustomReportData");

		var currentData = {};
		currentData.ts = kony.sdk.formatCurrentDate(new Date().toString());
		currentData.fid = reportingGroupID;
		currentData.metrics = metrics;
		currentData.rsid = sessionID;
		reportData.push(currentData);
		//nyRef.getDataStore().setItem("konyCustomReportData",JSON.stringify(reportData));
		var payload = kony.sdk.getPayload(konyRef);
		if (kony.sdk.metric) {
			if (kony.sdk.metric.reportEventBufferBackupArray.length === 0) {
				kony.sdk.metric.readFromDS();
			}
			kony.sdk.metric.pushEventsToBufferArray();
			payload.events = kony.sdk.metric.reportEventBufferBackupArray;
		}
		payload.reportData = reportData;
		payload.rsid = sessionID;
		payload.svcid = "CaptureKonyCustomMetrics";
		// if (!kony.sdk.isJson(payload)) {
		// 	throw new Exception(Errors.METRICS_FAILURE, "Invalid json string passed for custom metrics");
		// }
		var newData = {};
		newData["konyreportingparams"] = JSON.stringify(payload);

		networkProvider.post(url, newData, {
				"Content-Type": "application/x-www-form-urlencoded"
			}, function(res) {
				//successcallback
				//konyRef.getDataStore().removeItem("konyCustomReportData");
				if (kony.sdk.metric) {
					kony.sdk.metric.clearBufferEvents();
				}
				logger.log("metric data successfully sent" + JSON.stringify(res));
			},
			function(res) {

				var storeData = konyRef.getDataStore().getItem("konyCustomReportData");
				if (!storeData) {
					storeData = new Array();
				} else {
					storeData = JSON.parse(storeData);
				}
				if (kony.sdk.metric) {
					if (kony.sdk.metric.errorCodeMap[res.opstatus]) {
						kony.sdk.metric.saveInDS();
					}
				}
				storeData.push(reportData);
				konyRef.getDataStore().setItem("konyCustomReportData", JSON.stringify(storeData));

				logger.log("Unable to send metric report" + JSON.stringify(res));
			}, true);
	}

}


//stub method
kony.sdk.initiateSession = function() {
	return;
}
/**
 * Method to create the sync service instance.
 * @returns {SyncService} sync service instance
 */
kony.sdk.prototype.getSyncService = function() {
	if (!kony.sdk.isInitialized) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
	}
	return new konySdkSyncService(this);

}

function konySdkSyncService(konyRef) {
	var SyncProvider = konyRef.sync;
	if (!SyncProvider) {
		throw new Exception(Errors.SYNC_FAILURE, "invalid sync provider in serviceDoc");
	}

	//generic apis
	this.init = function(initSuccess, initFailure) {
		sync.init(initSuccess, initFailure);
	}

	this.reset = function(resetSuccess, resetFailure) {
		sync.reset(resetSuccess, resetFailure);
	}

	this.cancelPendingChunkRequests = function(successCallback, errorCallback) {
		sync.cancelPendingChunkRequests(successCallback, errorCallback);
	}

	this.stopSession = function(successCallback) {
		sync.stopSession(successCallback);
	}

	this.rollbackPendingLocalChanges = function(successCallback, errorCallback) {
		sync.rollbackPendingLocalChanges(successCallback, errorCallback);
	}

	this.getPendingAcknowledgement = function(successCallback, errorCallback) {
		sync.getPendingAcknowledgement(successCallback, errorCallback);
	}

	this.getPendingUpload = function(successCallback, errorCallback) {
		sync.getPendingUpload(successCallback, errorCallback);
	}

	this.getDeferredUpload = function(successCallback, errorCallback) {
		sync.getDeferredUpload(successCallback, errorCallback);
	}

	this.getAllPendingUploadInstances = function(retrieveOnlyCount, successcallback, errorcallback) {
		sync.getAllPendingUploadInstances(retrieveOnlyCount, successcallback, errorcallback);
	}

	this.executeSelectQuery = function(query, successcallback, errorcallback) {
		sync.executeSelectQuery(query, successcallback, errorcallback);
	}

	var syncServiceAppid = SyncProvider["appId"];
	var syncServiceUrl = SyncProvider["url"] + "/";

	function genericErrorCallback(res) {
			var logger = new konyLogger();
			logger.log("error occurred in refreshing claims token.. Please call login again " + JSON.stringify(res));
			alert("error occurred in refreshing claims token.. Please call login again " + JSON.stringify(res));
		}
		//modified api
	this.startSession = function(config) {
		var errorCallback;
		if (config.onsyncerror) {
			errorCallback = config.onsyncerror;
		} else {
			errorCallback = genericErrorCallback;
		}
		kony.sdk.claimsRefresh(sdkStartSession, errorCallback);

		function sdkStartSession() {
			config = processConfig(config);
			sync.startSession(config);
		}
	}

	this.performUpgrade = function(config) {
		var errorCallback;
		if (config.onperformupgradeerror) {
			errorCallback = config.onperformupgradeerror;
		} else {
			errorCallback = genericErrorCallback;
		}
		kony.sdk.claimsRefresh(sdkPerformUpgrade, errorCallback);

		function sdkPerformUpgrade() {
			config = processConfig(config);
			sync.performUpgrade(config);
		}
	}

	this.isUpgradeRequired = function(config) {
		var errorCallback;
		if (config.isupgraderequirederror) {
			errorCallback = config.isupgraderequirederror;
		} else {
			errorCallback = genericErrorCallback;
		}
		kony.sdk.claimsRefresh(sdkIsUpgradeRequired, errorCallback);

		function sdkIsUpgradeRequired() {
			config = processConfig(config);
			sync.isUpgradeRequired(config);
		}

	}

	function processConfig(config) {
		var tempConfig = config;
		tempConfig.serverurl = syncServiceUrl;
		tempConfig.appid = syncServiceAppid;
		tempConfig.authtoken = konyRef.currentClaimToken;
		return tempConfig;
	}
}
function OAuthHandler(serviceUrl, providerName, callback, type) {
	var popBasic = {
		id: "popUp",
		skin: null,
		isModal: false,
		transparencyBehindThePopup: 80
	};
	var popLayout = {
		containerWeight: 100,
		padding: [5, 5, 5, 5],
		"paddingInPixel": true
	};
	var popPSP = {};
	var urlType = "/" + type + "/";
	//to do.. this is a workaround for android browser issue.. need to refactor this code
	var browserSF = new kony.ui.Browser({
		"id": "browserSF",
		"text": "Browser",
		"isVisible": true,
		"detectTelNumber": true,
		"screenLevelWidget": false,
		"enableZoom": false
	}, {
		"margin": [0, 0, 0, 0],
		"marginInPixel": true,
		"paddingInPixel": true,
		"containerWeight": 100
	}, {});
	//browserSF.handleRequest = function(){};
	var popUp = new kony.ui.Popup(popBasic, popLayout, popPSP);
	popUp.add(browserSF);
	popUp.show();

	var urlConf = {
		URL: serviceUrl + urlType + "login?provider=" + providerName,
		requestMethod: constants.BROWSER_REQUEST_METHOD_GET
	};
	browserSF.requestURLConfig = urlConf;
	browserSF.handleRequest = handleRequestCallback;

	function handleRequestCallback(browserWidget, params) {

		var originalUrl = params["originalURL"];
		if (typeof(params.queryParams) !== "undefined" && typeof(params.queryParams.code) !== "undefined") {
			// make request for tokens
			popUp.dismiss();
			var headers = {};
			if (type == "oauth2" || type == "saml") {
				headers["Content-Type"] = "application/x-www-form-urlencoded"
			}
			callback(urlType + "token", {
				code: decodeURIComponent(params.queryParams.code)
			}, headers);
		}
		return false;

	}
}
var KNYMobileFabric = null;
var KNYMetricsService = null;
kony.setupsdks = function(initConfig, successCallBack, errorCallBack) {

  // var KNYMobileFabric = null;
  // var KNYMetricsService = null;

  var getServiceDocNonMFApp = function(initConfig) {
    var serviceDoc = new kony.sdk.serviceDoc();

    serviceDoc.setAppId(initConfig.appConfig.appId);
    serviceDoc.setBaseId(initConfig.appConfig.appId);
    serviceDoc.setAppName(initConfig.appConfig.appName);

    serviceDoc.setReportingService(kony.sdk.constants.reportingType.session, getLicenseUrl(initConfig.appConfig));
    serviceDoc.setReportingService(kony.sdk.constants.reportingType.custom, getMetricsUrl(initConfig.appConfig));

    return serviceDoc.toJSON();
  };

  var getLicenseUrl = function(appConfig) {
    var url = "";
    if (appConfig.isturlbase) {
      url = appConfig.isturlbase + "/IST";
    } else if (appConfig.secureurl) {
      url = getFromServerUrl(appConfig.secureurl, "IST");
    } else if (appConfig.url) {
      url = getFromServerUrl(appConfig.url, "IST");
    }
    return url;
  }

  var getMetricsUrl = function(appConfig) {
    var url = "";
    if (appConfig.isturlbase) {
      url = appConfig.isturlbase + "/CMS";
    } else if (appConfig.secureurl) {
      url = getFromServerUrl(appConfig.secureurl, "CMS");
    } else if (appConfig.url) {
      url = getFromServerUrl(appConfig.url, "CMS");
    }
    return url;
  }

  var getFromServerUrl = function(url, path) {
    // ServerURL for non-mf has /mwservlet appended after the context path.
    // We need to remove it to get the base server url
    //url = url.replace(/mwservlet\/*$/i, "");
    //return url + path;
    var newUrl = "";
    var exactSubString = url.match(/mwservlet/i);
    if (exactSubString) {
      var exactSubStringLength = "mwservlet".length;
      var lastSubStringIndex = url.lastIndexOf(exactSubString);
      var subString = url.slice(0, lastSubStringIndex);
      var index = (lastSubStringIndex + exactSubStringLength);
      var subString2 = url.slice(index, url.length);
      var has = /[a-zA-Z0-9]/.test(subString2);
      if (!has) {
        newUrl = subString + path;
      } else {
        newUrl = url;
      }
    } else {
      newUrl = url;
    }
    return newUrl + path;
  };

  var konyAPMSuccessCallBack = function(metricsObject, initConfig) {
    kony.print("Initializing event tracking");
    KNYMetricsService = metricsObject;
    if(KNYMetricsService) {
      KNYMetricsService.setEventTracking(initConfig.eventTypes);
    }

  };

  var initKNYMobileFabric = function(initConfig) {
    KNYMobileFabric = new kony.sdk();
    clientParams = {};
    clientParams.aid = appConfig.appId;
    clientParams.aname = appConfig.appName;
    KNYMobileFabric.setClientParams(clientParams);
  }

  var isServiceDocPresentInAppConfig = function(initConfig) {
    if ((initConfig) && (initConfig.appConfig) && (initConfig.appConfig.serviceDoc)) {
      return true;
    }
    return false;
  }

  var sdkInit = function(initConfig, successcallback, failurecallback) {

    if (KNYMobileFabric == null) {
      initKNYMobileFabric(initConfig);
    }
    if (initConfig && initConfig.appConfig && (getLicenseUrl(initConfig.appConfig) === "")) {
        if(kony.license && kony.license.setIsLicenseUrlAvailable) {
          kony.license.setIsLicenseUrlAvailable(false);
          kony.sdk.isLicenseUrlAvailable = false;
        }
    }
    if (kony.sdk.isLicenseUrlAvailable && kony.license.createSession) {
        kony.license.createSession();
    }
    if (isServiceDocPresentInAppConfig(initConfig)) {
      initWithServiceDocHelper(initConfig.appConfig.serviceDoc, successcallback, failurecallback);
    } else if (initConfig.isMFApp) {
      KNYMobileFabric.init(initConfig.appKey, initConfig.appSecret, initConfig.serviceUrl, function(data) {
        var MetricsService = KNYMobileFabric.getMetricsService();
        if (kony.license.registerChangeListener) {
          kony.license.registerChangeListener(KNYMobileFabric.sessionChangeHandler);
        }
        if (successcallback)
          successcallback(MetricsService, initConfig);
      }, function(error) {
        if (failurecallback)
          failurecallback(error);
      });
    } else {
      initWithServiceDocHelper(getServiceDocNonMFApp(initConfig), successcallback, failurecallback);
    }
  };


  var initWithServiceDocHelper = function(serviceDoc, successcallback, failurecallback) {
    try {
      KNYMobileFabric.initWithServiceDoc(null, null, serviceDoc);
      var MetricsService = null;
      if (kony.sdk.isLicenseUrlAvailable) {
        MetricsService = KNYMobileFabric.getMetricsService();
        if (kony.license.registerChangeListener) {
          kony.license.registerChangeListener(KNYMobileFabric.sessionChangeHandler);
        }
      }
      if (successcallback)
          successcallback(MetricsService, initConfig);
    } catch (error) {
      if (failurecallback)
        failurecallback(error);
    }
  }


  /*
   * isMFApp -- boolean to indicate app is being built for MFapp as backend or plain Konyserver
   * appConfig -- set to appConfig of startup.js
   *
   * --MF Parameters--
   * serviceUrl -- mf appconfig url  
   * appKey -- set to App Key for MF app scenario
   * appSecret -- set to App Secret for MF app scenario
   *
   * -- For APM --
   * eventTypes -- This should be set to comma separated values chosen in the IDE for events chosen for automatic tracking
   *
   * Examples
   * var sdkInitConfigForMF = { 
   *    "isMFApp": true,
        "appConfig" : appconfig,

        "appKey" :"<appkey fetched from MF>",
        "appSecret":"<appsecret fetched from MF>",
        "serviceUrl" : "<appconfig url of the form https://100000013.auth.sit2-konycloud.com/appconfig>",
        "eventTypes" :   ["FormEntry","FormExit","Touch","ServiceRequest","ServiceResponse","Gesture","Orientation","Error","Crash"]
        }
   * var sdkInitConfigForNonMF = {
        "isMFApp": false,
        "appConfig" : appconfig

        "eventTypes" :   ["FormEntry","FormExit","Touch","ServiceRequest","ServiceResponse","Gesture","Orientation","Error","Crash"]
        }               
   */

  sdkInit(initConfig,
    function(metricsObject, initConfig) {
      kony.print("sdk initialization done");
      konyAPMSuccessCallBack(metricsObject, initConfig);
      if (successCallBack)
        successCallBack(KNYMobileFabric);
    },
    function(errorObj) {
      kony.print("Error in setup" + errorObj ? errorObj.toString() : "");
      if (errorCallBack)
        errorCallBack(errorObj);
    });

};
function konyLogger() {
		this.log = function(text) {
			if (kony.sdk.isDebugEnabled) {
				kony.print(text);
			}
		}
	}
	/*
	function konyNetworkProvider() {
		//var logger = new konyLogger();
		this.post = function (url, params, headers, successCallback, failureCallback, includeReportingParams) {

			function networkCallbackStatus(status, result) {
				if (status === 400) {
					logger.log("Response:" + JSON.stringify(result));
					if (result.opstatus !== null && result.opstatus !== undefined && result.opstatus !== 0) {
						failureCallback(result);
					} else {
						successCallback(result);
					}
				}
			}
			if (headers === undefined || headers === null) {
				headers = {}
			} 
			if (headers["Content-Type"] === null || headers["Content-Type"] === undefined) {
				//headers["Content-Type"] = "application/json"; //setting to default header
				//headers["Content-Type"] = "application/x-www-form-urlencoded"; //setting to default header
			}
			// headers = JSON.stringify(headers);

			if (params === undefined || params === null) {
				params = {};
			}
			
			if(typeof(headers) !== 'undefined' && headers !== null){
				params.httpheaders = headers;
			}
			
			var sprop = "konyreportingparams";

		  if (includeReportingParams) {

			if (params[sprop]) {
				//This means is this is a reporting service. The license.js will cleanup this variable.
				// To ensure that our values are nto overridden we take a back up of the same.
				params.konysdktemparams = params[sprop];
				if (Object.defineProperty) {
					Object.defineProperty(params, sprop, {
						get : function () {
							return this.konysdktemparams;
						},
						set : function (value) {}
					});
				} else {
					params.__defineGetter__(sprop, function () {
						return this.konysdktemparams;
					});
					params.__defineSetter__(sprop, function (value) {});
				}
			}
		  } else {
			if (Object.defineProperty) {
				Object.defineProperty(params, sprop, {
					get : function () {},
					set : function () {}
				});
			} else {
				params.__defineGetter__(sprop, function () {});
				params.__defineSetter__(sprop, function () {});
			}
		  }
			
	//#ifdef desktopweb
			//To be removed:hack for desktopweb case
		   if(url.indexOf("?") == -1)
				  url = url + "?/CMS";
			else
				  url = url + "&/CMS";
	//#endif
			logger.log("Hitting " + url + " with params " + JSON.stringify(params));
			kony.net.invokeServiceAsync(url, params, networkCallbackStatus, null);
		};
	};
	*/
function konyNetworkProvider() {
	this.post = function(url, params, headers, successCallback, failureCallback) {
		if (typeof(XMLHttpRequest) !== 'undefined') {
			konyXMLHttpRequestWrapper(url, params, headers, successCallback, failureCallback);
		} else {
			konyNetHttpRequest(url, params, headers, successCallback, failureCallback);
		}
	}
};

function konyXMLHttpRequestWrapper(url, params, headers, successCallback, failureCallback) {
	var logger = new konyLogger();
	if (typeof(window) === 'undefined') {
		logger.log("window is not defined.");
		return;
	}
	var userAgent = window.navigator.userAgent;
	var IE = userAgent.indexOf("MSIE ");
	if (IE != -1 && typeof(xdomain) === "undefined") {

		function callback(xdomain) {
			logger.log("xdomain is " + xdomain);
			xdomain.debug = true;
			var slaves = kony.sdk.getXdomainSlaves();
			xdomain.slaves(slaves);
			konyXMLHttpRequest(url, params, headers, successCallback, failureCallback)
		}
		xdomain_init(callback);

	} else {
		konyXMLHttpRequest(url, params, headers, successCallback, failureCallback)
	}
};

function konyNetHttpRequest(url, params, headers, successCallback, failureCallback) {
	var logger = new konyLogger();
	var paramsTable = null;
	var httpRequest = new kony.net.HttpRequest();
	var isInvalidJSON = false;
	httpRequest.open(constants.HTTP_METHOD_POST, url);

	function localRequestCallback(result) {
		var readyState = Number(httpRequest.readyState.toString());
		var status = Number(httpRequest.status.toString());
		if (readyState === 4) {
			var response = null;
			if (result && result.response) {
				response = result.response;
			} else if (httpRequest.response) {
				response = httpRequest.response;
			}
			if (response && typeof(response) === 'string') {
				if(kony.sdk.isJson(response)){
					response = JSON.parse(response);
				}
				else{
					isInvalidJSON = true;
				}
			}
			if(response && !(isInvalidJSON)){
				response.httpresponse = {};
				response.httpresponse.headers = httpRequest.getAllResponseHeaders();
				response.httpresponse.url = url;
				response.httpresponse.responsecode = status;
			}
            if(isInvalidJSON || (!response &&  status == 200 )){
               var errorMessage={};
                    errorMessage.httpresponse = {};
                    errorMessage["opstatus"]=kony.sdk.errorcodes.invalid_json_code;
                    errorMessage["errmsg"]= kony.sdk.errormessages.invalid_json_message;
                    errorMessage["errcode"]=kony.sdk.errorcodes.invalid_json_code;
                    errorMessage["httpStatusCode"] = status;
                    errorMessage.httpresponse["response"]= response;
                    errorMessage.httpresponse.headers = httpRequest.getAllResponseHeaders();
				    errorMessage.httpresponse.url = url;
				    errorMessage.httpresponse.responsecode = status;
                  
               failureCallback(errorMessage);
            }
   			else if (status === 200) { 
				if (!response.opstatus) {
					response.opstatus = 0;
				}
				if (response.opstatus === 0) {
					successCallback(response);
				} else {
					failureCallback(response);
				}

			} else {
				var resultTable = {};
				if (response) {
					resultTable = response;
					resultTable.httpStatusCode = httpRequest.status.toString();
				} else {
					resultTable["opstatus"] = kony.sdk.errorcodes.connectivity_error_code;
					resultTable["errcode"] = kony.sdk.errorcodes.connectivity_error_code;
					resultTable["errmsg"] = kony.sdk.errormessages.connectivity_error_message;

                }
				failureCallback(resultTable);				
			}

		}
	}
	var firstKey = true;
	for (var key in params) {
		if (firstKey) {
			paramsTable = new kony.net.FormData();
			firstKey = false;
		}
		//form data doesn't accept empty array as a value, therefore continue if such a key-value exists
		if (params[key].constructor === Array && params[key].length === 0) {
			continue;
		}
		if (params[key]) {
			if(typeof(params[key]) === "object")params[key] = JSON.stringify(params[key]);
			paramsTable.append((key), (params[key]));
		}
	}

	if (headers) {
		for (var key in headers) {
			httpRequest.setRequestHeader(key, headers[key]);
		}
	} else {
		httpRequest.setRequestHeader("Content-Type", "application/json");
	}
	httpRequest.onReadyStateChange = localRequestCallback;
	httpRequest.send(paramsTable);
}


function konyXMLHttpRequest(url, params, headers, successCallback, errorCallback) {
	var logger = new konyLogger();

	var paramsTable = "";
	var firstVal = true;
	var resultTable = {};
	var httpRequest = new XMLHttpRequest();
	if (typeof(errorCallback) === 'undefined') {
		errorCallback = successCallback;
	}
	if (!params) {
		params = "";
	}

	httpRequest.onerror = function(res) {
		resultTable["opstatus"] = kony.sdk.errorcodes.connectivity_error_code;
		resultTable["errcode"] = kony.sdk.errorcodes.connectivity_error_code;
	    resultTable["errmsg"] = kony.sdk.errormessages.connectivity_error_message;
	    errorCallback(resultTable);
	};

	httpRequest.onload = function (res) {
		var isInvalidJSON=false;
		if(res && res.target){
			if(res.target.response !== ""){
					if(kony.sdk.isJson(res.target.response)){
						resultTable = JSON.parse(res.target.response);
	                }
					else{
						isInvalidJSON=true;
					}
				}
			if(isInvalidJSON || (res.target.status==200 && !res.target.response))
			{
				resultTable={};
	            resultTable.httpresponse = {};
	            resultTable["opstatus"]= kony.sdk.errorcodes.invalid_json_code;
	            resultTable["errmsg"]= kony.sdk.errormessages.invalid_json_message;
	            resultTable["errcode"]= kony.sdk.errorcodes.invalid_json_code;
	            resultTable["httpStatusCode"] = res.target.status;
	            resultTable.httpresponse["response"]= res.target.response;
	            resultTable.httpresponse.headers = res.target.getAllResponseHeaders(); 
			    resultTable.httpresponse.responsecode =res.target.status;
			    resultTable.httpresponse.url= url;
	            errorCallback(resultTable);
			}
			else if(res.target.status === 200){
	            resultTable.httpresponse = {};
				resultTable.httpresponse.headers = res.target.getAllResponseHeaders(); 
			    resultTable.httpresponse.responsecode =res.target.status;
			    resultTable.httpresponse.url= url;
				if(!resultTable.opstatus){
					resultTable.opstatus = 0;
				}
				if (resultTable["opstatus"] === 0) {
					successCallback(resultTable);
				} else {
					errorCallback(resultTable);
				}
				
			}
			else {
				if(res.target.response){
				     resultTable["httpStatusCode"] = res.target.status;
				     resultTable.httpresponse = {};
				     resultTable.httpresponse.headers = res.target.getAllResponseHeaders(); 
			         resultTable.httpresponse.responsecode =res.target.status;
			         resultTable.httpresponse.url= url;
				     errorCallback(resultTable);
			    }
			    else
			    {
			    	resultTable["opstatus"] = kony.sdk.errorcodes.connectivity_error_code;
					resultTable["errcode"] = kony.sdk.errorcodes.connectivity_error_code;
					resultTable["errmsg"] = kony.sdk.errormessages.connectivity_error_message;
			        errorCallback(resultTable);
			    }
			}
	    }
	    else{
	    	resultTable["opstatus"] = kony.sdk.errorcodes.unknown_error_code;
			resultTable["errcode"] = kony.sdk.errorcodes.unknown_error_code;
			resultTable["errmsg"] = kony.sdk.errormessages.unknown_error_message;
			errorCallback(resultTable);
	    }
	};

	httpRequest.ontimeout = function(res) {
		resultTable["opstatus"] = kony.sdk.errorcodes.connectivity_error_code;
		resultTable["errcode"] = kony.sdk.errorcodes.connectivity_error_code;
		resultTable["errmsg"] = kony.sdk.errormessages.connectivity_error_message;
	    errorCallback(resultTable);
	}
	httpRequest.open("POST", url, true);
	if (typeof(headers) !== 'undefined' && headers !== null) {
		if (typeof(headers["Content-Type"]) === 'undefined') {
			headers["Content-Type"] = "application/json";
		}
		for (var header in headers) {
			httpRequest.setRequestHeader(header, headers[header]);
		}
	}

	if (params && params.httpconfig && params.httpconfig.timeout) {

		httpRequest.timeout = params.httpconfig.timeout * 1000;

	}
	if (headers["Content-Type"] === "application/x-www-form-urlencoded" || headers["Content-Type"] === "application/json") {
		var paramsTable = "";
		var firstVal = true;
		for (var key in params) {
			if (!firstVal) {
				paramsTable += "&";
			}
			firstVal = false;
			if (params[key]) {
				if(typeof(params[key]) === "object")
				{
                    paramsTable = paramsTable + key + "=" + encodeURIComponent(JSON.stringify(params[key]));
				}
				else
				{
					paramsTable = paramsTable + key + "=" + encodeURIComponent(params[key]);
				}
			}
		}
		params = paramsTable;
	} else if (typeof(params) !== "string") {
		params = JSON.stringify(params);
	}
	try {
		httpRequest.send(params);

	} catch (e) {
		alert("error occurred " + JSON.stringify(e));
	}

}

function konyDataStore() {
	var logger = new konyLogger();
	this.setItem = function(key, value) {
		logger.log("Setting item:" + value + " with key:" + key);
		if (typeof(key) !== "string") {
			throw new Exception(Errors.DATA_STORE_EXCEPTION, "Invalid Key");
		} else {
			try {
				key = key.replace(/\//gi, "");
				kony.store.setItem(key, value);
			} catch (e) {
				logger.log("Failed to set item in dtastore:" + e);
			}
		}
	};

	this.getItem = function(key) {
		logger.log("Getting item for key:" + key);
		if (typeof(key) !== "string") {
			throw new Exception(Errors.DATA_STORE_EXCEPTION);
		} else {
			key = key.replace(/\//gi, "");
			var value = kony.store.getItem(key);
			if (value === null || value === undefined) {
				logger.log("No value found with key:" + key);
				return null;
			} else {
				return value;
			}
		}
	};

	this.removeItem = function(key) {
		logger.log("Removing item for key:" + key);
		if (typeof(key) !== "string") {
			throw new Exception(Error.DATA_STORE_EXCEPTION);
		} else {
			key = key.replace(/\//gi, "");
			kony.store.removeItem(key); //If no item with that key exists, the method does not perform any action. Thus no need to check for key availablity.
		}
	};

	this.destroy = function() {
		logger.log("Destroying data store for this app");
		kony.store.clear();
	};

	this.getAllItems = function() {
		logger.log("Getting all item from data store");
		var items = {};
		var len = kony.store.length(); //get key length
		for (var i = 0; i < len; i++) {
			var key = kony.store.key(i); //get ith key
			var value = kony.store.getItem(key); //get value
			items[key] = value; //prepare itemset
		}
		return items;
	}
};

//#ifdef iphone
//#define KONYSYNC_IOS
//#endif
//#ifdef bb
//#define KONYSYNC_BB
//#endif
//#ifdef bb10
//#define KONYSYNC_BB10
//#endif
//#ifdef winmobile
//#define KONYSYNC_WINDOWS
//#endif
//#ifdef winmobile6x
//#define KONYSYNC_WINDOWS
//#endif
//#ifdef winphone8
//#define KONYSYNC_WINDOWS
//#endif
//#ifdef android
//#define KONYSYNC_ANDROID
//#endif
//#ifdef j2me
//#define KONYSYNC_J2ME
//#endif

//#ifdef ipad
//#define KONYSYNC_IOS
//#endif
//#ifdef tabrcandroid
//#define KONYSYNC_ANDROID
//#endif
//#ifdef playbook
//#define KONYSYNC_WINDOWS
//#endif
//#ifdef spaipad
//#define KONYSYNC_IOS
//#endif
//#ifdef spatabandroid
//#define KONYSYNC_ANDROID
//#endif
//#ifdef spaplaybook
//#define KONYSYNC_WINDOWS
//#endif
//#ifdef windows8
//#define KONYSYNC_WINDOWS
//#endif
//#ifdef spatabwindows
//#define KONYSYNC_WINDOWS
//#endif

//#ifdef desktop_kiosk
//#define KONYSYNC_WINDOWS
//#endif
//#ifdef desktopweb
//#define KONYSYNC_WINDOWS
//#endif


//#ifdef iphone
//#define KONYSYNC_MOBILE
//#endif
//#ifdef bb
//#define KONYSYNC_MOBILE
//#endif
//#ifdef bb10
//#define KONYSYNC_MOBILE
//#endif
//#ifdef winmobile
//#define KONYSYNC_MOBILE
//#endif
//#ifdef winmobile6x
//#define KONYSYNC_MOBILE
//#endif
//#ifdef winphone8
//#define KONYSYNC_MOBILE
//#endif
//#ifdef android
//#define KONYSYNC_MOBILE
//#endif
//#ifdef j2me
//#define KONYSYNC_MOBILE
//#endif
//#ifdef symbian
//#define KONYSYNC_MOBILE
//#endif

//#ifdef ipad
//#define KONYSYNC_TAB
//#endif
//#ifdef tabrcandroid
//#define KONYSYNC_TAB
//#endif
//#ifdef playbook
//#define KONYSYNC_TAB
//#endif
//#ifdef spaipad
//#define KONYSYNC_TAB
//#endif
//#ifdef spatabandroid
//#define KONYSYNC_TAB
//#endif
//#ifdef spaplaybook
//#define KONYSYNC_TAB
//#endif
//#ifdef windows8
//#define KONYSYNC_TAB
//#endif
//#ifdef spatabwindows
//#define KONYSYNC_TAB
//#endif

//#ifdef desktop_kiosk
//#define KONYSYNC_DESKTOP
//#endif
//#ifdef desktopweb
//#define KONYSYNC_DESKTOP
//#endif

kony.sdk.getPayload = function(konyRef) {
	var payload = {};
	payload.os = kony.os.deviceInfo().version + "";
    payload.dm = kony.os.deviceInfo().model;
    payload.did = kony.os.deviceInfo().deviceid;
    payload.ua = kony.os.userAgent();
	var clientParams = konyRef.getClientParams();
	payload.aid =  clientParams.aid ? clientParams.aid : konyRef.mainRef.baseId;
	payload.aname = clientParams.aname ? clientParams.aname : konyRef.mainRef.name;
	payload.chnl = kony.sdk.getChannelType();
	payload.plat = kony.sdk.getPlatformName();
	if(payload.plat === "ios") {
		payload.did = getDeviceIdForIOSPlatform();
	}
	payload.aver = appConfig.appVersion;
	payload.atype = "native";
	payload.stype = "b2c";
	payload.kuid = konyRef.getUserId();
    payload.mfaid = konyRef.mainRef.appId;
    payload.mfbaseid = konyRef.mainRef.baseId;
    payload.mfaname = konyRef.mainRef.name;
    payload.sdkversion = kony.sdk.version;
    payload.sdktype = kony.sdk.getSdkType();

	return payload;
}

kony.sdk.getChannelType = function() {
	var returnVal = "";
	//#ifdef KONYSYNC_MOBILE
	returnVal = "mobile";
	//#endif
	//#ifdef KONYSYNC_TAB
	returnVal = "tablet";
	//#endif
	//#ifdef KONYSYNC_DESKTOP
	returnVal = "desktop";
	//#endif
	return returnVal;
};

kony.sdk.getPlatformName = function() {
	var returnVal = "";
	//#ifdef KONYSYNC_IOS
	returnVal = "ios";
	//#endif
	//#ifdef KONYSYNC_WINDOWS
	returnVal = "windows";
	//#endif
	//#ifdef KONYSYNC_ANDROID
	returnVal = "android";
	//#endif
	//#ifdef KONYSYNC_J2ME
	returnVal = "j2me";
	//#endif
	//#ifdef KONYSYNC_BB
	returnVal = "blackberry";
	//#endif
	return returnVal;
};

kony.mbaas.invokeMbaasServiceFromKonyStudio = function(url, inputParam, serviceID, operationID, callBack) {
	var currentInstance = kony.sdk.getCurrentInstance();
	if (!currentInstance) {
		throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
	}
	var integrationService = currentInstance.getIntegrationService(serviceID);

	var headers = null;
	if (inputParam && inputParam["httpheaders"]) {
		headers = inputParam["httpheaders"];
		delete inputParam["httpheaders"];
	}

	integrationService.invokeOperation(operationID, headers, inputParam, function(res) {
		if (typeof(callBack) === 'function') {
			callBack(400, res);
		}

	}, function(res) {
		if (typeof(callBack) === 'function') {
			callBack(400, res);
		}
	});
}
kony.sdk.XdomainSlaves = {};

kony.sdk.XdomainLibPath = null;

kony.sdk.getXdomainSlaves = function() {
	function isEmptyObject(obj) {
		for (var name in obj) {
			return false;
		}
		return true;
	}
	if (isEmptyObject(kony.sdk.XdomainSlaves)) {
		throw new Exception(Errors.MISC_FAILURE, "No XdomainSlaves defined. Please use the kony.sdk.setXdomainSlaves({'http://authtenant.konycloud.com':'xdomain'}) to set the Xdomain slaves");
	}
	return kony.sdk.XdomainSlaves;
};

kony.sdk.setXdomainSlaves = function(slaveEndPointMap) {
	if (!slaveEndPointMap) {
		throw new Exception(Errors.MISC_FAILURE, "Invalid slave end points");
	}
	for (var key in slaveEndPointMap) {
		kony.sdk.XdomainSlaves[key] = slaveEndPointMap[key];
	}
}

kony.sdk.getXdomainLibPath = function() {
	return kony.sdk.XdomainLibPath;
}

kony.sdk.setXdomainLibPath = function(path) {
	if (!path) {
		throw new Exception(Errors.MISC_FAILURE, "Invalid path");
	}
	kony.sdk.XdomainLibPath = path;
}

function xdomain_init(callback) {
	var logger = new konyLogger();

	jQuery.getScript(kony.sdk.getXdomainLibPath()).done(function() {
		if (typeof(xdomain) !== 'undefined') {
			logger.log("xdomain Script loading done");
			callback(xdomain);
		} else {
			throw new Exception(Errors.MISC_FAILURE, "not able to fetch xdomain library from " + kony.sdk.getXdomainLibPath());
		}

	}).fail(function() {
		//TODO: handle failure case
		throw new Exception(Errors.MISC_FAILURE, "xdomain library load failed from " + kony.sdk.getXdomainLibPath());
	});
}

function getDeviceIdForIOSPlatform() {
	if(kony.os.deviceInfo().osversion >= 6.0) {
		return kony.os.deviceInfo().identifierForVendor;
	}
	return kony.os.deviceInfo().customdeviceid;
}


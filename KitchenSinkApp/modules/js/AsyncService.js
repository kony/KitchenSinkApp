// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.
/****************************************************************
*	Name    : requestAPiKey
*	Author  : Kony 
*	Purpose : To request an API Key from dev.pipl.com incase if the user dont have a key
******************************************************************/
function requestAPiKey()
{
	kony.application.openURL("http://dev.pipl.com/apps/mykeys");
}

/****************************************************************
*	Name    : APIKeyCheck
*	Author  : Kony 
*	Purpose : To check the API key field is empty or not. If empty, Then show an alert.
******************************************************************/

function APIKeyCheck()
{
	if(channel == "tablet" || channel == "desktopweb") 
	{
		if (frmAsyncDataAccess.txtAPIKey.text=="" || frmAsyncDataAccess.txtAPIKey.text==null )
		{
			alert("Please enter API key.");
			return;
		}
		else
		{
			frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(0);
			frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAsyncDataAccess.hbxAsyncDataAccess);
		}
		
	}
	else
	{
		if (frmAPIKey.txtAPIKey.text=="" ||frmAPIKey.txtAPIKey.text==null )
		{
			alert("Please enter API key.");
			return;
		}
		else
		{
			frmAsyncDataAccess.show();
		}
	}
}

/****************************************************************
*	Name    : handleResponse
*	Author  : Kony 
*	Purpose : To display the results if any.
******************************************************************/


function handleResponse(pplObj)
{
	var dataArr =[];
 	kony.print(pplObj);
 
 	if('error' in pplObj)
 	{
 		frmAsyncDataAccess.lblErrMsgAsyncData.text = "Error is :" + pplObj.error;	 		
 		kony.application.dismissLoadingScreen();
 		kony.timer.cancel("timerDismissLS");
		flag =0;	
 		return;
 	}
 	if (pplObj["@records_count"] == 0 )
 	{
 		frmAsyncDataAccess.lblErrMsgAsyncData.text = "No records found"; 
 		kony.timer.cancel("timerDismissLS");
		flag =0;
 		kony.application.dismissLoadingScreen();		
 		return;
 	}
 	for (var i= 0 ;i<pplObj["@records_count"];i++)
 	{
 		kony.print("==========================================================================");
 		var dummyObj = {};
 		if ('names' in pplObj.records[i] )	
 			dummyObj.lblPName = pplObj.records[i].names[0].display ;
 		else
 			dummyObj.lblPName =frmAsyncDataAccess.tbxFName.text +" "+frmAsyncDataAccess.tbxLName.text;
 		if ( 'images' in pplObj.records[i])
 			dummyObj.imgAsySml = pplObj.records[i].images[0].url;
 		else
 			dummyObj.imgAsySml = "personbig.png";
 		if ('addresses' in pplObj.records[i] )	
 			dummyObj.lblPAddress = pplObj.records[i].addresses[0].display ;
 		else
 			dummyObj.lblPAddress  = "Unknown address";
 		
 		dataArr.push(dummyObj);
 	}
 	kony.print("last before===========================================================================");
 	if(channel == "tablet" || channel == "desktopweb")
 	{
 		
 		frmAsyncDataAccess.segSmall.removeAll();
	 	frmAsyncDataAccess.segSmall.setData(dataArr);
	 	frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAsyncDataAccess.hbxAsyncDataDisplay);
 	}
 	else
 	{
	 	frmAsyncDataDisplay.segSmall.removeAll();
	 	frmAsyncDataDisplay.segSmall.setData(dataArr);
	 	frmAsyncDataDisplay.show();
 	}
 	kony.application.dismissLoadingScreen();
 	kony.timer.cancel("timerDismissLS");
	flag =0;
 	kony.print("last===========================================================================");
 	
		
}

/*****************************************************************
*	Name    : onReadyStateChange
*	Author  : Kony 
*	Purpose : To handle onReadyStateChange callback event of http request.If readystate is "constants.HTTP_READY_STATE_DONE" then check for http response code.
******************************************************************/

function onReadyStateChange()
{
	kony.print("Entered ready state callback"+this.readyState)
	
    if(this.readyState == constants.HTTP_READY_STATE_DONE )
	{
		kony.print("Response type is "+this.responseType)
		//kony.print("Type is "+typeof(this.response))
		if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator")
		{
			if (this.response != null && this.response != "")
			{
				//var jsonObj = JSON.parse(this.response)
				//kony.print("Type of result object is "+typeof(jsonObj))
				httpResponseCodeValidate(this.response);
			}
			else
			{
				frmAsyncDataAccess.lblErrMsgAsyncData.text ="Sorry,No results found."
				kony.application.dismissLoadingScreen();
				kony.timer.cancel("timerDismissLS");
				flag =0;
				return;
			}
		}
		else
		{
			kony.print("Entered non iOS platforms"+this.response);
			if (this.response != null && this.response != "")
			{
				kony.print("response non null");
				var jsonObj = this.response;
				httpResponseCodeValidate(jsonObj);
				
			}
			else
			{
				kony.print("response null");
				frmAsyncDataAccess.lblErrMsgAsyncData.text ="Sorry,No results found.";		
				kony.application.dismissLoadingScreen();	
				kony.timer.cancel("timerDismissLS");
				flag =0;	
				return;
			}
		}
	}
}

/*****************************************************************
*	Name    : disLoadScrnAsync
*	Author  : Kony 
*	Purpose : To dismiss the loading screen and abort the http request.
******************************************************************/

function disLoadScrnAsync()
{
	kony.print("current form is "+ JSON.stringify(kony.application.getCurrentForm().id));
	if(kony.application.getCurrentForm().id == "frmAsyncDataAccess")
	{
		kony.application.dismissLoadingScreen();
		httpClientRequest.abort();
	}
	kony.timer.cancel("timerDismissLS");
	flag =0;
}

/*****************************************************************
*	Name    : httpRequestCall
*	Author  : Kony 
*	Purpose : To define the URL and send the request through httpRequest APIs. 
******************************************************************/

function httpRequestCall()
{
	if(flag == 0)
	{	
		//we need to remove the existing results when the user clicks for the next, So cleaning the scrollbox.
		if(channel == "tablet" && kony.os.deviceInfo().name != "thinclient" )
 			frmDeviceFeatures.sbxDevFeatureDeatils.remove(frmAsyncDataAccess.hbxAsyncDataDisplay);
 		
		flag = 1;
		if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator" )
			kony.application.showLoadingScreen("loadingscreen","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
		else
			kony.application.showLoadingScreen("loadingscreen","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
			
		kony.timer.schedule("timerDismissLS", disLoadScrnAsync, 14,false);				
	}
	
	try
	{		
		httpClientRequest = new kony.net.HttpRequest();
		var requestMethod = constants.HTTP_METHOD_GET;
		var fname = frmAsyncDataAccess.tbxFName.text;
		var lname = frmAsyncDataAccess.tbxLName.text;
		if(channel =="tablet" || channel == "desktopweb")
			var apiKey = frmAsyncDataAccess.txtAPIKey.text;
		else
			var apiKey = frmAPIKey.txtAPIKey.text;
		if(fname == "" || lname == "" ||fname == null || lname == null )
		{
			frmAsyncDataAccess.lblErrMsgAsyncData.text = "First name and last name should not be empty";
			kony.application.dismissLoadingScreen();
			kony.timer.cancel("timerDismissLS");
			flag =0;
			return;		
		}
		else
		{
			frmAsyncDataAccess.lblErrMsgAsyncData.text = ""
		}
		var url = "http://api.pipl.com/search/v3/json/?first_name="+fname+"&last_name="+lname+"&exact_name=0&query_params_mode=and&key="+apiKey+"";
		var async = true;
		httpClientRequest.open(requestMethod, url,async);
		httpClientRequest.send();		
		httpClientRequest.onReadyStateChange =onReadyStateChange;
		
	}
	catch(exc)
	{
		frmAsyncDataAccess.lblErrMsgAsyncData.text ="Timeout "+exc.message;
		kony.application.dismissLoadingScreen();
		kony.timer.cancel("timerDismissLS");
		flag =0;
		return;
	}
}

/*****************************************************************
*	Name    : httpResponseCodeValidate
*	Author  : Kony 
*	Purpose : To handle httpResponseCode.
******************************************************************/

function httpResponseCodeValidate(ResultObj)
{
	kony.print("Entered httpResponseCodeValidate" +ResultObj["@http_status_code"] )
	switch (ResultObj["@http_status_code"])
	{
		case 200 :
					{
						frmAsyncDataAccess.lblErrMsgAsyncData.text = "Everything is cool!";
						handleResponse(ResultObj);
						break;
					}
		case 400 :
					{
						frmAsyncDataAccess.lblErrMsgAsyncData.text = "The request is invalid, make sure your query contains the required parameters.";	
						kony.timer.cancel("timerDismissLS");
						flag =0;
						kony.application.dismissLoadingScreen();					
						break;
					}
		case 401 :
					{
						frmAsyncDataAccess.lblErrMsgAsyncData.text = "API key is missing or invalid.";	
						kony.timer.cancel("timerDismissLS");
						flag =0;		
						kony.application.dismissLoadingScreen();			
						break;
					}
		case 403 :
					{
						frmAsyncDataAccess.lblErrMsgAsyncData.text = "API key is valid but you exceeded your API calls limit.";
						kony.timer.cancel("timerDismissLS");
						flag =0;	
						kony.application.dismissLoadingScreen();					
						break;
					}
		case 500 :
					{
						frmAsyncDataAccess.lblErrMsgAsyncData.text = "Something is broken, if you see this please contact us.";	
						kony.timer.cancel("timerDismissLS");
						flag =0;	
						kony.application.dismissLoadingScreen();				
						break;
					}
	}
}


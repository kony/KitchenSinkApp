
/*****************************************************************
*	Name    : geoSuccessCallBack
*	Author  : Kony 
*	Purpose : The below function is the success call back of 'kony.location.getCurrentPosition' API,Used to display current location details .
******************************************************************/

function geoSuccessCallBack(position)
{	
	if((channel == "tablet"||channel == "desktopweb")&& kony.os.deviceInfo().name == "thinclient")
		frmGeoCurrentNWatch.addWidgets();

	try
	{
		frmGeoCurrentNWatch.lblFrmGeoLat.text ="= "+position.coords.latitude;
		frmGeoCurrentNWatch.lblFrmGeoLon.text ="= " + position.coords.longitude;
		frmGeoCurrentNWatch.lblFrmGeoAlt.text ="= " + position.coords.altitude;
		frmGeoCurrentNWatch.lblFrmGeoAccur.text= "= " + position.coords.accuracy;
		frmGeoCurrentNWatch.lblFrmGeoHead.text ="= "+ position.coords.heading;
		if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator")
		{
			frmGeoCurrentNWatch.lblFrmGeoSpeed.text = "= " + position.coords.speed;
		}
		else
		{
			frmGeoCurrentNWatch.lblFrmGeoSpeed.text = "= " + position.coords.speeding;
		}
		frmGeoCurrentNWatch.lblFrmGeoTimeStamp.text="= " + position.timestamp;
		latitude = position.coords.latitude ;
		longitude = position.coords.longitude ;
	
	}
	catch(err)
	{
		alert("error is : "+err);
		kony.application.dismissLoadingScreen();
	}
	if(channel != "tablet" && channel != "desktopweb")
		frmGeoCurrentNWatch.show();
	else if((channel == "tablet"||channel == "desktopweb")&& kony.os.deviceInfo().name == "thinclient")
		frmDeviceFeatures.sbxDevFeatureDeatils.add(frmGeoCurrentNWatch.hbxGeoLocation);
	else
		frmDeviceFeatures.sbxDevFeatureDeatils.add(frmGeoCurrentNWatch.hbxGeoLocation);
	kony.application.dismissLoadingScreen();
}


/*****************************************************************
*	Name    : geoErrorCallBack
*	Author  : Kony 
*	Purpose : The below function is the error call back of 'kony.location.getCurrentPosition' API,Used to display error details .
******************************************************************/

function geoErrorCallBack(positionerror)
{
	alert("Error occured while retrieving the data")
	kony.application.dismissLoadingScreen();
}


/*****************************************************************
*	Name    : geoPosition
*	Author  : Kony 
*	Purpose : The below function is to invoke 'kony.location.getCurrentPosition' API
******************************************************************/

function geoPosition()
{      
		kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false,null);
		var positionoptions = {timeout: 15000};
		kony.location.getCurrentPosition(geoSuccessCallBack, geoErrorCallBack,positionoptions);
}

/*****************************************************************
*	Name    : callBckFunGeoAddLoc
*	Author  : Kony 
*	Purpose : The below function is the call back function of the JSON which is invoked in 'getCurrentAdress()' ,Used to display the current address
******************************************************************/ 

function callBckFunGeoAddLoc(status, resulttable)
{
	if(status == 400) 
	{
		if (resulttable["results"]== undefined)
		{
			frmGeoCurrentNWatch.lblGeoAdress.text = "Service not available.Please check your network connections and try again.";
			kony.application.dismissLoadingScreen();
			return;
		}
		else
		{	
			if (resulttable["results"] ==[])
			{
				frmGeoCurrentNWatch.lblGeoAdress.text = "No address found with the current latitude and longitude"
				kony.application.dismissLoadingScreen();
			}
			else
			{
				frmGeoCurrentNWatch.lblGeoAdress.text = resulttable["results"][0]["formatted_address"];
				kony.application.dismissLoadingScreen();
			}
		}
	}
}

/*****************************************************************
*	Name    : getCurrentAdress
*	Author  : Kony 
*	Purpose : The below function is to invoke JSON service which takes latitude and longitude as the input and results address of the location.
******************************************************************/

function getCurrentAdress()
{
	
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&sensor=false"   
	var inputParam = {};
	inputParam["serviceID"] = "GeoAddressJSON";
	inputParam["httpheaders"] = {};
	inputParam["httpconfigs"] = {};
	inputParam.appID = "ksa";
	inputParam.appver ="1.0.0";
	inputParam["channel"] = "rc";
	inputParam["platform"] = kony.os.deviceInfo().name;
    
    var connHandle = kony.net.invokeServiceAsync(url, inputParam, callBckFunGeoAddLoc)
}
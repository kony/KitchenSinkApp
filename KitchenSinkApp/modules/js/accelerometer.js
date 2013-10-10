// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.
/*****************************************************************
*	Name    : regAccEvent
*	Author  : Kony
*	Purpose : To register acceleration events.
******************************************************************/
function regAccEvent()
{
	
	if(channel=="tablet")
	{
		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(1);
	}
	shakeCount = 0;
	var events = { shake : onshake } ;
	kony.accelerometer.registerAccelerationEvents(events);
	if (kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows8")
	{
		frmRegisterAccelerometer.lblEventWindows.text = "Registration is successful,Please shake the device to obtain the shake count.";
	}
	else if (channel=="tablet") 
	{
		frmAclMeterReadings.lblEmulatorSupport.text = "Registration is successful,Please shake the device to obtain the shake count.";
		frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.lblEmulatorSupport);
	}
	else if (kony.os.deviceInfo().name == "android" && channel != "tablet") 
	{
		frmRegisterAccelerometer.lblEventAndroid.text = "Registration is successful,Please shake the device to obtain the shake count.";
	}
	else
	{
		frmRegisterAccelerometer.lblEvent2.text = "Registration is successful,Please shake the device to obtain the shake count.";
	}
}

/*****************************************************************
*	Name    : onshake
*	Author  : Kony
*	Purpose : This is the function registred with 'shake' event and invoked automatically
			  when shake (moving the device) happens.
******************************************************************/

function onshake()
{
	if(channel=="tablet")
	{
		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(1);
	}
	shakeCount++;
	if(channel=="tablet")
	{
		frmAclMeterReadings.lblEvent3.text = shakeCount.toString();
		frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.hbxAccShakeEvent);
	}
	else
	{
		frmRegisterAccelerometer.lblEvent3.text = shakeCount.toString();
	}
}
/*****************************************************************
*	Name    : unRegisterAccEvent
*	Author  : Kony
*	Purpose : To Unregister acceleration events(shake event) that is registered by accelerometer.registeraccelerationevents API.
*******************************************************************/

function unRegisterAccEvent()
{
	kony.accelerometer.unregisterAccelerationEvents(["shake"]);
	delete shakeCount;
	if(channel=="tablet")
	{	
		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(1);
		frmAclMeterReadings.lblEvent3.text ="0";
		frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.hbxAccShakeEvent);
	}
	else
	{
		frmRegisterAccelerometer.lblEvent3.text = "0";
	}
		
	if(channel != "tablet")	
		frmAclmeterOptions.show();
}

/******************************************************************
*	Name    : onsuccesscallbackretCurrentAcc
*	Author  : Kony
*	Purpose : To display the accelerometerdata in form frmAclMeterReadings.
			  This is callback function which is invoked automatically by accelerometer.retrievecurrentacceleration API
			  when the retrieval of the current device acceleration is successful.
*******************************************************************/

function onsuccesscallbackretCurrentAcc(accelerometerdata)
{
	frmAclMeterReadings.lblX.text = accelerometerdata.x;
	frmAclMeterReadings.lblY.text = accelerometerdata.y;
	frmAclMeterReadings.lblZ.text = accelerometerdata.z;
	frmAclMeterReadings.lblT.text = accelerometerdata.timestamp;
	if(channel =="tablet")
		frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.hbxAcceleromterReadings);
	else
		frmAclMeterReadings.show();
	
}

/*****************************************************************
*	Name    : onfailurecallbackretCurrentAcc
*	Author  : Kony
*	Purpose : To display an error alert if retrievecurrentacceleration fails.
			  This is callback function which is invoked automatically by accelerometer.retrievecurrentacceleration API
			  when the retrieval of the current device acceleration is unsuccessful/failed.
*******************************************************************/

function onfailurecallbackretCurrentAcc(error)
{
	alert("Error code: " + error.code + "Error Message: " + error.message);
}

/******************************************************************
*	Name    : retrieveCurrentAcc
*	Author  : Kony
*	Purpose : To call accelerometer.retrievecurrentacceleration API to retrieve current device acceleration.
*******************************************************************/

function retrieveCurrentAcc()
{
	if(channel=="tablet")
		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(1);
	kony.accelerometer.retrieveCurrentAcceleration(onsuccesscallbackretCurrentAcc, onfailurecallbackretCurrentAcc);
}




/******************************************************************
*	Name    : onsuccesscallbackstartmonitoringAcc
*	Author  : Kony
*	Purpose : To display the accelerometerdata in form frmAclMeterReadings.
			  This is the callback function which is invoked by accelerometer.startmonitoringacceleration API
			  When the API call is successful and there is a change in the device acceleration values when the device moves.
*******************************************************************/

function onsuccesscallbackstartmonitoringAcc( startmonitoringdata )
{
	frmAclMeterReadings.lblX.text = startmonitoringdata.x;
	frmAclMeterReadings.lblY.text = startmonitoringdata.y;
	frmAclMeterReadings.lblZ.text = startmonitoringdata.z;
	frmAclMeterReadings.lblT.text = startmonitoringdata.timestamp;
	if(channel != "tablet")
		frmAclMeterReadings.show();
}

/******************************************************************
*	Name    : onfailurecallbackstartmonitoringAcc
*	Author  : Kony
*	Purpose : To display an error alert if startmonitoringacceleration fails.
              This is the callback function which is invoked by accelerometer.startmonitoringacceleration API
			  When the API call is unsuccessful
*******************************************************************/

function onfailurecallbackstartmonitoringAcc( error )
{
	kony.print("Error code: " + error.code + "Error Message: " + error.message);
	if(channel=="tablet")
	{
		frmAclMeterReadings.lblX.text = error.message;
		frmAclMeterReadings.lblY.text = error.message;
		frmAclMeterReadings.lblZ.text = error.message;
		frmAclMeterReadings.lblT.text = error.message;
	}
	              
}


/******************************************************************
*	Name    : startmonitoringAcc
*	Author  : Kony
*	Purpose : To call accelerometer.startmonitoringacceleration API to 
			  start monitoring the device acceleration or motion.
*******************************************************************/

function startmonitoringAcc()
{
	if(channel=="tablet")
	{
		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(1);
		frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.hbxAcceleromterReadings);
	}
		
	kony.accelerometer.startMonitoringAcceleration(onsuccesscallbackstartmonitoringAcc, onfailurecallbackstartmonitoringAcc, 
	                                                { frequency : 200, onChange : true } );
}



// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.
/*****************************************************************
*	Name    : DevcFeatsHandleDesktopweb
*	Author  : Kony 
*	Purpose : To handle the device faetures that are supported for desktopweb channel
******************************************************************/
function DevcFeatsHandleDesktopweb(selIndex)
{
	var widLength = frmDeviceFeatures.sbxDevFeatureDeatils.widgets().length;
	
	kony.print("wid LENGTH ::"+widLength);
	
	if(widLength != 0)
	{
		for (var i=0 ;i< widLength ;i++)
		{
			kony.print("ENTERED desktop");
			frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(0);
		}
	}
	
	kony.print("selIndex:: "+selIndex);
		
	switch (selIndex)
	{
		
		case 0:
				geoPosition();
				break;
		case 1:
				frmDeviceInfo.addWidgets();
				deviceInfo();
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmDeviceInfo.hbxDeviceInfo);
				break;
		case 2:
				frmLocalStore.addWidgets();
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmLocalStore.hbxLocalStore);
				break;
		case 3:
				frmWebSQL.addWidgets();
				frmWebSQL.lblWebSqlUpdate.text ="";
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmWebSQL.hbxTabWebSQL,frmWebSQL.lblWebSqlUpdate);
				break;
		case 4:		
				frmCrypto.addWidgets();
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmCrypto.hbxCrypto);
				break;
		
	}
}

/*****************************************************************
*	Name    : tabDevcFeatsHandleTC
*	Author  : Kony 
*	Purpose : To handle the device faetures that are supported for thinclient
******************************************************************/

function tabDevcFeatsHandleTC(selIndex)
{
	
	var widLength = frmDeviceFeatures.sbxDevFeatureDeatils.widgets().length;
	
	kony.print("wid LENGTH ::"+widLength);
	
	if(widLength != 0)
	{
		for (var i=0 ;i< widLength ;i++)
		{
			kony.print("ENTERED");
			frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(0);
			kony.print("ENTERED again");
		}
	}
		
	kony.print("selIndex:: "+selIndex);
		
	switch (selIndex)
	{
		
		case 0:
				geoPosition();
				break;
		case 1:
				frmDeviceInfo.addWidgets();
				deviceInfo();
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmDeviceInfo.segDeviceInfo);
				break;
		case 2:
				frmLocalStore.addWidgets();
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmLocalStore.hbxLocalStore);
				break;
		case 3:
				frmWebSQL.addWidgets();
				frmWebSQL.lblWebSqlUpdate.text ="";
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmWebSQL.hbxTabWebSQL,frmWebSQL.lblWebSqlUpdate);
				break;
		case 4:
				frmCrypto.addWidgets();
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmCrypto.hbxCrypto);
				break;
		
	}
}

/*****************************************************************
*	Name    : tabDevcFeatsHandleIpad
*	Author  : Kony 
*	Purpose : To handle the device faetures that are supported for ipad platform.
******************************************************************/

function tabDevcFeatsHandleIpad(selIndex)
{
	
	var widLength = frmDeviceFeatures.sbxDevFeatureDeatils.widgets().length;
	
	kony.print("wid LENGTH ::"+widLength);
	
	if(widLength != 0)
	{
		for (var i=0 ;i< widLength ;i++)
		{
			kony.print("ENTERED");
			frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(0);
		}
	}
	if (kony.os.deviceInfo().name!="thinclient")
		frmDeviceFeatures.sbxDevFeatureDeatils.scrollToBeginning();
		
		kony.print("selected Index is "+selIndex);
		
	switch (selIndex)
	{
		case 0:
				if(kony.os.deviceInfo().model == "iPad Simulator")
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.lblEmulatorSupport);
				else
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.hbxAccelerometerOptions);
				break;
		case 1:
				setBadge();
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmBadge.hbxBadge);
				break;
		case 2:
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAppSettings.hbxAppSettings);
				break;
		case 3:
				if(kony.os.deviceInfo().model == "iPad Simulator")
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.lblEmulatorSupport);
				else
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmCamera.hbxCameraBasic,frmCamera.hbxFrmOverlay,frmCamera.hbxCameraAccessModes,frmCamera.hbxCamOrientationMode)
				break;
		case 4:
				geoPosition();
				//frmDeviceFeatures.sbxDevFeatureDeatils.add(frmGeoCurrentNWatch.hbxGeoLocation);
				break;
		case 5:
				emailSend();
				break;
		case 6:
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmContact.hbxContactOptions);
				break;	
		case 7:
				deviceInfo();
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmDeviceInfo.segDeviceInfo);
				break;
		case 8:
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmLocalStore.hbxLocalStore);
				break;
		case 9:
				frmWebSQL.lblWebSqlUpdate.text ="";
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmWebSQL.hbxTabWebSQL,frmWebSQL.lblWebSqlUpdate);
				break;
		case 10:
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmCrypto.hbxCrypto);
				break;
		case 11:
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAsyncDataAccess.hbxAPIKey);
				break;
		case 12:
				frmCalendarEvents.lblCalendarEvents.text ="";
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmCalendarEvents.hbxCalendarEvents);
				break;
		
	}
}

/*****************************************************************
*	Name    : tabDevcFeatsHandleAndroid
*	Author  : Kony 
*	Purpose : To handle the device faetures that are supported for android platform.
******************************************************************/

function tabDevcFeatsHandleWinTab(selIndex)
{
	
	var widLength = frmDeviceFeatures.sbxDevFeatureDeatils.widgets().length;
	
	kony.print("wid LENGTH ::"+widLength);
	
	if(widLength != 0)
	{
		for (var i=0 ;i< widLength ;i++)
		{
			kony.print("ENTERED");
			frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(0);
		}
	}
	if (kony.os.deviceInfo().name!="thinclient")
		frmDeviceFeatures.sbxDevFeatureDeatils.scrollToBeginning();
		
		kony.print("selected Index is "+selIndex);
		
	switch (selIndex)
	{
		case 0:
				if(kony.os.hasAccelerometerSupport()== false)
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.lblEmulatorSupport);
				else
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.hbxAccelerometerOptions);
				break;
		case 1:
				if(kony.os.hasAccelerometerSupport() == false)
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.lblEmulatorSupport);
				else
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmCamera.hbxCameraBasic,frmCamera.hbxCameraAccessModes);
				break;
		case 2:
				geoPosition();
				break;
		case 3:
				emailSend();
				break;
		case 4:
				deviceInfo();
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmDeviceInfo.segDeviceInfo);
				break;
		case 5 :
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmLocalStore.hbxLocalStore);
				break;
		case 6:
				frmWebSQL.lblWebSqlUpdate.text ="";
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmWebSQL.hbxTabWebSQL,frmWebSQL.lblWebSqlUpdate);
				break;
		case 7:
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmCrypto.hbxCrypto);
				break;
		
	}
}

/*****************************************************************
*	Name    : tabDevcFeatsHandleAndroid
*	Author  : Kony 
*	Purpose : To handle the device faetures that are supported for android platform.
******************************************************************/

function tabDevcFeatsHandleAndroid(selIndex)
{
	
	var widLength = frmDeviceFeatures.sbxDevFeatureDeatils.widgets().length;
	
	kony.print("wid LENGTH ::"+widLength);
	
	if(widLength != 0)
	{
		for (var i=0 ;i< widLength ;i++)
		{
			kony.print("ENTERED");
			frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(0);
		}
	}
	if (kony.os.deviceInfo().name!="thinclient")
		frmDeviceFeatures.sbxDevFeatureDeatils.scrollToBeginning();
		
		kony.print("selected Index is "+selIndex);
		
	switch (selIndex)
	{
		case 0:
				if(kony.os.hasAccelerometerSupport()== false)
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.lblEmulatorSupport);
				else
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.hbxAccelerometerOptions);
				break;
		case 1:
				if(kony.os.hasAccelerometerSupport() == false)
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAclMeterReadings.lblEmulatorSupport);
				else
					frmDeviceFeatures.sbxDevFeatureDeatils.add(frmCamera.hbxCameraBasic,frmCamera.hbxCameraAccessModes);
				break;
		case 2:
				geoPosition();
				//frmDeviceFeatures.sbxDevFeatureDeatils.add(frmGeoCurrentNWatch.hbxGeoLocation);
				break;
		case 3:
				emailSend();
				break;
		case 4:
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmContact.hbxContactOptions);
				break;	
		case 5:
				deviceInfo();
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmDeviceInfo.segDeviceInfo);
				break;
		case 6 :
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmLocalStore.hbxLocalStore);
				break;
		case 7:
				frmWebSQL.lblWebSqlUpdate.text ="";
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmWebSQL.hbxTabWebSQL,frmWebSQL.lblWebSqlUpdate);
				break;
		case 8:
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmCrypto.hbxCrypto);
				break;
		case 9:
				frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAsyncDataAccess.hbxAPIKey);
				break;
		
	}
}

/*****************************************************************
*	Name    : setSbxDevFeaturesDetails
*	Author  : Kony 
*	Purpose : Used to fill the device features screen initially with first feature and 
* 			  based on the platform handle the show the supported device features
******************************************************************/

function setSbxDevFeaturesDetails()
{
	frmDeviceFeatures.segDeviceFeatures.selectedIndex=[0,0];
	if(channel == "tablet" && kony.os.deviceInfo().name == "android")
	{
		tabDevcFeatsHandleAndroid(0);
	}
	
	else if (kony.os.deviceInfo().name == "thinclient" &&channel != "desktopweb")
	{
		tabDevcFeatsHandleTC(0);
	}
	else if (channel == "desktopweb")
	{
		frmDeviceFeatures.segDeviceFeatures.selectedIndex =[0,0];
		frmDeviceFeatures.scrollToBeginning();
		DevcFeatsHandleDesktopweb(0)
	}
	else if (channel == "tablet" && kony.os.deviceInfo().name == "Windows")
	{	
		tabDevcFeatsHandleWinTab(0);
	}
	else 
	{
		tabDevcFeatsHandleIpad(0);
	}
}

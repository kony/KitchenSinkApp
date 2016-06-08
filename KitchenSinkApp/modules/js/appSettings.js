
/*****************************************************************
*	Name    : onsuccesscallback
*	Author  : Kony 
*	Purpose : The below function is the success callback of kony.application.settings.read API.
******************************************************************/

function onsuccesscallback(key,value)
{
	if ( value== null || value == "")
	{
		if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator")
		{
			frmAppSettings.lblMsgSetR.text = "Empty";
		}
		else
		{
			frmAppSetRead.lblMsgSetR.text = "Empty";
		}
	}
	else
	{
		if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator")
		{
			frmAppSettings.lblMsgSetR.text = value;
		}
		else
		{
			frmAppSetRead.lblMsgSetR.text = value;
		}
	}
}

/*****************************************************************
*	Name    : onfailureback
*	Author  : Kony 
*	Purpose : The below function is the failure callback of kony.application.settings.read API.
******************************************************************/

function onfailureback(errorcode,errormessage)
{
	alert("err is :"+errormessage);	
}

/*****************************************************************
*	Name    : onsuccesscallbackR
*	Author  : Kony 
*	Purpose : The below function is the success callback of kony.application.settings.read API.
******************************************************************/

function onsuccesscallbackR(key,value)
{
	if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator")
	{
		frmAppSettings.lblMsgSetR1.text = value;
		switch(value)
		{
			case "Table view":
							frmAppSettings.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_TABLEVIEW;
							break;
			case "Page view":
							frmAppSettings.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_PAGEVIEW;
							frmAppSettings.SegMsgSetR.pageOffDotImage = "orngsld";
							frmAppSettings.SegMsgSetR.pageOnDotImage = "whitesld";
							break;
			case "Coverflow view":
							frmAppSettings.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_COVERFLOW;
							break;
			case "Cylinder view":
							frmAppSettings.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_CYLINDER;
							break;
			case "Linear view":
							frmAppSettings.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_LINEAR;
							break;
			case "Stack view":
							frmAppSettings.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_STACK;
							break;								
			
		}
		frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAppSettings.hbxAppSettingsRead);
	}
	else
	{	
		frmAppSetRead.lblMsgSetR1.text = value;
	
		switch(value)
		{
			case "Table view":
							frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_TABLEVIEW;
							break;
			case "Page view":
							frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_PAGEVIEW;
							frmAppSetRead.SegMsgSetR.pageOffDotImage = "orngsld";
							frmAppSetRead.SegMsgSetR.pageOnDotImage = "whitesld";
							break;
			case "Coverflow view":
							frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_COVERFLOW;
							break;
			case "Cylinder view":
							frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_CYLINDER;
							break;
			case "Linear view":
							frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_LINEAR;
							break;
			case "Stack view":
							frmAppSetRead.SegMsgSetR.viewType = constants.SEGUI_VIEW_TYPE_STACK;
							break;								
			
		}
	
		frmAppSetRead.show();
	}
		
	
}

/*****************************************************************
*	Name    : onfailurebackR
*	Author  : Kony 
*	Purpose : The below function is the failure callback of kony.application.settings.read API.
******************************************************************/

function onfailurebackR(errorcode,errormessage)
{
	alert("Err is :"+errormessage);
}

/*****************************************************************
*	Name    : onsuccesscallbackw
*	Author  : Kony 
*	Purpose : Success call back function of kony.application.settings.write API.
******************************************************************/

function onsuccesscallbackw(key,value)
{
	kony.print("Value is :"+value);
}

/*****************************************************************
*	Name    : onfailurebackw
*	Author  : Kony 
*	Purpose : Failure call back function of kony.application.settings.write API.This is invoked when ever writing the app settings is failed.
******************************************************************/

function onfailurebackw(errorcode,errormessage)
{
	alert("Error is :"+errormessage);
}

/*****************************************************************
*	Name    : onsuccesscallbackWrite
*	Author  : Kony 
*	Purpose : Success call back function of kony.application.settings.write API.
******************************************************************/

function onsuccesscallbackWrite(key,value)
{	
	if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator")
	{
		frmAppSettings.lblAppAfterSet.text = "App settings are successful";
	}
	else
	{
		frmAppSetWrite.lblAppAfterSet.text = "App settings are successful";
	}
	
}

/*****************************************************************
*	Name    : onfailurebackWrite
*	Author  : Kony 
*	Purpose : Failure call back function of kony.application.settings.write API.This is invoked when ever writing the app settings is failed.
******************************************************************/

function onfailurebackWrite(errorcode,errormessage)
{
	alert("Error is :"+errormessage);
}

/*****************************************************************
*	Name    : read
*	Author  : Kony 
*	Purpose : To read the application settings using kony.application.settings.read API
******************************************************************/

function read()
{
	if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator")
	{
		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(1);
	}
	kony.application.settings.read ("key1", onsuccesscallback, onfailureback)
	kony.application.settings.read ("key2", onsuccesscallbackR, onfailurebackR)
}

/*****************************************************************
*	Name    : write
*	Author  : Kony 
*	Purpose : To write the application settings using kony.application.settings.write API
******************************************************************/

function write()
{
	if(kony.os.deviceInfo().name == "iPad"|| kony.os.deviceInfo().name=="iPad Simulator")
	{
		var str1 = frmAppSettings.txtAppSet.text+" ";
		var str2 = frmAppSettings.CmbAppSet.selectedKey;
	}
	else
	{
		var str1 = frmAppSetWrite.txtAppSet.text+" ";
		var str2 = frmAppSetWrite.CmbAppSet.selectedKey;
	}
	kony.application.settings.write ("key1",str1,onsuccesscallbackw, onfailurebackw);
	kony.application.settings.write ("key2",str2,onsuccesscallbackWrite, onfailurebackWrite);
	
}
/*****************************************************************
*	Name    : write
*	Author  : Kony 
*	Purpose : To write the application settings using kony.application.settings.write API for tablet platform
******************************************************************/

function tabWriteSettings()
{
	frmAppSettings.lblAppAfterSet.text = "";
	kony.print("we are here");
	frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(1);
	var len = frmDeviceFeatures.sbxDevFeatureDeatils.widgets().length ;
	kony.print("we are here again"+len);
	frmDeviceFeatures.sbxDevFeatureDeatils.add(frmAppSettings.hbxAppSettingsWrite);
}


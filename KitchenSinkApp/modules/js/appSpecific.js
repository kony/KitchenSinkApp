	
/*****************************************************************
*	Name    : onGestureFunction
*	Author  : Kony 
*	Purpose : To give an alert as which gesture is performed on the form 'frmGestures'
******************************************************************/

function onGestureFunction(commonWidget,gestureInfo)// The callback function when the gesture event is triggered.
{
	frmGestures.imgGes.isVisible = true;
	try
	{
		var direction = "";
		var GesType = ""+gestureInfo.gestureType;
		var tapParams = gestureInfo.gesturesetUpParams.taps;
		if (GesType == "1") //Double tap gesture
		{  
		    if(kony.os.deviceInfo().name == "thinclient" && channel !="tablet" && channel !="desktopweb")
	        	frmGestures.lblGesture.text ="A Double tap gesture was performed."; 
	        else if (channel=="tablet" ||channel=="desktopweb" )
	        	frmGestures.lblGestureInfo.text = "A Double tap gesture was performed."; 
			frmGestures.imgGes.src = "doubletap.png";
		}
		else if (GesType == "2") //Swipe gesture
		{ 
			var swipeDirection = ""+gestureInfo.swipeDirection; //Read swipe direction
			if (swipeDirection == "1") 
			{
				direction = "LEFT";
				frmGestures.imgGes.src = "arrowsleft.png";
			}
			else if (swipeDirection == "2") 
			{
				direction = "RIGHT";
				frmGestures.imgGes.src = "arrowsright.png";
			}
			else if (swipeDirection == "3") 
			{
				direction = "TOP";
				frmGestures.imgGes.src = "arrowstop.png";
			}
			else
			{
				direction = "BOTTOM";
				frmGestures.imgGes.src = "arrowsbottom.png";
			}
			
			if(kony.os.deviceInfo().name == "thinclient" && channel !="tablet" && channel !="desktopweb")
	        	frmGestures.lblGesture.text = "A swipe gesture was performed in the "+direction+" direction."; 
	        else if (channel=="tablet" || channel =="desktopweb")
	        	frmGestures.lblGestureInfo.text = "A swipe gesture was performed in the "+direction+" direction.";  
		}
		else if (GesType == "3") 
		{   
		    if(kony.os.deviceInfo().name == "thinclient" && channel !="tablet"&& channel !="desktopweb")
	        	frmGestures.lblGesture.text = "A longpress gesture was performed"; 
	         else if (channel=="tablet"|| channel =="desktopweb")
	        	frmGestures.lblGestureInfo.text =  "A longpress gesture was performed"; 
			frmGestures.imgGes.src = "longpress.png";
		}
	}
	catch(err)
	{
		alert("error in gesture call back"+err);
	}
}

/*****************************************************************
*	Name    : GenericGestureHandler
*	Author  : Kony 
*	Purpose : To set gestures(Double tap,Swipe,Long press) to the form 'frmGestures'
******************************************************************/

function GenericGestureHandler()//This function registers the Gesture events for the widgets.
{
	try
	{
		frmGestures.setGestureRecognizer(1, {fingers :1, taps :2}, onGestureFunction) ;//double tap gesture
		frmGestures.setGestureRecognizer(2, {fingers:1,swipedistance:50,swipevelocity:75}, onGestureFunction); // swipe with default parameters
		frmGestures.setGestureRecognizer(3, {pressDuration:2}, onGestureFunction); //2 sec press duration
	}
	catch(err)
	{
		alert("error while regestering the gestures"+err)
	}
}
	

/*****************************************************************
*	Name    : hIS
*	Author  : Kony 
*	Purpose : To find an image which is selected from the horizontal image strip.This is the onselection event callback of HZImageStrip.
******************************************************************/	
	
function hIS(eventobj)
{
	var focIn = eventobj.selectedIndex;
	if(focIn==0)
		frmImgStrip.lblhIS.text ="First Image is selected";
	else if(focIn==1)
		frmImgStrip.lblhIS.text ="Second Image is selected";
	else if(focIn==2)
		frmImgStrip.lblhIS.text ="Third Image is selected";
	else if (focIn==3)
		frmImgStrip.lblhIS.text ="Fourth Image is selected";
	else if(focIn==4) 
		frmImgStrip.lblhIS.text ="Fifth Image is selected";
	else if(focIn==5)
		frmImgStrip.lblhIS.text ="Sixth Image is selected";
	else if(focIn==6)
		frmImgStrip.lblhIS.text ="Seventh Image is selected";
	else		
    	{}
}

/*****************************************************************
*	Name    : setBadge
*	Author  : Kony 
*	Purpose : To set initial badge value as '0' for button widget 'btnBadge' and application icon.
******************************************************************/	

function setBadge(  )
{
	frmBadge.btnBadge.setBadge("0","");//Set badge value on  button widget
  	kony.application.setApplicationBadgeValue(""+0);
}

/*****************************************************************
*	Name    : BadgeIncrease
*	Author  : Kony 
*	Purpose : To increase the badge value on button 'btnBadge' as well as application icon when ever user clicks the button 'btnBadge'.
******************************************************************/

function BadgeIncrease( )
{
	var counter = kony.os.toNumber(frmBadge.btnBadge.getBadge ()) + 1;// read badge value from button and increment it with 1 
	kony.print("this gets executed " + counter+ "type is "+typeof(counter));
	frmBadge.btnBadge.setBadge ("" + counter, "");// Set badge value on the button widget
	kony.application.setApplicationBadgeValue("" + counter);//Set badge value on app icon
}

/*****************************************************************
*	Name    : appMenuCalBack
*	Author  : Kony 
*	Purpose : To go to home screen when ever user clicks appmenu items except he clicks on 'exit' appmenu item.
******************************************************************/

function appMenuCalBack()
{
	frmHome.show();
}

/*****************************************************************
*	Name    : appExitCallBack
*	Author  : Kony 
*	Purpose : To exit from the app when ever user clicks 'exit' appmenu item.
******************************************************************/

function appExitCallBack()
{
	kony.application.exit();
}

/*****************************************************************
*	Name    : createAppMenu
*	Author  : Kony 
*	Purpose : To create app menu programatically.
******************************************************************/

function createAppMenu() 
{
	
	kony.print("entered app menu ********************************************************************************  ")
	//Animation
	if (kony.os.deviceInfo().name =="thinclient" && channel != "tablet" && channel != "desktopweb" )
		var animationMItem =  ["animationId", "Animation", "app_animation.png",function aniMenuCallBack(){frmAniSPA.show()}];
	else if (channel == "mobile" && kony.os.deviceInfo().name == "android")
   		var animationMItem =  ["animationId", "Animation", "app_animation.png",function aniMenuCallBack(){frmAniAnd.show()}];
	else if (channel == "tablet" || channel == "desktopweb")
   		var animationMItem =  ["animationId", "Animation", "app_animation.png",function aniMenuCallBack(){frmAnimations.show()}];
	else if (channel == "mobile" &&  kony.os.deviceInfo().name == "WindowsPhone")
   		var animationMItem =  ["animationId", "Animation", "app_animation.png",function aniMenuCallBack(){frmAniWin.show()}];
	else
		var animationMItem =  ["animationId", "Animation", "app_animation.png",function aniMenuCallBack(){frmAni.show()}];
	//Home	
	var homeMItem = ["homeId", "Home", "app_home.png", function homeMenuCallBack(){frmHome.show()}];
	//Exit
	if( kony.os.deviceInfo().name != "thinclient")
		var closeMItem = ["closeId", "Close", "app_close.png",function closeMenuCallBack(){kony.application.exit()}];
	//DeviceFeatures	
	if (channel=="tablet" || channel == "desktopweb")
		var featuresMItem = ["featuresId", "Features", "app_features.png",function featuresMenuCallBack(){frmDeviceFeatures.show()}];
	else
		var featuresMItem = ["featuresId", "Features", "app_features.png",function featuresMenuCallBack(){frmDvcFeatures.show()}];
	//UI Interface	
	if (channel=="tablet"|| channel == "desktopweb")
		var uiMItem = ["uiId", "UI", "app_ui.png",function uiMenuCallBack(){frmUInterface.show()}];
	else
		var uiMItem = ["uiId", "UI", "app_ui.png",function uiMenuCallBack(){frmUICategory.show()}];
	//Defining app menu
	if(channel == "mobile" && kony.os.deviceInfo().name == "WindowsPhone")
  	  	var appMenu= [homeMItem,animationMItem,featuresMItem,closeMItem];
    else if(kony.os.deviceInfo().name == "thinclient")
    	var appMenu= [homeMItem,uiMItem,animationMItem,featuresMItem];
    else if(kony.os.deviceInfo().name == "Windows" &&channel == "tablet")
    	var appMenu= [homeMItem,uiMItem,featuresMItem,closeMItem];
    else
    	var appMenu= [homeMItem,uiMItem,animationMItem,featuresMItem,closeMItem];
    //Creating app menu	
    if(kony.os.deviceInfo().name == "thinclient"&& channel != "tablet" && channel != "desktopweb")
	{
		kony.application.createAppMenu("ksaAppMenu", appMenu, "appMenuSPA", "");
	}
    else if(channel == "tablet" ||  channel == "desktopweb")
    {
		kony.application.createAppMenu("ksaAppMenu", appMenu, "AppMenuIpad", "");
	}
	else if(channel == "mobile" && kony.os.deviceInfo().name == "WindowsPhone")
    {
  	  kony.application.createAppMenu("ksaAppMenu", appMenu, "appMenuSPA", "");
    }
    else 
    {
  	  kony.application.createAppMenu("ksaAppMenu", appMenu, "", "");
    }
    //Set app menu
    kony.application.setCurrentAppMenu("ksaAppMenu");
    
    kony.print("Exited app menu ********************************************************************************  ")
}

/*****************************************************************
*	Name    : orientation
*	Author  : Kony 
*	Purpose : To display the orientation when ever the orientation is changed.
******************************************************************/

function orientation(x,y)
{
	if(kony.os.getDeviceCurrentOrientation()==constants.DEVICE_ORIENTATION_PORTRAIT)
            frmComplex.lblComplex.text = "Please rotate the device to observe Landscape mode";
    else if(kony.os.getDeviceCurrentOrientation()==constants.DEVICE_ORIENTATION_LANDSCAPE)
            frmComplex.lblComplex.text = "Please rotate the device to observe Portrait mode";
    else
    {}
}

/*****************************************************************
*	Name    : yetToImplement
*	Author  : Kony 
*	Purpose : To display an alert 'Not implemented in this Demo'
******************************************************************/

function yetToImplement()
{
	alert("Not implemented in this Demo");
}


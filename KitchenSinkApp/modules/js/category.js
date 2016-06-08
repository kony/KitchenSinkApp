
/*****************************************************************
*	Name    : setChannelDesktop
*	Author  : Kony 
*	Purpose : To set the channel parameter value as "setChannelDesktop" to identify the application is for desktopweb channels.
******************************************************************/
// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.

function setChannelDesktop() // this function is called in the preappinit of the application properties
{
	channel ="desktopweb";
}

/*****************************************************************
*	Name    : setChannelTablet
*	Author  : Kony 
*	Purpose : To set the channel parameter value as "tablet" to identify the application is for tablet channels .
******************************************************************/

function setChannelTablet() // this function is called in the preappinit of the application properties
{
	channel ="tablet";
}

/*****************************************************************
*	Name    : setChannelTablet
*	Author  : Kony 
*	Purpose : To set the channel parameter value as "mobile" to identify the application is for mobile channels.
******************************************************************/

function setChannelMobile() // this function is called in the preappinit of the application properties
{
	channel ="mobile";
}

/*****************************************************************
*	Name    : platformCheck
*	Author  : Kony 
*	Purpose : To check the platform on which the user is running the app so that other platform icons will be disabled .
******************************************************************/

function platformCheck()
{
	var platform = kony.os.deviceInfo().name ;
	if(channel == "tablet"||channel == "desktopweb")
	{
		switch(platform)
		{
			case "android":
				frmPlatforms.btnIOSPF.skin = frmPlatforms.btnIOSPF.focusSkin;
				frmPlatforms.btnWinPF.skin = frmPlatforms.btnWinPF.focusSkin;
				frmPlatforms.btnHTMLPF.skin = frmPlatforms.btnHTMLPF.focusSkin;
				break;
			case "iPad":
			case "iPad Simulator":
				frmPlatforms.btnAndroidPF.skin = frmPlatforms.btnAndroidPF.focusSkin;
				frmPlatforms.btnWinPF.skin = frmPlatforms.btnWinPF.focusSkin;
				frmPlatforms.btnHTMLPF.skin = frmPlatforms.btnHTMLPF.focusSkin;
				break;
			case "thinclient":
				frmPlatforms.btnIOSPF.skin = frmPlatforms.btnIOSPF.focusSkin;
				frmPlatforms.btnAndroidPF.skin = frmPlatforms.btnAndroidPF.focusSkin;
				frmPlatforms.btnWinPF.skin = frmPlatforms.btnWinPF.focusSkin;
				break;
			case "Windows":
				frmPlatforms.btnIOSPF.skin = frmPlatforms.btnIOSPF.focusSkin;
				frmPlatforms.btnAndroidPF.skin = frmPlatforms.btnAndroidPF.focusSkin;
				frmPlatforms.btnHTMLPF.skin = frmPlatforms.btnHTMLPF.focusSkin;
				frmHome.btnDvcFeatures.focusSkin = frmPlatforms.btnWinPF.focusSkin;
				frmHome.btnUInterface.focusSkin = frmPlatforms.btnWinPF.focusSkin;
				break;
		}
	}
	else
	{
		switch(platform)
		{
			case "android":
				frmPlatforms.btnBlackberryPF.skin = frmPlatforms.btnBlackberryPF.focusSkin;
				frmPlatforms.btnIOSPF.skin = frmPlatforms.btnIOSPF.focusSkin;
				frmPlatforms.btnWinPF.skin = frmPlatforms.btnWinPF.focusSkin;
				frmPlatforms.btnHTMLPF.skin = frmPlatforms.btnHTMLPF.focusSkin;
				break;
			case "iPhone": 
			case "iPhone Simulator":
				frmPlatforms.btnBlackberryPF.skin = frmPlatforms.btnBlackberryPF.focusSkin;
				frmPlatforms.btnAndroidPF.skin = frmPlatforms.btnAndroidPF.focusSkin;
				frmPlatforms.btnWinPF.skin = frmPlatforms.btnWinPF.focusSkin;
				frmPlatforms.btnHTMLPF.skin = frmPlatforms.btnHTMLPF.focusSkin;
				break;
			case "thinclient":
				frmPlatforms.btnBlackberryPF.skin = frmPlatforms.btnBlackberryPF.focusSkin;
				frmPlatforms.btnIOSPF.skin = frmPlatforms.btnIOSPF.focusSkin;
				frmPlatforms.btnAndroidPF.skin = frmPlatforms.btnAndroidPF.focusSkin;
				frmPlatforms.btnWinPF.skin = frmPlatforms.btnWinPF.focusSkin;
				break;
			case "WindowsPhone":
				frmPlatforms.btnBlackberryPF.skin = frmPlatforms.btnBlackberryPF.focusSkin;
				frmPlatforms.btnIOSPF.skin = frmPlatforms.btnIOSPF.focusSkin;
				frmPlatforms.btnAndroidPF.skin = frmPlatforms.btnAndroidPF.focusSkin;
				frmPlatforms.btnHTMLPF.skin = frmPlatforms.btnHTMLPF.focusSkin;
				break;
			case "blackberry":
				frmPlatforms.btnIOSPF.skin = frmPlatforms.btnIOSPF.focusSkin;
				frmPlatforms.btnAndroidPF.skin = frmPlatforms.btnAndroidPF.focusSkin;
				frmPlatforms.btnHTMLPF.skin = frmPlatforms.btnHTMLPF.focusSkin;
				frmPlatforms.btnWinPF.skin = frmPlatforms.btnWinPF.focusSkin;
				break;
		}
	}
	
		
}


/*****************************************************************
*	Name    : selectPlatform
*	Author  : Kony 
*	Purpose : Whenever user clicks on platform icons , Navigate to frmHome only when user clicks on current platform icon.
******************************************************************/

function selectPlatform(buttonObject)
{
	switch(buttonObject.id)
	{
		case "btnAndroidPF":
			if(kony.os.deviceInfo().name == "android")
			{
				frmHome.show();
			}
			break;
		case "btnIOSPF":
			if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" ||kony.os.deviceInfo().name == "iPad" ||kony.os.deviceInfo().name == "iPad Simulator")
			{
				frmHome.show();
			}
			break;
		case "btnWinPF":
			if(kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows")
			{
				frmHome.show();
			}
			break;
		case "btnBlackberryPF":
			if(kony.os.deviceInfo().name == "blackberry")
			{
				frmHome.show();
			}
			break;
		case "btnHTMLPF":
			if(kony.os.deviceInfo().name == "thinclient")
			{
				frmHome.show();
			}
			break;
				
	}

}
/*****************************************************************
*	Name    : home
*	Author  : Kony 
*	Purpose : To navigate to the different forms from home form.
******************************************************************/

function home()
{
	var segSelectedIndex = frmHome.homeSeg.selectedIndex[1];
	switch(segSelectedIndex)
	{
		
		case 0:			
			frmUICategory.show();
			break;		
		case 1:
			if(kony.os.deviceInfo().name == "blackberry" )
			{
				alert("Not available in blackberry");
			}
			else if(kony.os.deviceInfo().name == "WindowsPhone")
				frmAniWin.show();
			else if ( kony.os.deviceInfo().name == "android")
				frmAniAnd.show();
			else if (kony.os.deviceInfo().name == "thinclient")
				frmAniSPA.show();
			else if (kony.os.deviceInfo().name == "Windows 8")
				alert("Not Applicable for windows 8");
			else frmAni.show();		
			break;
		case 2:
			frmDvcFeatures.show();
			break;
		case 3:
			feedBack();
			break;
	}

}

/*****************************************************************
*	Name    : uICategory
*	Author  : Kony 
*	Purpose : To navigate to the different forms from UI interface form.
******************************************************************/

function uICategory()
{	
	var segSelectedIndex = frmUICategory.uiCatSeg.selectedIndex[1];
	switch(segSelectedIndex)
	{
		case 0:			
			frmContainerWidgets.show();
			break;		
		case 1:
			frmBasicWidgets.show();	
			break;
		case 2:
			frmAdvancedWidgets.show();
			break;
		case 3:
			if(kony.os.deviceInfo().name=="iPad" || kony.os.deviceInfo().name=="iPad Simulator" )
				frmIpadSpecificFeatures.show();
			else if(kony.os.deviceInfo().name=="iPhone" || kony.os.deviceInfo().name=="iPhone Simulator" || kony.os.deviceInfo().name=="android" || kony.os.deviceInfo().name=="thinclient"|| kony.os.deviceInfo().name=="WindowsPhone")
				frmFlex.show();
			else
				alert("Not available in this channel");
			break;
		
			
	}
	
}


/*****************************************************************
*	Name    : container
*	Author  : Kony 
*	Purpose : To navigate to the different forms from container widgets form.
******************************************************************/

function container()
{
	var segSelectedIndex = frmContainerWidgets.uiContainerSeg.selectedIndex[1];
	switch(segSelectedIndex)
	{
		case 0:
			frmFormOptions.show();
			break;
		case 1:
			frmTabs.show();
			break;
		case 2:
		  if(kony.os.deviceInfo().name == "thinclient")
			{
				frmScrollSPA.show();
				break;
			}				
			else
			{
				frmScrollBoxMenu.show();
				break;
			}
	}
}

/*****************************************************************
*	Name    : basic
*	Author  : Kony 
*	Purpose : To navigate to the different forms from basic widgets form.
******************************************************************/

function basic()
{
	var segSelectedIndex = frmBasicWidgets.segFirst.selectedIndex[1];
	switch(segSelectedIndex)
	{
			
		case 0:	
			frmBtn.show();
			break;		
		case 1:
			frmCal.show();
			break;			
		case 2:
			frmChk.show();
			break;	
		case 3:
			frmCBox.show();
			break;
		case 4:
			frmDatagrd.show();
			break;	
		case 5:
			frmImage.show();
			break;
		case 6:
			frmLbl.show();
			break;							
		case 7:
			frmLink.show();
			break;				
		case 8:
			frmLstBox.show();
			break;	
		case 9:
			frmRdo.show();
			break;
		case 10:
			frmRichText.show();
			break;	
		case 11:
			if(kony.os.deviceInfo().name == "thinclient")
			{
				alert("Not Available in SPA");
				break;
			}
			else
			{
				frmSlider.show();
				break;
			}			
		case 12:
			frmTxtArea.show();
			break;
		case 13:
			frmTbx.show();
			break;
		case 14:
			frmIcons.show();
			break;
		
	}  	

}

/*****************************************************************
*	Name    : advanced
*	Author  : Kony 
*	Purpose : To navigate to the different forms from advanced widgets form.
******************************************************************/

function advanced()
{
	var segSelectedIndex = frmAdvancedWidgets.segFirst.selectedIndex[1];
	switch(segSelectedIndex)
	{
		case 0:	
			frmSegmentOptions.show();
			break;		
		case 1:
			frmImgStrip.show();
			break;			
		case 2:
			frmImgGal.show();
			break;	
		case 3:
			frmMap.show();
			break;
		case 4:
			if(kony.os.deviceInfo().name =="iPad" || kony.os.deviceInfo().name=="iPad Simulator")
			{
				frmBrowserOptions.show();			
				break;
			}
			else if(kony.os.deviceInfo().model == "iPhone Simulator")
			{
				alert("Works only on device");
				break;
			}
			else
			{
				frmPhn.show();
				break;	
			}
		case 5:
			if(kony.os.deviceInfo().name =="iPad" || kony.os.deviceInfo().name=="iPad Simulator")
			{
				frmSwitch.show();
				break;
			}
			else
			{
				frmBrowserOptions.show();			
				break;			
			}
									
		case 6:
			if(kony.os.deviceInfo().name == "blackberry" || kony.os.deviceInfo().name == "android" || kony.os.deviceInfo().name == "thinclient")
			{
				frmPickerView.show();
				//alert("Available only in iPhone and WindowsPhone");
				break;
			}
			else
			{
				frmSwitch.show();
				break;
			}			
		case 7:
			if(kony.os.deviceInfo().name == "WindowsPhone" && kony.os.deviceInfo().version.substring(0,1)=="7")
			{
				set3DOSData();
				frm3DObj.show();
				break;
			}
			else 
			{
				frmPickerView.show();
				break;
			}
		case 8:
			if(kony.os.deviceInfo().name == "WindowsPhone")
			{
				frmPickerView.show();
				break;
			}
	} 

}


/*****************************************************************
*	Name    : switchandOS3D
*	Author  : Kony 
*	Purpose : To disable some features for BB which are not supported
******************************************************************/
function switchandOS3D()
{

	if(kony.os.deviceInfo().name == "blackberry" || kony.os.deviceInfo().name == "android"  )
	{
	
	    frmAdvancedWidgets.segFirst.data= [{
	            "lblFirst": "Segment"
	        }, {
	            "lblFirst": "Hz Image Strip"
	        }, {
	            "lblFirst": "Image Gallery"
	        }, {
	            "lblFirst": "Map"
	        }, {
	            "lblFirst": "Phone"
	        }, {
	            "lblFirst": "Browser"
	        },{
	            "lblFirst": "Picker view"
	        }];
	
	}
	else if (kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator" )
	{
		
	    frmAdvancedWidgets.segFirst.data= [{
	            "lblFirst": "Segment"
	        }, {
	            "lblFirst": "Hz Image Strip"
	        }, {
	            "lblFirst": "Image Gallery"
	        }, {
	            "lblFirst": "Map"
	        }, {
	            "lblFirst": "Browser"
	        }, {
	            "lblFirst": "Switch"
	        }];
	}
	else if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" )
	{
		
	    frmAdvancedWidgets.segFirst.data= [{
	            "lblFirst": "Segment"
	        }, {
	            "lblFirst": "Hz Image Strip"
	        }, {
	            "lblFirst": "Image Gallery"
	        }, {
	            "lblFirst": "Map"
	        }, {
	            "lblFirst": "Phone"
	        }, {
	            "lblFirst": "Browser"
	        }, {
	            "lblFirst": "Switch"
	        },{
	            "lblFirst": "Picker view"
	        }];
	}
	else if(kony.os.deviceInfo().name == "WindowsPhone" && kony.os.deviceInfo().version.substring(0,1)=="8")
	{
			
		    frmAdvancedWidgets.segFirst.data= [{
		            "lblFirst": "Segment"
		        }, {
		            "lblFirst": "Hz Image Strip"
		        }, {
		            "lblFirst": "Image Gallery"
		        }, {
		            "lblFirst": "Map"
		        }, {
		            "lblFirst": "Phone"
		        }, {
		            "lblFirst": "Browser"
		        }, {
		            "lblFirst": "Switch"
		        },{
	          		"lblFirst": "Picker view"
	        	}];
	}
	else
	{
		
	    frmAdvancedWidgets.segFirst.data= [{
	            "lblFirst": "Segment"
	        }, {
	            "lblFirst": "Hz Image Strip"
	        }, {
	            "lblFirst": "Image Gallery"
	        }, {
	            "lblFirst": "Map"
	        }, {
	            "lblFirst": "Phone"
	        }, {
	            "lblFirst": "Browser"
	        }, {
	            "lblFirst": "Switch"
	        }, {
	            "lblFirst": "ObjectSelector3D"
	        },{
	            "lblFirst": "Picker view"
	        }];
	}

}
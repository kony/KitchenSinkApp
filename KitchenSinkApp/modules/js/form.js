
/*****************************************************************
*	Name    : dismissLoadingScreen
*	Author  : Kony 
*	Purpose : To dismiss the loading screen
******************************************************************/
// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.
function dismissLoadingScreen()

{
	kony.application.dismissLoadingScreen();
	kony.timer.cancel("timer4");
	flag =0;
	flag1 =0;
}

/*****************************************************************
*	Name    : dismissLoadingScreen1
*	Author  : Kony 
*	Purpose : To dismiss the loading screen
******************************************************************/

function dismissLoadingScreen1()
{
	kony.application.dismissLoadingScreen();
	kony.timer.cancel("timer5");
	flag =0;
	flag1 =0;
}



/*****************************************************************
*	Name    : frmOptions
*	Author  : Kony 
*	Purpose : To navigate to the appropriate form from 'frmFormOptions'.For example,Form with Image background ,Form with titleBar etc
******************************************************************/

function frmOptions()
{

	var segSelectedIndex = frmFormOptions.frmOptSeg.selectedIndex[1];
	
	switch(segSelectedIndex)
	{
		
		case 0:			
			frmForm.show();
			break;		
		case 1:
			frmFormImgBck.show();			
			break;
		case 2:
			frmHdrFooter.show();
			break;			
		case 3:			
			if(kony.os.deviceInfo().name == "thinclient")
			{
				alert("Not available in SPA");
				break;
			}
			else if(kony.os.deviceInfo().name == "WindowsPhone")
			{
				alert("Not available in Windows");
				break;
			}	
			else
			{
				frmTtlbarOptions.show();
				break;
			}
		case 4:	
			
			if(flag == 0)
			{	
				flag = 1;
				if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator"  )
					kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
				else
					kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
					
				kony.timer.schedule("timer4", dismissLoadingScreen, 4,false);				
				break;
			}
			else
			{
				break;
			}
			
		case 5:
			if(flag1 == 0)
			{
				flag1 =1;
				if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "iPad" )
					kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
				else
					kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
				kony.timer.schedule("timer5", dismissLoadingScreen1, 4,false);				
				break;
			}
			else
			{
				break;
			}
			
		case 6:
			frmGestures.show();
			break;		
		case 7:			
			frmComplex.show();		
			break;	
		case 8:
			frmPopup.show();
			break;
			
	}
}

/*****************************************************************
*	Name    : titleBar
*	Author  : Kony 
*	Purpose : To show the the titleBar form
******************************************************************/

function titleBar()
{
	if(channel == "tablet"|| channel == "desktopweb")
		frmTitlebarOptions.show();
	else
		frmTtlbarOptions.show();
}
/*****************************************************************
*	Name    : goToHome
*	Author  : Kony 
*	Purpose : navigate to 'frmHome'
******************************************************************/
function goToHome()
{
	frmHome.show();
}
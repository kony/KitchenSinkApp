
/****************************************************************
*	Name    : setScrollBox
*	Author  : Kony
*	Purpose : To show the scrollbox end part initially
******************************************************************/

function setScrollBox()
{

	glbScrollBegining = false;
	frmScrollBoxMenu.sboxGlobalHome.scrollToEnd()
	
}

/****************************************************************
*	Name    : tab_LoadingScreenCenter
*	Author  : Kony
*	Purpose : To show the loading screen at the centre of the form
******************************************************************/

function tab_LoadingScreenCenter()
{
	if(flag == 0)
	{	
		flag = 1;
		if( kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name == "iPad Simulator"|| kony.os.deviceInfo().name == "iPad Simulator"  )
			kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
		else
			kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
			
		kony.timer.schedule("timer4", dismissLoadingScreen, 4,false);				
	}
}

/****************************************************************
*	Name    : tab_LoadingScreenFull
*	Author  : Kony
*	Purpose : To show the loading screen at form level
******************************************************************/

function tab_LoadingScreenFull()
{
	if(flag1 == 0)
	{
		flag1 =1;
		if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name == "iPad Simulator")
			kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
		else
			kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
		kony.timer.schedule("timer5", dismissLoadingScreen1, 4,false);				
	}
}

/****************************************************************
*	Name    : orientChange_frmPlatforms_androidTab
*	Author  : Kony
*	Purpose : To reduce the top margin on orientation change for frmPlatforms form for android tablet.
******************************************************************/

function orientChange_frmPlatforms_androidTab()
{
	
	if(kony.os.deviceInfo().name == "android" && kony.os.getDeviceCurrentOrientation() == constants.DEVICE_ORIENTATION_LANDSCAPE )
	{
		frmPlatforms.hbxKonyLogoPFScreen.margin =[0,0,0,0];
		frmPlatforms.lblWelcome.margin =[4,0,4,0];
		frmPlatforms.hbxAndNiOSPlatforms.margin =[4,0,4,0];
		frmPlatforms.hbxWinNBBplatforms.margin = [4,0,4,0];
	}
}






	
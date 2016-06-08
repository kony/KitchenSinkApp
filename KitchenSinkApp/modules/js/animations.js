/*****************************************************************
*	Name    : goToFrmAni
*	Author  : Kony 
*	Purpose : To navigate to 'frmAni' from the animated form for iPhone platform
******************************************************************/

function goToFrmAni()
{
	if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator")
		frmAnimations.show();
	else
		frmAni.show();
	
}



/*****************************************************************
*	Name    : onClickOfFrmAniWin
*	Author  : Kony 
*	Purpose : To navigate to the appropriate animated forms for windows platform.
******************************************************************/

function onClickOfFrmAniWin(eventobj)
{ 
    focIn = eventobj.selectedIndex[1];
    kony.print("focInfocInfocInfocInfocIn"+focIn)
    if(focIn==0)
		frmAniWinRotate3DSingle.show();
	else if(focIn==1)
		frmAniWinRotate3DDual.show();
	else if(focIn==2)
		frmAniWinSlide.show();
	else if (focIn==3)
		frmAniWinPop.show();
	else if(focIn==4) 
		frmAniWinSqueeze.show();
	else
	   kony.print("no form shown");
}

/*****************************************************************
*	Name    : onClickOfFrmAniAndSeg
*	Author  : Kony 
*	Purpose : To navigate to the appropriate animated forms from 'frmAniAnd' .This function is meant for android platform.
******************************************************************/

function onClickOfFrmAniAndSeg(eventobj)
{
	var focIn = eventobj.selectedIndex[1];
	if(focIn==0)
		frmAnibottomtop.show();
	else if(focIn==1)
		frmAnifromleft.show();
	else if(focIn==2)
		frmAnifromright.show();
	else if (focIn==3)
		frmAnitoright.show();
	else if(focIn==4) 
		frmAnitoleft.show();
	else if(focIn==5)
		frmAnifromcenter.show();
	else if(focIn==6)
		frmAnitoprightbottom.show();
	else if(focIn==7)
		frmAnibottomlefttop.show();
	else if(focIn==8)
		frmAnibottomtopstyle1.show();
	else
	   kony.print("no form shown");
 
}

/*****************************************************************
*	Name    : onClickOfFrmAniSPASeg
*	Author  : Kony 
*	Purpose : To navigate to the appropriate animated forms for SPA platform.
******************************************************************/

function onClickOfFrmAniSPASeg(eventobj)
{
	var focIn = eventobj.selectedIndex[1];
	if(focIn==0)
		frmAnitop.show();
	else if(focIn==1)
		frmAnibottom.show();
	else if(focIn==2)
		frmAniright.show();
	else if (focIn==3)
		frmAnileft.show();
	else
	   kony.print("no form shown");
 
}

/*****************************************************************
*	Name    : onClickOfFrmAniSeg
*	Author  : Kony 
*	Purpose : To navigate to the appropriate animated forms from 'frmAni' .This function is meant for iphone platform.
******************************************************************/

function onClickOfFrmAniSeg(eventobj)
{
	var focIn = eventobj.selectedIndex[1];
	if(focIn==0)
		frmAniFlip.show();
	else if(focIn==1)
		frmAniFade.show();
	else if(focIn==2)
		frmAniMoveIn.show();
	else if (focIn==3)
		frmAniPush.show();
	else if(focIn==4) 
		frmAniReveal.show();
	else if(focIn==5)
		frmAniCurl.show();
	else if(focIn==6)
		frmAni2SplitHorizontalIn.show();
	else if(focIn==7)
		frmAni2SplitVerticalIn.show();
	else if(focIn==8)
		frmAni4SplitIn.show();
	else if(focIn==9)
		frmAni4SplitRotateIn.show();
	else if(focIn==10)
		frmAni2SplitHorizontalOut.show();
	else if(focIn==11)
		frmAni2SplitVerticalOut.show();
	else if(focIn==12)
		frmAni4SplitOut.show();
	else if(focIn==13)
		frmAni4SplitRotateOut.show();
	else if(focIn==14)
		frmAniSwitchLeft.show();
	else if(focIn==15)
		frmAniSwitchRight.show();
	else if(focIn==16)
		frmAniCloth.show();
	else if(focIn==17)
		frmAniFlipRight.show();
	else if(focIn==18)
		frmAniFlipLeft.show();
	else if(focIn==19)
		frmAniDoor.show();
	else if(focIn==20)
		frmAniRotateExchange.show();
	else if(focIn==21)
		frmAniMoveInFromBottom.show();
	else if(focIn==22)
		frmAniMoveInFromTop.show();
	else		
	   kony.print("no form shown");
 
}

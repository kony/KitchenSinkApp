/****************************************************************
*	Name    : resetWidgetPositions
*	Author  : Kony 
*	Purpose : To reset the positions of widgets before revisting into same flexForm.
******************************************************************/
function resetWidgetPositions()
{
  if(kony.os.deviceInfo().name == "android")
		frmFlex.lblFlexLine.text = "Line";
   if(kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name ==  "Windows8" )
   {
		frmFlex.lblFlexLine.text = "Line";
		frmFlex.imgFlex.left = -112;
		frmFlex.imgFlex.top = 76;
		frmFlex.lblFlexFName.left = 500;
		frmFlex.lblFlexFName.top = 76;
		frmFlex.lblFlexLName.left = 500;
		frmFlex.lblFlexLName.top = 112;
		frmFlex.lblFlexCompany.left = 500;
		frmFlex.lblFlexCompany.top = 148;
		frmFlex.lblFlexPhoneHome.top = -30;
		frmFlex.lblFlexPhoneWork.top = -30;
		frmFlex.lblFlexLine.left = -500;
		frmFlex.lblFlexLine.top = 280;
		frmFlex.lblFlexEmail.top = 1000;
		frmFlex.lblFlexHomePage.top = 1000;
		frmFlex.lblFlexAdress.top = 1000;
		frmFlex.lblFlexStreet.top = 1000;
		frmFlex.lblFlexArea.top = 1000;
		frmFlex.lblFlexCity.top = 1000;
   }
   else
   {
		frmFlex.imgFlex.left = -112;
		frmFlex.imgFlex.top = 16;
		frmFlex.lblFlexFName.left = 500;
		frmFlex.lblFlexFName.top = 16;
		frmFlex.lblFlexLName.left = 500;
		frmFlex.lblFlexLName.top = 52;
		frmFlex.lblFlexCompany.left = 500;
		frmFlex.lblFlexCompany.top = 88;
		frmFlex.lblFlexPhoneHome.top = -30;
		frmFlex.lblFlexPhoneWork.top = -30;
		frmFlex.lblFlexLine.left = -500;
		frmFlex.lblFlexLine.top = 220;
		frmFlex.lblFlexEmail.top = 1000;
		frmFlex.lblFlexHomePage.top = 1000;
		frmFlex.lblFlexAdress.top = 1000;
		frmFlex.lblFlexStreet.top = 1000;
		frmFlex.lblFlexArea.top = 1000;
		frmFlex.lblFlexCity.top = 1000;
   }
	
}
/****************************************************************
*	Name    : animationConfig
*	Author  : Kony 
*	Purpose : To Configure Animation duration, iterationCount, delay and fillMode.
******************************************************************/
function animationConfig() 
{
	var config = {
	   "duration":2.0,
	   "iterationCount":1,
	   "delay":0,
	   "fillMode":kony.anim.FILL_MODE_FORWARDS 
	};	
	return config;
}
/****************************************************************
*	Name    : animationObj
*	Author  : Kony 
*	Purpose : To Animate widgets inside flex layout using createAnimation API .
******************************************************************/
function animationObj(top, left) 
{
	var moveObject = {		
		100 :{"left":left,"top":top}
	} 
	var animationObject = kony.ui.createAnimation(moveObject);
	return animationObject;
}

/****************************************************************
*	Name    : animateBottomPart
*	Author  : Kony 
*	Purpose : To Animate widgets located at bottom Part inside flex layout using animate API.
******************************************************************/
function animateBottomPart()
{
	if(kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows8" )
  	{
	    frmFlex.lblFlexEmail.animate(animationObj(300,12), animationConfig(),{});
		frmFlex.lblFlexHomePage.animate(animationObj(340,12), animationConfig(),{});
		frmFlex.lblFlexAdress.animate(animationObj(380,12), animationConfig(),{});
		frmFlex.lblFlexStreet.animate(animationObj(420,12), animationConfig(),{});
		frmFlex.lblFlexArea.animate(animationObj(460,12), animationConfig(),{});
		frmFlex.lblFlexCity.animate(animationObj(500,12), animationConfig(),{}); 
  	}
  	else
  	{
	   	frmFlex.lblFlexEmail.animate(animationObj(240,12), animationConfig(),{});
		frmFlex.lblFlexHomePage.animate(animationObj(280,12), animationConfig(),{});
		frmFlex.lblFlexAdress.animate(animationObj(320,12), animationConfig(),{});
		frmFlex.lblFlexStreet.animate(animationObj(360,12), animationConfig(),{});
		frmFlex.lblFlexArea.animate(animationObj(400,12), animationConfig(),{});
		frmFlex.lblFlexCity.animate(animationObj(440,12), animationConfig(),{}); 
    }

}
/****************************************************************
*	Name    : animateLine
*	Author  : Kony 
*	Purpose : To Animate line inside flex layout using animate API.
******************************************************************/
function animateLine()
{
	 if(kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows8"  )
	 {
		frmFlex.lblFlexLine.animate(animationObj(280,0), animationConfig(),{"animationEnd" : animateBottomPart});
	 }
	 else
 	 {
 	    frmFlex.lblFlexLine.animate(animationObj(220,0), animationConfig(),{"animationEnd" : animateBottomPart});
 	 }
	
}
/****************************************************************
*	Name    : animatePhoneNumbers
*	Author  : Kony 
*	Purpose :To Animate PhoneNumber Label inside flex layout using animate API.
******************************************************************/
function animatePhoneNumbers()
{
	if(kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows8"  )
	 {
		 frmFlex.lblFlexPhoneHome.animate(animationObj(200,12), animationConfig(),{});
		 frmFlex.lblFlexPhoneWork.animate(animationObj(240,12), animationConfig(),{"animationEnd" : animateLine});
	}
	else
	{
		 frmFlex.lblFlexPhoneHome.animate(animationObj(140,12), animationConfig(),{});
	     frmFlex.lblFlexPhoneWork.animate(animationObj(180,12), animationConfig(),{"animationEnd" : animateLine}); 
	}
	        
}
/****************************************************************
*	Name    : animateFlex
*	Author  : Kony 
*	Purpose : To Animating widgets inside flex layout using animate and createAnimation APIs.
******************************************************************/
function animateFlex()
{
	 if(kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows8"  )
	 {
		frmFlex.imgFlex.animate(animationObj(76,12), animationConfig(),{});
		frmFlex.lblFlexFName.animate(animationObj(76,130), animationConfig(),{});
		frmFlex.lblFlexLName.animate(animationObj(112,130), animationConfig(),{});
		frmFlex.lblFlexCompany.animate(animationObj(148,130), animationConfig(),{"animationEnd" : animatePhoneNumbers});
	 }
	 else
	 {
		frmFlex.imgFlex.animate(animationObj(16,12), animationConfig(),{});
		frmFlex.lblFlexFName.animate(animationObj(16,130), animationConfig(),{});
		frmFlex.lblFlexLName.animate(animationObj(52,130), animationConfig(),{});
		frmFlex.lblFlexCompany.animate(animationObj(88,130), animationConfig(),{"animationEnd" : animatePhoneNumbers});
	}
}
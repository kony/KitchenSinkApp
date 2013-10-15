
/*****************************************************************
*	Name    : frmOptionsSPA
*	Author  : Kony 
*	Purpose : To naviagte to the appropriate form from 'frmFormOptions'.This function is meant for SPA platform .
******************************************************************/

function frmOptionsSPA()
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
			if(flag == 0)
			{	
				flag = 1;
				kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,false,null);
				kony.timer.schedule("timer4", dismissLoadingScreen, 4,false);				
				break;
			}
			else
			{
				break;
			}
		case 4:
			frmComplex.show();
			break;
		case 5:
			frmGestures.show();
			break;	
		case 6:
			frmPopup.show();
			break;
			
	}
}

/*****************************************************************
*	Name    : basicSPA
*	Author  : Kony 
*	Purpose : To naviagte to the appropriate form from 'frmBasicWidgets' .This function is meant for SPA platform .
******************************************************************/

function basicSPA()
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
			frmTxtArea.show();
			break;
		case 12:
			frmTbx.show();
			break;
		case 13:
			frmIcons.show();
			break;
	}  	

}

/*****************************************************************
*	Name    : advancedSPA
*	Author  : Kony 
*	Purpose : To naviagte to the appropriate form from 'frmAdvancedWidgets' .This function is meant for SPA platform .
******************************************************************/

function advancedSPA()
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
			frmPhn.show();
			break;	
		case 5:
			frmBrowserOptions.show();			
			break;							
	} 

}

/*****************************************************************
*	Name    : segwidMultiTemplateSPA
*	Author  : Kony 
*	Purpose : To add multiple row templates to the segment .This function is meant for SPA platform .Segment is created without any section header templates.
******************************************************************/

function segwidMultiTemplateSPA()
{
	
	frmRowTemplates.segMultiTemp.data = [
					{lbl1: "Titanium Card",lbl2: "$200",lbl3: "$400",template:hboxtemp1}, 
					{lbl1: "For more Info Please Visit ",btn1:"xyz.com",template:hbxTempSPA1},
					{lbl1: "Gold Card",lbl2: "$200",lbl3: "$400",template:hboxtemp2},
					{lbl1: "Special offers are available on Gold Card",template:hbxTempSPA2}, 
					{lbl1: "Silver Card",lbl2: "$200",lbl3: "$400",template:hboxtemp3}
				 ];	
		
}
	
/*****************************************************************
*	Name    : segMetainfoJS
*	Author  : Kony 
*	Purpose : To create a segment with rows having different skins via metainfo property. 
******************************************************************/

function segMetainfoJS()
{
	
	frmRowTemplates.segMetainfo.setData([
					{lblSegmeta1: "Titanium Card",lblSegmeta2: "$200",lblSegmeta3: "$400",metainfo:{skin:"segrowfocus"}}, 
					{lblSegmeta1: "Gold Card",lblSegmeta2: "$300",lblSegmeta3: "$100",metainfo:{skin:"rowFocusSkin"}}, 
					{lblSegmeta1: "Silver Card",lblSegmeta2: "$500",lblSegmeta3: "$600",metainfo:{skin:"rowSkin"}}
				 ]);
		
}
	

/*****************************************************************
*	Name    : SecHdrWidoutTemplatesJSSPA
*	Author  : Kony 
*	Purpose : To add different section header templates to the segment for SPA platform.Segment is created without any row templates.
******************************************************************/

function SecHdrWidoutTemplatesJSSPA()
{
	frmSecHdrWidoutTemplates.segSecHdrWidoutTmplate.widgetDataMap = {lblSecHdr1:"lblSecHdr1",lblSecHdr2:"lblSecHdr2",lblSecHdr3:"lblSecHdr3",BAccName:"BAccName",WithdrawLimit:"WithdrawLimit",CreditLimit:"CreditLimit",imgChk:"imgChk"};
	frmSecHdrWidoutTemplates.segSecHdrWidoutTmplate.data = [
							[ {lblSecHdr1:"Credit account details",lblSecHdr2:" Account No: xxxxxx0660",template:boxRefSegHdr},					
							    [
								   	{BAccName: "Titanium card",WithdrawLimit: "$200",CreditLimit: "$400",imgChk:"checkboxwhite.png"}, 
									{BAccName: "Gold card",WithdrawLimit: "$500",CreditLimit: "$800",imgChk:"checkboxwhite.png"}, 
									{BAccName: "Silver card",WithdrawLimit: "$700",CreditLimit: "$200",imgChk:"checkboxwhite.png"}
								]
							],
							
							[ {lblSecHdr1:"Savings account details",lblSecHdr2:" Account No: xxxxxx5221",lblSecHdr3:"Balance $700",template:hbxSegHdrTemp2},								
								[
									{BAccName:"Savings 1", WithdrawLimit: "$300",CreditLimit:"N/A",imgChk:"checkboxwhite.png"},
			 					 	{BAccName: "Savings 2", WithdrawLimit: "$400",CreditLimit: "N/A",imgChk:"checkboxwhite.png"}
								 ]
							],
							[ {lblSecHdr1:"Checking account details",lblSecHdr2:" Account No: xxxxxx7657",template:hbxSegHdrTemp1},
								[
									{BAccName: "Checking 1",WithdrawLimit: "N/A",CreditLimit: "$400",imgChk:"checkboxwhite.png"},
								 	{BAccName: "Checking 2",WithdrawLimit: "N/A",CreditLimit: "$800",imgChk:"checkboxwhite.png"}
			 					]
							]	
						];
	frmSecHdrWidoutTemplates.show();
}

/*****************************************************************
*	Name    : homeBtnClick
*	Author  : Kony 
*	Purpose : To set text to the label 'lblScroll1' inside the scroll box 'frmScrollSPA'
******************************************************************/

function homeBtnClick()
{
	frmScrollSPA.lblScroll1.text = "KonyOne provides a world-class development environment and mobile middleware for both business & consumer applications. KonyOne incorporates industry - tested scalability and supports every technology and deployment option available today - including truly native apps on all native OSs, thousands of devices including those with HTML5 capable browser, Single Page Applications, Wrappers, Hybrids, and traditional URL-based applications.";
}

/*****************************************************************
*	Name    : newsFeedBtnClick
*	Author  : Kony 
*	Purpose : To set text to the label 'lblScroll1' inside the scroll box 'frmScrollSPA'
******************************************************************/

function newsFeedBtnClick()
{
	frmScrollSPA.lblScroll1.text = "KonyOne's device detection database and heuristics identifies all browser categories from the most basic through different levels of HTML, CSS and JavaScript support, to all of the various HTML5-capable browsers in smartphones, tablets and the desktop. Depending on the type of browser, the user will be served markup, style and/or script appropriate and acceptable to their device, ensuring a solid experience and optimum UI.";
}

/*****************************************************************
*	Name    : MessagesBtnClick
*	Author  : Kony 
*	Purpose : To set text to the label 'lblScroll1' inside the scroll box 'frmScrollSPA'
******************************************************************/

function MessagesBtnClick()
{
	frmScrollSPA.lblScroll1.text = "Solutions for your customers, employees, vendors and partners.Configurable,  Extensible with Universal Integration.Stunning User Experience.Support for All Technologies and Devices.";
}


/*****************************************************************
*	Name    : getCurrentAdressSPA
*	Author  : Kony 
*	Purpose : To get the current location detail using JSON Service
******************************************************************/

function getCurrentAdressSPA()
{
	
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,false,null);
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
/*****************************************************************
*	Name    : orientationSPA
*	Author  : Kony 
*	Purpose : Event callback Acknowledgement on change of form orientation
******************************************************************/

function orientationSPA(l,m){
  alert("onOrientaion Change");
  alert("l is" + l);
	if(l == "portrait")
            frmComplex.lblComplex.text = "Please rotate the device to observe Landscape mode";
    else if(l== "landscape")
            frmComplex.lblComplex.text = "Please rotate the device to observe Portrait mode";
    else
    {}
}
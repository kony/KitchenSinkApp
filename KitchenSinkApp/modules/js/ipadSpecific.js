
/******************************************************************
*	Name    : onOrientation
*	Author  : Kony 
*	Purpose : To set the data as per the orientation.
*****************************************************************/

function onOrientation(  )
{
	if(kony.os.getDeviceCurrentOrientation()==constants.DEVICE_ORIENTATION_PORTRAIT)
	{
		frmIpadSplitView.hbxLandscape.isVisible = false;
		frmIpadSplitView.hbxPotrait.isVisible = true;
		frmIpadSplitView.hbxHeader.isVisible = true;
	}
	else if(kony.os.getDeviceCurrentOrientation()==constants.DEVICE_ORIENTATION_LANDSCAPE)
	{
		frmIpadSplitView.hbxLandscape.isVisible = true;
		frmIpadSplitView.hbxPotrait.isVisible = false;
		frmIpadSplitView.hbxHeader.isVisible = false;
		frmPop.dismiss ();
		
	}
	else {}
}


/******************************************************************
*	Name    : onButtonClick
*	Author  : Kony 
*	Purpose : To view the all contacts list on click of button in Potrait mode.
******************************************************************/

function onButtonClick(  )
{
	frmPop.setContext ({ widget : frmIpadSplitView.btnContacts, anchor : "bottom",sizetoanchorwidth  :true } );
	frmPop.show ();
}

/******************************************************************
*	Name    : preShowFrmIpadSplit
*	Author  : Kony 
*	Purpose : To set the data as per potrait mode at preshow of the form.
******************************************************************/

function preShowFrmIpadSplit(  )
{
	kony.print("preshow called")
	frmIpadSplitView.hbxLandscape.isVisible = false;
	frmIpadSplitView.hbxPotrait.isVisible = true;
	frmIpadSplitView.hbxHeader.isVisible = true;
}

/******************************************************************
*	Name    : segSelect
*	Author  : Kony 
*	Purpose : To view the selected contact details on segment click in Landscape
******************************************************************/

function segSelect(  )
{
	frmIpadSplitView.lblNameLS.text = frmIpadSplitView.segMaster.focusedItem.lblContact;
	frmIpadSplitView.lblCompLS.text = frmIpadSplitView.segMaster.focusedItem.Company;
	frmIpadSplitView.lblMobileLS.text = frmIpadSplitView.segMaster.focusedItem.Mobile;
	frmIpadSplitView.lblHomeLS.text = frmIpadSplitView.segMaster.focusedItem.Home;
	frmIpadSplitView.lblWorkLS.text = frmIpadSplitView.segMaster.focusedItem.Work;
	frmIpadSplitView.lblHomeFaxLS.text = frmIpadSplitView.segMaster.focusedItem.Home;
	frmIpadSplitView.lblWorkFaxLS.text = frmIpadSplitView.segMaster.focusedItem.Work;
	frmIpadSplitView.lblOtherFaxLS.text = frmIpadSplitView.segMaster.focusedItem.Work;
	frmIpadSplitView.lbleMailLS.text = frmIpadSplitView.segMaster.focusedItem.Mail;
	frmIpadSplitView.lblWorkMailLS.text = frmIpadSplitView.segMaster.focusedItem.Mail;
	frmIpadSplitView.lblOtherMailLS.text = frmIpadSplitView.segMaster.focusedItem.Mail;
	frmIpadSplitView.lblStreetLS.text = frmIpadSplitView.segMaster.focusedItem.Street;
	frmIpadSplitView.lblCityLS.text = frmIpadSplitView.segMaster.focusedItem.City;
	frmIpadSplitView.lblStateLS.text = frmIpadSplitView.segMaster.focusedItem.State;
	frmIpadSplitView.lblNameP.text = frmIpadSplitView.segMaster.focusedItem.lblContact;
	frmIpadSplitView.lblCompP.text = frmIpadSplitView.segMaster.focusedItem.Company;
	frmIpadSplitView.lblMobileP.text = frmIpadSplitView.segMaster.focusedItem.Mobile;
	frmIpadSplitView.lblHomeP.text = frmIpadSplitView.segMaster.focusedItem.Home;
	frmIpadSplitView.lblWorkP.text = frmIpadSplitView.segMaster.focusedItem.Work;
	frmIpadSplitView.lblHomeFaxP.text = frmIpadSplitView.segMaster.focusedItem.Home;
	frmIpadSplitView.lblWorkFaxP.text = frmIpadSplitView.segMaster.focusedItem.Work;
	frmIpadSplitView.lblOtherFaxP.text = frmIpadSplitView.segMaster.focusedItem.Work;
	frmIpadSplitView.lbleMailP.text = frmIpadSplitView.segMaster.focusedItem.Mail;
	frmIpadSplitView.lblWorkMailP.text = frmIpadSplitView.segMaster.focusedItem.Mail;
	frmIpadSplitView.lblOtherMailP.text = frmIpadSplitView.segMaster.focusedItem.Mail;
	frmIpadSplitView.lblStreetP.text = frmIpadSplitView.segMaster.focusedItem.Street;
	frmIpadSplitView.lblCityP.text = frmIpadSplitView.segMaster.focusedItem.City;
	frmIpadSplitView.lblStateP.text = frmIpadSplitView.segMaster.focusedItem.State;
	
}
/******************************************************************
*	Name    : popSegSelect
*	Author  : Kony 
*	Purpose : To view the selected contact details on Popup segment click in Potrait
******************************************************************/

function popSegSelect(  )
{
	frmIpadSplitView.lblNameLS.text = frmPop.segPop.focusedItem.lblContact;
	frmIpadSplitView.lblCompLS.text = frmPop.segPop.focusedItem.Company;
	frmIpadSplitView.lblMobileLS.text = frmPop.segPop.focusedItem.Mobile;
	frmIpadSplitView.lblHomeLS.text = frmPop.segPop.focusedItem.Home;
	frmIpadSplitView.lblWorkLS.text = frmPop.segPop.focusedItem.Work;
	frmIpadSplitView.lblHomeFaxLS.text = frmPop.segPop.focusedItem.Home;
	frmIpadSplitView.lblWorkFaxLS.text = frmPop.segPop.focusedItem.Work;
	frmIpadSplitView.lblOtherFaxLS.text = frmPop.segPop.focusedItem.Work;
	frmIpadSplitView.lbleMailLS.text = frmPop.segPop.focusedItem.Mail;
	frmIpadSplitView.lblWorkMailLS.text = frmPop.segPop.focusedItem.Mail;
	frmIpadSplitView.lblOtherMailLS.text = frmPop.segPop.focusedItem.Mail;
	frmIpadSplitView.lblStreetLS.text = frmPop.segPop.focusedItem.Street;
	frmIpadSplitView.lblCityLS.text = frmPop.segPop.focusedItem.City;
	frmIpadSplitView.lblStateLS.text = frmPop.segPop.focusedItem.State;
	frmIpadSplitView.lblNameP.text = frmPop.segPop.focusedItem.lblContact;
	frmIpadSplitView.lblCompP.text = frmPop.segPop.focusedItem.Company;
	frmIpadSplitView.lblMobileP.text = frmPop.segPop.focusedItem.Mobile;
	frmIpadSplitView.lblHomeP.text = frmPop.segPop.focusedItem.Home;
	frmIpadSplitView.lblWorkP.text = frmPop.segPop.focusedItem.Work;
	frmIpadSplitView.lblHomeFaxP.text = frmPop.segPop.focusedItem.Home;
	frmIpadSplitView.lblWorkFaxP.text = frmPop.segPop.focusedItem.Work;
	frmIpadSplitView.lblOtherFaxP.text = frmPop.segPop.focusedItem.Work;
	frmIpadSplitView.lbleMailP.text = frmPop.segPop.focusedItem.Mail;
	frmIpadSplitView.lblWorkMailP.text = frmPop.segPop.focusedItem.Mail;
	frmIpadSplitView.lblOtherMailP.text = frmPop.segPop.focusedItem.Mail;
	frmIpadSplitView.lblStreetP.text = frmPop.segPop.focusedItem.Street;
	frmIpadSplitView.lblCityP.text = frmPop.segPop.focusedItem.City;
	frmIpadSplitView.lblStateP.text = frmPop.segPop.focusedItem.State;
	frmPop.dismiss ();
}
/******************************************************************
*	Name    : popOverButton
*	Author  : Kony 
*	Purpose : Anchor the popup to the button.
******************************************************************/

function popOverButton(eventObj)
{
	var context  = {};
	
	switch(eventObj.text)
	{
		case "Top":
				context= {"widget":frmPopOverButton.btnFPB1,"anchor":"top","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "Bottom":
				context= {"widget":frmPopOverButton.btnFPB2,"anchor":"bottom","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "Left":
				context= {"widget":frmPopOverButton.btnFPB3,"anchor":"left","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();				
				break;
		case "Right":
				context= {"widget":frmPopOverButton.btnFPB4,"anchor":"right","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();					
				break;	
	}
}
/******************************************************************
*	Name    : popOverHbox
*	Author  : Kony 
*	Purpose : Anchor the popup to the hBox.
******************************************************************/
function popOverHbox(eventObj)
{
	var context  = {};
	
	switch(eventObj.id)
	{
		case "hbxFPH1":
				context= {"widget":frmPopOverHbox.hbxFPH1,"anchor":"top","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "hbxFPH2":
				context= {"widget":frmPopOverHbox.hbxFPH2,"anchor":"bottom","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "hbxFPH3":
				context= {"widget":frmPopOverHbox.hbxFPH3,"anchor":"left","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();				
				break;
		case "hbxFPH4":
				context= {"widget":frmPopOverHbox.hbxFPH4,"anchor":"right","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();					
				break;	
	}
}

/******************************************************************
*	Name    : popOverVbox
*	Author  : Kony 
*	Purpose : Anchor the popup to the vBox.
******************************************************************/

function popOverVbox(eventObj)
{
	var context  = {};
	
	switch(eventObj.id)
	{
		case "vbxFPV1":
				context= {"widget":frmPopOverVbox.vbxFPV1,"anchor":"top","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "vbxFPV2":
				context= {"widget":frmPopOverVbox.vbxFPV2,"anchor":"bottom","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "vbxFPV3":
				context= {"widget":frmPopOverVbox.vbxFPV3,"anchor":"left","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();				
				break;
		case "vbxFPV4":
				context= {"widget":frmPopOverVbox.vbxFPV4,"anchor":"right","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();					
				break;	
	}
}

/******************************************************************
*	Name    : popOverSegment
*	Author  : Kony 
*	Purpose : Anchor the popup to the segment.
******************************************************************/

function popOverSegment(eventObj)
{
	var context  = {};
	
	switch(eventObj.selectedIndex[1])
	{
		case 0:
				context= {"widget":frmPopOverSegment.segment2117822895630569,"anchor":"top","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case 1:
				context= {"widget":frmPopOverSegment.segment2117822895630569,"anchor":"bottom","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case 2:
				context= {"widget":frmPopOverSegment.segment2117822895630569,"anchor":"left","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();				
				break;
		case 3:				
				context= {"widget":frmPopOverSegment.segment2117822895630569,"anchor":"right","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();					
				break;	
	}
}
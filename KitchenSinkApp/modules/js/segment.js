// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.

/*****************************************************************
*	Name    : segwidMultiTemplate
*	Author  : Kony 
*	Purpose : To add multiple row templates to the segment.Segment is created without any section header templates.
******************************************************************/
	
function segwidMultiTemplate()
{
	if(channel =="tablet" || channel == "desktopweb")
	{
		frmSegmentTablet.segMultiRowTemp.widgetDataMap = {lbl1:"lbl1",lbl2:"lbl2",lbl3:"lbl3"}
		frmSegmentTablet.segMultiRowTemp.data = [
					{lbl1: "Titanium Card",lbl2: "$200",lbl3: "$400",template:hboxtemp1}, 
					{lbl1: "Gold Card",lbl2: "$200",lbl3: "$400",template:hboxtemp2}, 
					{lbl1: "Silver Card",lbl2: "$200",lbl3: "$400",template:hboxtemp3}
				 ];	
	}
	else
	{
		frmRowTemplates.segMultiTemp.widgetDataMap = {lbl1:"lbl1",lbl2:"lbl2",lbl3:"lbl3"}
		frmRowTemplates.segMultiTemp.data = [
					{lbl1: "Titanium Card",lbl2: "$200",lbl3: "$400",template:hboxtemp1}, 
					{lbl1: "Gold Card",lbl2: "$200",lbl3: "$400",template:hboxtemp2}, 
					{lbl1: "Silver Card",lbl2: "$200",lbl3: "$400",template:hboxtemp3}
				 ];		
		
	}
	
}


/*****************************************************************
*	Name    : SecHdrTemplatesTab
*	Author  : Kony 
*	Purpose : To add different section header templates to the segment.Segment is created without any row templates.
******************************************************************/
	
function SecHdrTemplatesTab()
{
	
		frmSegmentTablet.segSecHdrTemplates.widgetDataMap = {lblSecHdr1:"lblSecHdr1",lblSecHdr2:"lblSecHdr2",lblBnkAcctName:"lblBnkAcctName",lblWidDrwLimit:"lblWidDrwLimit",lblCreditLimit:"lblCreditLimit",imgChk:"imgChk"};
	
		frmSegmentTablet.segSecHdrTemplates.data = [
							[ {lblSecHdr1:"Credit account details",lblSecHdr2:" Account No: xxxxxx0660",template:boxRefSegHdr},					
							    [
								   	{lblBnkAcctName: "Titanium card",lblWidDrwLimit: "$200",lblCreditLimit: "$400",imgChk:"checkboxwhite.png"}, 
									{lblBnkAcctName: "Gold card",lblWidDrwLimit: "$500",lblCreditLimit: "$800",imgChk:"checkboxwhite.png"}, 
									{lblBnkAcctName: "Silver card",lblWidDrwLimit: "$700",lblCreditLimit: "$200",imgChk:"checkboxwhite.png"}
								]
							],
							
							[ {lblSecHdr1:"Savings account details",lblSecHdr2:" Account No: xxxxxx5221",template:boxRefSegHdr1},								
								[
									{lblBnkAcctName:"Savings 1", lblWidDrwLimit: "$300",lblCreditLimit:"N/A",imgChk:"checkboxwhite.png"},
			 					 	{lblBnkAcctName: "Savings 2", lblWidDrwLimit: "$400",lblCreditLimit: "N/A",imgChk:"checkboxwhite.png"}
								 ]
							],
							[ {lblSecHdr1:"Checking account details",lblSecHdr2:" Account No: xxxxxx7657",template:boxRefSegHdr2},
								[
									{lblBnkAcctName: "Checking 1",lblWidDrwLimit: "N/A",lblCreditLimit: "$400",imgChk:"checkboxwhite.png"},
								 	{lblBnkAcctName: "Checking 2",lblWidDrwLimit: "N/A",lblCreditLimit: "$800",imgChk:"checkboxwhite.png"}
			 					]
							]	
						];
						kony.print("DONE WITH PLACING DATA TO SEGMENT //  SREENIVAS")
	
}

/*****************************************************************
*	Name    : segWidoutRowtmplateJS
*	Author  : Kony 
*	Purpose : To create a segment without row templates and  without section header templates.
******************************************************************/
	
function segWidoutRowtmplateJS()
{
	frmRowTemplates.segWidoutRowtmplate.widgetDataMap = {lbl1:"lbl1",lbl2:"lbl2",lbl3:"lbl3"};
	frmRowTemplates.segWidoutRowtmplate.setData([
					{lbl1: "Titanium Card",lbl2: "$200",lbl3: "$400"}, 
					{lbl1: "Gold Card",lbl2: "$300",lbl3: "$100"}, 
					{lbl1: "Silver Card",lbl2: "$500",lbl3: "$600"}
				 ]);
	var selectedInx = frmRowTemplates.segWidoutRowtmplate.selectedIndex;	 	
}

/*****************************************************************
*	Name    : segmentSingleSelect
*	Author  : Kony 
*	Purpose : To add different section header templates to the segment with single selection behaviour.
******************************************************************/
function segmentSingleSelect(evenObj)
{
	
	frmSegSinleSelect.segSecHdrWidoutTmplate.widgetDataMap = {lblSecHdr1:"lblSecHdr1",lblSecHdr2:"lblSecHdr2",BAccName:"BAccName",WithdrawLimit:"WithdrawLimit",CreditLimit:"CreditLimit",imgChk:"imgChk"};
	
	frmSegSinleSelect.segSecHdrWidoutTmplate.data = [
							[ {lblSecHdr1:"Credit account details",lblSecHdr2:" Account No: xxxxxx0660",template:boxRefSegHdr},					
							    [
								   	{BAccName: "Titanium card",WithdrawLimit: "$200",CreditLimit: "$400",imgChk:"checkboxwhite.png"}, 
									{BAccName: "Gold card",WithdrawLimit: "$500",CreditLimit: "$800",imgChk:"checkboxwhite.png"}, 
									{BAccName: "Silver card",WithdrawLimit: "$700",CreditLimit: "$200",imgChk:"checkboxwhite.png"}
								]
							],
							
							[ {lblSecHdr1:"Savings account details",lblSecHdr2:" Account No: xxxxxx5221",template:boxRefSegHdr1},								
								[
									{BAccName:"Savings 1", WithdrawLimit: "$300",CreditLimit:"N/A",imgChk:"checkboxwhite.png"},
			 					 	{BAccName: "Savings 2", WithdrawLimit: "$400",CreditLimit: "N/A",imgChk:"checkboxwhite.png"}
								 ]
							],
							[ {lblSecHdr1:"Checking account details",lblSecHdr2:" Account No: xxxxxx7657",template:boxRefSegHdr2},
								[
									{BAccName: "Checking 1",WithdrawLimit: "N/A",CreditLimit: "$400",imgChk:"checkboxwhite.png"},
								 	{BAccName: "Checking 2",WithdrawLimit: "N/A",CreditLimit: "$800",imgChk:"checkboxwhite.png"}
			 					]
							]	
						];
	frmSegSinleSelect.show();
}
/*****************************************************************
*	Name    : SecHdrWidoutTemplatesJS
*	Author  : Kony 
*	Purpose : To add different section header templates to the segment.Segment is created without any row templates.
******************************************************************/
	
function SecHdrWidoutTemplatesJS(evenObj)
{
	if (evenObj["id"] == "btnSegMulSel")
	{
		frmSecHdrWidoutTemplates.lblSegMulSelect.setVisibility(true);		
		frmSecHdrWidoutTemplates.btnSegMulSelect.setVisibility(true);
	}
	else
	{
		frmSecHdrWidoutTemplates.lblSegMulSelect.setVisibility(false);		
		frmSecHdrWidoutTemplates.btnSegMulSelect.setVisibility(false);
	}
	frmSecHdrWidoutTemplates.segSecHdrWidoutTmplate.widgetDataMap = {lblSecHdr1:"lblSecHdr1",lblSecHdr2:"lblSecHdr2",BAccName:"BAccName",WithdrawLimit:"WithdrawLimit",CreditLimit:"CreditLimit",imgChk:"imgChk"};
	
	frmSecHdrWidoutTemplates.segSecHdrWidoutTmplate.data = [
							[ {lblSecHdr1:"Credit account details",lblSecHdr2:" Account No: xxxxxx0660",template:boxRefSegHdr},					
							    [
								   	{BAccName: "Titanium card",WithdrawLimit: "$200",CreditLimit: "$400",imgChk:"checkboxwhite.png"}, 
									{BAccName: "Gold card",WithdrawLimit: "$500",CreditLimit: "$800",imgChk:"checkboxwhite.png"}, 
									{BAccName: "Silver card",WithdrawLimit: "$700",CreditLimit: "$200",imgChk:"checkboxwhite.png"}
								]
							],
							
							[ {lblSecHdr1:"Savings account details",lblSecHdr2:" Account No: xxxxxx5221",template:boxRefSegHdr1},								
								[
									{BAccName:"Savings 1", WithdrawLimit: "$300",CreditLimit:"N/A",imgChk:"checkboxwhite.png"},
			 					 	{BAccName: "Savings 2", WithdrawLimit: "$400",CreditLimit: "N/A",imgChk:"checkboxwhite.png"}
								 ]
							],
							[ {lblSecHdr1:"Checking account details",lblSecHdr2:" Account No: xxxxxx7657",template:boxRefSegHdr2},
								[
									{BAccName: "Checking 1",WithdrawLimit: "N/A",CreditLimit: "$400",imgChk:"checkboxwhite.png"},
								 	{BAccName: "Checking 2",WithdrawLimit: "N/A",CreditLimit: "$800",imgChk:"checkboxwhite.png"}
			 					]
							]	
						];
	frmSecHdrWidoutTemplates.show();
}
	
/*****************************************************************
*	Name    : androidSegmentSecDock
*	Author  : Kony 
*	Purpose : To achieve the docking behaviour in android platform by creating the segment without any templates.
******************************************************************/

function androidSegmentSecDock()
{
	
	frmSegSections.segment2117989725237554.data=[
								[ "Credit account details",					
								    [
									   	{lblSegSec1: "Titanium",lblSegSec2: "$200",lblSegSec3: "$400"}, 
										{lblSegSec1: "Gold card",lblSegSec2: "$500",lblSegSec3: "$800"}, 
										{lblSegSec1: "Silver card",lblSegSec2: "$700",lblSegSec3: "$200"},
										{lblSegSec1: "Silver card",lblSegSec2: "$700",lblSegSec3: "$200"}
									]
								],
								
								[ "Savings account details",								
									[
										{lblSegSec1:"Savings 1", lblSegSec2: "$300",lblSegSec3:"N/A"},
				 					 	{lblSegSec1: "Savings 2", lblSegSec2: "$400",lblSegSec3: "N/A"},
										{lblSegSec1:"Savings 1", lblSegSec2: "$300",lblSegSec3:"N/A"},
				 					 	{lblSegSec1: "Savings 2", lblSegSec2: "$400",lblSegSec3: "N/A"}
									 ]
								],
								[ "Checking account details",
									[
										{lblSegSec1: "Checking 1",lblSegSec2: "N/A",lblSegSec3: "$400"},
									 	{lblSegSec1: "Checking 2",lblSegSec2: "N/A",lblSegSec3: "$800"},
										{lblSegSec1:"Savings 1", lblSegSec2: "$300",lblSegSec3:"N/A"},
				 					 	{lblSegSec1: "Savings 2", lblSegSec2: "$400",lblSegSec3: "N/A"}
				 					]
								]	
							];
							
}

/*****************************************************************
*	Name    : segwidDictionary
*	Author  : Kony 
*	Purpose : To create a segment which is dictionary enabled.
******************************************************************/

function segwidDictionary(  )
{
	var segdata = [ [ "  A", [ { cname : "Afghanistan" } , { cname : "Akrotiri" } , { cname : "Albania" }  ] ],
	[ "  B", [ { cname : "Bahamas, The" } , { cname : "Bahrain " } , { cname : "Bangladesh " }  ] ],
	[ "  C", [ { cname : "Cambodia" } , { cname : "Cameroon " } , { cname : "Canada " }  ] ],
	[ "  D", [ { cname : "Denmark" } , { cname : "Dhekelia" } , { cname : "Djibouti" }  ] ],
	[ "  E", [ { cname : "Ecuador " } , { cname : "Egypt" } , { cname : "El Salvador " }  ] ],
	[ "  F", [ { cname : "Faroe Islands " } , { cname : "Fiji" } , { cname : "Finland " }  ] ],
	[ "  G", [ { cname : "Gabon" } , { cname : "Gambia, The" } , { cname : "Gaza Strip" }  ] ],
	[ "  H", [ { cname : "Haiti" } , { cname : "Honduras" } , { cname : "Hong Kong" }  ] ],
	[ "  I", [ { cname : "Iceland " } , { cname : "India" } , { cname : "Indonesia " }  ] ],
	[ "  J", [ { cname : "Jamaica" } , { cname : "Jan Mayen" } , { cname : "Japan" }  ] ],
	[ "  K", [ { cname : "Kazakhstan" } , { cname : "Kenya" } , { cname : "Kiribati" }  ] ],
	[ "  L", [ { cname : "Laos" } , { cname : "Latvia " } , { cname : "Lebanon" }  ] ],
	[ "  M", [ { cname : "Macau" } , { cname : "Macedonia " } , { cname : "Madagascar" }  ] ],
	[ "  N", [ { cname : "Namibia " } , { cname : "Nauru" } , { cname : "Navassa Island " }  ] ],
	[ "  O", [ { cname : "Oman " }  ] ],
	[ "  P", [ { cname : "Pakistan" } , { cname : "Palau" } , { cname : "Panama" }  ] ],
	[ "  Q", [ { cname : "Qatar" }  ] ],
	[ "  R", [ { cname : "Reunion " } , { cname : "Romania " }  ] ],
	[ "  S", [ { cname : "Saint Helena " } , { cname : "Saint Lucia" } , { cname : "Samoa" }  ] ],
	[ "  T", [ { cname : "Taiwan" } , { cname : "Tajikistan " }  ] ],
	[ "  U", [ { cname : "Uganda " } , { cname : "Ukraine" }  ] ],
	[ "  V", [ { cname : "Vanuatu " } , { cname : "Venezuela" }  ] ],
	[ "  W", [ { cname : "Wake Island " } , { cname : "Wallis and Futuna" }  ] ],
	[ "  Y", [ { cname : "Yemen " }  ] ],
	[ "  Z", [ { cname : "Zambia " } , { cname : "Zimbabwe" }  ] ] ];
	if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator")
		frmSegDictView.segDictView.setDataWithSections (segdata);
	else
		frmDictView.segStates.setDataWithSections (segdata);
}

/*****************************************************************
*	Name    : searchBy
*	Author  : Kony 
*	Purpose : To show the form's segment which is 'searchby' enabled and user can search by any of its widget's text.In the below case user need to search by name of the airlines.
******************************************************************/

function searchBy()
{
		frmSeg1.show();
}


/*****************************************************************
*	Name    : multiSelectTab
*	Author  : Kony 
*	Purpose : To show the selected data from the segment 'segSecHdrTemplates' <for tablet platform>
******************************************************************/

function multiSelectTab()
{
		frmSegmentFeatures.sbxSegmentFeatureDetails.removeAt(2);
		var selectedItems  =  frmSegmentTablet.segSecHdrTemplates.selectedItems;
		var arr = new Array();
		if (selectedItems == null || selectedItems == "")
		{
			alert("No item is selected. Please select atleast one item from the above segment");
			return;
		}
		for (var  i = 0; i< selectedItems.length ;i++)
		{
			arr.push({lblBankAcct:selectedItems[i]["lblBnkAcctName"],lblWidrawLmt:selectedItems[i]["lblWidDrwLimit"],lblCreditLmt:selectedItems[i]["lblCreditLimit"]})
		}
		frmSegmentTablet.segMultiSelectData.setData(arr);
		frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.segMultiSelectData);
		//below is supported for iOS and windows8 platfors only
		if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator")
			frmSegmentFeatures.sbxSegmentFeatureDetails.scrollToWidget(frmSegmentTablet.segMultiSelectData);
}

/*****************************************************************
*	Name    : singleSelect
*	Author  : Kony 
*	Purpose : To show the selected data from the segment 'frmSegSinleSelect'
*****************************************************************/

function singleSelect()
{
	var selectedItems  =  frmSegSinleSelect.segSecHdrWidoutTmplate.selectedItems;
	if (selectedItems == null || selectedItems == "")
	{
		alert("No item is selected. Please select atleast one item from the above segment");
		return;
	}
	else
		alert("Your selection :: "+selectedItems[0]["BAccName"]+"  "+selectedItems[0]["WithdrawLimit"]+"  "+selectedItems[0]["CreditLimit"]);
}

/*****************************************************************
*	Name    : multiSelect
*	Author  : Kony 
*	Purpose : To show the selected data from the segment 'frmSecHdrWidoutTemplates'
******************************************************************/

function multiSelect()
{
	var selectedItems  =  frmSecHdrWidoutTemplates.segSecHdrWidoutTmplate.selectedItems;
	var arr = new Array();
	if (selectedItems == null || selectedItems == "")
	{
		alert("No item is selected. Please select atleast one item from the above segment");
		return;
	}
	for (var  i = 0; i< selectedItems.length ;i++)
	{
		arr.push({lblMulSel1:selectedItems[i]["BAccName"],lblMulSel2:selectedItems[i]["WithdrawLimit"],lblMulSel3:selectedItems[i]["CreditLimit"]})
	}
	frmSegMulSelectData.segment21927389591153585.setData(arr);
	frmSegMulSelectData.show();
}

/*****************************************************************
*	Name    : onEditing
*	Author  : Kony 
*	Purpose : when ever user clicks "-" icon on a particular row,Delete that row.
******************************************************************/
function onEditing (seguiWidget, editmode, sectionIndex, rowIndex)
{
	seguiWidget.removeAt(rowIndex,sectionIndex);
}

/*****************************************************************
*	Name    : onEditingIconStyle
*	Author  : Kony 
*	Purpose : when ever user clicks "-" icon on a particular row,Delete that row.
******************************************************************/
function onEditingIconStyle(seguiWidget, editmode, sectionIndex, rowIndex)
{
	if (editmode == 2)	
		seguiWidget.removeAt(rowIndex,sectionIndex);		
	else
	{
		i++;
		var data = { cname : "Inserted contact"+i,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }
		seguiWidget.addDataAt(data, rowIndex, sectionIndex);
	}
}

/*****************************************************************
*	Name    : dataForSeg
*	Author  : Kony 
*	Purpose : To set the data to a segment based on the event object and platform
******************************************************************/

function dataForSeg(eventObj)
{
	var segdata = [ [ "  A", [ { cname : "Afghanistan",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Akrotiri" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Albania" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  B", [ { cname : "Bahamas, The",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Bahrain ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Bangladesh ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  C", [ { cname : "Cambodia",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Cameroon ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Canada ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  D", [ { cname : "Denmark",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Dhekelia",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Djibouti",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  E", [ { cname : "Ecuador ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Egypt",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "El Salvador ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  F", [ { cname : "Faroe Islands ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Fiji",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Finland ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  G", [ { cname : "Gabon",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Gambia, The",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Gaza Strip",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  H", [ { cname : "Haiti",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Honduras",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Hong Kong",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  I", [ { cname : "Iceland ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "India",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Indonesia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  J", [ { cname : "Jamaica",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Jan Mayen",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Japan" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  K", [ { cname : "Kazakhstan",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Kenya" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Kiribati",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  L", [ { cname : "Laos" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Latvia " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Lebanon",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  M", [ { cname : "Macau",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Macedonia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Madagascar",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  N", [ { cname : "Namibia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Nauru" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Navassa Island ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  O", [ { cname : "Oman ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  P", [ { cname : "Pakistan",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Palau" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Panama" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  Q", [ { cname : "Qatar" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  R", [ { cname : "Reunion ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Romania " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  S", [ { cname : "Saint Helena ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Saint Lucia",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Samoa",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  T", [ { cname : "Taiwan" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Tajikistan ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  U", [ { cname : "Uganda ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Ukraine",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  V", [ { cname : "Vanuatu " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Venezuela",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  W", [ { cname : "Wake Island " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { cname : "Wallis and Futuna" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  Y", [ { cname : "Yemen " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  Z", [ { cname : "Zambia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { cname : "Zimbabwe",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ] ];
	if((kony.os.deviceInfo().name != "iPad" && kony.os.deviceInfo().name != "iPad Simulator" && channel=="tablet") || (channel == "desktopweb"))
	{
		kony.print("do nothing");
	}
	else if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name == "iPad Simulator")
	{
		frmSegmentTablet.segIconEditStyle.setDataWithSections(segdata);
		frmSegSwipe.segSwipeToDelete.setDataWithSections(segdata);
	}
	else
		eventObj.segStates.setDataWithSections(segdata);
}



/*****************************************************************
*	Name    : editOrDoneTab
*	Author  : Kony 
*	Purpose : to change the segment editing style when ever user clicks edit/ done buttons(For tablet channels)
******************************************************************/

function editOrDoneTab(eventObj)
{
	if (eventObj.text == "Edit")
	{
		frmSegmentTablet.segIconEditStyle.editStyle = constants.SEGUI_EDITING_STYLE_ICON;
		eventObj.text = "Done";
	}
	else
	{
		frmSegmentTablet.segIconEditStyle.editStyle = constants.SEGUI_EDITING_STYLE_NONE;
		eventObj.text = "Edit";
	}
	
}

/*****************************************************************
*	Name    : editOrDone
*	Author  : Kony 
*	Purpose : to change the segment editing style when ever user clicks edit/ done buttons(For mobile channels)
******************************************************************/

function editOrDone(eventObj)
{
	if (eventObj.text == "Edit")
	{
		frmIconEditStyle.segStates.editStyle = constants.SEGUI_EDITING_STYLE_ICON;
		eventObj.text = "Done";
	}
	else
	{
		frmIconEditStyle.segStates.editStyle = constants.SEGUI_EDITING_STYLE_NONE;
		eventObj.text = "Edit";
	}
	
}

/*****************************************************************
*	Name    : dismiLoadScrnRefresh
*	Author  : Kony 
*	Purpose : To dismiss the loading screen whe ever pull to refresh event done.
******************************************************************/

function dismiLoadScrnRefresh()
{
	kony.application.dismissLoadingScreen();
	kony.timer.cancel("newTimer");
}


/*****************************************************************
*	Name    : refresh
*	Author  : Kony 
*	Purpose : To insert a row every time when user does onpull event on the segment
******************************************************************/

function refresh(seguiWidget)
{
	if (j == 24)
		j = 0;
	var data = { cname : "Inserted contact"+j  }
	if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "iPad" )
		kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
	else
		kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);

	kony.timer.schedule("newTimer", dismiLoadScrnRefresh,2,false);
	if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name == "iPad Simulator" )
	{
		frmSegPull.segPullToRefresh.setDataAt(data, 0, j);
	}
	else
		frmPushPull.segStates.addDataAt(data, 0, j);
	
	j++;
}

/*****************************************************************
*	Name    : callService
*	Author  : Kony 
*	Purpose : To define  data to the segment 'segRecords' , where we need to show the records page by page.
******************************************************************/

function callService()
{
	hbxHeadSearchORE.tbxSearchORE.text="";

	serviceData = new Array();
	frmSegOnReachEnd.segRecords.removeAll();
	countORE = 0;
	for(var i=0;i<100;i++)
	{
		serviceData.push({"lbl1":"Ambs, Yvonne"+i,"lbl2":"NiederLassung","lbl3":"000PI00299","lbl4":"HeinrichVon","lbl5":"79100 Frieberg"});
		serviceData.push({"lbl1":"Bmbs, Yvonne"+i,"lbl2":"NiederLassung","lbl3":"000PI00299","lbl4":"HeinrichVon","lbl5":"79100 Frieberg"});
	}
}

/*****************************************************************
*	Name    : scrollEnd
*	Author  : Kony 
*	Purpose : On reaching end ,show another page with 20 records by showing a loading screen prior to that.
******************************************************************/

function scrollEnd()
{
	if(hbxHeadSearchORE.tbxSearchORE.text=="")
	{
		var displayData =serviceData;
	}
	else
	{
		var displayData = searchData;
	}
	
	if(countORE < displayData.length)
	{
		var max = 0;
		if(countORE+20 < displayData.length)
		{
			max = countORE+20;
		}
		else
		{
			max = displayData.length;
		}
		var currentData = new Array();
		for(var i=countORE; i<max; i++)
		{
			 currentData.push(displayData[i]);
		}
		if(countORE>0)
			frmSegOnReachEnd.segRecords.removeAt(countORE, 0);
		frmSegOnReachEnd.segRecords.addAll(currentData);
		if(max!=displayData.length)
			frmSegOnReachEnd.segRecords.addDataAt({"lblLoadingORE" :"Loading...",template:hbxLoadORE}, max, 0)
		countORE = max;
	}
}

/*****************************************************************
*	Name    : displaySearch
*	Author  : Kony 
*	Purpose : On typing the data on a texbox ,Show the appropriate results by matching with the substings of the record values
******************************************************************/

function displaySearch()
{
	searchData = new Array();
	var searchText = hbxHeadSearchORE.tbxSearchORE.text
	countORE=0;
	for(var i=0; i<serviceData.length; i++)
	{
		kony.print(i+"countORE : "+countORE);
		if(serviceData[i]["lbl1"].substring(0, searchText.length)==searchText)
		{
			searchData.push(serviceData[i]);
		}
	}
	frmSegOnReachEnd.segRecords.removeAll();
	scrollEnd();
}

/*****************************************************************
*	Name    : beginEdit
*	Author  : Kony 
*	Purpose : Initialize countORE which is used in on reach end scenario.
******************************************************************/

function beginEdit()
{
	countORE=0;
}


/*****************************************************************
*	Name    : setTitleBar
*	Author  : Kony 
*	Purpose : To set a titlebar by taking form and title name as the i/p parameters
******************************************************************/

function setTitleBar(frm, titleName)
{
	if(kony.os.deviceInfo().name != "thinclient")
		frm.title = titleName;
}
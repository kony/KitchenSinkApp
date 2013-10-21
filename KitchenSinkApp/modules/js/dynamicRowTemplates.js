/*****************************************************************
*	Name    : rowTempSetData
*	Author  : Kony 
*	Purpose : To set the initial data to the segment through row templates.
******************************************************************/


function rowTempSetData()
{
	frmSegDynRowTemplate.segDynamicRowTemp.widgetDataMap ={lbl7:"lbl7",lbl8:"lbl8"}
	var data  = 
	[
	  {lbl7:"Name", lbl8:": Joseph",template:hbx1},
	  {lbl7:"Name", lbl8:": Martin",template:hbx1},
	  {lbl7:"Name", lbl8:": Ricky",template:hbx1}
	]
	frmSegDynRowTemplate.segDynamicRowTemp.setData(data);
}

/*****************************************************************
*	Name    : expandRowTemp
*	Author  : Kony 
*	Purpose : When ever user clicks on a row template ,Row template should be changed and looks like row is expanded.
******************************************************************/

function expandRowTemp()
{
	var index = frmSegDynRowTemplate.segDynamicRowTemp.selectedIndex[1]; 
	kony.print(" On expand row , segment selected row number :: " +index);
	
	var dataForRowTemp = {};
	if (index == 0)
	{
		dataForRowTemp = {lbl1:"Name", lbl2:": Joseph",lbl3:"Designation",lbl4:": Senior Tester",lbl5:"Phone number",lbl6:": 9999999999",template:hbx2}
	}
	else if (index == 1)
	{	
		dataForRowTemp = {lbl1:"Name", lbl2:": Martin",lbl3:"Designation",lbl4:": Assistant Manager",lbl5:"Phone number",lbl6:": 8888888888",template:hbx2}
	}
	else
	{
		dataForRowTemp = {lbl1:"Name", lbl2:": Ricky",lbl3:"Designation",lbl4:": Senior Manager",lbl5:"Phone number",lbl6:": 7777777777",template:hbx2}
	}
	frmSegDynRowTemplate.segDynamicRowTemp.widgetDataMap = {lbl1:"lbl1",lbl2:"lbl2",lbl3:"lbl3",lbl4:"lbl4",lbl5:"lbl5",lbl6:"lbl6",lbl7:"lbl7",lbl8:"lbl8"}
	frmSegDynRowTemplate.segDynamicRowTemp.setDataAt(dataForRowTemp, index )
}

/*****************************************************************
*	Name    : collapseRowTemp
*	Author  : Kony 
*	Purpose : When ever user clicks on a row template ,Row template should be changed and looks like row is collapsed.
******************************************************************/

function collapseRowTemp()
{
	var index = frmSegDynRowTemplate.segDynamicRowTemp.selectedIndex[1];
	if (kony.os.deviceInfo().name == "blackberry") 
		alert("Trying to collapse the row at index "+index);
	var dataForRowTemp = {};
	if (index == 0)
	{
		dataForRowTemp = {lbl7:"Name", lbl8:": Joseph",template:hbx1}
	}
	else if (index == 1)	
	{
		dataForRowTemp =  {lbl7:"Name", lbl8:": Martin",template:hbx1}
	}
	else
	{
		dataForRowTemp =  {lbl7:"Name", lbl8:": Ricky",template:hbx1}
	}
	frmSegDynRowTemplate.segDynamicRowTemp.widgetDataMap = {lbl1:"lbl1",lbl2:"lbl2",lbl3:"lbl3",lbl4:"lbl4",lbl5:"lbl5",lbl6:"lbl6",lbl7:"lbl7",lbl8:"lbl8"}
	frmSegDynRowTemplate.segDynamicRowTemp.setDataAt(dataForRowTemp, index )
}

/*****************************************************************
*	Name    : initArray
*	Author  : Kony 
*	Purpose : Array to maintain the state of row templates such that rows are expanded or collapsed.Initially all rows are collapsed.
******************************************************************/

function initArray()
{
	var length=2;	
	arrForDynRow = new Array();
	for (i=0;i<=length;i++)	
		arrForDynRow[i] = 0
}

/*****************************************************************
*	Name    : isSelected
*	Author  : Kony 
*	Purpose : To check whether the row is collapsed or expanded.If it is collapsed then expand the row templates when user clicks on the particular row and viceversa.
******************************************************************/
function isSelected()
{
	var selIndex = frmSegDynRowTemplate.segDynamicRowTemp.selectedIndex[1];
	kony.print("selIndex" +selIndex);
		if(arrForDynRow[selIndex] == 0)
		{
			arrForDynRow[selIndex] = 1;
			expandRowTemp();
		}
		else 
		{
			arrForDynRow[selIndex] = 0;
			collapseRowTemp();
		}
}


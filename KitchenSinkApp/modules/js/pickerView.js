/******************************************************************
*	Name    : pickerviewselkeyvalues
*	Author  : Kony
*	Purpose : To read the content assigned to picker view.In the below scenario,
*             We are updating lebel with content of respective row of pickerview.
*******************************************************************/
function pickerviewselkeyvalues(){
	var selChoicesArr = frmPickerView.pickOne.selectedKeyValues ;
	kony.print("Response:"+JSON.stringify(selChoicesArr));
	if(selChoicesArr.length>0){
		var selChoices = "Nice Choice!  "+selChoicesArr[2][1]+" "+selChoicesArr[1][1]+" "+selChoicesArr[0][1];
		frmPickerView.lblOne.text = selChoices;	
	}else
		alert("no data selected");
}
/******************************************************************
*	Name    : setNewData
*	Author  : Kony
*	Purpose : To set new component data to the picker view.In the below scenario,
*             We are adding 2009,2010,2011,2012, 2013 to the second row of pickerview.
*******************************************************************/
function setNewData(){
		
		try
		{
			frmPickerView.pickOne.setComponentData(1,[["1","2009"] , ["2","2010"] , ["3","2011"], ["4", "2012"],["5", "2013"]]);
			frmPickerView.btnAdd.text = "Range Is Set";
			frmPickerView.lblOne.text =""
			frmPickerView.pickOne.selectedKeys=["1","1","1"]; // to reset the picker view selection.
		}
		catch (e) {
		
			kony.print("Error"+e);
			alert("Error"+e)
			
		}
		frmPickerView.lblTwo.text = "Year Component fixed to 2009 - 2013";
}

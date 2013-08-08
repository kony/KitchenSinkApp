
/*****************************************************************
*	Name    : sliderOnSelection
*	Author  : Kony 
*	Purpose : To get the slider position and to display the same.
******************************************************************/

function sliderOnSelection(eventObject)
{
	var position = eventObject.selectedValue.toString();
	frmSlider.lblSlid.text = position;
}
/*****************************************************************
*	Name    : popUpFromBottom
*	Author  : Kony 
*	Purpose : To show how the popup which is anchored from bottom of the form
******************************************************************/

function popUpFromBottom()
{   
	if (kony.os.deviceInfo().name == "thinclient" && channel !="tablet")
	{
		popFormAnchor.show();
	}
	else
	{
		if(kony.os.deviceInfo().name == "windowsPhone")
			var context4={"widget":frmPopup,"anchor":"bottom"};	
		else if(channel=="tablet")
			var context4={"widget":frmUInterface,"anchor":"bottom"};	
		else
			var context4={"widget":frmPopup,"anchor":"bottom","sizetoanchorwidth":true};
		popFormAnchor.setContext(context4);
		popFormAnchor.show();
	}
}



// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.

/*****************************************************************
*	Name    : popUpFromBottom
*	Author  : Kony 
*	Purpose : To show how the popup which is anchored from bottom of the form
******************************************************************/

function popUpFromBottom()
{   
	if (kony.os.deviceInfo().name == "thinclient" && channel !="tablet"&& channel !="desktopweb")
	{
		popFormAnchor.show();
	}
	else
	{
		if(kony.os.deviceInfo().name == "WindowsPhone")
			var context4={"widget":frmPopup,"anchor":"bottom"};	
		else if(channel=="tablet" || channel=="desktopweb" )
			var context4={"widget":frmUInterface,"anchor":"bottom"};	
		else
			var context4={"widget":frmPopup,"anchor":"bottom","sizetoanchorwidth":true};
		popFormAnchor.setContext(context4);
		popFormAnchor.show();
	}
}


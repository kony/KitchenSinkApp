
/*****************************************************************
*	Name    : browserOptions
*	Author  : Kony 
*	Purpose : To handle browser options,If inline navigation button is clicked then enabel the required buttons in 'frmBrowser' form.
******************************************************************/

// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.
function browserOptions(eventObj)
{
	if(channel=="tablet" || channel == "desktopweb")
		frmBrowser.destroy();
	if(channel != "desktopweb")	
	{
		if(eventObj.text == "Browser with inline Navigation")
		{
			frmBrowser.hbxInLineBrowser.setVisibility(true);
			frmBrowser.btnInlineBack.setVisibility(true);
			frmBrowser.btnInlineForward.setVisibility(true);
			frmBrowser.btnInlineReload.setVisibility(true);
		
		}
		else
		{
			frmBrowser.hbxInLineBrowser.setVisibility(false);
			frmBrowser.btnInlineBack.setVisibility(false);
			frmBrowser.btnInlineForward.setVisibility(false);
			frmBrowser.btnInlineReload.setVisibility(false);
		}
	}
	
	switch(eventObj.text)
	{
		case "Browser with static content":
			frmBrowser.title = "Static HTML";
			if (kony.os.deviceInfo().name == "thinclient" && channel=="mobile")
				frmBrowser.brwDemo.htmlString ="<h3><font color=\"white\"><br/><br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/></font></h3> ";
			else if(kony.os.deviceInfo().name == "android" && channel == "mobile")
				frmBrowser.brwDemo.htmlString ="<p><font size=\"3\" color=\"black\">This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.</font></p>";
			else if(channel== "tablet" && kony.os.deviceInfo().name=="thinclient")
				frmBrowser.brwDemo.htmlString ="<p><font size=\"5\" color=\"white\"><br/>This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.</font></p>";
			else if((channel== "tablet" && (kony.os.deviceInfo().name =="android" ||kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator"))||channel=="desktopweb")
				frmBrowser.brwDemo.htmlString ="<p><font size=\"5\" color=\"black\"><br/>This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.</font></p>";
			else
				frmBrowser.brwDemo.htmlString ="<h3>This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.</h3> ";
			break;
		case "Browser with dynamic content":
			frmBrowser.title = "Dynamic URL";
			frmBrowser.brwDemo.requestURLConfig = {
		        "URL": "http://www.kony.com",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
			break;
		case "Browser with inline Navigation":
			frmBrowser.title = "Inline browser";
			frmBrowser.brwDemo.screenLevelWidget=false;
			frmBrowser.brwDemo.requestURLConfig = {
		        "URL": "http://www.google.co.in",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
		    break;
		case "Detect Telephone numbers":
			frmBrowser.title = "Detect phone num";
			frmBrowser.brwDemo.requestURLConfig = {
		        "URL": "http://www.google.com/contact",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
		    break;
		case "Enable Zoom property of Browser":
			 frmBrowser.title = "Enable zoom";
			 frmBrowser.brwDemo.requestURLConfig = {
		        "URL": "http://www.apple.com/in/",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
		    frmBrowser.brwDemo.enableZoom = true;
		    break;
		
	}
	frmBrowser.show();

}


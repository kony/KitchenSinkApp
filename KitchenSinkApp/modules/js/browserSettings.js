
/*****************************************************************
*	Name    : browserOptions
*	Author  : Kony 
*	Purpose : To handle browser options,If inline navigation button is clicked then enabel the required buttons in 'frmBrowser' form.
******************************************************************/
function browserOptions(eventObj)
{
	if(channel=="tablet")
		frmBrowser.destroy();
		
	if(eventObj.text == "Inline browser navigation")
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
	
	switch(eventObj.text)
	{
		case "Static HTML content":
			frmBrowser.title = "Static HTML";
			if (kony.os.deviceInfo().name == "thinclient" && channel!="tablet")
				frmBrowser.brwDemo.htmlString ="<h3><font color=\"red\"><br/><br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/></font></h3> ";
			else if(kony.os.deviceInfo().name == "android" && channel != "tablet")
				frmBrowser.brwDemo.htmlString ="<p><font size=\"3\" color=\"black\">This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.</font></p>";
			else if(channel== "tablet")
				frmBrowser.brwDemo.htmlString ="<p><font size=\"5\" color=\"white\"><br/>This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.</font></p>";
			else
				frmBrowser.brwDemo.htmlString ="<h3>This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/></ ";
			break;
		case "Dynamic URL content":
			frmBrowser.title = "Dynamic URL";
			frmBrowser.brwDemo.requestURLConfig = {
		        "URL": "http://www.kony.com",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
			break;
		case "Inline browser navigation":
			frmBrowser.title = "Inline browser";
			frmBrowser.brwDemo.screenLevelWidget=false;
			frmBrowser.brwDemo.requestURLConfig = {
		        "URL": "http://www.google.co.in",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
		    break;
		case "Detect telephone number":
			frmBrowser.title = "Detect phone num";
			frmBrowser.brwDemo.requestURLConfig = {
		        "URL": "http://www.google.com/contact/",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
		    break;
		case "Enable zoom":
			 frmBrowser.title = "Enable zoom";
			 frmBrowser.brwDemo.requestURLConfig = {
		        "URL": "http://www.apple.com/in/",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
		    frmBrowser.brwDemo.enableZoom = true;
		    break;
		case "Screen level widget":
			frmBrowser.title = "Screen level widget";
			frmBrowser.brwDemo.requestURLConfig = {
		        "URL": "http://www.google.co.in",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
		    frmBrowser.brwDemo.screenLevelWidget = true;
		    break;
	}
	frmBrowser.show();

}


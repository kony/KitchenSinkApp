// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.

/****************************************************************
*	Name    : onWidgetCatBtnsClick
*	Author  : Kony
*	Purpose : To expand or collpase the the widget category items.
*             For ex : If user selects a widget from Container widgets then the other two categories(basic,advanced) must be hidden.
******************************************************************/

function onWidgetCatBtnsClick(btnId)
{
	if (btnId == "btnContainerWidTab")
	{
		if(frmUInterface.segContainerWidgets.isVisible == true)
			frmUInterface.segContainerWidgets.setVisibility(false);
		else
			frmUInterface.segContainerWidgets.setVisibility(true);
			
		frmUInterface.segBasicWidgets.setVisibility(false);
		frmUInterface.segAdvancedWidgets.setVisibility(false);
	}
	else if (btnId == "btnBasicWidTab")
	{
		if(frmUInterface.segBasicWidgets.isVisible == true)
			frmUInterface.segBasicWidgets.setVisibility(false);
		else
			frmUInterface.segBasicWidgets.setVisibility(true);
			
		frmUInterface.segContainerWidgets.setVisibility(false);
		frmUInterface.segAdvancedWidgets.setVisibility(false);
	}
	else
	{
		if(frmUInterface.segAdvancedWidgets.isVisible == true)
			frmUInterface.segAdvancedWidgets.setVisibility(false);
		else
			frmUInterface.segAdvancedWidgets.setVisibility(true);
			
		frmUInterface.segContainerWidgets.setVisibility(false);
		frmUInterface.segBasicWidgets.setVisibility(false);
	}
}

/*****************************************************************
*	Name    : tabAdvancedWidgets
*	Author  : Kony 
*	Purpose : This function will take the selIndex from the advanced widgets segment of UI Interface form as the parameter and based on the index position
* 			  show a particular widget's content on the UI interface screen.
******************************************************************/

function tabAdvancedWidgets(selIndex)
{
	kony.print("selected Index is "+selIndex);
	if(kony.os.deviceInfo().name == "thinclient")
	{
		switch (selIndex)
		{
			case 0:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmSegmentTablet.hbxSegmentOptions));
					break;
			case 1:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmImgGallery.hbxImgGallery));
					break;
			case 2:
					if(kony.os.deviceInfo().name != "thinclient")
						frmImgStrip.lblhIS.text = "No image selected";
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmImgStrip.hbxImgStrips));
					break;
			case 3:
					setLocationData();
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmMap.hbxMap));
					break;
			case 4:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmBrowserOptions.hbxBrowserOptions));
					break;
		}
	}
	else
	{
		switch (selIndex)
		{
			case 0:
					frmUInterface.sbxWidgetDetails.add(frmSegmentTablet.hbxSegmentOptions);
					break;
			case 1:
					frmUInterface.sbxWidgetDetails.add(frmImgGallery.hbxImgGallery);
					break;
			case 2:
					frmImgStrip.lblhIS.text = "No image selected";
					frmUInterface.sbxWidgetDetails.add(frmImgStrip.hbxImgStrips);
					break;
			case 3:
					frmUInterface.sbxWidgetDetails.add(frmMap.hbxMap);
					break;
			case 4:
					frmUInterface.sbxWidgetDetails.add(frmBrowserOptions.hbxBrowserOptions);
					break;
			case 5:
					frmUInterface.sbxWidgetDetails.add(frmSwitch.hbxSwitch);
					break;
		}
	}
}

/*****************************************************************
*	Name    : tabBasicWidgets
*	Author  : Kony 
*	Purpose : This function will take the selIndex from the basic widgets segment of UI Interface form as the parameter and based on the index position
* 			  show a particular widget's content on the UI interface screen.
******************************************************************/

function tabBasicWidgets(selIndex)
{
	kony.print("selected Index is "+selIndex);
	
	
	if(kony.os.deviceInfo().name == "thinclient")
	{
		switch (selIndex)
		{
			
			case 0:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmButton.hbxButtons));
					break;
			case 1:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmCalendar.hbxCalendars));
					break;
			case 2:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmCheckbox.hbxCheckBoxes));
					break;
			case 3:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmComboBox.hbxComboBoxes));
					break;
			case 4:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmDatagrid.hbxDatagrids));
					break;
			case 5:
					var UrlBased = owl.deepCopy(frmImage.hbxURLBasedImages);
					var fitToDim = owl.deepCopy(frmImage.hbxFitToDimensions);
					var matnAspctRtio =owl.deepCopy(frmImage.hbxMaintainAspectRatio);
					frmUInterface.sbxWidgetDetails.add(fitToDim,matnAspctRtio,UrlBased);
					break;
			case 6:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmLabels.hbxLabels));
					break;
			case 7:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmLink.hbxLinks));
					break;
			case 8:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmListBox.hbxListBoxes));
					break;
			case 9:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmRadioButton.hbxRadioButtons));
					break;
			case 10:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmRichText.hbxRichText));
					break;
			case 11:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmTextArea.hbxTextAreas));
					break;
			case 12:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmTextBox.hbxTextBoxes));
					break;		
			case 13:
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmIcons.hbxIcons),owl.deepCopy(frmIcons.hbxMoreIcons));
					break;
		}
	}
	else
	{	
		switch (selIndex)
		{
			
			case 0:
					frmUInterface.sbxWidgetDetails.add(frmButton.hbxButtons);
					break;
			case 1:
					frmUInterface.sbxWidgetDetails.add(frmCalendar.hbxCalendars);
					break;
			case 2:
					frmUInterface.sbxWidgetDetails.add(frmCheckbox.hbxCheckBoxes);
					break;
			case 3:
					frmUInterface.sbxWidgetDetails.add(frmComboBox.hbxComboBoxes);
					break;
			case 4:
					frmUInterface.sbxWidgetDetails.add(frmDatagrid.hbxDatagrids);
					break;
			case 5:
					frmUInterface.sbxWidgetDetails.add(frmImage.hbxFitToDimensions,frmImage.hbxMaintainAspectRatio,frmImage.hbxCrop,frmImage.hbxURLBasedImages);
					break;
			case 6:
					frmUInterface.sbxWidgetDetails.add(frmLabels.hbxLabels);
					break;
			case 7:
					frmUInterface.sbxWidgetDetails.add(frmLink.hbxLinks);
					break;
			case 8:
					frmUInterface.sbxWidgetDetails.add(frmListBox.hbxListBoxes);
					break;
			case 9:
					frmUInterface.sbxWidgetDetails.add(frmRadioButton.hbxRadioButtons);
					break;
			case 10:
					frmUInterface.sbxWidgetDetails.add(frmRichText.hbxRichText);
					break;
			case 11:
					frmUInterface.sbxWidgetDetails.add(frmSlider.hbxSliders);
					break;
			case 12:
					frmUInterface.sbxWidgetDetails.add(frmTextArea.hbxTextAreas);
					break;
			case 13:
					frmUInterface.sbxWidgetDetails.add(frmTextBox.hbxTextBoxes);
					break;		
			case 14:
					frmUInterface.sbxWidgetDetails.add(frmIcons.hbxIcons,frmIcons.hbxMoreIcons);
					break;
		}
	}
}

/*****************************************************************
*	Name    : tabContainerWidgets
*	Author  : Kony 
*	Purpose : This function will take the selIndex from the container widgets segment of UI Interface form as the parameter and based on the index position
* 			  show a particular widget's content on the UI interface screen.
******************************************************************/

function tabContainerWidgets(selIndex)
{
	
	kony.print("SELECTED INDEX :: "+selIndex);
	switch (selIndex)
	{
		case 0:
				//In thinclient ,Whenever we are adding the objects to a box/form/scrollbox 
				//they are not cloning the object but passing the reference of an object
				//So ,We will make use of deepCopy method to deepCopy the object and add it to box/form/scrollbox 

				if(kony.os.deviceInfo().name == "thinclient")
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmFormOptions.hbxFormOptionsTab));
				else
					frmUInterface.sbxWidgetDetails.add(frmFormOptions.hbxFormOptionsTab);
				break;
		case 1:
				if(kony.os.deviceInfo().name == "thinclient")
				{
					var defTab = owl.deepCopy(frmTabPane.hbxDefaultTbpTab);
					var collpaseTab = owl.deepCopy(frmTabPane.hbxCollapseTbpTab);
					var toggleTab = owl.deepCopy(frmTabPane.hbxToggleTbpTab);
					var ImgPosTab = owl.deepCopy(frmTabPane.hbxImgPosTbpTab);
					frmUInterface.sbxWidgetDetails.add(defTab,collpaseTab,toggleTab,ImgPosTab);
				}
				else if(channel=="tablet" && kony.os.deviceInfo().name == "android")
				{
					frmUInterface.sbxWidgetDetails.add(frmTabPane.hbxDefaultTbpTab,frmTabPane.hbxCollapseTbpTab,frmTabPane.hbxToggleTbpTab,frmTabPane.hbxImgPosTbpTab);
				}
				else
					frmUInterface.sbxWidgetDetails.add(frmTabPane.hbxDefaultTbpTab,frmTabPane.hbxCollapseTbpTab,frmTabPane.hbxToggleTbpTab,frmTabPane.hbxImgPosTbpTab,frmTabPane.hbxPageTbpTab);
				break;
		case 2:
				if(kony.os.deviceInfo().name == "thinclient" && channel == "desktopweb")
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmScrollBox.hbxScrbxDemo));
				else if(kony.os.deviceInfo().name == "thinclient" && channel != "desktopweb")
					frmUInterface.sbxWidgetDetails.add(owl.deepCopy(frmScrollBoxSPA.hbxScrbxDemo));
				else
					frmUInterface.sbxWidgetDetails.add(frmScrollBoxMenu.sboxGlobalHome);
				break;
	
	}
}

/*****************************************************************
*	Name    : tabUIHandle
*	Author  : Kony 
*	Purpose : This function will take the segment object as the parameter i.e segContainerWidgets/segBasicWidgets/segAdvancedWidgets
* 			  and navigated to appropriate handle to show a particular widget's content on the UI interface screen.
******************************************************************/

function tabUIHandle(segment)
{
	var widLength = frmUInterface.sbxWidgetDetails.widgets().length;
	
	kony.print("wid LENGTH ::"+widLength);
	if(widLength != 0)
	{
		for (var i=0 ;i< widLength ;i++)
		{
			kony.print("ENTERED");
			frmUInterface.sbxWidgetDetails.removeAt(0);
		}
	}
	
	if(kony.os.deviceInfo().name != "thinclient")
		frmUInterface.sbxWidgetDetails.scrollToBeginning();
	
	var segId = segment.id;
	kony.print("segment ID is :: "+segId);
	
	
	if (segId=="segContainerWidgets")
		tabContainerWidgets(frmUInterface.segContainerWidgets.selectedIndex[1]);
	else if (segId=="segBasicWidgets")
		tabBasicWidgets(frmUInterface.segBasicWidgets.selectedIndex[1]);
	else
		tabAdvancedWidgets(frmUInterface.segAdvancedWidgets.selectedIndex[1]);
		
	
}

/*****************************************************************
*	Name    : setTabUiSbxWidDetails
*	Author  : Kony 
*	Purpose : Used to fill the UI Interface screen initially with form widget's content 
******************************************************************/

function setTabUiSbxWidDetails()
{
	if(channel=="tablet" && kony.os.deviceInfo().name == "android")
	{
		kony.print("\n\n\n\n\n\n\n\n\n\n Do nothing for now");
		//In android platform, We can not read segContainerWidgets in init instead we can read it in post show
		//frmUInterface.segContainerWidgets.selectedIndex=[0,0];
		//tabUIHandle(frmUInterface.segContainerWidgets);
	}
	else
	{
		frmUInterface.segContainerWidgets.selectedIndex=[0,0];
		tabUIHandle(frmUInterface.segContainerWidgets);
	}
}
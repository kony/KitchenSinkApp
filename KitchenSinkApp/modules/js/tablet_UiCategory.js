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
		
		
		//alert(" visibility is :: "+frmUInterface.segBasicWidgets.isVisible);
			
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
	
	switch (selIndex)
	{
		case 0:
				frmSegmentTablet.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmSegmentTablet.hbxSegmentOptions);
				break;
		case 1:
				frmImgGallery.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmImgGallery.hbxImgGallery);
				break;
		case 2:
				frmImgStrip.addWidgets();
				if(kony.os.deviceInfo().name != "thinclient")
					frmImgStrip.lblhIS.text = "No image selected";
				frmUInterface.sbxWidgetDetails.add(frmImgStrip.hbxImgStrips);
				break;
		case 3:
				frmMap.addWidgets();
				if(kony.os.deviceInfo().name == "thinclient")
					setLocationData();
				frmUInterface.sbxWidgetDetails.add(frmMap.hbxMap);
				break;
		case 4:
				frmBrowserOptions.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmBrowserOptions.hbxBrowserOptions);
				break;
		case 5:
				frmSwitch.addWidgets();
				if(kony.os.deviceInfo().name != "thinclient")
					frmUInterface.sbxWidgetDetails.add(frmSwitch.hbxSwitch);
				break;
		case 6:
				frmPickerView.addWidgets();
				if(kony.os.deviceInfo().name != "thinclient")
					frmUInterface.sbxWidgetDetails.add(frmPickerView.hbxPickerViewTablet);
				break;	
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
	switch (selIndex)
	{
		case 0:
				frmButton.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmButton.hbxButtons);
				break;
		case 1:
				frmCalendar.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmCalendar.hbxCalendars);
				break;
		case 2:
				frmCheckbox.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmCheckbox.hbxCheckBoxes);
				break;
		case 3:
				frmComboBox.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmComboBox.hbxComboBoxes);
				break;
		case 4:
				frmDatagrid.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmDatagrid.hbxDatagrids);
				break;
		case 5:
				frmImage.addWidgets();
				if(kony.os.deviceInfo().name == "thinclient")
					frmUInterface.sbxWidgetDetails.add(frmImage.hbxFitToDimensions,frmImage.hbxMaintainAspectRatio,frmImage.hbxURLBasedImages);
				else
					frmUInterface.sbxWidgetDetails.add(frmImage.hbxFitToDimensions,frmImage.hbxMaintainAspectRatio,frmImage.hbxCrop,frmImage.hbxURLBasedImages);
				break;
		case 6:
				frmLabels.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmLabels.hbxLabels);
				break;
		case 7:
				frmLink.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmLink.hbxLinks);
				break;
		case 8:
				frmListBox.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmListBox.hbxListBoxes);
				break;
		case 9:
				frmRadioButton.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmRadioButton.hbxRadioButtons);
				break;
		case 10:
				frmRichText.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmRichText.hbxRichText);
				break;
		case 11:
				if(kony.os.deviceInfo().name == "thinclient")
				{
					frmTextArea.addWidgets();
					frmUInterface.sbxWidgetDetails.add(frmTextArea.hbxTextAreas);
				}
				else
				{
					frmSlider.addWidgets();
					frmUInterface.sbxWidgetDetails.add(frmSlider.hbxSliders);
				}
					
				break;
		case 12:
				if(kony.os.deviceInfo().name == "thinclient")
				{
					frmTextBox.addWidgets();
					frmUInterface.sbxWidgetDetails.add(frmTextBox.hbxTextBoxes);
				}					
				else
				{
					frmTextArea.addWidgets();
					frmUInterface.sbxWidgetDetails.add(frmTextArea.hbxTextAreas);
				}
					
				break;
		case 13:
				if(kony.os.deviceInfo().name == "thinclient")
				{
					frmIcons.addWidgets();
					frmUInterface.sbxWidgetDetails.add(frmIcons.hbxIcons,frmIcons.hbxMoreIcons);
				}
				else
				{
					frmTextBox.addWidgets();
					frmUInterface.sbxWidgetDetails.add(frmTextBox.hbxTextBoxes);
				}
					
				break;		
		case 14:
				frmIcons.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmIcons.hbxIcons,frmIcons.hbxMoreIcons);
				break;
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
				frmFormOptions.addWidgets();
				frmUInterface.sbxWidgetDetails.add(frmFormOptions.hbxFormOptionsTab);
				break;
		case 1:
				frmTabPane.addWidgets();
				if(kony.os.deviceInfo().name == "thinclient")
				{
					var defTab = frmTabPane.hbxDefaultTbpTab;
					var collpaseTab = frmTabPane.hbxCollapseTbpTab;
					var toggleTab = frmTabPane.hbxToggleTbpTab;
					var ImgPosTab =frmTabPane.hbxImgPosTbpTab;
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
				{
					frmScrollBox.addWidgets();
					frmUInterface.sbxWidgetDetails.add(frmScrollBox.hbxScrbxDemo);
				}
					
				else if(kony.os.deviceInfo().name == "thinclient" && channel != "desktopweb")
				{
					frmScrollBoxSPA.addWidgets();
					frmUInterface.sbxWidgetDetails.add(frmScrollBoxSPA.hbxScrbxDemo);
				}
				
				else if(kony.os.deviceInfo().name == "Windows" && channel == "tablet")
				{
					frmScrollBoxMenu.addWidgets();
					frmUInterface.sbxWidgetDetails.add(frmScrollBoxMenu.hbxScrbxDemo);
				}
				else
				{
					frmScrollBoxMenu.addWidgets();
					frmUInterface.sbxWidgetDetails.add(frmScrollBoxMenu.sboxGlobalHome);
				}
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
		frmUInterface.segContainerWidgets.selectedIndex=[0,0];
		tabUIHandle(frmUInterface.segContainerWidgets);
	}
	else
	{
		frmUInterface.segContainerWidgets.selectedIndex=[0,0];
		tabUIHandle(frmUInterface.segContainerWidgets);
	}
}
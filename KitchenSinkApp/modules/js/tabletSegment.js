// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.
/*****************************************************************
*	Name    : dataForSegTab
*	Author  : Kony 
*	Purpose : This function will set data to the segment 'segPullToRefresh' ,
* 			  This function will take 'eventObj' as the input parameter which refers to form object on which segPullToRefresh is placed.
******************************************************************/

function dataForSegTab(eventObj)
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
	
	if('segPullToRefresh' in eventObj)
		eventObj.segPullToRefresh.setDataWithSections(segdata);
}

/*****************************************************************
*	Name    : tabSegmentScreenLevelFeatures
*	Author  : Kony 
*	Purpose : To handle the segment screenlevelwidget features like dictionary view etc.
******************************************************************/

function tabSegmentScreenLevelFeatures(selIndex)
{
	switch (selIndex)
	{
		case 0:
				frmSegDictView.show();
				break;
		case 1:
				frmSegPull.show();
				break;
		case 2:
				callService();
				scrollEnd();
				frmSegOnReachEnd.show();
				break;
		case 3:
				frmSegSecHdrDock.show();
				break;
		case 4:
				frmSegSearchView.show();
				break;
	}
	
}

/*****************************************************************
*	Name    : tabSegmentFeaturesHandle
*	Author  : Kony 
*	Purpose : To handle the segment features(screen level is optional) like swipe to delete, dynamic row templates etc.
******************************************************************/

function tabSegmentFeaturesHandle(selIndex)
{
	
	var widLength = frmSegmentFeatures.sbxSegmentFeatureDetails.widgets().length;
	
	kony.print("wid LENGTH ::"+widLength);
	
	if(widLength != 0)
	{
		for (var i=0 ;i< widLength ;i++)
		{
			kony.print("ENTERED");
			frmSegmentFeatures.sbxSegmentFeatureDetails.removeAt(0);
		}
	}
	
	if (kony.os.deviceInfo().name!="thinclient")
		frmSegmentFeatures.sbxSegmentFeatureDetails.scrollToBeginning();
		
		kony.print("selected Index is "+selIndex);
		
	switch (selIndex)
	{
		case 0:
				if (kony.os.deviceInfo().name=="thinclient")
				frmSegmentTablet.addWidgets();
				frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.segWithSections);
				break;
		case 1:
				if (kony.os.deviceInfo().name=="thinclient")
					frmSegmentTablet.addWidgets();
				frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.segRowAlternateSkin);
				break;
		case 2:
				if (kony.os.deviceInfo().name=="thinclient")
					frmSegmentTablet.addWidgets();
				segwidMultiTemplate();
				frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.segMultiRowTemp);
				break;
		case 3:
				if(kony.os.deviceInfo().name=="thinclient")
					frmSegmentTablet.addWidgets();
				SecHdrTemplatesTab();
				frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.segSecHdrTemplates);
				break;
		case 4:
				if (kony.os.deviceInfo().name=="thinclient")
					frmSegmentTablet.addWidgets();
				frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.segPreferredWidth);
				break;
		case 5:
				if(kony.os.deviceInfo().name == "thinclient")
				{
					
					frmSegmentTablet.addWidgets();
					SecHdrTemplatesTab();
					frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.segSecHdrTemplates,frmSegmentTablet.btnMulSelect);
				}
				else if (kony.os.deviceInfo().name == "Windows" && channel == "tablet")
				{
					frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.lblSegWithGrpCels,frmSegmentTablet.segGroupCellsWinTab,frmSegmentTablet.lblSegWidoutGrpCel,frmSegmentTablet.segWdtGroupCellsWinTab);
				}
				else
				{
					frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.lblSegWithGrpCels,frmSegmentTablet.segGroupCells,frmSegmentTablet.lblSegWidoutGrpCel,frmSegmentTablet.segWidoutGrpCells);
				}
				break;
		case 6:
				if(kony.os.deviceInfo().name == "thinclient")
				{
					frmSegDynRowTemplate.addWidgets();
					initArray();
					rowTempSetData();
					frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegDynRowTemplate.segDynamicRowTemp);
				}
				else
				{
					frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.segSecHdrTemplates,frmSegmentTablet.btnMulSelect);
				}
				
				break;
		case 7:
				if(channel=="tablet" && kony.os.deviceInfo().name == "Windows")
				{
					frmSegDynRowTemplate.addWidgets();
					initArray();
					rowTempSetData();
					frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegDynRowTemplate.segDynamicRowTemp);
				}
				else if (channel=="tablet" && kony.os.deviceInfo().name == "android")
					frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegDynRowTemplate.segDynamicRowTemp);
				else
					frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.btnEditOrDone,frmSegmentTablet.segIconEditStyle);
				break;
		case 8:
				frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegSwipe.segSwipeToDelete);
				break;
		case 9:
				frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegDynRowTemplate.segDynamicRowTemp);
				break;
	}
}

/*****************************************************************
*	Name    : segmentFeaturesSetting
*	Author  : Kony 
*	Purpose : To display appropriate features based on the platform support
******************************************************************/

function segmentFeaturesSetting()
{
	
	 var data= new Array();
	 if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name == "iPad Simulator")
	 {
	 		data= [{
	            "lblSegFeatures": "Segment with sections"
	        }, {
	            "lblSegFeatures": "Row alternate skin"
	        }, {
	            "lblSegFeatures": "Row template"
	        }, {
	            "lblSegFeatures": "Section header template"
	        }, {
	            "lblSegFeatures": "Segment widgets prefered width"
	        }, {
	            "lblSegFeatures": "Segment in group mode"
	        }, {
	            "lblSegFeatures": "Multi Select"
	        }, {
	            "lblSegFeatures": "Icon edit style"
	        }, {
	            "lblSegFeatures": "Swipe to delete"
	        }, {
	            "lblSegFeatures": "Dynamic row templates"
	        }];
       }
      else if(kony.os.deviceInfo().name == "thinclient")
	 {
	 		data= [{
	            "lblSegFeatures": "Segment with sections"
	        }, {
	            "lblSegFeatures": "Row alternate skin"
	        }, {
	            "lblSegFeatures": "Row template"
	        }, {
	            "lblSegFeatures": "Section header template"
	        }, {
	            "lblSegFeatures": "Segment widgets prefered width"
	        }, {
	            "lblSegFeatures": "Multi Select"
	        }, {
	            "lblSegFeatures": "Dynamic row templates"
	        }];
       }
       else
       {
       		data= [{
	            "lblSegFeatures": "Segment with sections"
	        }, {
	            "lblSegFeatures": "Row alternate skin"
	        }, {
	            "lblSegFeatures": "Row template"
	        }, {
	            "lblSegFeatures": "Section header template"
	        }, {
	            "lblSegFeatures": "Segment widgets prefered width"
	        }, {
	            "lblSegFeatures": "Segment in group mode"
	        }, {
	            "lblSegFeatures": "Multi Select"
	        }, {
	            "lblSegFeatures": "Dynamic row templates"
	        }];
       }
    frmSegmentFeatures.segSegmentFeatureCat.setData(data);
	var widLength = frmSegmentFeatures.sbxSegmentFeatureDetails.widgets().length;
	
	kony.print("wid LENGTH ::"+widLength);
	
	if(widLength != 0)
	{
		for (var i=0 ;i< widLength ;i++)
		{
			kony.print("ENTERED");
			frmSegmentFeatures.sbxSegmentFeatureDetails.removeAt(0);
		}
	}
	frmSegmentFeatures.segSegmentFeatureCat.selectedIndex =[0,0];
	frmSegmentFeatures.sbxSegmentFeatureDetails.add(frmSegmentTablet.segWithSections);
	frmSegmentFeatures.scrollToBeginning();
}


/*****************************************************************
*	Name    : segmentViewsSetting
*	Author  : Kony 
*	Purpose : To display appropriate view types based on the platform support
******************************************************************/

function segmentViewsSetting()
{
	var data=new Array();
	if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name == "iPad Simulator")
	{
       	data = [{
            "lblSegViewCat": "Table view"
        }, {
            "lblSegViewCat": "Page view"
        }, {
            "lblSegViewCat": "Coverflow view"
        }, {
            "lblSegViewCat": "Stack view"
        }, {
            "lblSegViewCat": "Linear view"
        }, {
            "lblSegViewCat": "Rotatory view"
        }, {
            "lblSegViewCat": "Inverted rotary view"
        }, {
            "lblSegViewCat": "Cylinder view"
        }, {
            "lblSegViewCat": "Inverted cylinder view"
        }]	
		
	}
	else
	{
		data = [{
            "lblSegViewCat": "Table view"
        }, {
            "lblSegViewCat": "Page view"
        }]	
	}
	frmSegmentViews.segSegmentViewsCat.setData(data);
	var widLength = frmSegmentViews.sbxSegmentViewDetails.widgets().length;
	
	kony.print("wid LENGTH ::"+widLength);
	
	if(widLength != 0)
	{
		for (var i=0 ;i< widLength ;i++)
		{
			kony.print("ENTERED");
			frmSegmentViews.sbxSegmentViewDetails.removeAt(0);
		}
	}
	frmSegmentViews.segSegmentViewsCat.selectedIndex =[0,0];
	frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segTableView);
	
	
}

/*****************************************************************
*	Name    : tabSegmentViewsHandle
*	Author  : Kony 
*	Purpose : To handle the view types of the segment
******************************************************************/

function tabSegmentViewsHandle(selIndex)
{
	
	var widLength = frmSegmentViews.sbxSegmentViewDetails.widgets().length;
	
	kony.print("wid LENGTH ::"+widLength);
	
	if(widLength != 0)
	{
		for (var i=0 ;i< widLength ;i++)
		{
			kony.print("ENTERED");
			frmSegmentViews.sbxSegmentViewDetails.removeAt(0);
		}
	}
	if (kony.os.deviceInfo().name!="thinclient")
		frmSegmentViews.sbxSegmentViewDetails.scrollToBeginning();
		
	kony.print("selected Index is "+selIndex);
		
	switch (selIndex)
	{
		case 0:
				if(kony.os.deviceInfo().name == "thinclient" && channel != "desktopweb")
				{
					frmSegmentTablet.addWidgets();
					frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segTableView);
				}
				else if (channel == "desktopweb")
				{
					frmSegmentTablet.addWidgets();
					frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.hbxSegTableView);
				}
				else
				{
					frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segTableView);
				}
				
				break;
		case 1:
				if(kony.os.deviceInfo().name == "thinclient"&& channel != "desktopweb")
				{
					frmSegmentTablet.addWidgets();
					frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segPageView);
				}
				else if (channel == "desktopweb")
				{
					frmSegmentTablet.addWidgets();
					frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.hbxSegPageView);
				}
				else
				{
					frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segPageView);
				}
					
				break;
		case 2:
				frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segCoverFlowView);
				break;
		case 3:
				frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segStackView);
				break;
		case 4:
				frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segLinearView);
				break;
		case 5:
				frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segRotatoryView);
				break;
		case 6:
				frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segInvertedRotaryView);
				break;	
		case 7:
				frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segCylinderView);
				break;
		case 8:
				frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segInvertedCylinderView);
				break;
		case 9:
				frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segmentSearchBy);
				break;
		case 10:
				frmSegmentViews.sbxSegmentViewDetails.add(frmSegmentTablet.segmentSearchBy);
				break;
	}
}
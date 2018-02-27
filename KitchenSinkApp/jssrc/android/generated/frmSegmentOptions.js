//Form JS File
function frmSegmentOptions_button117989725237440_onClick_seq0(eventobject) {
    frmSegViews.show();
};

function frmSegmentOptions_button117989725237450_onClick_seq0(eventobject) {
    frmSegSections.show();
};

function frmSegmentOptions_button192735980060418_onClick_seq0(eventobject) {
    segwidMultiTemplate.call(this);
    segWidoutRowtmplateJS.call(this);
    frmRowTemplates.show();
};

function frmSegmentOptions_btnSegSecHdrTemp_onClick_seq0(eventobject) {
    SecHdrWidoutTemplatesJS.call(this, eventobject);
};

function frmSegmentOptions_button192735980061634_onClick_seq0(eventobject) {
    frmSegBoxes.show();
};

function frmSegmentOptions_button192735980060914_onClick_seq0(eventobject) {
    frmsegGroupMode.show();
};

function frmSegmentOptions_button1927359800104825_onClick_seq0(eventobject) {
    frmSegSections.show();
};

function frmSegmentOptions_btnSegmentSingleSelect_onClick_seq0(eventobject) {
    segmentSingleSelect.call(this, eventobject);
};

function frmSegmentOptions_btnSegMulSel_onClick_seq0(eventobject) {
    SecHdrWidoutTemplatesJS.call(this, eventobject);
};

function frmSegmentOptions_button685080434820567_onClick_seq0(eventobject) {
    frmSegActionableWidgets.show();
};

function frmSegmentOptions_button117822895631304_onClick_seq0(eventobject) {
    frmSegDynRowTemplate.show();
};

function addWidgetsfrmSegmentOptions() {
    var button117989725237440 = new kony.ui.Button({
        "id": "button117989725237440",
        "isVisible": true,
        "text": "Segment views",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentOptions_button117989725237440_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button117989725237450 = new kony.ui.Button({
        "id": "button117989725237450",
        "isVisible": true,
        "text": "Segment with sections",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentOptions_button117989725237450_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button192735980060418 = new kony.ui.Button({
        "id": "button192735980060418",
        "isVisible": true,
        "text": "Row template",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentOptions_button192735980060418_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var btnSegSecHdrTemp = new kony.ui.Button({
        "id": "btnSegSecHdrTemp",
        "isVisible": true,
        "text": "Section header template",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentOptions_btnSegSecHdrTemp_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button192735980061634 = new kony.ui.Button({
        "id": "button192735980061634",
        "isVisible": true,
        "text": "Segment widgets prefered width",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentOptions_button192735980061634_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button192735980060914 = new kony.ui.Button({
        "id": "button192735980060914",
        "isVisible": true,
        "text": "Segment in group mode",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentOptions_button192735980060914_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button1927359800104825 = new kony.ui.Button({
        "id": "button1927359800104825",
        "isVisible": true,
        "text": "Segment with row focus skin",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentOptions_button1927359800104825_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var btnSegmentSingleSelect = new kony.ui.Button({
        "id": "btnSegmentSingleSelect",
        "isVisible": true,
        "text": "Single Select",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentOptions_btnSegmentSingleSelect_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var btnSegMulSel = new kony.ui.Button({
        "id": "btnSegMulSel",
        "isVisible": true,
        "text": "Multi Select",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentOptions_btnSegMulSel_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button685080434820567 = new kony.ui.Button({
        "id": "button685080434820567",
        "isVisible": true,
        "text": "Segment with actionable widgets",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentOptions_button685080434820567_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button117822895631304 = new kony.ui.Button({
        "id": "button117822895631304",
        "isVisible": true,
        "text": "Dynamic row templates",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentOptions_button117822895631304_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    frmSegmentOptions.add(
    button117989725237440, button117989725237450, button192735980060418, btnSegSecHdrTemp, button192735980061634, button192735980060914, button1927359800104825, btnSegmentSingleSelect, btnSegMulSel, button685080434820567, button117822895631304);
};

function frmSegmentOptionsGlobals() {
    var MenuId = [];
    frmSegmentOptions = new kony.ui.Form2({
        "id": "frmSegmentOptions",
        "needAppMenu": true,
        "title": "Segment",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegmentOptions
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
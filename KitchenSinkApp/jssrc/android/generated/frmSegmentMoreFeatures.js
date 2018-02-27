//Form JS File
function frmSegmentMoreFeatures_button11782289566537_onClick_seq0(eventobject) {
    frmIconEditStyle.show();
};

function frmSegmentMoreFeatures_button11782289566543_onClick_seq0(eventobject) {
    frmSwipe.show();
};

function frmSegmentMoreFeatures_button11782289566549_onClick_seq0(eventobject) {
    frmPushPull.show();
};

function frmSegmentMoreFeatures_button15633488264683_onClick_seq0(eventobject) {
    callService.call(this);
    scrollEnd.call(this);
    frmSegOnReachEnd.show();
};

function addWidgetsfrmSegmentMoreFeatures() {
    var button11782289566537 = new kony.ui.Button({
        "id": "button11782289566537",
        "isVisible": true,
        "text": "Icon edit style",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentMoreFeatures_button11782289566537_onClick_seq0
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
    var button11782289566543 = new kony.ui.Button({
        "id": "button11782289566543",
        "isVisible": true,
        "text": "Swipe to delete",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentMoreFeatures_button11782289566543_onClick_seq0
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
    var button11782289566549 = new kony.ui.Button({
        "id": "button11782289566549",
        "isVisible": true,
        "text": "Pull to refresh",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentMoreFeatures_button11782289566549_onClick_seq0
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
    var button15633488264683 = new kony.ui.Button({
        "id": "button15633488264683",
        "isVisible": true,
        "text": "On reach end",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegmentMoreFeatures_button15633488264683_onClick_seq0
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
    frmSegmentMoreFeatures.add(
    button11782289566537, button11782289566543, button11782289566549, button15633488264683);
};

function frmSegmentMoreFeaturesGlobals() {
    var MenuId = [];
    frmSegmentMoreFeatures = new kony.ui.Form2({
        "id": "frmSegmentMoreFeatures",
        "needAppMenu": true,
        "title": "Segment",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegmentMoreFeatures
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
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
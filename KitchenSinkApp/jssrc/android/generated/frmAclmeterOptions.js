//Form JS File
function frmAclmeterOptions_button1927359800104630_onClick_seq0(eventobject) {
    retrieveCurrentAcc.call(this);
};

function frmAclmeterOptions_button1927359800104641_onClick_seq0(eventobject) {
    startmonitoringAcc.call(this);
};

function frmAclmeterOptions_button1927359800104647_onClick_seq0(eventobject) {
    regAccEvent.call(this);
    frmRegisterAccelerometer.show();
};

function addWidgetsfrmAclmeterOptions() {
    var button1927359800104630 = new kony.ui.Button({
        "id": "button1927359800104630",
        "isVisible": true,
        "text": "Current accelerometer data",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmAclmeterOptions_button1927359800104630_onClick_seq0
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
    var button1927359800104641 = new kony.ui.Button({
        "id": "button1927359800104641",
        "isVisible": true,
        "text": "Start monitoring acceleration",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmAclmeterOptions_button1927359800104641_onClick_seq0
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
    var button1927359800104647 = new kony.ui.Button({
        "id": "button1927359800104647",
        "isVisible": true,
        "text": "Register shake event",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmAclmeterOptions_button1927359800104647_onClick_seq0
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
    frmAclmeterOptions.add(
    button1927359800104630, button1927359800104641, button1927359800104647);
};

function frmAclmeterOptionsGlobals() {
    var MenuId = [];
    frmAclmeterOptions = new kony.ui.Form2({
        "id": "frmAclmeterOptions",
        "needAppMenu": true,
        "title": "Accelerometer",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmAclmeterOptions
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
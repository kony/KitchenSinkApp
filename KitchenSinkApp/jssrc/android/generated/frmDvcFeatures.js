//Form JS File
function frmDvcFeatures_button1927359800122731_onClick_seq0(eventobject) {
    if (kony.os.deviceInfo().model != "iPhone Simulator" && kony.os.userAgent() != "google_sdk") {
        frmAclmeterOptions.show();
    } else {
        simulatorCheck.call(this);
    }
};

function frmDvcFeatures_button1181029310123279_onClick_seq0(eventobject) {
    if (kony.os.deviceInfo().model != "iPhone Simulator" && kony.os.userAgent() != "google_sdk") {
        frmCameraOptions.show();
    } else {
        simulatorCheck.call(this);
    }
};

function frmDvcFeatures_button1181029310123295_onClick_seq0(eventobject) {
    geoPosition.call(this);
};

function frmDvcFeatures_button1181029310123301_onClick_seq0(eventobject) {
    frmEmail.show();
};

function frmDvcFeatures_button1181029310123307_onClick_seq0(eventobject) {
    frmContact.show();
};

function frmDvcFeatures_button1181029310123313_onClick_seq0(eventobject) {
    sendSMS.call(this);
};

function frmDvcFeatures_button1181029310123319_onClick_seq0(eventobject) {
    deviceInfo.call(this);
    frmDeviceInfo.show();
};

function frmDvcFeatures_button1181029310123331_onClick_seq0(eventobject) {
    frmLocalStore.show();
    frmLocalStore.lblLocalClear.text = ""
    frmLocalStore.frmLocalTxtSet2.text == ""
    frmLocalStore.frmLocalTxtSet1.text == ""
};

function frmDvcFeatures_button1181029310123337_onClick_seq0(eventobject) {
    frmWebSQL.show();
};

function frmDvcFeatures_button1181029310123343_onClick_seq0(eventobject) {
    frmCrypto.show();
};

function frmDvcFeatures_button1181029310123359_onClick_seq0(eventobject) {
    frmAPIKey.show();
};

function addWidgetsfrmDvcFeatures() {
    var button1927359800122731 = new kony.ui.Button({
        "id": "button1927359800122731",
        "isVisible": true,
        "text": "Accelerometer",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDvcFeatures_button1927359800122731_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1181029310123279 = new kony.ui.Button({
        "id": "button1181029310123279",
        "isVisible": true,
        "text": "Camera",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDvcFeatures_button1181029310123279_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1181029310123295 = new kony.ui.Button({
        "id": "button1181029310123295",
        "isVisible": true,
        "text": "GeoLocation",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDvcFeatures_button1181029310123295_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1181029310123301 = new kony.ui.Button({
        "id": "button1181029310123301",
        "isVisible": true,
        "text": "Email",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDvcFeatures_button1181029310123301_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1181029310123307 = new kony.ui.Button({
        "id": "button1181029310123307",
        "isVisible": true,
        "text": "Address Book",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDvcFeatures_button1181029310123307_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1181029310123313 = new kony.ui.Button({
        "id": "button1181029310123313",
        "isVisible": true,
        "text": "SMS",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDvcFeatures_button1181029310123313_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1181029310123319 = new kony.ui.Button({
        "id": "button1181029310123319",
        "isVisible": true,
        "text": "Device Info",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDvcFeatures_button1181029310123319_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1181029310123331 = new kony.ui.Button({
        "id": "button1181029310123331",
        "isVisible": true,
        "text": "Local Storage",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDvcFeatures_button1181029310123331_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1181029310123337 = new kony.ui.Button({
        "id": "button1181029310123337",
        "isVisible": true,
        "text": "WebSQL",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDvcFeatures_button1181029310123337_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1181029310123343 = new kony.ui.Button({
        "id": "button1181029310123343",
        "isVisible": true,
        "text": "Crypto Libraries",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDvcFeatures_button1181029310123343_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1181029310123359 = new kony.ui.Button({
        "id": "button1181029310123359",
        "isVisible": true,
        "text": "Asynchronous Data Access",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDvcFeatures_button1181029310123359_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    frmDvcFeatures.add(
    button1927359800122731, button1181029310123279, button1181029310123295, button1181029310123301, button1181029310123307, button1181029310123313, button1181029310123319, button1181029310123331, button1181029310123337, button1181029310123343, button1181029310123359);
};

function frmDvcFeaturesGlobals() {
    var MenuId = [];
    frmDvcFeatures = new kony.ui.Form2({
        "id": "frmDvcFeatures",
        "needAppMenu": true,
        "title": "Device Features",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmDvcFeatures
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
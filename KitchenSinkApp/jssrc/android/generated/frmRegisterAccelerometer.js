//Form JS File
function frmRegisterAccelerometer_frmRegisterAccelerometer_onhide_seq0(eventobject, neworientation) {
    if (kony.os.deviceInfo().name != "iPhone") {
        kony.accelerometer.unregisterAccelerationEvents(["shake"]);
        delete shakeCount;
        frmRegisterAccelerometer.lblEvent3.text = "0";
    }
};

function addWidgetsfrmRegisterAccelerometer() {
    var lblEventAndroid = new kony.ui.Label({
        "id": "lblEventAndroid",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox193117304862989 = new kony.ui.Box({
        "id": "hbox193117304862989",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [6, 12, 6, 6],
        "vExpand": false,
        "marginInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox193117304862989.add(
    lblEventAndroid);
    var lblEvent1 = new kony.ui.Label({
        "id": "lblEvent1",
        "isVisible": true,
        "text": "No of times device shaked:",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 82
    }, {
        "textCopyable": false
    });
    var lblEvent3 = new kony.ui.Label({
        "id": "lblEvent3",
        "isVisible": true,
        "text": "0",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 18
    }, {
        "textCopyable": false
    });
    var hbox10446524724681 = new kony.ui.Box({
        "id": "hbox10446524724681",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [6, 12, 6, 6],
        "vExpand": false,
        "marginInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox10446524724681.add(
    lblEvent1, lblEvent3);
    frmRegisterAccelerometer.add(
    hbox193117304862989, hbox10446524724681);
};

function frmRegisterAccelerometerGlobals() {
    var MenuId = [];
    frmRegisterAccelerometer = new kony.ui.Form2({
        "id": "frmRegisterAccelerometer",
        "needAppMenu": true,
        "title": "Accelerometer",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "onHide": frmRegisterAccelerometer_frmRegisterAccelerometer_onhide_seq0,
        "addWidgets": addWidgetsfrmRegisterAccelerometer
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
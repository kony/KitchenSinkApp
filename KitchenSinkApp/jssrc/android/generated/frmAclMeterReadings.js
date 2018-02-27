//Form JS File
function frmAclMeterReadings_frmAclMeterReadings_onhide_seq0(eventobject, neworientation) {
    kony.accelerometer.stopMonitoringAcceleration();
};

function addWidgetsfrmAclMeterReadings() {
    var label10446524723747 = new kony.ui.Label({
        "id": "label10446524723747",
        "isVisible": true,
        "text": "Accelerometer readings",
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
    var hbox10446524723745 = new kony.ui.Box({
        "id": "hbox10446524723745",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [12, 6, 12, 6],
        "vExpand": false,
        "marginInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox10446524723745.add(
    label10446524723747);
    var label10446524723465 = new kony.ui.Label({
        "id": "label10446524723465",
        "isVisible": true,
        "text": "X coordinate:",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 39
    }, {
        "textCopyable": false
    });
    var lblX = new kony.ui.Label({
        "id": "lblX",
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 61
    }, {
        "textCopyable": false
    });
    var hbox10446524723463 = new kony.ui.Box({
        "id": "hbox10446524723463",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox10446524723463.add(
    label10446524723465, lblX);
    var label10446524723407 = new kony.ui.Label({
        "id": "label10446524723407",
        "isVisible": true,
        "text": "Y coordinate:",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 39
    }, {
        "textCopyable": false
    });
    var lblY = new kony.ui.Label({
        "id": "lblY",
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 61
    }, {
        "textCopyable": false
    });
    var hbox10446524723404 = new kony.ui.Box({
        "id": "hbox10446524723404",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox10446524723404.add(
    label10446524723407, lblY);
    var label10446524723483 = new kony.ui.Label({
        "id": "label10446524723483",
        "isVisible": true,
        "text": "Z coordinate:",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 39
    }, {
        "textCopyable": false
    });
    var lblZ = new kony.ui.Label({
        "id": "lblZ",
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 61
    }, {
        "textCopyable": false
    });
    var hbox10446524723481 = new kony.ui.Box({
        "id": "hbox10446524723481",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox10446524723481.add(
    label10446524723483, lblZ);
    var label10446524723865 = new kony.ui.Label({
        "id": "label10446524723865",
        "isVisible": true,
        "text": "Time Stamp:",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 39
    }, {
        "textCopyable": false
    });
    var lblT = new kony.ui.Label({
        "id": "lblT",
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 61
    }, {
        "textCopyable": false
    });
    var hbox10446524723863 = new kony.ui.Box({
        "id": "hbox10446524723863",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox10446524723863.add(
    label10446524723865, lblT);
    frmAclMeterReadings.add(
    hbox10446524723745, hbox10446524723463, hbox10446524723404, hbox10446524723481, hbox10446524723863);
};

function frmAclMeterReadingsGlobals() {
    var MenuId = [];
    frmAclMeterReadings = new kony.ui.Form2({
        "id": "frmAclMeterReadings",
        "needAppMenu": true,
        "title": "Accelerometer",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "onHide": frmAclMeterReadings_frmAclMeterReadings_onhide_seq0,
        "addWidgets": addWidgetsfrmAclMeterReadings
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
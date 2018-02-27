//Form JS File
function frmCameraOptions_button1927508755138051_onClick_seq0(eventobject) {
    frmCameraBasic.show();
    frmCameraBasic.lblCamBasic.text = ""
};

function frmCameraOptions_button1927508755138061_onClick_seq0(eventobject) {
    frmCameraFrmOverlay.show();
    frmCameraFrmOverlay.lblFrmCamOverlay.text = ""
};

function frmCameraOptions_button1927508755138075_onClick_seq0(eventobject) {
    frmCamAcsModes.show();
    frmCamAcsModes.lblFrmCamAccessModes.text = ""
};

function addWidgetsfrmCameraOptions() {
    var button1927508755138051 = new kony.ui.Button({
        "id": "button1927508755138051",
        "isVisible": true,
        "text": "Basic camera",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmCameraOptions_button1927508755138051_onClick_seq0
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
    var button1927508755138061 = new kony.ui.Button({
        "id": "button1927508755138061",
        "isVisible": true,
        "text": "Camera with form overlay",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmCameraOptions_button1927508755138061_onClick_seq0
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
    var button1927508755138075 = new kony.ui.Button({
        "id": "button1927508755138075",
        "isVisible": true,
        "text": "Camera access modes",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmCameraOptions_button1927508755138075_onClick_seq0
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
    frmCameraOptions.add(
    button1927508755138051, button1927508755138061, button1927508755138075);
};

function frmCameraOptionsGlobals() {
    var MenuId = [];
    frmCameraOptions = new kony.ui.Form2({
        "id": "frmCameraOptions",
        "needAppMenu": true,
        "title": "Camera",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmCameraOptions
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
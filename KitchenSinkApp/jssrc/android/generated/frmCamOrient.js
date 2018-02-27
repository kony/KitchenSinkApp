//Form JS File
function frmCamOrient_camera1930040990139485_onCapture_seq0(eventobject) {
    onCapturePortrait.call(this, eventobject);
};

function frmCamOrient_camera1930040990139495_onCapture_seq0(eventobject) {
    onCaptureLandScape.call(this, eventobject);
};

function addWidgetsfrmCamOrient() {
    var camera1930040990139485 = new kony.ui.Camera({
        "id": "camera1930040990139485",
        "isVisible": true,
        "text": "Portrait",
        "skin": "camNormal",
        "focusSkin": "camFocus",
        "onCapture": frmCamOrient_camera1930040990139485_onCapture_seq0,
        "scaleFactor": 80,
        "compressionLevel": 0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [12, 12, 12, 6],
        "padding": [0, 3, 0, 3],
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var camera1930040990139495 = new kony.ui.Camera({
        "id": "camera1930040990139495",
        "isVisible": true,
        "text": "Landscape",
        "skin": "camNormal",
        "focusSkin": "camFocus",
        "onCapture": frmCamOrient_camera1930040990139495_onCapture_seq0,
        "scaleFactor": 80,
        "compressionLevel": 0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var imgCamPortrait = new kony.ui.Image2({
        "id": "imgCamPortrait",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [2, 2, 2, 2],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 207,
        "referenceHeight": 315,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 48
    }, {});
    var imgCamLand = new kony.ui.Image2({
        "id": "imgCamLand",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [2, 2, 2, 2],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 207,
        "referenceHeight": 315,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 52
    }, {});
    var hbox1930040990139516 = new kony.ui.Box({
        "id": "hbox1930040990139516",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 71,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990139516.add(
    imgCamPortrait, imgCamLand);
    var lblFrmCamOrient = new kony.ui.Label({
        "id": "lblFrmCamOrient",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmCamOrient.add(
    camera1930040990139485, camera1930040990139495, hbox1930040990139516, lblFrmCamOrient);
};

function frmCamOrientGlobals() {
    var MenuId = [];
    frmCamOrient = new kony.ui.Form2({
        "id": "frmCamOrient",
        "needAppMenu": true,
        "title": "Orientation",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmCamOrient
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
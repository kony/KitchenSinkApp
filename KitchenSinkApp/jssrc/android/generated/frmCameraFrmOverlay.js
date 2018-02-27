//Form JS File
function frmCameraFrmOverlay_cameraFrmOverLay_onCapture_seq0(eventobject) {
    onCaptureFrmOverLay.call(this, eventobject);
};

function addWidgetsfrmCameraFrmOverlay() {
    var cameraFrmOverLay = new kony.ui.Camera({
        "id": "cameraFrmOverLay",
        "isVisible": true,
        "text": "Capture image",
        "skin": "camNormal",
        "focusSkin": "camFocus",
        "onCapture": frmCameraFrmOverlay_cameraFrmOverLay_onCapture_seq0,
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
        "enableOverlay": true,
        "overlayConfig": {
            "overlayForm": frmCameraOverlaid,
            "tapAnywhere": false
        }
    });
    var image21927508755138414 = new kony.ui.Image2({
        "id": "image21927508755138414",
        "isVisible": true,
        "src": "frame1.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [2, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 100,
        "referenceHeight": 70,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {});
    var image21927508755138415 = new kony.ui.Image2({
        "id": "image21927508755138415",
        "isVisible": true,
        "src": "frame2.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [2, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 100,
        "referenceHeight": 70,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {});
    var imageFrmCamFrmOverRef = new kony.ui.Image2({
        "id": "imageFrmCamFrmOverRef",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 100,
        "referenceHeight": 70,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {});
    var hbox1927508755138413 = new kony.ui.Box({
        "id": "hbox1927508755138413",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1927508755138413.add(
    image21927508755138414, image21927508755138415, imageFrmCamFrmOverRef);
    var lblFrmCamOverlay = new kony.ui.Label({
        "id": "lblFrmCamOverlay",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmCameraFrmOverlay.add(
    cameraFrmOverLay, hbox1927508755138413, lblFrmCamOverlay);
};

function frmCameraFrmOverlayGlobals() {
    var MenuId = [];
    frmCameraFrmOverlay = new kony.ui.Form2({
        "id": "frmCameraFrmOverlay",
        "needAppMenu": true,
        "title": "Form Overlay",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmCameraFrmOverlay
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
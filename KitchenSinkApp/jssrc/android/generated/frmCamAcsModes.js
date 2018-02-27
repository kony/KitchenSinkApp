//Form JS File
function frmCamAcsModes_camera1930040990139330_onCapture_seq0(eventobject) {
    onCapturePublic.call(this, eventobject);
};

function frmCamAcsModes_camera1930040990139338_onCapture_seq0(eventobject) {
    onCapturePrivate.call(this, eventobject);
};

function frmCamAcsModes_camera1930040990139344_onCapture_seq0(eventobject) {
    onCaptureinMemory.call(this, eventobject);
};

function addWidgetsfrmCamAcsModes() {
    var camera1930040990139330 = new kony.ui.Camera({
        "id": "camera1930040990139330",
        "isVisible": true,
        "text": "Public mode",
        "skin": "camNormal",
        "focusSkin": "camFocus",
        "onCapture": frmCamAcsModes_camera1930040990139330_onCapture_seq0,
        "scaleFactor": 80,
        "compressionLevel": 70
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
    var camera1930040990139338 = new kony.ui.Camera({
        "id": "camera1930040990139338",
        "isVisible": true,
        "text": "Private mode",
        "skin": "camNormal",
        "focusSkin": "camFocus",
        "onCapture": frmCamAcsModes_camera1930040990139338_onCapture_seq0,
        "scaleFactor": 80,
        "compressionLevel": 70
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
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PRIVATE,
        "enableOverlay": true,
        "overlayConfig": {
            "overlayForm": frmDummy,
            "tapAnywhere": false
        }
    });
    var camera1930040990139344 = new kony.ui.Camera({
        "id": "camera1930040990139344",
        "isVisible": true,
        "text": "In memory mode",
        "skin": "camNormal",
        "focusSkin": "camFocus",
        "onCapture": frmCamAcsModes_camera1930040990139344_onCapture_seq0,
        "scaleFactor": 80,
        "compressionLevel": 70
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
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_INMEMORY,
        "enableOverlay": true,
        "overlayConfig": {
            "overlayForm": frmDummy,
            "tapAnywhere": false
        }
    });
    var img1CamAcc = new kony.ui.Image2({
        "id": "img1CamAcc",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [2, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 110,
        "referenceHeight": 70,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 32
    }, {});
    var img2CamAcc = new kony.ui.Image2({
        "id": "img2CamAcc",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [2, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 110,
        "referenceHeight": 70,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var img3CamAcc = new kony.ui.Image2({
        "id": "img3CamAcc",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 110,
        "referenceHeight": 70,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {});
    var hbox1930040990139390 = new kony.ui.Box({
        "id": "hbox1930040990139390",
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
    hbox1930040990139390.add(
    img1CamAcc, img2CamAcc, img3CamAcc);
    var lblFrmCamAccessModes = new kony.ui.Label({
        "id": "lblFrmCamAccessModes",
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
    frmCamAcsModes.add(
    camera1930040990139330, camera1930040990139338, camera1930040990139344, hbox1930040990139390, lblFrmCamAccessModes);
};

function frmCamAcsModesGlobals() {
    var MenuId = [];
    frmCamAcsModes = new kony.ui.Form2({
        "id": "frmCamAcsModes",
        "needAppMenu": true,
        "title": "Access modes",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmCamAcsModes
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
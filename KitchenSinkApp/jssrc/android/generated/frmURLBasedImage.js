//Form JS File
function addWidgetsfrmURLBasedImage() {
    var labelori = new kony.ui.Label({
        "id": "labelori",
        "isVisible": true,
        "text": "Original image size is 300X300(Pixels)",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var labelfit = new kony.ui.Label({
        "id": "labelfit",
        "isVisible": true,
        "text": "FIT TO DIMENTIONS",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var labelfitsize = new kony.ui.Label({
        "id": "labelfitsize",
        "isVisible": true,
        "text": "referenceWidth-200px; referenceHeight-100px",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 4, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var imgFt = new kony.ui.Image2({
        "id": "imgFt",
        "isVisible": true,
        "src": "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 3, 4, 3],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 200,
        "referenceHeight": 100,
        "marginInPixel": false,
        "containerWeight": 10
    }, {});
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false
    }, {});
    var labelmain = new kony.ui.Label({
        "id": "labelmain",
        "isVisible": true,
        "text": "MAINTAIN ASPECT RATIO",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var labelmainsize = new kony.ui.Label({
        "id": "labelmainsize",
        "isVisible": true,
        "text": "referenceWidth-300px; referenceHeight-150px",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 4, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var imgMt = new kony.ui.Image2({
        "id": "imgMt",
        "isVisible": true,
        "src": "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 3, 4, 3],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 300,
        "referenceHeight": 150,
        "marginInPixel": false,
        "containerWeight": 9
    }, {});
    var line2 = new kony.ui.Line({
        "id": "line2",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false
    }, {});
    var labelcrop = new kony.ui.Label({
        "id": "labelcrop",
        "isVisible": true,
        "text": "CROP",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var labelcropsize = new kony.ui.Label({
        "id": "labelcropsize",
        "isVisible": true,
        "text": "referenceWidth-100px; referenceHeight-100px",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var imgCp = new kony.ui.Image2({
        "id": "imgCp",
        "isVisible": true,
        "src": "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 3, 4, 3],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
        "referenceWidth": 100,
        "referenceHeight": 100,
        "marginInPixel": false,
        "containerWeight": 10
    }, {});
    var line3 = new kony.ui.Line({
        "id": "line3",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 2, 0, 2],
        "marginInPixel": false
    }, {});
    frmURLBasedImage.add(
    labelori, labelfit, labelfitsize, imgFt, line1, labelmain, labelmainsize, imgMt, line2, labelcrop, labelcropsize, imgCp, line3);
};

function frmURLBasedImageGlobals() {
    var MenuId = [];
    frmURLBasedImage = new kony.ui.Form2({
        "id": "frmURLBasedImage",
        "needAppMenu": true,
        "title": "URL based images",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmURLBasedImage
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
//Form JS File
function addWidgetsfrmImgCrop() {
    var labelDesc = new kony.ui.Label({
        "id": "labelDesc",
        "isVisible": true,
        "text": "Image cropped as image size is larger than image widget size",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 18, 12, 15],
        "padding": [5, 5, 5, 5],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 9
    }, {
        "textCopyable": false
    });
    var linetop = new kony.ui.Line({
        "id": "linetop",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    var imgCrop = new kony.ui.Image2({
        "id": "imgCrop",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
        "referenceWidth": 200,
        "referenceHeight": 100,
        "containerWeight": 40
    }, {});
    var labelno = new kony.ui.Label({
        "id": "labelno",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var hboxmain = new kony.ui.Box({
        "id": "hboxmain",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 36,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [4, 4, 4, 4],
        "padding": [5, 5, 5, 5],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxmain.add(
    imgCrop, labelno);
    var linebottom = new kony.ui.Line({
        "id": "linebottom",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    frmImgCrop.add(
    labelDesc, linetop, hboxmain, linebottom);
};

function frmImgCropGlobals() {
    var MenuId = [];
    frmImgCrop = new kony.ui.Form2({
        "id": "frmImgCrop",
        "needAppMenu": true,
        "title": "Crop",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmImgCrop
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
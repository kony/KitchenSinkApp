//Form JS File
function addWidgetsfrmImgFitToDimensions() {
    var labelori = new kony.ui.Label({
        "id": "labelori",
        "isVisible": true,
        "text": "Original Image",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 15, 12, 7],
        "padding": [6, 0, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 2
    }, {
        "textCopyable": false
    });
    var labelorisize = new kony.ui.Label({
        "id": "labelorisize",
        "isVisible": true,
        "text": "width=250px ; height=200px",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 7, 12, 7],
        "padding": [6, 0, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 2
    }, {
        "textCopyable": false
    });
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    var imgOrignal = new kony.ui.Image2({
        "id": "imgOrignal",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 3, 4, 3],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 250,
        "referenceHeight": 200,
        "marginInPixel": false,
        "containerWeight": 10
    }, {});
    var line2 = new kony.ui.Line({
        "id": "line2",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 5, 0, 5],
        "marginInPixel": true,
        "paddingInPixel": true
    }, {});
    var labelimg = new kony.ui.Label({
        "id": "labelimg",
        "isVisible": true,
        "text": "Image squeezed",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 7, 12, 7],
        "padding": [6, 0, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 2
    }, {
        "textCopyable": false
    });
    var labelimgsize = new kony.ui.Label({
        "id": "labelimgsize",
        "isVisible": true,
        "text": "referenceWidth=200px; referenceHeight=100px",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 7, 12, 7],
        "padding": [6, 0, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 2
    }, {
        "textCopyable": false
    });
    var line11827272688002 = new kony.ui.Line({
        "id": "line11827272688002",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    var imgSqueezed = new kony.ui.Image2({
        "id": "imgSqueezed",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 3, 4, 3],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 200,
        "referenceHeight": 100,
        "marginInPixel": false,
        "containerWeight": 20
    }, {});
    var line193382457664 = new kony.ui.Line({
        "id": "line193382457664",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 5, 0, 5],
        "marginInPixel": true,
        "paddingInPixel": true
    }, {});
    var labelimgstr = new kony.ui.Label({
        "id": "labelimgstr",
        "isVisible": true,
        "text": "Image stretched",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 3, 4, 3],
        "padding": [6, 0, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var labelimgstrsize = new kony.ui.Label({
        "id": "labelimgstrsize",
        "isVisible": true,
        "text": "referenceWidth=350px; referenceHeight=300px",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 3, 4, 3],
        "padding": [6, 0, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var line3 = new kony.ui.Line({
        "id": "line3",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    var imgStretched = new kony.ui.Image2({
        "id": "imgStretched",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 3, 4, 3],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 300,
        "referenceHeight": 300,
        "marginInPixel": false,
        "containerWeight": 23
    }, {});
    var line4 = new kony.ui.Line({
        "id": "line4",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    frmImgFitToDimensions.add(
    labelori, labelorisize, line1, imgOrignal, line2, labelimg, labelimgsize, line11827272688002, imgSqueezed, line193382457664, labelimgstr, labelimgstrsize, line3, imgStretched, line4);
};

function frmImgFitToDimensionsGlobals() {
    var MenuId = [];
    frmImgFitToDimensions = new kony.ui.Form2({
        "id": "frmImgFitToDimensions",
        "needAppMenu": true,
        "title": "Fit to Dimensions",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmImgFitToDimensions
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
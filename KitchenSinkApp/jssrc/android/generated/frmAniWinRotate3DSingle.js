//Form JS File
function frmAniWinRotate3DSingle_frmAniWinRotate3DSingle_preshow_seq0(eventobject, neworientation) {
    hBoxTitle.lblTitle.text = "Rotate3DSingle";
};

function addWidgetsfrmAniWinRotate3DSingle() {
    var image2685080434508114 = new kony.ui.Image2({
        "id": "image2685080434508114",
        "isVisible": true,
        "src": "cross.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 480,
        "referenceHeight": 650,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmAniWinRotate3DSingle.add(
    image2685080434508114);
};

function frmAniWinRotate3DSingleGlobals() {
    var MenuId = [];
    frmAniWinRotate3DSingle = new kony.ui.Form2({
        "id": "frmAniWinRotate3DSingle",
        "needAppMenu": true,
        "title": "Rotate3DSingle",
        "enabledForIdleTimeout": false,
        "skin": "frmSknTrans",
        "preShow": frmAniWinRotate3DSingle_frmAniWinRotate3DSingle_preshow_seq0,
        "addWidgets": addWidgetsfrmAniWinRotate3DSingle
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
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
//Form JS File
function frmAniWinSlide_frmAniWinSlide_preshow_seq0(eventobject, neworientation) {
    hBoxTitle.lblTitle.text = "Slide";
};

function addWidgetsfrmAniWinSlide() {
    var imgAniWinSlide = new kony.ui.Image2({
        "id": "imgAniWinSlide",
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
    frmAniWinSlide.add(
    imgAniWinSlide);
};

function frmAniWinSlideGlobals() {
    var MenuId = [];
    frmAniWinSlide = new kony.ui.Form2({
        "id": "frmAniWinSlide",
        "needAppMenu": true,
        "title": "Slide",
        "enabledForIdleTimeout": false,
        "skin": "frmSknTrans",
        "preShow": frmAniWinSlide_frmAniWinSlide_preshow_seq0,
        "addWidgets": addWidgetsfrmAniWinSlide
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
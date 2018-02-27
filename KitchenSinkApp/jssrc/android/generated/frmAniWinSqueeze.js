//Form JS File
function frmAniWinSqueeze_frmAniWinSqueeze_preshow_seq0(eventobject, neworientation) {
    hBoxTitle.lblTitle.text = "Squeeze";
};

function addWidgetsfrmAniWinSqueeze() {
    var imgAniWinSqueeze = new kony.ui.Image2({
        "id": "imgAniWinSqueeze",
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
    frmAniWinSqueeze.add(
    imgAniWinSqueeze);
};

function frmAniWinSqueezeGlobals() {
    var MenuId = [];
    frmAniWinSqueeze = new kony.ui.Form2({
        "id": "frmAniWinSqueeze",
        "needAppMenu": true,
        "title": "Squeeze",
        "enabledForIdleTimeout": false,
        "skin": "frmSknTrans",
        "preShow": frmAniWinSqueeze_frmAniWinSqueeze_preshow_seq0,
        "addWidgets": addWidgetsfrmAniWinSqueeze
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
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
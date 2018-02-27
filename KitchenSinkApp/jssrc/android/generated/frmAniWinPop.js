//Form JS File
function frmAniWinPop_frmAniWinPop_preshow_seq0(eventobject, neworientation) {
    hBoxTitle.lblTitle.text = "Pop";
};

function addWidgetsfrmAniWinPop() {};

function frmAniWinPopGlobals() {
    var MenuId = [];
    frmAniWinPop = new kony.ui.Form2({
        "id": "frmAniWinPop",
        "needAppMenu": true,
        "title": "Pop",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin",
        "preShow": frmAniWinPop_frmAniWinPop_preshow_seq0,
        "addWidgets": addWidgetsfrmAniWinPop
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
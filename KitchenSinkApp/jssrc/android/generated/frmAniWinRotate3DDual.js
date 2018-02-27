//Form JS File
function frmAniWinRotate3DDual_frmAniWinRotate3DDual_preshow_seq0(eventobject, neworientation) {
    hBoxTitle.lblTitle.text = "Rotate3DDual";
};

function addWidgetsfrmAniWinRotate3DDual() {};

function frmAniWinRotate3DDualGlobals() {
    var MenuId = [];
    frmAniWinRotate3DDual = new kony.ui.Form2({
        "id": "frmAniWinRotate3DDual",
        "needAppMenu": true,
        "title": "Rotate3DDual",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin",
        "preShow": frmAniWinRotate3DDual_frmAniWinRotate3DDual_preshow_seq0,
        "addWidgets": addWidgetsfrmAniWinRotate3DDual
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
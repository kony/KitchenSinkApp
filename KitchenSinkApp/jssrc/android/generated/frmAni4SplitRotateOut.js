//Form JS File
function addWidgetsfrmAni4SplitRotateOut() {};

function frmAni4SplitRotateOutGlobals() {
    var MenuId = [];
    frmAni4SplitRotateOut = new kony.ui.Form2({
        "id": "frmAni4SplitRotateOut",
        "needAppMenu": true,
        "title": "4SplitRotateOut",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin1",
        "addWidgets": addWidgetsfrmAni4SplitRotateOut
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
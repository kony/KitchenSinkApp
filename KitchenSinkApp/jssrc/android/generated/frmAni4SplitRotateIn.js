//Form JS File
function addWidgetsfrmAni4SplitRotateIn() {};

function frmAni4SplitRotateInGlobals() {
    var MenuId = [];
    frmAni4SplitRotateIn = new kony.ui.Form2({
        "id": "frmAni4SplitRotateIn",
        "needAppMenu": true,
        "title": "4SplitRotateIn",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin1",
        "addWidgets": addWidgetsfrmAni4SplitRotateIn
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
//Form JS File
function addWidgetsfrmAniRotateExchange() {};

function frmAniRotateExchangeGlobals() {
    var MenuId = [];
    frmAniRotateExchange = new kony.ui.Form2({
        "id": "frmAniRotateExchange",
        "needAppMenu": true,
        "title": "RotateExchange",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin",
        "addWidgets": addWidgetsfrmAniRotateExchange
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
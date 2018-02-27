//Form JS File
function addWidgetsfrmAnitoright() {};

function frmAnitorightGlobals() {
    var MenuId = [];
    frmAnitoright = new kony.ui.Form2({
        "id": "frmAnitoright",
        "needAppMenu": true,
        "title": "to right",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin",
        "addWidgets": addWidgetsfrmAnitoright
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
            "formAnimation": 4
        },
        "outTransitionConfig": {
            "formAnimation": 4
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
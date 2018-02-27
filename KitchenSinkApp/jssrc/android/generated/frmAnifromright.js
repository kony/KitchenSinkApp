//Form JS File
function addWidgetsfrmAnifromright() {};

function frmAnifromrightGlobals() {
    var MenuId = [];
    frmAnifromright = new kony.ui.Form2({
        "id": "frmAnifromright",
        "needAppMenu": true,
        "title": "from right",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin1",
        "addWidgets": addWidgetsfrmAnifromright
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
            "formAnimation": 3
        },
        "outTransitionConfig": {
            "formAnimation": 3
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
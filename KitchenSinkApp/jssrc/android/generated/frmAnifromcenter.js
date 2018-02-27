//Form JS File
function addWidgetsfrmAnifromcenter() {};

function frmAnifromcenterGlobals() {
    var MenuId = [];
    frmAnifromcenter = new kony.ui.Form2({
        "id": "frmAnifromcenter",
        "needAppMenu": true,
        "title": "from center",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin",
        "addWidgets": addWidgetsfrmAnifromcenter
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
            "formAnimation": 6
        },
        "outTransitionConfig": {
            "formAnimation": 6
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
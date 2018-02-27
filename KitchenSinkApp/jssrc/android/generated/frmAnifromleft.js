//Form JS File
function addWidgetsfrmAnifromleft() {};

function frmAnifromleftGlobals() {
    var MenuId = [];
    frmAnifromleft = new kony.ui.Form2({
        "id": "frmAnifromleft",
        "needAppMenu": true,
        "title": "from left",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin",
        "addWidgets": addWidgetsfrmAnifromleft
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
            "formAnimation": 2
        },
        "outTransitionConfig": {
            "formAnimation": 2
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
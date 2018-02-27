//Form JS File
function addWidgetsfrmAnitoleft() {};

function frmAnitoleftGlobals() {
    var MenuId = [];
    frmAnitoleft = new kony.ui.Form2({
        "id": "frmAnitoleft",
        "needAppMenu": true,
        "title": "to left",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin1",
        "addWidgets": addWidgetsfrmAnitoleft
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
            "formAnimation": 5
        },
        "outTransitionConfig": {
            "formAnimation": 5
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
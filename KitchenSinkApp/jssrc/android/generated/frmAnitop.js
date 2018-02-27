//Form JS File
function addWidgetsfrmAnitop() {};

function frmAnitopGlobals() {
    var MenuId = [];
    frmAnitop = new kony.ui.Form2({
        "id": "frmAnitop",
        "needAppMenu": true,
        "title": "top",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin",
        "addWidgets": addWidgetsfrmAnitop
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
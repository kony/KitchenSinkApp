//Form JS File
function addWidgetsfrmAni2SplitVerticalIn() {};

function frmAni2SplitVerticalInGlobals() {
    var MenuId = [];
    frmAni2SplitVerticalIn = new kony.ui.Form2({
        "id": "frmAni2SplitVerticalIn",
        "needAppMenu": true,
        "title": "2SplitVerticalIn",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin1",
        "addWidgets": addWidgetsfrmAni2SplitVerticalIn
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
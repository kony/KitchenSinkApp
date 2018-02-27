//Form JS File
function addWidgetsfrmAni2SplitVerticalOut() {};

function frmAni2SplitVerticalOutGlobals() {
    var MenuId = [];
    frmAni2SplitVerticalOut = new kony.ui.Form2({
        "id": "frmAni2SplitVerticalOut",
        "needAppMenu": true,
        "title": "2SplitVerticalOut",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin1",
        "addWidgets": addWidgetsfrmAni2SplitVerticalOut
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
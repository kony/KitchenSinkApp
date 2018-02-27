//Form JS File
function addWidgetsfrmAni2SplitHorizontalIn() {};

function frmAni2SplitHorizontalInGlobals() {
    var MenuId = [];
    frmAni2SplitHorizontalIn = new kony.ui.Form2({
        "id": "frmAni2SplitHorizontalIn",
        "needAppMenu": true,
        "title": "2SplitHorizontalIn",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin",
        "addWidgets": addWidgetsfrmAni2SplitHorizontalIn
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
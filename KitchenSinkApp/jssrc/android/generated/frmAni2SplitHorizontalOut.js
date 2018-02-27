//Form JS File
function addWidgetsfrmAni2SplitHorizontalOut() {};

function frmAni2SplitHorizontalOutGlobals() {
    var MenuId = [];
    frmAni2SplitHorizontalOut = new kony.ui.Form2({
        "id": "frmAni2SplitHorizontalOut",
        "needAppMenu": true,
        "title": "2SplitHorizontalOut",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin",
        "addWidgets": addWidgetsfrmAni2SplitHorizontalOut
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
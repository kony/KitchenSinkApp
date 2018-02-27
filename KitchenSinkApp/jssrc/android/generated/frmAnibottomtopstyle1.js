//Form JS File
function addWidgetsfrmAnibottomtopstyle1() {};

function frmAnibottomtopstyle1Globals() {
    var MenuId = [];
    frmAnibottomtopstyle1 = new kony.ui.Form2({
        "id": "frmAnibottomtopstyle1",
        "needAppMenu": true,
        "title": "bottom-top style1",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin1",
        "addWidgets": addWidgetsfrmAnibottomtopstyle1
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
            "formAnimation": 9
        },
        "outTransitionConfig": {
            "formAnimation": 9
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
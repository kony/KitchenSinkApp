//Form JS File
function addWidgetsfrmAnibottomlefttop() {};

function frmAnibottomlefttopGlobals() {
    var MenuId = [];
    frmAnibottomlefttop = new kony.ui.Form2({
        "id": "frmAnibottomlefttop",
        "needAppMenu": true,
        "title": "bottomleft-top",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin",
        "addWidgets": addWidgetsfrmAnibottomlefttop
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
            "formAnimation": 8
        },
        "outTransitionConfig": {
            "formAnimation": 8
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
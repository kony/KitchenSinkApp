//Form JS File
function addWidgetsfrmAniReveal() {};

function frmAniRevealGlobals() {
    var MenuId = [];
    frmAniReveal = new kony.ui.Form2({
        "id": "frmAniReveal",
        "needAppMenu": true,
        "title": "Reveal",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin",
        "addWidgets": addWidgetsfrmAniReveal
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
//Form JS File
function addWidgetsfrmAniDoor() {};

function frmAniDoorGlobals() {
    var MenuId = [];
    frmAniDoor = new kony.ui.Form2({
        "id": "frmAniDoor",
        "needAppMenu": true,
        "title": "Door",
        "enabledForIdleTimeout": false,
        "skin": "frmAniSkin1",
        "addWidgets": addWidgetsfrmAniDoor
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
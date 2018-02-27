//Form JS File
function frmDummy_frmDummy_postshow_seq0(eventobject, neworientation) {
    feedBack.call(this);
};

function addWidgetsfrmDummy() {};

function frmDummyGlobals() {
    var MenuId = [];
    frmDummy = new kony.ui.Form2({
        "id": "frmDummy",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmSknTrans",
        "postShow": frmDummy_frmDummy_postshow_seq0,
        "addWidgets": addWidgetsfrmDummy
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
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
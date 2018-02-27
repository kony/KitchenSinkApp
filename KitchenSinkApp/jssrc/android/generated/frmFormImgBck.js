//Form JS File
function addWidgetsfrmFormImgBck() {
    var label192735980025608 = new kony.ui.Label({
        "id": "label192735980025608",
        "isVisible": true,
        "text": "This is the form with image background",
        "skin": "lblBlackBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 1],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmFormImgBck.add(
    label192735980025608);
};

function frmFormImgBckGlobals() {
    var MenuId = [];
    frmFormImgBck = new kony.ui.Form2({
        "id": "frmFormImgBck",
        "needAppMenu": true,
        "title": "Form",
        "enabledForIdleTimeout": false,
        "skin": "frmImg",
        "addWidgets": addWidgetsfrmFormImgBck
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
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
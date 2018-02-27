//Form JS File
function frmBadge_frmBadge_preshow_seq0(eventobject, neworientation) {
    setBadge.call(this);
};

function frmBadge_btnBadge_onClick_seq0(eventobject) {
    BadgeIncrease.call(this);
};

function addWidgetsfrmBadge() {
    var label1927359800104093 = new kony.ui.Label({
        "id": "label1927359800104093",
        "isVisible": true,
        "text": "Click the below button to observe Badge on button widget and application icon",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var btnBadge = new kony.ui.Button({
        "id": "btnBadge",
        "isVisible": true,
        "text": "Click to change the badge counter",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBadge_btnBadge_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 25, 4, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "containerWeight": 6
    }, {});
    frmBadge.add(
    label1927359800104093, btnBadge);
};

function frmBadgeGlobals() {
    var MenuId = [];
    frmBadge = new kony.ui.Form2({
        "id": "frmBadge",
        "needAppMenu": true,
        "title": "Badge",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmBadge_frmBadge_preshow_seq0,
        "addWidgets": addWidgetsfrmBadge
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
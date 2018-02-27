//Form JS File
function frmPopup_btnShowPopup_onClick_seq0(eventobject) {
    popUpFromBottom.call(this);
};

function addWidgetsfrmPopup() {
    var label1927359800105346 = new kony.ui.Label({
        "id": "label1927359800105346",
        "isVisible": true,
        "text": "Click the below button to observe the Popup anchoring from bottom of the form",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 12, 6, 12],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var btnShowPopup = new kony.ui.Button({
        "id": "btnShowPopup",
        "isVisible": true,
        "text": "Click here",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPopup_btnShowPopup_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 0, 12, 12],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    frmPopup.add(
    label1927359800105346, btnShowPopup);
};

function frmPopupGlobals() {
    var MenuId = [];
    frmPopup = new kony.ui.Form2({
        "id": "frmPopup",
        "needAppMenu": true,
        "title": "Popup",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmPopup
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
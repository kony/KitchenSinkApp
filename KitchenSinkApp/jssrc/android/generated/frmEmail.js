//Form JS File
function frmEmail_button1930040990146518_onClick_seq0(eventobject) {
    emailSend.call(this);
};

function frmEmail_button1930040990146529_onClick_seq0(eventobject) {
    emailSendWithAttachment.call(this);
};

function addWidgetsfrmEmail() {
    var button1930040990146518 = new kony.ui.Button({
        "id": "button1930040990146518",
        "isVisible": true,
        "text": "Email without attachment",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmEmail_button1930040990146518_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1930040990146529 = new kony.ui.Button({
        "id": "button1930040990146529",
        "isVisible": true,
        "text": "Email with attachment",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmEmail_button1930040990146529_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmEmail.add(
    button1930040990146518, button1930040990146529);
};

function frmEmailGlobals() {
    var MenuId = [];
    frmEmail = new kony.ui.Form2({
        "id": "frmEmail",
        "needAppMenu": true,
        "title": "Email",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmEmail
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
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
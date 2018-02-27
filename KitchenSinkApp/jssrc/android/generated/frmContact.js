//Form JS File
function frmContact_frmContact_preshow_seq0(eventobject, neworientation) {
    frmContact.lblDevContact.text = ""
};

function frmContact_button1930040990148062_onClick_seq0(eventobject) {
    addContact.call(this);
};

function frmContact_button1930040990148072_onClick_seq0(eventobject) {
    findContact.call(this);
};

function frmContact_button1930040990148078_onClick_seq0(eventobject) {
    removeContact.call(this);
};

function addWidgetsfrmContact() {
    var button1930040990148062 = new kony.ui.Button({
        "id": "button1930040990148062",
        "isVisible": true,
        "text": "Add contact",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmContact_button1930040990148062_onClick_seq0
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
    var button1930040990148072 = new kony.ui.Button({
        "id": "button1930040990148072",
        "isVisible": true,
        "text": "Find contact",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmContact_button1930040990148072_onClick_seq0
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
    var button1930040990148078 = new kony.ui.Button({
        "id": "button1930040990148078",
        "isVisible": true,
        "text": "Remove contact",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmContact_button1930040990148078_onClick_seq0
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
    var lblDevContact = new kony.ui.Label({
        "id": "lblDevContact",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 0, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmContact.add(
    button1930040990148062, button1930040990148072, button1930040990148078, lblDevContact);
};

function frmContactGlobals() {
    var MenuId = [];
    frmContact = new kony.ui.Form2({
        "id": "frmContact",
        "needAppMenu": true,
        "title": "Address book",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmContact_frmContact_preshow_seq0,
        "addWidgets": addWidgetsfrmContact
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
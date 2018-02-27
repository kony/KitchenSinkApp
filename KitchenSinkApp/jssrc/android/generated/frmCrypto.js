//Form JS File
function frmCrypto_frmCrypto_preshow_seq0(eventobject, neworientation) {
    frmCrypto.textEncrypt.text = "";
    frmCrypto.lblEncrypt.text = "";
    frmCrypto.lblDecrypt.text = "";
    if (kony.os.deviceInfo().name != "android") {
        frmCrypto.txtMd2Hash.text = "";
        frmCrypto.lblMD2Hash.text = "";
        frmCrypto.txtMD4Hash.text = "";
        frmCrypto.lblMD4Hash.text = "";
    }
    if (kony.os.deviceInfo().name != "WindowsPhone") {
        frmCrypto.txtMD5Hash.text = "";
        frmCrypto.lblMD5Hash.text = "";
    }
};

function frmCrypto_button1930040990147649_onClick_seq0(eventobject) {
    Encrypt.call(this);
};

function frmCrypto_button1930040990147720_onClick_seq0(eventobject) {
    decrypt.call(this);
};

function frmCrypto_button1930040990151315_onClick_seq0(eventobject) {
    createHashMD5.call(this);
};

function addWidgetsfrmCrypto() {
    var textEncrypt = new kony.ui.TextBox2({
        "id": "textEncrypt",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Give text for encryption..",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "textBoxNormal",
        "focusSkin": "textBoxFocus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 0],
        "padding": [2, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 32
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var button1930040990147649 = new kony.ui.Button({
        "id": "button1930040990147649",
        "isVisible": true,
        "text": "Encrypt",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmCrypto_button1930040990147649_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {});
    var lblEncrypt = new kony.ui.Label({
        "id": "lblEncrypt",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {
        "textCopyable": false
    });
    var vbox1930040990147647 = new kony.ui.Box({
        "id": "vbox1930040990147647",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1930040990147647.add(
    textEncrypt, button1930040990147649, lblEncrypt);
    var hbox1930040990147645 = new kony.ui.Box({
        "id": "hbox1930040990147645",
        "isVisible": true,
        "skin": "hBoxRoundBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990147645.add(
    vbox1930040990147647);
    var button1930040990147720 = new kony.ui.Button({
        "id": "button1930040990147720",
        "isVisible": true,
        "text": "Decrypt",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmCrypto_button1930040990147720_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {});
    var lblDecrypt = new kony.ui.Label({
        "id": "lblDecrypt",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var vbox1930040990147717 = new kony.ui.Box({
        "id": "vbox1930040990147717",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1930040990147717.add(
    button1930040990147720, lblDecrypt);
    var hbox1930040990147715 = new kony.ui.Box({
        "id": "hbox1930040990147715",
        "isVisible": true,
        "skin": "hBoxRoundBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990147715.add(
    vbox1930040990147717);
    var txtMD5Hash = new kony.ui.TextBox2({
        "id": "txtMD5Hash",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Enter String",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "textBoxNormal",
        "focusSkin": "textBoxFocus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 0],
        "padding": [2, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var button1930040990151315 = new kony.ui.Button({
        "id": "button1930040990151315",
        "isVisible": true,
        "text": "Generate hash value (MD5 algo)",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmCrypto_button1930040990151315_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var lblMD5Hash = new kony.ui.Label({
        "id": "lblMD5Hash",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {
        "textCopyable": false
    });
    var vbox1930040990151312 = new kony.ui.Box({
        "id": "vbox1930040990151312",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1930040990151312.add(
    txtMD5Hash, button1930040990151315, lblMD5Hash);
    var hbox1930040990151310 = new kony.ui.Box({
        "id": "hbox1930040990151310",
        "isVisible": true,
        "skin": "hBoxRoundBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990151310.add(
    vbox1930040990151312);
    frmCrypto.add(
    hbox1930040990147645, hbox1930040990147715, hbox1930040990151310);
};

function frmCryptoGlobals() {
    var MenuId = [];
    frmCrypto = new kony.ui.Form2({
        "id": "frmCrypto",
        "needAppMenu": true,
        "title": "Crypto",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmCrypto_frmCrypto_preshow_seq0,
        "addWidgets": addWidgetsfrmCrypto
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
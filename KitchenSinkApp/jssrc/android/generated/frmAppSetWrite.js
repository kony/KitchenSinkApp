//Form JS File
function frmAppSetWrite_frmAppSetWrite_preshow_seq0(eventobject, neworientation) {
    frmAppSetWrite.lblAppAfterSet.text = "";
};

function frmAppSetWrite_button1927359800106315_onClick_seq0(eventobject) {
    write.call(this);
};

function addWidgetsfrmAppSetWrite() {
    var label1927359800106235 = new kony.ui.Label({
        "id": "label1927359800106235",
        "isVisible": true,
        "text": "Message",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 45
    }, {
        "textCopyable": false
    });
    var txtAppSet = new kony.ui.TextBox2({
        "id": "txtAppSet",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Enter Message",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "textBoxNormal",
        "focusSkin": "textBoxFocus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": true,
        "containerWeight": 55
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var hbox1927359800106234 = new kony.ui.Box({
        "id": "hbox1927359800106234",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [6, 12, 6, 6],
        "vExpand": false,
        "marginInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1927359800106234.add(
    label1927359800106235, txtAppSet);
    var label1927359800106260 = new kony.ui.Label({
        "id": "label1927359800106260",
        "isVisible": true,
        "text": "View type",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 45
    }, {
        "textCopyable": false
    });
    var CmbAppSet = new kony.ui.ComboBox({
        "id": "CmbAppSet",
        "isVisible": true,
        "masterData": [
            ["Table view", "Table view"],
            ["Page view", "Page view"],
            ["Coverflow view", "Coverflow view"],
            ["Cylinder view", "Cylinder view"],
            ["Linear view", "Linear view"],
            ["Stack view", "Stack view"]
        ],
        "selectedKey": "Table view",
        "skin": "cboxNormal",
        "focusSkin": "cboxFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "containerWeight": 55
    }, {
        "popupTitle": null
    });
    var hbox1927359800106258 = new kony.ui.Box({
        "id": "hbox1927359800106258",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [6, 6, 6, 6],
        "vExpand": false,
        "marginInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1927359800106258.add(
    label1927359800106260, CmbAppSet);
    var button1927359800106315 = new kony.ui.Button({
        "id": "button1927359800106315",
        "isVisible": true,
        "text": "Set Appsettings",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmAppSetWrite_button1927359800106315_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 12, 12, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var label1927359800106905 = new kony.ui.Label({
        "id": "label1927359800106905",
        "isVisible": true,
        "text": "* Please open the iOS Settings application from the home screen and observe the new settings for \"KitchenSink UI App\"",
        "skin": "lblWhite80"
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
    var lblAppAfterSet = new kony.ui.Label({
        "id": "lblAppAfterSet",
        "isVisible": true,
        "text": null,
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
    frmAppSetWrite.add(
    hbox1927359800106234, hbox1927359800106258, button1927359800106315, label1927359800106905, lblAppAfterSet);
};

function frmAppSetWriteGlobals() {
    var MenuId = [];
    frmAppSetWrite = new kony.ui.Form2({
        "id": "frmAppSetWrite",
        "needAppMenu": true,
        "title": "App settings",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmAppSetWrite_frmAppSetWrite_preshow_seq0,
        "addWidgets": addWidgetsfrmAppSetWrite
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
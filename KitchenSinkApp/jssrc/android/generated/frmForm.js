//Form JS File
function addWidgetsfrmForm() {
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "text": "Name",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var tbxName = new kony.ui.TextBox2({
        "id": "tbxName",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Username",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "textBoxNormal",
        "focusSkin": "textBoxFocus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [13, 0, 13, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": true,
        "containerWeight": 6
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblPasword = new kony.ui.Label({
        "id": "lblPasword",
        "isVisible": true,
        "text": "Password",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var tbxPassword = new kony.ui.TextBox2({
        "id": "tbxPassword",
        "isVisible": true,
        "text": null,
        "secureTextEntry": true,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Password",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "textBoxNormal",
        "focusSkin": "textBoxFocus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [13, 0, 13, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": true,
        "containerWeight": 6
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblCountry = new kony.ui.Label({
        "id": "lblCountry",
        "isVisible": true,
        "text": "Country",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var cmbCountry = new kony.ui.ComboBox({
        "id": "cmbCountry",
        "isVisible": true,
        "masterData": [
            ["1", "Please Select.."],
            ["2", "Australia"],
            ["3", "India"],
            ["4", "Japan"],
            ["5", "Singapur"],
            ["6", "United Kingdom"],
            ["7", "United States"]
        ],
        "selectedKey": "1",
        "skin": "cboxNormal",
        "focusSkin": "cboxFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerWeight": 100
    }, {
        "popupTitle": null
    });
    var hbox121049260343 = new kony.ui.Box({
        "id": "hbox121049260343",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [11, 0, 11, 0],
        "vExpand": false,
        "marginInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121049260343.add(
    cmbCountry);
    var lblBDate = new kony.ui.Label({
        "id": "lblBDate",
        "isVisible": true,
        "text": "BirthDate",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var calBDate = new kony.ui.Calendar({
        "id": "calBDate",
        "isVisible": true,
        "dateFormat": "dd/MM/yyyy",
        "viewConfig": {
            gridConfig: {
                "allowWeekendSelectable": true
            }
        },
        "placeholder": null,
        "skin": "calNormal",
        "focusSkin": "calFocus",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "calendarIcon": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [13, 0, 13, 0],
        "padding": [1, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lblGender = new kony.ui.Label({
        "id": "lblGender",
        "isVisible": true,
        "text": "Gender",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var rbtGender = new kony.ui.RadioButtonGroup({
        "id": "rbtGender",
        "isVisible": true,
        "masterData": [
            ["1", "Male"],
            ["2", "Female"]
        ],
        "selectedKey": "1",
        "skin": "radioNormal",
        "focusSkin": "radioNormal"
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [13, 0, 13, 0],
        "padding": [1, 0, 1, 0],
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
    var lblTermsNConditions = new kony.ui.Label({
        "id": "lblTermsNConditions",
        "isVisible": true,
        "text": "Terms & Conditions",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var rTxTermsNConditions = new kony.ui.RichText({
        "id": "rTxTermsNConditions",
        "isVisible": true,
        "text": "This is a simple form consists of different widgets including Label, Textbox2, Combobox, Richtext, Calendar, hBox, Checkboxgroup, Radiobutton.",
        "skin": "richNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [15, 6, 15, 12],
        "padding": [4, 4, 4, 4],
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 10
    }, {});
    var chkAccept = new kony.ui.CheckBoxGroup({
        "id": "chkAccept",
        "isVisible": true,
        "masterData": [
            ["1", "Accept"]
        ],
        "selectedKeys": [],
        "skin": "cbxAccept",
        "focusSkin": "cbxAccept"
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [4, 0, 2, 0],
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "marginInPixel": false,
        "containerWeight": 4
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
    frmForm.add(
    lblName, tbxName, lblPasword, tbxPassword, lblCountry, hbox121049260343, lblBDate, calBDate, lblGender, rbtGender, lblTermsNConditions, rTxTermsNConditions, chkAccept);
};

function frmFormGlobals() {
    var MenuId = [];
    frmForm = new kony.ui.Form2({
        "id": "frmForm",
        "needAppMenu": true,
        "title": "Form",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmForm
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
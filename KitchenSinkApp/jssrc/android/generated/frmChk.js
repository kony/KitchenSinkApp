//Form JS File
function addWidgetsfrmChk() {
    var label11798972525642 = new kony.ui.Label({
        "id": "label11798972525642",
        "isVisible": true,
        "text": "Default view",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 12, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var checkboxgroup11798972524954 = new kony.ui.CheckBoxGroup({
        "id": "checkboxgroup11798972524954",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"]
        ],
        "selectedKeys": ["1"],
        "skin": "cbxNormal",
        "focusSkin": "cbxFocus"
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [12, 6, 12, 6],
        "padding": [0, 4, 2, 4],
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
    var label117989725237860 = new kony.ui.Label({
        "id": "label117989725237860",
        "isVisible": true,
        "text": "Horizontal orientation",
        "skin": "lblSub"
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
    var checkboxgroup117989725237870 = new kony.ui.CheckBoxGroup({
        "id": "checkboxgroup117989725237870",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"]
        ],
        "selectedKeys": ["1"],
        "skin": "cbxNormal",
        "focusSkin": "cbxFocus"
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_HORIZONTAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [12, 6, 12, 6],
        "padding": [0, 4, 2, 4],
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_HORIZONTAL,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "tickedImage": "chkboxchkd.png",
        "untickedImage": "chkbox.png"
    });
    frmChk.add(
    label11798972525642, checkboxgroup11798972524954, label117989725237860, checkboxgroup117989725237870);
};

function frmChkGlobals() {
    var MenuId = [];
    frmChk = new kony.ui.Form2({
        "id": "frmChk",
        "needAppMenu": true,
        "title": "CheckBox",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmChk
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
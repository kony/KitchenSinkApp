//Form JS File
function addWidgetsfrmRdo() {
    var label121049260349 = new kony.ui.Label({
        "id": "label121049260349",
        "isVisible": true,
        "text": "Default view",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var radiobuttongroup121049260350 = new kony.ui.RadioButtonGroup({
        "id": "radiobuttongroup121049260350",
        "isVisible": true,
        "masterData": [
            ["Key1", "Value1"],
            ["Key2", "Value2"]
        ],
        "skin": "radioNormal",
        "focusSkin": "radioFocus"
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "containerWeight": 4
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
    var label117989725237919 = new kony.ui.Label({
        "id": "label117989725237919",
        "isVisible": true,
        "text": "Radiobutton with background color",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var radiobuttongroup117989725237929 = new kony.ui.RadioButtonGroup({
        "id": "radiobuttongroup117989725237929",
        "isVisible": true,
        "masterData": [
            ["Key1", "Value1"],
            ["Key2", "Value2"]
        ],
        "skin": "rdbColorBG",
        "focusSkin": "rdbColorBG"
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "containerWeight": 4
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
    var label117989725237939 = new kony.ui.Label({
        "id": "label117989725237939",
        "isVisible": true,
        "text": "Vertical orientation",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var radiobuttongroup117989725237949 = new kony.ui.RadioButtonGroup({
        "id": "radiobuttongroup117989725237949",
        "isVisible": true,
        "masterData": [
            ["Key1", "Value1"],
            ["Key2", "Value2"]
        ],
        "skin": "radioNormal",
        "focusSkin": "radioFocus"
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "containerWeight": 4
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
    var label1180105789135976 = new kony.ui.Label({
        "id": "label1180105789135976",
        "isVisible": true,
        "text": "Ticked and unticked images",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 4],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var radiobuttongroup1180105789136012 = new kony.ui.RadioButtonGroup({
        "id": "radiobuttongroup1180105789136012",
        "isVisible": true,
        "masterData": [
            ["Key1", "Value1"],
            ["Key2", "Value2"]
        ],
        "skin": "radioNormal",
        "focusSkin": "radioNormal"
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "padding": [2, 3, 2, 3],
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "tickedImage": "chkboxchkd.png",
        "untickedImage": "chkbox.png"
    });
    frmRdo.add(
    label121049260349, radiobuttongroup121049260350, label117989725237919, radiobuttongroup117989725237929, label117989725237939, radiobuttongroup117989725237949, label1180105789135976, radiobuttongroup1180105789136012);
};

function frmRdoGlobals() {
    var MenuId = [];
    frmRdo = new kony.ui.Form2({
        "id": "frmRdo",
        "needAppMenu": true,
        "title": "Radio Button",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmRdo
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
//Form JS File
function addWidgetsfrmCBox() {
    var label118082077326819 = new kony.ui.Label({
        "id": "label118082077326819",
        "isVisible": true,
        "text": "List view",
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
    var combobox11798972524560 = new kony.ui.ComboBox({
        "id": "combobox11798972524560",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"],
            ["4", "value4"],
            ["5", "value5"]
        ],
        "skin": "cboxNormal",
        "focusSkin": "cboxFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "popupTitle": null
    });
    frmCBox.add(
    label118082077326819, combobox11798972524560);
};

function frmCBoxGlobals() {
    var MenuId = [];
    frmCBox = new kony.ui.Form2({
        "id": "frmCBox",
        "needAppMenu": true,
        "title": "ComboBox",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmCBox
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
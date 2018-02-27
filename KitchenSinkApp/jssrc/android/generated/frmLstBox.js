//Form JS File
function addWidgetsfrmLstBox() {
    var label118082077326662 = new kony.ui.Label({
        "id": "label118082077326662",
        "isVisible": true,
        "text": "Default view",
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
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var listbox11798972524359 = new kony.ui.ListBox({
        "id": "listbox11798972524359",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"],
            ["4", "value4"],
            ["5", "value5"]
        ],
        "selectedKey": "1",
        "skin": "listNor",
        "focusSkin": "listFoc"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "containerWeight": 4
    }, {
        "popupIcon": null,
        "applySkinsToPopup": true,
        "dropDownImage": null,
        "placeholder": null,
        "popupTitle": null,
        "tickedImage": null,
        "untickedImage": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var label118082077326799 = new kony.ui.Label({
        "id": "label118082077326799",
        "isVisible": true,
        "text": "List Box with Image background",
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
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var listbox118082077326807 = new kony.ui.ListBox({
        "id": "listbox118082077326807",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"],
            ["4", "value4"],
            ["5", "value5"]
        ],
        "selectedKey": "1",
        "skin": "ListBoxImg",
        "focusSkin": "ListBoxImg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "containerWeight": 5
    }, {
        "popupIcon": null,
        "applySkinsToPopup": true,
        "dropDownImage": "dropdown.png",
        "placeholder": null,
        "popupTitle": null,
        "tickedImage": null,
        "untickedImage": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var label117989725236234 = new kony.ui.Label({
        "id": "label117989725236234",
        "isVisible": true,
        "text": "Toggle view Spinner view style",
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
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var listbox117989725236244 = new kony.ui.ListBox({
        "id": "listbox117989725236244",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"],
            ["4", "value4"],
            ["5", "value5"]
        ],
        "selectedKey": "1",
        "skin": "listNor",
        "focusSkin": "listFoc"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "containerWeight": 5
    }, {
        "popupIcon": null,
        "applySkinsToPopup": true,
        "dropDownImage": null,
        "placeholder": null,
        "popupTitle": null,
        "tickedImage": null,
        "untickedImage": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_SPINNER
    });
    frmLstBox.add(
    label118082077326662, listbox11798972524359, label118082077326799, listbox118082077326807, label117989725236234, listbox117989725236244);
};

function frmLstBoxGlobals() {
    var MenuId = [];
    frmLstBox = new kony.ui.Form2({
        "id": "frmLstBox",
        "needAppMenu": true,
        "title": "List Box",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmLstBox
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
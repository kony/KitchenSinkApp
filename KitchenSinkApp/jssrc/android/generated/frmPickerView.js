//Form JS File
function frmPickerView_pickOne_onSelection_seq0(eventobject, component, keyselected) {
    pickerviewselkeyvalues.call(this);
};

function frmPickerView_btnAdd_onClick_seq0(eventobject) {
    setNewData.call(this);
};

function addWidgetsfrmPickerView() {
    var lblBrand = new kony.ui.Label({
        "id": "lblBrand",
        "isVisible": true,
        "text": "Brand",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [7, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {
        "textCopyable": false
    });
    var lblModel = new kony.ui.Label({
        "id": "lblModel",
        "isVisible": true,
        "text": "Year",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [15, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 33
    }, {
        "textCopyable": false
    });
    var lblColour = new kony.ui.Label({
        "id": "lblColour",
        "isVisible": true,
        "text": "Color",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [3, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {
        "textCopyable": false
    });
    var hboxMain = new kony.ui.Box({
        "id": "hboxMain",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 2, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxMain.add(
    lblBrand, lblModel, lblColour);
    var pickOne = new kony.ui.PickerView({
        "id": "pickOne",
        "isVisible": true,
        "masterData": [
            [
                ["1", "BMW"],
                ["2", "Chevrolet"],
                ["3", "Aston Martin"],
                ["4", "Ferrari"],
                ["5", "Honda"],
                ["6", "Hyundai"],
                ["7", "Jaguar"],
                ["8", "Jeep"],
                ["9", "Porsche"], 33],
            [
                ["1", "2003"],
                ["2", "2004"],
                ["3", "2005"],
                ["4", "2006"],
                ["5", "2007"],
                ["6", "2008"],
                ["7", "2009"],
                ["8", "2010"],
                ["9", "2011"], 33],
            [
                ["1", "Black"],
                ["2", "Silver"],
                ["3", "White"],
                ["4", "Red"],
                ["5", "Gray"],
                ["6", "Yellow"],
                ["7", "Blue"],
                ["8", "Gold"],
                ["9", "Purple"], 34]
        ],
        "onSelection": frmPickerView_pickOne_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 4, 5],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbxPickerView = new kony.ui.Box({
        "id": "hbxPickerView",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 24,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxPickerView.add(
    pickOne);
    var lblOne = new kony.ui.Label({
        "id": "lblOne",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 4, 2],
        "padding": [6, 10, 6, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var btnAdd = new kony.ui.Button({
        "id": "btnAdd",
        "isVisible": true,
        "text": "Set New Year Range",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPickerView_btnAdd_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 4, 4, 5],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lblTwo = new kony.ui.Label({
        "id": "lblTwo",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 4, 2],
        "padding": [6, 10, 6, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmPickerView.add(
    hboxMain, hbxPickerView, lblOne, btnAdd, lblTwo);
};

function frmPickerViewGlobals() {
    var MenuId = [];
    frmPickerView = new kony.ui.Form2({
        "id": "frmPickerView",
        "needAppMenu": true,
        "title": "PickerView",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmPickerView
    }, {
        "padding": [0, 1, 0, 1],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
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
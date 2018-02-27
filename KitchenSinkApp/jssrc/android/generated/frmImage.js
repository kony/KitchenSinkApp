//Form JS File
function frmImage_btnOne_onClick_seq0(eventobject) {
    frmImgFitToDimensions.show();
};

function frmImage_btnTwo_onClick_seq0(eventobject) {
    frmImgMaintainAspectRatio.show();
};

function frmImage_btnThree_onClick_seq0(eventobject) {
    frmImgCrop.show();
};

function frmImage_button11798972521392_onClick_seq0(eventobject) {
    frmURLBasedImage.show();
};

function addWidgetsfrmImage() {
    var label193382457630 = new kony.ui.Label({
        "id": "label193382457630",
        "isVisible": true,
        "text": "Different scale mode options of image widget",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 15, 12, 10],
        "padding": [5, 5, 5, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 7
    }, {
        "textCopyable": false
    });
    var btnOne = new kony.ui.Button({
        "id": "btnOne",
        "isVisible": true,
        "text": "Fit to dimensions",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmImage_btnOne_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnTwo = new kony.ui.Button({
        "id": "btnTwo",
        "isVisible": true,
        "text": "Maintain aspect ratio",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmImage_btnTwo_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnThree = new kony.ui.Button({
        "id": "btnThree",
        "isVisible": true,
        "text": "Crop",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmImage_btnThree_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button11798972521392 = new kony.ui.Button({
        "id": "button11798972521392",
        "isVisible": true,
        "text": "URL based image scale modes",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmImage_button11798972521392_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmImage.add(
    label193382457630, btnOne, btnTwo, btnThree, button11798972521392);
};

function frmImageGlobals() {
    var MenuId = [];
    frmImage = new kony.ui.Form2({
        "id": "frmImage",
        "needAppMenu": true,
        "title": "Image ",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmImage
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
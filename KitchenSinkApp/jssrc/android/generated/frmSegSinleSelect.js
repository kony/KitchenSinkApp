//Form JS File
function frmSegSinleSelect_btnSegMulSelect_onClick_seq0(eventobject) {
    singleSelect.call(this);
};

function addWidgetsfrmSegSinleSelect() {
    var lblSegMulSelect = new kony.ui.Label({
        "id": "lblSegMulSelect",
        "isVisible": true,
        "text": "The below segment is having different section header templates & Single select behaviour",
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
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var segSecHdrWidoutTmplatebox = new kony.ui.Box({
        "id": "segSecHdrWidoutTmplatebox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 8
    }, {});
    var segSecHdrWidoutTmplate = new kony.ui.SegmentedUI2({
        "id": "segSecHdrWidoutTmplate",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "BAccName": "BAccName",
            "hbox120858598121942": "hbox120858598121942",
            "CreditLimit": "CreditLimit",
            "WithdrawLimit": "WithdrawLimit",
            "imgChk": "imgChk"
        },
        "Location": "[1,122]",
        "rowTemplate": segSecHdrWidoutTmplatebox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "e9e9e914",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
        "selectionBehaviorConfig": {
            "unselectedStateImage": "checkboxwhite.png",
            "imageIdentifier": "imgChk",
            "selectedStateImage": "checkboxgreen.png"
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [2, 4, 2, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var BAccName = new kony.ui.Label({
        "id": "BAccName",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 1, 1, 1],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "textCopyable": false
    });
    var WithdrawLimit = new kony.ui.Label({
        "id": "WithdrawLimit",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {
        "textCopyable": false
    });
    var CreditLimit = new kony.ui.Label({
        "id": "CreditLimit",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "containerWeight": 21
    }, {
        "textCopyable": false
    });
    var imgChk = new kony.ui.Image2({
        "id": "imgChk",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": "checkboxwhite.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 9
    }, {});
    var hbox120858598121942 = new kony.ui.Box({
        "id": "hbox120858598121942",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox120858598121942.add(
    BAccName, WithdrawLimit, CreditLimit, imgChk);
    segSecHdrWidoutTmplatebox.add(
    hbox120858598121942);
    var btnSegMulSelect = new kony.ui.Button({
        "id": "btnSegMulSelect",
        "isVisible": true,
        "text": "Click here to get the selected data",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegSinleSelect_btnSegMulSelect_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 4, 2, 4],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmSegSinleSelect.add(
    lblSegMulSelect, segSecHdrWidoutTmplate, btnSegMulSelect);
};

function frmSegSinleSelectGlobals() {
    var MenuId = [];
    frmSegSinleSelect = new kony.ui.Form2({
        "id": "frmSegSinleSelect",
        "needAppMenu": true,
        "title": "Segment",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegSinleSelect
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
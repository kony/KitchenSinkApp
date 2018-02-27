//Form JS File
function addWidgetsfrmRowTemplates() {
    var label120664956617061 = new kony.ui.Label({
        "id": "label120664956617061",
        "isVisible": true,
        "text": "SegmentedUI with the multiple row templates",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 4, 4, 4],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var segMultiTempbox = new kony.ui.Box({
        "id": "segMultiTempbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 8
    }, {});
    var segMultiTemp = new kony.ui.SegmentedUI2({
        "id": "segMultiTemp",
        "isVisible": true,
        "retainSelection": false,
        "Location": "[1,111]",
        "rowTemplate": segMultiTempbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "e9e9e900",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [3, 4, 3, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "containerWeight": 8
    }, {});
    segMultiTempbox.add();
    var label120688789423414 = new kony.ui.Label({
        "id": "label120688789423414",
        "isVisible": true,
        "text": "SegmentedUI without row templates",
        "skin": "lblSub"
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
    var segWidoutRowtmplatebox = new kony.ui.Box({
        "id": "segWidoutRowtmplatebox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 8
    }, {});
    var segWidoutRowtmplate = new kony.ui.SegmentedUI2({
        "id": "segWidoutRowtmplate",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbox120858598121942": "hbox120858598121942",
            "lbl1": "lbl1",
            "lbl2": "lbl2",
            "lbl3": "lbl3"
        },
        "Location": "[1,223]",
        "rowTemplate": segWidoutRowtmplatebox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "e9e9e900",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [3, 4, 3, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "containerWeight": 8
    }, {});
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 1, 1, 1],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 48
    }, {
        "textCopyable": false
    });
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "containerWeight": 27
    }, {
        "textCopyable": false
    });
    var lbl3 = new kony.ui.Label({
        "id": "lbl3",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {
        "textCopyable": false
    });
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
    lbl1, lbl2, lbl3);
    segWidoutRowtmplatebox.add(
    hbox120858598121942);
    frmRowTemplates.add(
    label120664956617061, segMultiTemp, label120688789423414, segWidoutRowtmplate);
};

function frmRowTemplatesGlobals() {
    var MenuId = [];
    frmRowTemplates = new kony.ui.Form2({
        "id": "frmRowTemplates",
        "needAppMenu": true,
        "title": "Row template",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmRowTemplates
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
//Form JS File
function addWidgetsfrmSegMulSelectData() {
    var label1927389591153584 = new kony.ui.Label({
        "id": "label1927389591153584",
        "isVisible": true,
        "text": "Selected data is shown below.",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 3, 2, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var segment21927389591153585box = new kony.ui.Box({
        "id": "segment21927389591153585box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segment21927389591153585 = new kony.ui.SegmentedUI2({
        "id": "segment21927389591153585",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbox1927389591153587": "hbox1927389591153587",
            "lblMulSel1": "lblMulSel1",
            "lblMulSel3": "lblMulSel3",
            "lblMulSel2": "lblMulSel2"
        },
        "Location": "[1,92]",
        "rowTemplate": segment21927389591153585box,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "e9e9e900",
        "showScrollbars": false,
        "groupCells": true,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [2, 2, 2, 2],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    var lblMulSel1 = new kony.ui.Label({
        "id": "lblMulSel1",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 46
    }, {
        "textCopyable": false
    });
    var lblMulSel2 = new kony.ui.Label({
        "id": "lblMulSel2",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 29
    }, {
        "textCopyable": false
    });
    var lblMulSel3 = new kony.ui.Label({
        "id": "lblMulSel3",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {
        "textCopyable": false
    });
    var hbox1927389591153587 = new kony.ui.Box({
        "id": "hbox1927389591153587",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 19,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1927389591153587.add(
    lblMulSel1, lblMulSel2, lblMulSel3);
    segment21927389591153585box.add(
    hbox1927389591153587);
    frmSegMulSelectData.add(
    label1927389591153584, segment21927389591153585);
};

function frmSegMulSelectDataGlobals() {
    var MenuId = [];
    frmSegMulSelectData = new kony.ui.Form2({
        "id": "frmSegMulSelectData",
        "needAppMenu": true,
        "title": "Segment data",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegMulSelectData
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
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
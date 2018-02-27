//Form JS File
function frmSegOnReachEnd_segRecords_onReachingEnd_seq0(eventobject) {
    scrollEnd.call(this);
};

function addWidgetsfrmSegOnReachEnd() {
    var segRecordsbox = new kony.ui.Box({
        "id": "segRecordsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segRecords = new kony.ui.SegmentedUI2({
        "id": "segRecords",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbox121043302139633": "hbox121043302139633",
            "lbl1": "lbl1",
            "hbox121043302139632": "hbox121043302139632",
            "lbl4": "lbl4",
            "lbl5": "lbl5",
            "lbl2": "lbl2",
            "lbl3": "lbl3"
        },
        "Location": "[1,110]",
        "rowTemplate": segRecordsbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": true,
        "scrollingEvents": {
            "onReachingEnd": frmSegOnReachEnd_segRecords_onReachingEnd_seq0
        },
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "dockSectionHeaders": false
    });
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "skin": "lblBoldIpad"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 14
    }, {
        "textCopyable": false
    });
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "skin": "lblGraySmallIphn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 64
    }, {
        "textCopyable": false
    });
    var lbl3 = new kony.ui.Label({
        "id": "lbl3",
        "isVisible": true,
        "skin": "lblGraySmallIphn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 36
    }, {
        "textCopyable": false
    });
    var hbox121043302139632 = new kony.ui.Box({
        "id": "hbox121043302139632",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 26,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121043302139632.add(
    lbl2, lbl3);
    var lbl4 = new kony.ui.Label({
        "id": "lbl4",
        "isVisible": true,
        "skin": "lblGraySmallIphn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 64
    }, {
        "textCopyable": false
    });
    var lbl5 = new kony.ui.Label({
        "id": "lbl5",
        "isVisible": true,
        "skin": "lblGraySmallIphn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 36
    }, {
        "textCopyable": false
    });
    var hbox121043302139633 = new kony.ui.Box({
        "id": "hbox121043302139633",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 26,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121043302139633.add(
    lbl4, lbl5);
    segRecordsbox.add(
    lbl1, hbox121043302139632, hbox121043302139633);
    frmSegOnReachEnd.add(
    segRecords);
};

function frmSegOnReachEndGlobals() {
    var MenuId = [];
    frmSegOnReachEnd = new kony.ui.Form2({
        "id": "frmSegOnReachEnd",
        "needAppMenu": true,
        "title": "On reach end",
        "headers": [hbxHeadSearchORE],
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegOnReachEnd
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
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
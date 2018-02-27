//Form JS File
function frmSegSections_frmSegSections_preshow_seq0(eventobject, neworientation) {
    androidSegmentSecDock.call(this);
};

function addWidgetsfrmSegSections() {
    var segment2117989725237554box = new kony.ui.Box({
        "id": "segment2117989725237554box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 26
    }, {});
    var segment2117989725237554 = new kony.ui.SegmentedUI2({
        "id": "segment2117989725237554",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblSegSec1": "lblSegSec1",
            "hbox117989725237556": "hbox117989725237556",
            "lblSegSec2": "lblSegSec2",
            "lblSegSec3": "lblSegSec3"
        },
        "Location": "[1,186]",
        "rowTemplate": segment2117989725237554box,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "e9e9e900",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": true,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "containerHeight": null,
        "containerWeight": 26
    }, {
        "dockSectionHeaders": true
    });
    var lblSegSec1 = new kony.ui.Label({
        "id": "lblSegSec1",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var lblSegSec2 = new kony.ui.Label({
        "id": "lblSegSec2",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 29
    }, {
        "textCopyable": false
    });
    var lblSegSec3 = new kony.ui.Label({
        "id": "lblSegSec3",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 31
    }, {
        "textCopyable": false
    });
    var hbox117989725237556 = new kony.ui.Box({
        "id": "hbox117989725237556",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 44,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox117989725237556.add(
    lblSegSec1, lblSegSec2, lblSegSec3);
    segment2117989725237554box.add(
    hbox117989725237556);
    frmSegSections.add(
    segment2117989725237554);
};

function frmSegSectionsGlobals() {
    var MenuId = [];
    frmSegSections = new kony.ui.Form2({
        "id": "frmSegSections",
        "needAppMenu": true,
        "title": "Segment with sections",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmSegSections_frmSegSections_preshow_seq0,
        "addWidgets": addWidgetsfrmSegSections
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "headerOverlap": false,
        "footerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
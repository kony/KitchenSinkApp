//Form JS File
function frmAdvancedWidgets_frmAdvancedWidgets_init_seq0(eventobject, neworientation) {
    switchandOS3D.call(this);
};

function frmAdvancedWidgets_segFirst_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    advanced.call(this);
};

function addWidgetsfrmAdvancedWidgets() {
    var segFirstbox = new kony.ui.Box({
        "id": "segFirstbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segFirst = new kony.ui.SegmentedUI2({
        "id": "segFirst",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblFirst": "lblFirst"
        },
        "Location": "[1,55]",
        "rowTemplate": segFirstbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmAdvancedWidgets_segFirst_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    var lblFirst = new kony.ui.Label({
        "id": "lblFirst",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [11, 10, 4, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 13
    }, {
        "textCopyable": false
    });
    segFirstbox.add(
    lblFirst);
    frmAdvancedWidgets.add(
    segFirst);
};

function frmAdvancedWidgetsGlobals() {
    var MenuId = [];
    frmAdvancedWidgets = new kony.ui.Form2({
        "id": "frmAdvancedWidgets",
        "needAppMenu": true,
        "title": "Advanced",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmAdvancedWidgets_frmAdvancedWidgets_init_seq0,
        "addWidgets": addWidgetsfrmAdvancedWidgets
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
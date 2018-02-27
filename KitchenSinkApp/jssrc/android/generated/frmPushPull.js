//Form JS File
function frmPushPull_frmPushPull_init_seq0(eventobject, neworientation) {
    dataForSeg.call(this, eventobject);
};

function frmPushPull_segStates_onPull_seq0(eventobject) {
    refresh.call(this, eventobject);
};

function addWidgetsfrmPushPull() {
    var segStatesbox = new kony.ui.Box({
        "id": "segStatesbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segStates = new kony.ui.SegmentedUI2({
        "id": "segStates",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "cname": "cname"
        },
        "Location": "[1,1]",
        "rowTemplate": segStatesbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": true,
        "groupCells": false,
        "screenLevelWidget": true,
        "scrollingEvents": {
            "onPull": frmPushPull_segStates_onPull_seq0
        },
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "containerHeight": null,
        "containerWeight": 45
    }, {
        "dockSectionHeaders": false
    });
    var cname = new kony.ui.Label({
        "id": "cname",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 13
    }, {
        "textCopyable": false
    });
    segStatesbox.add(
    cname);
    frmPushPull.add(
    segStates);
};

function frmPushPullGlobals() {
    var MenuId = [];
    frmPushPull = new kony.ui.Form2({
        "id": "frmPushPull",
        "needAppMenu": true,
        "title": "On pull",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmPushPull_frmPushPull_init_seq0,
        "addWidgets": addWidgetsfrmPushPull
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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
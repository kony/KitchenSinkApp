//Form JS File
function frmUICategory_uiCatSeg_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    uICategory.call(this);
};

function addWidgetsfrmUICategory() {
    var uiCatSegbox = new kony.ui.Box({
        "id": "uiCatSegbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var uiCatSeg = new kony.ui.SegmentedUI2({
        "id": "uiCatSeg",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblUICategory": "lblUICategory"
        },
        "data": [{
            "lblUICategory": "Container Widgets"
        }, {
            "lblUICategory": "Basic Widgets"
        }, {
            "lblUICategory": "Advanced Widgets"
        }],
        "Location": "[1,55]",
        "rowTemplate": uiCatSegbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmUICategory_uiCatSeg_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "containerHeight": null,
        "containerWeight": 45
    }, {});
    var lblUICategory = new kony.ui.Label({
        "id": "lblUICategory",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [11, 10, 4, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 13
    }, {
        "textCopyable": false
    });
    uiCatSegbox.add(
    lblUICategory);
    frmUICategory.add(
    uiCatSeg);
};

function frmUICategoryGlobals() {
    var MenuId = [];
    frmUICategory = new kony.ui.Form2({
        "id": "frmUICategory",
        "needAppMenu": true,
        "title": "User Interface",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmUICategory
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
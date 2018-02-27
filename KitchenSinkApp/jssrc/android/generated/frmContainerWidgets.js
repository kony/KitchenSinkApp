//Form JS File
function frmContainerWidgets_uiContainerSeg_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    container.call(this);
};

function addWidgetsfrmContainerWidgets() {
    var uiContainerSegbox = new kony.ui.Box({
        "id": "uiContainerSegbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var uiContainerSeg = new kony.ui.SegmentedUI2({
        "id": "uiContainerSeg",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblContainerWidgets": "lblContainerWidgets"
        },
        "data": [{
            "lblContainerWidgets": "Form"
        }, {
            "lblContainerWidgets": "Tabs"
        }, {
            "lblContainerWidgets": "Scroll Box"
        }],
        "Location": "[1,55]",
        "rowTemplate": uiContainerSegbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmContainerWidgets_uiContainerSeg_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "containerWeight": 45
    }, {});
    var lblContainerWidgets = new kony.ui.Label({
        "id": "lblContainerWidgets",
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
    uiContainerSegbox.add(
    lblContainerWidgets);
    frmContainerWidgets.add(
    uiContainerSeg);
};

function frmContainerWidgetsGlobals() {
    var MenuId = [];
    frmContainerWidgets = new kony.ui.Form2({
        "id": "frmContainerWidgets",
        "needAppMenu": true,
        "title": "Container",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmContainerWidgets
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
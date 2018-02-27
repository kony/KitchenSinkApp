//Form JS File
function frmSegDynRowTemplate_frmSegDynRowTemplate_init_seq0(eventobject, neworientation) {
    initArray.call(this);
    rowTempSetData.call(this);
};

function frmSegDynRowTemplate_segDynamicRowTemp_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    isSelected.call(this);
};

function addWidgetsfrmSegDynRowTemplate() {
    var label117709689852702 = new kony.ui.Label({
        "id": "label117709689852702",
        "isVisible": true,
        "text": "Click on any row to change its row template dynamically.",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var segDynamicRowTempbox = new kony.ui.Box({
        "id": "segDynamicRowTempbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segDynamicRowTemp = new kony.ui.SegmentedUI2({
        "id": "segDynamicRowTemp",
        "isVisible": true,
        "retainSelection": false,
        "Location": "[1,154]",
        "rowTemplate": segDynamicRowTempbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "e9e9e900",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmSegDynRowTemplate_segDynamicRowTemp_onRowClick_seq0,
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
    segDynamicRowTempbox.add();
    frmSegDynRowTemplate.add(
    label117709689852702, segDynamicRowTemp);
};

function frmSegDynRowTemplateGlobals() {
    var MenuId = [];
    frmSegDynRowTemplate = new kony.ui.Form2({
        "id": "frmSegDynRowTemplate",
        "needAppMenu": true,
        "title": "Row templates",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmSegDynRowTemplate_frmSegDynRowTemplate_init_seq0,
        "addWidgets": addWidgetsfrmSegDynRowTemplate
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
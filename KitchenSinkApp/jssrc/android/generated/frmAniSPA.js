//Form JS File
function frmAniSPA_segSPA_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onClickOfFrmAniSPASeg.call(this, eventobject);
};

function addWidgetsfrmAniSPA() {
    var segSPAbox = new kony.ui.Box({
        "id": "segSPAbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segSPA = new kony.ui.SegmentedUI2({
        "id": "segSPA",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblSPA": "lblSPA"
        },
        "data": [{
            "lblSPA": "Top "
        }, {
            "lblSPA": "Bottom "
        }, {
            "lblSPA": "Right "
        }, {
            "lblSPA": "Left "
        }],
        "Location": "[1,52]",
        "rowTemplate": segSPAbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmAniSPA_segSPA_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [4, 0, 4, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "containerWeight": 45
    }, {});
    var lblSPA = new kony.ui.Label({
        "id": "lblSPA",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 4, 1],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 13
    }, {
        "textCopyable": false
    });
    segSPAbox.add(
    lblSPA);
    frmAniSPA.add(
    segSPA);
};

function frmAniSPAGlobals() {
    var MenuId = [];
    frmAniSPA = new kony.ui.Form2({
        "id": "frmAniSPA",
        "needAppMenu": true,
        "title": "Transitions",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmAniSPA
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
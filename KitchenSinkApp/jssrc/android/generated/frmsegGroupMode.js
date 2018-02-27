//Form JS File
function addWidgetsfrmsegGroupMode() {
    var label192735980060959 = new kony.ui.Label({
        "id": "label192735980060959",
        "isVisible": true,
        "text": "Segment with group cells",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var segment2192735980060930box = new kony.ui.Box({
        "id": "segment2192735980060930box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 21
    }, {});
    var segment2192735980060930 = new kony.ui.SegmentedUI2({
        "id": "segment2192735980060930",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "label192735980060960": "label192735980060960"
        },
        "data": [{
            "label192735980060960": "Savings account"
        }, {
            "label192735980060960": "Credit cards"
        }, {
            "label192735980060960": "Investment"
        }],
        "Location": "[1,161]",
        "rowTemplate": segment2192735980060930box,
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
        "containerHeight": null,
        "marginInPixel": false,
        "containerWeight": 21
    }, {});
    var label192735980060960 = new kony.ui.Label({
        "id": "label192735980060960",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 28
    }, {
        "textCopyable": false
    });
    segment2192735980060930box.add(
    label192735980060960);
    var label192735980060970 = new kony.ui.Label({
        "id": "label192735980060970",
        "isVisible": true,
        "text": "Segment without group cells",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var segment2192735980060992box = new kony.ui.Box({
        "id": "segment2192735980060992box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 31
    }, {});
    var segment2192735980060992 = new kony.ui.SegmentedUI2({
        "id": "segment2192735980060992",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "label192735980060994": "label192735980060994"
        },
        "data": [{
            "label192735980060994": "Savings account"
        }, {
            "label192735980060994": "Credit cards"
        }, {
            "label192735980060994": "Investment"
        }],
        "Location": "[1,311]",
        "rowTemplate": segment2192735980060992box,
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
        "margin": [2, 2, 2, 2],
        "containerHeight": null,
        "marginInPixel": false,
        "containerWeight": 31
    }, {});
    var label192735980060994 = new kony.ui.Label({
        "id": "label192735980060994",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 19
    }, {
        "textCopyable": false
    });
    segment2192735980060992box.add(
    label192735980060994);
    frmsegGroupMode.add(
    label192735980060959, segment2192735980060930, label192735980060970, segment2192735980060992);
};

function frmsegGroupModeGlobals() {
    var MenuId = [];
    frmsegGroupMode = new kony.ui.Form2({
        "id": "frmsegGroupMode",
        "needAppMenu": true,
        "title": "Segment",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmsegGroupMode
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
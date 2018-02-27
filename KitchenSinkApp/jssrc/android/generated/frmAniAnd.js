//Form JS File
function frmAniAnd_segAndroid_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onClickOfFrmAniAndSeg.call(this, eventobject);
};

function addWidgetsfrmAniAnd() {
    var segAndroidbox = new kony.ui.Box({
        "id": "segAndroidbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segAndroid = new kony.ui.SegmentedUI2({
        "id": "segAndroid",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblAndroid": "lblAndroid"
        },
        "data": [{
            "lblAndroid": "bottom-top"
        }, {
            "lblAndroid": "from left"
        }, {
            "lblAndroid": "from right"
        }, {
            "lblAndroid": "to right"
        }, {
            "lblAndroid": "to left"
        }, {
            "lblAndroid": "from center"
        }, {
            "lblAndroid": "topright-bottom"
        }, {
            "lblAndroid": "bottomleft-top"
        }, {
            "lblAndroid": "bottom-top style1"
        }],
        "Location": "[1,56]",
        "rowTemplate": segAndroidbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmAniAnd_segAndroid_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "containerHeight": null,
        "containerWeight": 45
    }, {});
    var lblAndroid = new kony.ui.Label({
        "id": "lblAndroid",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 10, 6, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 13
    }, {
        "textCopyable": false
    });
    segAndroidbox.add(
    lblAndroid);
    frmAniAnd.add(
    segAndroid);
};

function frmAniAndGlobals() {
    var MenuId = [];
    frmAniAnd = new kony.ui.Form2({
        "id": "frmAniAnd",
        "needAppMenu": true,
        "title": "Transitions",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmAniAnd
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
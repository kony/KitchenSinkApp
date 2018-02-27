//Form JS File
function frmAniWin_segWin_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onClickOfFrmAniWin.call(this, eventobject);
};

function addWidgetsfrmAniWin() {
    var segWinbox = new kony.ui.Box({
        "id": "segWinbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segWin = new kony.ui.SegmentedUI2({
        "id": "segWin",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblWin": "lblWin"
        },
        "data": [{
            "lblWin": "Rotate3DSingle"
        }, {
            "lblWin": "Rotate3DDual"
        }, {
            "lblWin": "Slide"
        }, {
            "lblWin": "Pop"
        }, {
            "lblWin": "Squeze"
        }],
        "Location": "[1,55]",
        "rowTemplate": segWinbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmAniWin_segWin_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "containerHeight": null,
        "containerWeight": 45
    }, {});
    var lblWin = new kony.ui.Label({
        "id": "lblWin",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [4, 13, 4, 13],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 13
    }, {
        "textCopyable": false
    });
    segWinbox.add(
    lblWin);
    frmAniWin.add(
    segWin);
};

function frmAniWinGlobals() {
    var MenuId = [];
    frmAniWin = new kony.ui.Form2({
        "id": "frmAniWin",
        "needAppMenu": true,
        "title": "Transitions",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmAniWin
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
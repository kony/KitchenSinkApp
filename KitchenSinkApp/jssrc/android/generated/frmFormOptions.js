//Form JS File
function frmFormOptions_frmOptSeg_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    frmOptions.call(this);
};

function addWidgetsfrmFormOptions() {
    var frmOptSegbox = new kony.ui.Box({
        "id": "frmOptSegbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var frmOptSeg = new kony.ui.SegmentedUI2({
        "id": "frmOptSeg",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblFormOptions": "lblFormOptions"
        },
        "data": [{
            "lblFormOptions": "Form with widgets"
        }, {
            "lblFormOptions": "Form with image background"
        }, {
            "lblFormOptions": "Form with Header & Footer"
        }, {
            "lblFormOptions": "Form with Titlebar skin"
        }, {
            "lblFormOptions": "ShowLoadingScreen(center)"
        }, {
            "lblFormOptions": "ShowLoadingScreen(full screen)"
        }, {
            "lblFormOptions": "Gestures"
        }, {
            "lblFormOptions": "Auto resizing of widgets on rotation"
        }, {
            "lblFormOptions": "Popup anchoring from bottom"
        }],
        "Location": "[1,91]",
        "rowTemplate": frmOptSegbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmFormOptions_frmOptSeg_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    var lblFormOptions = new kony.ui.Label({
        "id": "lblFormOptions",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [11, 10, 6, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 13
    }, {
        "textCopyable": false
    });
    frmOptSegbox.add(
    lblFormOptions);
    frmFormOptions.add(
    frmOptSeg);
};

function frmFormOptionsGlobals() {
    var MenuId = [];
    frmFormOptions = new kony.ui.Form2({
        "id": "frmFormOptions",
        "needAppMenu": true,
        "title": "Form",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmFormOptions
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
//Form JS File
function frmBasicWidgets_segFirst_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    basic.call(this);
};

function addWidgetsfrmBasicWidgets() {
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
        "data": [{
            "lblFirst": "Button"
        }, {
            "lblFirst": "Calendar"
        }, {
            "lblFirst": "CheckBoxGroup"
        }, {
            "lblFirst": "ComboBox"
        }, {
            "lblFirst": "DataGrid"
        }, {
            "lblFirst": "Image"
        }, {
            "lblFirst": "Label"
        }, {
            "lblFirst": "Link"
        }, {
            "lblFirst": "ListBox"
        }, {
            "lblFirst": "RadioButtonGroup"
        }, {
            "lblFirst": "RichText"
        }, {
            "lblFirst": "Slider"
        }, {
            "lblFirst": "TextArea"
        }, {
            "lblFirst": "TextBox"
        }, {
            "lblFirst": "Icons"
        }],
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
        "onRowClick": frmBasicWidgets_segFirst_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "containerHeight": null,
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
        "margin": [1, 1, 1, 1],
        "padding": [11, 10, 4, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 13
    }, {
        "textCopyable": false
    });
    segFirstbox.add(
    lblFirst);
    frmBasicWidgets.add(
    segFirst);
};

function frmBasicWidgetsGlobals() {
    var MenuId = [];
    frmBasicWidgets = new kony.ui.Form2({
        "id": "frmBasicWidgets",
        "needAppMenu": true,
        "title": "Basic",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmBasicWidgets
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
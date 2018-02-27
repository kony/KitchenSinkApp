//Form JS File
function addWidgetsfrmSegBoxes() {
    var segment2192735980061495box = new kony.ui.Box({
        "id": "segment2192735980061495box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 16
    }, {});
    var segment2192735980061495 = new kony.ui.SegmentedUI2({
        "id": "segment2192735980061495",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "label117989725237518": "label117989725237518",
            "vbox192735980061499": "vbox192735980061499",
            "hbox192735980061496": "hbox192735980061496",
            "vbox192735980061497": "vbox192735980061497",
            "hbox192735980061498": "hbox192735980061498",
            "hbox192735980061500": "hbox192735980061500",
            "label192735980061501": "label192735980061501",
            "label192735980061503": "label192735980061503",
            "label192735980061502": "label192735980061502"
        },
        "data": [
            [{
                "label117989725237518": "Savings accnts"
            }, [{
                "label192735980061501": "Savings1",
                "label192735980061503": "NA",
                "label192735980061502": "$400"
            }, {
                "label192735980061501": "Savings223",
                "label192735980061503": "NA",
                "label192735980061502": "$600"
            }, {
                "label192735980061501": "Savings32344",
                "label192735980061503": "NA",
                "label192735980061502": "$6400"
            }]],
            [{
                "label117989725237518": "Checking accnt"
            }, [{
                "label192735980061501": "Checking1",
                "label192735980061503": "$400",
                "label192735980061502": "NA"
            }, {
                "label192735980061501": "Checking2",
                "label192735980061503": "$7700",
                "label192735980061502": "NA"
            }, {
                "label192735980061501": "Checking3",
                "label192735980061503": "$100",
                "label192735980061502": "NA"
            }]],
            [{
                "label117989725237518": "Credit card accnts"
            }, [{
                "label192735980061501": "Titanium card",
                "label192735980061503": "$400",
                "label192735980061502": "$200"
            }, {
                "label192735980061501": "Gold card",
                "label192735980061503": "$400",
                "label192735980061502": "$200"
            }, {
                "label192735980061501": "Silver card",
                "label192735980061503": "$400",
                "label192735980061502": "$200"
            }]]
        ],
        "Location": "[1,79]",
        "rowTemplate": segment2192735980061495box,
        "sectionHeaderTemplate": hbox117989725237513,
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
        "containerHeight": null,
        "containerWeight": 16
    }, {});
    var label192735980061501 = new kony.ui.Label({
        "id": "label192735980061501",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 0, 0, 0],
        "padding": [0, 15, 0, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var label192735980061502 = new kony.ui.Label({
        "id": "label192735980061502",
        "isVisible": true,
        "skin": "lblSmall"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 15, 0, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var hbox192735980061498 = new kony.ui.Box({
        "id": "hbox192735980061498",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980061498.add(
    label192735980061501, label192735980061502);
    var vbox192735980061497 = new kony.ui.Box({
        "id": "vbox192735980061497",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 67,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox192735980061497.add(
    hbox192735980061498);
    var label192735980061503 = new kony.ui.Label({
        "id": "label192735980061503",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [0, 15, 0, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 99
    }, {
        "textCopyable": false
    });
    var hbox192735980061500 = new kony.ui.Box({
        "id": "hbox192735980061500",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980061500.add(
    label192735980061503);
    var vbox192735980061499 = new kony.ui.Box({
        "id": "vbox192735980061499",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox192735980061499.add(
    hbox192735980061500);
    var hbox192735980061496 = new kony.ui.Box({
        "id": "hbox192735980061496",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 99,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980061496.add(
    vbox192735980061497, vbox192735980061499);
    segment2192735980061495box.add(
    hbox192735980061496);
    frmSegBoxes.add(
    segment2192735980061495);
};

function frmSegBoxesGlobals() {
    var MenuId = [];
    frmSegBoxes = new kony.ui.Form2({
        "id": "frmSegBoxes",
        "needAppMenu": true,
        "title": "Segment",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegBoxes
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
//Form JS File
function addWidgetsfrmNLst2() {
    var segment21041822331231box = new kony.ui.Box({
        "id": "segment21041822331231box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segment21041822331231 = new kony.ui.SegmentedUI2({
        "id": "segment21041822331231",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "label1041822331232": "label1041822331232",
            "image2192822373931792": "image2192822373931792",
            "hbox192822373931791": "hbox192822373931791"
        },
        "data": [{
            "label1041822331232": "NestedListInnerListItem1",
            "image2192822373931792": "arrgrite.png"
        }, {
            "label1041822331232": "NestedListInnerListItem2",
            "image2192822373931792": "arrgrite.png"
        }, {
            "label1041822331232": "NestedListInnerListItem3",
            "image2192822373931792": "arrgrite.png"
        }, {
            "label1041822331232": "NestedListInnerListItem4",
            "image2192822373931792": "arrgrite.png"
        }, {
            "label1041822331232": "NestedListInnerListItem5",
            "image2192822373931792": "arrgrite.png"
        }, {
            "label1041822331232": "NestedListInnerListItem6",
            "image2192822373931792": "arrgrite.png"
        }, {
            "label1041822331232": "NestedListInnerListItem7",
            "image2192822373931792": "arrgrite.png"
        }],
        "Location": "[1,52]",
        "rowTemplate": segment21041822331231box,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "padding": [0, 4, 0, 4],
        "containerHeight": null,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    var label1041822331232 = new kony.ui.Label({
        "id": "label1041822331232",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 1, 1, 1],
        "padding": [4, 3, 4, 3],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 90
    }, {
        "textCopyable": false
    });
    var image2192822373931792 = new kony.ui.Image2({
        "id": "image2192822373931792",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {});
    var hbox192822373931791 = new kony.ui.Box({
        "id": "hbox192822373931791",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192822373931791.add(
    label1041822331232, image2192822373931792);
    segment21041822331231box.add(
    hbox192822373931791);
    frmNLst2.add(
    segment21041822331231);
};

function frmNLst2Globals() {
    var MenuId = [];
    frmNLst2 = new kony.ui.Form2({
        "id": "frmNLst2",
        "needAppMenu": true,
        "title": "Nested List",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmNLst2
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
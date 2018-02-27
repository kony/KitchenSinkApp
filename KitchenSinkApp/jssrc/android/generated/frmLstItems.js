//Form JS File
function addWidgetsfrmLstItems() {
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
            "hbox192822373931793": "hbox192822373931793",
            "lblFirst": "lblFirst",
            "image2192822373931794": "image2192822373931794"
        },
        "data": [{
            "lblFirst": "ListItem1",
            "image2192822373931794": "arrgrite.png"
        }, {
            "lblFirst": "ListItem2",
            "image2192822373931794": "arrgrite.png"
        }, {
            "lblFirst": "ListItem3",
            "image2192822373931794": "arrgrite.png"
        }, {
            "lblFirst": "ListItem4",
            "image2192822373931794": "arrgrite.png"
        }, {
            "lblFirst": "ListItem5",
            "image2192822373931794": "arrgrite.png"
        }, {
            "lblFirst": "ListItem6",
            "image2192822373931794": "arrgrite.png"
        }],
        "Location": "[1,52]",
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
        "margin": [12, 1, 1, 1],
        "padding": [4, 15, 4, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 90
    }, {
        "textCopyable": false
    });
    var image2192822373931794 = new kony.ui.Image2({
        "id": "image2192822373931794",
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
    var hbox192822373931793 = new kony.ui.Box({
        "id": "hbox192822373931793",
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
    hbox192822373931793.add(
    lblFirst, image2192822373931794);
    segFirstbox.add(
    hbox192822373931793);
    frmLstItems.add(
    segFirst);
};

function frmLstItemsGlobals() {
    var MenuId = [];
    frmLstItems = new kony.ui.Form2({
        "id": "frmLstItems",
        "needAppMenu": true,
        "title": "List",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmLstItems
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
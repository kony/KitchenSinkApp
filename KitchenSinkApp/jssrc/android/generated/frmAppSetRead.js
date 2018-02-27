//Form JS File
function addWidgetsfrmAppSetRead() {
    var label1927359800106187 = new kony.ui.Label({
        "id": "label1927359800106187",
        "isVisible": true,
        "text": "Message :",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 45
    }, {
        "textCopyable": false
    });
    var lblMsgSetR = new kony.ui.Label({
        "id": "lblMsgSetR",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 55
    }, {
        "textCopyable": false
    });
    var hbox1927359800106179 = new kony.ui.Box({
        "id": "hbox1927359800106179",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [6, 6, 6, 6],
        "vExpand": false,
        "marginInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1927359800106179.add(
    label1927359800106187, lblMsgSetR);
    var label1927359800106208 = new kony.ui.Label({
        "id": "label1927359800106208",
        "isVisible": true,
        "text": "View type :",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 45
    }, {
        "textCopyable": false
    });
    var lblMsgSetR1 = new kony.ui.Label({
        "id": "lblMsgSetR1",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 55
    }, {
        "textCopyable": false
    });
    var hbox1927359800106182 = new kony.ui.Box({
        "id": "hbox1927359800106182",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [6, 6, 6, 6],
        "vExpand": false,
        "marginInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1927359800106182.add(
    label1927359800106208, lblMsgSetR1);
    var SegMsgSetRbox = new kony.ui.Box({
        "id": "SegMsgSetRbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var SegMsgSetR = new kony.ui.SegmentedUI2({
        "id": "SegMsgSetR",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "image21927359800106232": "image21927359800106232"
        },
        "data": [{
            "image21927359800106232": "b1.png"
        }, {
            "image21927359800106232": "b2.png"
        }, {
            "image21927359800106232": "b3.png"
        }, {
            "image21927359800106232": "b4.png"
        }],
        "Location": "[1,103]",
        "rowTemplate": SegMsgSetRbox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": true,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [1, 3, 1, 1],
        "containerHeight": null,
        "marginInPixel": false,
        "containerWeight": 45
    }, {});
    var image21927359800106232 = new kony.ui.Image2({
        "id": "image21927359800106232",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 444,
        "referenceHeight": 80,
        "containerWeight": 45
    }, {});
    SegMsgSetRbox.add(
    image21927359800106232);
    frmAppSetRead.add(
    hbox1927359800106179, hbox1927359800106182, SegMsgSetR);
};

function frmAppSetReadGlobals() {
    var MenuId = [];
    frmAppSetRead = new kony.ui.Form2({
        "id": "frmAppSetRead",
        "needAppMenu": true,
        "title": "App settings",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmAppSetRead
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
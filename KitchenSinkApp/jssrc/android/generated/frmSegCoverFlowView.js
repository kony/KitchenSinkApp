//Form JS File
function addWidgetsfrmSegCoverFlowView() {
    var labefrmSeg3 = new kony.ui.Label({
        "id": "labefrmSeg3",
        "isVisible": false,
        "text": "Segment in Coverflow view",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 7, 4, 4],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var segment2117989725233822box = new kony.ui.Box({
        "id": "segment2117989725233822box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segment2117989725233822 = new kony.ui.SegmentedUI2({
        "id": "segment2117989725233822",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "label117989725233827": "label117989725233827",
            "image2117989725233825": "image2117989725233825",
            "label117989725233823": "label117989725233823",
            "hbox117989725233824": "hbox117989725233824"
        },
        "data": [{
            "label117989725233827": "Online Price:$10.00",
            "image2117989725233825": "b1.png",
            "label117989725233823": "Boys' Felix Sneakers"
        }, {
            "label117989725233827": "Online Price:$15.00",
            "image2117989725233825": "b2.png",
            "label117989725233823": "Boys DuPont F Sneaker"
        }, {
            "label117989725233827": "Online Price:$8.00",
            "image2117989725233825": "b3.png",
            "label117989725233823": "Women's Matte Slippers"
        }, {
            "label117989725233827": "Online Price:$20.00",
            "image2117989725233825": "b4.png",
            "label117989725233823": "Women's Buckle Boots "
        }],
        "Location": "[1,28]",
        "rowTemplate": segment2117989725233822box,
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
        "viewType": constants.SEGUI_VIEW_TYPE_COVERFLOW,
        "viewConfig": {
            "coverflowConfig": {
                "rowItemRotationAngle": 45,
                "isCircular": true,
                "spaceBetweenRowItems": 10,
                "projectionAngle": 60,
                "rowItemWidth": 50
            }
        },
        "layoutType": null
    }, {
        "margin": [4, 4, 4, 2],
        "containerHeight": null,
        "marginInPixel": false,
        "containerWeight": 45
    }, {});
    var label117989725233823 = new kony.ui.Label({
        "id": "label117989725233823",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "paddingInPixel": true,
        "containerWeight": 14
    }, {
        "textCopyable": false
    });
    var image2117989725233825 = new kony.ui.Image2({
        "id": "image2117989725233825",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 444,
        "referenceHeight": 80,
        "containerWeight": 100
    }, {});
    var hbox117989725233824 = new kony.ui.Box({
        "id": "hbox117989725233824",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 28,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox117989725233824.add(
    image2117989725233825);
    var label117989725233827 = new kony.ui.Label({
        "id": "label117989725233827",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "paddingInPixel": true,
        "containerWeight": 14
    }, {
        "textCopyable": false
    });
    segment2117989725233822box.add(
    label117989725233823, hbox117989725233824, label117989725233827);
    frmSegCoverFlowView.add(
    labefrmSeg3, segment2117989725233822);
};

function frmSegCoverFlowViewGlobals() {
    var MenuId = [];
    frmSegCoverFlowView = new kony.ui.Form2({
        "id": "frmSegCoverFlowView",
        "needAppMenu": true,
        "title": "Coverflow view",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegCoverFlowView
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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
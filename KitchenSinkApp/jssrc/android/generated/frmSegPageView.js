//Form JS File
function addWidgetsfrmSegPageView() {
    var labepageViewfrmSeg2 = new kony.ui.Label({
        "id": "labepageViewfrmSeg2",
        "isVisible": false,
        "text": "Segment in page view",
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
    var segment2117989725234772box = new kony.ui.Box({
        "id": "segment2117989725234772box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 42
    }, {});
    var segment2117989725234772 = new kony.ui.SegmentedUI2({
        "id": "segment2117989725234772",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "label117989725234777": "label117989725234777",
            "image2117989725234776": "image2117989725234776",
            "label117989725234774": "label117989725234774",
            "hbox117989725234775": "hbox117989725234775"
        },
        "data": [{
            "label117989725234777": "Online Price:$10.00",
            "image2117989725234776": "b1.png",
            "label117989725234774": "Boys' Felix Sneakers"
        }, {
            "label117989725234777": "Online Price:$15.00",
            "image2117989725234776": "b2.png",
            "label117989725234774": "Boys DuPont F Sneaker"
        }, {
            "label117989725234777": "Online Price:$8.00",
            "image2117989725234776": "b3.png",
            "label117989725234774": "Women's Matte Slippers"
        }, {
            "label117989725234777": "Online Price:$20.00",
            "image2117989725234776": "b4.png",
            "label117989725234774": "Women's Buckle Boots"
        }],
        "Location": "[1,92]",
        "rowTemplate": segment2117989725234772box,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": true,
        "groupCells": false,
        "screenLevelWidget": false,
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "pageOnDotImage": "page_control_active.png",
        "pageOffDotImage": "page_control.png",
        "needPageIndicator": true,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "layoutType": null
    }, {
        "margin": [2, 4, 2, 4],
        "padding": [0, 0, 0, 2],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 42
    }, {});
    var label117989725234774 = new kony.ui.Label({
        "id": "label117989725234774",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "paddingInPixel": true,
        "containerWeight": 15
    }, {
        "textCopyable": false
    });
    var image2117989725234776 = new kony.ui.Image2({
        "id": "image2117989725234776",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 444,
        "referenceHeight": 60,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox117989725234775 = new kony.ui.Box({
        "id": "hbox117989725234775",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 28,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox117989725234775.add(
    image2117989725234776);
    var label117989725234777 = new kony.ui.Label({
        "id": "label117989725234777",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 15
    }, {
        "textCopyable": false
    });
    segment2117989725234772box.add(
    label117989725234774, hbox117989725234775, label117989725234777);
    frmSegPageView.add(
    labepageViewfrmSeg2, segment2117989725234772);
};

function frmSegPageViewGlobals() {
    var MenuId = [];
    frmSegPageView = new kony.ui.Form2({
        "id": "frmSegPageView",
        "needAppMenu": true,
        "title": "Page view",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegPageView
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
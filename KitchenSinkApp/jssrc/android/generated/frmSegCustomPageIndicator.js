//Form JS File
function addWidgetsfrmSegCustomPageIndicator() {
    var segment2117989725234772box = new kony.ui.Box({
        "id": "segment2117989725234772box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 34
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
        "Location": "[1,88]",
        "rowTemplate": segment2117989725234772box,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": true,
        "screenLevelWidget": true,
        "pageOnDotImage": "page_control_active.png",
        "pageOffDotImage": "page_control.png",
        "needPageIndicator": true,
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "layoutType": null
    }, {
        "margin": [2, 4, 2, 2],
        "padding": [0, 0, 0, 2],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 34
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
        "containerWeight": 18
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
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 444,
        "referenceHeight": 80,
        "containerWeight": 100
    }, {});
    var hbox117989725234775 = new kony.ui.Box({
        "id": "hbox117989725234775",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 34,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
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
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "paddingInPixel": true,
        "containerWeight": 18
    }, {
        "textCopyable": false
    });
    segment2117989725234772box.add(
    label117989725234774, hbox117989725234775, label117989725234777);
    frmSegCustomPageIndicator.add(
    segment2117989725234772);
};

function frmSegCustomPageIndicatorGlobals() {
    var MenuId = [];
    frmSegCustomPageIndicator = new kony.ui.Form2({
        "id": "frmSegCustomPageIndicator",
        "needAppMenu": true,
        "title": "Screen level page view",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegCustomPageIndicator
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
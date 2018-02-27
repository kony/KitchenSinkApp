//Form JS File
function addWidgetsfrmSegTableView() {
    var segment2117989725234750box = new kony.ui.Box({
        "id": "segment2117989725234750box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 9
    }, {});
    var segment2117989725234750 = new kony.ui.SegmentedUI2({
        "id": "segment2117989725234750",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "label117989725234753": "label117989725234753",
            "hbox117989725234754": "hbox117989725234754",
            "label117989725234760": "label117989725234760",
            "image2117989725234759": "image2117989725234759"
        },
        "data": [{
            "label117989725234753": "Boys' Felix Sneakers",
            "label117989725234760": "Online Price:$10.00",
            "image2117989725234759": "b1.png"
        }, {
            "label117989725234753": "Boys DuPont F Sneaker",
            "label117989725234760": "Online Price:$15.00",
            "image2117989725234759": "b2.png"
        }, {
            "label117989725234753": "Women's Matte Slippers",
            "label117989725234760": "Online Price:$8.00",
            "image2117989725234759": "b3.png"
        }, {
            "label117989725234753": "Women's Buckle Boots",
            "label117989725234760": "Online Price:$20.00",
            "image2117989725234759": "b4.png"
        }],
        "Location": "[1,97]",
        "rowTemplate": segment2117989725234750box,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": true,
        "screenLevelWidget": true,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [2, 2, 2, 2],
        "containerHeight": null,
        "marginInPixel": false,
        "containerWeight": 9
    }, {
        "dockSectionHeaders": false
    });
    var label117989725234753 = new kony.ui.Label({
        "id": "label117989725234753",
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
    var image2117989725234759 = new kony.ui.Image2({
        "id": "image2117989725234759",
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
    var hbox117989725234754 = new kony.ui.Box({
        "id": "hbox117989725234754",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 26,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox117989725234754.add(
    image2117989725234759);
    var label117989725234760 = new kony.ui.Label({
        "id": "label117989725234760",
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
    segment2117989725234750box.add(
    label117989725234753, hbox117989725234754, label117989725234760);
    frmSegTableView.add(
    segment2117989725234750);
};

function frmSegTableViewGlobals() {
    var MenuId = [];
    frmSegTableView = new kony.ui.Form2({
        "id": "frmSegTableView",
        "needAppMenu": true,
        "title": "Table view",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegTableView
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
//Form JS File
function addWidgetsfrmIcons() {
    var image21041822331234 = new kony.ui.Image2({
        "id": "image21041822331234",
        "isVisible": true,
        "src": "cotiz.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 3, 3, 3],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 62,
        "referenceHeight": 62,
        "marginInPixel": false,
        "containerWeight": 33
    }, {});
    var image21041822331235 = new kony.ui.Image2({
        "id": "image21041822331235",
        "isVisible": true,
        "src": "emerg.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 3, 5, 3],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 62,
        "referenceHeight": 62,
        "marginInPixel": false,
        "containerWeight": 35
    }, {});
    var image21041822331236 = new kony.ui.Image2({
        "id": "image21041822331236",
        "isVisible": true,
        "src": "local.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 3, 2, 3],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 62,
        "referenceHeight": 62,
        "marginInPixel": false,
        "containerWeight": 32
    }, {});
    var hbox1041822331233 = new kony.ui.Box({
        "id": "hbox1041822331233",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1041822331233.add(
    image21041822331234, image21041822331235, image21041822331236);
    var image21041822331238 = new kony.ui.Image2({
        "id": "image21041822331238",
        "isVisible": true,
        "src": "login.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 4, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 62,
        "referenceHeight": 62,
        "marginInPixel": false,
        "containerWeight": 33
    }, {});
    var image21041822331239 = new kony.ui.Image2({
        "id": "image21041822331239",
        "isVisible": true,
        "src": "prom.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 5, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 62,
        "referenceHeight": 62,
        "marginInPixel": false,
        "containerWeight": 35
    }, {});
    var image21041822331240 = new kony.ui.Image2({
        "id": "image21041822331240",
        "isVisible": true,
        "src": "tarj.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 2, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 62,
        "referenceHeight": 62,
        "marginInPixel": false,
        "containerWeight": 32
    }, {});
    var hbox1041822331237 = new kony.ui.Box({
        "id": "hbox1041822331237",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1041822331237.add(
    image21041822331238, image21041822331239, image21041822331240);
    frmIcons.add(
    hbox1041822331233, hbox1041822331237);
};

function frmIconsGlobals() {
    var MenuId = [];
    frmIcons = new kony.ui.Form2({
        "id": "frmIcons",
        "needAppMenu": true,
        "title": "Icons",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmIcons
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
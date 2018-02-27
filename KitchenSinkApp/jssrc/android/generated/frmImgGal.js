//Form JS File
function addWidgetsfrmImgGal() {
    var label1210492603276 = new kony.ui.Label({
        "id": "label1210492603276",
        "isVisible": true,
        "text": "Default",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var imagegallery21041822331264 = new kony.ui.ImageGallery2({
        "id": "imagegallery21041822331264",
        "isVisible": true,
        "data": [
            [{
                "iurl": "b1.png"
            }, {
                "iurl": "b2.png"
            }, {
                "iurl": "b3.png"
            }, {
                "iurl": "b4.png"
            }, {
                "iurl": "b5.png"
            }, {
                "iurl": "b6.png"
            }], "iurl"],
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "spaceBetweenImages": 100
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [6, 0, 6, 0],
        "referenceWidth": 200,
        "referenceHeight": 100,
        "marginInPixel": false,
        "containerWeight": 15
    }, {});
    frmImgGal.add(
    label1210492603276, imagegallery21041822331264);
};

function frmImgGalGlobals() {
    var MenuId = [];
    frmImgGal = new kony.ui.Form2({
        "id": "frmImgGal",
        "needAppMenu": true,
        "title": "Image Gallery",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmImgGal
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
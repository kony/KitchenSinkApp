//Form JS File
function frmImgStrip_himgstrip21041822331260_onSelection_seq0(eventobject) {
    hIS.call(this, eventobject);
};

function addWidgetsfrmImgStrip() {
    var label1210492603121 = new kony.ui.Label({
        "id": "label1210492603121",
        "isVisible": true,
        "text": "Default",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var himgstrip21041822331260 = new kony.ui.HorizontalImageStrip2({
        "id": "himgstrip21041822331260",
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
            }, {
                "iurl": "b7.png"
            }], "iurl"],
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "spaceBetweenImages": 0,
        "skin": "imgGalNormal",
        "showArrows": false,
        "showScrollbars": false,
        "onSelection": frmImgStrip_himgstrip21041822331260_onSelection_seq0,
        "viewConfig": {
            "stripviewConfig": {
                "enableScrollBounce": true
            }
        },
        "viewType": constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_STRIPVIEW
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [12, 1, 12, 1],
        "referenceWidth": 200,
        "referenceHeight": 100,
        "marginInPixel": true,
        "containerWeight": 8
    }, {});
    var lblhIS = new kony.ui.Label({
        "id": "lblhIS",
        "isVisible": true,
        "text": "No Image Selected",
        "skin": "lblSub1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var label1210492603210 = new kony.ui.Label({
        "id": "label1210492603210",
        "isVisible": true,
        "text": "Slot View",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var himgstrip21210492603182 = new kony.ui.HorizontalImageStrip2({
        "id": "himgstrip21210492603182",
        "isVisible": true,
        "data": [
            [{
                "iurl": "image20.png"
            }, {
                "iurl": "image19.png"
            }, {
                "iurl": "image18.png"
            }, {
                "iurl": "image17.png"
            }, {
                "iurl": "image16.png"
            }, {
                "iurl": "image15.png"
            }, {
                "iurl": "image14.png"
            }, {
                "iurl": "image13.png"
            }, {
                "iurl": "image12.png"
            }, {
                "iurl": "image11.png"
            }, {
                "iurl": "image10.png"
            }, {
                "iurl": "image9.png"
            }, {
                "iurl": "image8.png"
            }, {
                "iurl": "image7.png"
            }, {
                "iurl": "image6.png"
            }, {
                "iurl": "image5.png"
            }, {
                "iurl": "image4.png"
            }, {
                "iurl": "image3.png"
            }, {
                "iurl": "image2.png"
            }, {
                "iurl": "image1.png"
            }], "iurl"],
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "spaceBetweenImages": 0,
        "skin": "imgGalNormal",
        "showArrows": false,
        "showScrollbars": false,
        "viewConfig": {
            "slotviewConfig": {
                "flingVelocity": 1000,
                "scrollDistance": 50,
                "flipInterval": 10
            },
            "stripviewConfig": {
                "enableScrollBounce": true
            }
        },
        "viewType": constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_SLOTVIEW
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [12, 1, 12, 1],
        "referenceWidth": 300,
        "referenceHeight": 150,
        "marginInPixel": true,
        "containerWeight": 8
    }, {});
    var label1181029310124641 = new kony.ui.Label({
        "id": "label1181029310124641",
        "isVisible": true,
        "text": "Cover Flow View",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var himgstrip21181029310124655 = new kony.ui.HorizontalImageStrip2({
        "id": "himgstrip21181029310124655",
        "isVisible": true,
        "data": [
            [{
                "iurl": "frame1.png"
            }, {
                "iurl": "frame2.png"
            }, {
                "iurl": "frame3.png"
            }, {
                "iurl": "frame4.png"
            }, {
                "iurl": "frame5.png"
            }, {
                "iurl": "frame6.png"
            }, {
                "iurl": "frame7.png"
            }, {
                "iurl": "frame8.png"
            }], "iurl"],
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "spaceBetweenImages": 0,
        "skin": "imgGalNormal",
        "showArrows": false,
        "showScrollbars": false,
        "viewConfig": {
            "coverflowConfig": {
                "imageItemRotationAngle": 60,
                "isCircular": false,
                "projectionAngle": 0
            },
            "stripviewConfig": {
                "enableScrollBounce": true
            }
        },
        "viewType": constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [12, 1, 12, 20],
        "referenceWidth": 200,
        "referenceHeight": 100,
        "marginInPixel": true,
        "containerWeight": 8
    }, {});
    frmImgStrip.add(
    label1210492603121, himgstrip21041822331260, lblhIS, label1210492603210, himgstrip21210492603182, label1181029310124641, himgstrip21181029310124655);
};

function frmImgStripGlobals() {
    var MenuId = [];
    frmImgStrip = new kony.ui.Form2({
        "id": "frmImgStrip",
        "needAppMenu": true,
        "title": "Image Strip",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmImgStrip
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
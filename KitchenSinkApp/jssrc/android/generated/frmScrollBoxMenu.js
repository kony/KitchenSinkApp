//Form JS File
function frmScrollBoxMenu_frmScrollBoxMenu_preshow_seq0(eventobject, neworientation) {
    glbScrollBegining = false;
    frmScrollBoxMenu.sboxGlobalHome.scrollToEnd()
};

function frmScrollBoxMenu_frmScrollBoxMenu_postshow_seq0(eventobject, neworientation) {
    if (kony.os.deviceInfo().name == "android") {
        glbScrollBegining = false;
        frmScrollBoxMenu.sboxGlobalHome.scrollToEnd()
    }
};

function frmScrollBoxMenu_button192735980042699_onClick_seq0(eventobject) {
    if (glbScrollBegining == false) {
        kony.print("Entered True");
        glbScrollBegining = true
        frmScrollBoxMenu.sboxGlobalHome.scrollToBeginning()
    } else {
        kony.print("Entered False");
        glbScrollBegining = false
        frmScrollBoxMenu.sboxGlobalHome.scrollToEnd()
    }
};

function addWidgetsfrmScrollBoxMenu() {
    var image2192735980042722 = new kony.ui.Image2({
        "id": "image2192735980042722",
        "isVisible": true,
        "src": "person.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 24
    }, {});
    var label192735980042723 = new kony.ui.Label({
        "id": "label192735980042723",
        "isVisible": true,
        "text": "Alexander",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "textCopyable": false
    });
    var hbox192735980042714 = new kony.ui.Box({
        "id": "hbox192735980042714",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042714.add(
    image2192735980042722, label192735980042723);
    var label192735980042783 = new kony.ui.Label({
        "id": "label192735980042783",
        "isVisible": true,
        "text": "FAVORITES",
        "skin": "lblGray"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 99
    }, {
        "textCopyable": false
    });
    var hbox192735980042779 = new kony.ui.Box({
        "id": "hbox192735980042779",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042779.add(
    label192735980042783);
    var image2192735980042799 = new kony.ui.Image2({
        "id": "image2192735980042799",
        "isVisible": true,
        "src": "newsfeed.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 24
    }, {});
    var label192735980042801 = new kony.ui.Label({
        "id": "label192735980042801",
        "isVisible": true,
        "text": "NewsFeed",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "textCopyable": false
    });
    var hbox192735980042797 = new kony.ui.Box({
        "id": "hbox192735980042797",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042797.add(
    image2192735980042799, label192735980042801);
    var image2192735980042817 = new kony.ui.Image2({
        "id": "image2192735980042817",
        "isVisible": true,
        "src": "messages.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 24
    }, {});
    var label192735980042819 = new kony.ui.Label({
        "id": "label192735980042819",
        "isVisible": true,
        "text": "Messages",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "textCopyable": false
    });
    var hbox192735980042815 = new kony.ui.Box({
        "id": "hbox192735980042815",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042815.add(
    image2192735980042817, label192735980042819);
    var image2192735980042835 = new kony.ui.Image2({
        "id": "image2192735980042835",
        "isVisible": true,
        "src": "nearby.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 24
    }, {});
    var label192735980042837 = new kony.ui.Label({
        "id": "label192735980042837",
        "isVisible": true,
        "text": "Nearby",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "textCopyable": false
    });
    var hbox192735980042833 = new kony.ui.Box({
        "id": "hbox192735980042833",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042833.add(
    image2192735980042835, label192735980042837);
    var image2192735980042853 = new kony.ui.Image2({
        "id": "image2192735980042853",
        "isVisible": true,
        "src": "events.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 24
    }, {});
    var label192735980042855 = new kony.ui.Label({
        "id": "label192735980042855",
        "isVisible": true,
        "text": "Events",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "textCopyable": false
    });
    var hbox192735980042851 = new kony.ui.Box({
        "id": "hbox192735980042851",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042851.add(
    image2192735980042853, label192735980042855);
    var image2192735980042871 = new kony.ui.Image2({
        "id": "image2192735980042871",
        "isVisible": true,
        "src": "friends.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 24
    }, {});
    var label192735980042873 = new kony.ui.Label({
        "id": "label192735980042873",
        "isVisible": true,
        "text": "Friends",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "textCopyable": false
    });
    var hbox192735980042869 = new kony.ui.Box({
        "id": "hbox192735980042869",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042869.add(
    image2192735980042871, label192735980042873);
    var label192735980042891 = new kony.ui.Label({
        "id": "label192735980042891",
        "isVisible": true,
        "text": "GROUPS",
        "skin": "lblGray"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 99
    }, {
        "textCopyable": false
    });
    var hbox192735980042887 = new kony.ui.Box({
        "id": "hbox192735980042887",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042887.add(
    label192735980042891);
    var image2192735980043207 = new kony.ui.Image2({
        "id": "image2192735980043207",
        "isVisible": true,
        "src": "groups.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 24
    }, {});
    var label192735980043209 = new kony.ui.Label({
        "id": "label192735980043209",
        "isVisible": true,
        "text": "Kony",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "textCopyable": false
    });
    var hbox192735980043205 = new kony.ui.Box({
        "id": "hbox192735980043205",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980043205.add(
    image2192735980043207, label192735980043209);
    var image2192735980088347 = new kony.ui.Image2({
        "id": "image2192735980088347",
        "isVisible": true,
        "src": "groups.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 24
    }, {});
    var label192735980088349 = new kony.ui.Label({
        "id": "label192735980088349",
        "isVisible": true,
        "text": "Android",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "textCopyable": false
    });
    var hbox192735980088345 = new kony.ui.Box({
        "id": "hbox192735980088345",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980088345.add(
    image2192735980088347, label192735980088349);
    var image21180105789136254 = new kony.ui.Image2({
        "id": "image21180105789136254",
        "isVisible": true,
        "src": "groups.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 24
    }, {});
    var label1180105789136256 = new kony.ui.Label({
        "id": "label1180105789136256",
        "isVisible": true,
        "text": "Mango",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "textCopyable": false
    });
    var hbox1180105789136252 = new kony.ui.Box({
        "id": "hbox1180105789136252",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1180105789136252.add(
    image21180105789136254, label1180105789136256);
    var image21180105789136272 = new kony.ui.Image2({
        "id": "image21180105789136272",
        "isVisible": true,
        "src": "groups.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 24
    }, {});
    var label1180105789136274 = new kony.ui.Label({
        "id": "label1180105789136274",
        "isVisible": true,
        "text": "BB",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "textCopyable": false
    });
    var hbox1180105789136270 = new kony.ui.Box({
        "id": "hbox1180105789136270",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1180105789136270.add(
    image21180105789136272, label1180105789136274);
    var image21180105789136290 = new kony.ui.Image2({
        "id": "image21180105789136290",
        "isVisible": true,
        "src": "groups.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 24
    }, {});
    var label1180105789136292 = new kony.ui.Label({
        "id": "label1180105789136292",
        "isVisible": true,
        "text": "Iphone",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 75
    }, {
        "textCopyable": false
    });
    var hbox1180105789136288 = new kony.ui.Box({
        "id": "hbox1180105789136288",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1180105789136288.add(
    image21180105789136290, label1180105789136292);
    var vbox192735980042695 = new kony.ui.Box({
        "id": "vbox192735980042695",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox192735980042695.add(
    hbox192735980042714, hbox192735980042779, hbox192735980042797, hbox192735980042815, hbox192735980042833, hbox192735980042851, hbox192735980042869, hbox192735980042887, hbox192735980043205, hbox192735980088345, hbox1180105789136252, hbox1180105789136270, hbox1180105789136288);
    var hbox192735980094497 = new kony.ui.Box({
        "id": "hbox192735980094497",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980094497.add(
    vbox192735980042695);
    var scrollbox192735980090706 = new kony.ui.ScrollBox({
        "id": "scrollbox192735980090706",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "showScrollbars": true,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100
    }, {});
    scrollbox192735980090706.add(
    hbox192735980094497);
    var hbox192735980090519 = new kony.ui.Box({
        "id": "hbox192735980090519",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980090519.add(
    scrollbox192735980090706);
    var vbox192735980067334 = new kony.ui.Box({
        "id": "vbox192735980067334",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 80,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox192735980067334.add(
    hbox192735980090519);
    var button192735980042699 = new kony.ui.Button({
        "id": "button192735980042699",
        "isVisible": true,
        "text": null,
        "skin": "btnExpand",
        "focusSkin": "btnExpandFocus",
        "onClick": frmScrollBoxMenu_button192735980042699_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 16
    }, {});
    var label1927359800122962 = new kony.ui.Label({
        "id": "label1927359800122962",
        "isVisible": true,
        "text": null,
        "skin": "lblTransparent"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 84
    }, {
        "textCopyable": false
    });
    var hbox192735980042698 = new kony.ui.Box({
        "id": "hbox192735980042698",
        "isVisible": true,
        "skin": "hBoxBlue",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042698.add(
    button192735980042699, label1927359800122962);
    var image2192735980042707 = new kony.ui.Image2({
        "id": "image2192735980042707",
        "isVisible": true,
        "src": "person.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 35,
        "referenceHeight": 32,
        "containerWeight": 23
    }, {});
    var label192735980042708 = new kony.ui.Label({
        "id": "label192735980042708",
        "isVisible": true,
        "text": "Vikas Malhotra",
        "skin": "lblBlue"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "containerWeight": 77
    }, {
        "textCopyable": false
    });
    var hbox192735980042706 = new kony.ui.Box({
        "id": "hbox192735980042706",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 2],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042706.add(
    image2192735980042707, label192735980042708);
    var textarea2192735980042709 = new kony.ui.TextArea2({
        "id": "textarea2192735980042709",
        "isVisible": true,
        "text": "Please click top left button to observe scrolling towards right.Again click the same button to observe scrolling towards left.Also you can scroll towards top and bottom. Please click top left button to observe scrolling towards right.Again click the same button to observe scrolling towards left.Also you can scroll towards top and bottom. Please click top left button to observe scrolling towards right.Again click the same button to observe scrolling towards left.Also you can scroll towards top and bottom.",
        "maxTextLength": null,
        "numberOfVisibleLines": 3,
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "skin": "txtAreaNormal",
        "focusSkin": "txtAreaFocus",
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "containerWeight": 21
    }, {});
    var image21927359800107074 = new kony.ui.Image2({
        "id": "image21927359800107074",
        "isVisible": true,
        "src": "wall.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 350,
        "referenceHeight": 256,
        "marginInPixel": false,
        "containerWeight": 28
    }, {});
    var label192735980042711 = new kony.ui.Label({
        "id": "label192735980042711",
        "isVisible": true,
        "text": "Like",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 33
    }, {
        "textCopyable": false
    });
    var label192735980042712 = new kony.ui.Label({
        "id": "label192735980042712",
        "isVisible": true,
        "text": "Comment",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "paddingInPixel": true,
        "containerWeight": 33
    }, {
        "textCopyable": false
    });
    var label192735980042713 = new kony.ui.Label({
        "id": "label192735980042713",
        "isVisible": true,
        "text": "Share",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [10, 1, 1, 1],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 34
    }, {
        "textCopyable": false
    });
    var hbox192735980042710 = new kony.ui.Box({
        "id": "hbox192735980042710",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042710.add(
    label192735980042711, label192735980042712, label192735980042713);
    var scrollbox1927359800110223 = new kony.ui.ScrollBox({
        "id": "scrollbox1927359800110223",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "showScrollbars": true,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [1, 0, 1, 0],
        "containerHeight": 92,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "containerWeight": 100
    }, {});
    scrollbox1927359800110223.add(
    hbox192735980042706, textarea2192735980042709, image21927359800107074, hbox192735980042710);
    var hbox1927359800108588 = new kony.ui.Box({
        "id": "hbox1927359800108588",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 72,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1927359800108588.add(
    scrollbox1927359800110223);
    var vbox192735980042697 = new kony.ui.Box({
        "id": "vbox192735980042697",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox192735980042697.add(
    hbox192735980042698, hbox1927359800108588);
    var sboxGlobalHome = new kony.ui.ScrollBox({
        "id": "sboxGlobalHome",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_NONE,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "showScrollbars": true,
        "enableScrollByPage": false
    }, {
        "percent": true
    }, {});
    sboxGlobalHome.add(
    vbox192735980067334, vbox192735980042697);
    frmScrollBoxMenu.add(
    sboxGlobalHome);
};

function frmScrollBoxMenuGlobals() {
    var MenuId = [];
    frmScrollBoxMenu = new kony.ui.Form2({
        "id": "frmScrollBoxMenu",
        "needAppMenu": true,
        "title": "ScrollBox Menu",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmScrollBoxMenu_frmScrollBoxMenu_preshow_seq0,
        "postShow": frmScrollBoxMenu_frmScrollBoxMenu_postshow_seq0,
        "addWidgets": addWidgetsfrmScrollBoxMenu
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
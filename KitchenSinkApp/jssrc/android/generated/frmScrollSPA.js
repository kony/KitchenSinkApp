//Form JS File
function frmScrollSPA_hbox192735980042714_onClick_seq0(eventobject) {
    homeBtnClick.call(this);
};

function frmScrollSPA_hbox192735980042797_onClick_seq0(eventobject) {
    newsFeedBtnClick.call(this);
};

function frmScrollSPA_hbox192735980042815_onClick_seq0(eventobject) {
    MessagesBtnClick.call(this);
};

function addWidgetsfrmScrollSPA() {
    var image21045367460110908 = new kony.ui.Image2({
        "id": "image21045367460110908",
        "isVisible": true,
        "src": "person.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {});
    var image21045367460110910 = new kony.ui.Image2({
        "id": "image21045367460110910",
        "isVisible": true,
        "src": "nearby.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {});
    var image21045367460110912 = new kony.ui.Image2({
        "id": "image21045367460110912",
        "isVisible": true,
        "src": "events.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {});
    var image21045367460110914 = new kony.ui.Image2({
        "id": "image21045367460110914",
        "isVisible": true,
        "src": "friends.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {});
    var image21045367460110916 = new kony.ui.Image2({
        "id": "image21045367460110916",
        "isVisible": true,
        "src": "groups.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [5, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {});
    var scrollbox1045367460110592 = new kony.ui.ScrollBox({
        "id": "scrollbox1045367460110592",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "skin": "scrollgray",
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    scrollbox1045367460110592.add(
    image21045367460110908, image21045367460110910, image21045367460110912, image21045367460110914, image21045367460110916);
    var image2192735980042722 = new kony.ui.Image2({
        "id": "image2192735980042722",
        "isVisible": true,
        "src": "person.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {});
    var label192735980042723 = new kony.ui.Label({
        "id": "label192735980042723",
        "isVisible": true,
        "text": "Home",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [5, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var hbox192735980042714 = new kony.ui.Box({
        "id": "hbox192735980042714",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "onClick": frmScrollSPA_hbox192735980042714_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
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
        "text": "Favorites",
        "skin": "lblSub1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 79
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
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 19
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
        "padding": [5, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var hbox192735980042797 = new kony.ui.Box({
        "id": "hbox192735980042797",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "onClick": frmScrollSPA_hbox192735980042797_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 19
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
        "padding": [5, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var hbox192735980042815 = new kony.ui.Box({
        "id": "hbox192735980042815",
        "isVisible": true,
        "skin": "hBoxGray",
        "focusSkin": "hBoxGrayFocus",
        "onClick": frmScrollSPA_hbox192735980042815_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 19
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
        "padding": [5, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 60
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
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 19
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
        "padding": [5, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 60
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
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 19
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
        "padding": [5, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 60
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
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042869.add(
    image2192735980042871, label192735980042873);
    var label192735980042891 = new kony.ui.Label({
        "id": "label192735980042891",
        "isVisible": true,
        "text": "GROUPS",
        "skin": "lblSub1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 79
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
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 19
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
        "padding": [5, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 60
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
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {});
    var label192735980088349 = new kony.ui.Label({
        "id": "label192735980088349",
        "isVisible": true,
        "text": "Apple",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [5, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 60
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
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980088345.add(
    image2192735980088347, label192735980088349);
    var image21044443939155638 = new kony.ui.Image2({
        "id": "image21044443939155638",
        "isVisible": true,
        "src": "groups.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {});
    var label1044443939155640 = new kony.ui.Label({
        "id": "label1044443939155640",
        "isVisible": true,
        "text": "Android",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [5, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var hbox1044443939155636 = new kony.ui.Box({
        "id": "hbox1044443939155636",
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
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1044443939155636.add(
    image21044443939155638, label1044443939155640);
    var image21044443939155626 = new kony.ui.Image2({
        "id": "image21044443939155626",
        "isVisible": true,
        "src": "groups.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {});
    var label1044443939155628 = new kony.ui.Label({
        "id": "label1044443939155628",
        "isVisible": true,
        "text": "Windows",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [5, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var hbox1044443939155624 = new kony.ui.Box({
        "id": "hbox1044443939155624",
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
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1044443939155624.add(
    image21044443939155626, label1044443939155628);
    var image21044443939155614 = new kony.ui.Image2({
        "id": "image21044443939155614",
        "isVisible": true,
        "src": "groups.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {});
    var label1044443939155616 = new kony.ui.Label({
        "id": "label1044443939155616",
        "isVisible": true,
        "text": "SPA",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [5, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var hbox1044443939155612 = new kony.ui.Box({
        "id": "hbox1044443939155612",
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
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1044443939155612.add(
    image21044443939155614, label1044443939155616);
    var vbox192735980042695 = new kony.ui.Box({
        "id": "vbox192735980042695",
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
    vbox192735980042695.add(
    hbox192735980042714, hbox192735980042779, hbox192735980042797, hbox192735980042815, hbox192735980042833, hbox192735980042851, hbox192735980042869, hbox192735980042887, hbox192735980043205, hbox192735980088345, hbox1044443939155636, hbox1044443939155624, hbox1044443939155612);
    var hbox1040779646123786 = new kony.ui.Box({
        "id": "hbox1040779646123786",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 89,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1040779646123786.add(
    vbox192735980042695);
    var scrollbox1040779646122149 = new kony.ui.ScrollBox({
        "id": "scrollbox1040779646122149",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "containerWeight": 39
    }, {});
    scrollbox1040779646122149.add(
    hbox1040779646123786);
    var image2192735980042707 = new kony.ui.Image2({
        "id": "image2192735980042707",
        "isVisible": true,
        "src": "person.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 35,
        "referenceHeight": 32,
        "paddingInPixel": false,
        "containerWeight": 23
    }, {});
    var label192735980042708 = new kony.ui.Label({
        "id": "label192735980042708",
        "isVisible": true,
        "text": "KonyOne 5.0",
        "skin": "lblBlue"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
        "containerWeight": 15,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980042706.add(
    image2192735980042707, label192735980042708);
    var lblScroll1 = new kony.ui.Label({
        "id": "lblScroll1",
        "isVisible": true,
        "text": "KonyOne provides a world-class development environment and mobile middleware for both business & consumer applications. KonyOne incorporates industry - tested scalability and supports every technology and deployment option available today - including truly native apps on all native OSs, thousands of devices including those with HTML5 capable browser, Single Page Applications, Wrappers, Hybrids, and traditional URL-based applications.",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 8
    }, {
        "textCopyable": false
    });
    var scrollbox1927359800110223 = new kony.ui.ScrollBox({
        "id": "scrollbox1927359800110223",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 61
    }, {});
    scrollbox1927359800110223.add(
    hbox192735980042706, lblScroll1);
    var hbox1040779646122142 = new kony.ui.Box({
        "id": "hbox1040779646122142",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 73,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1040779646122142.add(
    scrollbox1040779646122149, scrollbox1927359800110223);
    frmScrollSPA.add(
    scrollbox1045367460110592, hbox1040779646122142);
};

function frmScrollSPAGlobals() {
    var MenuId = [];
    frmScrollSPA = new kony.ui.Form2({
        "id": "frmScrollSPA",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmScrollSPA
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
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
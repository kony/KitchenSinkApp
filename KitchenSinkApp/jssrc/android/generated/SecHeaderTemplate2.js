//Template File
function initializeSecHeaderTemplate2() {
    var lblSecHdr1 = new kony.ui.Label({
        "id": "lblSecHdr1",
        "isVisible": true,
        "text": "Label",
        "skin": "lblGradiantBG"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 0, 1, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 46
    }, {
        "textCopyable": false
    });
    var lblSecHdr2 = new kony.ui.Label({
        "id": "lblSecHdr2",
        "isVisible": true,
        "text": "Label",
        "skin": "lblGradiantBG"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 2, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 46
    }, {
        "textCopyable": false
    });
    var vbox120944992024383 = new kony.ui.Box({
        "id": "vbox120944992024383",
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
    vbox120944992024383.add(
    lblSecHdr1, lblSecHdr2);
    boxRefSegHdr1 = new kony.ui.Box({
        "id": "boxRefSegHdr1",
        "isVisible": true,
        "skin": "hBoxSegHdr1",
        "focusSkin": "hBoxSegHdr",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    boxRefSegHdr1.add(
    vbox120944992024383);
};
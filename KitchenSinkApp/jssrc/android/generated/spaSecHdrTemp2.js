//Template File
function initializespaSecHdrTemp2() {
    var lblSecHdr1 = new kony.ui.Label({
        "id": "lblSecHdr1",
        "isVisible": true,
        "text": "Label",
        "skin": "lblVerdana"
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
        "skin": "lblVerdana"
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
        "containerWeight": 50,
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
    var lblSecHdr3 = new kony.ui.Label({
        "id": "lblSecHdr3",
        "isVisible": true,
        "text": "Label",
        "skin": "lblVerdana"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 49
    }, {
        "textCopyable": false
    });
    hbxSegHdrTemp2 = new kony.ui.Box({
        "id": "hbxSegHdrTemp2",
        "isVisible": true,
        "skin": "hBoxWhite",
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
    hbxSegHdrTemp2.add(
    vbox120944992024383, lblSecHdr3);
};
//Template File
function initializedynamicRowTemplate2() {
    var lbl7 = new kony.ui.Label({
        "id": "lbl7",
        "isVisible": true,
        "text": "Name",
        "skin": "lblWhite1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 50
    }, {
        "textCopyable": false
    });
    var lbl8 = new kony.ui.Label({
        "id": "lbl8",
        "isVisible": true,
        "text": ": Joseph",
        "skin": "lblWhite1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 50
    }, {
        "textCopyable": false
    });
    hbx1 = new kony.ui.Box({
        "id": "hbx1",
        "isVisible": true,
        "skin": "hBoxRT3",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbx1.add(
    lbl7, lbl8);
};
//Template File
function hdrIconEdit_button15633488265515_onClick_seq0(eventobject) {
    frmSegmentMoreFeatures.show();
};

function hdrIconEdit_button117822895620523_onClick_seq0(eventobject) {
    editOrDone.call(this, eventobject);
};

function initializehdrIconEdit() {
    hbox117822895620695 = new kony.ui.BoxTemplate({
        "id": "hbox117822895620695",
        "isVisible": true,
        "skin": "hboxIconEdit",
        "focusSkin": "hboxIconEdit",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox117822895620695
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox117822895620695() {
        var button15633488265515 = new kony.ui.Button({
            "id": "button15633488265515",
            "isVisible": true,
            "text": "Back",
            "skin": "btnBack2",
            "focusSkin": "btnBack",
            "onClick": hdrIconEdit_button15633488265515_onClick_seq0
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": true,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 35
        }, {});
        var vbox117822895620239 = new kony.ui.Box({
            "id": "vbox117822895620239",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 19,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox117822895620239.add(
        button15633488265515);
        var label15633488265532 = new kony.ui.Label({
            "id": "label15633488265532",
            "isVisible": true,
            "text": "Icon edit style",
            "skin": "lblGrayTitleIconEditStyle"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [6, 15, 6, 15],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": true,
            "containerWeight": 62
        }, {
            "textCopyable": false
        });
        var button117822895620523 = new kony.ui.Button({
            "id": "button117822895620523",
            "isVisible": true,
            "text": "Edit",
            "skin": "btnEdit",
            "focusSkin": "btnEdit",
            "onClick": hdrIconEdit_button117822895620523_onClick_seq0
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 19
        }, {
            "pressedSkin": "btnEdit"
        });
        hbox117822895620695.add(
        vbox117822895620239, label15633488265532, button117822895620523);
    }
};
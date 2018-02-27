//Template File
function hdrSearch_tbxSearchORE_onTextChange_seq0(eventobject, changedtext) {
    displaySearch.call(this, changedtext);
};

function initializehdrSearch() {
    hbxHeadSearchORE = new kony.ui.BoxTemplate({
        "id": "hbxHeadSearchORE",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbxHeadSearchORE
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

    function addWidgetshbxHeadSearchORE() {
        var tbxSearchORE = new kony.ui.TextBox2({
            "id": "tbxSearchORE",
            "isVisible": true,
            "text": null,
            "secureTextEntry": false,
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "placeholder": null,
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "onTextChange": hdrSearch_tbxSearchORE_onTextChange_seq0,
            "skin": "textBoxNormal",
            "focusSkin": "textBoxFocus",
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "autoFilter": false,
            "viewType": constants.TEXTBOX_VIEW_TYPE_SEARCH_VIEW
        });
        hbxHeadSearchORE.add(
        tbxSearchORE);
    }
};
//Form JS File
function frmComplex_frmComplex_onOrientationChange_seq0(eventobject, neworientation) {
    if (kony.os.getDeviceCurrentOrientation() == constants.DEVICE_ORIENTATION_PORTRAIT) frmComplex.lblComplex.text = "Please rotate the device to observe Landscape mode";
    else if (kony.os.getDeviceCurrentOrientation() == constants.DEVICE_ORIENTATION_LANDSCAPE) frmComplex.lblComplex.text = "Please rotate the device to observe Portrait mode";
    else {}
};

function addWidgetsfrmComplex() {
    var lblComplex = new kony.ui.Label({
        "id": "lblComplex",
        "isVisible": true,
        "text": "Please rotate the device to observe Landscape mode",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 4, 6, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 100
    }, {
        "textCopyable": false
    });
    var hbox121043302135574 = new kony.ui.Box({
        "id": "hbox121043302135574",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121043302135574.add(
    lblComplex);
    var label121043302135331 = new kony.ui.Label({
        "id": "label121043302135331",
        "isVisible": true,
        "text": "Platinum Account  PA12345",
        "skin": "lblMainRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 2, 1, 2],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var label121043302135335 = new kony.ui.Label({
        "id": "label121043302135335",
        "isVisible": true,
        "text": "Total",
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 3, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "textCopyable": false
    });
    var label121043302135336 = new kony.ui.Label({
        "id": "label121043302135336",
        "isVisible": true,
        "text": "Asset Value",
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 0, 3],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 41
    }, {
        "textCopyable": false
    });
    var vbox121043302135333 = new kony.ui.Box({
        "id": "vbox121043302135333",
        "isVisible": true,
        "skin": "vBoxTrans",
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 69,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox121043302135333.add(
    label121043302135335, label121043302135336);
    var label121043302135334 = new kony.ui.Label({
        "id": "label121043302135334",
        "isVisible": true,
        "text": "$ 3,244",
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 2, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {
        "textCopyable": false
    });
    var hbox121043302135332 = new kony.ui.Box({
        "id": "hbox121043302135332",
        "isVisible": true,
        "skin": "hBoxWhite",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 65,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121043302135332.add(
    vbox121043302135333, label121043302135334);
    var vbox121043302135330 = new kony.ui.Box({
        "id": "vbox121043302135330",
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
    vbox121043302135330.add(
    label121043302135331, hbox121043302135332);
    var hbox121043302135328 = new kony.ui.Box({
        "id": "hbox121043302135328",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
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
    hbox121043302135328.add(
    vbox121043302135330);
    var segment2121043302135337box = new kony.ui.Box({
        "id": "segment2121043302135337box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 64
    }, {});
    var segment2121043302135337 = new kony.ui.SegmentedUI2({
        "id": "segment2121043302135337",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbox121043302135338": "hbox121043302135338",
            "hbox121043302135415": "hbox121043302135415",
            "label121043302135481": "label121043302135481",
            "label121043302135341": "label121043302135341",
            "hbox121043302135439": "hbox121043302135439",
            "vbox121043302135339": "vbox121043302135339",
            "hbox121043302135479": "hbox121043302135479",
            "label121043302135417": "label121043302135417",
            "label121043302135419": "label121043302135419",
            "line121043302135631": "line121043302135631",
            "line121043302135630": "line121043302135630",
            "line121043302135632": "line121043302135632",
            "hbox121043302135343": "hbox121043302135343",
            "hbox121043302135346": "hbox121043302135346",
            "label121043302135347": "label121043302135347",
            "label121043302135621": "label121043302135621",
            "label121043302135445": "label121043302135445",
            "label121043302135349": "label121043302135349",
            "label121043302135348": "label121043302135348",
            "label121043302135342": "label121043302135342",
            "label121043302135441": "label121043302135441",
            "label121043302135485": "label121043302135485",
            "label121043302135345": "label121043302135345",
            "label121043302135344": "label121043302135344",
            "label121043302135421": "label121043302135421",
            "label121043302135443": "label121043302135443"
        },
        "data": [{
            "label121043302135481": "Market Cap",
            "label121043302135341": "Wal-Mart Stores Inc.",
            "label121043302135417": "Avg Volume",
            "label121043302135419": "5,958,426",
            "label121043302135347": "Price",
            "label121043302135445": "1.02 %",
            "label121043302135621": " ",
            "label121043302135349": "0.00 %",
            "label121043302135348": "73.55",
            "label121043302135342": "WMT: NYSE ",
            "label121043302135441": "P/E Trailing",
            "label121043302135485": "248.9 B",
            "label121043302135345": "Value",
            "label121043302135344": "Difference ",
            "label121043302135421": "0.0002 %",
            "label121043302135443": "15.47x"
        }, {
            "label121043302135481": "Market Cap",
            "label121043302135341": "Disney Walt CO Com",
            "label121043302135417": "Avg Volume",
            "label121043302135419": "7,745,441",
            "label121043302135347": "Price",
            "label121043302135445": "0.92 %",
            "label121043302135621": " ",
            "label121043302135349": "0.00 %",
            "label121043302135348": "50.79",
            "label121043302135342": "DIS: NYSE ",
            "label121043302135441": "P/E Trailing",
            "label121043302135485": "91.1 B",
            "label121043302135345": "Value",
            "label121043302135344": "Difference ",
            "label121043302135421": "0.0001 %",
            "label121043302135443": "16.42x"
        }],
        "Location": "[1,132]",
        "rowTemplate": segment2121043302135337box,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": false,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 64
    }, {});
    var label121043302135341 = new kony.ui.Label({
        "id": "label121043302135341",
        "isVisible": true,
        "skin": "lblMainRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 2, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "textCopyable": false
    });
    var label121043302135342 = new kony.ui.Label({
        "id": "label121043302135342",
        "isVisible": true,
        "skin": "lblGrey"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 41
    }, {
        "textCopyable": false
    });
    var vbox121043302135339 = new kony.ui.Box({
        "id": "vbox121043302135339",
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
    vbox121043302135339.add(
    label121043302135341, label121043302135342);
    var hbox121043302135338 = new kony.ui.Box({
        "id": "hbox121043302135338",
        "isVisible": true,
        "skin": "hbxTop",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
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
    hbox121043302135338.add(
    vbox121043302135339);
    var label121043302135621 = new kony.ui.Label({
        "id": "label121043302135621",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var label121043302135345 = new kony.ui.Label({
        "id": "label121043302135345",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 28
    }, {
        "textCopyable": false
    });
    var label121043302135344 = new kony.ui.Label({
        "id": "label121043302135344",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 32
    }, {
        "textCopyable": false
    });
    var hbox121043302135343 = new kony.ui.Box({
        "id": "hbox121043302135343",
        "isVisible": true,
        "skin": "hbxBal",
        "position": constants.BOX_POSITION_AS_NORMAL,
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
    hbox121043302135343.add(
    label121043302135621, label121043302135345, label121043302135344);
    var label121043302135347 = new kony.ui.Label({
        "id": "label121043302135347",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var label121043302135348 = new kony.ui.Label({
        "id": "label121043302135348",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var label121043302135349 = new kony.ui.Label({
        "id": "label121043302135349",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var hbox121043302135346 = new kony.ui.Box({
        "id": "hbox121043302135346",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121043302135346.add(
    label121043302135347, label121043302135348, label121043302135349);
    var line121043302135630 = new kony.ui.Line({
        "id": "line121043302135630",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    var label121043302135417 = new kony.ui.Label({
        "id": "label121043302135417",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var label121043302135419 = new kony.ui.Label({
        "id": "label121043302135419",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var label121043302135421 = new kony.ui.Label({
        "id": "label121043302135421",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var hbox121043302135415 = new kony.ui.Box({
        "id": "hbox121043302135415",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121043302135415.add(
    label121043302135417, label121043302135419, label121043302135421);
    var line121043302135631 = new kony.ui.Line({
        "id": "line121043302135631",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    var label121043302135441 = new kony.ui.Label({
        "id": "label121043302135441",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var label121043302135443 = new kony.ui.Label({
        "id": "label121043302135443",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var label121043302135445 = new kony.ui.Label({
        "id": "label121043302135445",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "textCopyable": false
    });
    var hbox121043302135439 = new kony.ui.Box({
        "id": "hbox121043302135439",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121043302135439.add(
    label121043302135441, label121043302135443, label121043302135445);
    var line121043302135632 = new kony.ui.Line({
        "id": "line121043302135632",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    var label121043302135481 = new kony.ui.Label({
        "id": "label121043302135481",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 0, 2],
        "padding": [2, 1, 2, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 51
    }, {
        "textCopyable": false
    });
    var label121043302135485 = new kony.ui.Label({
        "id": "label121043302135485",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 2, 0, 2],
        "padding": [2, 1, 20, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 49
    }, {
        "textCopyable": false
    });
    var hbox121043302135479 = new kony.ui.Box({
        "id": "hbox121043302135479",
        "isVisible": true,
        "skin": "hbxBottom",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121043302135479.add(
    label121043302135481, label121043302135485);
    segment2121043302135337box.add(
    hbox121043302135338, hbox121043302135343, hbox121043302135346, line121043302135630, hbox121043302135415, line121043302135631, hbox121043302135439, line121043302135632, hbox121043302135479);
    frmComplex.add(
    hbox121043302135574, hbox121043302135328, segment2121043302135337);
};

function frmComplexGlobals() {
    var MenuId = [];
    frmComplex = new kony.ui.Form2({
        "id": "frmComplex",
        "needAppMenu": true,
        "title": "Auto Resize",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "onOrientationChange": frmComplex_frmComplex_onOrientationChange_seq0,
        "addWidgets": addWidgetsfrmComplex
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
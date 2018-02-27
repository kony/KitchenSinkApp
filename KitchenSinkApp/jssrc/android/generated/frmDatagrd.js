//Form JS File
function addWidgetsfrmDatagrd() {
    var label118085056438503 = new kony.ui.Label({
        "id": "label118085056438503",
        "isVisible": true,
        "text": "Default datagrid",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 12, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var datagrid103994549624149 = new kony.ui.DataGrid({
        "id": "datagrid103994549624149",
        "isVisible": true,
        "info": {},
        "data": [{
            "a": "A",
            "b": "E",
            "c": "HELLO"
        }, {
            "a": "B",
            "b": "D",
            "c": "WORLD"
        }, {
            "a": "C",
            "b": "C",
            "c": "HELLO"
        }, {
            "a": "D",
            "b": "B",
            "c": "WORLD"
        }, {
            "a": "E",
            "b": "A",
            "c": "HELLO"
        }],
        "showColumnHeaders": true,
        "isMultiSelect": false,
        "headerSkin": "dgHead",
        "rowNormalSkin": "dgRow",
        "rowAlternateSkin": "dgRow",
        "rowFocusSkin": "dgFocus",
        "columnHeadersConfig": [{
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "a",
            "columnHeaderText": "First",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }, {
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "b",
            "columnHeaderText": "Second",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }, {
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "c",
            "columnHeaderText": "Third",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }]
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [12, 4, 12, 4],
        "padding": [3, 6, 3, 6],
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 12
    }, {
        "gridlineColor": "5c5c5c00"
    });
    var label118085056438537 = new kony.ui.Label({
        "id": "label118085056438537",
        "isVisible": true,
        "text": "Datagrid with images",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var datagrid118085056438159 = new kony.ui.DataGrid({
        "id": "datagrid118085056438159",
        "isVisible": true,
        "info": {},
        "data": [{
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }, {
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }, {
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }, {
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }],
        "showColumnHeaders": true,
        "isMultiSelect": false,
        "headerSkin": "dgHead",
        "rowNormalSkin": "dgRow",
        "rowAlternateSkin": "dgRow",
        "rowFocusSkin": "dgFocus",
        "columnHeadersConfig": [{
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Audi",
            "columnHeaderText": "Audi",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }, {
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Ford",
            "columnHeaderText": "Ford",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }, {
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Skoda",
            "columnHeaderText": "Skoda",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }]
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "containerWeight": 9
    }, {
        "gridlineColor": "5c5c5c00"
    });
    var label118085056439129 = new kony.ui.Label({
        "id": "label118085056439129",
        "isVisible": true,
        "text": "Datagrid with Row skins",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var datagrid118085056439309 = new kony.ui.DataGrid({
        "id": "datagrid118085056439309",
        "isVisible": true,
        "info": {},
        "data": [{
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }, {
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }, {
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }, {
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }],
        "showColumnHeaders": true,
        "isMultiSelect": false,
        "headerSkin": "dgHead",
        "rowNormalSkin": "dGridRowNormal",
        "rowAlternateSkin": "dGridRowNormal",
        "rowFocusSkin": "dGridRowFocus",
        "columnHeadersConfig": [{
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Audi",
            "columnHeaderText": "Audi",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }, {
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Ford",
            "columnHeaderText": "Ford",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }, {
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Skoda",
            "columnHeaderText": "Skoda",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }]
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "containerWeight": 9
    }, {
        "gridlineColor": "5c5c5c00"
    });
    var label118085056439396 = new kony.ui.Label({
        "id": "label118085056439396",
        "isVisible": true,
        "text": "Datagrid with Row alternate skins",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var datagrid118085056439441 = new kony.ui.DataGrid({
        "id": "datagrid118085056439441",
        "isVisible": true,
        "info": {},
        "data": [{
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }, {
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }, {
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }, {
            "Audi": "audi.png",
            "Skoda": "skoda.png",
            "Ford": "ford.png"
        }],
        "showColumnHeaders": true,
        "isMultiSelect": false,
        "headerSkin": "dgHead",
        "rowNormalSkin": "dgRow",
        "rowAlternateSkin": "dGridRowNormal",
        "rowFocusSkin": "dgFocus",
        "columnHeadersConfig": [{
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Audi",
            "columnHeaderText": "Audi",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }, {
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Ford",
            "columnHeaderText": "Ford",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }, {
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Skoda",
            "columnHeaderText": "Skoda",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }]
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "containerWeight": 9
    }, {
        "gridlineColor": "5c5c5c00"
    });
    var label1181029310128738 = new kony.ui.Label({
        "id": "label1181029310128738",
        "isVisible": true,
        "text": "Datagrid with Text and Image",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var datagrid1181029310128779 = new kony.ui.DataGrid({
        "id": "datagrid1181029310128779",
        "isVisible": true,
        "info": {},
        "data": [{
            "Audi": "A",
            "Skoda": "skoda.png",
            "Ford": "F"
        }, {
            "Audi": "A",
            "Skoda": "skoda.png",
            "Ford": "F"
        }, {
            "Audi": "A",
            "Skoda": "skoda.png",
            "Ford": "F"
        }, {
            "Audi": "A",
            "Skoda": "skoda.png",
            "Ford": "F"
        }],
        "showColumnHeaders": true,
        "isMultiSelect": false,
        "headerSkin": "dgHead",
        "rowNormalSkin": "dgRow",
        "rowAlternateSkin": "dgRow",
        "rowFocusSkin": "dgFocus",
        "columnHeadersConfig": [{
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Audi",
            "columnHeaderText": "Audi",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }, {
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Ford",
            "columnHeaderText": "Ford",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }, {
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "columnOnClick": null,
            "columnID": "Skoda",
            "columnHeaderText": "Skoda",
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "isColumnSortable": false
        }]
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "containerWeight": 9
    }, {
        "gridlineColor": "5c5c5c00"
    });
    frmDatagrd.add(
    label118085056438503, datagrid103994549624149, label118085056438537, datagrid118085056438159, label118085056439129, datagrid118085056439309, label118085056439396, datagrid118085056439441, label1181029310128738, datagrid1181029310128779);
};

function frmDatagrdGlobals() {
    var MenuId = [];
    frmDatagrd = new kony.ui.Form2({
        "id": "frmDatagrd",
        "needAppMenu": true,
        "title": "DataGrid",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmDatagrd
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
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
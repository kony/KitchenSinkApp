//Form JS File
function frmWebSQL_frmWebSQL_preshow_seq0(eventobject, neworientation) {
    frmWebSQL.lblWebSqlUpdate.text = ""
};

function frmWebSQL_btnCreateDB_onClick_seq0(eventobject) {
    createDB.call(this);
};

function frmWebSQL_button1930040990147039_onClick_seq0(eventobject) {
    doTransactioninsertData.call(this);
};

function frmWebSQL_button1930040990147063_onClick_seq0(eventobject) {
    doTransactionsqlSelect.call(this);
};

function frmWebSQL_button1930040990147077_onClick_seq0(eventobject) {
    doTransactionUpdate.call(this);
};

function frmWebSQL_button1930040990147091_onClick_seq0(eventobject) {
    doTransactionDelete.call(this);
};

function addWidgetsfrmWebSQL() {
    var btnCreateDB = new kony.ui.Button({
        "id": "btnCreateDB",
        "isVisible": true,
        "text": "Create database",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmWebSQL_btnCreateDB_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1930040990147039 = new kony.ui.Button({
        "id": "button1930040990147039",
        "isVisible": true,
        "text": "Insert data",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmWebSQL_button1930040990147039_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1930040990147063 = new kony.ui.Button({
        "id": "button1930040990147063",
        "isVisible": true,
        "text": "Show data",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmWebSQL_button1930040990147063_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1930040990147077 = new kony.ui.Button({
        "id": "button1930040990147077",
        "isVisible": true,
        "text": "Update data",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmWebSQL_button1930040990147077_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1930040990147091 = new kony.ui.Button({
        "id": "button1930040990147091",
        "isVisible": true,
        "text": "Delete data",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmWebSQL_button1930040990147091_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lblWebSqlUpdate = new kony.ui.Label({
        "id": "lblWebSqlUpdate",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [11, 11, 6, 6],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmWebSQL.add(
    btnCreateDB, button1930040990147039, button1930040990147063, button1930040990147077, button1930040990147091, lblWebSqlUpdate);
};

function frmWebSQLGlobals() {
    var MenuId = [];
    frmWebSQL = new kony.ui.Form2({
        "id": "frmWebSQL",
        "needAppMenu": true,
        "title": "WebSQL",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmWebSQL_frmWebSQL_preshow_seq0,
        "addWidgets": addWidgetsfrmWebSQL
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
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
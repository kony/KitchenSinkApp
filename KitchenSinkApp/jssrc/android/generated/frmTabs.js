//Form JS File
function frmTabs_button117989725229932_onClick_seq0(eventobject) {
    frmTabDefault.show();
};

function frmTabs_button1041822331265_onClick_seq0(eventobject) {
    frmTabCollpasible.show();
};

function frmTabs_button1181029310128010_onClick_seq0(eventobject) {
    frmToggleTabs.show();
};

function frmTabs_button1181029310128024_onClick_seq0(eventobject) {
    frmCustomCollapsTab.show();
};

function frmTabs_button1181029310128038_onClick_seq0(eventobject) {
    frmTabScreenLevel.show();
};

function addWidgetsfrmTabs() {
    var button117989725229932 = new kony.ui.Button({
        "id": "button117989725229932",
        "isVisible": true,
        "text": "Default view",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmTabs_button117989725229932_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 15, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button1041822331265 = new kony.ui.Button({
        "id": "button1041822331265",
        "isVisible": true,
        "text": "Collapsible view",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmTabs_button1041822331265_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button1181029310128010 = new kony.ui.Button({
        "id": "button1181029310128010",
        "isVisible": true,
        "text": "Toggle tabs",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmTabs_button1181029310128010_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button1181029310128024 = new kony.ui.Button({
        "id": "button1181029310128024",
        "isVisible": true,
        "text": "Tab image positions",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmTabs_button1181029310128024_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button1181029310128038 = new kony.ui.Button({
        "id": "button1181029310128038",
        "isVisible": true,
        "text": "Screen level tabpane",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmTabs_button1181029310128038_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    frmTabs.add(
    button117989725229932, button1041822331265, button1181029310128010, button1181029310128024, button1181029310128038);
};

function frmTabsGlobals() {
    var MenuId = [];
    frmTabs = new kony.ui.Form2({
        "id": "frmTabs",
        "needAppMenu": true,
        "title": "Tabs",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmTabs
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
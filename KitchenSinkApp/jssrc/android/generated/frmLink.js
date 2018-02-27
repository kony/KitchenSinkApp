//Form JS File
function frmLink_link117709689852615_onClick_seq0(eventobject) {
    kony.application.openURL("http://www.konylabs.com");
};

function frmLink_link1181029310129233_onClick_seq0(eventobject) {
    kony.application.openURL("http://www.konylabs.com");
};

function frmLink_link1181029310129249_onClick_seq0(eventobject) {
    kony.application.openURL("http://www.konylabs.com");
};

function frmLink_link1181029310129279_onClick_seq0(eventobject) {
    kony.application.openURL("http://www.konylabs.com");
};

function addWidgetsfrmLink() {
    var label1181029310129215 = new kony.ui.Label({
        "id": "label1181029310129215",
        "isVisible": true,
        "text": "Default Link",
        "skin": "lblSub1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 0, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var link117709689852615 = new kony.ui.Link({
        "id": "link117709689852615",
        "isVisible": true,
        "text": "Welcome to Kony",
        "skin": "lnkNormal",
        "focusSkin": "lnkNormal",
        "onClick": frmLink_link117709689852615_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [3, 12, 3, 12],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var label1181029310129223 = new kony.ui.Label({
        "id": "label1181029310129223",
        "isVisible": true,
        "text": "Link with background color",
        "skin": "lblSub1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 0, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var link1181029310129233 = new kony.ui.Link({
        "id": "link1181029310129233",
        "isVisible": true,
        "text": "Welcome to Kony",
        "skin": "linkSkn",
        "focusSkin": "linkBckColFoc",
        "onClick": frmLink_link1181029310129233_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [3, 12, 3, 12],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var label1181029310129241 = new kony.ui.Label({
        "id": "label1181029310129241",
        "isVisible": true,
        "text": "Link with vertical gradient",
        "skin": "lblSub1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 0, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var link1181029310129249 = new kony.ui.Link({
        "id": "link1181029310129249",
        "isVisible": true,
        "text": "Welcome to Kony",
        "skin": "lnkVertiGrad",
        "focusSkin": "linkVertiGradFoc",
        "onClick": frmLink_link1181029310129249_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [3, 12, 3, 12],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var label1181029310129269 = new kony.ui.Label({
        "id": "label1181029310129269",
        "isVisible": true,
        "text": "Link with vertical split",
        "skin": "lblSub1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 0, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var link1181029310129279 = new kony.ui.Link({
        "id": "link1181029310129279",
        "isVisible": true,
        "text": "Welcome to Kony",
        "skin": "lnkVertiSplit",
        "focusSkin": "LinkVertiSplitFoc",
        "onClick": frmLink_link1181029310129279_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [3, 12, 3, 12],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    frmLink.add(
    label1181029310129215, link117709689852615, label1181029310129223, link1181029310129233, label1181029310129241, link1181029310129249, label1181029310129269, link1181029310129279);
};

function frmLinkGlobals() {
    var MenuId = [];
    frmLink = new kony.ui.Form2({
        "id": "frmLink",
        "needAppMenu": true,
        "title": "Link",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmLink
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
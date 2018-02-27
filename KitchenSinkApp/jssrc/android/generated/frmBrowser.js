//Form JS File
function frmBrowser_btnInlineBack_onClick_seq0(eventobject) {
    frmBrowser.brwDemo.goBack()
};

function frmBrowser_btnInlineForward_onClick_seq0(eventobject) {
    frmBrowser.brwDemo.goForward()
};

function frmBrowser_btnInlineReload_onClick_seq0(eventobject) {
    frmBrowser.brwDemo.reload()
};

function addWidgetsfrmBrowser() {
    var btnInlineBack = new kony.ui.Button({
        "id": "btnInlineBack",
        "isVisible": true,
        "text": "Back",
        "skin": "btnLeft",
        "focusSkin": "btnFocHalfRoundLeft",
        "onClick": frmBrowser_btnInlineBack_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var btnInlineForward = new kony.ui.Button({
        "id": "btnInlineForward",
        "isVisible": true,
        "text": "Forward",
        "skin": "btnMiddle",
        "focusSkin": "btnFocHalfRound",
        "onClick": frmBrowser_btnInlineForward_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var btnInlineReload = new kony.ui.Button({
        "id": "btnInlineReload",
        "isVisible": true,
        "text": "Reload",
        "skin": "btnRight",
        "focusSkin": "btnFocHalfRoundRight",
        "onClick": frmBrowser_btnInlineReload_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {});
    var hbxInLineBrowser = new kony.ui.Box({
        "id": "hbxInLineBrowser",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 5, 2, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxInLineBrowser.add(
    btnInlineBack, btnInlineForward, btnInlineReload);
    var brwDemo = new kony.ui.Browser({
        "id": "brwDemo",
        "text": "Browser",
        "isVisible": true,
        "detectTelNumber": true,
        "screenLevelWidget": false,
        "enableZoom": false
    }, {
        "margin": [1, 15, 1, 1],
        "containerHeight": null,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 89
    }, {});
    frmBrowser.add(
    hbxInLineBrowser, brwDemo);
};

function frmBrowserGlobals() {
    var MenuId = [];
    frmBrowser = new kony.ui.Form2({
        "id": "frmBrowser",
        "needAppMenu": true,
        "title": "Browser",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmBrowser
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
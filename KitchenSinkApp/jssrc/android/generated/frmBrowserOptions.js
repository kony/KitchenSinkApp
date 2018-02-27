//Form JS File
function frmBrowserOptions_frmBrowserOptions_preshow_seq0(eventobject, neworientation) {
    frmBrowser.destroy()
};

function frmBrowserOptions_btnStaticHTML_onClick_seq0(eventobject) {
    browserOptions.call(this, eventobject);
};

function frmBrowserOptions_btnDynamicURL_onClick_seq0(eventobject) {
    browserOptions.call(this, eventobject);
};

function frmBrowserOptions_btnInLineBrowser_onClick_seq0(eventobject) {
    browserOptions.call(this, eventobject);
};

function frmBrowserOptions_button192840248542398_onClick_seq0(eventobject) {
    browserOptions.call(this, eventobject);
};

function frmBrowserOptions_button192840248542498_onClick_seq0(eventobject) {
    browserOptions.call(this, eventobject);
};

function addWidgetsfrmBrowserOptions() {
    var btnStaticHTML = new kony.ui.Button({
        "id": "btnStaticHTML",
        "isVisible": true,
        "text": "Browser with static content",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBrowserOptions_btnStaticHTML_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 15, 12, 15],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnDynamicURL = new kony.ui.Button({
        "id": "btnDynamicURL",
        "isVisible": true,
        "text": "Browser with dynamic content",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBrowserOptions_btnDynamicURL_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 0, 12, 15],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnInLineBrowser = new kony.ui.Button({
        "id": "btnInLineBrowser",
        "isVisible": true,
        "text": "Browser with inline Navigation",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBrowserOptions_btnInLineBrowser_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 0, 12, 12],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button192840248542398 = new kony.ui.Button({
        "id": "button192840248542398",
        "isVisible": true,
        "text": "Detect Telephone numbers",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBrowserOptions_button192840248542398_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 0, 12, 15],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button192840248542498 = new kony.ui.Button({
        "id": "button192840248542498",
        "isVisible": true,
        "text": "Enable Zoom property of Browser",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBrowserOptions_button192840248542498_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 0, 12, 15],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmBrowserOptions.add(
    btnStaticHTML, btnDynamicURL, btnInLineBrowser, button192840248542398, button192840248542498);
};

function frmBrowserOptionsGlobals() {
    var MenuId = [];
    frmBrowserOptions = new kony.ui.Form2({
        "id": "frmBrowserOptions",
        "needAppMenu": true,
        "title": "Browser",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmBrowserOptions_frmBrowserOptions_preshow_seq0,
        "addWidgets": addWidgetsfrmBrowserOptions
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
//Form JS File
function frmSegViews_button117989725232057_onClick_seq0(eventobject) {
    frmSegTableView.show();
};

function frmSegViews_button117989725232069_onClick_seq0(eventobject) {
    frmSegPageView.show();
};

function frmSegViews_button117989725232081_onClick_seq0(eventobject) {
    frmSegCoverFlowView.show();
};

function frmSegViews_button192735980060449_onClick_seq0(eventobject) {
    frmSegCustomPageIndicator.show();
};

function addWidgetsfrmSegViews() {
    var button117989725232057 = new kony.ui.Button({
        "id": "button117989725232057",
        "isVisible": true,
        "text": "Table view",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegViews_button117989725232057_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "padding": [3, 12, 3, 12],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var button117989725232069 = new kony.ui.Button({
        "id": "button117989725232069",
        "isVisible": true,
        "text": "Page view",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegViews_button117989725232069_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "padding": [3, 12, 3, 12],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var button117989725232081 = new kony.ui.Button({
        "id": "button117989725232081",
        "isVisible": true,
        "text": "Coverflow view",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegViews_button117989725232081_onClick_seq0
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
    var button192735980060449 = new kony.ui.Button({
        "id": "button192735980060449",
        "isVisible": true,
        "text": "Page indicator at bottom",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSegViews_button192735980060449_onClick_seq0
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
    frmSegViews.add(
    button117989725232057, button117989725232069, button117989725232081, button192735980060449);
};

function frmSegViewsGlobals() {
    var MenuId = [];
    frmSegViews = new kony.ui.Form2({
        "id": "frmSegViews",
        "needAppMenu": true,
        "title": "Segment",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegViews
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
//Form JS File
function frmTtlbarOptions_button117989725234834_onClick_seq0(eventobject) {
    frmTtlbarDefault.show();
};

function frmTtlbarOptions_button117989725234842_onClick_seq0(eventobject) {
    frmTtlbarBgColor.show();
};

function frmTtlbarOptions_button117989725234848_onClick_seq0(eventobject) {
    frmTtlbarBgImg.show();
};

function addWidgetsfrmTtlbarOptions() {
    var button117989725234834 = new kony.ui.Button({
        "id": "button117989725234834",
        "isVisible": true,
        "text": "Default titlebar",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmTtlbarOptions_button117989725234834_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var button117989725234842 = new kony.ui.Button({
        "id": "button117989725234842",
        "isVisible": true,
        "text": "Titlebar with background color",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmTtlbarOptions_button117989725234842_onClick_seq0
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
    var button117989725234848 = new kony.ui.Button({
        "id": "button117989725234848",
        "isVisible": true,
        "text": "Titlebar with background image",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmTtlbarOptions_button117989725234848_onClick_seq0
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
    frmTtlbarOptions.add(
    button117989725234834, button117989725234842, button117989725234848);
};

function frmTtlbarOptionsGlobals() {
    var MenuId = [];
    frmTtlbarOptions = new kony.ui.Form2({
        "id": "frmTtlbarOptions",
        "needAppMenu": true,
        "title": "TitleBar",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmTtlbarOptions
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
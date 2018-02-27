//Form JS File
function frmAppSettings_button1927359800106146_onClick_seq0(eventobject) {
    read.call(this);
};

function frmAppSettings_button1927359800106157_onClick_seq0(eventobject) {
    frmAppSetWrite.show();
};

function addWidgetsfrmAppSettings() {
    var button1927359800106146 = new kony.ui.Button({
        "id": "button1927359800106146",
        "isVisible": true,
        "text": "Read settings",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmAppSettings_button1927359800106146_onClick_seq0
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
    var button1927359800106157 = new kony.ui.Button({
        "id": "button1927359800106157",
        "isVisible": true,
        "text": "Write settings",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmAppSettings_button1927359800106157_onClick_seq0
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
    frmAppSettings.add(
    button1927359800106146, button1927359800106157);
};

function frmAppSettingsGlobals() {
    var MenuId = [];
    frmAppSettings = new kony.ui.Form2({
        "id": "frmAppSettings",
        "needAppMenu": true,
        "title": "App settings",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmAppSettings
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
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
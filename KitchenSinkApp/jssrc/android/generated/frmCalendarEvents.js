//Form JS File
function frmCalendarEvents_frmCalendarEvents_preshow_seq0(eventobject, neworientation) {
    frmCalendarEvents.lblCalendarEvents.text = ""
};

function frmCalendarEvents_button1930040990147922_onClick_seq0(eventobject) {
    CalendarAddEvent.call(this, eventobject);
};

function frmCalendarEvents_button1930040990147932_onClick_seq0(eventobject) {
    CalendarRemoveEvent.call(this);
};

function frmCalendarEvents_button1930040990149625_onClick_seq0(eventobject) {
    CalendarAddEvent.call(this, eventobject);
};

function addWidgetsfrmCalendarEvents() {
    var button1930040990147922 = new kony.ui.Button({
        "id": "button1930040990147922",
        "isVisible": true,
        "text": "Add calendar event",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmCalendarEvents_button1930040990147922_onClick_seq0
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
    var button1930040990147932 = new kony.ui.Button({
        "id": "button1930040990147932",
        "isVisible": true,
        "text": "Remove calendar event",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmCalendarEvents_button1930040990147932_onClick_seq0
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
    var button1930040990149625 = new kony.ui.Button({
        "id": "button1930040990149625",
        "isVisible": true,
        "text": "Confidential  event",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmCalendarEvents_button1930040990149625_onClick_seq0
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
    var lblCalendarEvents = new kony.ui.Label({
        "id": "lblCalendarEvents",
        "isVisible": true,
        "text": null,
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmCalendarEvents.add(
    button1930040990147922, button1930040990147932, button1930040990149625, lblCalendarEvents);
};

function frmCalendarEventsGlobals() {
    var MenuId = [];
    frmCalendarEvents = new kony.ui.Form2({
        "id": "frmCalendarEvents",
        "needAppMenu": true,
        "title": "Calendar events",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmCalendarEvents_frmCalendarEvents_preshow_seq0,
        "addWidgets": addWidgetsfrmCalendarEvents
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
//Form JS File
function addWidgetsfrmCal() {
    var label121049260345 = new kony.ui.Label({
        "id": "label121049260345",
        "isVisible": true,
        "text": "Default view",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var calendar118082077329776 = new kony.ui.Calendar({
        "id": "calendar118082077329776",
        "isVisible": true,
        "dateFormat": "dd/MM/yyyy",
        "viewConfig": {
            gridConfig: {
                "allowWeekendSelectable": true
            }
        },
        "placeholder": null,
        "skin": "calNormal",
        "focusSkin": "calFocus",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "calendarIcon": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "padding": [4, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {});
    var label121049260346 = new kony.ui.Label({
        "id": "label121049260346",
        "isVisible": true,
        "text": "GridOnScreen view",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var calendar685080434386988 = new kony.ui.Calendar({
        "id": "calendar685080434386988",
        "isVisible": true,
        "dateFormat": "dd/MM/yyyy",
        "viewConfig": {
            gridConfig: {
                "allowWeekendSelectable": true
            }
        },
        "placeholder": null,
        "skin": "calNormal",
        "focusSkin": "calFocus",
        "viewType": constants.CALENDAR_VIEW_TYPE_GRID_ONSCREEN,
        "calendarIcon": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [4, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 100
    }, {
        "hideDaysHeader": false,
        "hideMonthsHeader": false,
        "dayTextAlignmentInCell": constants.CONTENT_ALIGN_CENTER,
        "data": {}
    });
    var hbox685080434386974 = new kony.ui.Box({
        "id": "hbox685080434386974",
        "isVisible": true,
        "skin": "hBoxWhite",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [12, 4, 12, 4],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox685080434386974.add(
    calendar685080434386988);
    var label118082077329800 = new kony.ui.Label({
        "id": "label118082077329800",
        "isVisible": true,
        "text": "GridPopup view",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var calendar118082077329814 = new kony.ui.Calendar({
        "id": "calendar118082077329814",
        "isVisible": true,
        "dateFormat": "dd/MM/yyyy",
        "viewConfig": {
            gridConfig: {
                "allowWeekendSelectable": true
            }
        },
        "placeholder": null,
        "skin": "calNormal",
        "focusSkin": "calFocus",
        "viewType": constants.CALENDAR_VIEW_TYPE_GRID_POPUP,
        "calendarIcon": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "padding": [4, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {
        "hideDaysHeader": false,
        "hideMonthsHeader": false,
        "dayTextAlignmentInCell": constants.CONTENT_ALIGN_CENTER,
        "data": {}
    });
    var label1181029310129167 = new kony.ui.Label({
        "id": "label1181029310129167",
        "isVisible": true,
        "text": "Custom Calendar Icon",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var calendar1181029310129177 = new kony.ui.Calendar({
        "id": "calendar1181029310129177",
        "isVisible": true,
        "dateFormat": "dd/MM/yyyy",
        "viewConfig": {
            gridConfig: {
                "allowWeekendSelectable": true
            }
        },
        "placeholder": null,
        "skin": "calNormal",
        "focusSkin": "calNormal",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "calendarIcon": "cal.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 4],
        "padding": [8, 8, 8, 8],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {});
    frmCal.add(
    label121049260345, calendar118082077329776, label121049260346, hbox685080434386974, label118082077329800, calendar118082077329814, label1181029310129167, calendar1181029310129177);
};

function frmCalGlobals() {
    var MenuId = [];
    frmCal = new kony.ui.Form2({
        "id": "frmCal",
        "needAppMenu": true,
        "title": "Calender",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmCal
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
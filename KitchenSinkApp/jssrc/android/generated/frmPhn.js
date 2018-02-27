//Form JS File
function addWidgetsfrmPhn() {
    var label192735980025711 = new kony.ui.Label({
        "id": "label192735980025711",
        "isVisible": true,
        "text": "Default phone",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 12, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var phone103994549624276 = new kony.ui.Button({
        "id": "phone103994549624276",
        "isVisible": true,
        "text": "123-456-7890",
        "skin": "phoneNormal",
        "focusSkin": "phoneFocus",
        "onClick": makeCall
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "padding": [3, 11, 3, 11],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var label192735980025719 = new kony.ui.Label({
        "id": "label192735980025719",
        "isVisible": true,
        "text": "Phone with image background",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var phone192735980025729 = new kony.ui.Button({
        "id": "phone192735980025729",
        "isVisible": true,
        "text": "123-456-7890",
        "skin": "phnImg",
        "focusSkin": "phoneFocus",
        "onClick": makeCall
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    frmPhn.add(
    label192735980025711, phone103994549624276, label192735980025719, phone192735980025729);
};

function frmPhnGlobals() {
    var MenuId = [];
    frmPhn = new kony.ui.Form2({
        "id": "frmPhn",
        "needAppMenu": true,
        "title": "Phone",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmPhn
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
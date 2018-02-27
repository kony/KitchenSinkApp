//Form JS File
function addWidgetsfrmHdrFooter() {
    var label192735980025497 = new kony.ui.Label({
        "id": "label192735980025497",
        "isVisible": true,
        "text": "Kony Logo which is shown above is the fixed header",
        "skin": "lblSub1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var label192735980025507 = new kony.ui.Label({
        "id": "label192735980025507",
        "isVisible": true,
        "text": "When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. ",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 14
    }, {
        "textCopyable": false
    });
    var label192735980025549 = new kony.ui.Label({
        "id": "label192735980025549",
        "isVisible": true,
        "text": "Copyright which is shown below is the fixed footer",
        "skin": "lblSub1"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmHdrFooter.add(
    label192735980025497, label192735980025507, label192735980025549);
};

function frmHdrFooterGlobals() {
    var MenuId = [];
    frmHdrFooter = new kony.ui.Form2({
        "id": "frmHdrFooter",
        "needAppMenu": true,
        "title": "Form",
        "headers": [hbox1180105789135330],
        "footers": [hbox192735980024368],
        "enabledForIdleTimeout": false,
        "skin": "frmBlue1",
        "addWidgets": addWidgetsfrmHdrFooter
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
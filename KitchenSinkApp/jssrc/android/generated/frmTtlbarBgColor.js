//Form JS File
function addWidgetsfrmTtlbarBgColor() {
    var labeltitleBack = new kony.ui.Label({
        "id": "labeltitleBack",
        "isVisible": true,
        "text": "Look at the customized look of  titlebar ( with background color ) above.",
        "skin": "lblSub"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 7, 6, 6],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmTtlbarBgColor.add(
    labeltitleBack);
};

function frmTtlbarBgColorGlobals() {
    var MenuId = [];
    frmTtlbarBgColor = new kony.ui.Form2({
        "id": "frmTtlbarBgColor",
        "needAppMenu": true,
        "title": "Titlebar",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmTtlbarBgColor
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "title",
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
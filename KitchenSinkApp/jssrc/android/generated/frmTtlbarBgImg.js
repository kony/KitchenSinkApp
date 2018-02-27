//Form JS File
function addWidgetsfrmTtlbarBgImg() {
    var labeltitleBack1 = new kony.ui.Label({
        "id": "labeltitleBack1",
        "isVisible": true,
        "text": "Look at the customized look of  titlebar (with background image) above.",
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
    frmTtlbarBgImg.add(
    labeltitleBack1);
};

function frmTtlbarBgImgGlobals() {
    var MenuId = [];
    frmTtlbarBgImg = new kony.ui.Form2({
        "id": "frmTtlbarBgImg",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmTtlbarBgImg
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "titleAndroidBg",
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
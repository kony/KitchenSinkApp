//Form JS File
function frmPlatforms_frmPlatforms_preshow_seq0(eventobject, neworientation) {
    platformCheck.call(this);
};

function frmPlatforms_btnAndroidPF_onClick_seq0(eventobject) {
    selectPlatform.call(this, eventobject);
};

function frmPlatforms_btnIOSPF_onClick_seq0(eventobject) {
    selectPlatform.call(this, eventobject);
};

function frmPlatforms_btnWinPF_onClick_seq0(eventobject) {
    selectPlatform.call(this, eventobject);
};

function frmPlatforms_btnBlackberryPF_onClick_seq0(eventobject) {
    selectPlatform.call(this, eventobject);
};

function frmPlatforms_btnHTMLPF_onClick_seq0(eventobject) {
    selectPlatform.call(this, eventobject);
};

function addWidgetsfrmPlatforms() {
    var label118263802476286 = new kony.ui.Label({
        "id": "label118263802476286",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 84
    }, {
        "textCopyable": false
    });
    var image2118263802476287 = new kony.ui.Image2({
        "id": "image2118263802476287",
        "isVisible": true,
        "src": "kony_logo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 16
    }, {});
    var hbxKonyLogoPFScreen = new kony.ui.Box({
        "id": "hbxKonyLogoPFScreen",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxKonyLogoPFScreen.add(
    label118263802476286, image2118263802476287);
    var lblWelcome = new kony.ui.Label({
        "id": "lblWelcome",
        "isVisible": true,
        "text": "Welcome To The Kony UI Experience",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 24, 12, 12],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    var label118263802475257 = new kony.ui.Label({
        "id": "label118263802475257",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "textCopyable": false
    });
    var btnAndroidPF = new kony.ui.Button({
        "id": "btnAndroidPF",
        "isVisible": true,
        "text": null,
        "skin": "btnAndPF",
        "focusSkin": "btnAndPFFoc",
        "onClick": frmPlatforms_btnAndroidPF_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label118263802475267 = new kony.ui.Label({
        "id": "label118263802475267",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {
        "textCopyable": false
    });
    var btnIOSPF = new kony.ui.Button({
        "id": "btnIOSPF",
        "isVisible": true,
        "text": null,
        "skin": "btnIphonePF",
        "focusSkin": "btnIPhonePFFoc",
        "onClick": frmPlatforms_btnIOSPF_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label118263802475277 = new kony.ui.Label({
        "id": "label118263802475277",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "textCopyable": false
    });
    var hbxAndNiOSPlatforms = new kony.ui.Box({
        "id": "hbxAndNiOSPlatforms",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxAndNiOSPlatforms.add(
    label118263802475257, btnAndroidPF, label118263802475267, btnIOSPF, label118263802475277);
    var label118263802474965 = new kony.ui.Label({
        "id": "label118263802474965",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "textCopyable": false
    });
    var btnWinPF = new kony.ui.Button({
        "id": "btnWinPF",
        "isVisible": true,
        "text": null,
        "skin": "btnWindowsPF",
        "focusSkin": "btnWinPFFoc",
        "onClick": frmPlatforms_btnWinPF_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label118263802474969 = new kony.ui.Label({
        "id": "label118263802474969",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {
        "textCopyable": false
    });
    var btnBlackberryPF = new kony.ui.Button({
        "id": "btnBlackberryPF",
        "isVisible": true,
        "text": null,
        "skin": "btnBBPF",
        "focusSkin": "btnBBPFFoc",
        "onClick": frmPlatforms_btnBlackberryPF_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label118263802474973 = new kony.ui.Label({
        "id": "label118263802474973",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "textCopyable": false
    });
    var hbxWinNBBplatforms = new kony.ui.Box({
        "id": "hbxWinNBBplatforms",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxWinNBBplatforms.add(
    label118263802474965, btnWinPF, label118263802474969, btnBlackberryPF, label118263802474973);
    var label118263802475157 = new kony.ui.Label({
        "id": "label118263802475157",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {
        "textCopyable": false
    });
    var btnHTMLPF = new kony.ui.Button({
        "id": "btnHTMLPF",
        "isVisible": true,
        "text": null,
        "skin": "btnHTML5PF",
        "focusSkin": "btnHTML5PFFoc",
        "onClick": frmPlatforms_btnHTMLPF_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label118263802475161 = new kony.ui.Label({
        "id": "label118263802475161",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 61
    }, {
        "textCopyable": false
    });
    var hbxHTMLPlatform = new kony.ui.Box({
        "id": "hbxHTMLPlatform",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxHTMLPlatform.add(
    label118263802475157, btnHTMLPF, label118263802475161);
    var lblClickMsg4User = new kony.ui.Label({
        "id": "lblClickMsg4User",
        "isVisible": true,
        "text": "Click icon above to start",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 24, 12, 12],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "textCopyable": false
    });
    frmPlatforms.add(
    hbxKonyLogoPFScreen, lblWelcome, hbxAndNiOSPlatforms, hbxWinNBBplatforms, hbxHTMLPlatform, lblClickMsg4User);
};

function frmPlatformsGlobals() {
    var MenuId = [];
    frmPlatforms = new kony.ui.Form2({
        "id": "frmPlatforms",
        "needAppMenu": false,
        "title": "Home",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmPlatforms_frmPlatforms_preshow_seq0,
        "addWidgets": addWidgetsfrmPlatforms
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
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
//Form JS File
function frmGestures_frmGestures_preshow_seq0(eventobject, neworientation) {
    frmGestures.imgGes.isVisible = false;
};

function frmGestures_frmGestures_postshow_seq0(eventobject, neworientation) {
    GenericGestureHandler.call(this);
};

function addWidgetsfrmGestures() {
    var lblFrmGestures = new kony.ui.Label({
        "id": "lblFrmGestures",
        "isVisible": true,
        "text": "Perform Double Tap,Swipe and Longpress  gestures in this form and observe corresponding images below.",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 6, 6, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var imgGes = new kony.ui.Image2({
        "id": "imgGes",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 150,
        "referenceHeight": 150,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {});
    frmGestures.add(
    lblFrmGestures, imgGes);
};

function frmGesturesGlobals() {
    var MenuId = [];
    frmGestures = new kony.ui.Form2({
        "id": "frmGestures",
        "needAppMenu": true,
        "title": "Gestures",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmGestures_frmGestures_preshow_seq0,
        "postShow": frmGestures_frmGestures_postshow_seq0,
        "addWidgets": addWidgetsfrmGestures
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
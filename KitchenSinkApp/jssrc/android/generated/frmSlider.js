//Form JS File
function frmSlider_frmSlider_preshow_seq0(eventobject, neworientation) {
    frmSlider.slidPos.selectedValue = 0;
    frmSlider.lblSlid.text = 0;
};

function frmSlider_slidPos_onSelection_seq0(eventobject, selectedvalue) {
    sliderOnSelection.call(this, eventobject);
};

function addWidgetsfrmSlider() {
    var label118082077327189 = new kony.ui.Label({
        "id": "label118082077327189",
        "isVisible": true,
        "text": "Default Slider",
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
    var slider103994549624243 = new kony.ui.Slider({
        "id": "slider103994549624243",
        "isVisible": true,
        "min": 0,
        "max": 100,
        "step": 1,
        "selectedValue": null,
        "thumbImage": null,
        "focusThumbImage": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [12, 10, 12, 0],
        "marginInPixel": true,
        "containerWeight": 6,
        "vExpand": false,
        "hExpand": true
    }, {
        "thickness": null,
        "minLabel": null,
        "maxLabel": null
    });
    var label118082077327213 = new kony.ui.Label({
        "id": "label118082077327213",
        "isVisible": true,
        "text": "Slider with custom colors",
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
    var slider192735980026038 = new kony.ui.Slider({
        "id": "slider192735980026038",
        "isVisible": true,
        "min": 0,
        "max": 100,
        "step": 1,
        "selectedValue": null,
        "leftSkin": "sliderLeft",
        "rightSkin": "sliderRight",
        "thumbImage": null,
        "focusThumbImage": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [12, 10, 12, 0],
        "marginInPixel": true,
        "containerWeight": 6,
        "vExpand": false,
        "hExpand": true
    }, {
        "thickness": null,
        "minLabel": null,
        "maxLabel": null
    });
    var label1181029310129387 = new kony.ui.Label({
        "id": "label1181029310129387",
        "isVisible": true,
        "text": "Slider with step value :20 ",
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
    var slider1181029310129396 = new kony.ui.Slider({
        "id": "slider1181029310129396",
        "isVisible": true,
        "min": 0,
        "max": 100,
        "step": 20,
        "selectedValue": 20,
        "thumbImage": null,
        "focusThumbImage": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [12, 10, 12, 0],
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6,
        "vExpand": false,
        "hExpand": true
    }, {
        "thickness": null,
        "minLabel": null,
        "maxLabel": null
    });
    var label1181029310129456 = new kony.ui.Label({
        "id": "label1181029310129456",
        "isVisible": true,
        "text": "Slider position capture",
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
    var slidPos = new kony.ui.Slider({
        "id": "slidPos",
        "isVisible": true,
        "min": 0,
        "max": 100,
        "step": 1,
        "selectedValue": 0,
        "onSelection": frmSlider_slidPos_onSelection_seq0,
        "thumbImage": null,
        "focusThumbImage": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [12, 10, 12, 0],
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6,
        "vExpand": false,
        "hExpand": true
    }, {
        "thickness": null,
        "minLabel": null,
        "maxLabel": null
    });
    var label1181029310129490 = new kony.ui.Label({
        "id": "label1181029310129490",
        "isVisible": true,
        "text": "Selected value is :",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [10, 6, 6, 6],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 78
    }, {
        "textCopyable": false
    });
    var lblSlid = new kony.ui.Label({
        "id": "lblSlid",
        "isVisible": true,
        "text": "0",
        "skin": "lblNormalSimilar"
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
    var hbox1181029310129489 = new kony.ui.Box({
        "id": "hbox1181029310129489",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 4],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1181029310129489.add(
    label1181029310129490, lblSlid);
    frmSlider.add(
    label118082077327189, slider103994549624243, label118082077327213, slider192735980026038, label1181029310129387, slider1181029310129396, label1181029310129456, slidPos, hbox1181029310129489);
};

function frmSliderGlobals() {
    var MenuId = [];
    frmSlider = new kony.ui.Form2({
        "id": "frmSlider",
        "needAppMenu": true,
        "title": "Slider",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmSlider_frmSlider_preshow_seq0,
        "addWidgets": addWidgetsfrmSlider
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
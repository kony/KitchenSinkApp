//Form JS File
function frmAni_segiPhone_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onClickOfFrmAniSeg.call(this, eventobject);
};

function addWidgetsfrmAni() {
    var segiPhonebox = new kony.ui.Box({
        "id": "segiPhonebox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segiPhone = new kony.ui.SegmentedUI2({
        "id": "segiPhone",
        "isVisible": true,
        "retainSelection": true,
        "widgetDataMap": {
            "lbliPhone": "lbliPhone"
        },
        "data": [{
            "lbliPhone": "Flip"
        }, {
            "lbliPhone": "Fade"
        }, {
            "lbliPhone": "MoveIn"
        }, {
            "lbliPhone": "Push"
        }, {
            "lbliPhone": "Reveal"
        }, {
            "lbliPhone": "Curl"
        }, {
            "lbliPhone": "TwoSplitHorizontalIn"
        }, {
            "lbliPhone": "TwoSplitVerticalIn"
        }, {
            "lbliPhone": "FourSplitIn"
        }, {
            "lbliPhone": "FourSplitRotateIn"
        }, {
            "lbliPhone": "TwoSplitHorizontalOut"
        }, {
            "lbliPhone": "TwoSplitVerticalOut"
        }, {
            "lbliPhone": "FourSplitOut"
        }, {
            "lbliPhone": "FourSplitRotateOut"
        }, {
            "lbliPhone": "SwitchLeft"
        }, {
            "lbliPhone": "SwitchRight"
        }, {
            "lbliPhone": "Cloth"
        }, {
            "lbliPhone": "FlipRight"
        }, {
            "lbliPhone": "FlipLeft"
        }, {
            "lbliPhone": "Door"
        }, {
            "lbliPhone": "RotateExchange"
        }, {
            "lbliPhone": "MoveInFromBottom"
        }, {
            "lbliPhone": "MoveInFromTop"
        }],
        "Location": "[1,55]",
        "rowTemplate": segiPhonebox,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmAni_segiPhone_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "containerHeight": null,
        "containerWeight": 45
    }, {});
    var lbliPhone = new kony.ui.Label({
        "id": "lbliPhone",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "padding": [4, 13, 4, 13],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": true,
        "containerWeight": 13
    }, {
        "textCopyable": false
    });
    segiPhonebox.add(
    lbliPhone);
    frmAni.add(
    segiPhone);
};

function frmAniGlobals() {
    var MenuId = [];
    frmAni = new kony.ui.Form2({
        "id": "frmAni",
        "needAppMenu": true,
        "title": "Transitions",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmAni
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
//Form JS File
function frmSegActionableWidgets_segment2684597951820494_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "You clicked segment row",
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": "",
        "yesLabel": "Yes",
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
};

function addWidgetsfrmSegActionableWidgets() {
    var segment2684597951820494box = new kony.ui.Box({
        "id": "segment2684597951820494box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segment2684597951820494 = new kony.ui.SegmentedUI2({
        "id": "segment2684597951820494",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbxActionTemplate": "hbxActionTemplate",
            "imgActionImage": "imgActionImage",
            "actionWidsTemplate": "actionWidsTemplate",
            "imgActionLink": "imgActionLink",
            "imgActionButton": "imgActionButton"
        },
        "data": [{
            "imgActionImage": "image1.png",
            "imgActionLink": "Audi",
            "imgActionButton": "Seller list"
        }, {
            "imgActionImage": "image10.png",
            "imgActionLink": "Ford",
            "imgActionButton": "Seller list"
        }, {
            "imgActionImage": "image2.png",
            "imgActionLink": "Skoda",
            "imgActionButton": "Seller list"
        }, {
            "imgActionImage": "image20.png",
            "imgActionLink": "Maruthi",
            "imgActionButton": "Seller list"
        }, {
            "imgActionImage": "image3.png",
            "imgActionLink": "Benz",
            "imgActionButton": "Seller list"
        }, {
            "imgActionImage": "image18.png",
            "imgActionLink": "Rolls royce",
            "imgActionButton": "Seller list"
        }],
        "Location": "[1,1]",
        "rowTemplate": hbxActionTemplate,
        "rowSkin": "rowSkin",
        "rowFocusSkin": "rowFocusSkin",
        "sectionHeaderSkin": "sectionHeaderSkin",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmSegActionableWidgets_segment2684597951820494_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [2, 2, 2, 2],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    segment2684597951820494box.add();
    frmSegActionableWidgets.add(
    segment2684597951820494);
};

function frmSegActionableWidgetsGlobals() {
    var MenuId = [];
    frmSegActionableWidgets = new kony.ui.Form2({
        "id": "frmSegActionableWidgets",
        "needAppMenu": true,
        "title": "Segment with actionable widgets",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSegActionableWidgets
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
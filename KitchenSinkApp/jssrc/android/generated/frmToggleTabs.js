//Form JS File
function addWidgetsfrmToggleTabs() {
    var tabpane1181029310125057 = new kony.ui.TabPane({
        "id": "tabpane1181029310125057",
        "isVisible": true,
        "viewType": constants.TABPANE_VIEW_TYPE_COLLAPSIBLEVIEW,
        "viewConfig": {
            "collapsibleViewConfig": {
                "toggleTabs": true,
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_LEFT,
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "expandedImage": "tabdown.png",
                "collapsedImage": "tabup.png"
            },
            "pageViewConfig": {
                "pageOnDotImage": "",
                "needPageIndicator": true,
                "pageOffDotImage": ""
            },
            "panoramaViewConfig": {
                "panoramaTitleImage": "",
                "panoramaImage": "",
                "panoramaTitle": ""
            },
            "tabViewConfig": {
                "headerPosition": constants.TAB_HEADER_POSITION_TOP,
                "headerContainerWeight": "50"
            }
        },
        "screenLevelWidget": false,
        "activeTabs": null,
        "activeSkin": "tabActive",
        "activeFocusSkin": "tabFocus",
        "inactiveSkin": "tabInactive"
    }, {
        "margin": [2, 4, 2, 2],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 43,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    var tab1181029310125059 = new kony.ui.Box({
        "id": "tab1181029310125059",
        "tabName": "Tab1",
        "widgetDirection": 1,
        "skin": "tabskin",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "containerWeight": 93,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "image": null
    });
    var richtext1181029310125061 = new kony.ui.RichText({
        "id": "richtext1181029310125061",
        "isVisible": true,
        "text": "<p>KonyOne provides a world-class development environment and mobile middleware for both business & consumer applications. KonyOne incorporates industry - tested scalability and supports every technology and deployment option available today - including truly native apps on all native OSs, thousands of devices including those with HTML5 capable browser, Single Page Applications, Wrappers, Hybrids, and traditional URL-based applications.</p>",
        "skin": "rtxBlackFontForTabs"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {});
    tab1181029310125059.add(
    richtext1181029310125061);
    tabpane1181029310125057.addTab("tab1181029310125059", "Tab1", null, tab1181029310125059, null);
    var tab1181029310125063 = new kony.ui.Box({
        "id": "tab1181029310125063",
        "tabName": "Tab2",
        "widgetDirection": 1,
        "skin": "tabskin",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "containerWeight": 7,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "image": null
    });
    var richtext1181029310125065 = new kony.ui.RichText({
        "id": "richtext1181029310125065",
        "isVisible": true,
        "text": "<p>KonyOne's device detection database and heuristics identifies all browser categories from the most basic through different levels of HTML, CSS and JavaScript support, to all of the various HTML5-capable browsers in smartphones, tablets and the desktop. Depending on the type of browser, the user will be served markup, style and/or script appropriate and acceptable to their device, ensuring a solid experience and optimum UI.</p>",
        "skin": "rtxBlackFontForTabs"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    tab1181029310125063.add(
    richtext1181029310125065);
    tabpane1181029310125057.addTab("tab1181029310125063", "Tab2", null, tab1181029310125063, null);
    var tab1181029310125067 = new kony.ui.Box({
        "id": "tab1181029310125067",
        "tabName": "Tab3",
        "widgetDirection": 1,
        "skin": "tabskin",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "containerWeight": 0,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "image": null
    });
    var richtext1181029310125069 = new kony.ui.RichText({
        "id": "richtext1181029310125069",
        "isVisible": true,
        "text": "<p>Solutions for your customers, employees, vendors and partners.Configurable,  Extensible with Universal Integration.Stunning User Experience.Support for All Technologies and Devices. </p>",
        "skin": "rtxBlackFontForTabs"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 1, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {});
    tab1181029310125067.add(
    richtext1181029310125069);
    tabpane1181029310125057.addTab("tab1181029310125067", "Tab3", null, tab1181029310125067, null);
    frmToggleTabs.add(
    tabpane1181029310125057);
};

function frmToggleTabsGlobals() {
    var MenuId = [];
    frmToggleTabs = new kony.ui.Form2({
        "id": "frmToggleTabs",
        "needAppMenu": true,
        "title": "Toggle Tabs",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmToggleTabs
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
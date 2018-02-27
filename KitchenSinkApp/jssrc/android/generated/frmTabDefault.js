//Form JS File
function addWidgetsfrmTabDefault() {
    var tabpaneDefaultTab = new kony.ui.TabPane({
        "id": "tabpaneDefaultTab",
        "isVisible": true,
        "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW,
        "viewConfig": {
            "collapsibleViewConfig": {
                "toggleTabs": false,
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT
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
    }, {
        "tabHeaderHeight": 64
    });
    var tabDefaultTab = new kony.ui.Box({
        "id": "tabDefaultTab",
        "tabName": "Tab1",
        "widgetDirection": 1,
        "skin": "tabskin",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "containerWeight": 93,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "image": null
    });
    var richtextDeftab1 = new kony.ui.RichText({
        "id": "richtextDeftab1",
        "isVisible": true,
        "text": "<p>KonyOne provides a world-class development environment and mobile middleware for both business & consumer applications. KonyOne incorporates industry - tested scalability and supports every technology and deployment option available today - including truly native apps on all native OSs, thousands of devices including those with HTML5 capable browser, SPAs,Wrappers, Hybrids, and traditional URL-based applications.</p>",
        "skin": "rtxBlackFontForTabs"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [2, 2, 2, 0],
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {});
    tabDefaultTab.add(
    richtextDeftab1);
    tabpaneDefaultTab.addTab("tabDefaultTab", "Tab1", null, tabDefaultTab, null);
    var tabDefTab1 = new kony.ui.Box({
        "id": "tabDefTab1",
        "tabName": "Tab2",
        "widgetDirection": 1,
        "skin": "tabskin",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "containerWeight": 7,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "image": null
    });
    var richtextDefTab2 = new kony.ui.RichText({
        "id": "richtextDefTab2",
        "isVisible": true,
        "text": "<p>KonyOne's device detection database and heuristics identifies all browser categories from the most basic through different levels of HTML, CSS and JavaScript support, to all of the various HTML5-capable browsers in smartphones, tablets and the desktop. Depending on the type of browser, the user will be served markup, style and/or script appropriate and acceptable to their device, ensuring a solid experience and optimum UI.</p>",
        "skin": "rtxBlackFontForTabs"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [2, 2, 2, 0],
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    tabDefTab1.add(
    richtextDefTab2);
    tabpaneDefaultTab.addTab("tabDefTab1", "Tab2", null, tabDefTab1, null);
    var tabDefTab2 = new kony.ui.Box({
        "id": "tabDefTab2",
        "tabName": "Tab3",
        "widgetDirection": 1,
        "skin": "tabskin",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "containerWeight": 0,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "image": null
    });
    var richtextDefTab3 = new kony.ui.RichText({
        "id": "richtextDefTab3",
        "isVisible": true,
        "text": "<p>Solutions for your customers, employees, vendors and partners.Configurable,  Extensible with Universal Integration.Stunning User Experience.Support for All Technologies and Devices. </p>",
        "skin": "rtxBlackFontForTabs"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [2, 2, 2, 0],
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {});
    tabDefTab2.add(
    richtextDefTab3);
    tabpaneDefaultTab.addTab("tabDefTab2", "Tab3", null, tabDefTab2, null);
    frmTabDefault.add(
    tabpaneDefaultTab);
};

function frmTabDefaultGlobals() {
    var MenuId = [];
    frmTabDefault = new kony.ui.Form2({
        "id": "frmTabDefault",
        "needAppMenu": true,
        "title": "Default view",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmTabDefault
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
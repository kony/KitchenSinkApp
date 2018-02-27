//Form JS File
function addWidgetsfrmTabCollpasible() {
    var tabpane117989725214240 = new kony.ui.TabPane({
        "id": "tabpane117989725214240",
        "isVisible": true,
        "viewType": constants.TABPANE_VIEW_TYPE_COLLAPSIBLEVIEW,
        "viewConfig": {
            "collapsibleViewConfig": {
                "toggleTabs": false,
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
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    var tab117989725214242 = new kony.ui.Box({
        "id": "tab117989725214242",
        "tabName": "Tab1",
        "widgetDirection": 1,
        "skin": "tabskin",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "image": null
    });
    var richtext117989725214244 = new kony.ui.RichText({
        "id": "richtext117989725214244",
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
    tab117989725214242.add(
    richtext117989725214244);
    tabpane117989725214240.addTab("tab117989725214242", "Tab1", null, tab117989725214242, null);
    var tab117989725214246 = new kony.ui.Box({
        "id": "tab117989725214246",
        "tabName": "Tab2",
        "widgetDirection": 1,
        "skin": "tabskin",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "image": null
    });
    var richtext117989725214248 = new kony.ui.RichText({
        "id": "richtext117989725214248",
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
    tab117989725214246.add(
    richtext117989725214248);
    tabpane117989725214240.addTab("tab117989725214246", "Tab2", null, tab117989725214246, null);
    var tab117989725214250 = new kony.ui.Box({
        "id": "tab117989725214250",
        "tabName": "Tab3",
        "widgetDirection": 1,
        "skin": "tabskin",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "image": null
    });
    var richtext117989725214252 = new kony.ui.RichText({
        "id": "richtext117989725214252",
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
    tab117989725214250.add(
    richtext117989725214252);
    tabpane117989725214240.addTab("tab117989725214250", "Tab3", null, tab117989725214250, null);
    frmTabCollpasible.add(
    tabpane117989725214240);
};

function frmTabCollpasibleGlobals() {
    var MenuId = [];
    frmTabCollpasible = new kony.ui.Form2({
        "id": "frmTabCollpasible",
        "needAppMenu": true,
        "title": "Collapsible view",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmTabCollpasible
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
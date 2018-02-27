//Form JS File
function addWidgetsfrmTabScreenLevel() {
    var tabpaneDefaultTabFS = new kony.ui.TabPane({
        "id": "tabpaneDefaultTabFS",
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
        "screenLevelWidget": true,
        "activeTabs": null,
        "activeSkin": "tabActive",
        "activeFocusSkin": "tabFocus",
        "inactiveSkin": "tabInactive"
    }, {
        "margin": [2, 4, 2, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "tabHeaderHeight": 64
    });
    var tabDefaultTabFS = new kony.ui.Box({
        "id": "tabDefaultTabFS",
        "tabName": "Tab1",
        "widgetDirection": 1,
        "skin": "tabskin",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "containerWeight": 97,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "image": null
    });
    var labelTS = new kony.ui.Label({
        "id": "labelTS",
        "isVisible": true,
        "text": "Name",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 8
    }, {
        "textCopyable": false
    });
    var textfieldTS1 = new kony.ui.TextBox2({
        "id": "textfieldTS1",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Username",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "textBoxNormal",
        "focusSkin": "textBoxFocus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "containerWeight": 7
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT
    });
    var labelTS1 = new kony.ui.Label({
        "id": "labelTS1",
        "isVisible": true,
        "text": "Password",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 8
    }, {
        "textCopyable": false
    });
    var textfieldTS2 = new kony.ui.TextBox2({
        "id": "textfieldTS2",
        "isVisible": true,
        "text": null,
        "secureTextEntry": true,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Password",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "textBoxNormal",
        "focusSkin": "textBoxFocus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "containerWeight": 7
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT
    });
    var labelTS2 = new kony.ui.Label({
        "id": "labelTS2",
        "isVisible": true,
        "text": "Country",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 8
    }, {
        "textCopyable": false
    });
    var comboboxTS1 = new kony.ui.ComboBox({
        "id": "comboboxTS1",
        "isVisible": true,
        "masterData": [
            ["1", "Please Select.."],
            ["2", "Australia"],
            ["3", "India"],
            ["4", "Japan"],
            ["5", "Singapur"],
            ["6", "United Kingdom"],
            ["7", "United States"]
        ],
        "selectedKey": "1",
        "skin": "cboxNormal",
        "focusSkin": "cboxFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerWeight": 100
    }, {
        "popupTitle": null
    });
    var hboxTS1 = new kony.ui.Box({
        "id": "hboxTS1",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [3, 0, 3, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxTS1.add(
    comboboxTS1);
    var labelTS3 = new kony.ui.Label({
        "id": "labelTS3",
        "isVisible": true,
        "text": "BirthDate",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 8
    }, {
        "textCopyable": false
    });
    var calendarTS1 = new kony.ui.Calendar({
        "id": "calendarTS1",
        "isVisible": true,
        "dateFormat": "dd/MM/yyyy",
        "viewConfig": {
            gridConfig: {
                "allowWeekendSelectable": true
            }
        },
        "placeholder": null,
        "skin": "calNormalSimilar",
        "focusSkin": "calFocus",
        "calendarIcon": null,
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 3, 0],
        "padding": [1, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var labelTS4 = new kony.ui.Label({
        "id": "labelTS4",
        "isVisible": true,
        "text": "Gender",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 8
    }, {
        "textCopyable": false
    });
    var radiobuttongroupTS1 = new kony.ui.RadioButtonGroup({
        "id": "radiobuttongroupTS1",
        "isVisible": true,
        "masterData": [
            ["1", "Male"],
            ["2", "Female"]
        ],
        "selectedKey": "1",
        "skin": "radioNormal",
        "focusSkin": "radioNormal"
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 0, 1, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
    var labelTS5 = new kony.ui.Label({
        "id": "labelTS5",
        "isVisible": true,
        "text": "Terms&Conditions",
        "skin": "lblNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 8
    }, {
        "textCopyable": false
    });
    var richtext117709689852316 = new kony.ui.RichText({
        "id": "richtext117709689852316",
        "isVisible": true,
        "text": "This is a tab form consists of different widgets including Label, Textbox2, Combobox, Richtext, Calendar, hBox, Checkboxgroup, Radiobutton.",
        "skin": "rtxBlackFontForTabs"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 6, 12, 12],
        "padding": [4, 4, 4, 4],
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 7
    }, {});
    var checkboxgroupTS1 = new kony.ui.CheckBoxGroup({
        "id": "checkboxgroupTS1",
        "isVisible": true,
        "masterData": [
            ["1", "Accept"]
        ],
        "selectedKeys": [],
        "skin": "cbxAccept",
        "focusSkin": "cbxAccept"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [4, 2, 2, 0],
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "marginInPixel": false,
        "containerWeight": 5
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
    tabDefaultTabFS.add(
    labelTS, textfieldTS1, labelTS1, textfieldTS2, labelTS2, hboxTS1, labelTS3, calendarTS1, labelTS4, radiobuttongroupTS1, labelTS5, richtext117709689852316, checkboxgroupTS1);
    tabpaneDefaultTabFS.addTab("tabDefaultTabFS", "Tab1", null, tabDefaultTabFS, null);
    var tabDefTab1FS = new kony.ui.Box({
        "id": "tabDefTab1FS",
        "tabName": "Tab2",
        "widgetDirection": 1,
        "skin": "tabskin",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "containerWeight": 3,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "image": null
    });
    var richtextDefTab2FS = new kony.ui.RichText({
        "id": "richtextDefTab2FS",
        "isVisible": true,
        "text": "<p>KonyOne's device detection database and heuristics identifies all browser categories from the most basic through different levels of HTML, CSS and JavaScript support, to all of the various HTML5-capable browsers in smartphones, tablets and the desktop. Depending on the type of browser, the user will be served markup, style and/or script appropriate and acceptable to their device, ensuring a solid experience and optimum UI.</p>",
        "skin": "rtxBlackFontForTabs"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var image21181029310130215 = new kony.ui.Image2({
        "id": "image21181029310130215",
        "isVisible": true,
        "src": "wall.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 512,
        "referenceHeight": 512,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    tabDefTab1FS.add(
    richtextDefTab2FS, image21181029310130215);
    tabpaneDefaultTabFS.addTab("tabDefTab1FS", "Tab2", null, tabDefTab1FS, null);
    var tabDefTab2FS = new kony.ui.Box({
        "id": "tabDefTab2FS",
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
    var richtextDefTab3FS = new kony.ui.RichText({
        "id": "richtextDefTab3FS",
        "isVisible": true,
        "text": "<p>KonyOne provides a world-class development environment and mobile middleware for both business & consumer applications. KonyOne incorporates industry - tested scalability and supports every technology and deployment option available today - including truly native apps on all native OSs, thousands of devices including those with HTML5 capable browser, Single Page Applications, Wrappers, Hybrids, and traditional URL-based applications.</p>",
        "skin": "rtxBlackFontForTabs"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 2, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {});
    var image21181029310130216 = new kony.ui.Image2({
        "id": "image21181029310130216",
        "isVisible": true,
        "src": "cross.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 512,
        "referenceHeight": 512,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    tabDefTab2FS.add(
    richtextDefTab3FS, image21181029310130216);
    tabpaneDefaultTabFS.addTab("tabDefTab2FS", "Tab3", null, tabDefTab2FS, null);
    frmTabScreenLevel.add(
    tabpaneDefaultTabFS);
};

function frmTabScreenLevelGlobals() {
    var MenuId = [];
    frmTabScreenLevel = new kony.ui.Form2({
        "id": "frmTabScreenLevel",
        "needAppMenu": true,
        "title": "Screen level tabpane",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmTabScreenLevel
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "headerOverlap": false,
        "footerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
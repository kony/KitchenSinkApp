//Form JS File
function frmLiveTiles_button1927359800122731_onClick_seq0(eventobject) {
    kony.application.setSecondaryTile("frmLiveTiles", ["Live Tiles Demo", "live_tile_image.png", 0], [" Tap to Launch!", "live_tile_image.png", ""]);
};

function frmLiveTiles_button104465247211227_onClick_seq0(eventobject) {
    kony.application.removeSecondaryTile("frmLiveTiles");
};

function addWidgetsfrmLiveTiles() {
    var button1927359800122731 = new kony.ui.Button({
        "id": "button1927359800122731",
        "isVisible": true,
        "text": "Create Secondary Tile",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmLiveTiles_button1927359800122731_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button104465247211227 = new kony.ui.Button({
        "id": "button104465247211227",
        "isVisible": true,
        "text": "Remove Secondary Tile",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmLiveTiles_button104465247211227_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmLiveTiles.add(
    button1927359800122731, button104465247211227);
};

function frmLiveTilesGlobals() {
    var MenuId = [];
    frmLiveTiles = new kony.ui.Form2({
        "id": "frmLiveTiles",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmLiveTiles
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
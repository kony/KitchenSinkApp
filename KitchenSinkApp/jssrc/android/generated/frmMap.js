//Form JS File
function frmMap_frmMap_preshow_seq0(eventobject, neworientation) {
    setLocationData.call(this);
};

function addWidgetsfrmMap() {
    var mapNrm = new kony.ui.Map({
        "id": "mapNrm",
        "isVisible": true,
        "mapKey": "0YW7LQ_ON4_GfRt4bYcgXO-kkSrxlOyipmMN7CA",
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": null,
        "screenLevelWidget": true,
        "calloutWidth": 80
    }, {
        "containerHeight": null,
        "containerWeight": 37
    }, {
        "showZoomControl": true,
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "zoomLevel": 15
    });
    frmMap.add(
    mapNrm);
};

function frmMapGlobals() {
    var MenuId = [];
    frmMap = new kony.ui.Form2({
        "id": "frmMap",
        "needAppMenu": true,
        "title": "Map",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmMap_frmMap_preshow_seq0,
        "addWidgets": addWidgetsfrmMap
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
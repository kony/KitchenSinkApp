//Form JS File
function popFormAnchor_button1927359800105587_onClick_seq0(eventobject) {
    popFormAnchor.dismiss();
};

function popFormAnchor_button1927359800105588_onClick_seq0(eventobject) {
    popFormAnchor.dismiss();
};

function addWidgetspopFormAnchor() {
    var button1927359800105587 = new kony.ui.Button({
        "id": "button1927359800105587",
        "isVisible": true,
        "text": "Clear All",
        "skin": "btnSknRed",
        "focusSkin": "btnRoundFocus",
        "onClick": popFormAnchor_button1927359800105587_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "containerWeight": 6
    }, {});
    var button1927359800105588 = new kony.ui.Button({
        "id": "button1927359800105588",
        "isVisible": true,
        "text": "Cancel",
        "skin": "btnSknBlack",
        "focusSkin": "btnRoundFocus",
        "onClick": popFormAnchor_button1927359800105588_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "containerWeight": 6
    }, {});
    popFormAnchor.add(
    button1927359800105587, button1927359800105588);
};

function popFormAnchorGlobals() {
    popFormAnchor = new kony.ui.Popup({
        "id": "popFormAnchor",
        "title": null,
        "transparencyBehindThePopup": 50,
        "skin": "popGray",
        "isModal": false,
        "addWidgets": addWidgetspopFormAnchor
    }, {
        "containerWeight": 100,
        "containerHeight": null,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_RESIZE,
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
};
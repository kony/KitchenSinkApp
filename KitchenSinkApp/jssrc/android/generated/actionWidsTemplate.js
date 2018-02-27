//Template File
function actionWidsTemplate_imgActionLink_onClick_seq0(eventobject, context) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "You clicked link",
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": "",
        "yesLabel": "Yes",
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
};

function actionWidsTemplate_imgActionButton_onClick_seq0(eventobject, context) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "You clicked button",
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": "",
        "yesLabel": "Yes",
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
};

function initializeactionWidsTemplate() {
    var imgActionImage = new kony.ui.Image2({
        "id": "imgActionImage",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {});
    var imgActionLink = new kony.ui.Link({
        "id": "imgActionLink",
        "isVisible": true,
        "text": "Link",
        "skin": "linkImage",
        "focusSkin": "lnkFocus",
        "onClick": actionWidsTemplate_imgActionLink_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {});
    var imgActionButton = new kony.ui.Button({
        "id": "imgActionButton",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": actionWidsTemplate_imgActionButton_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 2, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 27
    }, {});
    hbxActionTemplate = new kony.ui.Box({
        "id": "hbxActionTemplate",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 21,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxActionTemplate.add(
    imgActionImage, imgActionLink, imgActionButton);
};
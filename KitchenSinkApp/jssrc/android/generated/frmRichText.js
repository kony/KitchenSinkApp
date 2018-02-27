//Form JS File
function addWidgetsfrmRichText() {
    var richtext121043100817155 = new kony.ui.RichText({
        "id": "richtext121043100817155",
        "isVisible": true,
        "text": "<b>This is bold text  </b> <br/> <br/> <u>This is underlined text</u> <br/> <br/>  <label style=\"color:#F25E22\">This is text with font color</label>  <br/> <br/> <i>This is italic text</i> <br/> <br/> <b>This is</b> <sub>Subscript</sub>  <br/> <br/> <b>This is</b><sup>Superscript</sup> <br/><br/> <font color=\"white\"><a href=\"http://www.kony.com\">This is link (Click to visit kony.com)</a></font> <br/><br/> <b>Below is an image</b><br/> <img src=\"http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png\" alt=\"image\" height=\"60\" width=\"60\" ></img>",
        "skin": "richNormalSimilar"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [12, 12, 12, 12],
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 26
    }, {});
    frmRichText.add(
    richtext121043100817155);
};

function frmRichTextGlobals() {
    var MenuId = [];
    frmRichText = new kony.ui.Form2({
        "id": "frmRichText",
        "needAppMenu": true,
        "title": "RichText",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmRichText
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
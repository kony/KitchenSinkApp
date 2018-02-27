//startup.js file
function ksa2preappinit_seq0(params) {
    setChannelMobile.call(this);
    createAppMenu.call(this);
    count = 1;
    flag = 0;
    flag1 = 0;
    webSQLFlag = 0;
    j = 0;
};
var globalhttpheaders = {};
var appConfig = {
    appId: "ksa2",
    appName: "KitchenSinkApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.5.172",
    serverPort: "8080",
    secureServerPort: null,
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://10.10.5.172:8080/middleware/MWServlet",
    secureurl: "https://10.10.5.172/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializehdrIconEdit();
    initializehdrOne();
    initializehdrSearch();
    initializewinMangoHeader();
    initializeftrOne();
    initializeactionWidsTemplate();
    initializedynamicRowTemplate1();
    initializedynamicRowTemplate2();
    initializehdr();
    initializerowTemplate1();
    initializerowTemplate2();
    initializerowTemplate3();
    initializeSecHeaderTemplate1();
    initializeSecHeaderTemplate2();
    initializeSecHeaderTemplate3();
    initializesegLoadingOnReachEnd();
    initializespaRowTemplate1();
    initializespaRowTemplate2();
    initializespaSecHdrTemp1();
    initializespaSecHdrTemp2();
    frm3DObjGlobals();
    frmAclmeterOptionsGlobals();
    frmAclMeterReadingsGlobals();
    frmAdvancedWidgetsGlobals();
    frmAniGlobals();
    frmAni2SplitHorizontalInGlobals();
    frmAni2SplitHorizontalOutGlobals();
    frmAni2SplitVerticalInGlobals();
    frmAni2SplitVerticalOutGlobals();
    frmAni4SplitInGlobals();
    frmAni4SplitOutGlobals();
    frmAni4SplitRotateInGlobals();
    frmAni4SplitRotateOutGlobals();
    frmAniAndGlobals();
    frmAnibottomGlobals();
    frmAnibottomlefttopGlobals();
    frmAnibottomtopGlobals();
    frmAnibottomtopstyle1Globals();
    frmAniClothGlobals();
    frmAniCurlGlobals();
    frmAniDoorGlobals();
    frmAniFadeGlobals();
    frmAniFlipGlobals();
    frmAniFlipLeftGlobals();
    frmAniFlipRightGlobals();
    frmAnifromcenterGlobals();
    frmAnifromleftGlobals();
    frmAnifromrightGlobals();
    frmAnileftGlobals();
    frmAniMoveInGlobals();
    frmAniMoveInFromBottomGlobals();
    frmAniMoveInFromTopGlobals();
    frmAniPushGlobals();
    frmAniRevealGlobals();
    frmAnirightGlobals();
    frmAniRotateExchangeGlobals();
    frmAniSPAGlobals();
    frmAniSwitchLeftGlobals();
    frmAniSwitchRightGlobals();
    frmAnitoleftGlobals();
    frmAnitopGlobals();
    frmAnitoprightbottomGlobals();
    frmAnitorightGlobals();
    frmAniWinGlobals();
    frmAniWinPopGlobals();
    frmAniWinRotate3DDualGlobals();
    frmAniWinRotate3DSingleGlobals();
    frmAniWinSlideGlobals();
    frmAniWinSqueezeGlobals();
    frmAPIKeyGlobals();
    frmAppSetReadGlobals();
    frmAppSettingsGlobals();
    frmAppSetWriteGlobals();
    frmAsyncDataAccessGlobals();
    frmAsyncDataDisplayGlobals();
    frmBadgeGlobals();
    frmBasicWidgetsGlobals();
    frmBrowserGlobals();
    frmBrowserOptionsGlobals();
    frmBtnGlobals();
    frmCalGlobals();
    frmCalendarEventsGlobals();
    frmCamAcsModesGlobals();
    frmCameraBasicGlobals();
    frmCameraFrmOverlayGlobals();
    frmCameraOptionsGlobals();
    frmCameraOverlaidGlobals();
    frmCamOrientGlobals();
    frmCBoxGlobals();
    frmChkGlobals();
    frmComplexGlobals();
    frmContactGlobals();
    frmContainerWidgetsGlobals();
    frmCryptoGlobals();
    frmCustomCollapsTabGlobals();
    frmDatagrdGlobals();
    frmDeviceInfoGlobals();
    frmDictViewGlobals();
    frmDummyGlobals();
    frmDvcFeaturesGlobals();
    frmEmailGlobals();
    frmFormGlobals();
    frmFormImgBckGlobals();
    frmFormOptionsGlobals();
    frmGeoCurrentNWatchGlobals();
    frmGesturesGlobals();
    frmHdrFooterGlobals();
    frmHomeGlobals();
    frmIconEditStyleGlobals();
    frmIconsGlobals();
    frmImageGlobals();
    frmImgCropGlobals();
    frmImgFitToDimensionsGlobals();
    frmImgGalGlobals();
    frmImgMaintainAspectRatioGlobals();
    frmImgStripGlobals();
    frmLblGlobals();
    frmLinkGlobals();
    frmLiveTilesGlobals();
    frmLocalStoreGlobals();
    frmLstBoxGlobals();
    frmLstItemsGlobals();
    frmMapGlobals();
    frmNListGlobals();
    frmNLst2Globals();
    frmPhnGlobals();
    frmPickerViewGlobals();
    frmPlatformsGlobals();
    frmPopupGlobals();
    frmPushPullGlobals();
    frmRdoGlobals();
    frmRegisterAccelerometerGlobals();
    frmRichTextGlobals();
    frmRowTemplatesGlobals();
    frmScrollBoxMenuGlobals();
    frmScrollSPAGlobals();
    frmSecHdrWidoutTemplatesGlobals();
    frmSegActionableWidgetsGlobals();
    frmSegBoxesGlobals();
    frmSegCoverFlowViewGlobals();
    frmSegCustomPageIndicatorGlobals();
    frmSegCylinderViewGlobals();
    frmSegDynRowTemplateGlobals();
    frmsegGroupModeGlobals();
    frmSegInvertCylinderViewGlobals();
    frmSegInvertRotaryViewGlobals();
    frmSegLinearViewGlobals();
    frmSegmentMoreFeaturesGlobals();
    frmSegmentOptionsGlobals();
    frmSegMulSelectDataGlobals();
    frmSegOnReachEndGlobals();
    frmSegPageViewGlobals();
    frmSegRotatoryViewGlobals();
    frmSegSearchViewGlobals();
    frmSegSectionsGlobals();
    frmSegSinleSelectGlobals();
    frmSegStackViewGlobals();
    frmSegTableViewGlobals();
    frmSegViewsGlobals();
    frmSliderGlobals();
    frmSwipeGlobals();
    frmSwitchGlobals();
    frmTabCollpasibleGlobals();
    frmTabDefaultGlobals();
    frmTabPageViewGlobals();
    frmTabsGlobals();
    frmTabScreenLevelGlobals();
    frmTbxGlobals();
    frmToggleTabsGlobals();
    frmTtlbarBgColorGlobals();
    frmTtlbarBgImgGlobals();
    frmTtlbarCustomGlobals();
    frmTtlbarDefaultGlobals();
    frmTtlbarOptionsGlobals();
    frmTxtAreaGlobals();
    frmUICategoryGlobals();
    frmURLBasedImageGlobals();
    frmWebSQLGlobals();
    frmWebSQLResultsGlobals();
    popFormAnchorGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        preappinit: ksa2preappinit_seq0,
        init: appInit,
        showstartupform: function() {
            frmPlatforms.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};
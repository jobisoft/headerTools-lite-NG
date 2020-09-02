var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

//Services.scriptloader.loadSubScript("chrome://messenger/content/messengercompose/addressingWidgetOverlay.js", window, "UTF-8");
//Services.scriptloader.loadSubScript("chrome://nostalgy/content/composer.js", window, "UTF-8");

function onLoad(activatedWhileWindowOpen) {
     console.log("showCC Composer");
    // window.onNostalgyLoadComp();
     var label_cc=window.document.getElementById("addr_cc");
     window.showAddressRow(label_cc, 'addressRowCc');
}

function onUnload(isAddOnShutDown) {
}

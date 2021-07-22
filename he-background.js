/*

 * Code addtions for TB 78 or later: Creative Commons (CC BY-ND 4.0):
 *      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 
 * Contributors:  Klaus Buecher/opto
 */



/*
 * Documentation:
 * https://github.com/thundernest/addon-developer-support/wiki/Using-the-WindowListener-API-to-convert-a-Legacy-Overlay-WebExtension-into-a-MailExtension-for-Thunderbird-78
 */


messenger.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
 // if (temporary) return; // skip during development
  switch (reason) {
    case "install":
      {
        const url = messenger.runtime.getURL("popup/installed.html");
        await browser.tabs.create({ url });
 //       await messenger.windows.create({ url, type: "popup", height: 740, width: 1100, });
      }
      break;
      case "update":
        {
          const url = messenger.runtime.getURL("popup/update.html");
          await browser.tabs.create({ url });
//          await messenger.tabs.create({ url, type: "popup", height: 780, width: 1100, });
        }
        break;
      // see below
  }
});



async function main() {
    messenger.WindowListener.registerDefaultPrefs("chrome/content/scripts/hdrtoolprefs.js");
    

    messenger.WindowListener.registerChromeUrl([ 
        ["content", "hdrtoolslite", "chrome/content/"],
        ["locale", "hdrtoolslite", "en-US", "chrome/locale/en-US/"],
        ["locale", "hdrtoolslite", "it", "chrome/locale/it/"],
        ["locale", "hdrtoolslite", "ja", "chrome/locale/ja/"]
 
       ]);

 
    messenger.WindowListener.registerOptionsPage("chrome://hdrtoolslite/content/settings.xhtml"); 
    
 //attention: each target window (like messenger.xul) can appear only once
 // this is different from chrome.manifest
 // xhtml for Tb78
    // messenger.WindowListener.registerWindow("chrome://messenger/content/messenger.xhtml", "chrome/content/scripts/qf-messenger.js");

 //   messenger.WindowListener.registerWindow("chrome://messenger/content/messenger.xul", "chrome/content/scripts/me-messenger.js");
    messenger.WindowListener.registerWindow("chrome://messenger/content/messenger.xhtml", "chrome/content/scripts/he-messenger.js");


  //  messenger.WindowListener.registerWindow("chrome://messenger/content/messageWindow.xhtml", "chrome/content/scripts/me-messenger.js");

 /* 
  
    messenger.WindowListener.registerStartupScript("chrome/content/scripts/qf-startup.js");
    messenger.WindowListener.registerShutdownScript("chrome/content/scripts/qf-shutdown.js");
*/
 /*
  * Start listening for opened windows. Whenever a window is opened, the registered
  * JS file is loaded. To prevent namespace collisions, the files are loaded into
  * an object inside the global window. The name of that object can be specified via
  * the parameter of startListening(). This object also contains an extension member.
  */


    messenger.WindowListener.startListening();
}

main();

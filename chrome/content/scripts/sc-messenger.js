var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");


//Services.scriptloader.loadSubScript("chrome://nostalgy/content/misc.js", window, "UTF-8");
/**/

function onLoad(activatedWhileWindowOpen) {
    console.log (Services.appinfo.version);
 /*
    let layout = WL.injectCSS("chrome://quickfolders/content/quickfolders-layout.css");
    layout.setAttribute("title", "QuickFolderStyles");
    
    let tb = WL.injectCSS("chrome://quickfolders/content/quickfolders-thunderbird.css");
    // tb.setAttribute("title", "QuickFolderStyles");
    
    WL.injectCSS("chrome://quickfolders/content/skin/quickfolders-widgets.css");
    WL.injectCSS("chrome://quickfolders/content/qf-foldertree.css");
    WL.injectCSS("chrome://quickfolders/content/quickfolders-filters.css");
    WL.injectCSS("chrome://quickfolders/content/quickfolders-68.css");
*/
    //WL.injectCSS("chrome://messenger/skin/input-fields.css");
/*
    WL.injectElements(`
    <commandset id="tasksCommands">
    <command id="cmd_nostalgyconfig" label="Nostalgy..."
      oncommand="openDialog('chrome://nostalgy/content/edit_prefs.xhtml', 'nostalgy', 'resizable');"/>
   </commandset>
 
  <menupopup id="taskPopup">
   <menuitem id="nostalgy" command="cmd_nostalgyconfig"/>
  </menupopup>
 
 
 
  <keyset id="mailKeys">
   <key keycode="VK_LEFT" modifiers="control"
        oncommand="NostalgyScrollMsg(-50);"/>
   <key keycode="VK_RIGHT" modifiers="control"
        oncommand="NostalgyScrollMsg(50);"/>
   <key keycode="VK_LEFT" modifiers="shift"
        oncommand="NostalgyScrollMsg(-50);"/>
   <key keycode="VK_RIGHT" modifiers="shift"
        oncommand="NostalgyScrollMsg(50);"/>
  </keyset>
 
   

 

    
   <hbox   id="status-bar">

        <hbox insertbefore="unreadMessageCount"   class="statusbar">
     <label  id="statusbar-nostalgy-label" class="statusbarpanel"
            value="&nostalgy.memo;"/>
     <label  id="statusbar-nostalgy-label-newRule" class="statusbarpanel"
            value="(n)ew rule"/>
 
            </hbox>

  <hbox id="nostalgy-statusbar"  style="display:inline-block; width:40em"
  insertbefore= "statusbar-nostalgy-label-newRule"  hidden="true">
  <label id="nostalgy-command-label"   for ="nostalgy-folderbox"/>

      <html:input is="autocomplete-input" id="nostalgy-folderbox"
   type="text"

   disableonsend="true"
   autocompletesearch="nostalgy-autocomplete"
   autocompletesearchparam="{}"
   timeout="300"
   maxrows="25"
   completedefaultindex="true"
   forcecomplete="true"

   minresultsforpopup="2"
   ignoreblurwhilesearching="true"

   ontextentered="NostalgyRunCommand();"
   ontextreverted="NostalgyHide(true);"
   completeselectedindex="true"
   highlightnonmatches="true"
   crop="center"
   recipienttype="addr_to"
   onkeyup="onNostalgyInputKeyPressed(event);"

   minlength= "40"
   size="60"

   />
  

   </hbox> 
   </hbox> 
`, ["chrome://nostalgy/locale/nostalgy.dtd"]);
*/
console.log("messenger-showCC");
window.getAttributeById("");

/*   
    window.QuickFolders.Util.logDebug('Adding Folder Listener...');
    window.QuickFolders_mailSession.AddFolderListener(window.QuickFolders.FolderListener, Components.interfaces.nsIFolderListener.all);
//   obsolete   window.QuickFolders.addLoadEventListener();
    window.QuickFolders.initDelayed(window, WL);
*/
}

function onUnload(isAddOnShutDown) {
    console.log("messenger-showCC unload");
    window.onNostalgyUnload();
    Components.classes["@mozilla.org/xre/app-info;1"].
    getService(Components.interfaces.nsIXULRuntime).invalidateCachesOnRestart();
}

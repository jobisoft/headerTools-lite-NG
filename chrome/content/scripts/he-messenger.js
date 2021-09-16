/*

 * Code addtions for TB 78 or later: Creative Commons (CC BY-ND 4.0):
 *      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 
 * Contributors:  Klaus Buecher/opto
 */

 var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");


Services.scriptloader.loadSubScript("chrome://hdrtoolslite/content/hdrtools.js", window, "UTF-8");
/**/

function onLoad(activatedWhileWindowOpen) {
  //  console.log (Services.appinfo.version);
 
    //WL.injectCSS("chrome://messenger/skin/input-fields.css");

    WL.injectElements(`
 
 
 <keyset id="mailKeys">
  <keyset id="headerToolsLightkeyset"/>
</keyset>  

<commandset id="mailCommands">
  <command id="headerToolsLightedit"
           observes="button_mark"
           oncommand="HeaderToolsLiteObj.edit();" />
  <command id="headerToolsLighteditFS"
           observes="button_mark"
           oncommand="HeaderToolsLiteObj.editFS();" />
</commandset>
 
<menupopup id="messageMenuPopup">
  <menu id="hdrToolsMessageMenu"
        label="&extName;"
        insertafter="messageMenuAfterMarkSeparator">
    <observes element="button_mark"
              attribute="disabled" />
    <menupopup>
      <menuitem id="headerToolsLightModify1"
                label="&changeDetails;"
                command="headerToolsLightedit">
      </menuitem>
      <menuitem id="headerToolsLightModify2"
                label="&fullSource;"
                command="headerToolsLighteditFS">
      </menuitem>
      <menuitem id="headerToolsLightSettings1"
                label="&prefTitle;"
                oncommand="HeaderToolsLiteObj.showSettings();">
      </menuitem>
    </menupopup>
  </menu>
  <menuseparator insertafter="hdrToolsMessageMenu" />
</menupopup>

<menupopup id="mailContext">
  <menu id="hdrToolsMailContextMenu"
        label="&extName;"
        insertafter="mailContext-sep-afterMarkMenu">
    <observes element="button_mark"
              attribute="disabled" />
    <menupopup>
      <menuitem id="headerToolsLightModify3"
                label="&changeDetails;"
                command="headerToolsLightedit">
      </menuitem>
      <menuitem id="headerToolsLightModify4"
                label="&fullSource;"
                command="headerToolsLighteditFS">
      </menuitem>
      <menuitem id="headerToolsLightSettings2"
                label="&prefTitle;"
                oncommand="HeaderToolsLiteObj.showSettings();">
      </menuitem>
    </menupopup>
  </menu>
  <menuseparator insertafter="hdrToolsMailContextMenu" />
</menupopup>
    
 
`, ["chrome://hdrtoolslite/locale/hdrtools.dtd"]);
/**/
//console.log("messenger-headertoolslite");
window.HeaderToolsLiteObj.init();


}

function onUnload(isAddOnShutDown) {
//    console.log("messenger-showCC unload");
    Components.classes["@mozilla.org/xre/app-info;1"].
    getService(Components.interfaces.nsIXULRuntime).invalidateCachesOnRestart();
}

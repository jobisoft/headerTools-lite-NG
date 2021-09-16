const { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

function savePrefs() {
  Services.prefs.setBoolPref("extensions.hdrtoolslite.putOriginalInTrash", document.getElementById("delOrig").checked);
  Services.prefs.setBoolPref("extensions.hdrtoolslite.use_imap_fix", document.getElementById("imapFix").checked);
  Services.prefs.setBoolPref("extensions.hdrtoolslite.add_htl_header", document.getElementById("addHTLheader").checked);
  if (document.getElementById("shortcutBox1").value.length > 0)
    Services.prefs.setStringPref("extensions.hdrtoolslite.edit_shortcut", document.getElementById("shortcutBox1").value);
  else
    Services.prefs.deleteBranch("extensions.hdrtoolslite.edit_shortcut");
  if (document.getElementById("shortcutBox2").value.length > 0)
    Services.prefs.setStringPref("extensions.hdrtoolslite.editFS_shortcut", document.getElementById("shortcutBox2").value);
  else
    Services.prefs.deleteBranch("extensions.hdrtoolslite.editFS_shortcut");
  var maxChars = document.getElementById("maxFSchars").value;
  if (maxChars == -1 || maxChars > 50)
    Services.prefs.setIntPref("extensions.hdrtoolslite.fullsource_maxchars", maxChars);
  else
    Services.prefs.setIntPref("extensions.hdrtoolslite.fullsource_maxchars", 50);
}

function onLoad() {
  document.addEventListener("dialogaccept", function () { savePrefs() });
  
  document.getElementById("delOrig").checked = Services.prefs.getBoolPref("extensions.hdrtoolslite.putOriginalInTrash");
  document.getElementById("imapFix").checked = Services.prefs.getBoolPref("extensions.hdrtoolslite.use_imap_fix");
  document.getElementById("addHTLheader").checked = Services.prefs.getBoolPref("extensions.hdrtoolslite.add_htl_header");
  try {
    document.getElementById("shortcutBox1").value = Services.prefs.getStringPref("extensions.hdrtoolslite.edit_shortcut");
    document.getElementById("shortcutBox2").value = Services.prefs.getStringPref("extensions.hdrtoolslite.editFS_shortcut");
  }
  catch (e) { }
  document.getElementById("maxFSchars").value = Services.prefs.getIntPref("extensions.hdrtoolslite.fullsource_maxchars");
}

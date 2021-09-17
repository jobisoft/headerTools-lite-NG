/*

 * Code addtions for TB 78 or later: Creative Commons (CC BY-ND 4.0):
 *      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 
 * Contributors:  Klaus Buecher/opto
 */






addEventListener("click", async (event) => {
	if (event.target.id.startsWith("donate")) {
		messenger.windows.openDefaultBrowser("https://www.paypal.com/donate?hosted_button_id=TZ9VBFHNNR5H6");
	}

});  

addEventListener("load", async (event) => {
	//debugger;
	let text = document.body.innerHTML;
  htmltext = text.replace(/{addon}/g, await browser.runtime.getManifest().name );
  htmltext2 = htmltext.replace(/{version}/g, await browser.runtime.getManifest().version);
  let browserInfo = await browser.runtime.getBrowserInfo()
  htmltext = htmltext2.replace(/{appver}/g, browserInfo.version);
  document.body.innerHTML=htmltext;
});
  


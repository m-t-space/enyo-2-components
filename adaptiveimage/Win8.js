if(enyo.platform.ie>=10) {
	var msViewportStyle = document.createElement("style");
	msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
	document.getElementsByTagName("head")[0].
	appendChild(msViewportStyle);
	//window.devicePixelRatio = (screen.width/document.documentElement.clientWidth);
	//window.addEventListener("resize", function() {

	  // Get screen size (inner/outerWidth, inner/outerHeight)
	  
	//}, false);
}
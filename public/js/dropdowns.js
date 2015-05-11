var filezillaHidden = true;
var sublimeHidden = true;

window.onload = function () {
	// Filezilla section dropdown
	document.getElementById("filezilla-title").addEventListener("click", function () {
		if(filezillaHidden) {
			document.getElementById("filezilla-content").style.display = "block";
			document.getElementById("filezilla-down").style.display = "none";
			document.getElementById("filezilla-up").style.display = "inline";
			filezillaHidden = false;
		} else {
			document.getElementById("filezilla-content").style.display = "none";
			document.getElementById("filezilla-down").style.display = "inline";
			document.getElementById("filezilla-up").style.display = "none";
			filezillaHidden = true;
		}
	});

	// Sublime section dropdown
	document.getElementById("sublime-title").addEventListener("click", function () {
		if(filezillaHidden) {
			document.getElementById("sublime-content").style.display = "block";
			document.getElementById("sublime-down").style.display = "none";
			document.getElementById("sublime-up").style.display = "inline";
			filezillaHidden = false;
		} else {
			document.getElementById("sublime-content").style.display = "none";
			document.getElementById("sublime-down").style.display = "inline";
			document.getElementById("sublime-up").style.display = "none";
			filezillaHidden = true;
		}
	});

	// Finder section dropdown
	document.getElementById("finder-title").addEventListener("click", function () {
		if(filezillaHidden) {
			document.getElementById("finder-content").style.display = "block";
			document.getElementById("finder-down").style.display = "none";
			document.getElementById("finder-up").style.display = "inline";
			filezillaHidden = false;
		} else {
			document.getElementById("finder-content").style.display = "none";
			document.getElementById("finder-down").style.display = "inline";
			document.getElementById("finder-up").style.display = "none";
			filezillaHidden = true;
		}
	});
};
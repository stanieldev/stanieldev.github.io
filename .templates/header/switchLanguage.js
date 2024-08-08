// Constants
PARENT = "sdev-settings-lang";
DEFAULT = "EN";
loadLangStartup();

// Page Startup
function loadLangStartup() {

	// Fetch the language from the local storage
	const langID = fetchLocalStorage("lang", DEFAULT);

	// Highlight the stored language
	const langHTML = fetchObjectHTML(PARENT, langID);
		  langHTML.classList.add("text-highlight");

	// Load the content for the language
	loadLangContent(langID);
}

// Switch Language
function switchLanguage(langID) {

	// If the language is already highlighted, ignore the click
	if (localStorage.getItem("lang") === langID) { return; }

	// Remove the highlight from the previous language
	const previousLangID = fetchLocalStorage("lang");
	const previousLangHTML = fetchObjectHTML(PARENT, previousLangID);
		  previousLangHTML.classList.remove("text-highlight");

	// Highlight the clicked language
	const langHTML = fetchObjectHTML(PARENT, langID);
		  langHTML.classList.add("text-highlight");

	// Save the selected language to the local storage
	localStorage.setItem("lang", langID);

	// Load the content for the language
	loadLangContent(langID);
}

// Load the content for the language
function loadLangContent(langID) {
	const langIDtoContent = {
		"EN": "English",
		"FR": "French"
	};
	console.debug("Selected Language: " + langIDtoContent[langID]);
}

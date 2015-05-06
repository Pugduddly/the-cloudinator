function checkSupport() {
	// Check browser support
	if (typeof(Storage) != "undefined") {
		return true
	} else {
		derror('We\'re sorry, but we cannot save data because your browser does not support local storage.');
		return false;
	}
}

function storeItem(name, value) {
	localStorage.setItem(name, value);
}

function retrieveItem(name) {
	return localStorage.getItem(name);
}

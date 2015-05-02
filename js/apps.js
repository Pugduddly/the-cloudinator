function loadApp(pathToApp, appId, appTitle){
	var appsElement = document.getElementById('apps');
	appsElement.innerHTML = appsElement.innerHTML + '<div class="application" title="' + appTitle + '" id="' + appId + '"></div>';
	$.get(pathToApp, function(data) {
		$('#' + appId).html(data);
	});
}
function addQuicklaunchButton(buttonId, buttonTitle, linkedAppId){
	var btn = document.createElement('button');
	var t = document.createTextNode(buttonTitle);
	btn.appendChild(t);
	btn.classList.add('button');
	document.getElementById('quicklaunch').appendChild(btn);
	document.getElementById(buttonId).style.display = 'none';
	document.getElementById(buttonId).onclick = 'openApp(\'' + linkedAppId +'\');';
}
function setTitle(appId, appTitle){
	$('#' + appId).dialog('option', 'title', appTitle);
}
function getTitle(appId, appTitle){
	return $('#' + appId).dialog('option', 'title');
}
function openApp(appId){
	$('#' + appId).dialog({
		width: 400,
		height: 400
	});
}
function killApp(appId){
	$('#' + appId).dialog('destroy');
}
function closeApp(appId){
	$('#' + appId).dialog('close');
}
function deleteApp(appId){
	var isOpen = $('#' + appId).dialog('isOpen');
	if(isOpen){
		killApp(appId);
	}
	var appElement = document.getElementById(appId);
	appElement.innerHTML = '';
}

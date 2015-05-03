/* App API for The Cloudinator
 * 
 * 1.  dalert: pop up an alert dialog.
 * 2.  derror: pop up an error dialog.
 * 3.  loadApp: load an app.
 * 4.  getAppId: gets the ID of the app that contains the HTML DOM element given.
 * 5.  maximizeWindow: maximizes the window specified.
 * 6.  restoreWindow: restores the window specified to the defult size of 400*400.
 * 7.  setTitle: sets the title of the window specified.
 * 8.  getTitle: gets the title of the window specified.
 * 9.  openApp: open the app specified.
 * 10. openDialog: open the app specified in a dialog format..
 * 11. killApp: kill the app specified (return it to its pre-opened state).
 * 12. closeApp: close the app specified.
 * 13. deleteApp: kill the app specified and then wipe it out (delete all it's contents, useful for malware protection).
 */
function dalert(text){
	$('#alert_text')[0].innerHTML = text;
	$('#alert').dialog({buttons: [{text: 'Ok',click: function() {$( this ).dialog('close');}}]});
}
function derror(text){
	$('#error_text').innerHTML = text;
	$('#error').dialog({buttons: [{text: 'Ok',click: function() {$( this ).dialog('close');}}]});
}	
function loadApp(pathToApp, appId, appTitle){
	var appsElement = document.getElementById('apps');
	appsElement.innerHTML = appsElement.innerHTML + '<div class="application" oncontextmenu="windowRightClick(this); return false" title="' + appTitle + '" id="' + appId + '"></div>';
	$.get(pathToApp, function(data) {
		$('#' + appId).html(data);
		$('#' + appId).bind('dialogclose', function(event) {
			$('#menu')[0].classList.remove('showOnHover');
		});
	});
}
function getAppId(e){
	return $(e).parents('.ui-dialog').find('.application')[0].id;
}
function maximizeWindow(theWindow){
	$('#menu')[0].classList.add('showOnHover');
	$(theWindow).dialog('option', {width: document.body.clientWidth, height: document.body.clientHeight});
}
function restoreWindow(theWindow){
	$('#menu')[0].classList.remove('showOnHover');
	$(theWindow).dialog('option', {width: 400, height: 400});
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
function openDialog(dialogId){
	$('#' + dialogId).dialog({
		width: 400,
		height: 200
	});
}
function killApp(appId){
	$('#menu')[0].classList.remove('showOnHover');
	$('#' + appId).dialog('destroy');
}
function closeApp(appId){
	$('#menu')[0].classList.remove('showOnHover');
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

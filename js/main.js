var cloudinatorVersion = 0.06;
var cloudscapeVersion = 0.05;

window.onerror = function(msg, url, line) {
   error('An error occurred', 'An error occurred', '%20%20%20%20' + msg + '<br>%20%20%20%20%20%20%20%20at ' + url + '<br>%20%20%20%20%20%20%20%20on line ' + line + '<br>');
}

function osLoaded() {
	// Initialize tooltips
	$(document).tooltip();
	// Setup rightclick events
	$('#body').on('contextmenu', '.ui-dialog', function(e){
		e.stopPropagation();
		windowRightClick(e.toElement);
	});
	$('#body').on('contextmenu', '#menu', function(e){
		e.stopPropagation();
		menuButtonRightClick();
	});
	$('#body').on('contextmenu', '.menubutton', function(e){
		e.stopPropagation();
		menuAppButtonRightClick($(e.target).parents('.ui-button')[0]);
	});
	$('#body').on('contextmenu', '.quicklaunch', function(e){
		e.stopPropagation();
		quicklaunchButtonRightClick(e.target);
	});
	$('#body').on('contextmenu', '.ui-dialog-titlebar-close', function(e){
		e.stopPropagation();
		appCloseRightClick(e.toElement);
	});
	// Setup link click events
	$('#body').on('contextmenu', 'a', function(e){
		e.stopPropagation();
		linkRightClick(e.toElement);
	});
	$('#body').on('click', 'a', function(e){
		e.preventDefault();
		openApp('webBrowser');
		browserGo($(e.toElement).data('location'));
	});
	// Get preferences from cookies stored in browser
	var backgroundCookie = getCookie('background');
	var menubuttonCookie = getCookie('menubutton');
	var quicklaunchCookie = getCookie('quicklaunch');
	if(backgroundCookie != ''){
		document.getElementById('body').style.background = backgroundCookie;
	}
	if(menubuttonCookie != ''){
		if(menubuttonCookie == '1'){
			menubuttonCookie = 'images/menu.png';
		}else if(menubuttonCookie == '2'){
			menubuttonCookie = 'images/favicon.png';
		}
		document.getElementById('icon').src = menubuttonCookie;
	}
	if(quicklaunchCookie != ''){
		var b = document.getElementById('quickbar');
		var e = document.getElementById('menu');
		if(quicklaunchCookie == '1'){
			b.style.background = '';
			b.classList.add('transparent');
			e.classList.remove('vista');
		}else if(quicklaunchCookie == '2'){
			b.classList.remove('transparent');
			e.classList.add('vista');
			b.style.background = 'url(images/vista-bar.png)';
		}
	}
	// Load built-in applications
	loadApp('system/apps/settings/settings.fax', 'settings', 'Settings', function(){
		// Adjust settings to fit cookies
		var backgroundCookie = getCookie('background');
		var menubuttonCookie = getCookie('menubutton');
		var quicklaunchCookie = getCookie('quicklaunch');
		if(backgroundCookie != ''){
			document.getElementById('background' + backgroundCookie.split(' ')[0].split('/')[2].split(')')[0]).selected = 'selected';
		}
		if(menubuttonCookie != ''){
			$('#menuicon' + menubuttonCookie)[0].selected = 'selected';
		}
		if(quicklaunchCookie != ''){
			$('#quickicon' + quicklaunchCookie)[0].selected = 'selected';
		}
	});
	loadApp('system/apps/player/audioplayer.fax', 'audioPlayer', 'Audio Player');
	loadApp('system/apps/player/videoplayer.fax', 'videoPlayer', 'Video Player');
	loadApp('system/apps/web browser/browser.fax','webBrowser', 'Web Browser');
	loadApp('system/fax/about.fax', 'about', 'About The Cloudinator');
	loadApp('system/fax/run.fax', 'run', 'Run');
}

function error(title, header, message){
	window.location = 'system/bin/error.htm?title=' + title + '&header=' + header + '&details=' + message;
}

function toggleFullScreen() {
	if (screenfull.enabled) {
        screenfull.toggle();
    }else{
        derror('We\'re sorry, but there was a problem with fullscreen mode.');
    }
    document.addEventListener(screenfull.raw.fullscreenerror, function (event) {
        derror('We\'re sorry, but there was a problem with fullscreen mode.');
    });
}

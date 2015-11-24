var cloudinatorVersion = "1.2";
var cloudscapeVersion = "0.9";

window.onerror = function(msg, url, line) {
   error('An error occurred', 'An error occurred', '&nbsp;&nbsp;&nbsp;&nbsp;' + msg + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;at ' + url + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on line ' + line + '<br>');
}

function osLoaded() {
	// Check browser type (The Cloudinator only supports Google Chrome)
	var isWebkit = (window.webkitURL != null);
	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	var isFirefox = typeof InstallTrigger !== 'undefined';
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	var isChrome = !!window.chrome && !isOpera;
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	var isChromium = (new Audio().canPlayType('audio/mpeg')) == "probably";
	var browserString = '';
	if(isOpera) browserString = 'Opera';
	else if(isFirefox) browserString = 'Mozilla Firefox';
	else if(isSafari) browserString = 'Safari';
	else if(isIE) browserString = 'Internet Explorer';
	else if(isChrome) browserString = 'Google Chrome';
	else if(isChromium) browserString = 'Chromium';
	else browserString = 'you are using';
	if(!isChrome && !isChromium) {
		error('Incompatible Browser Error', 'Incompatible Browser Error', 'Sorry, the web browser ' + browserString + ' is not supported.<br>To use The Cloudinator, please upgrade to <a target="_blank" href="http://chrome.google.com">Google Chrome</a>.');
	}
	// Initialize tooltips
	$(document).tooltip();
	// Setup rightclick events
	$('body').on('contextmenu', '.ui-dialog', function(e){
		e.stopPropagation();
		windowRightClick(e.toElement);
	});
	$('body').on('contextmenu', '#menu', function(e){
		e.stopPropagation();
		menuButtonRightClick();
	});
	$('body').on('contextmenu', '#icon2', function(e){
		e.stopPropagation();
		menuButtonRightClick();
	});
	$('body').on('contextmenu', '.menubutton', function(e){
		e.stopPropagation();
		menuAppButtonRightClick($(e.target).parents('.ui-button')[0]);
	});
	$('body').on('contextmenu', '.quicklaunch', function(e){
		e.stopPropagation();
		quicklaunchButtonRightClick(e.target);
	});
	$('body').on('contextmenu', '.ui-dialog-titlebar-close', function(e){
		e.stopPropagation();
		appCloseRightClick(e.toElement);
	});
	// Setup link click events
	$('body').on('contextmenu', 'a', function(e){
		e.stopPropagation();
		linkRightClick(e.toElement);
	});
	$('body').on('click', 'a', function(e){
		e.preventDefault();
		openApp('webBrowser');
		browserGo($(e.toElement).data('location'));
	});
	// Get preferences from local storage
	var backgroundItem = localStorage.getItem('background');
	var menubuttonItem = localStorage.getItem('menubutton');
	var quicklaunchItem = localStorage.getItem('quicklaunch');
	if(backgroundItem){
		document.getElementById('body').style.background = backgroundItem;
	}
	if(menubuttonItem){
		if(menubuttonItem == '1'){
			menubuttonItem = 'images/menu.png';
		}else if(menubuttonItem == '2'){
			menubuttonItem = 'images/favicon.png';
		}
		document.getElementById('icon').src = menubuttonItem;
	}
	if(quicklaunchItem){
		var b = document.getElementById('quickbar');
		var e = document.getElementById('menu');
		if(quicklaunchItem == '1'){
			b.style.background = '';
			b.classList.remove('transparent');
			b.classList.add('transparent');
			e.classList.remove('vista');
			e.classList.remove('xp');
			e.classList.add('transparent');
		}else if(quicklaunchItem == '2'){
			b.classList.remove('transparent');
			b.classList.remove('xp');
			e.classList.remove('xp');
			e.classList.remove('transparent');
			e.classList.remove('vista');
			e.classList.add('vista');
			b.style.background = 'url(images/vista-bar.png)';
		}else if(quicklaunchItem == '3'){
			b.classList.remove('transparent');
			b.classList.remove('vista');
			e.classList.remove('transparent');
			e.classList.remove('vista');
			e.classList.add('xp');
			b.style.background = 'url(images/bluebar.png)';
			setItem('quicklaunch', '3');
		}
	}
	// Load built-in applications
	loadApp('system/apps/settings/settings.fax', 'settings', 'Settings', function(){
		// Adjust settings to fit cookies
		var backgroundItem = localStorage.getItem('background');
		var menubuttonItem = localStorage.getItem('menubutton');
		var quicklaunchItem = localStorage.getItem('quicklaunch');
		if(backgroundItem){
			document.getElementById('background' + backgroundItem.split(' ')[0].split('/')[2].split(')')[0]).selected = 'selected';
		}
		if(menubuttonItem){
			$('#menuicon' + menubuttonItem)[0].selected = 'selected';
		}
		if(quicklaunchItem){
			$('#quickicon' + quicklaunchItem)[0].selected = 'selected';
		}
	});
	loadApp('system/apps/player/audioplayer.fax', 'audioPlayer', 'Audio Player');
	loadApp('system/apps/player/videoplayer.fax', 'videoPlayer', 'Video Player');
	loadApp('system/apps/web browser/browser.fax','webBrowser', 'Web Browser');
	loadApp('system/fax/about.fax', 'about', 'About The Cloudinator');
	loadApp('system/fax/run.fax', 'run', 'Run');
	addQuickIcon('system/apps/settings/settings.png', 'Settings', 'settings');
	addQuickIcon('system/apps/player/player.png', 'Audio Player', 'audioPlayer');
	addQuickIcon('system/apps/player/player.png', 'Video Player', 'videoPlayer');
	addQuickIconDialog('images/run.png', 'Run Program', 'run');
	addQuickIcon('system/apps/web browser/browser.png', 'Web Browser', 'webBrowser');
}

function error(title, header, message){
	window.location = 'system/bin/error.htm?title=' + encodeURIComponent(title) + '&header=' + encodeURIComponent(header) + '&details=' + encodeURIComponent(message);
}

function toggleFullScreen() {
	if (screenfull === null) {
		derror('We\'re sorry, but there was a problem with fullscreen mode.');
	} else {
		if (screenfull.enabled) {
			screenfull.toggle();
		}else{
			derror('We\'re sorry, but there was a problem with fullscreen mode.');
		}
		document.addEventListener(screenfull.raw.fullscreenerror, function (event) {
			derror('We\'re sorry, but there was a problem with fullscreen mode.');
		});
	}
}

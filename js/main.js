var cloudinatorVersion = 0.04;

function osLoaded(){
	// Initialize tooltips
	$(document).tooltip();
	// Setup window rightclick events
	$('#body').on('contextmenu', '.ui-dialog', function(e){
		e.stopPropagation();
		windowRightClick(e.toElement);
	});
	// Load built-in applications
	loadApp('system/apps/settings/settings.fax', 'settings', 'Settings');
	loadApp('system/apps/player/audioplayer.fax', 'audioPlayer', 'Audio Player');
	loadApp('system/apps/player/videoplayer.fax', 'videoPlayer', 'Video Player');
	loadApp('system/fax/about.fax', 'about', 'About The Cloudinator');
	loadApp('system/fax/run.fax', 'run', 'Run');
}

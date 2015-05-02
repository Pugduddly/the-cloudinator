var cloudinatorVersion = 0.02;

function osLoaded(){
	// Initialize tooltips
	$(document).tooltip();
	// Load built-in applications
	loadApp('system/apps/settings/settings.fax', 'settings', 'Settings');
	loadApp('system/apps/player/audioplayer.fax', 'audioPlayer', 'Audio Player');
	loadApp('system/apps/player/videoplayer.fax', 'videoPlayer', 'Video Player');
}

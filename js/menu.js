var menuOpen = false;
var quickBarLoc = 12;
function toggleMenu(){
	if(document.getElementById('menu').style.height === '0px'){
		document.getElementById('menu').style.height = '100%';
		document.getElementById('icon').style.left = '175px';
		document.getElementById('icon2').style.left = '175px';
		if(document.getElementById('menu').classList[4] == 'vista') document.getElementById('menu').style.border = '1px solid #A1A1A1';
		if(document.getElementById('menu').classList[4] == 'xp') document.getElementById('menu').style.border = '1px solid #1854C2';
		document.getElementById('icon').classList.toggle('rotate360');
		document.getElementById('icon2').classList.toggle('rotate360');
		setTimeout(function(){
			menuOpen = true;
		}, 500);
	}else{
		document.getElementById('menu').style.height = '0px';
		document.getElementById('menu').style.border = '0px solid #A1A1A1';
		document.getElementById('icon').style.left = '0px';
		document.getElementById('icon2').style.left = '0px';
		document.getElementById('icon').classList.toggle('rotate360');
		document.getElementById('icon2').classList.toggle('rotate360');
		menuOpen = false;
	}
}
function openMenu(){
	if(menuOpen === false){
		document.getElementById('menu').style.height = '100%';
		document.getElementById('icon').style.left = '175px';
		document.getElementById('icon2').style.left = '175px';
		if(document.getElementById('menu').classList[4] == 'vista') document.getElementById('menu').style.border = '1px solid #A1A1A1';
		if(document.getElementById('menu').classList[4] == 'xp') document.getElementById('menu').style.border = '1px solid #1854C2';
		document.getElementById('icon').classList.toggle('rotate360');
		document.getElementById('icon2').classList.toggle('rotate360');
		setTimeout(function(){
			menuOpen = true;
		}, 500);
	}
}
function closeMenu(){
	if(menuOpen === true){
		document.getElementById('menu').style.height = '0px';
		document.getElementById('menu').style.border = '0px solid #A1A1A1';
		document.getElementById('icon').style.left = '0px';
		document.getElementById('icon2').style.left = '0px';
		document.getElementById('icon').classList.toggle('rotate360');
		document.getElementById('icon2').classList.toggle('rotate360');
		menuOpen = false;
	}
}
function addQuickIcon(img, appName, appId){
	var ql = document.getElementById('quicklaunch');
	ql.innerHTML = ql.innerHTML + '<img style="left: ' + quickBarLoc + 'px;display: inline-block" title="' + appName + '" src="' + img + '" class="quicklaunch" onclick="openApp(\'' + appId + '\')"/>\u000D'
	quickBarLoc += 12;
}
function addQuickIconDialog(img, appName, appId){
	var ql = document.getElementById('quicklaunch');
	ql.innerHTML = ql.innerHTML + '<img style="left: ' + quickBarLoc + 'px;display: inline-block" title="' + appName + '" src="' + img + '" class="quicklaunch" onclick="openDialog(\'' + appId + '\')"/>\u000D'
	quickBarLoc += 12;
}

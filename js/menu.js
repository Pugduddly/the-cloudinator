var menuOpen = false;
function toggleMenu(){
	if(document.getElementById('menu').style.height === '0px'){
		document.getElementById('menu').style.height = '100%';
		document.getElementById('icon').style.left = '175px';
		document.getElementById('icon').classList.toggle('rotate360');
		setTimeout(function(){
			menuOpen = true;
		}, 500);
	}else{
		document.getElementById('menu').style.height = '0px';
		document.getElementById('icon').style.left = '0px';
		document.getElementById('icon').classList.toggle('rotate360');
		menuOpen = false;
	}
}
function openMenu(){
	if(menuOpen === false){
		document.getElementById('menu').style.height = '100%';
		document.getElementById('icon').style.left = '175px';
		document.getElementById('icon').classList.toggle('rotate360');
		setTimeout(function(){
			menuOpen = true;
		}, 500);
	}
}
function closeMenu(){
	if(menuOpen === true){
		document.getElementById('menu').style.height = '0px';
		document.getElementById('icon').style.left = '0px';
		document.getElementById('icon').classList.toggle('rotate360');
		menuOpen = false;
	}
}

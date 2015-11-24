// Custom drop-down menus for The Cloudinator

function selectMenu(e){ // called when select is clicked
	e.selectedIndex++;
	if(e.selectedIndex >= e.options.length){
		e.selectedIndex = 0;
	}
	if(e.selectedIndex == -1){
		e.selectedIndex++;
	}
	$(e).trigger('change');
}

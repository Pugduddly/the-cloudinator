// Custom drop-down menus for The Cloudinator

// To-Do: make change event fire

function selectMenu(e){
	e.selectedIndex++;
	if(e.selectedIndex >= e.options.length){
		e.selectedIndex = 0;
	}
	if(e.selectedIndex == -1){
		e.selectedIndex++;
	}
	$(e).trigger("change");
}

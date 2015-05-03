var vContextMenu = Array();
var isContextMenu = false;
var CurX;
var CurY;

function fMouseDown() {
	CurX = window.event.clientX;
	CurY = window.event.clientY;
}

function rcContextMenu() {

	if (vContextMenu.length != 0) {
	
	drawContextMenu();
	
	targX = CurX; //0; //event.clientX;
	targY = CurY; //0; //event.clientY;
	
	//alert
	
	testW = document.getElementById('lContextMenu').offsetWidth;
	testH = document.getElementById('lContextMenu').offsetHeight;
	
	testX = targX + document.getElementById('lContextMenu').offsetWidth;
	testY = targY + document.getElementById('lContextMenu').offsetHeight;
	
	sW = document.body.clientWidth;//document.body.clientWidth;
	sH = document.body.clientHeight;//document.body.clientHeight;
	
	if (testX >= sW) { targX = targX - testW; }
	if (testY >= sH) { targY = targY - testH; }
	
	document.getElementById('lContextMenu').style.left = targX;
	document.getElementById('lContextMenu').style.top = targY;
	document.getElementById('lContextMenu').style.visibility = 'visible';

	}
	
}

function rcCloseContext() {
	document.getElementById('lContextMenu').style.left = 0;
	document.getElementById('lContextMenu').style.top = 0;
	document.getElementById('lContextMenu').style.visibility = 'hidden';
}

function drawContextMenu() {

	var outMsg = '<table cellpadding="0" cellspacing="0" style="border: 1px solid #979797;"><tr><td><table cellpadding="0" cellspacing="0" style="border: 2px solid #f5f5f5;"><tr><td><table cellpadding="4" cellspacing="0" border="0" width="200" bgcolor="#f1f1f1" style="font-size: 12;font-family: arial;"><tr><td rowspan="100" width="15" style="border-right: 1px solid #979797;" nowrap><img width="15" height="1"></td>';
	
	var len = vContextMenu.length - 1;
	
	inMsg = vContextMenu[0];
	inCmd = vContextMenu[1];
	outMsg = outMsg + '<td onMouseOver="this.style.background = \'#0A246A\'; this.style.color = \'#ffffff\';"  onMouseOut="this.style.background = \'\'; this.style.color = \'\';" onClick="rcCloseContext();' + inCmd + ';" nowrap>' + inMsg + '</td></tr>';
	
	for (var i=2;i<=len;i++) {
		inMsg = vContextMenu[i];
		inCmd = vContextMenu[i+1];
		
		if (inMsg != '-HR-') { 
			outMsg = outMsg + '<tr><td onMouseOver="this.style.background = \'#0A246A\'; this.style.color = \'#ffffff\';"  onMouseOut="this.style.background = \'\'; this.style.color = \'\';" onClick="rcCloseContext();' + inCmd + ';" nowrap>' + inMsg + '</td></tr>';
			i = i + 1;
		}
		else
		{
			i = i + 1;
			inMsg = vContextMenu[i];
			inCmd = vContextMenu[i+1];
			outMsg = outMsg + '<tr><td onMouseOver="this.style.background = \'#0A246A\'; this.style.color = \'#ffffff\';"  onMouseOut="this.style.background = \'\'; this.style.color = \'\';" style="border-top: 1px solid #979797;"  onClick="rcCloseContext();' + inCmd + ';" nowrap>' + inMsg + '</td></tr>';
			i = i + 1;
		}
	}
	
	outMsg = outMsg + '</table></td></tr></table></td></tr></table>';
	
	document.getElementById('lContextMenu').innerHTML = outMsg;
	
}

function desktopRightClick() {
	vContextMenu = Array('Toggle Menu', 'toggleMenu()', 'Settings', 'openApp(\'settings\')', 'Run', 'openDialog(\'run\')', '-HR-', 'About', 'openApp(\'about\')');
	rcContextMenu();
}

function windowRightClick(e) {
	vContextMenu = Array('Maximize', 'maximizeWindow(\'#' + getAppId(e) + '\')', 'Restore', 'restoreWindow(\'#' + getAppId(e) + '\')', 'Close', 'closeApp(\'' + getAppId(e) + '\')', '-HR-', 'About', 'openApp(\'about\')');
	rcContextMenu();
}

function cmCancel() {
	//window.event.cancelBubble = true;
}

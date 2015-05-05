function setCookie(name, value, days) {
	if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = '; expires='+date.toGMTString();
    }
    else var expires = '';
    document.cookie = name + '=' + value + expires + '; path=/';
}
function getCookie(name) {
    var cname = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(cname) == 0) return c.substring(cname.length,c.length);
    }
    return '';
}
function eraseCookie(name) {
    setCookie(name, '', -1);
}

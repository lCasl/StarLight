/* FUNCIONES COOKIES */
let barraaceptacion = document.getElementById('barraaceptacion');

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function leerCookie() {
    if (getCookie('aceptar_cookie') != '1') {
        barraaceptacion.style.display = 'flex';
    } else {
        barraaceptacion.style.display = 'none';
        document.getElementById('body').style.overflowY = 'scroll';
    }
}

function ponerCookie() {
    setCookie('aceptar_cookie', '1', 365);
    barraaceptacion.style.display = 'none';
    document.getElementById('body').style.overflowY = 'scroll';
}

$(document).ready(function() {
    leerCookie();
});

$(document).ready(function() {
    $("#contenedor-menu").find("a").click(function() {
        ponerCookie();
    });
});
/* FUNCIONES COOKIES */
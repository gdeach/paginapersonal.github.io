document.getElementById("icon_menu").addEventListener(clo)



window.onscroll = function(){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("icon__pag")
    var elemento2 = document.getElementById("icon__pag2")

    elemento1.style.bottom = posicion * 0.2 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}
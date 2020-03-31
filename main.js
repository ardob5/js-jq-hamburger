// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
// prendo lo zip che dopo vi allego e senza toccare l’HTML faccio funzionare l’hamburger menù;
// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.

// Vado ad assegnare una variabile agli elementi che devo andarmi a prendere dall'html
var menuTopRight = $(".header-right > a");
var burgerMenu = $(".hamburger-menu");
var closeMenu = $(".close > i");

// Apro il menuBurger al click
menuTopRight.on({
  click: function() {
    burgerMenu.show();
    burgerMenu.addClass('hamburger-menu.active');
  }
});

// Chiudo il menuBurger al click
closeMenu.on({
  click: function(){
    burgerMenu.hide();
  }
});

var user = document.getElementById("user_icon");
var menu = document.getElementsByClassName("user-menu");

user.addEventListener("click", function () {
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.add("active");
    }
});


var exit = document.getElementById("exit");


exit.addEventListener("click", function () {
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("active");
    }
});


var basket = document.getElementsByClassName("basket");
var basket_menu = document.getElementsByClassName("basket_menu");

Array.from(basket).forEach(element => {
    element.addEventListener("click", function (e) {
        e.preventDefault();
        for (var i = 0; i < basket_menu.length; i++) {
            basket_menu[i].classList.add("active_basket");
        }
    });
});

var exit_basket = document.getElementById("exit_basket");


exit_basket.addEventListener("click", function () {
    for (var i = 0; i < menu.length; i++) {
        basket_menu[i].classList.remove("active_basket");
    }
});
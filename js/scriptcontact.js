//--------------бургер--------------
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
burger.onclick = function () {
   menu.classList.toggle("active");
   burger.classList.toggle("active");
   document.body.classList.toggle("lock");
};
//----------------------------------
//------------выпадашка-------------
let dropBtn = document.querySelector(".header__nav-btn-menu");
let dropContent = document.querySelector(".header__nav__dropdown-on");
dropBtn.onclick = function () {
   dropContent.classList.toggle("show");
};
window.onclick = function (event) {
   if (!event.target.matches(".header__nav-btn-menu")) {
      let dropContent = document.querySelectorAll(".header__nav__dropdown-on");
      let i;
      for (i = 0; i < dropContent.length; i++) {
         let openDrop = dropContent[i];
         if (openDrop.classList.contains("show")) {
            openDrop.classList.remove("show");
         }
      }
   }
};

let cart = {};

function loadCart() {
    // проверя. есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
       // если есть - расшифровываю и записываю в переменную cart
       cart = JSON.parse(localStorage.getItem('cart'));  
    }
 }

function headerCartAmount(cart) {
    let sum = 0;
    for (var key in cart) {
       if (typeof(cart[key]) === 'object') {
          var key2 = Object.values(cart[key]);
          for (var i = 0; i < key2.length; i++) {
            key2 = key2.map(i=>x+=i,x=0).reverse()[0];
          }
       }
       sum += key2;
    }
    let out = '';
    if (sum != 0) {
 
       out += sum;
       $('.header__cart-amount').html(out);
    }
 }
 $(document).ready(function () {
    loadCart();
    headerCartAmount(cart);
 });

 let center = [55.72799256899472,37.580606499999924];

 function init() {
   let map = new ymaps.Map('map', {
       center: center,
       zoom: 16
   });

let placemark = new ymaps.Placemark(center,{},{

});

   map.controls.remove('fullscreenControl');
   map.controls.remove('rulerControl');
   map.behaviors.disable('scrollZoom');
   

   map.geoObjects.add(placemark);
}

ymaps.ready(init);
 
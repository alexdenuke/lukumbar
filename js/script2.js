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


let title = document.querySelector('.title');
let description = document.querySelector('.description');
console.log(window.location.pathname);
if (window.location.pathname == '/html/cooperation.php') {
   title.textContent = 'Сотрудничество с нашей компанией лукумбар.';
   description.content = 'Сотрудничество и вакансии в интернет-магазине лукумбар.';
}
if (window.location.pathname == '/html/delivery.php') {
   title.textContent = 'доставка турецких сладостей в Москве до двери.';
   description.content = 'Условия доставки интернет-магазина лукумбар.';
}
if (window.location.pathname == '/html/discount.php') {
   title.textContent = 'Скидки в интернет магазине лукумбар.';
   description.content = 'разнообразные бонусы и скидки на различный ассортимент товаров.';
}
if (window.location.pathname == '/html/info.php') {
   title.textContent = 'О компании лукумбар.';
   description.content = 'Информация интернет-магазина по доставке турецких сладостей лукумбар.';
}
if (window.location.pathname == '/html/news.php') {
   title.textContent = 'Новости нашего удивительного магазина.';
   description.content = 'Всегда держим в курсе событий наших гостей из интернета и не только.';
}
if (window.location.pathname == '/html/privacypolicy.php') {
   title.textContent = 'политика конфиденциальности сайта лукумбар.';
   description.content = 'В любой момент можете ознакомиться сданным документом.';
}
if (window.location.pathname == '/html/qualitycontrol.php') {
   title.textContent = 'контроль качество лукумбар.';
   description.content = 'Информация о качестве нашей продукции.';
}
if (window.location.pathname == '/html/wholesale.php') {
   title.textContent = 'Турецкий лукум и пахлава оптом!';
   description.content = 'турецкие товары оптом по всей России и не только! Звоните, пишите. МАСШТАБНО!';
}


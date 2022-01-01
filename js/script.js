
//--------------бургер--------------
let burgerWrap = document.querySelector(".header__burger-wrap");
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
burgerWrap.onclick = function () {
   menu.classList.toggle("active");
   burger.classList.toggle("active");
   burgerWrap.classList.toggle("active");
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
//---------------------------------
//-----------слайдер---------------
// let slides = document.querySelectorAll(".slide");
// let prev = document.querySelector(".slide__prev-img");
// let next = document.querySelector(".slide__next-img");
// let dots = document.querySelectorAll(".slider__dot");
// let index = 0;
// let activeSlide = (n) => {
//    for (slide of slides) {
//       slide.classList.remove("active");
//    }
//    slides[n].classList.add("active");
// };
// let activeDot = (n) => {
//    for (dot of dots) {
//       dot.classList.remove("active");
//    }
//    dots[n].classList.add("active");
// };
// let prepareCurrentSlide = (ind) => {
//    activeSlide(ind);
//    activeDot(ind);
// };
// let nxtSlide = () => {
//    if (index == slides.length - 1) {
//       index = 0;
//       prepareCurrentSlide(index);
//       clearInterval(interval);
//    } else {
//       index++;
//       prepareCurrentSlide(index);
//       clearInterval(interval);
      
//    }
// };
// let prevSlide = () => {
//    if (index == 0) {
//       index = slides.length - 1;
//       prepareCurrentSlide(index);
//       clearInterval(interval);
//    } else {
//       index--;
//       prepareCurrentSlide(index);
//       clearInterval(interval);
//    }
// };
// dots.forEach((item, indexDot) => {
//    item.addEventListener("click", () => {
//       index = indexDot;
//       prepareCurrentSlide(index);
//       clearInterval(interval);
//    });
// });
// next.addEventListener("click", nxtSlide);
// prev.addEventListener("click", prevSlide);
// const interval = setInterval(nxtSlide, 3000);
//--------------------------------------
//-------------корзина------------------
let cart = {};


function init() {
   $.getJSON("goods.json", goodsOut );
}

function goodsOut(data) {
   let out = '';
   for (let key in data) {
      if (key < 50 && (window.location.pathname == '/lukumbar/index.php' || window.location.pathname == '/lukumbar/')) {
         out += '<div class="catalog__item">';
         out += '<div class="catalog__img-wrap">';
         out += '<a href="productcard.php" class="catalog__img-link">';
         out += `<img class="catalog__img" data-id="${key}" src="${data[key].img}">`;
         out += '</a>';
         out += '</div>';
         out += `<p class="catalog__name">${data[key]['name']}</p>`;
         out += '<div class="catalog__weight-wrap">';
         out += `<button data-id="${key}" class="catalog__weight active">${data[key]['weight'][0]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][1]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][2]} гр</button>`;
         out += '</div>';
         out += '<div class="catalog__price-btn-buy-wrap">';
         out += `<div class="catalog__price">${data[key]['cost'][0]} &#8381;</div>`;
         out += `<button data-id="${key}" class="catalog__btn-buy">в корзину</button>`;
         out += '</div>';
         out += '</div>';
         out += '</div>';
      }
      if (key > 50 && key < 101 &&  window.location.pathname == '/lukumbar/pahlava.php') {
         out += '<div class="catalog__item">';
         out += '<div class="catalog__img-wrap">';
         out += '<a href="productcard.php" class="catalog__img-link">';
         out += `<img class="catalog__img" data-id="${key}" src="${data[key].img}">`;
         out += '</a>';
         out += '</div>';
         out += `<div class="catalog__name">${data[key]['name']}</div>`;
         out += '<div class="catalog__weight-wrap">';
         out += `<button data-id="${key}" class="catalog__weight active">${data[key]['weight'][0]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][1]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][2]} гр</button>`;
         out += '</div>';
         out += '<div class="catalog__price-btn-buy-wrap">';
         out += `<div class="catalog__price">${data[key]['cost'][0]} &#8381;</div>`;
         out += `<button data-id="${key}" class="catalog__btn-buy">в корзину</button>`;
         out += '</div>';
         out += '</div>';
      }
      if (key > 100 && key < 151 && window.location.pathname == '/lukumbar/halva.php') {
         out += '<div class="catalog__item">';
         out += '<div class="catalog__img-wrap">';
         out += '<a href="productcard.php" class="catalog__img-link">';
         out += `<img class="catalog__img" data-id="${key}" src="${data[key].img}">`;
         out += '</a>';
         out += '</div>';
         out += `<div class="catalog__name">${data[key]['name']}</div>`;
         out += '<div class="catalog__weight-wrap">';
         out += `<button data-id="${key}" class="catalog__weight active">${data[key]['weight'][0]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][1]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][2]} гр</button>`;
         out += '</div>';
         out += '<div class="catalog__price-btn-buy-wrap">';
         out += `<div class="catalog__price">${data[key]['cost'][0]} &#8381;</div>`;
         out += `<button data-id="${key}" class="catalog__btn-buy">в корзину</button>`;
         out += '</div>';
         out += '</div>';
      }
      if (key > 150 && key < 201 && window.location.pathname == '/lukumbar/tea.php') {
         out += '<div class="catalog__item">';
         out += '<div class="catalog__img-wrap">';
         out += '<a href="productcard.php" class="catalog__img-link">';
         out += `<img class="catalog__img" data-id="${key}" src="${data[key].img}">`;
         out += '</a>';
         out += '</div>';
         out += `<div class="catalog__name">${data[key]['name']}</div>`;
         out += '<div class="catalog__weight-wrap">';
         out += `<button data-id="${key}" class="catalog__weight active">${data[key]['weight'][0]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][1]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][2]} гр</button>`;
         out += '</div>';
         out += '<div class="catalog__price-btn-buy-wrap">';
         out += `<div class="catalog__price">${data[key]['cost'][0]} &#8381;</div>`;
         out += `<button data-id="${key}" class="catalog__btn-buy">в корзину</button>`;
         out += '</div>';
         out += '</div>';
      }
      if (key > 200 && key < 251 &&  window.location.pathname == '/lukumbar/coffee.php') {
         out += '<div class="catalog__item">';
         out += '<div class="catalog__img-wrap">';
         out += '<a href="productcard.php" class="catalog__img-link">';
         out += `<img class="catalog__img" data-id="${key}" src="${data[key].img}">`;
         out += '</a>';
         out += '</div>';
         out += `<div class="catalog__name">${data[key]['name']}</div>`;
         out += '<div class="catalog__weight-wrap">';
         out += `<button data-id="${key}" class="catalog__weight active">${data[key]['weight'][0]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][1]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][2]} гр</button>`;
         out += '</div>';
         out += '<div class="catalog__price-btn-buy-wrap">';
         out += `<div class="catalog__price">${data[key]['cost'][0]} &#8381;</div>`;
         out += `<button data-id="${key}" class="catalog__btn-buy">в корзину</button>`;
         out += '</div>';
         out += '</div>';
      }
   }
   $('.catalog').html(out);
   $('.catalog__btn-buy').on('click', addToCart);

   
   function chooseWeight() {
      let weight = document.querySelectorAll(".catalog__weight");
      for (let i = 0; i < weight.length; i++) {
        weight[i].addEventListener("click", function (e) {
          const weightWrap = weight[i].closest(".catalog__weight-wrap");
          const buttonList = weightWrap.querySelectorAll("button");
          buttonList.forEach((button) => (button.classList.remove('active')));
          e.target.classList.add('active');
          let price = e.target.parentElement.nextElementSibling.firstElementChild;
         let id = $(this).attr('data-id');
         if (buttonList[0].classList.contains('active')){
            price.innerHTML = `${data[id]['cost'][0]} &#8381`;
         }
         if (buttonList[1].classList.contains('active')){
            price.innerHTML = `${data[id]['cost'][1]} &#8381`;
         }
         if (buttonList[2].classList.contains('active')){
            price.innerHTML = `${data[id]['cost'][2]} &#8381`;
         }
        });
      }
    }
    chooseWeight();
   
    function addToCart() {
      let buttons = this.parentElement.previousElementSibling.children;
      for (let i = 0; i < buttons.length; i++) {
         if (buttons[i].classList.contains('active') == true) {
            var activeButton = i;
         }
      }
      let id = $(this).attr('data-id');
      if (cart[id] == undefined) {
         cart[id] = {};
         cart[id][activeButton] = 1;
      }
      else if (cart[id][activeButton] == undefined) {
         cart[id][activeButton] = 1;
      }
      else {
         cart[id][activeButton] ++;
      }
      saveCart();
      headerCartAmount(cart);
     
   }

   let animeButton = document.querySelectorAll('.catalog__btn-buy');
   let cart10 = document.querySelector('.header__nav-cart');
   let picture = '';
   for (let i = 0; i < animeButton.length; i++) {
      animeButton[i].addEventListener('click', function() {
         // let picture5 = this.closest('.catalog__item').firstElementChild.firstElementChild;
         // picture = picture5;
         picture = animeButton[i];
         moveToCart(picture,cart10);
      })
   }

   function moveToCart(picture,cart10) {

      
      let picture_pos = picture.getBoundingClientRect();
      let cart_pos = cart10.getBoundingClientRect();
      let picture2 = picture.cloneNode();

      picture2.style.position="fixed";
      picture2.style.opacity = '0.5'
      picture2.style.left=picture_pos['x']+"px";
      picture2.style.top=picture_pos['y']+"px";
      picture2.style.zIndex=32767;

      let start_x = picture_pos['x']+0.5*picture_pos['width'];
      let start_y = picture_pos['y']+0.5*picture_pos['height'];

      let delta_x = (cart_pos['x']+0.5*cart_pos['width'])-start_x;
      let delta_y = (cart_pos['y']+0.5*cart_pos['height'])-start_y;

      document.body.appendChild(picture2);  
      void picture2.offsetWidth;
      picture2.style.transform="translateX("+delta_x+"px)";
      picture2.style.transform+="translateY("+delta_y+"px)";
      picture2.style.transform+="scale(0.10)"; // уменьшаем до 25%
      picture2.style.transition="0.6s"; // всё происходит за 1 секунду
    
      setTimeout(()=>document.body.removeChild(picture2),560);
   }

   function getTitle () {
      console.log(data);
   }

   getTitle();



}

function saveCart() {
   // сохраняю корзину в LocalStorage
   localStorage.setItem('cart', JSON.stringify(cart)); // корзину в строку 
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

function loadCart() {
   // проверя. есть ли в localStorage запись cart
   if (localStorage.getItem('cart')) {
      // если есть - расшифровываю и записываю в переменную cart
      cart = JSON.parse(localStorage.getItem('cart'));  
   }
}




$(document).ready(function () {
      // проверя. есть ли в localStorage запись cart
      if (localStorage.getItem('cart')) {
         // если есть - расшифровываю и записываю в переменную cart
         cart = JSON.parse(localStorage.getItem('cart'));
         }
   init();
   loadCart();
   headerCartAmount(cart);
   saveCart()
});






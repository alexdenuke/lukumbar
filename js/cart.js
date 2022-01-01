//--------------бургер--------------
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
burger.onclick = function () {
   menu.classList.toggle("active");
   burger.classList.toggle("active");
   document.body.classList.toggle("lock");
};

//------------выпадашка-------------
let dropBtn = document.querySelector(".header__nav-btn-menu");
let dropContent = document.querySelector(".header__nav__dropdown-on");
dropBtn.onclick = function () {
   dropContent.classList.toggle("show");
};


window.onclick = function (event) {
   if (!event.target.matches(".header__nav-btn-menu")) {
      let dropContent = document.querySelectorAll(".header__nav__dropdown-on");
      for (let i = 0; i < dropContent.length; i++) {
         let openDrop = dropContent[i];
         if (openDrop.classList.contains("show")) {
            openDrop.classList.remove("show");
         }
      }
   }
};


let cart = {};

function showPopup(title,text,text2,text3,point) {
   let popup = document.querySelector('.popup');
   let popupTitle = document.querySelector('.popup-title');
   let popupText = document.querySelector('.popup-text');
   popup.classList.add("open");
   popup.addEventListener('click', function(event) {
      if (event.target.closest(".popup-content") && !event.target.matches('.btn-close')) {
         return;
      }
      popup.classList.remove("open");
      document.location.href = point;
   })
   popupTitle.innerHTML = title;
   popupText.innerHTML = text;
   popupText.nextElementSibling.innerHTML = text2;
   popupText.nextElementSibling.nextElementSibling.innerHTML = text3; 
}

function loadCart() {
   // проверя. есть ли в localStorage запись cart
   if (localStorage.getItem('cart')) {
      // если есть - расшифровываю и записываю в переменную cart
      cart = JSON.parse(localStorage.getItem('cart'));
         showCart();
      }

   function showCart() {
      // вывод корзины
      if (!isEmpty(cart)) {
         let displayCart = document.querySelector('.cart-wrapper');
         displayCart.style.display = "none";
         title = 'Корзина пуста!';
         text = 'Добавьте товар в корзину';
         text2 = '';
         text3 = ''; 
         point = 'index.php'; 
         showPopup(title,text,text2,text3,point);      
      }
      else {
      $.getJSON('goods.json', function(data) {
         let goods = data;
         let out = '';
         for (let id in cart) {
            if (typeof(cart[id]) === 'object') {
               for (let key of Object.keys(cart[id])) {
                  out += '<div class="cart__item">';
                  out += `<img class="cart__item-img" src="${goods[id].img}">`;
                  out += '<div class="cart__item-info">';
                  out += `<div class="cart__item-name">${goods[id].name} ${goods[id].weight[key]}&#160;гр</div>`;
                  out += '<div class="cart__result-wrap">';
                  out += `<button data-id="${id}" data-id2='${key}' class="cart__result-minus">-</button>  `;
                  out += `<div class="cart__result-quantity">${cart[id][key]}</div>`;
                  out += `<button data-id="${id}" data-id2='${key}' class="cart__result-plus">+</button>  `;
                  out += `<div class="cart__result-amount"> ${goods[id].cost[key] * cart[id][key]} &#8381; </div>`;
                  out += '</div>';
                  out += `<div data-id2='${key}' data-id="${id}" class="cart__delete-wrap">`;
                  out += `<button  class="cart__delete">X</button>`;
                  out += '</div>';
                  out += '</div>';
                  out += '</div>';
                }}}
         $('.cart').html(out);
         $('.cart__delete-wrap').on('click', delGoods);
         $('.cart__result-plus').on('click', plusGoods);
         $('.cart__result-minus').on('click', minusGoods);


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
         headerCartAmount(cart);


         function delGoods() {
            let id = $(this).attr('data-id');
            let id2 = $(this).attr('data-id2');
            delete cart[id][id2];
            if (Object.keys(cart[id]).length == 0) {
               delete cart[id];
               let itemAmountOff = document.querySelector('.cart__amount-item');
               itemAmountOff.innerHTML = "";
               let headerAmountOff = document.querySelector('.header__cart-amount');
               headerAmountOff.innerHTML = '';
           }
           if (cart === {}) {
              delete cart;
           }
            saveCart();
            showCart();
         }

         switchDelivery();
         function switchDelivery() {
            let btns = document.querySelectorAll('.cart__method');
            for (let btn of btns) {
               btn.addEventListener('click',function () {
                  btns.forEach(i => i.classList.remove('active'));
                  this.classList.add('active');
                  cartAmountItem();
                  checkDelivery();
               })
            }
         }
         function checkDelivery() {
            let deliveryBtn = document.querySelector('.cart__method.delivery');
            let pickupBtn = document.querySelector('.cart__method.pickup');
            let block2 = document.querySelector('.cart__mail-block.block2');
            let after = document.querySelector('.cart__mail-input.after');
            let after2 = document.querySelector('.cart__mail-input.after2');
            let sendMail = document.querySelector('.cart__mail-send');
            if(pickupBtn.classList.contains('active')) {
               after.after(sendMail);
               block2.style.display = "none";
            }
            if (deliveryBtn.classList.contains('active')) {
               after2.after(sendMail);
               block2.style.display = "block";
            }
         }

         function showPriceDelivery() {
            let space = document.querySelector('.cart__delivery');
            let deliveryBtn = document.querySelector('.cart__method.delivery');
            let pickupBtn = document.querySelector('.cart__method.pickup');
            let general = 0;
            for (let key in cart) {
               if (typeof (cart[key]) === "object") {
                  for (let key2 of Object.keys(cart[key])) {
                     general += goods[key].cost[key2] * cart[key][key2];
                     // if (goods[key].cost[key2] * cart[key][key2] > 2499){
                     //    space.innerHTML = "Доставка бесплатная!";
                     // }
                     // if (deliveryBtn.classList.contains('active') && goods[key].cost[key2] * cart[key][key2] < 2500 ) {
                     //    space.innerHTML = "Доставка 250 рублей <br><br>( бесплатная доставка от 2500 рублей )";
                     // }
                  }
               }
            }
            // if (pickupBtn.classList.contains("active")){
            //    space.innerHTML = "Доставка бесплатная!";  
            // }
            if (general > 3499 || pickupBtn.classList.contains("active") ) {
               space.innerHTML = "Доставка бесплатная!";
            }
            if (deliveryBtn.classList.contains('active') && general < 3500) {
               space.innerHTML = "Доставка 350 рублей <br><br>( бесплатная доставка от 3500 рублей )";
            }
         }
         function cartAmountItem() {
            let deliveryBtn = document.querySelector('.cart__method.delivery');
            let out2 = '';
            let result = 0;
            for (let key in cart) {
               if (typeof (cart[key]) === 'object') {
                  for (let key2 of Object.keys(cart[key])) {
                     // let summa = goods[key].cost[key2] * cart[key][key2];
                     result += goods[key].cost[key2] * cart[key][key2];
                     // if (summa < 2500 && result == summa && deliveryBtn.classList.contains('active')){
                     //    result += 250;
                     //    
                     // }
                     // if ( summa > 2499 && result > summa) {
                     //    result -= 250;
                     // }
                      
                  }
               }
            }
            if (result < 3500 && deliveryBtn.classList.contains('active')) {
               result += 350;
               out2 += result;
               $('.cart__amount-item').html(out2);
               showPriceDelivery();
            }
            else {
               showPriceDelivery();
               out2 += result;
               $('.cart__amount-item').html(out2);

            }
         }
         cartAmountItem();
      });
   }
}
   function plusGoods() {
      let id = $(this).attr('data-id');
      let id2 = $(this).attr('data-id2');
      cart[id][id2]++;
      saveCart();
      showCart();
   }

   function minusGoods() {
      let id = $(this).attr('data-id');
      let id2 = $(this).attr('data-id2');
      cart[id][id2]--;
      if (cart[id][id2] == 0) {
         delete cart[id][id2];
         if (Object.keys(cart[id]).length == 0) {
            delete cart[id];
            let itemAmountOff = document.querySelector('.cart__amount-item');
            itemAmountOff.innerHTML = "";
            let headerAmountOff = document.querySelector('.header__cart-amount');
            headerAmountOff.innerHTML = '';
        }
      }
      
      saveCart();
      showCart();
   }

   function saveCart() {
      // сохраняю корзину в LocalStorage
      localStorage.setItem('cart', JSON.stringify(cart)); // корзину в строку 
   }
}

function isEmpty(object) {
   // проверка корзины на пустоту
   for (let key in object)
   if (object.hasOwnProperty(key)) return true;
   return false;
}

// function redirect() {
//    document.location.href = "tnx.php";
// }

function sendEmail() {
   let deliveryBtn = document.querySelector('.cart__method.delivery');
   let pickupBtn = document.querySelector('.cart__method.pickup');
   if (pickupBtn.classList.contains('active')){
   let ename = $('#ename').val();
   let email = $('#email').val();
   let ephone = $('#ephone').val();
   let ecomment = $('#ecomment').val();
   if (ename != '' && email != '' && ephone != '') {
      if (isEmpty(cart)) {
         $.post(
            "core/mail.php",
            {
               "ename" : ename,
               "email" : email,
               "ephone" : ephone,
               "ecomment" : ecomment,
               "cart" : cart
            },
            function(data) {
               if (data == 1) {
                  // title = 'Спасибо за заказ!';
                  // text = 'Копия заказа направлена вам на почту';
                  // text2 = 'Скоро с вами свяжется оператор';
                  // text3 = 'Хорошего вам дня!';
                  // point = "index.php";
                  // showPopup(title,text,text2,text3,point);
                  let inputEname = document.getElementById('ename');
                  let inputEmail = document.getElementById('email');
                  let inputEphone = document.getElementById('ephone');
                  let inputEcomment = document.getElementById('ecomment');
                  inputEname.value = "";
                  inputEmail.value = "";
                  inputEphone.value = "";
                  inputEcomment.value = "";
                  let itemAmountOff = document.querySelector('.cart__amount-item');
                  itemAmountOff.innerHTML = "";
                  let headerAmountOff = document.querySelector('.header__cart-amount');
                  headerAmountOff.innerHTML = '';
                  let cartOff = document.querySelector('.cart');
                  cartOff.innerHTML = "";
                  cart = {};
                  localStorage.setItem('cart', JSON.stringify(cart)); // корзину в строку
                  document.location.href = "tnx.php";
                  // setTimeout(redirect, 3000); 

               }
               else { 
                  title = 'Повторите заказ!';
                  text = '';
                  text2 = '';
                  text3 = '';
                  point = "cart.php";
                  showPopup(title,text,text2,text3,point);  
               }

            }
            
         );
         
      }
   }
   else {
      let popup = document.querySelector('.popup');
      let popupTitle = document.querySelector('.popup-title');
      popup.classList.add("open");
      popup.addEventListener('click', function(event) {
         if (event.target.closest(".popup-content") && !event.target.matches('.btn-close')) {
            return;
         }
         popup.classList.remove("open");
      })
      popupTitle.innerHTML = "Заполните поля!";
      // title = 'Заполните поля!';
      // text = '';
      // text2 = '';
      // text3 = '';
      // point = "cart.php";
      // showPopup(title,text,text2,text3,point); 
   }
 }
 if (deliveryBtn.classList.contains('active')) {
   let ename = $('#ename').val();
   let email = $('#email').val();
   let ephone = $('#ephone').val();
   let ecomment = $('#ecomment').val();
   let estreet = $('#estreet').val();
   let ehouse = $('#ehouse').val();
   let eroom = $('#eroom').val();
   let efloor = $('#efloor').val();
   let eentrance = $('#eentrance').val();
   let eintercom = $('#eintercom').val();
   if (ename != '' && email != '' && ephone != '' && estreet != '' && ehouse != '' && eroom != '') {
      if (isEmpty(cart)) {
         $.post(
            "core/mail.php",
            {
               "ename" : ename,
               "email" : email,
               "ephone" : ephone,
               "ecomment" : ecomment,
               "estreet" : estreet,
               "ehouse" : ehouse,
               "eroom" : eroom,
               "efloor" : efloor,
               "eentrance" : eentrance,
               "eintercom" : eintercom,
               "cart" : cart,
            },
            function(data) {
               if (data == 1) {
                  // title = 'Спасибо за заказ!';
                  // text = 'Копия заказа направлена вам на почту';
                  // text2 = 'Скоро с вами свяжется оператор';
                  // text3 = 'Хорошего вам дня!';
                  // point = "index.php";
                  // showPopup(title,text,text2,text3,point);
                  let inputEname = document.getElementById('ename');
                  let inputEmail = document.getElementById('email');
                  let inputEphone = document.getElementById('ephone');
                  let inputEcomment = document.getElementById('ecomment');
                  let inputEstreet = document.getElementById('estreet');
                  let inputEhouse = document.getElementById('ehouse');
                  let inputEroom = document.getElementById('eroom');
                  let inputEfloor = document.getElementById('efloor');
                  let inputEentrance = document.getElementById('eentrance');
                  let inputEintercom = document.getElementById('eintercom');
                  inputEname.value = "";
                  inputEmail.value = "";
                  inputEphone.value = "";
                  inputEcomment.value = "";
                  inputEstreet.value = "";
                  inputEhouse.value = "";
                  inputEroom.value = "";
                  inputEfloor.value = "";
                  inputEentrance.value = "";
                  inputEintercom.value = "";
                  let itemAmountOff = document.querySelector('.cart__amount-item');
                  itemAmountOff.innerHTML = "";
                  let headerAmountOff = document.querySelector('.header__cart-amount');
                  headerAmountOff.innerHTML = '';
                  let cartOff = document.querySelector('.cart');
                  cartOff.innerHTML = "";
                  cart = {};
                  localStorage.setItem('cart', JSON.stringify(cart)); // корзину в строку
                  document.location.href = "tnx.php";
                  // setTimeout(redirect, 3000);  

               }
               else { 
                  title = 'Повторите заказ!';
                  text = '';
                  text2 = '';
                  text3 = '';
                  point = "cart.php";
                  showPopup(title,text,text2,text3,point);  
               }

            }
         );
      }
   }
   else {
      let popup = document.querySelector('.popup');
      let popupTitle = document.querySelector('.popup-title');
      popup.classList.add("open");
      popup.addEventListener('click', function(event) {
         if (event.target.closest(".popup-content") && !event.target.matches('.btn-close')) {
            return;
         }
         popup.classList.remove("open");
      })
      popupTitle.innerHTML = "Заполните поля!";
      // title = 'Заполните поля!';
      // text = '';
      // text2 = '';
      // text3 = '';
      // point = "cart.php";
      // showPopup(title,text,text2,text3,point); 
   }

 }

}


$(document).ready(function() {
   loadCart();
   $('.cart__mail-send').on('click', sendEmail); // отправить письмо с заказом 
});

<?php require('templates/header.php');
?>
<div class="cart-wrapper">
  <div class="container">
    <h1 class="cart__title">Ваша корзина</h1>
    <div class="cart"></div>
    <p class="cart__delivery"></p>
    <div class="cart__amount-wrap">  общая сумма :
      <span class="cart__amount-item"></span> &nbsp; &#8381;
    </div>
    <div class="cart__method-wrap">
      <button class="cart__method delivery active">Доставка</button>
      <button class="cart__method pickup">Самовывоз</button>
    </div>
    <div class="cart__mail-data-wrap">
      <div class="cart__mail-block block">
        <p class="cart__mail-name-imp">Имя:</p>
        <input type="text" class="cart__mail-input" id="ename">
        <p class="cart__mail-name-imp">Email</p>
        <input type="text" class="cart__mail-input" id="email">
        <p class="cart__mail-name-imp">Телефон</p>
        <input type="text" class="cart__mail-input" id="ephone">
        <p class="cart__mail-name">Комментарий</p>
        <input type="text" class="cart__mail-input after" id="ecomment">
      </div>
      <div class="cart__mail-block block2">
        <p class="cart__mail-name-imp">Улица:</p>
        <input type="text" class="cart__mail-input" id="estreet">
          <div class="cart__mail-small-wrap">
            <p class="cart__mail-name-small-imp">Дом:</p>
            <p class="cart__mail-name-small-imp">Квартира:</p>
            <input type="text" class="cart__mail-input-small" id="ehouse">
            <input type="text" class="cart__mail-input-small" id="eroom">
            <p class="cart__mail-name-small">Этаж:</p>
            <p class="cart__mail-name-small">Подъезд:</p>
            <input type="text" class="cart__mail-input-small" id="efloor">
            <input type="text" class="cart__mail-input-small" id="eentrance">
          </div>
        <p class="cart__mail-name">Домофон:</p>
        <input type="text" class="cart__mail-input after2" id="eintercom">
        <button class="cart__mail-send">заказать</button>
      </div>
    </div>
  </div>
</div>
<?php require('templates/footer.php');?>
<div class="popup">
  <div class="popup-body btn-close">
    <div class="popup-content">
      <button class="popup-close-x btn-close">x</button>
      <p class="popup-title"></p>
      <div class="popup-text-wrap">
        <p class="popup-text"></p>
        <p class="popup-text"></p>
        <p class="popup-text"></p>
      </div>
      <button class="popup-close btn-close">Понятно</button>
    </div>
  </div>
</div>
    <script src="js/jq-3.5.1.js"></script>
    <script src="js/cart.js"></script>
    </body>
</html>

<!DOCTYPE html>
<html lang="ru">

<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
   <title class="title">lukumbar</title>
   <meta name="yandex-verification" content="916e2a295ce04105" />
   <meta class="description" name="description"
      content="lukumbar - магазин турецких сладостей">

   <link rel="icon" href="/icon/icon.ico" type="image/x-icon">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet">
   <link rel="stylesheet" href="/css/reset.css" />
   <link rel="stylesheet" href="/css/style.css" />
   <link rel="stylesheet" href="/css/detail.css" />
   <link rel="stylesheet" href="/css/scroll.css" />
   <link rel="stylesheet" href="/css/swiper.css" />
   <!-- Yandex.Metrika counter -->
   <script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(86892403, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/86892403" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
   <!-- /Yandex.Metrika counter -->
</head>

<?php require('../templates/header.php');
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
<?php require('../templates/footer.php');?>
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
    <script src="/js/jq-3.5.1.js"></script>
    <script src="/js/cart.js"></script>
    </body>
</html>

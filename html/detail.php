<!DOCTYPE html>
<html lang="ru">

<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
   <title class="title">Описание товаров в лукумбар</title>
   <meta name="yandex-verification" content="916e2a295ce04105" />
   <meta class="description" name="description"
      content="Подробное поисание товаров в интернет-магазине lukumbar">

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

<div class="container">
    <div class="detail">
        <div class="detail__wrap-img">
            <img src="/img/pahlava/pahlava_chocolate.jpg" alt="" class="detail__img">
        </div>
        <div class="detail__wrap-info">
            <div class="detail__info-scroll">
                <h1 class="detail__name">
                    Пахлава такая-то с тем-то и тем-то
                </h1>
                <div class="detail__weight">
                    Вес: 500 гр
                </div>
                <div class="detail__description"></div>
            </div>
            <div class="detail__wrap-botton">
                <div class="detail__price">Цена: 1234 р</div>
                <button class="detail__button">В корзину</button>
            </div>
        </div>
    </div>
</div>

<script src="/js/jq-3.5.1.js"></script>
<script src="/js/script.js"></script>
<script src="/js/detail.js"></script>
<?php require('../templates/footer.php');
?>
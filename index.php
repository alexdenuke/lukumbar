<!DOCTYPE html>
<html lang="ru">

<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
   <title class="title">Интернет-магазин lukumbar</title>
   <meta name="yandex-verification" content="916e2a295ce04105" />
   <meta class="description" name="description"
      content="Доставка турецких сладостей по всей Москве">

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

<?php include('templates/header.php');
?>
<div class="container">
  <h1 class="main__title">Только свежие и отборные восточные сладости и товары.</h1>
</div>
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">
      <p class="swiper-text">Хрустящий кадаиф с медом и орешками</p>
      <img class="swiper-img" src="/img/slider/slider-kadaif.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <p class="swiper-text">Сарма на 90% состоит из орешков с медовой сердцевинкой</p>
      <img class="swiper-img" src="/img/slider/slider-sarma.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <p class="swiper-text">Турецкая классика в лучших традициях турков</p>
      <img class="swiper-img" src="/img/slider/slider-turk.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <p class="swiper-text">Рахат-лукум от фруктового до сливочного</p>
      <img class="swiper-img" src="/img/slider/slider-lukum.jpg" alt="">
    </div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <!-- <div class="swiper-scrollbar"></div> -->
</div>
<div class="container">
  <p class="menu-title">Меню сайта:</p>
  <div class="menu">
    <div class="menu__category">
      <a href="/html/lukum.php" class="menu__link">
        <p class="menu__description">Лукум</p>
        <img src="/img/lukum/baton_garnet-pistachio-coconut.jpg" alt="" class="menu__img">
      </a>
    </div>
    <div class="menu__category">
      <a href="/html/pahlava.php" class="menu__link">
        <p class="menu__description">Пахлава</p>
        <img src="/img/pahlava/pahlava_pistachio.jpg" alt="" class="menu__img">
      </a>
    </div>
    <div class="menu__category">
      <a href="/html/halva.php" class="menu__link">
        <p class="menu__description">Халва</p>
        <img src="/img/halva/halva_pistachio.jpg" alt="" class="menu__img">
      </a>
    </div>
    <div class="menu__category">
      <a href="/html/tea.php" class="menu__link">
        <p class="menu__description">Чай</p>
        <img src="/img/tea/caykur-rize.jpg" alt="" class="menu__img">
      </a>
    </div>
    <div class="menu__category">
      <a href="/html/coffee.php" class="menu__link">
        <p class="menu__description">Кофе</p>
        <img src="/img/coffee/mehmet-efendi.jpg" alt="" class="menu__img">
      </a>
    </div>
  </div>
</div>
<?php include('templates/footer.php');
?>
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<script src="/js/swiper.js"></script>
<script src="js/jq-3.5.1.js"></script>
<script src="/js/script.js"></script>
<!-- <script src="/js/detail.js"></script> -->
</body>

</html>
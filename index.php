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
        <img src="/img/lukum/sultan_hazelnutpasta.jpg" alt="" class="menu__img">
      </a>
    </div>
    <div class="menu__category">
      <a href="/html/pahlava.php" class="menu__link">
        <p class="menu__description">Пахлава</p>
        <img src="/img/pahlava/sultan_walnut.jpg" alt="" class="menu__img">
      </a>
    </div>
    <div class="menu__category">
      <a href="/html/halva.php" class="menu__link">
        <p class="menu__description">Халва</p>
        <img src="/img/halva/pismaniye_garnet.jpg" alt="" class="menu__img">
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
</body>

</html>
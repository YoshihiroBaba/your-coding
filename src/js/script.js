$(function () {
  // バーガーメニュー
  $(".burger").click(function () {
    $(".burger").toggleClass("is-active");
    $(".burger__menu").slideToggle(400).toggleClass("is-active");
    $(window).scroll(function(){
      $(".burger__menu").slideUp(400).removeClass("is-active");
      $(".burger").removeClass("is-active");
    });

  });
  // アコーディオン
  $(".faq__detail > dt").click(function () {
    $(this).next().slideToggle(400);
  });
  // 入力チェック
  const $submitBtn = $("#submit");
  $(".alert__name, .alert__email, .alert__detail").hide();
  $("#form input, #form textarea").on("change", function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form #detail').val() !== "" &&
      $("#form #check").prop("checked") === true
    ) {
      $submitBtn.prop("disabled", false);
      $(".alert__detail").hide();
      $(".form__btn").removeClass("form__btn--gray");
    } else {
        $submitBtn.prop("disabled", true);
        $(".alert__detail").show();
        $(".form__btn").addClass("form__btn--gray");
    }
  });

  // スクロール
  $("a[href^='#']:not([href='#'])").click(function(){
    var target = $($(this).attr("href")).offset().top;
    target -= 100;
    $("html,body").animate({scrollTop: target}, 500);
    return false;
  });
//   $("#toCta").click (function(){
//     $(window).scrollTop($("#toCta").position().top - 100);
//   });

  // お問い合わせ　回答
  $(document).ready(function () {
    $("#form").submit(function (event) {
      var formData = $("#form").serialize();
      $.ajax({
        url: "docs.https://google.com/forms/u/0/d/e/1FAIpQLScWnmyxWMAeoCT0wyYItJpmcOWZnV0fZVjZL4HEeB1MOblwpg/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".form").addClass("hidden");
            $(".end-message").slideDown();
            $(".submit-btn").fadeOut();
          },
          200: function () {
            $(".false-message").slideDown();
          },
        },
      });
      event.preventDefault();
    });
  });
});

const swiper = new Swiper(".works__slider", {
  // Optional parameters
  loop: true, //ループするか
  speed: 5000,
  effect: "slide",
  initialSlide: 1,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  // loopedSlides: 3,
  // slidesPerView: "auto",
  autoplay: {
    delay: 5,
    disableOnInteraction: false,
  },

  breakpoints: {
    375: {
      slidesPerView: 1.47,
    //   slidesPerGroup: 1.5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 56,
    //   slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 2.8,
      // slidesPerGroup: 3,
    },
    1280: {
      slidesPerView: 3.48,
      // slidesPerGroup: 3,
    },
    1368: {
      slidesPerView: 3.72,
      // slidesPerGroup: 3,
    },
    1800: {
      slidesPerView: 4.88,
      // slidesPerGroup: 3,
    },
  },

    // If we need pagination　まるぽちの位置表示ボタン
    pagination: {
      el: '.swiper-pagination',
      type: 'progressber',
    },

    // Navigation arrows　次へ　前へ　ボタン
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

AOS.init();

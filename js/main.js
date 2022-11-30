$(function () {

  $('.top-slider__items').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" alt=""></button>',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.reviews__slider').slick({
    prevArrow: '<button type="button" class="slick-prev slick-prev__review"><img src="images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-next__review"><img src="images/icons/arrow-next.svg" alt=""></button>',
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
  })

  $('.product-slide__thumb').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    draggable: false,
    asNavFor: '.product-slide__big',
  })
  $('.product-slide__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.product-slide__thumb',
  });

  $('.select-style, .product-input__num').styler();
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })
  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active')
    $(this).addClass('product-tabs__top-item--active')

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active')
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  })


  $('.product-catalog__list-item').on('click', function (e) {
    e.preventDefault();
    $('.product-catalog__list-item').removeClass('product-catalog__list-item--active')
    $(this).addClass('product-catalog__list-item--active')
  })

  $('.product-catalog__firstlist-item').on('click', function (e) {
    e.preventDefault();
    $('.product-catalog__firstlist-item').removeClass('product-catalog__firstlist-item--active')
    $(this).addClass('product-catalog__firstlist-item--active')
  })

  $('.header-basket__item-btn').on('click', function () {
    $(this).toggleClass('header-basket__item-btn--active')
  })
  $('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--open');
  });

  $('.gallery__image img').click(function (event) {
    // detect data-id for later
    var id = $(this).data('id');
    // grab src to replace #featured
    var src = $(this).attr('src');
    // set featured image
    var img = $('#featured img');

    img.fadeOut('fast', function () {
      $(this).attr({ src: src, });
      $(this).fadeIn('fast');
    });
  });

})
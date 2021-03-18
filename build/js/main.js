/* eslint-disable */
/*stylelint-disable*/
'use strict';

$(function () {
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/icon-arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/icon-arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false
        }
      }
    ]
  });


  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().parent().siblings().find('div')).removeClass('tab-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tab-content--active');
  });


  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active')
  });

  $('.product__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product__slider-btn product__slider-btnprev"><img src="img/icon-arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product__slider-btn product__slider-btnnext"><img src="img/icon-arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.menu__btn').on('click', function(){
    $('.menu-mobile').toggleClass('menu-mobile--active');
  });


  if($(document).width() < 480){
    $('.footer__topdrop').on('click', function(){
      $(this).next().slideToggle();
      $(this).toggleClass('footer__topdrop--active');
    });
  };

  $('.filter-style').styler();

  $('.aside__item-title, .aside__extra').on('click', function(){
    $(this).next().slideToggle(200);
    $(this).toggleClass('aside__item-title--active');
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000
  });

  $('.sorting__btnline').on('click', function(){
    $(this).addClass('sortin__btn--active');
    $('.sortin__btngrid').removeClass('sortin__btn--active');
    $('.product-item').addClass('product-item--line');
  });

  $('.sortin__btngrid').on('click', function(){
    $(this).addClass('sortin__btn--active');
    $('.sorting__btnline').removeClass('sortin__btn--active');
    $('.product-item').removeClass('product-item--line');
  });

  $('.catalog__aside-btn').on('click', function(){
    $(this).next().slideToggle();
  });

  $(".rate-yo").rateYo({
    ratedFill: '#1c62cd',
    spacing: '7px',
    normalFill: '#c4c4c4'
  });

});

var $ = jQuery;
$(function () {

  $('.epiic-drop-down__list a').each(function () {
    if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
      $(this).addClass('epiic-active');
    }
  });

  $('.epiic-pricing__tabs .epiic-tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.epiic-pricing__tabs').find('.epiic-tab-item').removeClass('epiic-active-tab').hide();
    $('.epiic-active[tab-content]').removeClass('epiic-active').hide();
    $('.epiic-pricing__tabs .epiic-tabs').find('.epiic-tab').removeClass('epiic-active');
    $(this).addClass('epiic-active');
    $('#' + id).addClass('epiic-active-tab').fadeIn();
    $('[tab-content="' + id + '"]').addClass('epiic-active').fadeIn();
    return false;
  });

  $('.epiic-watch__tabs .epiic-tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.epiic-watch__tabs').find('.epiic-tab-item').removeClass('epiic-active-tab').hide();
    $('.epiic-active[tab-content]').removeClass('epiic-active').hide();
    $('.epiic-watch__tabs .epiic-tabs').find('.epiic-tab').removeClass('epiic-active');
    $(this).addClass('epiic-active');
    $('#' + id).addClass('epiic-active-tab').fadeIn();
    $('[tab-content="' + id + '"]').addClass('epiic-active').fadeIn();
    return false;
  });

  $('.epiic-cost__tabs .epiic-tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.epiic-cost__tabs').find('.epiic-tab-item').removeClass('epiic-active-tab').hide();
    $('.epiic-cost__tabs .epiic-tabs').find('.epiic-tab').removeClass('epiic-active');
    $(this).addClass('epiic-active');
    $('#' + id).addClass('epiic-active-tab').fadeIn();
    return false;
  });

  $(".epiic-faq__list .epiic-faq__text").hide().prev().click(function () {
    $(this).parents(".epiic-faq__list").find(".epiic-faq__text").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
  });

  $('.epiic-work__tabs--mobile').click(function () {
    $(".epiic-tabs").fadeToggle(100);
  });
  $('.epiic-work__tabs--mobile').on('click', function () {
    $('.epiic-work__tabs--mobile').toggleClass('epiic-active');
  });
  $(".epiic-stock__subtitle span").hover(function () {
    $(".epiic-stock__subtitle-info").css("display", "block");
  }, function () {
    $(".epiic-stock__subtitle-info").css("display", "none");
  });


});

// Scripts for WP
document.addEventListener('DOMContentLoaded', function(){

  /* Our works */
  $('[data-fancybox="gallery"]').fancybox({
    infobar: false,
    toolbar: false,
    loop: true,
    wheel: false,
  });

  if ( $('body').hasClass('page-template-temp-portfolio-php') ) {
    $('html').addClass('gac-no-overflow-x');
  }

  /* Sliders */
  $('.epiic-reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 666,
        settings: {
          arrows: false,
        }
      }
    ]
  });
  $('.epiic-wedo-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 666,
        settings: {
          arrows: false,
        }
      }
    ]
  });
  $('.epiic-galery-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 666,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      },
    ]
  });
  $('.epiic-mentions-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });
  $('.epiic-find-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    dots: false,
  });

  /* Menu hover */
  const menuItem = $('.epiic-menu-list > .menu-item-has-children').not('.current-menu-ancestor').not('.current-menu-parent');
  menuItem.mouseenter(function () {
    $('.current-menu-ancestor.current-menu-parent .epiic-drop-down__list').hide();
  });
  menuItem.mouseleave(function () {
    $('.current-menu-ancestor.current-menu-parent .epiic-drop-down__list').show();
  });

  /* Menu */
  var item = $('nav.epiic-menu ul .epiic-drop-down__list li.menu-item-has-children');
  item.addClass('epiic-menu__item epiic-header__drop-down epiic-header__drop-down--sub');
  item.children('a').addClass('epiic-menu__link');
  /* Footer menu */
  $('.epiic-footer-nav__col--other > li').each(function() {
    $(this).wrapAll('<div class="epiic-footer-nav__col"/>');
  });
  /* Mobile menu */
  $('.epiic-menu--mobile .epiic-menu__item:nth-child(1)').wrapAll('<div class="epiic-menu__item-col"/>');
  $('.epiic-menu--mobile .epiic-menu__item:nth-child(2)').wrapAll('<div class="epiic-menu__item-col"/>');
  $('.epiic-menu--mobile .epiic-menu__item:nth-child(3), .epiic-menu--mobile .epiic-menu__item:nth-child(4)').wrapAll('<div class="epiic-menu__item-col"/>');

  /* Contact forms 7 onSuccess */
  document.addEventListener('wpcf7mailsent', function(e) {
    var target = $(e.target);
    var bookForm = target.closest('.epiic-book-form');
    var footerForm = target.closest('.gac-footer-form');
    var growForm = target.closest('#epiic-grow');
    if ( bookForm.length ) {
      bookForm.find('.epiic-book-form--access').show();
    } else if ( footerForm.length ) {
      $('.gac-footer-form .gac-footer-form__btn').val('You’re in!');
    } else if ( growForm.length ) {
      growForm.find('.epiic-grow-wrapper').hide();
      growForm.find('.epiic-grow-wrapper--access').show();
    }
  }, false );
  $('.epiic-book-form .wpcf7-form-control option[value="Service"]').attr("selected", "selected");
  $('.epiic-book-form .wpcf7-form-control option').not('option[value="Designers"]').attr("disabled", "disabled");

  /* Get portfolio */
  $('.epiic-work__tabs .epiic-tab').on('click', function() {
    if ( !$(this).hasClass('epiic-active') ) {
      var btn = $('#epiic-load-more-btn');
      $('.epiic-work__tabs .epiic-tab.epiic-active').removeClass('epiic-active');
      $(this).addClass('epiic-active');
      $.ajax({
        type: 'POST',
        url: epiic_theme_object.ajax_url,
        dataType: "html",
        data: { action : 'get_ajax_portfolio', slug: $(this).data('slug'), paged: 1 },
        success: function( response ) {
          var data = JSON.parse(response);
          $('#epiic-our-work-content').html(data.html);
          $('[data-fancybox="gallery"]').fancybox({
            infobar: false,
            toolbar: false,
            loop: true,
            wheel: false,
          });
          btn.attr('data-page',1);
          if ( data.max_num_pages < 2 ) {
            btn.hide();
          } else {
            btn.show();
          }
        }
      });
    }
  });
  $('#epiic-load-more-btn').on('click', function(e) {
    var btn = $(this);
    var page = Number(btn.attr('data-page')) + 1;
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: epiic_theme_object.ajax_url,
      dataType: "html",
      data: { action : 'get_ajax_portfolio', slug: $('.epiic-work__tabs .epiic-tab.epiic-active').data('slug'), paged: page },
      success: function( response ) {
        var data = JSON.parse(response);
        $('#epiic-our-work-content').append(data.html);
        if ( data.max_num_pages === page ) {
          btn.hide();
        } else {
          btn.attr('data-page', page);
        }
      }
    });
  });

  /* Animate Scroll */
  $('.epiic-scroll-to-btn').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Math.abs(document.getElementById('epiic-grow').offsetTop)
    }, 2000);
  });
  $('.epiic-get-updates-btn').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: Math.abs(document.getElementById('epiic-subscribe-form').offsetTop - 80)
    }, 2000);
  });

  /* On Black Friday Discount click */
  $('.epiic-pricing__discount img').on('click', function () {
    const tab = $('.epiic-tab[data-id="tab-2"]');
    if ( !tab.hasClass('epiic-active') ) {
      tab.trigger('click');
    }
  });

  /* Single post sticky menu */
  var menuItems = '';
  var headings = $('[data-sticky-menu]');
  headings.each( function (i) {
    $(this).attr('id', `sticky-menu-item-${i}`);
    $(this).attr('data-id', i);
    var title = $(this).data('sticky-menu');
    var delay = 0.05;
    menuItems = menuItems + `<li data-id="${i}" style="transition-delay: ${delay*i}s;"><i></i><span>${title}</span></li>`;
  });
  if ( headings.length ) {
    $('.epiic-wrapper .epiic-content').append(`<div class="epiic-post-sticky-menu-wrap"><ul class="epiic-post-sticky-menu">${menuItems}</ul><div class="epiic-close-btn"></div></div>`);
    var menu = $('.epiic-post-sticky-menu-wrap');
    var height = menu.height();
    menu.css('margin-top', `-${height/2}px`);
    menu.find('li').on('click', function () {
      var id = $(this).data('id');
      var top = $(`#sticky-menu-item-${id}`).offset().top + $('body').scrollTop() - 22;
      $('html, body').animate({
        scrollTop: Math.abs(top)
      }, 400);
    });
    $('.epiic-close-btn').on('click', function () {
      if ( menu.hasClass('is-visible') ) {
        menu.removeClass('is-visible');
      } else {
        menu.addClass('is-visible');
      }
    });

    var shareButtons = document.querySelectorAll('div.epiic-container-share-buttons')[0];
    var observer = new MutationObserver(function(mutations) {
      const btns = $('.epiic-container-share-buttons').html();
      menu.append(btns);
    });
    observer.observe(shareButtons, {
      childList: true,
    });

    const sections = document.querySelectorAll("[data-sticky-menu]");
    const stickyMenu = document.querySelectorAll(".epiic-post-sticky-menu-wrap")[0];
    const navLi = document.querySelectorAll(".epiic-post-sticky-menu-wrap li");
    const image = document.querySelectorAll(".epiic-blog")[0];
    const singlePost = document.querySelectorAll(".epiic-single-post")[0];
    let lastScrollTop = 0;

    document.body.addEventListener("scroll", () => {
      const width = window.innerWidth;
      const pageYOffset = document.body.scrollTop;
      const imageTop = image.getBoundingClientRect().top;
      const imageHeight = image.clientHeight;
      const contentTop = singlePost.getBoundingClientRect().top;
      const contentHeight = singlePost.clientHeight;

      var st = window.pageYOffset || pageYOffset;
      if ( width > 1239 ) {
        if (st > lastScrollTop){
          // downscroll
          if (pageYOffset >= imageTop + pageYOffset + imageHeight / 3) {
            stickyMenu.classList.add("is-visible");
          }
          if (pageYOffset + window.innerHeight / 2 >= contentTop + pageYOffset + contentHeight) {
            stickyMenu.classList.remove("is-visible");
          }
        } else {
          // upscroll
          if (pageYOffset + window.innerHeight / 2 < contentTop + pageYOffset + contentHeight) {
            stickyMenu.classList.add("is-visible");
          }
          if (pageYOffset < imageTop + pageYOffset + imageHeight / 3) {
            stickyMenu.classList.remove("is-visible");
          }
        }
        lastScrollTop = st <= 0 ? 0 : st;
      }

      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (pageYOffset + 32 >= sectionTop + pageYOffset) {
          current = section.getAttribute("data-id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("epiic-active");
        if (li.getAttribute("data-id") === current) {
          li.classList.add("epiic-active");
        }
      });
    });
  }

  /* Level select */
  $('.epiic-level-select').on('click', function () {
    if ( $(this).hasClass('epiic-active') ) {
      $(this).removeClass('epiic-active');
      $(this).closest('.epiic-tab-item-block__info--options').find('.epiic-level-options').fadeOut(300);
    } else {
      $(this).addClass('epiic-active');
      $(this).closest('.epiic-tab-item-block__info--options').find('.epiic-level-options').fadeIn(300);
    }
  });
  $('.epiic-level-options div').on('click', function () {
    const el = $(this).attr('data-el');
    const wrap = $(this).closest('.epiic-tab-item-block');
    const options = $(this).closest('.epiic-level-options');
    const tabItem = $(this).closest('.epiic-tab-item');

    if ( typeof el !== 'undefined') {
      options.fadeOut(300);
      wrap.find('.epiic-level-select.epiic-active').removeClass('epiic-active');
      wrap.hide();
      tabItem.find(`.${el}`).show();
    }
    if ( $(this).hasClass('epiic-level-options-custom') ) {
      const value = $(this).attr('data-value');

      options.fadeOut(300);
      wrap.find('.epiic-level-select.epiic-active').removeClass('epiic-active');
      wrap.find('.epiic-level-select').text( value.charAt(0).toUpperCase() + value.slice(1));
      wrap.find('.custom-posts-input, .custom-words-input').attr('data-level', value);

      var frequency = wrap.find('.custom-posts-input').length ? wrap.find('.custom-posts-input').val().replace(/[^0-9]/gi, '') : 1;
      var wordcount = wrap.find('.custom-words-input').val().replace(/[^0-9]/gi, '');
      if ( frequency && wordcount ) {
        updateCustomSubPrice(wrap.find('.custom-words-input'), wrap, wordcount, frequency);
      }
    }
  });

  /* Custom subscription */
  var updateCustomSubPrice = function (el, wrap, wordcount, frequency, subs) {
    var currency = el.attr('data-currency');
    var currencyCode = el.attr('data-currency-code');
    var interval = el.attr('data-interval');
    var level = el.attr('data-level');

    var qty = interval === 'quarterly' ? 3 : interval === 'annually' ? 12 : 1;
    var subsData = typeof subs === 'undefined' ? epiic_theme_object.subsBlogging : subs;
    var { discount: discountData } = subsData
        .filter(o => o.currency === currencyCode )
        .filter(o => o.billing_interval_code === interval)[0];
    var discount = typeof discountData === null ? 1 : (100-discountData)/100;
    var { rate_client } = epiic_theme_object.ratesWriting
        .filter(o => o.currency === currency )
        .filter(o => o.format.includes('blog'))
        .filter(o => o.level === level)[0];
    var amount = Math.round(rate_client*wordcount)*frequency*discount;
    var total = Math.ceil(amount*qty).toLocaleString('en');

    wrap.find('.custom-price').text(`${currency}${Math.ceil(amount).toLocaleString('en')}/month`);
    wrap.find('.price-per-post').text(`${currency}${Math.ceil(amount/frequency)}/post`);
    if ( 'quarterly/annually'.includes(interval) ) {
      var intervalLabel = interval === 'quarterly' ? 'quarter' : 'year';
      wrap.find('.price-per-'+intervalLabel).text(`${currency}${total}/${intervalLabel}`);
    }
  };

  $('.custom-words-input, .custom-posts-input').not('.writing-custom-words-input').keyup( function () {
    var wrap = $(this).closest('.epiic-tab-item-block');
    var color = $(this).css('border-bottom-color');
    if ( color === 'rgb(220, 93, 91)' || color === '#dc5d5b' ) {
      $(this).css('border-bottom-color', '#000');
    }
    var frequency = wrap.find('.custom-posts-input').val().replace(/[^0-9]/gi, '');
    var wordcount = wrap.find('.custom-words-input').val().replace(/[^0-9]/gi, '');
    if ( frequency && wordcount ) {
      updateCustomSubPrice($(this), wrap, wordcount, frequency);
    }
  });
  $('.writing-custom-words-input').keyup( function () {
    var wrap = $(this).closest('.epiic-tab-item-block');
    var color = $(this).css('border-bottom-color');
    if ( color === 'rgb(220, 93, 91)' || color === '#dc5d5b' ) {
      $(this).css('border-bottom-color', '#000');
    }
    var wordcount = $(this).val().replace(/[^0-9]/gi, '');
    if ( wordcount ) {
      updateCustomSubPrice($(this), wrap, wordcount, 1, epiic_theme_object.subsWriting);
    }
  });
  $('.custom-sub-link').on('click', function (e) {
    e.preventDefault();
    var red = '#dc5d5b';
    var wrap = $(this).closest('.epiic-tab-item-block');
    var postsInput = wrap.find('.custom-posts-input');
    var wordsInput = wrap.find('.custom-words-input');
    var frequency = $(this).hasClass('writing-custom-sub-link') ? 1 : postsInput.val().replace(/[^0-9]/gi, '');
    var wordcount = wordsInput.val().replace(/[^0-9]/gi, '');
    var level = wordsInput.attr('data-level');
    var href = wrap.find('.epiic-tab-item-block__link').attr('href');
    if ( frequency && wordcount ) {
      window.location.href = `${href}&words=${wordcount}&posts=${frequency}&level=${level}`;
    } else {
      if ( !frequency ) {
        postsInput.css('border-bottom-color', red);
      }
      if ( !wordcount ) {
        wordsInput.css('border-bottom-color', red);
      }
    }
  });

  /* FAQ */
  $('.epiic-post-faq__item-title').on('click', function () {
    const item = $(this).closest('.epiic-post-faq__item');
    if ( $(this).hasClass('epiic-active') ) {
      $(this).removeClass('epiic-active');
      item.find('.epiic-post-faq__item-content').slideUp(300);
    } else {
      const titles = $('.epiic-post-faq__item-title.epiic-active');
      titles.next('.epiic-post-faq__item-content').slideUp(300);
      titles.removeClass('epiic-active');
      $(this).addClass('epiic-active');
      item.find('.epiic-post-faq__item-content').slideDown(300);
    }
  });

  document.body.addEventListener("scroll", () => {
    const pageYOffset = document.body.scrollTop;
    if ( pageYOffset > 500 ) {
      $('.epiic-scroll-up-btn').fadeIn();
    } else {
      $('.epiic-scroll-up-btn').fadeOut();
    }
  });
  $(".epiic-scroll-up-btn").on('click',function() {
    $("html, body").animate({scrollTop: 0}, 1000);
  });
});

window.addEventListener("load", function() {
  var mainImg = $('.epiic-main-img__img').not('.epiic-writers-main-img__img');
  if ( mainImg.length ) {
    var src = mainImg.attr('src').replace('svg','gif');
    mainImg.attr('src', src);
  }
});

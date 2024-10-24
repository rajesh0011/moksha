/* WOW Effect JS */
(function() {
  var Util,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in custom) {
        value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    return Util;

  })();

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
    }

    WOW.prototype.init = function() {
      var _ref;
      this.element = window.document.documentElement;
      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        return this.start();
      } else {
        return document.addEventListener('DOMContentLoaded', this.start);
      }
    };

    WOW.prototype.start = function() {
      var box, _i, _len, _ref;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);
      if (this.boxes.length) {
        if (this.disabled()) {
          return this.resetStyle();
        } else {
          _ref = this.boxes;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            this.applyStyle(box, true);
          }
          window.addEventListener('scroll', this.scrollHandler, false);
          window.addEventListener('resize', this.scrollHandler, false);
          return this.interval = setInterval(this.scrollCallback, 50);
        }
      }
    };

    WOW.prototype.stop = function() {
      window.removeEventListener('scroll', this.scrollHandler, false);
      window.removeEventListener('resize', this.scrollHandler, false);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      return box.className = "" + box.className + " " + this.config.animateClass;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
    };

    WOW.prototype.resetStyle = function() {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.setAttribute('style', 'visibility: visible;'));
      }
      return _results;
    };

    WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
      var style;
      style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
      if (duration) {
        style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
      }
      if (delay) {
        style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
      }
      if (iteration) {
        style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
      }
      return style;
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + this.element.clientHeight - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util || (this._util = new Util());
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);


wow = new WOW(
  {
    animateClass: 'animated',
    offset: 100
  }
);
wow.init();
/* WOW effects end's */
$("#book-now").click(function(){
  $("#booking-engine").slideToggle();
});
$("#book-now2").click(function(){
  $("#booking-engine").slideToggle();
});
$(".booknow-link-btn").click(function(){
  $("#booking-engine").show();
});
$(".booknow-link").click(function() {
  $('html,body').animate({
      scrollTop: $("#booking-engine").offset().top - 280},
      'slow');
});
$(".booknow-link-btn").click(function() {
  $('html,body').animate({
      scrollTop: $("#booking-engine").offset().top - 150},
      'slow');
});
$("#book-now").click(function() {
  $('html,body').animate({
      scrollTop: $("#booking-engine").offset().top - 280},
      'slow');
});
$('.open-overlay').click(function() {

    var overlay_navigation = $('.overlay-navigation'),

      nav_item_1 = $('nav li:nth-of-type(1)'),

      nav_item_2 = $('nav li:nth-of-type(2)'),

      nav_item_3 = $('nav li:nth-of-type(3)'),

      nav_item_4 = $('nav li:nth-of-type(4)'),

      nav_item_5 = $('nav li:nth-of-type(5)'),

      nav_item_5 = $('nav li:nth-of-type(6)'),

      nav_item_5 = $('nav li:nth-of-type(7)'),

      nav_item_5 = $('nav li:nth-of-type(8)'),

      nav_item_5 = $('nav li:nth-of-type(9)'),

      nav_item_5 = $('nav li:nth-of-type(10)'),

      nav_item_5 = $('nav li:nth-of-type(11)'),

      nav_item_5 = $('nav li:nth-of-type(12)'),

      top_bar = $('.bar-top'),

      middle_bar = $('.bar-middle'),

      bottom_bar = $('.bar-bottom');

  

    overlay_navigation.toggleClass('overlay-active');
    $('body').addClass('overlay-active2024');

    if (overlay_navigation.hasClass('overlay-active')) {

  

      top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');

      middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');

      bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');

      overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')

      nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');

      nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');

      nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');

      nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');

      nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');

      nav_item_5.removeClass('slide-in-nav-item-delay-5-reverse').addClass('slide-in-nav-item-delay-5');

      nav_item_5.removeClass('slide-in-nav-item-delay-6-reverse').addClass('slide-in-nav-item-delay-6');

      nav_item_5.removeClass('slide-in-nav-item-delay-7-reverse').addClass('slide-in-nav-item-delay-7');

      nav_item_5.removeClass('slide-in-nav-item-delay-8-reverse').addClass('slide-in-nav-item-delay-8');

      nav_item_5.removeClass('slide-in-nav-item-delay-9-reverse').addClass('slide-in-nav-item-delay-9');

      nav_item_5.removeClass('slide-in-nav-item-delay-10-reverse').addClass('slide-in-nav-item-delay-10');

      nav_item_5.removeClass('slide-in-nav-item-delay-11-reverse').addClass('slide-in-nav-item-delay-11');

      nav_item_5.removeClass('slide-in-nav-item-delay-12-reverse').addClass('slide-in-nav-item-delay-12');

    } else {

      top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');

      middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');

      bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');

      overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')

      nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');

      nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');

      nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');

      nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');

      nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');

      nav_item_5.removeClass('slide-in-nav-item-delay-5').addClass('slide-in-nav-item-delay-5-reverse');

      nav_item_5.removeClass('slide-in-nav-item-delay-6').addClass('slide-in-nav-item-delay-6-reverse');

      nav_item_5.removeClass('slide-in-nav-item-delay-7').addClass('slide-in-nav-item-delay-7-reverse');

      nav_item_5.removeClass('slide-in-nav-item-delay-8').addClass('slide-in-nav-item-delay-8-reverse');

      nav_item_5.removeClass('slide-in-nav-item-delay-9').addClass('slide-in-nav-item-delay-9-reverse');

      nav_item_5.removeClass('slide-in-nav-item-delay-10').addClass('slide-in-nav-item-delay-10-reverse');

      nav_item_5.removeClass('slide-in-nav-item-delay-11').addClass('slide-in-nav-item-delay-11-reverse');

      nav_item_5.removeClass('slide-in-nav-item-delay-12').addClass('slide-in-nav-item-delay-12-reverse');

    }

  })

  $(function() {

    //caches a jQuery object containing the header element

        var header = $(".clearHeader");

        $(window).scroll(function() {

            var scroll = $(window).scrollTop();

  

            if (scroll >= 100) {

                header.removeClass('clearHeader').addClass("darkHeader");

            } else {

                header.removeClass("darkHeader").addClass('clearHeader');

            }

        });

    });
    $(document).ready(function() {
      $('.owl-carousel.bottom-rooms-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            autoplay: true,
            nav: false
          },
          600: {
            items: 1,
            autoplay: true,
            nav: false
          },
          1000: {
            items: 3,
            autoplay: true,
            nav: false,
            loop: false,
            margin: 20
          }
        }
      })
    })
    $(document).ready(function() {
      $('.owl-carousel.bottom-attractions-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            autoplay: true,
            nav: false
          },
          600: {
            items: 1,
            autoplay: true,
            nav: false
          },
          1000: {
            items: 1,
            autoplay: true,
            nav: false,
            loop: false,
            margin: 20
          }
        }
      })
    })
    $(document).ready(function() {
      $('.owl-carousel.gal-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 8000,
            autoplaySpeed: 8000,
          },
          600: {
            items: 2,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 8000,
            autoplaySpeed: 8000,
          },
          1000: {
            items:3,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 8000,
            autoplaySpeed: 8000,
          }
        }
      })
    })
    $(document).ready(function() {
      $('.owl-carousel.gal-slider2').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 8000,
            autoplaySpeed: 8000,
          },
          600: {
            items: 2,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 8000,
            autoplaySpeed: 8000,
          },
          1000: {
            items:2,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 8000,
            autoplaySpeed: 8000,
          }
        }
      })
    })

    $(document).ready(function() {
      $('.owl-carousel.testimonial-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: false,
            loop: false,
            margin: 20
          }
        }
      })
    })
    $(".slider-drop-icon").click(function(){
      $(".slide-dropdown").slideToggle();
   });
   $(document).ready(function() {
    $('.owl-carousel.bottom-stay-slider').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 3,
          nav: true,
          loop: false,
          margin: 20
        }
      }
    })
  })
  function closeNav() {
    var overlay_navigation = $('.overlay-navigation').removeClass('overlay-slide-down').addClass('overlay-slide-up');
    var overlay_navigation = $('.overlay-navigation').removeClass('overlay-active');
    $('body').removeClass('overlay-active2024');
 }
 $(document).ready(function() {
  $('.owl-carousel.suits-slider').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false,
        loop: false,
        margin: 15
      }
    }
  })
})
$(".request-quote-data").click(function () {
  $("html,body").animate({ scrollTop: $("#request-quote-bottom").offset().top - 100 }, "slow");
})
$(".corporate-data").click(function () {
  $("html,body").animate({ scrollTop: $("#corporate-data-bottom").offset().top - 100 }, "slow");
})
$(".reunion-data").click(function () {
  $("html,body").animate({ scrollTop: $("#reunion-data-bottom").offset().top - 100 }, "slow");
})
$(".wedding-data").click(function () {
  $("html,body").animate({ scrollTop: $("#wedding-data-bottom").offset().top - 100 }, "slow");
})
$(".repeat-data").click(function () {
  $("html,body").animate({ scrollTop: $("#repeat-data-bottom").offset().top - 100 }, "slow");
})
$(".cable-data").click(function () {
  $("html,body").animate({ scrollTop: $("#cable-data-bottom").offset().top - 100 }, "slow");
})
$(".luxurious-data").click(function () {
  $("html,body").animate({ scrollTop: $("#luxurious-data-bottom").offset().top - 100 }, "slow");
})
$(".infinity-data").click(function () {
  $("html,body").animate({ scrollTop: $("#infinity-data-bottom").offset().top - 100 }, "slow");
})
$(".activity-data").click(function () {
  $("html,body").animate({ scrollTop: $("#activity-data-bottom").offset().top - 100 }, "slow");
})
$(".playarea-data").click(function () {
  $("html,body").animate({ scrollTop: $("#playarea-data-bottom").offset().top - 100 }, "slow");
})
$(".bonefire-data").click(function () {
  $("html,body").animate({ scrollTop: $("#bonefire-data-bottom").offset().top - 100 }, "slow");
})
$(".candle-lit-data").click(function () {
  $("html,body").animate({ scrollTop: $("#candle-lit-data-bottom").offset().top - 100 }, "slow");
})
$(".nearby-data").click(function () {
  $("html,body").animate({ scrollTop: $("#nearby-data-bottom").offset().top - 100 }, "slow");
})
$(".presidential-data").click(function () {
  $("html,body").animate({ scrollTop: $("#presidential-data-bottom").offset().top - 100 }, "slow");
})
$(".find-more-btn-all").click(function () {
  $(".home-content-blk").slideToggle();
})

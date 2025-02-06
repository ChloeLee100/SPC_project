console.clear();

// Move to top when clicked
function scrollTopBtn() {
  $(window).scroll(function () {
    let $this = $(this);

    let sTop = $this.scrollTop(); // Current scroll location
    let wHeight = $this.height(); // Window height
    let dHeight = $(document).height(); // Height

    // Calculate whether the scroll is under 60% of height
    if (sTop > dHeight * 0.6 - wHeight) {
      $(".scroll-top-btn").addClass("active");
    } else {
      $(".scroll-top-btn").removeClass("active");
    }
  });

  $(".scroll-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
}

scrollTopBtn();

// Menu 2
function TopBarMenu__init() {
  $(".top-bar__menu-1 > ul").mouseenter(function () {
    $(".top-bar__menu-1 > ul ul").addClass("active");
    $(".depth2-bg").addClass("active");
  });

  $(".top-bar__mid, .depth2-bg").mouseleave(function () {
    $(".top-bar__menu-1 > ul ul").removeClass("active");
    $(".depth2-bg").removeClass("active");
  });
}

TopBarMenu__init();

function LangIconHover() {
  const topBarLeft = $(".top-bar__left");
  const topBarMid = $(".top-bar__mid");
  const topBarCareers = $(".top-right__widget .careers");

  $(".lang").hover(
    () => {
      topBarLeft.addClass("active");
      topBarMid.addClass("active");
      topBarCareers.addClass("active");
    },
    () => {
      topBarLeft.removeClass("active");
      topBarMid.removeClass("active");
      topBarCareers.removeClass("active");
    }
  );
}

LangIconHover();

function Depth2MenuItemText() {
  const depth2ListItem = $(".top-bar__menu-1 > ul ul > li");

  depth2ListItem
    .mouseenter(function () {
      let $this = $(this);

      depth2ListItem.addClass("off");
      $this.removeClass("off");
    })
    .mouseleave(function () {
      depth2ListItem.removeClass("off");
    });
}

Depth2MenuItemText();

function MobileSideBar__init() {
  $(".mobile-side-menu-btn").click(function () {
    let hasActive = $(".mobile-side-menu").hasClass("active");

    if (hasActive) {
      $(".mobile-side-menu").removeClass("active");
    } else {
      $(".mobile-side-menu").addClass("active");
    }
  });
}

MobileSideBar__init();

function MobileSideMenu__init() {
  $(".mobile-side-menu .mo-depth1 > li:not(:last-child)").click(function () {
    let $this = $(this);
    let has = $this.hasClass("active");
    let depth2 = $this.find(".mo-depth2");

    $this.siblings(".active").find(".mo-depth2").stop().slideUp(500);
    $this.siblings(".active").removeClass("active");

    if (has) {
      $this.removeClass("active");
      depth2.stop().slideUp(500);
    } else {
      $this.addClass("active");
      depth2.stop().slideDown(500);
    }
  });
}

MobileSideMenu__init();

/* Section code */
function section01_swiper() {
  const swiper = new Swiper(".sec-01 .swiper", {
    loop: true,
    effect: "fade",
    speed: 1000,
    fadeEffect: {
      crossFade: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

section01_swiper();

function sec03_LeftSwiper() {
  const swiper = new Swiper(".sec-03__left-swiper", {
    loop: true,
    effect: "fade",
    speed: 1000,
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".sec-03__pagination",
      clickable: true,
    },
  });

  swiper.on("slideChange", function () {
    const currentIndex = swiper.activeIndex;

    const $tabCont = $(".sec-03__tab-cont-wrap .tab-cont");

    $tabCont.removeClass("active");

    $tabCont.eq(currentIndex).addClass("active");
  });
}

sec03_LeftSwiper();

function sec04_RightSwiper() {
  const swiper = new Swiper(".sec-04__right-swiper", {
    loop: true,
    effect: "fade",
    speed: 1000,
    pagination: {
      el: ".sec-04__pagination",
      clickable: true,
    },
  });

  swiper.on("slideChange", function () {
    const currentIndex = swiper.activeIndex;
    const $tabCont = $(".sec-04__tab-cont-wrap .tab-cont");

    $tabCont.removeClass("active");

    $tabCont.eq(currentIndex).addClass("active");
  });
}

sec04_RightSwiper();

function sec_TabCont(no) {
  $(`.sec-0${no} .tab-cont`).each(function () {
    let $tabCont = $(this);

    let $pagination = $tabCont.find(".paging");
    let $nextEl = $tabCont.find(".swiper-next");
    let $prevEl = $tabCont.find(".swiper-prev");

    $tabCont.find(".tab-swiper").each(function () {
      let $this = $(this);

      // Swiper
      let tabSwiper = new Swiper($this[0], {
        effect: "fade",
        fadeEffect: { crossFade: true },
        speed: 700,
        loop: true,
        touchRatio: 0,
        watchOverflow: false,
        navigation: {
          nextEl: $nextEl[0],
          prevEl: $prevEl[0],
        },
        pagination: {
          el: $pagination[0],
          type: "custom",
          renderCustom: function (swiper, current, total) {
            return `
					<span class="now">0${current}</span>
					<span>/</span>
					<span class="total">0${total}</span>
					`;
          },
        },
      });

      tabSwiper.update();
    });
  });
}

sec_TabCont(3);
sec_TabCont(4);

/* ActiveOnVisible library */
function ActiveOnVisible__init() {
  $(window).on("scroll", function () {
    $(".active-on-visible").each(function () {
      let $this = $(this);
      let offsetTop = $this.offset().top;

      let windowTop = $(window).scrollTop();

      let windowHeight = $(window).height();

      let wTop = windowTop + windowHeight * 0.8;

      if (wTop > offsetTop) {
        $this.addClass("active");
      } else {
        $this.removeClass("active");
      }
    });
  });

  $(window).trigger("scroll");
}

ActiveOnVisible__init();
/* ActiveOnVisible library END */

/* Footer code */
function familySiteShowAndHide() {
  $(".family-site-item .site-btn").click(function () {
    let $this = $(this);
    let has = $this.hasClass("active");

    let siteList = $this.next(".family-site-list");

    if (has) {
      $this.removeClass("active");
      siteList.removeClass("active");
    } else {
      $this.addClass("active");
      siteList.addClass("active");
    }
  });
}

familySiteShowAndHide();

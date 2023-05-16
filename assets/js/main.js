(function ($) {
  "use strict";
  // menu
  $(".siteBar-btn").click(function () {
    $(".mobile-menu").toggleClass("siteBar");
  });

  jQuery(document).ready(function ($) {
    //------------ Offcanvas menu -------------

    $(".open_btn , .offcanvas-overlay").click(function () {
      $(".offcanvas-area , .offcanvas-overlay").addClass("active");
    });
    $(".menu-close , .offcanvas-overlay").click(function () {
      $(".offcanvas-area , .offcanvas-overlay").removeClass("active");
    });

    //------------ photo_gallery_section slider -------------
    $(".photo_wrapper").owlCarousel({
      items: 2,
      nav: true,
      dot: false,
      loop: true,
      // margin: 20,
      autoplay: false,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsiveClass: true,
      navText: [
        "<i class='far fa-arrow-left'></i>",
        "<i class='far fa-arrow-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 2,
          // margin: 15,
          // stagePadding: 80,
        },
        768: {
          items: 2,
        },
        991: {
          items: 3,
          // margin: 18,
          // stagePadding: 80,
        },
        1200: {
          items: 4,
          // margin: 20,
          // stagePadding: 130,
        },
        1360: {
          items: 4,
          // margin: 25,
          // stagePadding: 30,
        },
      },
    });

    //------------ blog_slider slider -------------
    $(".blog_slider").owlCarousel({
      items: 2,
      nav: true,
      dot: false,
      loop: true,
      // margin: 20,
      autoplay: false,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsiveClass: true,
      navText: [
        "<i class='far fa-arrow-left'></i>",
        "<i class='far fa-arrow-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 2,
          margin: 15,
          // stagePadding: 80,
        },
        768: {
          items: 2,
        },
        991: {
          items: 2,
          margin: 18,
          // stagePadding: 80,
        },
        1200: {
          items: 2,
          margin: 20,
          // stagePadding: 130,
        },
        1360: {
          items: 2,
          margin: 25,
          // stagePadding: 30,
        },
      },
    });

    //------------ testimonial_Slider -------------
    $(".testimonial_Slider").owlCarousel({
      items: 2,
      nav: true,
      dot: false,
      loop: true,
      // margin: 20,
      autoplay: false,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsiveClass: true,
      navText: [
        "<i class='far fa-arrow-left'></i>",
        "<i class='far fa-arrow-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 1,
          // margin: 15,
          // stagePadding: 80,
        },
        768: {
          items: 1,
        },
        991: {
          items: 1,
          // margin: 18,
          // stagePadding: 80,
        },
        1200: {
          items: 1,
          // margin: 20,
          // stagePadding: 130,
        },
        1360: {
          items: 1,
          // margin: 25,
          // stagePadding: 30,
        },
      },
    });

    // -----------------VenBox---------------
    $(".venobox_custom").venobox({});

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }); //---document-ready-----
})(jQuery);

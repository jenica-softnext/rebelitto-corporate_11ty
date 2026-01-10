// header
$(document).ready(function () {
  let lastScrollTop = 0;
  const header = $("header");

  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.addClass("is-hidden");
    } else {
      header.removeClass("is-hidden");
    }

    lastScrollTop = scrollTop;
  });
});

$(document).ready(function () {
  $("#hamburger").click(function () {
    $("header nav").toggleClass("is-open"); // toggle slide from top
    $(this).toggleClass("is-open"); // animate hamburger
  });
});

// slider
$(document).ready(function () {
  $(".mv_slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $(".interview-content .slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: true,
          centerPadding: "15px",
        },
      },
    ],
  });
});

// FAQ accordion

$(document).ready(function () {
  $(".accordion_a").hide();

  $(".accordion_q").on("click", function () {
    const $accordion = $(this).closest(".accordion");
    const $answer = $accordion.find(".accordion_a");

    // close others (optional — remove if you want multiple open)
    $accordion.siblings(".accordion").removeClass("is-open").find(".accordion_a").slideUp(300);

    // toggle current
    $accordion.toggleClass("is-open");
    $answer.stop(true, true).slideToggle(300);
  });
});

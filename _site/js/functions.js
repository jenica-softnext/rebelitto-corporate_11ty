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
document.addEventListener("DOMContentLoaded", function () {
  let entrySlide = document.querySelector(".entry-slide");
  let mainWrap = document.querySelector(".main-wrap");
  if (entrySlide) {
    // Add a 2-second delay before adding "active" class
    setTimeout(function () {
      entrySlide.classList.add("active");

      // Add "out" class 2 seconds after "active" is added
      setTimeout(function () {
        entrySlide.classList.add("out");

        // Add "active" class to main-wrap after "out" duration is over
        if (mainWrap) {
          setTimeout(function () {
            mainWrap.classList.add("active");
          }, 1000); // Immediate after "out" is added
        }
      }, 2500);
    }, 2000);
  }
});

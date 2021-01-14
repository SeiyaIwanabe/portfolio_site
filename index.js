$(function() {
  $('.typed').typed({
    strings: ["welcome to My Portfolio.", "Let's scroll down."],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 500
  });

  const targetElement = document.querySelectorAll(".animationTarget");
  document.addEventListener("scroll", function() {
    for (let i = 0; i < targetElement.length; i++) {
      const  getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.4

      if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add("show");
      }
    };
  })
});
$(function() {
  //タイピングアニメーション
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

  //スクロールしたら要素が出現
  // const targetElement = document.querySelectorAll(".animationTarget");
  // document.addEventListener("scroll", function() {
  //   for (let i = 0; i < targetElement.length; i++) {
  //     const  getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.4

  //     if (window.innerHeight > getElementDistance) {
  //       targetElement[i].classList.add("show");
  //     }
  //   };
  // })

  // イニシャルアニメーション
  $('.line').animate({"width":"100%"}, 1000, function() {
    $('.line').css("right", 0)
    $('.line').animate({"width":"0%"}, function() {
      $('.up').animate({"height":"0%"});
      $('.down').animate({"height":"0%"});
    });
  })

  // 矢印を動かす
  setInterval(function() {

    $("#arrow_1").animate({
      bottom: "-=55px"}, 1000);
    $("#arrow_1").animate({
      bottom: "+=55px"}, 1000);

    $("#arrow_2").animate({
      bottom: "-=45px"}, 1000);
    $("#arrow_2").animate({
      bottom: "+=45px"}, 1000);

    $("#arrow_3").animate({
      bottom: "-=35px"}, 1000);
    $("#arrow_3").animate({
      bottom: "+=35px"}, 1000);

    $("#arrow_4").animate({
      bottom: "-=25px"}, 1000);
    $("#arrow_4").animate({
      bottom: "+=25px"}, 1000);

    $("#arrow_5").animate({
      bottom: "-=15px"}, 1000);
    $("#arrow_5").animate({
      bottom: "+=15px"}, 1000);
  
  },1000);

  // 指定位置にスクロール
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    let speed = 400; // ミリ秒で記述
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    position -= 70;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

});


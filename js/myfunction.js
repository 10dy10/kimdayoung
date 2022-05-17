
window.addEventListener('scroll', function(){
  let scroll = window.scrollY

  console.log(scroll);

  // navbar 색상 변경
  if (scroll > 100) {
    document.querySelector('.top-nav').classList.add('fixed')
  } else {
    document.querySelector('.top-nav').classList.remove('fixed')    
  }

  // 스킬 부분 스킬바 움직이게
  const skills = document.querySelectorAll('.skill')
  if( scroll > 1500) {
    skills.forEach(function(e){
      setTimeout(function(){
        e.classList.add('line')
      }, e * 500)
    })
  }
})


$(function () {
  // 포트폴리오 슬라이드
  var swiper = new Swiper(".mySwiper", {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    autoplay: {
      delay: 3000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // AOS
  AOS.init();

  // index text 애니메이션 효과
  let mainTxt = document.querySelector(".txt-box");
  setTimeout(function () {
    mainTxt.classList.add("active");
  }, 1000);
});

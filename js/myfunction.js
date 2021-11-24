$(function(){
            
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();

        // 네비 css
        if(scroll>1){$('.top-nav').css({
            'border-bottom':'1px solid #000',
            'background-color':'#fff',
            'color':'#333',
        })}else{$('.top-nav').css({
            'border-bottom':'none',
            'background-color':'transparent',
            'color':'#fff',
        })};


        // 스킬 애니메이션 효과
        if($(document).scrollTop()>400) {
            $(".skill>li").each(function(e){
                setTimeout(function(){
                    $(".skill>li").eq(e).addClass("line");
                }, e * 500 );
            });
        }
    })

    // 포트폴리오 슬라이드
    var swiper = new Swiper(".mySwiper", {
        breakpoints:{
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1000:{
                slidesPerView: 3,
                spaceBetween: 10,
            }
        },
        autoplay: {
            delay: 3000,
        },
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        },
    });

    // 스무스 스크롤
    var scroll = new SmoothScroll('a[href*="#"]',{
        speed: 800,
        easing: 'easeInOutCubic',
    });

    // AOS
    AOS.init();

    // index text 애니메이션 효과
    let mainTxt = document.querySelector('.txt-box');
    setTimeout(function(){
        mainTxt.classList.add('active');
    },1000)

})
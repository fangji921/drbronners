$(document).ready(function () {

    $(window).on("scroll", function () {


            var scrTop = $(this).scrollTop();
            var winHeight = $(window).height();

         /*스크롤시 헤더 형태변형*/
        if (scrTop !== 0) {
            $("header").addClass("on-scroll");
        } else {
            $("header").removeClass("on-scroll");
        }

            /*스크롤시 섹션2 컨텐츠별 이벤트*/
            if (scrTop >= $(".sec-02").offset().top - winHeight/3 && scrTop < $(".sec-02").offset().top + $(".sec-02 .text-box").height() / 2) {
                
                $(".sec-02 .text-box").addClass("fade");

            } else if (scrTop >= $(".sec-02").offset().top + $(".sec-02 .text-box").height() / 3 && scrTop < $(".sec-02").offset().top + winHeight / 2) {

                $(".sec-02 .large-img").addClass("fade");

            } else if(scrTop >= $(".sec-02").offset().top + winHeight/2 && scrTop<$(".sec-03").offset().top){
                      
                $(".sec-02 .cont").addClass("fade");
                
            }else if (scrTop <= $(".sec-01").offset().top) {

                $(".sec-02 .text-box").removeClass("fade");
                $(".sec-02 .large-img").removeClass("fade");
                $(".sec-02 .cont").removeClass("fade");
            }

            /*스크롤시 섹션3 컨텐츠별 이벤트*/
            if (scrTop >= $(".sec-03").offset().top - winHeight / 2 && scrTop < $(".sec-03").offset().top -winHeight / 4 ) {

                $(".sec-03").addClass("swipe");

            } else if (scrTop >=$(".sec-03").offset().top-winHeight / 4  && scrTop<$(".sec-03").offset().top) {

                $(".sec-03 .color-box").addClass("swipe");
                $(".sec-03 .img-box").addClass("swipe");
                $(".sec-03 .textbox").children().addClass("fade");
                
            }else if(scrTop<$(".sec-03").offset().top-winHeight){
                $(".sec-03").removeClass("swipe").find("color-box img-box").removeClass("swipe");
                $(".sec-03 .text_box").children().removeClass("fade");
            }
        
            /*스크롤시 섹션4 컨텐츠별 이벤트*/
        if(scrTop>=$(".sec-04").offset().top-winHeight/2 && scrTop<$(".sec-05").offset().top){
            
            $(".sec-04 .textbox").children().addClass("fade");
            $(".sec-04 .product").addClass("fade");
            
            
        }else if(scrTop<$(".sec-04").offset().top-winHeight){
            
            $(".sec-04 .textbox").children().removeClass("fade");
            $(".sec-04 .product").removeClass("fade");
        }
        
        if(scrTop>=$(".sec-06").offset().top-winHeight/2 && scrTop<$("footer").offset().top){
            
            $(".sec-06 h2").addClass("fade");
            $(".sec-06 .insta-feed").addClass("fade");
        
        }else if(scrTop<$(".sec-05").offset().top){
        
            $(".sec-06 h2").removeClass("fade");
            $(".sec-06 .insta-feed").removeClass("fade");
            
        }
        
        })

    $('.sec-01 .main-bg .inner').slick({
        dots: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.sec-05 .mini-banner-box').slick({
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
})

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
            if (scrTop >= $(".sec_02").offset().top - winHeight/3 && scrTop < $(".sec_02").offset().top + $(".sec_02 .textbox").height() / 2) {
                
                $(".sec_02 .textbox").addClass("fade");

            } else if (scrTop >= $(".sec_02").offset().top + $(".sec_02 .textbox").height() / 2 && scrTop < $(".sec_02").offset().top + winHeight / 2) {

                $(".sec_02 .soup-pic").addClass("fade");

            } else if(scrTop >= $(".sec_02").offset().top + winHeight/2 && scrTop<$(".sec_03").offset().top){
                      
                $(".sec_02 .ingredient").addClass("fade");
                
            }else if (scrTop <= $(".sec_01").offset().top) {

                $(".sec_02 .textbox").removeClass("fade");
                $(".sec_02 .soup-pic").removeClass("fade");
                $(".sec_02 .ingredient").removeClass("fade");
            }

            /*스크롤시 섹션3 컨텐츠별 이벤트*/
            if (scrTop >= $(".sec_03").offset().top - winHeight / 2 && scrTop < $(".sec_03").offset().top -winHeight / 4 ) {

                $(".sec_03").addClass("swipe");

            } else if (scrTop >=$(".sec_03").offset().top-winHeight / 4  && scrTop<$(".sec_03").offset().top) {

                $(".sec_03 .color-box").addClass("swipe");
                $(".sec_03 .img-box").addClass("swipe");
                $(".sec_03 .textbox").children().addClass("fade");
                
            }else if(scrTop<$(".sec_03").offset().top-winHeight){
                $(".sec_03").removeClass("swipe").find("color-box img-box").removeClass("swipe");
                $(".sec_03 .text_box").children().removeClass("fade");
            }
        
            /*스크롤시 섹션4 컨텐츠별 이벤트*/
        if(scrTop>=$(".sec_04").offset().top-winHeight/2 && scrTop<$(".sec_05").offset().top){
            
            $(".sec_04 .textbox").children().addClass("fade");
            $(".sec_04 .product").addClass("fade");
            
            
        }else if(scrTop<$(".sec_04").offset().top-winHeight){
            
            $(".sec_04 .textbox").children().removeClass("fade");
            $(".sec_04 .product").removeClass("fade");
        }
        
        if(scrTop>=$(".sec_06").offset().top-winHeight/2 && scrTop<$("footer").offset().top){
            
            $(".sec_06 h2").addClass("fade");
            $(".sec_06 .insta-feed").addClass("fade");
        
        }else if(scrTop<$(".sec_05").offset().top){
        
            $(".sec_06 h2").removeClass("fade");
            $(".sec_06 .insta-feed").removeClass("fade");
            
        }
        
        })

    $('.sec_01 .sec-inner').slick({
        dots: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.sec_05 .mini-banner-box').slick({
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
})

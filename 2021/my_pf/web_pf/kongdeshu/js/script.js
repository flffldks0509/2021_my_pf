$(document).ready(function(){
        
    /*스크롤 이벤트*/
    
    var $menu = $('.menu_bar ul li'), 
    $contents =  $('#contents > section');
    
    $menu.click(function(x){

        x.preventDefault();
        
        
        var idx = $(this).index();
        var section = $contents.eq(idx)
        var sectionDistance = section.offset().top;
        
        $('html').stop().animate({scrollTop:sectionDistance})
        
    });
    
    $(window).scroll(function(){
      $contents.each(function(){
        
          if($(this).offset().top <= $(window).scrollTop()){
            var idx = $(this).index();
            $menu.removeClass('on');
            $menu.eq(idx).addClass('on');
             
         }
          
    });        
                     
    });
    

    /*홈 슬라이드*/
    $(".imgslide").slick({
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows : false,
        pauseOnHover : false,
        
    });
    
    
   
    /*스크롤 트리거*/
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".kong_intro", {
      duration:1, y:-100, ease:"linear", opacity:1, 
        scrollTrigger: {
          trigger:".kong_intro .img-box",
//          markers:true,
          start:"top 75%", //when top of herman passes 75% viewport height
          end:"bottom 25%", //when bottom of herman passes 25% viewport height
        }
    })  
    
    
    gsap.to(".gal_r", {
      duration:1, y:-100, ease:"linear", opacity:1, 
        scrollTrigger: {
          trigger:".gal_l .txt",
//          markers:true,
          start:"top 75%", //when top of herman passes 75% viewport height
          end:"bottom 25%", //when bottom of herman passes 25% viewport height
        }
    })  
    
        gsap.to(".map", {
      duration:1, ease:"linear", opacity:1, 
        scrollTrigger: {
          trigger:".way_r p",
//          markers:true,
          start:"top 75%", //when top of herman passes 75% viewport height
          end:"bottom 25%", //when bottom of herman passes 25% viewport height
        }
    }) 
    
    
    /*제품보기 슬라이드*/
    $(".pro_imgslide").slick({
        dots:false,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows : false,
        pauseOnHover : false,
        slidesToShow : 4,
    });
    
          
})
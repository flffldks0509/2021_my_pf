

$(document).ready(function(){
    
    /*홈 장점 애니메이션 이벤트*/
    $('#contents #home .advantage').animate({
        "left": 250,
        "opacity": 1,
    },2000)
    
    
    
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
    

    /*작업물 슬라이드*/
    $(".works_slide").slick({
        dots:false,
        autoplay: false,
        autoplaySpeed: 2000,
        fade:true,
    });
    
    
          
})
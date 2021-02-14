function start(){
    
       $("#imgslide").slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false ,
        
    })
}


$(document).ready(function(){
    
    $(".menu_box>ul>li").mouseover(function(){
        $('.menu_bg_white').stop().slideDown();
        $('.submenu_bg').stop().slideDown();
        $('.menu_box_2').stop().slideDown();
    })
    
    $(".menu_box>ul>li").mouseleave(function(){
        $('.menu_bg_white').stop().slideUp();
        $('.submenu_bg').stop().slideUp();
        $('.menu_box_2').stop().slideUp();
    })
    
    start();
 
    
})
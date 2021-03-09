$(document).ready(function(){
    
    $('.hd_bg').hide();

    $('.ham_btn').click(function(ev){
        ev.preventDefault();
        $(this).toggleClass('active');
        
        $('.hd_bg').slideToggle(1000);
        
    })
    
    
})
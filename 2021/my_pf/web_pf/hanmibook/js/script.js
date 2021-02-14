$(document).ready(function(){
  
  $(".imgslide").slick({
    dots:true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:false,//마우스 오버시 슬라이드 이동 멈춤
      arrows: false,
  });
  
    $(".bk_slide_box").slick({
    dots:true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,//마우스 오버시 슬라이드 이동 멈춤
    slidesToShow : 5,		// 한 화면에 보여질 컨텐츠 개수
	slidesToScroll : 1,
    dots:false, /*  아래점  */
  });
  
  
  
})
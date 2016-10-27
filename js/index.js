$(function(){
    var mySwiper = new Swiper ('#banner', {
        direction: 'horizontal',
        loop: true,
        autoplay: 1500,
        // 如果需要分页器
        pagination: '.swiper-pagination'
    });
    var hot_text = new Swiper ('#hot-texts', {
        direction: 'vertical',
        loop: true,
        autoplay: 1500
    });
    var zaoshi = new Swiper('#zaoshi-img', {
        slidesPerView: 2,
        spaceBetween: 0
    });
    var btn=$(".header-btn");
    var guide_btn=$(".guide-btn");
    var list_title=$(".guide-list");
    var list_box=$(".list-box");
    var guding_flag=true;
    list_title.eq(0).css("background","#fff");
    list_box.eq(0).css("display","block");
    btn.on("click",function(){
        $(".guide-bg").addClass("show");
        $(".guide").removeClass("no-show");
    });
    guide_btn.on("click",function(){
        $(".guide-bg")
            .delay(800)
            .queue(function(){
                $(this).removeClass("show").dequeue();
            });
        $(".guide").addClass("no-show");
    });
    list_title.on("click",function(){
        var index=$(this).index();
        list_title.css("background","#EEEEEE");
        list_box.css("display","none");
        $(this).css("background","#fff");
        list_box.eq(index).css("display","block");
    });
    $(window).on("scroll",function(){
        var top=$(this).scrollTop();
        if(top>300&&guding_flag){
            guding_flag=false;
            $(".header").addClass("header-fixed");
        }
        if(top<300){
            guding_flag=true;
            $(".header").removeClass("header-fixed");
        }
    })
});
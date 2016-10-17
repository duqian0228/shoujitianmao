$(function(){
    var mySwiper = new Swiper ('#banner', {
        direction: 'horizontal',
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination'
    });
    var hot_text = new Swiper ('#hot-texts', {
        direction: 'vertical',
        loop: true
    });
    var btn=$(".header-btn");
    var guide_btn=$(".guide-btn");
    var list_title=$(".guide-list");
    var list_box=$(".list-box");

    list_box.eq(1).css({"top":"-60px"});
    list_box.eq(2).css({"top":"-120px"});
    list_box.eq(3).css({"top":"-180px"});
    list_box.eq(4).css({"top":"-240px"});
    list_box.eq(5).css({"top":"-300px"});
    list_box.eq(6).css({"top":"-360px"});
    list_box.eq(7).css({"top":"-420px"});
    list_box.eq(8).css({"top":"-480px"});
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
        list_title.css("background","#EEEEEE");
        list_box.css("display","none");
        $(this).css("background","#fff");
        $(this).find(".list-box").css("display","block");
    });
    $(window).on("scroll",function(){
        var top=$(this).scrollTop();
        if(top>300){
            $(".header").toggleClass("header-fixed")
        }
    })
});
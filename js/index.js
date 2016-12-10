// JavaScript Document


$(function () {
    
    // 我的淘宝
    $('#myTB').hover(function () {
        $(this).css('background', '#FFF').css('borderLeft', '1px solid #CCC').css('borderRight', '1px solid #CCC');
        $('.box_myTB').show();
    }, function () {
        $(this).ncss('background').ncss('borderLeft').ncss('borderRight');
        $('.box_myTB').hide();
    });
    
    // 收藏夹
    $('#myLove').hover(function () {
        $(this).css('background', '#FFF').css('borderLeft', '1px solid #CCC').css('borderRight', '1px solid #CCC');
        $('.box_myLove').show();
    }, function () {
        $(this).ncss('background').ncss('borderLeft').ncss('borderRight');
        $('.box_myLove').hide();
    });
    
    // 手机版
    $('#mobileversion').hover(function () {
        $(this).css('background', '#FFF').css('borderLeft', '1px solid #CCC').css('borderRight', '1px solid #CCC');
        $('.box_mobileversion').show();
    }, function () {
        $(this).ncss('background').ncss('borderLeft').ncss('borderRight');
        $('.box_mobileversion').hide();
    });
    
    // 商家支持
    $('#support').hover(function () {
        $(this).css('background', '#FFF').css('borderLeft', '1px solid #CCC').css('borderRight', '1px solid #CCC');
        $('.box_support').show();
    }, function () {
        $(this).ncss('background').ncss('borderLeft').ncss('borderRight');
        $('.box_support').hide();
    });
    
    // 网站导航
    $('#wzdh').hover(function () {
        $(this).css('background', '#FFF').css('borderLeft', '1px solid #CCC').css('borderRight', '1px solid #CCC');
        $('.box_wzdh').show();
    }, function () {
        $(this).ncss('background').ncss('borderLeft').ncss('borderRight');
        $('.box_wzdh').hide();
    });
    
    /* 左侧边栏 */
    $(window).bind('scroll', function () {
        if (getScroll().top > getInner().height) {
            $('#sideBar_left').css('top', getScroll().top + (getInner().height - parseInt(getStyle($('#sideBar_left').first(), 'height'))) / 2 + 'px').show();
            $('#search_float').css('top', getScroll().top + 'px').show();
        } else {
            $('#sideBar_left').hide();
            $('#search_float').hide();
        }
    });
    
    /* 右侧边栏 */
    $(window).bind('scroll', function () {
        $('#sideBar_right').css('top', getScroll().top + 'px');
    });
    
    /* 轮播图 */ 
    // 轮播器初始化
    $('#banner_carousel a').opacity(0);
    $('#banner_carousel a').eq(0).opacity(100);
    $('#banner_carousel ul li').eq(0).css('color', '#333');
    // 轮播器种类
    var banner_type = 1;
    // 轮播器计数器
    var banner_index = 1;
    // 自动轮播器
    var banner_timer = setInterval(banner_fn, 3000);
    // 手动轮播器
    $('#banner_carousel ul li').hover(function () {
        clearInterval(banner_timer);
        if ($(this).css('color') != 'rgb(51, 51, 51)' && $(this).css('color') != '#333') {
            banner(this, banner_index == 0 ? $('#banner_carousel ul li').length() - 1 : banner_index - 1);
        }
    }, function () {
        banner_index = $(this).index() + 1;
        banner_timer = setInterval(banner_fn, 3000);
    });
    function banner(obj, prev) {
        $('#banner_carousel ul li').css('color', '#CCC');
        $(obj).css('color', '#333');
        //alert(prev);
        //alert($(obj).index());
        if (banner_type == 1) {
            //alert(prev);
            $('#banner_carousel a').eq(prev).css('opacity', 0).css('zIndex', 1);
           // alert($(obj).index());
           // alert($('#banner_carousel a').index());
            $('#banner_carousel a').eq($(obj).index()).css('opacity', 1).css('zIndex', 2);
            //alert($(obj).index());
        } else if (banner_type == 2) {
            $('#banner_carousel a').eq(prev).animate({
                attr : 'y',
                target : 500,
                t : 30, 
                step : 15
            }).css('zIndex', 1).opacity(100);
            $('#banner_carousel a').eq($(obj).index()).animate({
                attr : 'y',
                 target : 0,
                t : 30, 
                step : 15
            }).css('top', '-500px').css('zIndex', 2).opacity(100);
        }
    }
    function banner_fn() {
        if (banner_index >= $('#banner_carousel ul li').length()) {
            banner_index = 0;
        }
        banner($('#banner_carousel ul li').eq(banner_index).first(), banner_index == 0 ? $('#banner_carousel ul li').length() - 1 : banner_index - 1);
        banner_index++;
    }
    
    // ???????????????????????????????????????????
    /* 商品导航栏鼠标滑过效果 */
    //alert($('#list_box').ge(0).offsetHeight); //500
    //alert($('#list_box').ge(0).offsetWidth);  //790
    //alert($('#content').ge(0).offsetTop);     //203
    //alert($('#list_box').ge(0).offsetLeft);   //180
    //alert(offsetTop($('#list_box').ge(0)));   //0
    
    
    $('#list_short li').hover(function () {
        //console.log($(this).move()['x']);
        $(this).css('background', '#FFF');
        $('#list_box').show();
        $('#list_box li').eq($(this).index()).show();
    }, function () {
        $(this).css('background', 'none');
        $('#list_box').hide();
        $('#list_box li').eq($(this).index()).hide();
    });
    $('#list_box').hover(function () {
        $(this).show();
        $('#list_box li').eq($('#list_short li').index()).show();
    }, function () {
        $(this).hide();
        $('#list_box li').eq($('#list_short li').index()).hide();
    });
    
    // 商标滑过显示收藏和进入店铺
    $('#brand_list ul li').hover(function () {
        $(this).find('.brand_mask').show();
    }, function () {
        $(this).find('.brand_mask').hide();
    });
    
    // 鼠标滑过放大图片
    $('.channel_img').hover(function () {
        $(this).css('transform', 'scale(1)');
    }, function () {
        $(this).css('transform', 'scale(0.8)');
    });
     
    
});
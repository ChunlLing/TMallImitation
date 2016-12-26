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
    
    // 更多缩略框
    $('#member_nav .more_list').hover(function () {
        $(this).find('.more').css('borderBottomColor', '#FFF').css('borderBottomWidth', '4');
        $(this).find('ul').show();
    }, function () {
        $(this).find('.more').css('borderBottomColor', '#CCC').css('borderBottomWidth', '1');
        $(this).find('ul').hide();
    });
    
    // 导航栏下拉列表显示
    $('#nav_bar ul li').hover(function() {
        if ($(this).find('.drop_list').ge(0) != undefined) {
            $(this).find('.drop_list').show();
            $(this).css('border', '1px solid #CCC');
        }
    }, function () {
        if ($(this).find('.drop_list').show()) {
            $(this).find('.drop_list').hide();
        }
        $(this).css('border', 'none');
    });
    
    
});

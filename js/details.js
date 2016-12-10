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
    
    /* 右侧边栏 */
    $(window).bind('scroll', function () {
        $('#sideBar_right').css('top', getScroll().top + 'px');
    });
    
    // 描述物流服务滑过显示
    $('#shop_descript .arrow').hover(function () {
        $('#descript_other').show();
    }, function () {
        $('#descript_other').hide();
    });
    
    // 鼠标划过商品缩略图显示对应图片
    $('.picture_small').hover(function () {
        if ($(this).index() != 0) {
            $('.picture_big').eq(0).hide();
        }
        $('.picture_big').eq($(this).index()).show();
    }, function () {
        $('.picture_big').eq($(this).index()).hide();
        $('.picture_big').eq(0).show();
    })
    
    
    try {
            // TOOD YOUR CODE
    
    $('.picture_big').hover(function () {
    }, function () {
    });
            
        } catch (e) {
            alert(e.name + '|' + e.message + '|' + e.fileName + '|' + e.lineNumber);
        }
    
    // 显示支付方式
    $('.product_insurance .payment').hover(function () {
        $('.payment_box').show();
    }, function () {
        $('.payment_box').hide();
    });
    
    
    // 点击评价更换样式
    $('.header_text1').toggle(function () {
        $(this).css('backgroundColor', '#FCF');
    }, function () {
        $(this).css('backgroundColor', '#FFF');
    });
    
    // 点击全部单选按钮
    
    var estimateNums = $('.estimate_item').length();
    //alert(typeof estimateNums);
    $('#all').click(function () {
        for (var i = 0; i < estimateNums; i++) {
            $('.estimate_item').eq(i).show();
        }
    });
    
    // 点击追评按钮
    $('#more').click(function () {
        for (var i = 0; i < estimateNums; i++) {
            $('.estimate_item').eq(i).show();
            try {
                $('.estimate_item').eq(i).find('.estimate_left').index();
            } catch (e) {
                $('.estimate_item').eq(i).hide();
            }
        }
    });
    
    
    
    // 点击图片按钮
    $('#img').click(function () {
        for (var i = 0; i < estimateNums; i++) {
            $('.estimate_item').eq(i).show();
            try {
                $('.estimate_item').eq(i).find('img').index();
            } catch (e) {
                $('.estimate_item').eq(i).hide();
            }
            //alert($('.estimate_item').eq(i).find('img').index());
        }
    });
    
    
    
    
    
    
    
    
    
    
});
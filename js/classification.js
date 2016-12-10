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
    
    /* 筛选列表 */
    // 点击更多显示隐藏内容
    $('.select_main .select_more').hover(function () {
        $(this).css('color', '#F60');
    }, function () {
        $(this).css('color', '#666');
    }).click(function () {
        //alert($(this).index());        // 都是弹出1，HTML有两个
        $(this).hide();
        $('.select_main .select_hide').show();
        $('.select_main').css('maxHeight', '100%');
    });
    // 点击收起隐藏内容
    $('.select_main .select_hide').click(function () {
        $(this).hide();
        $('.select_main').css('maxHeight', '70px');
        $('.select_main .select_more').show();
    });
    
    /* 排序栏 */
    var contentTop = $('#content').first().offsetTop;
    var barTop = $('#sort_bar').first().offsetTop;
    $(window).bind('scroll', function () {
        if (getScroll().top < (barTop + contentTop)) {
            $('#sort_bar').css('position', 'relative').css('offsetTop', barTop + 'px').css('top', '5px').css('border', 'none');
        } else {
            $('#sort_bar').css('position', 'absolute').css('top', getScroll().top - contentTop - 5 + 'px').css('border', '1px solid #CCC');
        }
    });
    
    // 排序方式
    function setFlag () {
        for (var i = 0; i < $('.sort_list').length(); i++) {
            $('.sort_list').ge(i).flag = 'true';            // 监控是否点击了鼠标
        }  
    }       
    setFlag();   
    $('.sort_list').hover(function () {
        $(this).css('backgroundColor', '#EDD');
    }, function () {
        for (var i = 0; i < $('.sort_list').length(); i++) {
            if ($(this).index() == i) {
            } else {
                $('.sort_list').ge(i).flag = 'true';            // 监控是否点击了鼠标 
            }
        }  
        if ($(this).first().flag) {
            $(this).css('backgroundColor', '#FFF');
        }
    }).click(function () {
        setFlag();
        if ($(this).first().flag) {
            $(this).first().flag = false;
            $(this).css('backgroundColor', '#EDD');
        } else {
            $(this).first().flag = true;
            $(this).css('backgroundColor', '#FFF');
        }
    });
    
    
    try {
            // TOOD YOU CODE
            
            
    // 点击销量按月成交额由高到低排序
    $('#sort_list .sort_list').obj(3).click(function () {
        var temp = [];
        
        // 将所有的月成交额转换为整数存入临时数组内
        for (var i = 0; i < $('#main_body .product_msg .sales').length(); i++) {
            var intNum;
            if (parseFloat($('#main_body .product_msg .sales').obj(i).text()) < 50) {
                intNum = parseFloat($('#main_body .product_msg .sales').obj(i).text()) * 10000;
            } else {
                intNum = parseFloat($('#main_body .product_msg .sales').obj(i).text());
            }
            temp.push(intNum);
        }
       // alert(temp);
        // 排序
        //temp.sort();
        function sortCopy (array) {
            alert(array);
            var arrayCopy = array.slice(0);
            return arrayCopy.sort(function (a, b) {
                return b - a;
            });
        }
        alert(sortCopy(temp));
        alert(temp);
        
    });
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        } catch (e) {
            alert(e.name + '|' + e.message + '|' + e.fileName + '|' + e.lineNumber);
        }
    
    
    
    
    
    
    // 底部页码
    $('#main_page .page_index').hover(function () {
        $(this).css('backgroundColor', '#6CC');
    }, function () {
        $(this).css('backgroundColor', 'transparent');
    });
    
    
});
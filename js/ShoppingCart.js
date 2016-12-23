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
    
/*    var all = document.getElementById('select_all');
    all.onclick = function () {
        alert(document.getElementsByTagName(all));
        alert(all.checked);
    };*/
    
    $('#select_all').ge(0).clicked = true;
    console.log($('#select_all').first().clicked);
    // 点击全选
    $('#select_all').click(function () {
        if ($(this).first().checked) {
            for (var i = 0; i < $('.select_box').length(); i++) {
                $('.select_box').ge(i).checked = true;
            }
            for (var i = 0; i < $('.product_total .price_total').length(); i++) {
                all = parseFloat(all) + parseFloat($('.product_total .price_total').obj(i).text());
            }
            $('.title_other .price_total').text(all.toFixed(2));
        } else {
            for (var i = 0; i < $('.select_box').length(); i++) {
                $('.select_box').ge(i).checked = false;
            }
            $('.title_other .price_total').text('0.00');
        }
    });
    
/*    $('#header').on('click', '.select_box', function (event) {
        alert('test!');
    });
    console.log($('#select_all').first().clicked);
    */
    // 点击全选店铺中的所有商品
    $('.content_name .select_box').click(function () {
        if ($(this).first().checked) {
            if (!$('#select_all').first().clicked) {
                console.log($('#select_all').first().clicked);
            $('#select_all').first().clicked = true;
            }
            console.log($('#shop_main .select_box').length());
            for (var i = 0; i < $('#shop_main .select_box').length(); i++) {
                $('#shop_main .select_box').ge(i).checked = true;
            }
            for (var i = 0; i < $('.product_total .price_total').length(); i++) {
                all = parseFloat(all) + parseFloat($('.product_total .price_total').obj(i).text());
            }
            $('.title_other .price_total').text(all.toFixed(2));
        } else {
            if ($('#select_all').first().clicked) {
                console.log('取消选择');
                console.log($('#select_all').first().clicked);
            }
            $('#select_all').first().clicked = false;
            for (var i = 0; i < $('#shop_main .select_box').length(); i++) {
                $('#shop_main .select_box').ge(i).checked = false;
            }
            $('.title_other .price_total').text('0.00');
        }
    });
    
    // 点击选中单个商品
    $('#shop_main .content_main .select_box').click(function () {
        var flag = 0;
        for (var i = 0; i < $('#shop_main .content_main .select_box').length(); i++) {
            if (!$('#shop_main .content_main .select_box').ge(i).checked) {
                $('#select_all').first().checked = false;
                $('.content_name .select_box').first().checked = false;
            } else {
                flag += 1;
            }
        }
        for (var i = 0; i < $('.product_total .price_total').length(); i++) {
                all = parseFloat(all) + parseFloat($('.product_total .price_total').obj(i).text());
            }
        $('.title_other .price_total').text(all.toFixed(2));
        if (flag == $('#shop_main .content_main .select_box').length()) {
            $('.content_name .select_box').first().checked = true;
        }
    });
    
    // 改变商品数量
    var nums = parseInt($('.product_nums').text());
    var price = parseFloat($('.selling_price').text()).toFixed(2);
    var total = parseFloat($('.price_total').text()).toFixed(2);
    var all = parseFloat($('.title_other .price_total').text()).toFixed(2);
    total = nums * price;
    $('.product_total .price_total').text(total.toFixed(2));
    
    $('.subtract').click(function () {
        if (nums == 0) {
        } else {
            nums--;
            total = nums * price;
            $('.product_nums').html(nums);
            $('.price_total').text(total.toFixed(2));
            for (var i = 0; i < $('.product_total .price_total').length(); i++) {
                all = parseFloat(all) - parseFloat($('.product_total .price_total').obj(i).text());
            }
            $('.title_other .price_total').text(all.toFixed(2));
        }
    });
    $('.add').click(function () {
        nums++;
        total = nums * price;
        $('.product_nums').html(nums);
        $('.product_total .price_total').text(total.toFixed(2));
        for (var i = 0; i < $('.product_total .price_total').length(); i++) {
            all = parseFloat(all) + parseFloat($('.product_total .price_total').obj(i).text());
        }
        $('.title_other .price_total').text(all.toFixed(2));
    });
    
    /*************************************************/
    /*
    
    存在的问题，点击'-'/'+'两个商品的数量、总价都会变，应当分离出来的
    总额计算有问题，乱序点击'-'/'+'总额会累加而不是在计算前先清除原先计算过的金额
    
    */
    /*************************************************/
    
    // 弹窗
    $('.settlement').hover(function () {
        $(this).css('fontSize', '14px').css('color', '#900');
    }, function () {
        $(this).css('fontSize', '12px').css('color', '#FFF');
    }).click(function () {
        $('#settle_box').center(300, 100).show();
        var num = 0;
        for (var i = 0; i < $('.product_nums').length(); i++) {
            if ($('#shop_main .content_main .select_box').ge(i).checked) {
                num = parseInt(num) + parseInt($('.product_nums').obj(i).text());
            }
        }
        $('#settle_box .nums').text(num);
        $('#settle_box .price_total').text($('.title_other .price_total').text());
        $('#settle_box .close').click(function () {
            $('#settle_box').hide();
        });
    });
    
    
});

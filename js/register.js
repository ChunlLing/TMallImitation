// JavaScript Document

$(function () {
    // 锁屏
    $('#screen').lock();
    
    // 协议
    $('#register_agreenment').center(700, 420).resize(function () {
        if ($('#register_agreenment').css('display') == 'block') {
            // 锁屏
            $('#screen').lock();
        }
    });
    
    // 点击协议的关闭按钮
    $('#register_agreenment .close').click(function () {
        alert('此为测试按钮，请点击同意协议按钮以便进行后续注册步骤');// 这里并没有实现跳转到首页
        
    });
    
    // 点击协议的同意协议按钮
    $('#register_agreenment .agree').click(function () {
        $('#screen').unlock();
        $('#register_agreenment').hide();
        $('#tag .step1').css('borderBottom', '4px solid #900');
    });
    
    /* 验证身份信息 */
    //var register = $('form').name('register');
    
    // 真实姓名验证
    $('form').name('register').form('user_name').bind('blur', function () {
        if (trim($(this).value()) == '') {
            $('#tag_content .tag2 .success_user').hide();
            $('#tag_content .tag2 .error_user').inshow();
        } else {
            $('#tag_content .tag2 .error_user').hide();
            $('#tag_content .tag2 .success_user').inshow();
        }
    }); 
    $('form').name('payment').form('user_name').bind('blur', function () {
        if (trim($(this).value()) == '') {
            $('#tag_content .tag3 .success_user').hide();
            $('#tag_content .tag3 .error_user').inshow();
        } else {
            $('#tag_content .tag3 .error_user').hide();
            $('#tag_content .tag3 .success_user').inshow();
        }
    }); 
    
    // 身份证号码验证
    $('form').name('register').form('id').bind('blur', function () {
        if ($(this).value().length == 15 || $(this).value().length == 18) {
            $('#tag_content .tag2 .error_id').hide();
            $('#tag_content .tag2 .success_id').inshow();
        } else {
            $('#tag_content .tag2 .success_id').hide();
            $('#tag_content .tag2 .error_id').inshow();
        }
    });
    $('form').name('payment').form('id').bind('blur', function () {
        if ($(this).value().length == 15 || $(this).value().length == 18) {
            $('#tag_content .tag3 .error_id').hide();
            $('#tag_content .tag3 .success_id').inshow();
        } else {
            $('#tag_content .tag3 .success_id').hide();
            $('#tag_content .tag3 .error_id').inshow();
        }
    });
    
    // 有效期验证
    $('form').name('register').form('date').bind('blur', function () {
        var patten = /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/g;
        if (patten.test($(this).value())) {
            $('#tag_content .tag2 .error_date').hide();
            $('#tag_content .tag2 .success_date').inshow();
        } else { 
            $('#tag_content .tag2 .success_date').hide();
            $('#tag_content .tag2 .error_date').inshow();
        }
    });
    
    // 职业验证
    $('form').name('register').form('occupation').bind('blur', function () {
        if ($(this).value() != '0') {
            $('#tag_content .tag2 .error_occupation').hide();
            $('#tag_content .tag2 .success_occupation').inshow();
        } else { 
            $('#tag_content .tag2 .success_occupation').hide();
            $('#tag_content .tag2 .error_occupation').inshow();
        }
    });
    
    // 地址验证
    $('form').name('register').form('note').bind('blur', function () {
        if ($('form').name('register').form('province').value() != '0' &&$('form').name('register').form('city').value() != '0' && $('form').name('register').form('district').value() != '0' && $(this).value() != '') {
            $('#tag_content .tag2 .error_address').hide();
            $('#tag_content .tag2 .success_address').inshow();
        }
        if ($(this).value() == '') {
            $('#tag_content .tag2 .success_address').hide();
            $('#tag_content .tag2 .error_address').inshow();
        }
    });
    
    // 点击确定
    $('#tag_content .tag2 .sure').hover(function () {
        $(this).css('fontSize', '20px');
    }, function () {
        $(this).css('fontSize', '14px');
    }).click(function () {
        $('#tag_content .tag2 .confirm').center(500, 100).show();
        $('#tag_content .tag2 .confirm .close').click(function () {
            $('#tag_content .tag2 .confirm').hide();
        })
    });
    $('#tag_content .tag3 .sure').hover(function () {
        $(this).css('fontSize', '14px');
    }, function () {
        $(this).css('fontSize', '12px');
    }).click(function () {
        $('#tag_content .tag3 .confirm').center(500, 100).show();
        $('#tag_content .tag3 .confirm .close').click(function () {
            $('#tag_content .tag3 .confirm').hide();
        })
    });
    
    // 点击下一步
    $('#tag_content .tag1 .next').click(function () {
        if (trim($('#tag_content .mobilephone').value()) == '') {
            alert('请输入手机号码');
        } else {
            $('#tag_content .tag1').hide();
            $('#tag_content .tag2').show();
            $('#tag .step1').css('borderBottom', 'none');
            $('#tag .step2').css('borderBottom', '4px solid #900');
        }
    });
    $('#tag_content .tag2 .next').click(function () {
        $('#tag_content .tag2').hide();
        $('#tag_content .tag3').show();
        $('#tag .step2').css('borderBottom', 'none');
        $('#tag .step3').css('borderBottom', '4px solid #900');
    });
    $('#tag_content .tag3 .next').click(function () {
        $('#tag_content .tag3').hide();
        $('#tag_content .tag4').show();
        $('#tag .step3').css('borderBottom', 'none');
        $('#tag .step4').css('borderBottom', '4px solid #900');
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
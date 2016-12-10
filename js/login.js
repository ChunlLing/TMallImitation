// JavaScript Document

//alert($('#login_frame .tip_picture'));



$(function () {
    
    // 点击切换登录方式
    $('#login_frame .tip_picture').click(function () {
        if ($('#login_frame .login_pw').css('display') == 'block') {
            $('#login_frame .login_pw').hide();
            $('#login_frame .login_code').show();
        } else if ($('#login_frame .login_code').css('display') == 'block') {
            $('#login_frame .login_code').hide();
            $('#login_frame .login_pw').show();
        }
    });
    
    // 点击清除用户名文本输入框的内容
    $('#user_clean').click(function () {
        $('#login_user').value('');
    });
    
    // 点击启动安全键盘
    $('#pw_keybroad').click(function () {
        alert('此处并没有做弹出键盘的效果，请使用实体键盘输入:)');
    });
    
    // 点击登录按钮
    $('#bt_submit').click(function () {
        if ($('#login_user').value() != '' && $('#login_password').value() != '') {
            $('#login_frame .error_info').hide();
            alert('点击登录按钮验证是否有信息输入，不实现页面跳转');
        } else {
            $('#login_frame .error_info').show();
        }
    });
      

});


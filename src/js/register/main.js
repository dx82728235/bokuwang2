function Main(container) {
    this.container = container;
    this.init();
}

Main.template = `
                    <div class="content ma w1200 ht-600">
                        <div class="content-top mt-25 ml-140">
                            <p>
                                <b class='fs-16'>用户注册</b>
                            </p>
                            <div class="ht-30 pr ta-ct lh-2p2">
                                <div class="wd-585 reg-bar active step-1 ht-30">
                                    <p>1.填写注册信息</p>
                                </div>
                            </div>
                        </div>
                        <div class="content-bottom">
                            <form action="login.html" class="wd-720 ma lh-35">
                                <div class="mt-20">
                                    <p class="wd-90">&nbsp;</p>
                                </div>
                                <div>
                                    <p class="wd-90 ta-rt fl">用户名：</p><input type="text" class="uname wd-266 lh-24 ma-0406 fl" name='uname'><span class="cl-rd fl dn" id='s1'><p class="lh-16 ma-10 bb-rd cl-f bk-rd ht-16 wd-16 ta-ct fl">!</p>请输入正确的用户名</span>
                                </div>
                                <div class="mt-20 fl">
                                    <p class="wd-90 ta-rt fl">密码：</p><input type="text" class="upwd wd-266 lh-24 ma-0406 fl">
                                    <span class="cl-rd fl dn" id='s2'><p class="lh-16 ma-10 bb-rd cl-f bk-rd ht-16 wd-16 ta-ct fl">!</p>请输入正确的密码</span>
                                </div>
                                
                                <div class="mt-20 fl">
                                    <p class="wd-90 ta-rt fl id='s3'">确认密码：</p><input type="text" class="qpwd wd-266 lh-24 ma-0406 fl"><span class="cl-rd fl dn" id='s3'><p class="lh-16 ma-10 bb-rd cl-f bk-rd ht-16 wd-16 ta-ct fl">!</p>密码不一致</span>
                                </div>
                                <div class='fl'>
                                     <input type="button" value="注册" class="ml-23 reg-btn mt-35 wd-330 fl">
                                </div>
                                <div class="wd-328 ma">
                                    <p class="ta-rt wd-330 cl-bl">已有账号 <a href="login.html" class="cl-bl">前往登录</a></p>
                                </div>
                                <div>
                                    <input type="checkbox" value="我已阅读并同意" id='argee'>我已阅读并同意
                                    <a class="cl-bl" data-type="one" href="javascript:;">《博库网用户注册协议》</a><a class="cl-bl" data-type="two" href="javascript:;">《博库网隐私政策》</a>
                                </div>
                            </form>
                        </div>
                    </div>
                `;

Main.prototype = {
    init: function () {
        this.createDom();
        this.validate();
    },
    createDom: function () {
        this.el = $('<div></div>');
        this.el.append(Main.template);
        this.container.append(this.el);
    },
    validate: function () {
        //验证功能
        this.el.find('.reg-btn').on('click',function () {
            var isCheck = $('#argee').prop('checked');
            if (flagName && flagPwd && flagQpwd && isCheck) {
                var uname = this.el.find('.uname').val();
                var upwd = this.el.find('.upwd').val();

                $.cookie('username',uname,{expires: 7 })
                $.cookie('userpwd',upwd,{expires: 7 })

                if(confirm('注册已成功！是否登录')){
                    location.href = 'login.html';
                }
            } else {
                alert('操作有误！')
            }
        }.bind(this))

        //失去焦点做验证
        //用户名
        var flagName = null;
        this.el.find('.uname').blur(function () {
            var str = this.el.find('.uname').val();
            if (this.checkName(str)) {
                $("#s1").css({display:"none"});
                flagName = true;
            } else {
                $("#s1").css({display:"block"});
                flagName = false;
            }
        }.bind(this))

        //密码
        var flagPwd = null;
        this.el.find('.upwd').blur(function () {
            var str = this.el.find('.upwd').val();
            if (this.checkPwd(str)) {
                $("#s2").css({display:"none"});
                flagPwd = true;
            } else {
                $("#s2").css({display:"block"});
                flagPwd = false;
            }
        }.bind(this))

        //确认密码
        var flagQpwd = null;
        this.el.find('.qpwd').blur(function () {
            var str = this.el.find('.qpwd').val();
            if (this.checkQPwd(str, this.el.find('.upwd').val())) {
                $("#s3").css({display:"none"});
                flagQpwd = true;
            } else {
                $("#s3").css({display:"block"});
                flagQpwd = false;
            }
        }.bind(this))
    },
    checkName: function (str) {
        var reg = /^\w{3,}$/;
        if (reg.test(str)) {
            return true;
        } else {
            return false;
        }
    },
    checkPwd: function (str) {
        var reg = /^\w.{3,}$/;
        if (reg.test(str)) {
            return true;
        } else {
            return false;
        }
    },
    checkQPwd: function (str1, str2) {
        return str1 == str2;
    }
}
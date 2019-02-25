function Main(container){
    this.container = container;
    this.init();
}

Main.template = `
                <div class="banner">
                    <div class="content ma w1200">
                        <div class="form-info fr">
                            <form action="index.html">
                                <div class="form-top bb-1-e8">
                                    <p class="cl-bl fs-16">博库用户登录</p>
                                </div>
                                <div class="form-content mt-35">
                                    <div class="ht-160">
                                        <div class="bb-rd-4 user-name bb-1-dd ht-38 wd-380">
                                            <p class="login-user ta-ct fl iconfont">&#xe68a;</p><input type="text" class="fl bd-no ht-35 wd-250 uname">
                                        </div>
                                        <div class="bb-rd-4 user-name bb-1-dd ht-38 wd-380 mt-35">
                                            <p class="login-user ta-ct fl iconfont">&#xe600;</p><input type="text" class="fl bd-no ht-35 wd-250 upwd">
                                        </div>
                                    </div>
                                    <input type="button" value="登录" class="login-btn fs-16">
                                </div>
                                <div class="login-reg lh-40 ta-ct mt-90"><a href="register.html" class="cl-bl">马上注册新用户</a></div>
                            </form>
                        </div>
                    </div>
                </div>
                `;

Main.prototype = {
    init: function () {
        this.createDom();
        this.getCookie();
    },
    createDom: function () {
        this.el = $('<div></div>');
        this.el.append(Main.template);
        this.container.append(this.el);
    },
    getCookie : function(){
        //获取cookie中的用户名与密码
        var cUname = $.cookie('username');
        var cUpwd = $.cookie('userpwd');
        var flagName = null;
        var flagPwd = null;
        //失焦后判断用户名或密码是否正确 不正确提示 正确跳转到主页
        this.el.find('.uname').on('blur',function(){
            var uname = $(this).val();
            if(cUname == uname){
                flagName = true;
            }
        })
        this.el.find('.upwd').on('blur',function(){
            var upwd = $(this).val();
            if(cUpwd == upwd){
                flagPwd = true;
            }
        })
        this.el.find('.login-btn').on('click',function(){
            if( flagName && flagPwd){
                alert('登录成功！点击确定跳转到主页');
                this.hrefUrl();
            }else{
                alert('用户名或密码错误！')
            }
        }.bind(this))
        
    },
    hrefUrl : function(){
        setTimeout(function(){
            location.href = 'index.html';
        },2000)
    }
}
function Header(container){
    this.container = container;
    this.init();
}
//顶部导航
Header.Template = `
                    <div class="header">
                        <div class="w1200 pr">
                            <div class="head-left">
                                <div class="userInfo">
                                    <a href="#" class="user-login f1">登录</a><span>|</span><a href="#" class="user-register f1">免费注册</a>
                                </div>
                                <div class="downapp">
                                    <span class="icon-phone iconfont">&#xe63e;</span>
                                    <div class="down-click f1">下载博库APP</div>
                                </div>
                            </div>
                            <div class="head-right">
                                <div class='myboku'>
                                    <a href="#" class="head-nav ht-30 f1">我的博库</a><span class="icon-nav iconfont">&#xe60b;</span>
                                </div>
                                <ul>
                                    <li><a href="#" class="f1"><span>|</span>收藏夹</a></li>
                                    <li><a href="#" class="f1"><span>|</span>店铺管理</a></li>
                                    <li><a href="#" class="f1"><span>|</span>联系客服</a></li>
                                </ul>
                            </div>
                            <ul class="acount pa bc-f">
                                <li>我的订单</li>
                                <li>我的优惠券</li>
                                <li>我的收藏</li>
                                <li>我的收入</li>
                                <li>官方消息</li>
                            </ul>
                        </div>
                    </div>
                `;

Header.prototype = {
    init : function(){
        this.createDom();
        this.mouseToggle();
        this.hrefUrl();
        this.bokuEvt();
    },
    createDom : function(){
        this.el = $('<div></div>');
        this.el.append(Header.Template);
        this.container.append(this.el);
    },
    mouseToggle : function(){
        this.el.find('.f1').on('mouseenter',function(){
            $(this).css({color:'#2db4ea'});
        });
        this.el.find('.f1').on('mouseleave',function(){
            $(this).css({color:''});
        });
    },
    hrefUrl : function(){
        this.login = new Hrefurl(this.container.find(".user-login"),'../html/login.html') ;
        this.register = new Hrefurl(this.container.find(".user-register"),'../html/register.html');    
    },
    bokuEvt : function(){
        this.el.find('.myboku').hover(function(){
            this.el.find('.myboku').css({background:'#fff',width:'70px'}).find('.icon-nav').css({display:"none"});
            this.el.find('.acount').css({display:'block'});
        }.bind(this),function(){
            this.el.find('.acount').css({display:'none'});
        }.bind(this))

        this.el.find('.acount').hover(function(){
            $(this).css({display:'block'});
        },function(){
            $(this).css({display:'none'});
            $('.myboku').css({background:'',width:''}).find('.icon-nav').css({display:"inline"});
        })
    }
}
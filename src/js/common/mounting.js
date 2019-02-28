function Mounting(container){
    this.container = container;
    this.init();
}

Mounting.template = `
                    <div class="fix">
                        <div class="w1200">
                            <div class="logo-box">
                                <a href="#"><img src="../../dest/img/index/logo.png" alt="logo"></a>
                            </div>
                            <div class="search">
                                <input type="text" placeholder="黄达鑫Jerome" class="search-box"><span class="fs-27 search-pic iconfont">&#xe62b;</span>
                                <p class="search-info">
                                    <ul class="lh-25 fs-12" id="search-books">
                                        <li><a href="#">茅台酒收藏</a><span>|</span></li>
                                        <li><a href="#" class="cl-9">夏摩山谷</a><span>|</span></li>
                                        <li><a href="#" class="cl-9">崔永元 有话说</a><span>|</span></li>
                                        <li><a href="#" class="cl-9">林清玄</a><span>|</span></li>
                                        <li><a href="#" class="cl-9">邓小平大决策</a></li>
                                    </ul>
                                </p>
                            </div>
                            <div class="shopcar-btn">
                                <a href="#">
                                    <span class="iconfont fs-18 cl-a9">&#xe64f;</span>
                                    <span>购物车</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    `;


Mounting.prototype = {
    init : function(){
        this.createDom(); //创建元素
        this.onScroll(); //页面滚动吸顶效果
    },
    createDom : function(){
        this.el = $("<div></div>");
        this.el.append(Mounting.template);  
        this.container.append(this.el); //将该模块添加到headcenter的位置上
    },
    changeSty : function(){  //当页面滚动到head以下时 通过添加class的方式 改变样式
        this.el.find('.fix').addClass('actived');
        this.el.find(".logo-box img").addClass('logoFix');
        this.el.find(".shopcar-btn").addClass('cartFix');
        this.el.find('#search-books').css({display:"none"});  
    },
    removeSty : function(){  //当页面滚动到head以上时 通过删除class的方式 改变样式
        this.el.find('.fix').removeClass('actived');
        this.el.find(".logo-box img").removeClass('logoFix');
        this.el.find(".shopcar-btn").removeClass('cartFix');
        this.el.find('#search-books').css({display:"flex"});
    },
    onScroll : function(){  //页面滚动事件
        var headHei = $("#head").height(); //获取head的高度
        var _this = this;
        $(document).scroll(function() {
            if($(this).scrollTop() > headHei){  //判断页面滚动高度是否超出head的高度 超过调用改变样式 没超出调用删除样式
                _this.changeSty();
            }else{
                _this.removeSty();
            }
        });
    }
}
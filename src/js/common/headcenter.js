function HeadCenter(container){
    this.container = container;
    this.init();
}

HeadCenter.template = `<div class="w1200">
                            <div class="head-center">
                                <div class="logo-box">
                                    <a href="#"><img src="../../dest/img/index/logo.png" alt="logo"></a>
                                </div>
                                <div class="search">
                                    <input type="text" placeholder="刘慈欣" class="search-box"><span class="fs-27 search-pic iconfont">&#xe62b;</span>
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
                            <div class="navs dis-fl">
                                <div class="navs-titile .fl"><a href="#" class="cl-f db"><span class="iconfont mr-10">&#xe606;</span>所有商品分类</a></div>
                                <div class="nav-list .fl">
                                    <ul class="dis-fl">
                                        <li>首页</li>
                                        <li>新品</li>
                                        <li>限时购</li>
                                        <li class='list-page'>排行榜</li>
                                        <span>|</span>
                                        <li>图书馆</li>
                                        <li>文创馆</li>
                                        <li>生活美学馆</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `;

HeadCenter.prototype = {
    init : function(){
        this.createDom();
        this.hrefUrl();
        this.handleHover();
        $('#search-books li:first').find('a').css({color:'red'});
    },
    createDom : function(){
        this.el = $("<div></div>");
        this.el.append(HeadCenter.template);
        this.container.append(this.el);
    },
    handleHover : function(){
        this.container.find('.shopcar-btn').hover(function(){
            $(this).css({backgroundColor : 'rgba(0,0,0,0.1)'})
        },function(){
            $(this).css({backgroundColor : ''})
        })
        this.container.find('.navs li').hover(function(){
            $(this).addClass('cl-bl');
        },function(){
            $(this).removeClass('cl-bl');
        })
    },
    hrefUrl : function(){
        this.logo = new Hrefurl(this.container.find(".logo-box"),'../html/index.html');
        this.href = new Hrefurl(this.container.find(".shopcar-btn"),'../html/cart.html');    
        this.page = new Hrefurl(this.container.find(".list-page"),'../html/list.html');    
    }
}
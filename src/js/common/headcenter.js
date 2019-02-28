function HeadCenter(container){
    this.container = container;
    this.init();
}

HeadCenter.template = `<div class="w1200">
                            <div class="head-center">
                                
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
        //logo  搜索  购物车 吸顶效果
        this.mounting = new Mounting(this.el.find('.head-center'));
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
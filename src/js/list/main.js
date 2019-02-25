function Main(container){
    this.container = container;
    this.init();
}

Main.template = `
                <div class="rank-box w1200 ma">
                    <div class="fr mb-50">
                        <div class="rank-banner mt-10">
                            <img src="../../dest/img/list/20170726111617742.jpg" alt="">
                        </div>
                        <div class="rank-filter mt-10">
                            <div class="fliter-box">
                                <ul class="dis-fl pd-16">
                                    <li><a href="##" class="active db bc-f">图书总榜</a></li>
                                    <li><a href="##" class="bc-f db">童书</a></li>
                                    <li><a href="##" class="bc-f db">文学</a></li>
                                    <li><a href="##" class="bc-f db">经管励志</a></li>
                                    <li><a href="##" class="bc-f db">人文社科</a></li>
                                    <li><a href="##" class="bc-f db">生活</a></li>
                                    <li><a href="##" class="bc-f db">科技</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-10 ht-57">
                            <div class="PageCode fr">
                                <div class="row pagination fr">
                                    <div class="span2 fl mr-10 mt-4">共100 条记录 1/5 页</div>
                                    <div class="fl">
                                        <div class="fl">
                                            <ul>
                                                <li class="fl"><span class="disabled">« 上一页</span></li>
                                                <li class="fl"><span class="current">1</span><a href="##" class="span">2</a><a
                                                        href="##" class="span">3</a><a href="##" class="span">4</a><a href="##"
                                                        class="span">5</a></li>
                                                <li class="fl"><a href="##" class="next">下一页 »</a></li>
                                                <li class="cb"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list-box wd-980">
                        </div>
                        <div class="PageCode fr">
                                <div class="row pagination fr">
                                    <div class="span2 fl mr-10 mt-4">共100 条记录 1/5 页</div>
                                    <div class="fl">
                                        <div class="fl">
                                            <ul>
                                                <li class="fl"><span class="disabled">« 上一页</span></li>
                                                <li class="fl"><span class="current">1</span><a href="/#" class="span">2</a><a
                                                        href="#" class="span">3</a><a href="#" class="span">4</a><a href="#"
                                                        class="span">5</a></li>
                                                <li class="fl"><a href="#" class="next">下一页 »</a></li>
                                                <li class="cb"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
    
Main.prototype = {
    init : function(){
        this.createDom();
        this.getJson();
    },
    createDom : function(){
        this.el = $('<div></div>');
        this.el.append(Main.template);
        this.container.append(this.el);
    },
    getJson : function(){
        var deff = $.ajax({
            type:'get',
            url:'../json/goodcont.json'
        })
        deff.done(function(msg){
            var goodCon = '';
            var index = 0;
            for( var attr in msg ){
                index ++;
                goodCon += `
                            <div class="good-box bd-1-e8 pd-1900 wd-485 ht-242 pr ma-2 fl">
                                <span class="good-count">${index}</span>
                                <div class="good-pic fl br-1-e8">
                                    <img src="${msg[attr].bookpic}" alt="" class="ma db">
                                </div>
                                <div class="good-cont fl ml-23">
                                    <div class="book-name ht-42">
                                        <p>${msg[attr].name}</p>
                                    </div>
                                    <div class="book-info">
                                        <p class="book-author ht-42 cl-9">
                                            <em>${msg[attr].author}</em>
                                        </p>
                                        <p class="money fs-18 cl-rd">￥${msg[attr].money}
                                            <del class="fs-14 cl-9">${msg[attr].nomoney}</del>
                                        </p>
                                        <p class="sum mt-15 cl-9 fs-14">
                                            销量:${msg[attr].sum}
                                        </p>
                                    </div>
                                    <div class="mt-15 ht-38 lh-35 ">
                                        <a href="##" class="mr-20 bc-bl db fl wd-113 cl-f ta-ct">
                                            <span class="iconfont">&#xe64f; </span>加入购物车
                                        </a>
                                        <a href="##" class="fl db wd-70 ta-ct bd-1-c">
                                            <span class="iconfont mr-5 pr tp-1">&#xe6cc; </span>收藏
                                        </a>
                                    </div>
                                </div>
                            </div>
                          `;
            }
            this.el.find(".list-box").html(goodCon);
        }.bind(this))
    }
}
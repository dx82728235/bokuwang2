function FlexNav(container){
    this.container = container;
    this.init();
}

FlexNav.template = `
                    <div class="mt-40 flexsd ht-340 w1200 pr bd-1-e8 ov-hd">
                        <p class="slide-top lh-40 bc-f3 pd-0020 fs-18">大家都在看</p>
                        <div class="slide-cont ht-300 wd-1000p pa bc-f"></div>
                        <div class='flex-direction-nav'>
                            <div class=""><a href="##" class='left-btn'><</a></div>
                            <div><a href="##" class='right-btn' style='right:0;'>></a></div>
                        </div>
                    </div>
                `;

FlexNav.prototype = {
    init : function(){
        this.createDom();
        this.getJson();
        this.silde();
        this.btnOpa();
    },
    createDom : function(){
        this.el = $("<div></div>");
        this.el.append(FlexNav.template);
        this.container.append(this.el);
    },
    getJson : function(){
        var deff = $.ajax({
            type : 'get',
            url : '../json/goodcont.json'
        })
        deff.done(function(msg){
            var strCon = '';
            var i = 0;
            for( var attr in msg ){
                if( i > 8){
                    break;
                }
                strCon += `<div class="fl">
                <div class="bd-1-f5 bd-wd-l0 pd-5 ta-ct wd-200">
                    <div class="pd-10 ov-hd">
                        <a class="db wd-200 ht-200 scale" style="background: url(${msg[attr].bookpic}) no-repeat center center; background-size: contain;"></a>
                    </div>
                    <div class="context pd-05100010">
                        <a class="db cl-6 ht-36 lh-18 ov-hd mt-5" href="##">${msg[attr].name}</a>
                        <div>
                            <span class="fs-16 cl-rd">¥${msg[attr].money}</span>
                            <span class="cl-9">|</span>
                            <del class="fs-12 cl-9">¥${msg[attr].nomoney}</del>
                        </div>
                    </div>
                </div>
            </div>`;
            i ++;

            }
            this.el.find('.slide-cont').html(strCon);
        }.bind(this))
    },
    silde : function(){
        this.el.find('.left-btn').on('click',function(){
            this.el.find('.slide-cont').animate({left:"0"},2000);
        }.bind(this))
        this.el.find('.right-btn').on('click',function(){
            this.el.find('.slide-cont').animate({left:"-600"},2000);
        console.log($(".slide-cont").offset().left)
        }.bind(this))
    },
    btnOpa : function(){
        this.el.find('.flex-direction-nav').on("mouseenter","a",function(){
            $(this).css({opacity:0.8});
        })
        this.el.find('.flex-direction-nav').on("mouseleave","a",function(){
            $(this).css({opacity:""});
        })
    }
}
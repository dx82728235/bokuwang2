function FootCenter(container){
    this.container = container;
    this.init();
}

FootCenter.template = `
                        <div class="foot-center w1200 ma pd-2000">
                            <ul class="dis-fl">
                                <li class="db fs-16 lh-40 wd-20p foot-info">
                                </li>
                                <li class="db fs-16 lh-40 wd-20p foot-info">
                                </li>
                                <li class="db fs-16 lh-40 wd-20p foot-info">
                                </li>
                                <li class="db fs-16 lh-40 wd-20p foot-info">
                                </li>
                                <li class="db fs-16 lh-40 wd-20p foot-info">
                                </li>
                            </ul>
                        </div>
                    `;
        
FootCenter.prototype = {
    init : function(){
        this.createDom();
        this.getJson();
    },
    createDom : function(){
        this.el = $("<div></div>");
        this.el.append(FootCenter.template);
        this.container.append(this.el);
    },
    getJson : function(){
        var deff = $.ajax({
            type : 'get',
            url : '../json/footct.json?id='+Math.random()
        })
        deff.done(function(msg){
            var strCon = '';
            var index = 0;
            for( var attr in msg){
                strCon = ``;
                for(var i = 0 ; i < msg[attr].info.length ; i ++){
                    strCon += `<div><a href="#" class="hover cl-6">${msg[attr].info[i]}</a></div>`;
                }
                this.el.find('.foot-info').eq(index).html(strCon)
                index ++;
            }
        }.bind(this))
    },
    handleMouseEnter : function(){
        this.el.find()
    }
}
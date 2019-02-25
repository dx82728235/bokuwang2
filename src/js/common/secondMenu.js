function SecondMenu(container){
    this.container = container;
    this.init();
}

SecondMenu.template = `
                        <div class="w1200">
                            <div class="menu mouseenter-box">
                            </div>
                        </div>
                    `;

SecondMenu.prototype = {
    init : function(){
        this.createDom();
        this.getJson();
        this.mouseTggle();
    },
    createDom : function(){
        this.el = $("<div></div>");
        this.el.append(SecondMenu.template);
        this.container.append(this.el);
    },
    mouseTggle : function(){

        this.el.on('mouseenter','.mouseenter',function(){
            $(this).css({backgroundColor : 'white'}).find('a').css({color:'#333'});
            $(this).parent().find('ul').css({display:"block"});
        })
        this.el.on('mouseleave','.mouseenter',function(){
            $(this).css({backgroundColor : ''}).find('a').css({color:'white'});
            $(this).parent().find('ul').css({display:"none"});
        });
    },
    getJson : function(){
        var deff = $.ajax({
            type: 'get',
            url: '../json/nav.json?id='+Math.random()
        })
        deff.done(function(msg){
            var title = '';
            var listFirst = '';
            for( var attr in msg){
                listFirst = ``;
                title +=`<div class="mouseenter"><a href="#" class="cl-f">${msg[attr].name}</a></div><ul><div class="navTop-title bb-1-e pb-5 "></div></ul>`;
                for( let i = 0; i < msg[attr].headNav.length; i++){
                    listFirst += `<a href="#" class="mr-10 mb-5 cl-f">${msg[attr].headNav[i]}</a>`;
                }
             // $(this)[0].el.find('.navTop-title').eq(0).html(listFirst);
            }
            this.el.find(".menu").html(title);
            
        }.bind(this))
    },
}
function Page(){
    this.head = $('#head');
    this.main = $('#main');
    this.foot = $('#foot');
    this.init();
}

Page.prototype = {
    init : function(){
        this.create();
        this.menu();
    },
    create : function(){
        this.header = new Header(this.head);
        this.headCenter = new HeadCenter(this.head);
        this.secondMenu = new SecondMenu(this.main);
        this.mains = new Main(this.main);
        this.footTop = new FootTop(this.foot);
        this.footCenter = new FootCenter(this.foot);
        this.footBottom = new FootBottom(this.foot);
    },
    menu : function(){
        this.main.find('.menu').css({display:'none'});
        this.head.find('.navs-titile').hover(function(){
            this.main.find('.menu').css({display:'block'});
        }.bind(this),function(){
            this.main.find('.menu').css({display:'none'});
        }.bind(this))

        
        this.main.find('.menu').hover(function(){
            $(this).css({display:'block'});
        },function(){
            $(this).css({display:'none'});
        })
    }
}

new Page();
function Page(){
    this.head = $('#head');
    this.banner = $('#banner');
    this.main = $('#main');
    this.foot = $('#foot');
    this.init();
}

Page.prototype = {
    init : function(){
        this.create();
    },
    create : function(){
        this.header = new Header(this.head);
        this.headCenter = new HeadCenter(this.head);
        this.secondMenu = new SecondMenu(this.banner);
        this.banner = new Banner(this.banner);
        this.flexnav = new FlexNav(this.main);
        this.footTop = new FootTop(this.foot);
        this.footCenter = new FootCenter(this.foot);
        this.footBottom = new FootBottom(this.foot);
    }
}

new Page();
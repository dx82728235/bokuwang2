function Page(){
    this.head = $('#head');
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
        this.menu = new SecondMenu(this.main);
        this.main = new Main(this.main);
        this.footTop = new FootTop(this.foot);
        this.footCenter = new FootCenter(this.foot);
        this.footBottom = new FootBottom(this.foot);
    }
}

new Page();
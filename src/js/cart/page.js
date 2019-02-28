function Page(){
    this.head = $('#head');
    this.main = $('#main');
    this.foot = $('#foot');
    this.init();
}

Page.prototype = {
    init : function(){
        this.create();
        this.createDom();
    },
    create : function(){
        this.header = new Header(this.head);

        this.main = new Main(this.main);
        this.footTop = new FootTop(this.foot);
        this.footCenter = new FootCenter(this.foot);
        this.footBottom = new FootBottom(this.foot);
    },
    createDom : function(){
        this.logo = $(`<div class='ma w1200 pd-3500'>
                          <div class="logo-box">
                             <a href="index.html"><img src="../../dest/img/index/logo.png" alt="logo"></a>
                          </div>
                        </div>
                       `)
        $('#head').append(this.logo);
    }
}

new Page();
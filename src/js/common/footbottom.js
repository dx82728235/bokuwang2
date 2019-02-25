function FootBottom(container){
    this.container = container;
    this.init();
}

FootBottom.template = `
                        <div class="foot-bottom">
                            <div class="footbt-info dis-fl cl-9 ta-ct ma wd-605 fl-itm">
                                <div class="mr-10">
                                    <img src="../../dest/img/index/jingcha.png" alt="">
                                </div>
                                <div class="mr-5">
                                    <img src="../../dest/img/index/huizhang.png" alt="">
                                </div>
                                <div class="pd-0010">
                                    <p class="wd-306">©Copyright 2005-2017 bookuu.com 版权所有</p>
                                    <p>增值电信业务经营许可证:浙B2-2011021</p>
                                    <p>出版物经营许可证新出发浙批字第300411号</p>
                                </div>
                                <div>
                                    <img src="../../dest/img/index/knetSealLogo.png" alt="">
                                </div>
                                <div class="ml-10">
                                    <img src="../../dest/img/index/cert.png" alt="">
                                </div>
                            </div>
                        </div>
                `;

FootBottom.prototype = {
    init : function(){
        this.createDom();
    },
    createDom : function(){
        this.el = $('<div></div>');
        this.el.append(FootBottom.template);
        this.container.append(this.el);
    }
}
function FootTop(container){
    this.container = container;
    this.init();
}

FootTop.template = `
                    <div class="foot-top ma">
                        <ul class="dis-fl">
                            <li class='dis-fl lh-25 wd-25p'><img src="../../dest/img/index/zheng.png" class='mr-10' alt="">
                                <div class="list-Rt">
                                    <p class="fs-24">全场正品</p>
                                    <p>出版社直采·博库正品</p>
                                </div>
                                <div class="cb"></div>
                            </li>
                            <li class='dis-fl lh-25 wd-25p'><img src="../../dest/img/index/sheng.png" class='mr-10' alt="">
                                <div class="list-Rt">
                                    <p class="fs-24">全场满59包邮</p>
                                    <p>惊喜不断·让利多多</p>
                                </div>
                                <div class="cb"></div>
                            </li>
                            <li class='dis-fl lh-25 wd-25p'><img src="../../dest/img/index/huo.png" class='mr-10' alt="">
                                <div class="list-Rt">
                                    <p class="fs-24">门店自取</p>
                                    <p>就近取货·方式灵活</p>
                                </div>
                                <div class="cb"></div>
                            </li>
                            <li class='dis-fl lh-25 wd-25p'><img src="../../dest/img/index/hao.png" class='mr-10' alt="">
                                <div class="list-Rt ">
                                    <p class="fs-24">售后无忧</p>
                                    <p>服务体验·更加精彩</p>
                                </div>
                                <div class="cb"></div>
                            </li>
                        </ul>
                    </div>
                `;

FootTop.prototype = {
    init : function(){
        this.createDom();
    },
    createDom : function(){
        this.el = $('<div></div>');
        this.el.append(FootTop.template);
        this.container.append(this.el);
    }
}
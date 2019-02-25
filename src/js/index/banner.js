function Banner(container) {
    this.container = container;
    this.init();
}

Banner.template = `
                    <div class="swiper-container" id="banner-box">
                        <ul class="swiper-wrapper">
                            <div class="swiper-slide"></div>
                        </ul>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination swiper-btn"></div>

                        <!-- 如果需要导航按钮 -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>

                    </div>
                `;

Banner.prototype = {
    init: function () {
        this.createDom();
        this.getJson();
    },
    createDom: function () {
        this.el = $('<div></div>');
        this.el.append(Banner.template);
        this.container.append(this.el);
    },
    getJson: function () {
        var deff = $.ajax({
            type: 'get',
            url: '../json/autoPlay.json?id=' + Math.random()
        })
        deff.done(function (msg) {
            var bannerPic = '';
            for (var i = 0; i < msg.autoPic.length; i++) {
                bannerPic += `<li class='pic swiper-slide'><img src='../../dest/img/index/${msg.autoPic[i]}'></li>`
            }
            this.el.find('ul').html(bannerPic);
        }.bind(this))
        this.autoPlay();
    },
    autoPlay: function () {
        new Swiper('#banner-box', {
            loop: true, // 循环模式选项
            //自动轮播
            autoplay: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            },

            // 如果需要分页器
            pagination: {
                el: '.swiper-btn',
                clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true //修改swiper的父元素时，自动初始化swiper
        })
        $(".swiper-pagination-bullet").hover(function(){
            $(this).css({bankgroundColor:'#2ab4e8',});
        },function(){

        })
    }
}
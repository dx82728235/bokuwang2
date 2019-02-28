function SecondMenu(container) {
    this.container = container;
    this.init();
}

SecondMenu.template = `
                        <div class="w1200 pr">
                            <div class="menu mouseenter-box"></div>
                            <ul class="nav-info">
                            <div class="navTop-title bb-1-e pb-5"></div>
                            <div class="navTop-cont">
                                <li class="dis-fl"><h5 class="wd-110">1111</h5><div class='navTop-info'><a href='##'>111</a><a href='##'>111</a><a href='##'>111</a><a href='##'>111</a><a href='##'>111</a></li>
                            </div>
                                
                            </ul>
                        </div>
                    `;

SecondMenu.prototype = {
    init: function () {
        this.createDom();
        this.getJson();
        this.mouseTggle();
    },
    createDom: function () {
        this.el = $("<div></div>");
        this.el.append(SecondMenu.template);
        this.container.append(this.el);
    },
    mouseTggle: function () {

        this.el.on('mouseenter', '.mouseenter', function () {
            $(this).css({
                backgroundColor: 'white'
            }).find('a').css({
                color: '#333'
            });
            $(this).parent().parent().find('.nav-info').css({
                display: "block"
            });
        })
        this.el.on('mouseleave', '.mouseenter', function () {
            $(this).css({
                backgroundColor: ''
            }).find('a').css({
                color: 'white'
            });
            $(this).parent().parent().find('.nav-info').css({
                display: "none"
            });
        });
    },
    getJson: function () {
        var deff = $.ajax({
            type: 'get',
            url: '../json/nav.json?id=' + Math.random()
        })
        deff.done(function (msg) {
            var title = '';
            var listFirst = '';
            var flag = true;
            for (var attr in msg) {
                listFirst = ``;
                title += `<div class="mouseenter" cname=${attr}><a href="#" class="cl-f">${msg[attr].name}</a></div>`;
            }
            this.el.find(".menu").html(title);
            this.getInfo(msg);
        }.bind(this))
    },
    getInfo: function (msg) {
        this.el.find(".menu ").on("mouseenter", ".mouseenter", function () {
            var cname = $(this).attr("cname");
            var list = msg[cname];
            var listCon = "";
            for (var i = 0 ; i < list.headNav.length ; i ++) {
                listCon += `<a href="#" class="mr-10 mb-5 cl-f lala">${list.headNav[i]}</a>`;
            }
            $(".navTop-title").html(listCon)
            for( var attr in msg ){
                if ( msg[attr] == list ){
                    var pro = list.conNav1;

                    for( var i = 0; i < pro.length; i ++ ){
                        console.log( pro[i]) 
                    }
                }
            }

        })
    }
}
function Main(container){
    this.container = container;
    this.init();
}

Main.template = `
                 <div class="w1200 ma">
                    <p class="ht-50 lh-50">
                        <span class="fl fs-18">我的购物车</span>
                        <span class="fr cl-9">温馨提示:1.购物车中的商品无法保留库存，请您尽快完成购买。2.商品的价格和库存将以订单提交时为准哦。</span>
                    </p>
                    <table width="100%">
                        <thead class="thead-1">
                            <tr>
                                <td class="pr fs-15" width="40" align="center">
                                    <input type="checkbox" class="cp pafull-box btn-box">
                                    <span class="iconfont cl-c">&#xe629;</span>
                                </td>
                                <td width="40">全选</td>
                                <td width="450">商品信息</td>
                                <td width="160" align="center">单价</td>
                                <td width="120" align="center">数量</td>
                                <td width="200" align="center">金额(元)</td>
                                <td>操作</td>
                            </tr>
                        </thead>
                    </table>
                    <table width="100%">
                        <tbody class="lh-24 bb-1-e8">

                        </tbody>
                    </table>
                    <table class="mt-10" width="100%">
                        <tfoot>
                            <tr>
                                <td class="pr fs-15" width="40" align="center">
                                    <input type="checkbox" class="cp op-0 pafull-box">
                                    <span class="iconfont cl-c">&#xe629;</span>
                                </td>
                                <td>全选</td>
                                <td>
                                    <div class="pd-0030 cl-9 fl">已选<span class="pd-0010 amounts-box">0</span>件</div>
                                    <span class="cp  fs-16 button-delete fl">删除选中商品</span>
                                </td>
                                <td class="lh-30 pr-10" colspan="4" width="550" align="right">
                                    <p class="pd-0010">商品合计: 
                                        <label class="cl-rd">¥
                                            <span class="fs-22  money-box">0.00</span>
                                        </label>
                                    </p>
                                </td>
                                <td align="center">
                                    <a class="fs-24 cl-f db bc-dg" href="##" id="tobuy">去结算</a>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            `;

Main.prototype = {
    init : function(){
        this.createDom();
        this.getCart();
    },
    createDom : function(){
        this.el = $('<div></div>');
        this.el.append(Main.template);
        this.container.append(this.el);
    },
    getCart : function(){
        var arr = getCookie('shoplist');
        var strCon = '';
        for( var i = 0 ; i < arr.length ; i ++ ){
            var shopinfo = arr[i];
            strCon += `<tr class="lh-50 ht-50 goods-box">
            <td colspan="8">
                <div class="bd-1-e8 bd-wd-1101 ht-112">
                    <ul class="pr wd-1200 pd-0500">
                        <li class="pr ta-ct wd-80 ht-80 fl fs-15">
                            <input type="checkbox" class="btn-box cp ck">
                            <span class="iconfont cl-c">&#xe629;</span> 
                        </li>
                        <li class="wd-450 ht-100p fl">
                            <div class="fl wd-100p pr">
                                <a class="db ov-hd one-one bgimg ht-100p" href="##" style="background-image: url(${shopinfo.bookpic});"></a>
                            </div>
                            <div class="fr wd-300 ">
                                <p class="ht-60 lh-20 ov-hd mt-8">${shopinfo.name}</p>
                            </div>
                        </li>
                        <li class="ta-ct wd-160 fl lh-30">
                            <del class="cl-9 mt-10">¥${shopinfo.nomoney}</del>
                            <p class="fs-16">¥<span class="money">${shopinfo.money}</span></p>
                        </li>
                        <li class="ta-ct wd-120 fl">
                            <div class="count-box mt-35" data-id=${shopinfo.id} >
                                <div class="updateCount count-sub fl cl-c" data-nummber='1'>+</div>
                                <input type="text" class="shop-count" value="${shopinfo.count}">
                                <div class="updateCount count-add fr" data-nummber='-1'>-</div>
                            </div>
                        </li>
                        <li class="fs-16  cl-rd ta-ct wd-200 fl mt-35">¥<span class='sum'>${shopinfo.money * shopinfo.count}</span></li>
                        <li class="fs-16 wd-120 fl">
                            <p class="cl-bl cp lh-106 del-btn" >删除</p>
                        </li>
                    </ul>
                </div>
            </td>
        </tr>`;
        }
        this.el.find('tbody').html(strCon);
        //全选操作
        var _this = this;
        this.el.find('.pafull-box').on('click',function(){
            $('.ck').prop('checked',$(this).prop('checked'));
            _this.jieSuan( $('.ck:checked'));
            _this.btnColor();
        })

        //为所有的复选框添加一个单击事件
        this.el.find('.ck').on("click",function(){
            this.jieSuan(this.el.find('.ck:checked'));
            this.btnColor();
        }.bind(this))
        this.delBtn(arr);
        
    },
    jieSuan : function(cked){
        var count = 0;
        var money = 0;

        //结算的是被选中的复选框
        cked.each(function(){
            count += Number( $(this).parent().parent().find( ".shop-count" ).val() );
            money += parseInt( $(this).parent().parent().find(".sum").html() );
        })
        this.el.find('.amounts-box').html(count);
        this.el.find('.money-box').html(money);
    },
    btnColor : function(){   //判断是否有选中的商品 有结算变红 没有变灰

        if(parseInt($(".money-box").html())){
            $('#tobuy').css({background:"#de1616"});
        }else{
            $('#tobuy').css({background:""});
        }
    },
    delBtn : function(arr){

        $('tbody').on('click', '.del-btn' , function(){
            console.log( $(this).parent().parent().find('.count-box').data('id') )

            if( confirm("确定要删除吗？") ){
                //确定要删除的商品id
                var pid = $(this).parent().parent().find('.count-box').data('id') ;
                for( var i = 0 ; i < arr.length ; i ++ ){
                    if( pid == arr[i].id ){
                        arr.splice( i , 1 );
                        setCookie( "shoplist" , JSON.stringify( arr ) );
                        $(this).parent().parent().parent().parent().parent().remove();
                    }
                }
            }
        })
    }
}
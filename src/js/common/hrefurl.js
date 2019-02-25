function Hrefurl(container,url){
    this.container = container;
    this.url = url;
    this.init();
}

Hrefurl.prototype = {
    init : function(){
        this.locationHref();
    },
    locationHref : function(){
        this.container.on('click',function(){
            location.href = this.url;
        }.bind(this))
    }
}
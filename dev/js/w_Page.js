var Page = {
  lastScrollTop : 0,

  currScrollTop : function(){
    return $(document).scrollTop();
  },

  scrollData : function() {
    var currScroll = this.currScrollTop();

    if( (this.lastScrollTop - currScroll) >= 0 ) {
      this.lastScrollTop = currScroll;
      return ["up",currScroll];
    }else {
      this.lastScrollTop = currScroll;
      return ["down",currScroll];
    }
  },

  intiOnLoad : function(){

  }
};

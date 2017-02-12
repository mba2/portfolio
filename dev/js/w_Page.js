var Page = {
  currScrollTop : function(){
    return $(document).scrollTop();
  },
  lastScrollTop : 0,
  scrollData : function() {
    // console.log("lastScrollTop : " + this.lastScrollTop );
    // console.log("difference: " +  (this.lastScrollTop - this.currScrollTop())  );
    // console.log("current scroll top: " + $(document).scrollTop() );
    var currScroll = this.currScrollTop();
    // console.log("line 11: " + currScroll);

    if( (this.lastScrollTop - currScroll) >= 0 ) {
      // console.log("up");
      this.lastScrollTop = this.currScrollTop();
      // console.log("line 16: " + currScroll);
      return ["up",currScroll];
    }else {
      // console.log("down");
      this.lastScrollTop = this.currScrollTop();
      // console.log("line 21: " + currScroll);
      return ["down",currScroll];
    }
    // return "up";
  },
  init : function(){

  }
};

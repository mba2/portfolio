var Page = {
  lastScrollTop : 0,
  self : function(){
    return this;
  },
  getScrollTop : function(){
    return $(document).scrollTop();
  },
  scrollData : function() {
    var currScroll = this.getScrollTop();

    if( (this.lastScrollTop - currScroll) >= 0 ) {
      this.lastScrollTop = currScroll;
      return ["up",currScroll];
    }else {
      this.lastScrollTop = currScroll;
      return ["down",currScroll];
    }
  },
  DOM : {
    "backToTopBtn" : document.querySelector("#js_back-to-top")  // DOM SELECTION OF THE BACK TO TOP BTN
  },
  goToTop : function() {
    var _this = this,
                                            // Reference to Page Object
    setClickAction = function(){
      // CLICK EVENT
      _this.DOM.backToTopBtn.addEventListener("click", function(e){
        $("html,body").animate({
          scrollTop : 0
        },1000);}, false);
    }();
    btnVisibility = function(){
         var startPoint = 77,            // FROM THIS POINT, THE BACK TO TOP BTN MUST BE VISIBLE
             btnIsVisibile = false;      // VARIABLE TO TRACK THE BUTTON'S VISIBILITY

      $(window).scroll(function(){                   // IN EACH SCROLL ON THE PAGE
        if(_this.getScrollTop() > startPoint && !btnIsVisibile) {     // IF THE AMOUT OF SCROLL IS GREATER THAN THE START POINT LIMIT  (startPoint VARIABLE)
          console.log("Show the button!");
          _this.DOM.backToTopBtn.classList.toggle("is-visible");
          btnIsVisibile = true;
          // return true;
        }else if( _this.getScrollTop() < startPoint && btnIsVisibile ){
          console.log("Hide the button!");
          _this.DOM.backToTopBtn.classList.toggle("is-visible");
          btnIsVisibile = false;
        }
      });
    }();
  },
  initOnLoad : function(){
    this.goToTop();
    // this.goToTop.btnVisibility();
  }
};

Page.initOnLoad();

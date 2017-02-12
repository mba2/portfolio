

$(document).ready(function(){

  var header = Header.init();

});

$(document).on("scroll", function(){
  Header.headerBehavior();
  // console.log(scrollTop);
  // console.log( $("body").scrollTop());
});

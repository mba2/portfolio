$(document).ready(function(){
  Header.menu.toggleBehavior();
  // var header = Header.init();

});

$(document).on("scroll", function(){
  Header.headerBehavior();
});

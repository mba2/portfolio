$(document).ready(function(){
  Header.menu.toggleBehavior();
  Tabs.init();
  // var header = Header.init();

});

$(document).on("scroll", function(){
  Header.headerBehavior();
});

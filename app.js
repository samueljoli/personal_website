$(document).ready(function(){
  
  $("div.one").mousemove(function(event){
    var x = event.pageX
    var y = event.pageY
    var image = this.children[0].children[0].alt
    debugger;
    $("#p-one").css("visibility", "visible");
    $(".containment").css({"background-image":"url"+"("+image+")"});
    $(".containment").css("background-position-x", x);
    $(".containment").css("background-position-y", y);
  })
  .mouseleave(function() {
      $("#p-one").css("visibility", "hidden");
      $(".containment").css({"background-image":"url(none)"})
      $(".containment").css("background-position-x", 0);
      $(".containment").css("background-position-y", 0);
  });

  $("div.two").mousemove(function(event){
    var x = event.pageX
    var y = event.pageY
    var image = this.children[0].children[0].alt
    $("#p-two").css("visibility", "visible");
    $(".containment").css({"background-image":"url"+"("+image+")"});
    $(".containment").css("background-position-x", x);
    $(".containment").css("background-position-y", y);
  })
  .mouseleave(function() {
      $("#p-two").css("visibility", "hidden");
      $(".containment").css({"background-image":"url(none)"})
      $(".containment").css("background-position-x", 0);
      $(".containment").css("background-position-y", 0);
  });

  $("div.three").mousemove(function(event){
    var x = event.pageX
    var y = event.pageY
    var image = this.children[0].children[0].alt
    $("#p-three").css("visibility", "visible");
    $(".containment").css({"background-image":"url"+"("+image+")"});
    $(".containment").css("background-position-x", x);
    $(".containment").css("background-position-y", y);
  })
  .mouseleave(function() {
      $("#p-three").css("visibility", "hidden");
      $(".containment").css({"background-image":"url(none)"})
      $(".containment").css("background-position-x", 0);
      $(".containment").css("background-position-y", 0);
  });

  $("div.four").mousemove(function(event){
    var x = event.pageX
    var y = event.pageY
    var image = this.children[0].children[0].alt
    $("#p-four").css("visibility", "visible");
    $(".containment").css({"background-image":"url"+"("+image+")"});
    $(".containment").css("background-position-x", x);
    $(".containment").css("background-position-y", y);
  })
  .mouseleave(function() {
      $("#p-four").css("visibility", "hidden");
      $(".containment").css({"background-image":"url(none)"})
      $(".containment").css("background-position-x", 0);
      $(".containment").css("background-position-y", 0);
  });

  $("div.five").mousemove(function(event){
    var x = event.pageX
    var y = event.pageY
    var image = this.children[0].children[0].alt
    $("#bio").css("visibility", "visible");
  })
  .mouseleave(function() {
      $("#bio").css("visibility", "hidden");
  });

  $("div.six").mousemove(function(event){
    var x = event.pageX
    var y = event.pageY
    var image = this.children[0].children[0].alt
    $("#p-six").css("visibility", "visible");
    $(".containment").css({"background-image":"url"+"("+image+")"});
    $(".containment").css("background-position-x", x);
    $(".containment").css("background-position-y", y);
  })
  .mouseleave(function() {
      $("#p-six").css("visibility", "hidden");
      $(".containment").css({"background-image":"url(none)"})
      $(".containment").css("background-position-x", 0);
      $(".containment").css("background-position-y", 0);
  });

});


// I CAN USE THE ALT ATTRIBUTE TO REFERENCE THE CORRESPONDING IMAGE


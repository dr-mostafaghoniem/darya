$(document).ready(function(){
    $('.carousel').carousel({
  interval: 6000
});
    //show color Option div when Click On the Gear
    
  $(".gear-check").click(function()
    {
    $(".color-option").fadeToggle();
  });
    // change Theme color on click
    var colorli= $(".color-option ul li")
    colorli
    .eq(0).css("background","#E41B17").end()
    .eq(1).css("background","#ff4dd3").end()
    .eq(2).css("background","#13e1ea").end()
    .eq(3).css("background","#b33693").end()
    .eq(4).css("background","#ff944d")
    colorli.click(function()
    {
       $("link[href*='theme']").attr("href",$(this).attr("data-value"))
        
    });   

});

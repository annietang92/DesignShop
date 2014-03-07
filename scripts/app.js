$(function(){
    $('#header_nav').data('size','big');

  $( "#pencil-1" ).click(function() {
    $("#slide-1").removeClass("hide");
    $("#slide-2").addClass("hide");
    $("#slide-3").addClass("hide");
    $("#slide-4").addClass("hide");
  });

  $( "#pencil-2" ).click(function() {
    $("#slide-1").addClass("hide");
    $("#slide-2").removeClass("hide");
    $("#slide-3").addClass("hide");
    $("#slide-4").addClass("hide");
  });

  $( "#pencil-3" ).click(function() {
    $("#slide-1").addClass("hide");
    $("#slide-2").addClass("hide");
    $("#slide-3").removeClass("hide");
    $("#slide-4").addClass("hide");
  });

  $( "#pencil-4" ).click(function() {
    $("#slide-1").addClass("hide");
    $("#slide-2").addClass("hide");
    $("#slide-3").addClass("hide");
    $("#slide-4").removeClass("hide");
  });

});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#header_nav').data('size') == 'big')
        {
            $('#header_nav').data('size','small');
            $('#header_nav').stop().animate({
                height:'40px'
            },300);
            $('#logo_text').removeClass('larger');
            $('#logo_text').addClass('ease');
            $('#logo_img').removeClass('larger-logo');
            $('#logo_img').addClass('ease');
            $('#logo_img').addClass('smaller-logo');
            $('#nav_text').css("padding-top","0");
            $('#nav_text').css("margin-top","-4px");
            $('#nav_text').addClass("ease");
        }
    }
    else
    {
        if($('#header_nav').data('size') == 'small')
        {
            $('#header_nav').data('size','big');
            $('#header_nav').stop().animate({
                height:'80px'
            },200);
            $('#logo_text').addClass('larger');
            $('#logo_img').removeClass('smaller-logo');
            $('#logo_img').addClass('larger-logo');
            $('#nav_text').css("padding-top","11px");
        }  
    }
    if($(window).scrollTop() > 150)
    {
        $('#chalkboard_content').stop().animate({opacity:'0.3'},50);
    }
    else
    {
        $('#chalkboard_content').stop().animate({opacity:'1.0'},50);
    }
});
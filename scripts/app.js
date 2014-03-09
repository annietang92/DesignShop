$(function(){


  setTimeout( function() {
    $( '#pencil-2' ).trigger( 'click' );
    }, 5000 );
  setTimeout( function() {
    $( '#pencil-3' ).trigger( 'click' );
    }, 10000 );
  setTimeout( function() {
    $( '#pencil-4' ).trigger( 'click' );
    }, 15000 );
  setTimeout( function() {
    $( '#pencil-1' ).trigger( 'click' );
    }, 20000 );

  setInterval( function() {
      setTimeout( function() {
        $( '#pencil-2' ).trigger( 'click' );
    }, 5000 );
      setTimeout( function() {
        $( '#pencil-3' ).trigger( 'click' );
    }, 10000 );
      setTimeout( function() {
        $( '#pencil-4' ).trigger( 'click' );
    }, 15000 );
      setTimeout( function() {
        $( '#pencil-1' ).trigger( 'click' );
    }, 20000 );
  }, 20000 );

  $('#header_nav').data('size','big');

  $(".pencil").mouseover(function() {
    $(".pencil").addClass("hovering");
  })
  $(".pencil").mouseout(function() {
    $(".pencil").removeClass("hovering");
  })

  $( "#pencil-1" ).click(function() {
    $("#slide-1").removeClass("hide");
    $("#slide-2").addClass("hide");
    $("#slide-3").addClass("hide");
    $("#slide-4").addClass("hide");
    $("#pencil-1").addClass("active");
    $("#pencil-2").removeClass("active");
    $("#pencil-3").removeClass("active");
    $("#pencil-4").removeClass("active");
  });

  $( "#pencil-2" ).click(function() {
    $("#slide-1").addClass("hide");
    $("#slide-2").removeClass("hide");
    $("#slide-3").addClass("hide");
    $("#slide-4").addClass("hide");
    $("#pencil-2").addClass("active");
    $("#pencil-1").removeClass("active");
    $("#pencil-3").removeClass("active");
    $("#pencil-4").removeClass("active");
  });

  $( "#pencil-3" ).click(function() {
    $("#slide-1").addClass("hide");
    $("#slide-2").addClass("hide");
    $("#slide-3").removeClass("hide");
    $("#slide-4").addClass("hide");
    $("#pencil-3").addClass("active");
    $("#pencil-2").removeClass("active");
    $("#pencil-1").removeClass("active");
    $("#pencil-4").removeClass("active");
  });

  $( "#pencil-4" ).click(function() {
    $("#slide-1").addClass("hide");
    $("#slide-2").addClass("hide");
    $("#slide-3").addClass("hide");
    $("#slide-4").removeClass("hide");
    $("#pencil-4").addClass("active");
    $("#pencil-2").removeClass("active");
    $("#pencil-3").removeClass("active");
    $("#pencil-1").removeClass("active");
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
        $('.chalkboard_content').stop().animate({opacity:'0.3'},50);
    }
    else
    {
        $('.chalkboard_content').stop().animate({opacity:'1.0'},50);
    }
});
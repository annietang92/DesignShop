$(function(){
    var t1;
    var t2;
    var t3;
    var t4;
    var interval;

    function TimeOutTrigger(){
        t1 = setTimeout( function() {
            $( '#pencil-2' ).trigger( 'click' );
        }, 10000 );
        t2 = setTimeout( function() {
            $( '#pencil-3' ).trigger( 'click' );
        }, 20000 );
        t3 = setTimeout( function() {
            $( '#pencil-4' ).trigger( 'click' );
        }, 30000 );
        t4 = setTimeout( function() {
            $( '#pencil-1' ).trigger( 'click' );
        }, 40000 );
    };

  function IntervalTrigger(){
        interval = setInterval( function() {
        TimeOutTrigger()
    }, 40000 );
  };

  function stopCount(){
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
    clearTimeout(t4);
    clearInterval(interval);
  }

  TimeOutTrigger();
  IntervalTrigger();

  if ($(window).width() < 1170) {
    $('#nav_text').addClass('hide');
  }

  $('#header_nav').data('size','big');

  $(".pencil").mouseover(function() {
    console.log('aksdf');
    $(".pencil").addClass("hovering");
    stopCount();
  })
  $(".pencil").mouseout(function() {
    $(".pencil").removeClass("hovering");
    TimeOutTrigger();
    IntervalTrigger();
  })

  $( ".faq_show" ).click(function() {
    $(".list-group-item").addClass("animation");
    if ($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).next().addClass("collapse");
        $(this).children(":last").removeClass("fa-chevron-up");
        $(this).children(":last").addClass("fa-chevron-down");
    } else{
        $(this).addClass("active");
        $(this).next().removeClass("collapse");
        $(this).children(":last").addClass("fa-chevron-up");
        $(this).children(":last").removeClass("fa-chevron-down");
    }
  });

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

  $(".nav_btn").click(function(){
        if ($('#nav_text').hasClass('hide')){
            $('#nav_text').removeClass('hide');
        }else{
            $('#nav_text').addClass('hide');
        }
  });



});

$(window).scroll(function(){
    if($(document).scrollTop() > 0 && $(window).width() > 1170)
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
    if($(window).scrollTop() > 150 && $(window).width() > 1170)
    {
        $('.chalkboard_content').stop().animate({opacity:'0.3'},50);
    }
    else
    {
        $('.chalkboard_content').stop().animate({opacity:'1.0'},50);
    }
});
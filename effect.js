$(window).on('load', function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$('document').ready(function(){
    var vw;
    $(window).resize(function(){ vw = $(window).width()/2; });

    $('#turn_on').click(function(){
        $('#bulb_yellow,#bulb_red,#bulb_blue,#bulb_green,#bulb_pink,#bulb_orange').addClass('bulb-glow-yellow bulb-glow-red bulb-glow-blue bulb-glow-green bulb-glow-pink bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){ $('#play').fadeIn('slow'); });
    });

    $('#play').click(function(){
        $('.song')[0].play();
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){ $('#bannar_coming').fadeIn('slow'); });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){ $('#balloons_flying').fadeIn('slow'); });
    });

    function loop(id) {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $(id).animate({left:randleft,bottom:randtop},10000,function(){ loop(id); });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        for(var i=1; i<=9; i++) {
            $('#b'+i).addClass('balloons-rotate-behaviour-one');
            loop('#b'+i);
        }
        $(this).fadeOut('slow').delay(5000).promise().done(function(){ $('#cake_fadein').fadeIn('slow'); });
    });

    // FUNGSI INI YANG TADI HILANG:
    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){ $('#light_candle').fadeIn('slow'); });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function(){ $('#wish_message').fadeIn('slow'); });
    });

    $('#wish_message').click(function(){
    var vw = $(window).width()/2;
    $('.balloons').stop();
    
    // Posisi Baris 1 (HBD) - Menggunakan top: 150px
    $('#b1').animate({top:150, left: vw-150}, 500);
    $('#b2').animate({top:150, left: vw-50}, 500);
    $('#b3').animate({top:150, left: vw+50}, 500);
    
    // Posisi Baris 2 (FIRMAN) - Menggunakan top: 250px
    $('#b4').animate({top:250, left: vw-250}, 500);
    $('#b5').animate({top:250, left: vw-150}, 500);
    $('#b6').animate({top:250, left: vw-50}, 500);
    $('#b7').animate({top:250, left: vw+50}, 500);
    $('#b8').animate({top:250, left: vw+150}, 500);
    $('#b9').animate({top:250, left: vw+250}, 500);
    
    $('.balloons').css('opacity','0.9');
    $('.balloons h2').fadeIn(3000);
    $(this).fadeOut('slow').delay(3000).promise().done(function(){ $('#story').fadeIn('slow'); });
});
    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast');
        $('.message').fadeIn('slow');
        var i = 1;
        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
                i++;
                if(i <= 10) { // Sesuaikan dengan jumlah <p> Anda
                    $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
                    msgLoop(i);
                }
            });
        }
        msgLoop(1);
    });
});

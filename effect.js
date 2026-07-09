$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$('document').ready(function(){
    var vw;
    $(window).resize(function(){
         vw = $(window).width()/2;
    });

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

    // Fungsi loop untuk 9 balon
    function loop(id) {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $(id).animate({left:randleft,bottom:randtop},10000,function(){ loop(id); });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        $('#b1,#b4,#b5,#b7,#b8').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6,#b9').addClass('balloons-rotate-behaviour-two');
        for(var i=1; i<=9; i++) { loop('#b'+i); }
        $(this).fadeOut('slow').delay(5000).promise().done(function(){ $('#cake_fadein').fadeIn('slow'); });
    });

    $('#wish_message').click(function(){
        vw = $(window).width()/2;
        $('.balloons').stop();
        // Atur posisi balon membentuk HBD dan FIRMAN
        $('#b1').attr('id','b11').animate({top:150, left: vw-150},500);
        $('#b2').attr('id','b22').animate({top:150, left: vw-50},500);
        $('#b3').attr('id','b33').animate({top:150, left: vw+50},500);
        $('#b4').attr('id','b44').animate({top:240, left: vw-250},500);
        $('#b5').attr('id','b55').animate({top:240, left: vw-150},500);
        $('#b6').attr('id','b66').animate({top:240, left: vw-50},500);
        $('#b7').attr('id','b77').animate({top:240, left: vw+50},500);
        $('#b8').attr('id','b88').animate({top:240, left: vw+150},500);
        $('#b9').attr('id','b99').animate({top:240, left: vw+250},500);
        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(function(){ $('#story').fadeIn('slow'); });
    });

    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast');
        $('.message').fadeIn('slow');
        var i = 0;
        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
                i++;
                $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
                if(i < 10) { msgLoop(i); } // Sesuaikan angka 10 dengan jumlah paragraf Anda
            });
        }
        msgLoop(1);
    });
});

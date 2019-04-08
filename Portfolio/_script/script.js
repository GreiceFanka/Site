$(function(e){$('#home').click(function(e){
    $('html,body').animate({scrolltop:$('#home').offset().top},800);
                });
    $('#habilities').click(function(e){
            $('html,body').animate({scrolltop:$('#habilities').offset().top},800);
                });
    $('#aboutme').click(function(e){
            $('html,body').animate({scrolltop:$('#aboutme').offset().top},800);
                });
    $('#contact').click(function(e){
            $('html,body').animate({scrolltop:$('#contact').offset().top},800);
                });
    });

    $('.navbar-nav li a').click(function() {
        if (!$(this).parent().hasClass('dropdown')) {
            $('.navbar-collapse').collapse('hide'); 
            }
    });

$(function(){
        $('.carousel').carousel({
        interval:3000, pause:"null",wrap:true  
        });  
    });

function showObject (){
    $(function(){
         $('.icone').fadeOut(500);
         $('.icone').fadeIn(8000);
        })
    };       
            
$(function(){
    var fadeObject = $(document);
    var fadeElem = $('.home');
    fadeObject.on('scroll',function(){
        var moveScroll = fadeObject.scrollTop();
        fadeElem.each(function(){
        var $this = $(this);
     elemTop = $this.offset().top;
        if(moveScroll > elemTop)$this.css('opacity', 1-(moveScroll-elemTop)/400);
        else($this.css('opacity',1));
        });
    });
});

function changePhoto(type){
    if(type == 1){
        archive = "_img/foto2.jpg";
    }
    if(type == 2){
        archive = "_img/foto.jpeg";
    }
    document.getElementById("foto").src = archive;
}


var pos = 0;
var speed = 250;
var str = document.getElementById('text').innerText;

document.getElementById('text').innerText = '';

function write(){
    if(pos < str.length){
      document.getElementById('text').innerText += str.charAt(pos);pos++;
        setTimeout(write,speed);
    } else {
       setTimeout(erase,speed) 
    }
}
setTimeout(write,speed);

function erase(){
    if(pos >= 0){
        var time = str.substring(0,pos);
        document.getElementById('text').innerText = time;
        pos--;
        setTimeout(erase,speed);
    } else{
       setTimeout(write,speed); 
    }
}


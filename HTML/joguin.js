var INTERVALO = 1000;
var score = 0;
var teclasPressionadas = [];
var TECLASDEMOVIMENTO = [74,75,76,65,83,68] // j k l   a s d 
var numTiros = 0;
var temMunicao1 = true;
var temMunicao2 = true;
var tempo = 0;

$(window).keydown(function(event){
  if(teclasPressionadas.indexOf(event.which)==-1 && 
    TECLASDEMOVIMENTO.indexOf(event.which)!=-1 ){
    teclasPressionadas.push(event.which);
  }
});

$(window).keyup(function(event){
  if(event.which==75)
    temMunicao1 = true;
  if(event.which==83)
    temMunicao1 = true;
  var index = teclasPressionadas.indexOf(event.which);
  if(index!=-1)
    teclasPressionadas.splice(index,1);
});

var executaTeclasPressionadas = setInterval(function(){
  for(var tecla in teclasPressionadas){
    if(teclasPressionadas[tecla] == 74){
      $("#js_nave1").css('left', "-=5px");
    }

    if(teclasPressionadas[tecla] == 76){
      $("#js_nave1").css('left', "+=5px");
    }

    if(teclasPressionadas[tecla] == 65){
      $("#js_nave2").css('left', "-=5px");
    }

    if(teclasPressionadas[tecla] == 68){
      $("#js_nave2").css('left', "+=5px");
    }

    if( (teclasPressionadas[tecla] == 75 || teclasPressionadas[tecla] == 83 )  && temMunicao1 == true){
      var numeroDaNave;
      if(teclasPressionadas[tecla]==75){
        numeroDaNave = 1;
        temMunicao1 = false;
      }
      else{
        numeroDaNave = 2;
        temMunicao2 = false;
      }
      
      var posicaoNave = pegaCssLeft("#js_nave"+numeroDaNave);
      $('body').append(' <div id="js_tiroNumero'+numTiros%10+'" class="tiro"> </div>');
      $(".tiro").css("left", $('#js_nave'+numeroDaNave).css('left'));


      if(posicaoNave < 120 && posicaoNave > 80 ){
        score += $('.posicao_horizontal1').length*5;
        $('.posicao_horizontal1').remove();
      }
      if(posicaoNave < 220 && posicaoNave > 180 ){
        score += $('.posicao_horizontal2').length*5;
        $('.posicao_horizontal2').remove();
      }
      if(posicaoNave < 320 && posicaoNave > 280 ){
        score += $('.posicao_horizontal3').length*5;
        $('.posicao_horizontal3').remove();
      }
      if(posicaoNave < 420 && posicaoNave > 380 ){
        score += $('.posicao_horizontal4').length*5;
        $('.posicao_horizontal4').remove();
      }
      if(posicaoNave < 520 && posicaoNave > 480 ){
        score += $('.posicao_horizontal5').length*5;
        $('.posicao_horizontal5').remove();
      }
      setScore();
      setTimeout(function(){
        limpaTiro(numTiros%10)
      }, 100);
    }
  }
},50)

function pegaCssLeft(string){
  return parseInt(/(\d+)/.exec($(string).css('left')), 10);
}

function limpaTiro(numeroDoTiro){
  $('#js_tiroNumero'+numeroDoTiro).remove();
};


function setScore(){
  $('#js_score').html(score);
}

function setTempoMais1(){
  $('#js_tempo').html(++tempo);
}

function blocoSpawn(){
  if($('#js_posicao10').children().is('div')){
    //alert("Game Over");
    $('#js_highScore').append('<p>Score : '+score+'&nbsp;&nbsp;&nbsp; Tempo : '+tempo);

    score = 0;
    tempo = 0;
    setScore();

    INTERVALO = 1000;
    $('.posicao_horizontal1').remove();
    $('.posicao_horizontal2').remove();
    $('.posicao_horizontal3').remove();
    $('.posicao_horizontal4').remove();
    $('.posicao_horizontal5').remove();
  }

  $('#js_posicao10').children().remove();

  $('#js_posicao10').append($('#js_posicao9').children());
  $('#js_posicao9').children().remove();

  $('#js_posicao9').append($('#js_posicao8').children());
  $('#js_posicao8').children().remove();

  $('#js_posicao8').append($('#js_posicao7').children());
  $('#js_posicao7').children().remove();

  $('#js_posicao7').append($('#js_posicao6').children());
  $('#js_posicao6').children().remove();

  $('#js_posicao6').append($('#js_posicao5').children());
  $('#js_posicao5').children().remove();

  $('#js_posicao5').append($('#js_posicao4').children());
  $('#js_posicao4').children().remove();

  $('#js_posicao4').append($('#js_posicao3').children());
  $('#js_posicao3').children().remove();

  $('#js_posicao3').append($('#js_posicao2').children());
  $('#js_posicao2').children().remove();

  $('#js_posicao2').append($('#js_posicao1').children());
  $('#js_posicao1').children().remove();

  var posicao_horizontal = Math.floor(Math.random()*5 + 1)
  $('#js_posicao1').append('<div class="bloco_ameacador posicao_horizontal'+posicao_horizontal+'" > </div>');

  INTERVALO = Math.ceil(INTERVALO*0.99);

  setTimeout(blocoSpawn,INTERVALO);
}

setTimeout(blocoSpawn,INTERVALO);

setInterval(setTempoMais1,1000);
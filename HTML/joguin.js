var INTERVALO = 1000;
var score = 0;

$(window).keydown(function(event){
  if(event.which == 39)
    $("#js_nave").css('left', "+=5px");

  if(event.which == 37)
    $("#js_nave").css('left', "-=5px");

  if(event.which == 32){
    var posicaoNave = pegaCssLeft("#js_nave");
    $('body').append(' <div class="tiro"> </div>');
    $('.tiro').css("left", $('#js_nave').css('left'));
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
    setTimeout(limpaTiro, 200);
  }
});

function pegaCssLeft(string){
  return parseInt(/(\d+)/.exec($(string).css('left')), 10);
}

var limpaTiro = function(){
  $('.tiro').remove();
};


function setScore(){
  $('#js_score').html(score);
}

var blocoSpawn = setInterval(function(){
  if($('#js_posicao5').children().is('div')){
    //alert("Game Over");
    score = 0;
    setScore();

    $('.posicao_horizontal1').remove();
    $('.posicao_horizontal2').remove();
    $('.posicao_horizontal3').remove();
    $('.posicao_horizontal4').remove();
    $('.posicao_horizontal5').remove();
  }

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

;}, INTERVALO);




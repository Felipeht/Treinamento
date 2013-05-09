var dataInicial = new Date();
var INTERVALO = 2000;



var blocoSpawn = setInterval(function(){
  //if($('#js_posicao5').children().is('div'))
    //alert("Game Over");
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




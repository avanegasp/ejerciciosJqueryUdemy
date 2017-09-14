
  contador = 0;

  $('.btn-multiplicar').click('container', function(){
    contador ++;
    var resultado = 3 * contador;
    // console.log(resultado)

    var total = $('<ul><li>' + resultado + '</li></ul>').css('color', 'green')

    $('body').append(total)

  })

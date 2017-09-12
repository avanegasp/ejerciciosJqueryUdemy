(function(){

  var dds = $('dd');
  dds.hide()

  $('dt').on('mouseenter', function(){
    $(this).next().show()
    console.log('entró')
  });
})()

// Função para botão mostrar menu no celular
$(document).ready(function(){ // Esse finção usa Jquery (Depois posso mudar para js puro)
  $('#mobile_btn').on('click', function() {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  })
})
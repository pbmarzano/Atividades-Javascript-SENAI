var $lista = document.querySelector('#lista')
var $fruta = document.querySelector('#fruta')
var $botao = document.querySelector('#btn')

$botao.addEventListener('click', function(){
  var item = '<li>' + $fruta.value + '</li>'
  $lista.innerHTML = $lista.innerHTML + item 

  if ($fruta.value == 'cereja'){
    alert('sua salada está pronta')
  }
})


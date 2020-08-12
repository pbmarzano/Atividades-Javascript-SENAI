var $lista = document.querySelector('#lista')
var $fruta = document.querySelector('#fruta')
var $botao = document.querySelector('#btn')

$fruta.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn").click();
  }
});

function add(){
  var item = '<li>' + $fruta.value + '</li>'
  $lista.innerHTML += item

  if ($fruta.value == 'cereja'){
    alert('sua salada está pronta')
  }

  $fruta.value = '';
  $fruta.focus()
}


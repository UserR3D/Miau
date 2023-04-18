
var tipoBuscaAnimal = localStorage.getItem("tipoBuscaAnimal");
var tipoAnimal = localStorage.getItem("tipoAnimal");
var sexo = localStorage.getItem("sexo");
var nomeAnimal = localStorage.getItem("nomeAnimal");
var raca = localStorage.getItem("raca");
var pelagem = localStorage.getItem("pelagem");
var idade = localStorage.getItem("idade");
var porte = localStorage.getItem("porte");
var descricao = localStorage.getItem("descricao");


var descricaoTela = document.getElementById('descricao-tela');
descricaoTela.innerHTML = '<p>'+sexo+'</p> <p>'+raca+'</p> <p>'+pelagem+'</p> <p> texto do anunciante: </p> <p>'+descricao+'</p>'

var descricaoAdoteme = document.getElementById('descricao-adoteme');
var texto=   raca + ', ' + sexo + ', ' + pelagem ;
descricaoAdoteme.innerHTML = '<h3 class="text-m1">'+texto+'</h3>'

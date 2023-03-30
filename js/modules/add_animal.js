/* Marca so uma caixa de pergunta*/
const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach(radio => {
  radio.addEventListener('click', () => {
    radios.forEach(r => r.checked = false);
    radio.checked = true;
  });
});
/*Fim da marcação da caixa de pergunta*/
/*
Opção de idades*/
var numeroSelecionado = document.getElementsByName("numeros")[0].value;
/*Fim de opção de idades*/
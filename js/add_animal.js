localStorage.clear();
function salvar(){

    var tipoBuscaAnimal;
    var tipoAnimal;
    var sexo;
    var nomeAnimal = document.getElementById("nome-animal").value;
    var raca = document.getElementById("raca").value;
    var pelagem = document.getElementById("pelagem").value;
    var idade = document.getElementById("idade").value;
    var porte;
    var descricao = document.getElementById("descricao").value;

    var radiosTipoBuscaAnimal = document.getElementsByName("tipo-busca-animal");
    for (var i = 0; i < radiosTipoBuscaAnimal.length; i++) {
        if (radiosTipoBuscaAnimal[i].checked) {
            tipoBuscaAnimal = radiosTipoBuscaAnimal[i].value;
            console.log(tipoBuscaAnimal)
        }
    }

    var radiosTipoAnimal = document.getElementsByName("tipo-animal");
    for (var i = 0; i < radiosTipoAnimal.length; i++) {
        if (radiosTipoAnimal[i].checked) {
            tipoAnimal = radiosTipoAnimal[i].value;
            console.log(tipoAnimal)
        }
    }


    var radiosSexo = document.getElementsByName("sexo");
    for (var i = 0; i < radiosSexo.length; i++) {
        if (radiosSexo[i].checked) {
            sexo = radiosSexo[i].value;
            console.log(sexo)
        }
    }

    var radiosPorte = document.getElementsByName("porte");
    for (var i = 0; i < radiosPorte.length; i++) {
        if (radiosPorte[i].checked) {
            porte = radiosPorte[i].value;
            console.log(porte)
        }
    }

    localStorage.setItem("tipoBuscaAnimal", tipoBuscaAnimal);
    localStorage.setItem("tipoAnimal", tipoAnimal);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("nomeAnimal", nomeAnimal);
    localStorage.setItem("raca", raca);
    localStorage.setItem("pelagem", pelagem);
    localStorage.setItem("idade", idade);
    localStorage.setItem("porte", porte);
    localStorage.setItem("descricao", descricao);



   window.location.replace("adoption.html")

}


function entrar() {
    console.log("chamo");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email + "   "+password );

    if(email == "admin@gmail.com" && password == "123"){
        window.location.replace("add_animal.html")
    }else{
        alert("Ops! Sua senha ou seu e-mail está errada tente digitar novamente.")
    }

  }


//FUNCIONES // 
function seleccionarMetodo(){
    let seleccionado = document.getElementById('seleccionado')
    let metodo = seleccionado.value;
    document.getElementById('metodoSeleccionado').innerText = `Usted a seleccionado el método de ${metodo}.`;
    } 
    
    
    function myScript(){
    alert("Gracias por enviar tu pedido, te contactaremos en la brevedad");
    }
    
    document.getElementById('enviar').addEventListener("click", myScript);
    
    
    function datos(evento){
    
    var valorInput = evento.target.value;
    console.log(valorInput.length);
    if(valorInput.length < 4) {alert("Escribi tu nombre completo por favor")
    }
    
    document.getElementById('username').style.border="2px solid green";
      }
    
      function datos1(){ 
        document.getElementById('email').style.border="2px solid green";
      }
    
      function datos2(){ 
      document.getElementById('numero').style.border="2px solid green";
    }
    
    function texto(){
      document.getElementById('mensaje').style.border="2px solid green";
    }
    
    
    function capturarEnter(event) {
      if (event.which == 13 || event.keyCode == 13) { 
    alert("ENVIADO");        
       }
    }
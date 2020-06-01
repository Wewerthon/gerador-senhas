function get_results (){
    let caracteres = [];
    let resultado = [];

    if (document.getElementById("letraMaiuscula").checked) {
        caracteres += ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    }
    if (document.getElementById("letraMinuscula").checked) {
        caracteres += ['abcdefghijklmnopqrstuvwxyz'];
    }

    if (document.getElementById("numeros").checked) {
        caracteres += ['1234567890'];
    }
    if (document.getElementById("simbolos").checked) {
        caracteres += ['!@#$%¨&*()-_+§`[{}]^~:,?/.'];  
    }

    if (caracteres == '') {
        alert('Seleciona pelo menos uma opção.');
        resultado = null;
    } else {
        for(let i = 0; i < 10; i++){
            resultado += caracteres[Math.floor(caracteres.length * Math.random())]
        }
    }
    
    document.getElementById('resultado').innerHTML = resultado;
}
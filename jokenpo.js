function jogar(){

function obterOpcaoUsuario() {
    let input = prompt('Selecione uma das opções: [1] Pedra | [2] Papel | [3] Tesoura');
    return parseInt(input, 10);
}

function obterOpcaoComputador() {
    return parseInt(Math.random() * 3 + 1, 10);
    
}

let usuario = obterOpcaoUsuario();
let computador = obterOpcaoComputador();

let possiveisResultados = {
    empate: "Empate 🎲",
    vitoria: "Vitória 😘",
    derrota: "Perdeu 😔",
}

let resultado = "Erro: inesperado.";

if(usuario === computador) { // Deu empate
    resultado = possiveisResultados.empate;
} else { // Não deu empate
    switch(usuario) {
        case 1: // Pedra
        if(computador === 2) { // Tesoura
            alert('seu oponente escolheu Papel')
            resultado = possiveisResultados.derrota;
        } else { // Pedra
            alert('seu oponente escolheu Papel')
            resultado = possiveisResultados.vitoria;
        }
            break;
        case 2: // Papel
            if(computador === 3) { // Tesoura
                alert('seu oponente escolheu Tesoura')
                resultado = possiveisResultados.derrota;
            } else { // Pedra
                alert('seu oponente escolheu Tesoura')
                resultado = possiveisResultados.vitoria;
            }
            break;
        case 3: // Tesoura
            if(computador === 1) { // Pedra
                alert('seu oponente escolheu Pedra')
                resultado = possiveisResultados.derrota;
            } else { // Papel
                alert('seu oponente escolheu Pedra')
                resultado = possiveisResultados.vitoria;
            }
            break;
        default:
            resultado = "Erro: Opção invalida.";
    }

}

alert(resultado);
return resultado;

}

var result1 = jogar()
var result2 = jogar()
console.log(result1, result2);
if (result1 == "Empate 🎲" && result2 == "Empate 🎲" || 
result1 == "Vitória 😘" && result2 == "Perdeu 😔" ||
result1 == "Perdeu 😔" && result2 == "Vitória 😘") {
    alert('Não houve vencedor')
}else if (result1 == "Vitória 😘" && result2 == "Vitória 😘" || 
result1 == "Vitória 😘" && result2 == "Empate 🎲"){
    alert('Voce venceu!!')
}else {
    alert('Voce perdeu')
}

  
   










calculaSaldoRankeadas(91, 0)

function calculaSaldoRankeadas(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    

    if (saldoVitorias <= 10){
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de " + "Ferro")
    }
    else if ((saldoVitorias >= 11) && (saldoVitorias <= 20)){
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de " + "Bronze")
    }
    else if ((saldoVitorias >= 21) && (saldoVitorias <= 50)){
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de " + "Prata")
    }
    else if ((saldoVitorias >= 51) && (saldoVitorias <= 80)){
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de " + "Ouro")
    }
    else if ((saldoVitorias >= 81) && (saldoVitorias <= 90)){
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de " + "Diamante")
    }
    else if ((saldoVitorias >= 91) && (saldoVitorias <= 100)){
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de " + "Lendário")
    }
    else if (saldoVitorias >= 101) {
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de " + "Imortal")
    }
    else {
        console.log("Nível não definido")
    }
}


function soma(n1, n2){
    return n1 + n2;
}

let res = soma(6, 7)

console.log(`O resultado da soma é ${res}`)


function somaop(n1 = 0, n2 = 0){ //definidno mum parametro opcional
    return n1 + n2;
}

let resop = somaop(33)

console.log(`O resultado da soma é ${resop}`)
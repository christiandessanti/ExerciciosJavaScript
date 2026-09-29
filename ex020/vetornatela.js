let valores = [3, 3, 4, 4, 5, 9, 6, 5, 8]

/* for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for(let pos in valores){    // para cada registro em um vetor faça
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}




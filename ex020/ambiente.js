let num = [5, 6, 7 ,8]   //definindo uma variavel composta

num[4] = 6   //adiciona um elemento em uma posição especifica do array

num.push(99)   //colocando valor no último campo

num.length   // mostra o tamanho do vetor/array

num.sort()  //ordena os elementos em forma crescente

//console.log(`Nosso vetor é o ${num}`)


let pos = num.indexOf(9)    //procura no vetor o valor informado dentro dos parenteses

if (pos == -1){   // caso o indexOf não ache o valor informado, ele retorna -1
    console.log('O valor não foi encontrado!')
} else {
console.log(`O valor 8 está na posição ${pos}`)
} 
var idade = 64
console.log(`Você possui ${idade} anos.`)
if(idade < 16){
    console.log(`Não pode votar!`)
} else if(idade < 18 || idade >= 65){
    console.log(`O voto é opcional!`)
    } else {
        console.log(`O voto é obrigatório!`)
    }
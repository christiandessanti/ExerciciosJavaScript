function descubra(n){
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let res = descubra(67)
console.log(`O número é ${res}`)
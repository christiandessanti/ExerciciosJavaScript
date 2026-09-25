function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossivel contar`
    } else {
        res.innerHTML = 'Contando:  <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

    if(p <= 0){
        window.alert('Passo inválido! Considerando passo 1')
        p = 1
    }
        
    if (i < f){   
        //contagem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449} `
        }
    } else {
        //contagem decrescente
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449} `
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
}
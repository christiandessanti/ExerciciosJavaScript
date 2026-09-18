function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados informados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('idade', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'imagens/CriancaH.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/RJovemH.png')
            } else if(idade < 55){
                //adulto
                img.setAttribute('src', 'imagens/AdultoH.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/IdosoH.png')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'imagens/CriancaM.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/RJovemM.png')
            } else if(idade < 55){
                //adulto
                img.setAttribute('src', 'imagens/AdultoM.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/IdosoM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.insertBefore(img, res.firstChild)
    }

}
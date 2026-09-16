
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if(hora < 6){
    console.log(`Deus ajuda quem cedo madruga, tenha cuidado!`)
} else if(hora < 12){
    console.log(`Estamos no periodo da manhã, tome um café para não ficar com sono`)
} else if(hora < 19){
    console.log(`Estamos na parte da tarde, pare de pensar tanto no fim do expediente`)
} else {
    console.log(`Já é noite, não fique na rua, guarde o celular!`)
}

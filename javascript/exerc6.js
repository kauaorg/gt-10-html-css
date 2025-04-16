const user{
    nome:"Kauã",
    altura: 1.81,
    peso: 82,
}

//criar uma função que receba o objetivo user
// e calcule o IMC
// IMC = peso / (altura * altura)

function calcularIMC(user){
    const imc = user.peso / (user.altura * user.altura)
    if(imc <16){
       return console.log("Magreza grave") 
}

if(imc >= 16 && imc < 17){
    return console.log("Magreza moderada")
}
if(imc >= 17 && imc < 18.5){
    return console.log("Magreza leve")
}
if(imc >= 18.5 && imc < 25){
    return console
}

calcularIMC(user)
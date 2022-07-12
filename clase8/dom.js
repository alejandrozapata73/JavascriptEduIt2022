



//hoisting
//funcione declarativa
function sumarNumeros(numeroA=10,numeroB=40,boleano=true){

    var suma = numeroA + numeroB

    console.log(boleano)
    console.log(suma)

}

sumarNumeros()

console.log(sumarNumeros())

function sumarNumerosA(numeroA,numeroB){

    return numeroA + numeroB
}

console.log(sumarNumerosA(10,20))


var almacenarRetorno = sumarNumerosA(2,10)

console.log(almacenarRetorno)

if(almacenarRetorno>15){
    alert("esta funcion retorna mayor a 20")
}else{
    alert("esta funcion retorna menos que 20")
}


function mayor(edad){

    if(edad>18){

         "el resultado es: "+ true

       

    }else{

       
    }


    return 15

    
}

var juan = mayor(20)

var miguel = mayor(12)

var carlos = mayor(25)

console.log(juan)
console.log(miguel)
console.log(carlos)

//objeto... atributos y caracteriscas






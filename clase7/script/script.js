


// var series = []

// var contador = 0

// // series[0] = prompt("ingrese una serie")
// // series[1] = prompt("ingrese una serie")

// console.log(series)

// var cantidad = parseInt(prompt("ingresa la cantidad de series "))

// while(contador<cantidad){

//     console.log("probando ciclo")

//     series[contador] = prompt("ingrese una serie")

//     contador++

// }

// console.log(series)

// var opcion = 0

// do{


    

//     console.log("probando el do while")

    

//     opcion++

// }while(opcion<5)

// if(i==8){
//     console.log("llegaste al 5")
//     break
// }

// console.log(series[i])

// var series = ["break","spider","man of god","minioms","batman","casa"]

// var numeros = [10,15,40]

// for(var i=0;i<2;i++){ // i = 0 + 2... i = 2+2

//      console.log("probando for: " + (i * 3))

//      var pedido = prompt("ingrese un pedido")


// }// i = 2.. i= 4


// objetos literales en javascript

// var persona1 = ["juna","perez",45]
// var persona2 = ["juana","Martinez",39]

// var personas = [
   
//     {

//     'nombre' : 'carlos',
//     'apellido': 'perez',
//     'edad' : 45,
//     'usuario' : true

//  },
//  {

//     'nombre' : 'amparo',
//     'apellido': 'garcia',
//     'edad' : 25,
//     'usuario' : true

//  },
//  {

//     'nombre' : 'emanuel',
//     'apellido': 'sanchez',
//     'edad' : 15,
//     'usuario' : true

//  }

// ]

// console.log(personas[0].nombre)
// console.log(personas[1].nombre)


// for(var i=0;i<personas.length;i++){

//     console.log(personas[i].nombre)
//     console.log(personas[i].apellido)
// }



// var productos = [
//     {
//         'nombre' : 'pizza',
//         'cantidad' : 15,
//         'stok': true,
//         'precio': 500
//     },
//     {
//         'nombre' : 'empanadas',
//         'cantidad' : 28,
//         'stok': true,
//         'precio': 400
//     },
//     {
//         'nombre' : 'hambuerguesa',
//         'cantidad' : 6,
//         'stok': true,
//         'precio': 800
//     },
//     {
//         'nombre' : 'milanesa',
//         'cantidad' : 20,
//         'stok': true,
//         'precio': 1200
//     },
// ]

// console.log(productos[0].precio)

// if(productos[0].cantidad>40){
//     alert("es mayor")
// }

// //formato JSON
// // console.log(personas[0])

//funciones en javascript

function holaMundo(nombre){

    console.log("hola mundo de js: " + nombre)
    alert(nombre)
    var a = "casa"
    // document.write(a)

}

var numeros = 4

if(numeros>5){

    alert("probando condicion")

}else{
    holaMundo("miguel")
}

function sumarNumeros(numeroA,numeroB,set){


    if(set==true){
    console.log(numeroA + numeroB)
    }else{
        console.log("no hagas nada")
    }

}

sumarNumeros(10,20,true)



// holaMundo("miguel")










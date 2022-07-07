//operador logico or.. ||

/*

true  || true = true
false || true = true
true  || false = true
false || false = false

*/

// var edadFede = 15
// var entradaVip = false

// //..false........|| ....false
// if(edadFede > 18 || entradaVip==true){
//     alert("puede ingresar a la sala")
// }else{

//     alert("no puede ingresar a la sala")
// }


//operador negado Not !

// var soyRobot = true

// if(!soyRobot){
//     alert("soy un robot")
// }else{
//     alert("no soy un robot")
// }


//array... vectores

var nombre1 = "jose"
var nombre2 = "walter"
var nombre3 = "guillermo"

//...............0......1...........2...........3.....[n-1]
var nombres = ["jose","walter","guillermo","antonella"]

var peliculas = ["scarface","dark","spider man","piratas del caribe","avatar"]

console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[3])
console.log(nombres[4])

console.log(peliculas[4])

// var comidas = ["milanesas","spaguetis","ravioles","hamburguesas","pizza","rotolo","arroz"]

// var precios = [700,1200,1000,920,1200,890,200]

// var stock = [true,false,true,false,true,true,true]

// var cantidad = [50,45,15,80,120,40,200]

// var pedidoCliente = []


// console.log(comidas.length)//muestra la cantidad de elementos

// console.log("el producto: " + comidas[1] + " tiene un precio de: " + precios[1]+ " Esta en stock: " + stock[1])


// console.log("el producto: " + comidas[4] + " tiene un precio de: " + precios[4]+ " Esta en stock: " + stock[4])


// var pedidoProducto = prompt("ingrese un numero de pedido 1-milanesas 2-spaguettis 3-ravioles")

// switch(pedidoProducto){
//     case "1":
//         //if..
//         console.log("eligio " + comidas[0])
//         var cantidad = parseInt(prompt("ingrese la cantidad a pedir"))
//         var total = cantidad * precios[0]
//         alert("el total es: " + total)

//     break
//     case "2":
//         console.log("eligio Spaguettis")
//     break
//     default:
//         console.log("no ha elegido nada")
//     break

// }

// var comidas = ["milanesas","spaguetis","ravioles","hamburguesas","pizza","rotolo","arroz"]

// var precios = [700,1200,1000,920,1200,890,200]

// console.log(comidas[1])

// //ciclos repetitivos

// var numeroA = 0


// while(numeroA < 100){

    
//     console.log("probando ciclo while: " + numeroA)

//     if(numeroA%2==0){

//        console.log("es par: " + numeroA)

//     }

//     numeroA++
    
// }

//prueba de escritorio
/*
1<5 = true
2<5 = true
5<5 = false
*/

var precios = [700,1200,1000,920,1200,500,400,800,900,400]

var series = []

var cantidad = 0
var i = 0

while(cantidad<precios.length){

    console.log(precios[i])
    

    i++
    cantidad++

}


















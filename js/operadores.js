/*
  Operador aritmeticos
  +suma
 -resta
  / división
  multiplicación
 */


  /*Ejemplo comun 
let valor1 = 10;
let valor2 = 30;
let resultado = valor1 + valor2;
alert(resultado);*/

/*Ejemplo haciendo que el usuario ingrese los valores 
let valor3 = prompt('Ingresa valor 1'); //se guarda como string
let valor4 = prompt('Ingrese valor 2');
let resultado1 = Number(valor3) + Number(valor4);
alert(resultado1); */

/*Ejemplo haciendo nosotros una funcion y que se muestre en html*/
/*function sumar(){
let valor5 = prompt('Ingresa valor 1'); //se guarda como string
let valor6 = prompt('Ingrese valor 2');
let resultado2 = Number(valor5) + Number(valor6);
//alert(resultado2); si quiero que el usuario vea una alerta
document.getElementById('res').innerHTML=resultado2;
}*/

//Si quiero utilizar DOM
function sumar(){
    let valor1 = document.getElementById('valor 1').value; 
    let valor2 = document.getElementById('valor 2').value; 
    let resultado = Number(valor1) + Number(valor2);
    //alert(resultado2); si quiero que el usuario vea una alerta
    document.getElementById('res').innerHTML=resultado;
    }

/*function restar(){
let valor5 = prompt('Ingresa valor 1'); //se guarda como string
let valor6 = prompt('Ingrese valor 2');
let resultado2 = Number(valor5) - Number(valor6);
console.log(resultado2);
}*/

function restar(){
    let valor1 = document.getElementById('valor 1').value; 
    let valor2 = document.getElementById('valor 2').value; 
    let resultado = Number(valor1) - Number(valor2);
    //alert(resultado2); si quiero que el usuario vea una alerta
    document.getElementById('res').innerHTML=resultado;
    }
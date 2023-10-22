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
/*function sumar(){
    let valor1 = getValueById('valor 1'); 
    let valor2 = getValueById('valor 2'); 
    let resultado = Number(valor1) + Number(valor2);
    actualizarContenido('res', resultado);
    }

/*function restar(){
let valor5 = prompt('Ingresa valor 1'); //se guarda como string
let valor6 = prompt('Ingrese valor 2');
let resultado2 = Number(valor5) - Number(valor6);
console.log(resultado2);
}*/

/*function restar(){
    let valor1 = getValueById('valor 1'); 
    let valor2 = getValueById('valor 2'); 
    let resultado = Number(valor1) - Number(valor2);
    actualizarContenido('res', resultado);
    

    if(valor1 !== '' &&  valor2 !==''){
      let resultado = Number(valor1) - Number(valor2);
      actualizarContenido('res',resultado);
    }else {
      actualizarContenido('res','');
    }
    
  }

    function calcular(operacion){
  
  if(operacion === '+'){
    sumar();
  }else {
    restar();
  }
  }


 function getValueById(id){
    const valor= document.getElementById(id).value;
    return valor;
}

function actualizarContenido(id,nuevoContenido){
  document.getElementById(id).innerHTML = nuevoContenido;
}


/*
    OPERADOR ARITMETICOS

    + suma
    - resta
    / division
    * multiplicacion
*/
function sumar(valor1,valor2) {    
  return Number(valor1) + Number(valor2);
}

function restar(valor1,valor2) {
  return Number(valor1) - Number(valor2);        
}
function multiplicar(valor1,valor2){
  return Number(valor1) * Number(valor2);  
}

function calcular(operacion) {
  let valor1 = getValueById('valor1');
  let valor2 = getValueById('valor2');
  let resultado = '';

  if (valor1 !== '' && valor2 !== '') {
  
    if (operacion === '+') {
      resultado = sumar(valor1, valor2);
    } else if (operacion === '*') {
      resultado = multiplicar(valor1, valor2);
    } else {
      resultado = restar(valor1, valor2);
    }
    actualizarContenido('res', resultado);
  }
}

function getValueById(id) {
  //Si lo tengo que crear y devolver, entonces solo lo devuelvo
  return document.getElementById(id).value;
}

function actualizarContenido(id,nuevoContenido) {
  document.getElementById(id).innerHTML = nuevoContenido;
}
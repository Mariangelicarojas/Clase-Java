/*1) crear un array vacio
const listado = [];

//arrow function / react
const validar = (valorDelInput) => {
    let valido = true;
    //es vacio

    if(valorDelInput.trim() === '') {
        valido = false;
    }
    //puede haber mas validaciones
    return valido;
}

addItemToList = function (id, valorDelInput) {
    //crear dinamicamente un <li>
    //acento grave `${variable}` //alt+96
    const item = `<li id="${id}">
        <label>${valorDelInput}</label>
        <button onclick="eliminar(${id})">x</button> 
    </li>`;
    //document.getElementById('lista').innerHTML = item;
    //2) agrego al array
    listado.push(item);
}

function add() {    
    //dentro de la funcion  capturo el valor de input
    const valorDelInput = getValueById('elemento');

    //validacion
    const res = validar(valorDelInput);
    //guard's 
    if(!res) {
        return;
    }
    

    const id = Math.random();//id aleatorio

    addItemToList(id, valorDelInput);

    agregarItem(id, valorDelInput);

    //limpiar input
    updateValue('elemento','');

    //dejo el foco en el input
    ponerFoco('elemento');
}
function eliminarv1(id) {
    const index = listado.findIndex(item => item.includes(id));
    if (index !== -1) {
        listado.splice(index, 1); // Elimina el elemento del array.
    }
    //listar(listado); // Actualiza la lista en la página.
    //via D.O.M eliminar directamente el elemento del HTML
    document.getElementById(id).remove();
}
function eliminar(e) {
    const id = e.target.id;
    const index = listado.findIndex(item => item.includes(id));
    if (index !== -1) {
        listado.splice(index, 1); // Elimina el elemento del array.
    }
    //listar(listado); // Actualiza la lista en la página.
    //via D.O.M eliminar directamente el elemento del HTML
    document.getElementById(id).parentElement.remove();
}

function listarV1(lista) {
    //3) recorro el array
    let items = ``;
    for(let valor of lista) {
        items += valor;
    }
    //actualizo el html con la lista completa
    document.getElementById('lista').innerHTML = items;
}

function agregarItem(id,valorDelInput) {
    //crear un nodo
    const nuevoLi = document.createElement('li');

    const label = document.createElement('label');
    //'pongo' el texto del input al label
    label.textContent = valorDelInput;
    const button = document.createElement('button');
    button.id = id;
    button.textContent = 'X';
    button.addEventListener('click',eliminar)

    nuevoLi.appendChild(label);
    nuevoLi.appendChild(button);

    //agregar al ul un child
    const ul = document.getElementById('lista');

    ul.appendChild(nuevoLi);
}

function getValueById(id) {
    return document.getElementById(id).value;
}
function updateValue(id,value) {
    return document.getElementById(id).value = value;
}
function ponerFoco(id) {
    document.getElementById(id).focus();
}
//agregar al boton con id btnAdd un evento click
//para que cuando se presione invoque al metodo add()
document.getElementById("btnAdd").addEventListener('click',add);

A PARTIR DE AQUI ES COMO MAS AVANZADO  Y CON OBJETO*/
//1) crear un array vacio
const listado = [];

//arrow function / react
const validar = (valorDelInput) => {
    let valido = true;
    //es vacio

    if(valorDelInput.trim() === '') {
        valido = false;
    }
    //puede haber mas validaciones
    return valido;
}

addItemToList = function (item) {
    const obj = {
        id: item.id,
        valorDelInput: item.valorDelInput
    };
    //2) agrego al array
    listado.push(obj);
}

function add() {    
    //dentro de la funcion  capturo el valor de input
    const valorDelInput = getValueById('elemento');

    //validacion
    const res = validar(valorDelInput);
    //guard's
    if(!res) {
        return;
    }

    const id = Math.random();//id aleatorio
    const item = {
        id: id,
        valorDelInput: valorDelInput
    };

    addItemToList(item);

    agregarItem(item);

    //limpiar input
    updateValue('elemento','');

    //dejo el foco en el input
    ponerFoco('elemento');

    localStorage.setItem('listado',JSON.stringify(listado));
}

function eliminarv1(id) {
    const index = listado.findIndex(item => item.includes(id));
    if (index !== -1) {
        listado.splice(index, 1); // Elimina el elemento del array.
    }
    //listar(listado); // Actualiza la lista en la página.
    //via D.O.M eliminar directamente el elemento del HTML
    document.getElementById(id).remove();
}

function eliminar(e) {
    const id = e.target.id;
    const index = listado.findIndex(item => Number(item.id) === Number(id));
    if (index !== -1) {
        listado.splice(index, 1); // Elimina el elemento del array.
    }
    localStorage.setItem('listado',JSON.stringify(listado));
    //listar(listado); // Actualiza la lista en la página.
    //via D.O.M eliminar directamente el elemento del HTML
    document.getElementById(id).parentElement.remove();
}

function listar(lista) {
    for(let valor of lista) {
        agregarItem(valor.id,valor.valorDelInput);
    }
}

function agregarItem(item) {
    //crear un nodo
    const nuevoLi = document.createElement('li');

    const label = document.createElement('label');
    //'pongo' el texto del input al label
    label.textContent = item.valorDelInput;
    const button = document.createElement('button');
    button.id = item.id;
    button.textContent = 'X';
    button.addEventListener('click',eliminar)

    nuevoLi.appendChild(label);
    nuevoLi.appendChild(button);

    //agregar al ul un child
    const ul = document.getElementById('lista');

    ul.appendChild(nuevoLi);
}

function getValueById(id) {
    return document.getElementById(id).value;
}

function updateValue(id,value) {
    return document.getElementById(id).value = value;
}

function ponerFoco(id) {
    document.getElementById(id).focus();
}

//agregar al boton con id btnAdd un evento click
//para que cuando se presione invoque al metodo add()
document.getElementById("btnAdd").addEventListener('click',add);

function dibujarListado() {
    //obtengo el listado desde el localStorage}
    let listado = localStorage.getItem('listado');
    if(!listado) {
        listado = [];
    }else {
        listado = JSON.parse(listado);
    }

    //listado = JSON.parse(localStorage.getItem('listado') || []);
    for(let item of listado) {
        agregarItem(item);
    }
}

dibujarListado();
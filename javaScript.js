// DECLARAMOS //
////////////////
////////////////
let nombreUsuario; 
let dineroUsuario;
let opcion1;
let opcion2;
function compraPapitas(valor, nombrePapita){
    if (dineroUsuario >= valor) {
        dineroUsuario = dineroUsuario - valor;
        alert(`Ha comprado papitas ${nombrePapita}. Su vuelto es de $${dineroUsuario}.`);             
    }
    else {
        alert("No tiene suficiente dinero.")
    }
};
// let listaCarrito = [];
// SALUDOS!
let saludos = [`Bienvenido ${nombreUsuario}!!`, `Buenos días, ${nombreUsuario}!!`, "Buenos días!", "Bienvenido!"];
let randSal = (Math.random()*saludos.length) | 0;
let randomSaludos = saludos[randSal];
////////////////
////////////////

////////////////
////////////////
// OBJETOS //
// PAPITAS // 
function papitas(id, nombre, precio, categoria, descripcion){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio; 
    this.categoria = categoria;
    this.descripcion = descripcion;
}


let listaPapitas = [
    { id: 01, nombre: "Clasica",         precio: 10, categoria: "normal",   descripcion: "Solo papitas" },
    { id: 02, nombre: "Clasica",         precio: 20, categoria: "deluxe",   descripcion: "Solo papitas" },
    { id: 03, nombre: "Cheddar",         precio: 15, categoria: "normal",   descripcion: "Con queso cheddar" },
    { id: 04, nombre: "Wasabi",          precio: 15, categoria: "normal",   descripcion: "Con condimento picante wasabi" },
    { id: 05, nombre: "Wacamole",        precio: 20, categoria: "premium",  descripcion: "Con wacamole. Se le puede agregar tomate." },
    { id: 06, nombre: "Queso Y Cebolla", precio: 20, categoria: "premium",  descripcion: "Con queso y cebolla. Se le puede agregar un poco mas de cebolla a elección" },
    { id: 07, nombre: "Queso Gratinado", precio: 30, categoria: "deluxe",   descripcion: "Con queso gratinado a elección (no cheddar)" },
    { id: 08, nombre: "Sal-Marina",      precio: 35, categoria: "deluxe",   descripcion: "Con sal marina. Se le puede agregar alguna salsa a elección (no wasabi o wacamole)" }
];

///////////////////
// DOM
///////////////////

//Saludo!
function saludo(){
    let contenedorSaludo = document.createElement("h2");
    contenedorSaludo.innerHTML = `
    <h2>${randomSaludos}</h2>
    `;
    main.appendChild(contenedorSaludo);
}

//Listado productos 
for (papita of listaPapitas) {
    let contenedor = document.createElement("article");
    contenedor.innerHTML = `
    <article class="contProducto">
        <img src="" alt="">
        <div class="Contenido">
            <p>${papita.nombre}</p>
            <p>${papita.precio}</p>
        </div>
        <div>
            <button class="btn-comprar">Agregar al carrito</button>
        </div>
    </article>
    `;
    main.appendChild(contenedor);
};

///////////////////
// Eventos
///////////////////

// Agrego Nombre
const eventKeyNombreYSaldo = { 
    nombre: document.querySelector("#agregaNombre"),
    saldo: document.querySelector("#agregaSaldo")
}
eventKeyNombreYSaldo.nombre.addEventListener("input", (e)=>{
    console.log(e.target.value)
    }
);

// Agrego Saldo
eventKeyNombreYSaldo.saldo.addEventListener("input", (e)=>{
    console.log(e.target.value)
    }
);

//Botón envio
let btnAgregoNombre = document.querySelector("#form-nombreSaldo");
btnAgregoNombre.addEventListener("submit", validarEnvio);

//LOCALSTORAGE
const nombreYSaldo = JSON.stringify(eventKeyNombreYSaldo);
localStorage.setItem("Nombre y Saldo", nombreYSaldo);

function validarEnvio(e){
    e.preventDefault();
    const nombreYSaldoAMostrar = JSON.parse(localStorage.getItem("Nombre y Saldo"))
    let contenedorDinero = document.createElement("h3");
    contenedorDinero.innerHTML = `
    <h3>Dinero de ${nombreYSaldoAMostrar.nombre}: $${nombreYSaldoAMostrar.saldo}</h3>
    `;
    aside.appendChild(contenedorDinero);
};

////////////////////////////////
//// Agrego buscaXNombre
const eventKeyBuscarPorNombre = document.querySelector("#buscaXNombre");
eventKeyBuscarPorNombre.addEventListener("input", (e)=>{
    console.log(e.target.value)
    }
);

let btnBuscarXNombre = document.querySelector("#form-buscarXNombre");
btnBuscarXNombre.addEventListener("submit", buscarXNombre);

function buscarXNombre(e){
    e.preventDefault();
//    alert(`${eventKeyBuscarPorNombre.value}`)

    let nombreFiltrado = listaPapitas.filter(papita => papita.nombre == eventKeyBuscarPorNombre.value);
    console.log(nombreFiltrado);

    for (papita of nombreFiltrado) {
        let contenedorBuscarXNombre = document.createElement("article");
        contenedorBuscarXNombre.innerHTML = `
            <article class="contProducto">
                <img src="" alt="">
                <div class="Contenido">
                    <p>${papita.nombre}</p>
                    <p>${papita.precio}</p>
                </div>
                <div>
                    <button class="btn-comprar">Agregar al carrito</button>
                </div>
            </article>
        `;
        aside.appendChild(contenedorBuscarXNombre);
    }
};

////////////////////////////////
////////////////////////////////

const precioMinimo = document.querySelector("#baseDePrecio");
precioMinimo.addEventListener("input", (e)=>{
    console.log(e.target.value)
    }
);
const precioMaximo = document.querySelector("#topeDeprecio");
precioMaximo.addEventListener("input", (e)=>{
    console.log(e.target.value)
    }
);

let btnBuscarXRango = document.querySelector("#form-buscarXRango");
btnBuscarXRango.addEventListener("submit", buscarXRango);

function buscarXRango(e){
    e.preventDefault();
    console.log(`${precioMinimo.value}... ${precioMaximo.value}`);

    let buscarPrecioXRango = listaPapitas.filter(papita => papita.precio >= precioMinimo.value && papita.precio <= precioMaximo.value);

    for (papita of buscarPrecioXRango) {
        let contenedorBuscarPrecioXRango = document.createElement("article");
        contenedorBuscarPrecioXRango.innerHTML = `
            <article class="contProducto">
                <img src="" alt="">
                <div class="Contenido">
                    <p>${papita.nombre}</p>
                    <p>${papita.precio}</p>
                </div>
                <div>
                    <button class="btn-comprar">Agregar al carrito</button>
                </div>
            </article>
        `;
        btnBuscarXRango.appendChild(contenedorBuscarPrecioXRango);
    }
};


//Categorias
let checkbox1 = document.querySelector("#checkbox1");
checkbox1.addEventListener("change", validaCheckbox1);

let categoría1 = "normal";
function validaCheckbox1(){
    if (this.checked) {
        let categoriasFiltradas = listaPapitas.filter(listaPapitas => (listaPapitas.categoria === categoría1));
        console.log(categoriasFiltradas);
    } else {
        console.log("Nope!");
    }
};

let checkbox2 = document.querySelector("#checkbox2");
checkbox2.addEventListener("change", validaCheckbox2);

let categoría2 = "premium";
function validaCheckbox2(){
    if (this.checked) {
        let categoriasFiltradas = listaPapitas.filter(listaPapitas => (listaPapitas.categoria === categoría2));
        console.log(categoriasFiltradas);
    } else {
        console.log("Nope!");
    }
};

let checkbox3 = document.querySelector("#checkbox3");
checkbox3.addEventListener("change", validaCheckbox3);

let categoría3 = "deluxe";
function validaCheckbox3(){
    if (this.checked) {
        let categoriasFiltradas = listaPapitas.filter(listaPapitas => (listaPapitas.categoria === categoría3));
        console.log(categoriasFiltradas);
    } else {
        console.log("Nope!");
    }
};





//Carrito de compras

let carrito = [];
const divisa = "$";
const DOMitems = documen.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("boton-vaciar")

// Funciones

function renderizarProductos () {
    listaPapitas.forEach( (info) => {
        //Estructura de cada card
        const miNodo = document.createElement("div")
        miNodo.classList.add("card", "col-sm-4")

      // body
        const miNodoBody = document.createElement("div");
        miNodoBody.classList.add("card-body");

      // titulo
        const miNodoTitulo = document.createElement("h5");
        miNodoTitulo.classList.add("card-title");
        miNodoTitulo.textContent = info.nombre;
    }
    )
}
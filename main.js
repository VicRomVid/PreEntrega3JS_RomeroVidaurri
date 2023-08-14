let lista = []

let elementoAgregar = document.getElementById("botonAgregar");

let elementoGuardar = document.getElementById("botonGuardar");

elementoAgregar.addEventListener("click",
    function agregarALista(){
    const especie = document.getElementById("especie").value
    const observaciones = parseInt(document.getElementById("observaciones").value)
    if(!isNaN(observaciones) && observaciones >0){
        const item = {especie, observaciones};
        lista.push(item);
        mostrarLista();
    }else{
        alert("Ingresa una cantidad válida")
    }
});

elementoGuardar.addEventListener("click",
    function guardarLista(){
    const listaJSON = JSON.stringify(lista);
    localStorage.setItem("listaData", listaJSON)
    alert("Lista guardada en el localstorage")
});

function mostrarLista() {
    const listaElement = document.getElementById("lista")
    listaElement.innerHTML="";

    lista.forEach((item)=>{
        const listItem = document.createElement("li")
        listItem.textContent = `${item.especie} - observaciones: ${item.observaciones}`
        listaElement.appendChild(listItem)
    })  
};
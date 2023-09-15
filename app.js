const Chance = require("chance");
const telefonos = require("./agenda");
const agenda = require("./agenda");

const chance = new Chance();

const randomName = chance.name()
const randomAge = chance.age()
const randomEmail = chance.email()

// console.log(randomAge, randomEmail, randomName)


const mostrarAgenda = () =>{

    const cantidad = telefonos.length
    console.log("la cantidad de telefonos que hay son " + cantidad)

    
}

const mostrarTelefonos = () =>{
    for(i = 0 ; i < telefonos.length; i++){
        console.log("los contactos son "+ telefonos[i].name + " " + telefonos[i].number)
    }
    
}

const mostrarporID = (id) =>{
    const contacto = telefonos.find((elemento) => elemento.id === id)
    console.log("el contacto es " + contacto.name)
}

const mostrarporTelefono = (tel) =>{
    const contacto = telefonos.find((elemento) => elemento.number === tel)
    console.log("el contacto es " + contacto.name)
}


let lista = [];
const agregarContacto = (listado) =>{
   
    let nuevo = {
        id: 5,
        name: "Gaspar",
        number: "3514566452",
    }

    listado.push(nuevo);

    for(i = 0 ; i < listado.length; i++){
        console.log("los contactos son "+ listado[i].name + " " + listado[i].number)
    }
}

//borrar

const borrarContacto = (numero) =>{
    let telefonosNuevo = telefonos.filter((elemento) => elemento.number !== numero);
    console.log("los contactos son", telefonosNuevo)
    
}

const borrarContactoID = (id) =>{
    let telefonosNuevo = telefonos.filter((elemento) => elemento.id !== id);
    console.log("los contactos son", telefonosNuevo)
    
}

const modificarContactoID = (id, nombre) =>{
    let telefonoActualizado = telefonos.find((elemento) => elemento.id === id);
    telefonoActualizado.name = nombre;
    console.log(telefonoActualizado);
}

const modificarContactoID2 = (id, nombre, numero) =>{
    let telefonoActualizado = telefonos.find((elemento) => elemento.id === id);
    telefonoActualizado.name = nombre;
    telefonoActualizado.number = numero;
    console.log(telefonoActualizado);
}



// mostrarAgenda();
// mostrarTelefonos();
// mostrarporID(1);
// mostrarporTelefono("39-23-6423122");
// agregarContacto(lista)
// borrarContacto("39-23-6423122");
// borrarContactoID(1);
// modificarContactoID(1,"gamal")
modificarContactoID2(1, "german", 351);
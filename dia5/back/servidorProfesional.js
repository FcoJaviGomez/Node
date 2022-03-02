const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

class Profesional {
    constructor(nombre, anios, colorDePelo, colorDeOjos, i) {
        this.nombre = nombre;
        this.anios = anios;
        this.colorDePelo = colorDePelo;
        this.colorDeOjos = colorDeOjos;
        this.i = i
    }
}

let usuarios = []

app.get('/profesional', (request, response) => {

    let respuesta;
    let i = request.query.i

    if (usuarios.length > 0 && i == null) {
        respuesta = { error: false, message: "Hay profesionales  y no importa la posicion", res: usuarios, res_error: false }
    }
    else if (usuarios.length <= i) {
        respuesta = { error: false, message: "No hay profesionales en la posicion", res_error: true }
    }
    else if (usuarios.length > 0 && i != null) {
        respuesta = { error: false, message: "Hay profesional y si importa la posicion", res: usuarios[i], res_error: false }
    }
    else {
        respuesta = { error: false, message: "No hay profesional o no importa la posicion", res: usuarios, res_error: false }
    }
    response.send(respuesta)
})

app.post('/profesional', (request, response) => {

    let respuesta;
    console.log(request.body)

    if (!existeUsuario(request.body)) {

        usuarios.push(request.body)

        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Usuario creado', resultado: usuarios
        };
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'Usuario ya existe', resultado: null
        };
    response.send(respuesta);
})

app.put('/profesional', (request, response) => {
    let respuesta;
    let nombre = request.body.nombre
    let anios = request.body.anios
    let colorDePelo = request.body.colorDePelo
    let colorDeOjos = request.body.colorDeOjos
    let i = request.body.i
    if (usuarios.length < i || i === "") {
        respuesta = { error: false, message: "No existe el indice en la array" }
    }
    else if (usuarios.length == 0) {
        respuesta = { error: false, message: "No existe un profesional, usa POST para crearlo" }
    }
    else {
        respuesta = { error: false, message: "Profesional modificado correctamente", res: usuarios }
        usuarios[i] = new Profesional(nombre, anios, colorDePelo, colorDeOjos)
    }


    response.send(respuesta)
})

app.delete('/profesional', (request, response) => {
    let respuesta;
    let i = request.body.i


    if (usuarios.length > i && i !== "") {
        usuarios.splice(i, 1)
        respuesta = { error: false, message: "Eliminado Correctamente", res: usuarios[i] }
    }
    else {
        respuesta = { error: false, message: "No se ha eliminado ningun Profesional" }
    }
    response.send(respuesta)
})


function existeUsuario(usuario) {

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === usuario.nombre && usuarios[i].anios === usuario.anios) {
            return true
        }
    }
    return false
}



app.listen(PORT, "localhost", () => {
    console.log("Server is listen on port " + PORT + " on localhost EXPRESS");
})
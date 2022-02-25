const { request, response } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

const Profesional = require('./claseProfesiona')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let profesional1 = new Profesional("Javi", 27, "Masculino", 71, 1.75, "Castaño", "verdes", "Europea", true, "Española", 2, "Actor")
let profesional2 = new Profesional("Pepe", 27, "Masculino", 71, 1.75, "Castaño", "verdes", "Europea", true, "Española", 2, "Actor")


let profesional = []

profesional.push(profesional1)
profesional.push(profesional2)



app.get('/profesional', (request, response) => {
    let respuesta;
    let i = request.query.i

    if (profesional.length > 0 && i == null) {
        respuesta = { error: false, message: "Hay profesionales  y no importa la posicion", res: profesional }

    }
    else if (profesional.length <= i) {
        respuesta = { error: false, message: "No hay profesionales en la posicion", }
    }
    else if (profesional.length > 0 && i != null) {
        respuesta = { error: false, message: "Hay profesional y si importa la posicion", res: profesional[i] }
    }
    else {
        respuesta = { error: false, message: "No hay profesional o no importa la posicion", res: profesional }
    }
    response.send(respuesta)
})


app.post('/profesional', (request, response) => {
    let respuesta;
    let name = request.body.name
    let age = request.body.age
    let genre = request.body.genre
    let weight = request.body.weight
    let height = request.body.height
    let hairColor = request.body.hairColor
    let eyeColor = request.body.eyeColor
    let race = request.body.race
    let isRetired = request.body.isRetired
    let nationality = request.body.nationality
    let oscarsNumber = request.body.oscarsNumber
    let profession = request.body.profession

    añadirProfesional = {
        name: name, age: age, genre: genre, weight: weight, height: height, hairColor: hairColor, eyeColor: eyeColor,
        race: race, isRetired: isRetired, nationality: nationality, oscarsNumber: oscarsNumber, profession: profession
    }
    respuesta = { error: false, message: "Profesional creado correctamente", res: profesional }
    profesional.push(añadirProfesional)
    response.send(respuesta)
})

app.put('/profesional', (request, response) => {
    let respuesta;
    let name = request.body.name
    let age = request.body.age
    let genre = request.body.genre
    let weight = request.body.weight
    let height = request.body.height
    let hairColor = request.body.hairColor
    let eyeColor = request.body.eyeColor
    let race = request.body.race
    let isRetired = request.body.isRetired
    let nationality = request.body.nationality
    let oscarsNumber = request.body.oscarsNumber
    let profession = request.body.profession
    let i = request.body.i



    if (profesional.length <= i) {
        respuesta = { error: false, message: "No existe el indice en la array" }
    }
    else if (profesional.length == 0) {
        respuesta = { error: false, message: "No existe un profesional, usa POST para crearlo" }
    }
    else {
        respuesta = { error: false, message: "Profesional modificado correctamente", res: profesional }
        profesional[i] = new Profesional(name, age, genre, weight, height, hairColor, eyeColor,
            race, isRetired, nationality, oscarsNumber, profession)
    }


    response.send(respuesta)
})

app.delete('/profesional', (request, response) => {
    let respuesta;
    let i = request.body.i
    profesional.splice([i], 1)
    respuesta = { error: false, message: "Eliminado Correctamente", res: profesional }
    response.send(respuesta)
})


app.listen(PORT, "localhost", () => {
    console.log("Server is listen on port " + PORT + " on localhost EXPRESS");
})
const { request, response } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

const Profesional = require('./claseProfesiona')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// let profesional = new Profesional("Javi", 27, "Masculino", 71, 1.75, "Castaño", "verdes", "Europea", true, "Española", 2, "Actor")
let profesional = null

app.get('/profesional', (request, response) => {
    let respuesta;
    if (profesional != null) {
        respuesta = { error: false, message: "Hay profesional", res: profesional }
    }
    else {
        respuesta = { error: false, message: "No existe profesional", res: profesional }
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
    if (profesional == null) {
        profesional = {
            name: name, age: age, genre: genre, weight: weight, height: height, hairColor: hairColor, eyeColor: eyeColor,
            race: race, isRetired: isRetired, nationality: nationality, oscarsNumber: oscarsNumber, profession: profession
        }
        respuesta = { error: false, message: "Profesional creado correctamente", res: profesional }
    }
    else {
        respuesta = { error: false, message: "Ya existe Profesional, usa PUT para modificarlo", res: profesional }
    }
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
    if (profesional == null) {
        respuesta = { error: false, message: "No existe Profesional, usa POST para crearlo", }
    }
    else {
        profesional.name = name;
        profesional.age = age;
        profesional.genre = genre;
        profesional.weight = weight; respuesta = { error: false, message: "Hay profesional y si importa la posicion", res: profesional }
        profesional.height = height;
        profesional.hairColor = hairColor;
        profesional.eyeColor = eyeColor;
        profesional.race = race;
        profesional.isRetired = isRetired;
        profesional.nationality = nationality
        profesional.oscarsNumber = oscarsNumber;
        profesional.profession = profession
        respuesta = { error: false, message: "Profesional modificado correctamente", res: profesional }
    }
    response.send(respuesta)
})

app.delete('/profesional', (request, response) => {
    let respuesta;
    if (profesional != null) {
        profesional = null
        respuesta = { error: false, message: "Eliminado Correctamente", res: profesional }
    }
    else {
        respuesta = { error: false, message: "No existe profesional, use POST para agregar" }
    }
    response.send(respuesta)
})



app.listen(PORT, "localhost", () => {
    console.log("Server is listen on port " + PORT + " on localhost EXPRESS");
})
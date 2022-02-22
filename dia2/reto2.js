const fs = require('fs')
const fsPromise = require('fs/promises')


const Persona = require('./person')

let persona1 = new Persona("Javi", "Gómez", 27)
let myJson = JSON.stringify(persona1)
// console.log(persona1);

fsPromise.writeFile('reto2.json', myJson)
    .then(function () {
        console.log("hola");
        return fsPromise.readFile('reto2.json', 'utf-8')
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })




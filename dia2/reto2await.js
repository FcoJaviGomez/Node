const fs = require('fs')
const fsPromise = require('fs/promises')


const Persona = require('./person')

let persona1 = new Persona("Javi", "Gómez", 27)
let myJson = JSON.stringify(persona1)
// console.log(persona1);

async function hola() {
    try {
        await fsPromise.writeFile('reto2.json', myJson)

        const mostrar = await fsPromise.readFile('reto2.json', 'utf-8')
        console.log(JSON.parse(mostrar));
    }

    catch (error) {
        console.log(error);
    }
}

hola()

//     .then(function () {
//     console.log("hola");
//     return fsPromise.readFile('reto2.json', 'utf-8')
// })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
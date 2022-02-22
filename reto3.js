const Persona = require('./person')
const fsPromise = require('fs/promises');

const readline = require('readline')



function pregunta(pregunta) {

    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

let persona1 = new Persona()


pregunta('¿Cual es tu nombre?')
    .then(function (name) {
        persona1.name = name
        console.log('Tu nombre es:' + name);
        return pregunta('¿Cual es tu apellido?')
    })
    .then(function (surname) {
        persona1.surname = surname
        console.log('Tu apellido es:' + surname);
        return pregunta('¿Cuantos años tienes?')
    })
    .then(function (age) {
        persona1.age = age
        console.log('Tus años son:' + age);
        let myJson = JSON.stringify(persona1)
        return fsPromise.writeFile('reto2.json', myJson)
    })
    .then(function () {
        return fsPromise.readFile('reto2.json', 'utf-8')
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })








// fsPromise.writeFile('reto2.json', myJson)
//     .then(function () {
//         console.log("hola");
//         return fsPromise.readFile('reto2.json', 'utf-8')
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// let persona1 = new Persona(name, surname, age)
// let myJson = JSON.stringify(persona1)
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



async function hola() {
    try {
        let persona1 = new Persona()
        let name = await pregunta('¿Cual es tu nombre?')
        persona1.name = name
        console.log('Tu nombre es:' + name);

        let surname = await pregunta('¿Cual es tu apellido?')
        persona1.surname = surname
        console.log('Tu apellido es:' + surname);

        let age = await pregunta('¿Cuantos años tienes?')
        persona1.age = age
        console.log('Tus años son:' + age);


        let myJson = JSON.stringify(persona1)
        await fsPromise.writeFile('reto2.json', myJson)

        const mostrar = await fsPromise.readFile('reto2.json', 'utf-8')
        console.log(JSON.parse(mostrar));
    }

    catch (error) {
        console.log(error);
    }
}


// MAIN


hola()












// pregunta('¿Cual es tu nombre?')
//     .then(function (name) {
//         persona1.name = name
//         console.log('Tu nombre es:', name);
//         return pregunta('¿Cual es tu apellido?')
//     })
//     .then(function (surname) {
//         persona1.surname = surname
//         console.log('Tu apellido es:', surname);
//         return pregunta('¿Cuantos años tienes?')
//     })
//     .then(function (age) {
//         persona1.age = age
//         console.log('Tus años son:', age);
//         let myJson = JSON.stringify(persona1)
//         return fsPromise.writeFile('reto2.json', myJson)
//     })
//     .then(function () {
//         return fsPromise.readFile('reto2.json', 'utf-8')
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
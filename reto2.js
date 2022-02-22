const fs = require('fs')

const Persona = require('./person')

let persona1 = new Persona("Javi", "Gómez", 27)
let myJson = JSON.stringify(persona1)
// console.log(persona1);

fs.writeFile('reto2.json', myJson, () => {
    fs.readFile('reto2.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
        }
        else {
            console.log(data)
        }

    })
})




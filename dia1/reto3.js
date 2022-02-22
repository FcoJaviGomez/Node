const fs = require('fs')
const readline = require('readline');
const Persona = require('./person')


let rl = readline.createInterface(process.stdin, process.stdout);

rl.question('What is your name? ', (name) => {
    console.log('Your name is: ' + name);

    rl.question('What is your surname? ', (surname) => {
        console.log('Your surname is: ' + surname);
        rl.question('What is your age? ', (age) => {
            console.log('Your age is: ' + age);
            rl.close();

            let persona1 = new Persona(name, surname, age)
            let myJson = JSON.stringify(persona1)
            fs.writeFile('reto3.json', myJson, () => {
                fs.readFile('reto3.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err)
                    }
                    else {
                        console.log(data)
                    }

                })
            })

        });
    });
});















// fs.writeFile('reto3.json', myJson, function () {
//     fs.readFile('reto3.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         console.log(data)
//     })
// })




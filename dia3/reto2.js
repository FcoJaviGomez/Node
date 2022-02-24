const express = require('express');
const app = express();

app.get('/', function (request, response) {
    response.send('Hola servidor Express');
    console.log('Hola consola Express');
})

app.post('/', function (request, response) {
    response.send('Nuevo Post');
    console.log('Nuevo Post');
})

app.put('/', function (request, response) {
    response.send('Nuevo Put');
    console.log('Nuevo Put');

})

app.delete('/', function (request, response) {
    response.send('Nuevo delete');
    console.log('Nuevo delete');

})
app.listen(7000)
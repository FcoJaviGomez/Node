const express = require('express');
const app = express();


app.get('/', function (request, response) {
    console.log('Petición recibida del cliente');
    console.log('request URL: ' + request.url);
    console.log('Request Method: ' + request.method);
    console.log(request.headers['user-agent'])
    let mensaje = {
        status: 200,
        ok: true,
        message: 'Recibido'
    }
    response.send(JSON.stringify(mensaje))
})

app.get('/bye', function (request, response) {
    // console.log('Petición recibida del cliente');
    // console.log('request URL: ' + request.url);
    // console.log('Request Method: ' + request.method);
    // console.log(request.headers['user-agent'])

    let mensajeAdios = {
        status: 200,
        ok: true,
        message: 'Adios'
    }
    response.send(JSON.stringify(mensajeAdios))

})
app.listen(5000)
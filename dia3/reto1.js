const http = require('http');

const server = http.createServer(function (request, response) {

    console.log('Petición recibida del cliente');
    console.log('request URL: ' + request.url);
    console.log('Request Method: ' + request.method);
    console.log(request.headers['content-type']);
    console.log(request.headers['content-length']);
    console.log(request.headers['user-agent']);

    if (request.url == '/bye') {
        let mensajeAdios = {
            status: 200,
            ok: true,
            message: 'Adios'
        }
        response.write(JSON.stringify(mensajeAdios))
    }
    else {
        let mensaje = {
            status: 200,
            ok: true,
            message: 'Recibido'
        }
        response.write(JSON.stringify(mensaje))
    }
    response.end();

});
server.listen(3000)







// console.log(('Response Status code: ' + response.statusCode));
// console.log('Header request: ' + request.headers.host);
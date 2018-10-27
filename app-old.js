//const http = require('http');

// servidor
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'javier',
            apellidos: 'merino latorre',
            edad: 56,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        // res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');
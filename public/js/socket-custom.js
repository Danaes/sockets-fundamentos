var socket = io();

//Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    user: 'Daniel',
    message: 'Hola mundo!'
}, function(res) {
    console.log('Respuesta Server: ', res);
});

socket.on('enviarMensaje', function(message) {

    console.log('Servidor: ', message);

});
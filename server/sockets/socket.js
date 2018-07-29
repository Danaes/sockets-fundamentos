const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        user: 'Admin',
        message: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*if (message.user)
            callback({
                response: 'Todo salio bien!'
            });
        else
            callback({
                response: 'Todo salio mal!'
            });*/
    })

});
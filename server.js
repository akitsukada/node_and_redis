var redis = require('redis'), redis_cli = redis.createClient();
var io = require('socket.io').listen(3000);


io.sockets.on('connection', function (socket) {

    redis_cli.on('message', function (channel, message) {
        console.log(channel, message);
        io.sockets.emit('count_report', message);
    });
    redis_cli.subscribe('incred');

});

//The port is supplied as the first command line argument
var port = process.argv[2];

var net = require('net');

var server = net.createServer(function (socket) {
    date_object = new Date();
    var data = "";
    var month = date_object.getMonth() + 1;
    month = month.toString();
    if (month.length < 2) { month = '0' + month; }
    data = date_object.getFullYear().toString() + '-' + month + '-' + date_object.getDate().toString() + ' ' + date_object
        .getHours().toString() + ':' + date_object.getMinutes().toString() +
        '\n';
    socket.write(data);
    socket.end();
});


server.listen(port);


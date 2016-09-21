var net = require('net');

function pad(n){
  return n < 10 ? '0' + n : n;
}

server = net.createServer(function(socket){
    var d = new Date();
    var result = d.getFullYear() + "-" 
                  + pad(d.getMonth() + 1) + "-"
                  + pad(d.getDate()) + " "
                  + pad(d.getHours()) + ":"
                  + pad(d.getMinutes()) + "\n";
    socket.end(str);
});

server.listen(process.argv[2]);

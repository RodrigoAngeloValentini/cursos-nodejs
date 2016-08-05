var http = require('http');
var EventEmitter = require('events').EventEmitter;

function handleRequest(request,response){
  response.writeHead(200);
  return response.end('Hello world');
}

var server = http.createServer(handleRequest);
var ee = new EventEmitter();

server.on('connection',function(client){
  ee.emit('newConnection',{
    num1:10,
    num2:5
  });
})

ee.on('newConnection',function(data){
  console.log('Hey,I am a new connection');
  var count = parseInt(data.num1) + parseInt(data.num2);
});

server.listen(3000,'127.0.0.1');

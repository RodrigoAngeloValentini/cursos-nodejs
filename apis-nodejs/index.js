var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
//var cors = require('cors');

var app = express();
var server = http.createServer(app);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//cors
// var whiteList = [
//
// ];

// app.use(cors({
//     origin:function(origin,cb){
//         var index = whiteList.index(origin);
//         if(index !== -1){
//             cb(null,index);
//         }
//     },
//     methods:['GET','POST','PUT']
// }));

//database
var mongoDb = mongoose.connect('mongodb://localhost/ecommerce').connection;

mongoDb.on('connected',function(){
    console.log('MongoDB is connected');
});
mongoDb.on('error',function(){
   console.log('MongoDB ERROR');
});

//add routes
require('./routes')(app);

//server
server.listen(3000,function(){
  console.log('Express has been started');
});

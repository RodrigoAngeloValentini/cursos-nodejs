var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');

app.set('views','./views');
app.set('view engine','pug');

var sequelize = new Sequelize('mysql://root:root@localhost:3306/expressjs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

var User = sequelize.define('User',{
  name:{
    type:Sequelize.STRING
  },
  lastname:Sequelize.STRING
});

User.sync().then(function(){
  return User.create({
    name:'Leonan',
    lastname:'Luppi'
  });
});

app.get('/users',function(req,res){
  User.findAll()
  .then(function(result){
    res.render('users',{
      message:'List of users',
      data:result
    });
  })
  .catch(function(err){
    console.log('Error=>',err);
  });
});

app.get('/',function(req,res){
  res.render('index',{
    message:'Hello!',
    count:5
  });
});

app.get('/users/create',function(req,res){
  res.render('new_users',{
    message:'Create a user'
  });
});

app.post('/users/create',function(req,res){
  User.create(req.body)
  .then(function(){
    res.render('new_users',{
      message:'Create an user'
    })
  }).catch(function(err){
    console.log('Error=>',err);
  });
});

app.get('/users/:id',function(req,res){
  //User.findOne({
    //where:{
      //id:req.params.id
    //}
  //})
  User.findById(req.params.id)
  .then(function(result){
    res.render('user',{
      message:'A user',
      data:result
    });
  })
  .catch(function(err){
    console.log('Error=>',err);
  });
});

app.listen(3000,'127.0.0.1',function(){
  console.log('The express server has been started...');
});

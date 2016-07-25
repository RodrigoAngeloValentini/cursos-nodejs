function prompt(question, callback){
  var stdin = process.stdin;
  var stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once('data',function(data){
    callback(data.toString().trim());
  })
}
prompt('What is your name',function(data){
  process.stdout.write(data);
  console.log(data);
  process.exit();
})

process.on('exit',function(){
  process.stdout.write('Bye! \n');
})

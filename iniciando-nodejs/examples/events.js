var EventEmmiter = require('events').EventEmmiter;

var ee = new EventEmmiter();

ee.on('ondData',function(){
  console.log('event 1');
});

ee.on('ondData',function event9(){
  console.log('event 2');
});

ee.setMaxListeners(12);

ee.once('onDate',function(){
  console.log('I am an once Listener');
});

ee.removeAllListeners();
ee.emit('onData');

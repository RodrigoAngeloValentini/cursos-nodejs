var app = require('express.io')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

app.http().io();

app.io.route('drawRoute', function(req) {
    req.io.broadcast('draw', req.data);
});

app.get('/', function(req, res) {
    res.sendfile(__dirname.concat('/index.html'));
});

app.post('/', function(req, res) {
    console.log(req.body);
});

app.listen(3000);
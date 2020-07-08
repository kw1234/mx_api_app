var express = require('express');
var app = express();
var urlService = require('./routes/urlService.js');
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,\
 Authorization");
        next();
    });


var api = express.Router();

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/public', 'index.html'));
    });

api.post('/search', urlService.search);

api.post('/highlight/:word', urlService.highlight);

app.use('/api', api);


app.listen(3000);
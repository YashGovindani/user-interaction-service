var express = require('express');
var config = require('./config');
var routes = require('./routes');

var init = async () => {
    var app = express();
    var port = process.env.port || config.app.port;

    app.use(express.json());
    app.use(express.urlencoded({extended : true}));

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'z');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    app.use('/user-interaction', routes);

    app.listen(port, () => {
        console.log("App is listening on port : " + port)
    });
}

init();
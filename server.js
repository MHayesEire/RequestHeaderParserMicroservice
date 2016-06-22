//request header parser microservice
//Request Header Parser Microservice FCC Basejump
'use strict';
var ejs = require('ejs');
var express = require('express');

var app = express();
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
app.use('/', express.static(process.cwd() + '/')); 
      
var port = process.env.PORT || 8080; 


app.get('/', function(req, res) {
    
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     
    var s_ip = ip;
    var lang = req.headers["accept-language"].split(',')[0];
    var browser = req.headers['user-agent'].split(') ')[0].split(' (')[1];
    var tagline = " Server info: ";

console.log(ip + " " + s_ip+ " " + lang + "" + browser + "  " + tagline);

res.render('pages/index', {
        s_ip : s_ip,
        lang : lang,
        browser : browser,
        tagline: tagline
    });
});



app.listen(port,  function () 
{
	
console.log('Node.js ... HERE ... listening on port ' + port + '...');

});
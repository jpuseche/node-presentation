const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const mustacheExpress = require('mustache-express');
 
// parser for request body
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const port = 3000;

app.engine("html", mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

//----------------------------------------- Lab Code Goes Here ----------------------------------------//


//----------------------------------------- Lab Code Goes Here ----------------------------------------//

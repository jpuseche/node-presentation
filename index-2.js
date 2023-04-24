const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require("fs");
const mustacheExpress = require("mustache-express");
 
// parser for request body
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const port = 3000;

app.engine("html", mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

//----------------------------------------- Lab Code Goes Here ----------------------------------------//

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/create-view", (req, res) => {
    res.render("create");
});

app.post("/create-file", urlencodedParser, (req, res) => {
    if (!fs.existsSync("./files")) {
        fs.mkdirSync("./files");
    }

    fs.createWriteStream(`./files/${req.body.filename}.txt`);

    res.render("success", {message: `created ${req.body.filename}.txt successfully`});
});

app.get("/show-view", (req, res) => {
    let text_files = [];
    text_files = fs.readdirSync("./files");

    res.render("show", {text_files: text_files});
});

app.get("/read-view", (req, res) => {
    let text_files = [];
    text_files = fs.readdirSync("./files");

    res.render("read", {text_files: text_files});
});

app.post("/read-file", urlencodedParser, (req, res) => {
    let readStream = fs.createReadStream(`./files/${req.body.filename}`);
    readStream.on("data", (data) => {
        res.render("success", {message: data});
    });
});

app.get("/write-view", (req, res) => {
    let text_files = [];
    text_files = fs.readdirSync("./files");

    res.render("write", {text_files: text_files});
});

app.post("/write-file", urlencodedParser, (req, res) => {
    fileName = req.body.filename;
    let writeStream = fs.createWriteStream(`./files/${fileName}`);
    message = writeStream.write(req.body.writeinput);
    writeStream.end();

    res.render("success", {message: `Se escribio correctament sobre el archivo ${fileName}`});
});

app.listen(port, () => {
    console.log(`listening at port ${port}`);
});

//----------------------------------------- Lab Code Goes Here ----------------------------------------//

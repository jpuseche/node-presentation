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

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/create", urlencodedParser, (req, res) => {
    if (!fs.existsSync("./files")) {
        fs.mkdirSync("./files");
    }

    let fileName = `${req.body.filename}.txt`;

    let writeStream = fs.createWriteStream(`./files/${fileName}`);
    writeStream.write(req.body.writeinput);
    writeStream.end();
    
    res.render("success", {message: `se creo el archivo ${fileName}`});
});

app.get("/show", (req, res) => {
    let text_files = [];

    if (!fs.existsSync("./files")) {
        fs.mkdirSync("./files");
    }

    text_files = fs.readdirSync("./files");

    res.render("show", {text_files: text_files});
});

app.get("/write", (req, res) => {
    let text_files = [];
    text_files = fs.readdirSync("./files");

    res.render("write", {text_files: text_files});
});

app.post("/write", urlencodedParser, (req, res) => {
    let fileName = `${req.body.filename}`;

    let writeStream = fs.createWriteStream(`./files/${fileName}`);
    writeStream.write(req.body.writeinput);
    writeStream.end();

    res.render("success", {message: `Se escribio sobre ${fileName}`});
});

app.get("/read", (req, res) => {
    let text_files = fs.readdirSync("./files");

    res.render("read", {text_files: text_files});
});

app.post("/read", urlencodedParser, (req, res) => {
    let fileName = `${req.body.filename}`;

    let readStream = fs.createReadStream(`./files/${fileName}`);
    readStream.on("data", (data) => {
        res.render("success", {message: data});
    });
});

app.get("/delete", (req, res) => {
    let text_files = fs.readdirSync("./files");

    res.render("delete", {text_files: text_files});
});

app.post("/delete", urlencodedParser, (req, res) => {
    let fileName = `${req.body.filename}`;

    fs.rmSync(`./files/${fileName}`)

    res.render("success", {message: `${fileName} eliminado con exito`});
});

app.listen(port, () => {
    console.log(`listening at port ${port}`);
});

//----------------------------------------- Lab Code Goes Here ----------------------------------------//

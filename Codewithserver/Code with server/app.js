const express = require('express')
//const mongoose = require('mongoose')
const fs = require('fs')
//const url = 'mongodb://localhost/UserDB'
const http = require('http')
const port = 5050
var app = express();
const path = require('path');
const router = express.Router();
var bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
var multer = require('multer')
var upload = multer()

app.get('/reviews',function(req, res){
    res.sendFile(__dirname+'/form.html')
})
app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(path.join(__dirname+"/NavigationMenu.html"));
});

app.get("/vegan", function (request, response){
    data = fs.readFile('C:\\Users\\91895\\Desktop\\HTML\\vegan.html',function(err,data){
        response.setHeader('Content-Type', 'text/html');
        response.send(data);
    })
})

app.get("/vegan", function (request, response){
    response.sendFile(path.join(__dirname+'/vegan.html'));
    });
app.get("/keto", function (request, response){
    response.sendFile(path.join(__dirname+'/Keto.html'));
})

app.get("/faq1", function (request, response){
    response.sendFile(path.join(__dirname+'/faq1.html'));
})

app.get("/faq", function (request, response){
    response.sendFile(path.join(__dirname+'/faq.html'));
})

app.get("/profile", function (request, response){
    response.sendFile(path.join(__dirname+'/Myprofile.html'));
})
//recipe redirects
app.get("/1.html", function (request, response){
    response.sendFile(path.join(__dirname+'/1.html'));
})
app.get("/2.html", function (request, response){
    response.sendFile(path.join(__dirname+'/2.html'));
})
app.get("/3.html", function (request, response){
    response.sendFile(path.join(__dirname+'/3.html'));
})
app.get("/4.html", function (request, response){
    response.sendFile(path.join(__dirname+'/4.html'));
})
app.get("/5.html", function (request, response){
    response.sendFile(path.join(__dirname+'/5.html'));
})
app.get("/6.html", function (request, response){
    response.sendFile(path.join(__dirname+'/6.html'));
})

app.get("/login", function (request, response){
    response.sendFile(path.join(__dirname+'/login.html'));
})
app.get("/log", function (request, response){
    response.sendFile(path.join(__dirname+'/log.html'));
})
app.get("/reviews", function (request, response){
    response.sendFile(path.join(__dirname+'/reviews.html'));
})
//start the server
//app.engine('html',require('ejs').renderFile)
//app.set('view engine','html')
//app.set('views','/views')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(upload.array())
app.use(express.static(path.join(__dirname,'public')))

app.post('/',function(req, res){
    MongoClient.connect('mongodb://127.0.0.1:27017',function(err, client){
        const db = client.db("review")
        db.collection("reviewdetails").insertOne(req.body)
        //res.send("Recieved")
        res.redirect("/")
    })
    // console.log(req.body);
    //res.send("Review recieved")
})
app.listen(port,function(){
    console.log('server at '+port)
});
/*
/////////////////////////////////
const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost/BooksDB"

const app = express();
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected');
})

app.use(express.json())
const bookRouter = require('./routes/books')
app.use('/books',bookRouter)

app.listen(9000, function(){
    console.log('server started')
})

/*
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
//Read form saved as form.pug
app.get('/', function(req, res){
 res.render('form');
});
//Creating a view
app.set('view engine', 'pug');
app.set('views', './views');
// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));
app.post('/', function(req, res){
 console.log(req.body);
 res.send("Request is received!");
});
app.listen(3000);*/
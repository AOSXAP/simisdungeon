const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose');
const ejs = require('ejs');
const nodemon = require('nodemon');
const connectDB = require('./db/connect')
const Article = require('./db/model');
var bodyParser = require("body-parser");

const app = express();

bodyParser.urlencoded({ extended: false });

app.use(bodyParser.urlencoded({ extended: false }));


connectDB();

app.set('view engine' , ejs);

app.use(express.static(__dirname + '/public'));


app.get('/all', (req,res) => {
    Article.find({}, (err, result) => {
        if (err) {
            console.log(chalk.red(err));
        } else {
            res.render('all.ejs', {result})
        }
    });
})

app.get('/', (req,res) => {
    res.render('main.ejs');
})

app.get('/article/:id', (req,res) => {
    console.log(req.params.id);
    Article.findById(req.params.id, function (err, result) {
        res.render('id.ejs',{result})
     });


})


app.get('/add-posts-audx' , (req,res) => {
    res.sendFile(__dirname + '/addPost/add.html');
})


app.post("/add-posts-audx", (req, res) => {
  const password = req.body.password;
  if(password=="papusha32x"){
      const author = req.body.author;
      const body = req.body.story;
      const title = req.body.title

      const articl = new Article({
        title,
        author,
        body
      });

      console.log(articl);

      articl.save();
      res.send('Post Posted go <a href="/"> home </a>')

  }else{
      res.send('bad password xd')
  }
});

app.get('/all-posts', (req,res) => {
    Article.find({}, function (err, result) {
        res.render('allposts.ejs', { result })
    });
})




app.use('/', (req,res) => {
    res.render('404.ejs')
})


let port = process.env.PORT || 5200;

app.listen(port, (err) => {
    if(!err){
        console.log(chalk.blue('Succesfully loaded'));
    }else{
        console.log(chalk.red(err));
    }
})









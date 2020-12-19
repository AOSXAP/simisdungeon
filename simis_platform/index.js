/*
const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose');
const ejs = require('ejs');
const nodemon = require('nodemon');
const connectDB = require('./db/connect')
const Article = require('./db/model');

connectDB();



(async function name() {
    await Article.updateMany({}, { $set: { new: "foo" } });
})();



const axl = new Article({
    title: 'Axl', author: 'Rose', body: 'dsdsad',new:'dsadsadssad'
});

console.log(axl)

axl.save();



Article.find({}, (err,result) => {
    if(err){
        console.log(err);
    }else{
        console.log(result)
    }
});



colectie - schema 

new Schema({ url: String, text: String, id: Number}, 
           { collection : 'question' });   // collection name
           

*/
const mongoose = require('mongoose');
const { Schema } = mongoose;

const simiScheme = new Schema({
    title: String, 
    author: String,
    body: String,
    date: { type: Date, default: Date.now }
});

const Article = mongoose.model('Test', simiScheme);

module.exports = Article;
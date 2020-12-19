const mongoose = require('mongoose')
const chalk = require('chalk');

const db = 'mongodb+srv://aosxap:monti2004@cluster0.fn6nz.mongodb.net/Test0?retryWrites=true&w=majority';

const connectDB = async () => {

    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(chalk.blue("Connected to DB"));
    } catch (err) {
        console.log(err);
    }

}

module.exports = connectDB;
const mongoose = require('mongoose');

const url = "mongodb+srv://first:first@cluster0.zpldju3.mongodb.net/?retryWrites=true&w=majority"

const connection = mongoose.connect(url).then(()=>{
console.log('data base is connected');
})

module.exports = connection;
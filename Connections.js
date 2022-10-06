const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/lanatus').then(()=>{
console.log('data base is connected');
})

module.exports = connection;
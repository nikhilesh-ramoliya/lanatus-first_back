const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    id: String,
    rank: Number,
    title: String,
    fullTitle:String,
    year: Number,
    image:String,
    crew: String,
    imDbRating: Number,
    imDbRatingCount: Number
});
const showSchema = new mongoose.Schema({
    id: String,
    rank: Number,
    title: String,
    fullTitle:String,
    year: Number,
    image:String,
    crew: String,
    imDbRating: Number,
    imDbRatingCount: Number
});


exports.movie = mongoose.model('movie', movieSchema);
exports.show = mongoose.model('show', movieSchema);


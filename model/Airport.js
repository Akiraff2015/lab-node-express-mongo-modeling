const mongoose = require('mongoose');

var AiportSchema = new mongoose.Schema({
	name: String,
	country: String,
	terminals: [],
	opened: Date
});

module.exports = Airport;
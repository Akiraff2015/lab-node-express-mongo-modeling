const mongoose = require('mongoose');

var FlightSchema = new mongoose.Schema({
	from: String,
	to: String,
	airline: String,
	passengers: [PassengersSchema]
});
const mongoose = require('mongoose');

var TerminalSchema = new mongoose.Schema({
	name: String,
	flight: [FlightScema],
	capacity: Number
});
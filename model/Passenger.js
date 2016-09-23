const mongoose = require('mongoose');

var PassengerSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	dob: Date
});
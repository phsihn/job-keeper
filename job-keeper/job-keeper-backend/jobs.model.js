var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Jobs = new Schema({
	jobs_company_name: {
		type: String
	},
	jobs_position: {
		type: String
	},
	jobs_location: {
		type: String
	},
	jobs_submit_date: {
		type: String
	},
	jobs_notes: {
		type: String
	}
});

module.exports = mongoose.model('Jobs', Jobs);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const jobsRoutes = express.Router();
const PORT = 4000;

const Jobs = require('./jobs.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/jobs', {
	useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', function() {
	console.log('MongoDB database connnection is established successfully');
});

// get is used to handle incoming HTTP GET request on the /jobs/URL
//jobs.find is retrieving a list of all jobs items from the mdb database
jobsRoutes.route('/').get(function(req, res) {
	Jobs.find(function(err, job) {
		if (err) {
			console.log(err);
		} else {
			res.json(job);
		}
	});
});

// endpoint for /:id. retrieve job by id.
jobsRoutes.route('/:id').get(function(req, res) {
	let id = req.params.id;
	Jobs.findById(id, function(err, job) {
		res.json(job);
	});
});

// post for jobs (add)
jobsRoutes.route('/add').post(function(req, res) {
	let job = new Jobs(req.body);
	job
		.save()
		.then(job => {
			res.status(200).json({ job: 'job has been added successfully' });
		})
		.catch(err => {
			res.status(400).send('adding new job failed');
		});
});

// a delete method
jobsRoutes.route('/delete').delete(function(req, res) {});

// a post update method
jobsRoutes.route('/update/:id').post(function(req, res) {
	Jobs.findById(req.params.id, function(err, jobs) {
		if (!jobs) res.status(404).send('data is not found');
		else jobs.jobs_company_name = req.body.jobs_company_name;
		jobs.jobs_position = req.body.jobs_position;
		jobs.jobs_location = req.body.jobs_location;
		jobs.jobs_submit_date = req.body.jobs_submit_date;
		jobs.jobs_notes = req.body.jobs_notes;

		jobs
			.save()
			.then(jobs => {
				res.json('Job has been updated');
			})
			.catch(err => {
				res.status(400).send('Update not possible');
			});
	});
});

app.use('/jobs', jobsRoutes);

app.listen(PORT, function() {
	console.log('Server is running on Port : ' + PORT);
});

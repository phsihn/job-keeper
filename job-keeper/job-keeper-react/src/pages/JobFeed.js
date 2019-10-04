import React, { Component } from 'react';
import JobForm from '../components/JobForm';

import axios from 'axios';

import JobRow from '../components/JobRow';

class JobFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [],
			displayJobForm: false
		};
	}

	getData = () => {
		axios
			.get('http://localhost:4000/jobs/')
			.then(response => {
				this.setState({ jobs: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	displayJobForm = () => {
		this.getData();
		this.setState({
			displayJobForm: !this.state.displayJobForm
		});
	};

	// gets the data
	componentDidMount() {
		this.getData();
	}

	jobsList() {
		return this.state.jobs.map(function(currentJob, i) {
			return <JobRow job={currentJob} key={i} />;
		});
	}

	render() {
		let jobForm;

		if (this.state.displayJobForm) {
			jobForm = <JobForm update={this.displayJobForm} />;
		}
		return (
			<React.Fragment>
				<table className='table is-fullwidth'>
					<thead>
						<tr>
							<th>Company Name</th>
							<th>Position</th>
							<th>Location</th>
							<th>Submission Date</th>
							<th>Notes</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>{this.jobsList()}</tbody>
				</table>
				<button className='button is-fullwidth' onClick={this.displayJobForm}>
					Add a Job
				</button>
				{jobForm}
			</React.Fragment>
		);
	}
}

export default JobFeed;

import React, { Component } from 'react';
import JobForm from '../components/JobForm';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Job = props => (
	<tr>
		<td>{props.job.jobs_company_name}</td>
		<td>{props.job.jobs_position}</td>
		<td>{props.job.jobs_location}</td>
		<td>{props.job.jobs_submit_date}</td>
		<td>{props.job.jobs_notes}</td>
		<td>
			<FontAwesomeIcon icon={faEdit} className='fa-fw is-large has-text-link' />
			<FontAwesomeIcon
				icon={faTrashAlt}
				className='fa-fw is-large has-text-link'
			/>
		</td>
	</tr>
);

class JobFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [],
			displayJobForm: false
		};
	}

	displayJobForm = () => {
		this.setState({
			displayJobForm: !this.state.displayJobForm
		});
	};

	// gets the data
	componentDidMount() {
		axios
			.get('http://localhost:4000/jobs/')
			.then(response => {
				this.setState({ jobs: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	jobsList() {
		return this.state.jobs.map(function(currentJob, i) {
			return <Job job={currentJob} key={i} />;
		});
	}

	render() {
		let jobForm;

		if (this.state.displayJobForm) {
			jobForm = <JobForm />;
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

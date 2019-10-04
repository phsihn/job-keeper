import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class JobRow extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}

	delete() {
		axios
			.get('http://localhost:4000/jobs/delete/' + this.props.job._id)
			.then(console.log('Deleted'))
			.catch(err => console.log(this.props.job._id));

		this.props.deleteRow();
	}

	render() {
		return (
			<tr>
				<td>{this.props.job.jobs_company_name}</td>
				<td>{this.props.job.jobs_position}</td>
				<td>{this.props.job.jobs_location}</td>
				<td>{this.props.job.jobs_submit_date}</td>
				<td>{this.props.job.jobs_notes}</td>
				<td>
					<FontAwesomeIcon
						icon={faEdit}
						className='fa-fw is-large has-text-link'
					/>
					<FontAwesomeIcon
						icon={faTrashAlt}
						className='fa-fw is-large has-text-link'
						onClick={this.delete}
					/>
				</td>
			</tr>
		);
	}
}

export default JobRow;

import React, { Component } from 'react';
import axios from 'axios';
import { throwStatement } from '@babel/types';

class JobForm extends Component {
	constructor(props) {
		super(props);

		this.onChangeJobsCompanyName = this.onChangeJobsCompanyName.bind(this);
		this.onChangeJobsPosition = this.onChangeJobsPosition.bind(this);
		this.onChangeJobsLocation = this.onChangeJobsLocation.bind(this);
		this.onChangeJobsSubmitDate = this.onChangeJobsSubmitDate.bind(this);
		this.onChangeJobsNotes = this.onChangeJobsNotes.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			jobs_company_name: '',
			jobs_position: '',
			jobs_location: '',
			jobs_submit_date: '',
			jobs_notes: ''
		};
	}

	onChangeJobsCompanyName(e) {
		this.setState({
			jobs_company_name: e.target.value
		});
	}

	onChangeJobsPosition(e) {
		this.setState({
			jobs_position: e.target.value
		});
	}

	onChangeJobsLocation(e) {
		this.setState({
			jobs_location: e.target.value
		});
	}

	onChangeJobsSubmitDate(e) {
		this.setState({
			jobs_submit_date: e.target.value
		});
	}

	onChangeJobsNotes(e) {
		this.setState({
			jobs_notes: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(`Form submitted:`);
		console.log(`Jobs Company Name: ${this.state.jobs_company_name}`);
		console.log(`Jobs Position: ${this.state.jobs_position}`);
		console.log(`Jobs Location: ${this.state.jobs_location}`);
		console.log(`Jobs Submit Date: ${this.state.jobs_submit_date}`);
		console.log(`Jobs Notes: ${this.state.jobs_notes}`);

		const newJob = {
			jobs_company_name: this.state.jobs_company_name,
			jobs_position: this.state.jobs_position,
			jobs_location: this.state.jobs_location,
			jobs_submit_date: this.state.jobs_submit_date,
			jobs_notes: this.state.jobs_notes
		};

		axios
			.post('http://localhost:4000/jobs/add', newJob)
			.then(res => console.log(res.data));

		this.setState({
			jobs_company_name: '',
			jobs_position: '',
			jobs_location: '',
			jobs_submit_date: '',
			jobs_notes: ''
		});

		this.props.update(true);
	}

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.onSubmit}>
					<div className='field'>
						<label className='label'>Company Name</label>
						<div className='control'>
							<input
								className='input'
								type='text'
								placeholder='e.g Microsoft'
								value={this.state.jobs_company_name}
								onChange={this.onChangeJobsCompanyName}
							/>
						</div>
					</div>

					<div className='field'>
						<label className='label'>Position</label>
						<div className='control'>
							<input
								className='input'
								type='text'
								placeholder='e.g. Software Engineer'
								value={this.state.jobs_position}
								onChange={this.onChangeJobsPosition}
							/>
						</div>
					</div>

					<div className='field'>
						<label className='label'>Location</label>
						<div className='control'>
							<input
								className='input'
								type='text'
								placeholder='e.g Richmond, VA'
								value={this.state.jobs_location}
								onChange={this.onChangeJobsLocation}
							/>
						</div>
					</div>

					<div className='field'>
						<label className='label'>Submission Date</label>
						<div className='control'>
							<input
								className='input'
								type='text'
								placeholder='e.g May 27, 2019'
								value={this.state.jobs_submit_date}
								onChange={this.onChangeJobsSubmitDate}
							/>
						</div>
					</div>

					<div className='field'>
						<label className='label'>Notes</label>
						<div className='control'>
							<input
								className='input'
								type='text'
								placeholder='e.g. Extra Notes'
								value={this.state.jobs_notes}
								onChange={this.onChangeJobsNotes}
							/>
						</div>
					</div>

					<input
						type='submit'
						value='Submit Job'
						className='button is-link'
					></input>
				</form>
			</React.Fragment>
		);
	}
}

export default JobForm;

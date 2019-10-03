import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import 'bulma/css/bulma.css';
import WebFont from 'webfontloader';

WebFont.load({
	google: {
		families: ['Open Sans Condensed', 'Rajdhani', 'Roboto Thin']
	}
});

const styles = {
	background: {
		position: 'absolute',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundAttachment: 'no-repeat',
		height: '100%',
		width: '100%'
	},
	navbar: {
		position: 'absolute'
	},
	title: {
		fontFamily: 'Rajdhani',
		fontSize: '3rem',
		fontWeight: '100',
		color: 'white',
		marginLeft: '12rem',
		marginTop: '-5rem',
		position: 'absolute'
	},
	title2: {
		fontFamily: 'Rajdhani',
		fontSize: '3rem',
		fontWeight: '20',
		position: 'absolute',
		color: 'white',
		marginLeft: '12rem',
		marginTop: '5rem'
	},
	slogan: {
		fontFamily: 'Roboto',
		fontSize: '1.8vw',
		fontStyle: 'italic',
		position: 'relative',
		color: 'white',
		marginLeft: '54.5%',
		marginTop: '10%'
	}
};

class HomePage extends Component {
	render() {
		return (
			<React.Fragment>
				<img
					src={process.env.PUBLIC_URL + '/main-background2.jpg'}
					style={styles.background}
					alt='background-garage'
				/>

				<div className='container'>
					<div style={styles.title}>Ditch all the</div>
					<div style={styles.title2}>excel spreadsheets</div>

					<div style={styles.slogan}>
						Keep track of your job applications where it's meant to
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default HomePage;

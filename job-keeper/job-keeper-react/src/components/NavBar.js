import React, { Component } from 'react';
import { Switch, Link, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import JobFeed from '../pages/JobFeed';

import WebFont from 'webfontloader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faClipboardList,
	faInfoCircle,
	faWarehouse,
	faUserTie
} from '@fortawesome/free-solid-svg-icons';

WebFont.load({
	google: {
		families: ['Open Sans Condensed', 'Rajdhani', 'Roboto']
	}
});

class NavBar extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<div>
						<nav
							className='navbar'
							role='navigation'
							aria-label='main navigation'
						>
							<div className='navbar-brand'>
								<a className='navbar-item is-size-4' href=''>
									<FontAwesomeIcon
										icon={faUserTie}
										className='fa-fw is-large has-text-link'
										style={{ color: 'red' }}
									/>
									<Link
										to='/'
										className='has-text-link'
										style={{ fontFamily: 'Rajdhani' }}
									>
										Kob Jeeper
									</Link>
								</a>

								<a
									role='button'
									className='navbar-burger burger'
									aria-label='menu'
									aria-expanded='false'
									data-target='navbarBasicExample'
								>
									<span aria-hidden='true'></span>
									<span aria-hidden='true'></span>
									<span aria-hidden='true'></span>
								</a>
							</div>

							<div id='navbarBasicExample' className='navbar-menu'>
								<div className='navbar-start'>
									<Link to='/about' className='navbar-item'>
										<FontAwesomeIcon icon={faInfoCircle} className='fa-fw' />
										&nbsp; About
									</Link>

									<div className='navbar-item has-dropdown is-hoverable'>
										<a className='navbar-link'>
											<FontAwesomeIcon
												icon={faClipboardList}
												className='fa-fw'
											/>
											&nbsp; Feeds
										</a>

										<div className='navbar-dropdown'>
											<a className='navbar-item'>Passed</a>
											<a className='navbar-item'>In Progress</a>
											<a className='navbar-item'>Rejected</a>
											<hr className='navbar-divider' />

											<Link to='/job-feed' className='navbar-item'>
												Job Feed
											</Link>
										</div>
									</div>
								</div>

								<div className='navbar-end'>
									<div className='navbar-item'>
										<div className='buttons'>
											<a className='button is-link'>
												<strong>Sign up</strong>
											</a>
											<a className='button is-light'>Log in</a>
										</div>
									</div>
								</div>
							</div>
						</nav>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
						<Route path='/job-feed' component={JobFeed} />
					</div>
				</Switch>
			</Router>
		);
	}
}

export default NavBar;

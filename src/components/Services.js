import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobile } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
	return (
		<div className="services">
			<h1 className="py-5">My Services</h1>
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className='icon' icon={faDesktop} size="2x" />
							</div>
							<h3>Web Development</h3>
							<p>
								Your website will be build with an new proven technologies. I create a fully responsive
								web and mobile applications.
							</p>
						</div>
					</div>
					<div className="col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className='icon' icon={faMobile} size="2x" />
							</div>
							<h3>Android Development</h3>
							<p>
								I will bug fix and add new features for your android application. I got the chance to
								work on a mobile application project for QNB Finansbank.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;

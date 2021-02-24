import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.jpg'
import { Link } from 'react-scroll'
import { faGithub, faLinkedinIn, faMediumM, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" >
            <div className='container'>
                <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo'></img> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to='home' className="nav-link" offset={-110} href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='about' className="nav-link" offset={-110} href="#">about me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='services' className="nav-link" offset={-110} href="#">services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='experience' className="nav-link" offset={-110} href="#">experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='contacts' className="nav-link" offset={-110} href="#">contact me</Link>
                        </li>
                    </ul>
                    <div className="social-container">
                        <a href='https://www.linkedin.com/in/berkay-%C3%B6zay-741206148/' className='linkedin social'>
                            <FontAwesomeIcon icon={faLinkedinIn} size='1.9x' style={{ color: '#fff' }} />
                        </a>
                        <a href='https://github.com/berkayyozayy' className='github social'>
                            <FontAwesomeIcon icon={faGithub} size='1.9x' style={{ color: '#fff' }} />
                        </a>
                        <a href='https://berkayyozayy.medium.com/' className='medium social'>
                            <FontAwesomeIcon icon={faMediumM} size='1.9x' style={{ color: '#fff' }} />
                        </a>
                        <a href='https://twitter.com/berkitto' className='twitter social'>
                            <FontAwesomeIcon icon={faTwitter} size='1.9x' style={{ color: '#fff' }} />
                        </a>
                    </div>

                </div>
            </div>
        </nav>

    )
}

export default Navbar

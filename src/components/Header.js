import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'

export const Header = () => {
    return (
        <div id='home' className='header-wrapper'>
            <div className='main-info'>
                <h1>Software Engineer</h1>
                <Typed
                    className='typed-text'
                    strings={['Web and Mobile Development']}
                    typeSpeed={90}
                    backSpeed={70}
                    loop
                />
                <div className='btn-main-offer'>
                    <a>
                        <Link to='contacts' smooth={true} className='nav-link' offset={-110} href='#'>Contact Me</Link>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header

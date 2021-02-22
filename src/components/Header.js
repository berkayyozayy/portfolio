import React from 'react'
import Typed from 'react-typed'

export const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1>Software Developer</h1>
                <Typed 
                    className='typed-text'
                    strings={['Web and Mobile Development']}
                    typeSpeed={90}
                    backSpeed={70}
                    loop
                />
                <a href='#' className='btn-main-offer'>contact me</a>
            </div>
        </div>
    )
}

export default Header

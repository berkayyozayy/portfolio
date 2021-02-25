import React from 'react'
import author from '../assets/my-image.png'

const AboutMe = () => {
    return (
        <div id='about' className='container py-5'>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className='profile-img' src={author} alt='author'></img>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='about-me-heading'>About Me</h1>
                    <p>
                        I am Berkay and I currently reside in Izmir. I recently graduated from Hasan Kalyoncu University with a Computer Engineering degree. Since then I have been working at different companies.

                        The current company I work for is Metadata where I got the chance to work on a mobile application project for QNB Finansbank. My day to day tasks are identifying and solving bug reports, investigating crash reports and creating new features for the app. The app is written in Kotlin. This is a great experience for me and I do enjoy working on this project, especially knowing that the features I create on the application would be used by millions of people.

                        Prior to my current company I work as a Front-End Engineer at Fitness Hocam. I created a fully responsive real time chat application from scratch. Some of the technologies I used for this web application are React.JS, Firebase and CSS (CSS Flexbox and CSS Grid)

                        Aside from work I do enjoy swimming and making music. I was a competitive swimmer when I was in highschool and I did waterpolo and spearfishing.

                        I work well in a team environment and I am passionate about new technology. I look forward to meeting you all.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

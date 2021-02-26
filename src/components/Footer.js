import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>İzmir, Turkey</p>
                        </div>
                        <div className="d-flex">
                            <a href='tel:+905428420406'>+905428420406</a>
                        </div>
                        <div className="d-flex">
                            <p>berkayyozayy@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <div className='share-icons'>
                                <FacebookShareButton
                                    url={'https://www.berkayozay.com/'}
                                    quote={'Web Developer'}
                                    hashtag='#Front End Developer'
                                >
                                    <FacebookIcon className='mx-3' size={36}></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={'https://www.berkayozay.com/'}
                                    quote={'Web Developer'}
                                    hashtag='#Front End Developer'
                                >
                                    <TwitterIcon className='mx-3' size={36}></TwitterIcon>
                                </TwitterShareButton>
                                <LinkedinShareButton
                                    url={'https://www.berkayozay.com/'}
                                    quote={'Web Developer'}
                                    hashtag='#Front End Developer'
                                >
                                    <LinkedinIcon className='mx-3' size={36}></LinkedinIcon>
                                </LinkedinShareButton>
                            </div>
                        </div>
                        <p className="pt-3 text-center">
                            Copyrights&copy;
                            {new Date().getFullYear()}&nbsp; New Horizon || All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer--container">
            <div className="footer--sns">
                <div className="footer--title">
                    Keep In Touch
                </div>
                <div className="footer--icons">
                    <i class='bx bxl-facebook-circle'></i>
                    <i class='bx bxl-instagram-alt'></i>
                    <i class='bx bxl-linkedin-square'></i>
                    <i class='bx bxl-github'></i>
                </div>
            </div>
            <div className="footer--content__container">
                <div className="footer--content">
                    <div className="footer--content__text">
                        FAQ
                    </div>
                        <div className="footer--content__text">
                            Help Center
                    </div>
                        <div className="footer--content__text">
                            Account
                    </div>
                        <div className="footer--content__text">
                            Cookie Preferences
                    </div>
                </div>
                <div className="footer--content">
                    <div className="footer--content__text">
                        Investor Relations
                    </div>
                        <div className="footer--content__text">
                            Terms of Use
                    </div>
                        <div className="footer--content__text">
                            Redeem Gift Cards
                    </div>
                        <div className="footer--content__text">
                            Legal Notices
                    </div>
                </div>
                <div className="footer--content">
                    <div className="footer--content__text">
                        Corporate Information
                    </div>
                        <div className="footer--content__text">
                            Contact us
                    </div>
                        <div className="footer--content__text">
                            Privacy
                    </div>
                        <div className="footer--content__text">
                            Buy Gift Cards
                    </div>
                </div>
            </div>
            <div className="footer--comment__container">
                <div className="footer--comment">
                    Website is designed and developed by Ryan Park for demo purposes
                </div>
                <div className="footer--comment">
                    @ 2021 All Rights Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
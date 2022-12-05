import React from 'react'
import "./footer.css"
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <h1 className="footer__title">NitFolio</h1>

                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Project</a>
                        </li>
                        <li>
                            <a href="#services" className="footer__link">Services</a>
                        </li>
                    </ul>
                    <div className="footer__social">
                        <a
                            href="https://www.instagram.com/"
                            className='home__social-icon'
                            target="_blank">
                            <i className='bx bxl-instagram'></i>
                        </a>


                        <a href='https://www.facebook.com/'
                            className='home__social-icon'
                            target="_blank">
                            <i class="bx bxl-facebook"></i>
                        </a>


                        <a href='https://www.linkedin.com/in/nitesh-kumar-0114871b3/'
                            className='home__social-icon'
                            target="_blank">
                            <i class="bx bxl-linkedin"></i>
                        </a>

                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                            className='home__social-icon' target="_blank">
                            <i class="uil uil-envelope"></i>
                        </a>
                    </div>
                    <span className="footer__copy">2022.
                    copyright@nitfolio.com. 
                    All rigths reserved
                    </span>
                </div>
            </footer>
        </>
    )
}

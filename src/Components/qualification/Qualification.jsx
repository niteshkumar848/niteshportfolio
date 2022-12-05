import React, {useState} from 'react'
import "./qualification.css";
export default function Qualification() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 ? 
                        "qualification__button qualification__active  button--flex"  
                    : "qualification__button  button--flex"
                    }
                    onClick={() => toggleTab(1)}
                    >
                    
                        <i className="uil uil-graduation-cap 
                        qualification__icon"></i>  Education
                    </div>

                    <div   className={
                        toggleState === 2 ? 
                        "qualification__button qualification__active  button--flex" :
                     "qualification__button  button--flex"
                    }
                    
                    onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt 
                        qualification__icon"></i> Experience
                    </div>
                    </div>
                <div className="qualification__sections">
                    <div 
                    className={toggleState === 1 ? 
                    "qualification__content qualification__content-active" :
                     "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Master Of Computer Application(MCA)</h3>
                                <span className="qualification__subtitle">
                                    GEU University
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2020 - 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__round">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Bachler of Computer Application(BCA)</h3>
                                <span className="qualification__subtitle">
                                    BBD University
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2017 - 2020
                                </div>
                            </div>
                        </div>





                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> MERN Stack</h3>
                                <span className="qualification__subtitle">
                                    Duct-Intitute
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2022- 2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__round">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Developer </h3>
                                <span className="qualification__subtitle">
                                NATIONAL INSTITUTE & INFORMATION TECHNOLOGY-
                                HARIDWAR CENTRE
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2021
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={toggleState === 2 ? 
                    "qualification__content qualification__content-active" :
                     "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Web Designer</h3>
                                <span className="qualification__subtitle">
                                    IT Comapney - Delhi
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2020  
                                </div>
                            </div>
                            <div>
                                <span className="qualification__round">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title"> Graphic Desginer</h3>
                                <span className="qualification__subtitle">
                                    DG companey 
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                     2021
                                </div>
                            </div>
                        </div>





                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Full Stack</h3>
                                <span className="qualification__subtitle">
                                    Duct-Intitute
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2022    
                                </div>
                            </div>
                            <div>
                                <span className="qualification__round">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Developer(Front-end) </h3>
                                <span className="qualification__subtitle">
                                NATIONAL INSTITUTE -
                                HARIDWAR CENTRE
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

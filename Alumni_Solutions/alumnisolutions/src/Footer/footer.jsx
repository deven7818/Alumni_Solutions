import React, { Component } from 'react';
import './FooterStyle.css';



class Footer extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="main-footer  ">
                    <div className="footer-middle">
                        <div className="container-fluid">
                            <div className="row">
                                {/* Column 1*/}
                                <div className="col-md-4 col-sm-6 ">
                                    <h2>Contact</h2>
                                    <ul className="list-unstyled footeritems">
                                        <li>Sector no.2,Pramod Nagar</li>
                                        <li>9,Adarsh Colony,</li>
                                        <li>Deopur,Dhule-424001</li>
                                        <li>MO-: +91-9404191955 </li>
                                    </ul>
                                </div>

                                {/* Column 2*/}
                                <div className="ft col-md-4 col-sm-6">
                                    <h2>Services</h2>

                                    <ul className="list-unstyled footeritems">
                                        <h4>WEBSITE DESIGN & DEVELOPMENT</h4>
                                        <h4>ANDROID DEVELOPMENT</h4>
                                        <h4>DIGITAL MARKETING</h4>
                                        <h4>MACHINE LEARNING</h4>
                                        <h4>CONSULTING</h4>
                                        <br />
                                    </ul>
                                </div>

                                 {/* Column 1*/}
                                 <div className="col-md-4 col-sm-6 contlink">
                                    <h2>HAVE ANY QUESTION?</h2>
                                    <a href="/contact" className="btn btn-primary btn-lg" role="button">
                                        Contact Us
                                    </a>
                                </div>



                            </div>
                            {/* Footer Bottom */}
                            <div className="footer-bottom">
                                <p className="text-xt-center">
                                    &copy;{new Date().getFullYear} Alumni Solutions - All Rights Reserved
                </p>

                            </div>

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Footer;

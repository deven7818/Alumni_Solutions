import React, { Component } from 'react';
import './AboutStyle.css';

class About extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="bagc">
                <h1 className="hzoom text-center">About Us</h1>
                    <div className="img ">  </div>
                    
                    
                    
                    <p className="text-center mt-5">    
                    We offer value-added services and solutions for product launch and marketing,<br/>
                     growth marketing, sales as a service and more.


                    </p>
                </div>

            </React.Fragment>
        );
    }
}

export default About;
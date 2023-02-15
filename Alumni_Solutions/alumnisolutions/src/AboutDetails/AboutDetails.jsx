import React, { Component } from 'react';

import { Flex } from "@chakra-ui/react";
import './AboutDetails.css';


class AboutDetails extends Component {


    render() {
        return (
            <React.Fragment>
            <h1>About Us</h1>
            
                <div className="abouthomeimage ">
                    
                </div>
                <div className="row aboutlgbclr "data-aos="fade-up">
                   
                    <div className=" col-lg-8 col-md-8 col-sm-8 " >
                        <h2 className="mainhead">ABOUT COMPANY</h2>

                        <p className="aboutdescription">Alumni Solutions specialize in building intelligent products backed by 
                        high-end technology, that clients love and users enjoy. 
                        We understand what makes a product “great” - the laws of visual 
                        hierarchy is good designing, simplified coding, engaging UX, we know how to make brands make an impression. 
                        By adopting the latest technology stack in AI, machine learning, deep learning, data science, etc. 
                        and complementing it with human-centric UI/UX design, data, and analytics, etc.
                         we offer clients innovative products and solutions that are futuristic and result-driven.
                    </p>

                    </div>
                    <div className="aboutimage"></div>
                </div>


                <div className="row aboutrgbclr" data-aos="fade-down">
                <div className="  visionimage "></div>
                    <div className=" col-lg-8 col-md-8 col-sm-8 ">
                        <h2 className="abouthead">OUR VISION</h2>
                            <p className="aboutdescription">To Develop Mobile,Web Solutions with latest technologies,
                            standard processes,committed support and consulting that brings growth and success 
                            for our clients.
                        </p>

                    </div>
                   
                </div>

                <div className="row aboutlgbclr" data-aos="fade-up">
                    
                    <div className=" col-lg-8 col-md-8 col-sm-8 ">
                        <h2 className="abouthead">OUR MISSION</h2>
                        <p className="description">Exceed client's expectations by going beyond software to 
                        provide best Web solutions that transform data into knowledge, 
                        enabling them to solve their problems. 
                    </p>

                    </div>
                    <div className=" missionimage "></div>
                </div>

               

            </React.Fragment>
        );
    }
}

export default AboutDetails;
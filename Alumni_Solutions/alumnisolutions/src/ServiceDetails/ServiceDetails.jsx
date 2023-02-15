import React, { Component } from 'react';
import './ServiceDetails.css';


class ServiceDetails extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="servicehomeimage">
                    <h1>Our Services</h1>
                </div>
                <div className="row lgbclr">
                    <div className="  webimage "></div>
                    <div className=" col-lg-8 col-md-8 col-sm-8 ">
                        <h2 className="head">WEBSITE DESIGN & DEVELOPMENT</h2>
                        <p className="description">Every business owner aspires unique and inspiring web presence for his business.
                        We design and customize web solutions that speak about your business effectively
                        and inspire your target customers to take action.
                        Our team focuses on creating the best blend of stunning graphics and
                        standard compliant source code to deliver you with the most ingenious web solutions.
                    </p>

                    </div>
                </div>


                <div className="row rgbclr">
                    
                    <div className=" col-lg-8 col-md-8 col-sm-8 ">
                        <h2 className="head">ANDROID DEVELOPMENT</h2>
                        <p className="description">We develop and deliver full-stack Android, iOS, and Cross-Platform, 
                        Apps with a perfect blend of Quality and Technology. 
                        Our Expertise and knowledge of User-interaction with applications 
                        helps us to plan and execute the best mobile app development. 
                    </p>

                    </div>
                    <div className="  androidimage "></div>
                </div>

                <div className="row lgbclr">
                    <div className="  digitalimage "></div>
                    <div className=" col-lg-8 col-md-8 col-sm-8 ">
                        <h2 className="head">DIGITAL MARKETING</h2>
                        <p className="description">As a leading digital marketing service provider, we know how to benefit the 
                        power of the digital era to help businesses get visibility, convert customers 
                        into loyal/frequent buyers, and drive business conversions. 
                        We take companies with propitious future and convert them into recognized leaders 
                        of their industry. 
                        We blend our efforts for your businesses in forms of SEO services, 
                        social media marketing, influencer campaigns.

                    </p>

                    </div>
                </div>

                <div className="row rgbclr">
                    
                    <div className=" col-lg-8 col-md-8 col-sm-8 ">
                        <h2 className="head">MACHINE LEARNING</h2>
                        <p className="description">Building a solution involving machine learning is much more than the model. 
                        It is a complex mix of data structures, model training, model integration and architecture. 
                        We engage in end-to-end delivery of a machine learning solution tailored to 
                        bring product features to life. 
                    </p>

                    </div>
                    <div className="  mlimage "></div>
                </div>

                <div className="row lgbclr">
                    <div className="  consultingimage "></div>
                    <div className=" col-lg-8 col-md-8 col-sm-8 ">
                        <h2 className="head">CONSULTING</h2>
                        <p className="description">We have a young and dynamic consulting group that specializes in 
                        Business Growth Advisory services. We use our research and knowledge to provide expert services 
                        for both Domestic and International Clients. 
                        We pride ourselves on our tailored approach, deep expertise and unparalleled collaboration.

                    </p>

                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default ServiceDetails;
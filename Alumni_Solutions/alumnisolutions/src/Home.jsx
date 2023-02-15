import React, { Component } from 'react';
import './HomeStyle.css';
import About from '../src/About/about';
import Service from '../src/Services/service';
import Projects from '../src/Projects/projects';
import SocialIcon from '../src/SocialIcon/icon';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
          
                <header>
                    <div className="container">
                        <div className="banner-text">
                            <div className="text-area">
                                <span>A</span>
                                <span>L</span>
                                <span>U</span>
                                <span>M</span>
                                <span>N</span>
                                <span>I</span>
                                <span>_</span>
                                <span>S</span>
                                <span>O</span>
                                <span>L</span>
                                <span>U</span>
                                <span>T</span>
                                <span>I</span>
                                <span>O</span>
                                <span>N</span>
                                
                            </div>
                            <p className="" data-aos="zoom-in-up">Let's Create Memory Together</p>                       
                        </div>
                    </div>
                </header> 
                <About />
        </React.Fragment>  
        );
    }
}

export default Home;
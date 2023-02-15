import React, { Component } from 'react';
import './IconStyle.css';


class IconF extends Component {


    render() {
        return (
            <React.Fragment>


                <div className="icon-bar">
                    <a href="https://www.facebook.com/alumnisolutions" className="facebook">
                        ..  click here to visit<i className="fab fa-facebook-square ml-1"></i>
                    </a>
                    
                    <a href="https://www.instagram.com/alumnisolutions/" className="instagram">
                        ..  click here to visit<i className="fab fa-instagram ml-1"></i>
                    </a>
                    
                    <a href="https://twitter.com/SolutionsAlumni" className="twitter">
                    ..  click here to visit<i className="fab fa-twitter-square ml-1"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/alumni-solutions-877814202/" className="linkedin">
                    ..  click here to visit<i className="fab fa-linkedin ml-1"></i>
                    </a>

                  

                </div>

            </React.Fragment>
        );
    }
}

export default IconF;
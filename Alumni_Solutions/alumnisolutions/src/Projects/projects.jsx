import React, { Component } from 'react';
import './projects.css';


class Ourprojects extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="hzoom abs">Our Projects</h1>
               
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card constructionimage">
                            <h5 className="aa">CONSTRUCTION MANAGEMENT APP</h5>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card schoollimage">
                            <h5 className="aa">ACADEMIC EVALUTION SYSTEM FOR SCHOOL</h5>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card custserlimage">
                            <h5 className="aa">CUSTOMER SERVICE APP FOR FINANCE</h5>      
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-sm-4">
                        <div class="card bulkimage">
                            <h5 className="aa">BULK MESSAGE SERVICE</h5>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card eyeimage">
                            <h5 className="aa">EYE DISEASE DETECTION USING ARTIFICIAL INTELLIGENCE</h5>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card billingimage">
                            <h5 className="aa">BILLING SOFTWARE SYSTEM</h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Ourprojects;
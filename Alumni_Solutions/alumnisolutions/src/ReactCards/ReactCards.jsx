import React from 'react';
import "./CardStyle.css";

const ReactCard = props => {
    return (
        <div className="container-fluid">
        <div className="row">
            
                <div className="col-md-4">
                <div className="details">
                    <i class="fas fa-laptop-code fa-7x accc"></i>
                    <h2 className="card-title">Heading</h2>
                </div>
                </div>
                <div className="col-md-4">
                <div className="details">
                    <i class="fab fa-android fa-7x accc"></i>
                    <h2 className="card-title">Heading</h2>
                </div>
                </div>
                <div className="col-md-4">
                <div className="details">
                    <i class="fas fa-laptop-code fa-7x accc"></i>
                    <h2 className="card-title">Heading</h2>
                </div>
                </div>
            
            
        </div>
        </div>
    );
}

export default ReactCard;

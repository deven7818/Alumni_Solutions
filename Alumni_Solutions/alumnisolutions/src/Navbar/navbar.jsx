import React from 'react'; 
import './navbarStyle.css';


function navbar() {
    return (
      <React.Fragment>
        <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top">
         <a className="navbar-brand " href="/">Alumni Solutions</a>
          <button className="navbar-toggler"type="button"data-toggle="collapse"data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse show" id="navbarSupportedContent">
            <ul className="navbar-nav  ml-auto ">
              
              <li className="nav-item  ">
                  <a className="nav-link " href="/"><b>HOME</b></a>
              </li>
        
              <li className="nav-item  ">
                  <a className="nav-link " href="/AboutDetails"><b>ABOUT US</b></a>
              </li>
        
              <li className="nav-item product ">
                  <a className="nav-link" href="/ServiceDetails"><b>SERVICES</b></a>
              </li>
        
              <li className="nav-item product ">
                  <a className="nav-link" href="/contact"><b>CONTACT US</b></a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      </React.Fragment>
    );
}
export default navbar;

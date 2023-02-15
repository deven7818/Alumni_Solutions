import React, { Component } from 'react';
import './Contact.style.css';
import axios from 'axios';


class Contact extends Component {
  
  constructor(props) {
    super(props)

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
    this.onChangeUserMessage = this.onChangeUserMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      name: '',
      email: '',
      phoneno: '',
      message: '',
    }
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeUserPhone(e) {
    this.setState({ phoneno: e.target.value })
  }

  onChangeUserMessage(e) {
    this.setState({ message: e.target.value })
  }


  handleClick() {

    const emailObject = {
      name: this.state.name,
      email: this.state.email,
      phoneno: this.state.phoneno,
      message: this.state.message
    };

    axios.post('http://127.0.0.1:8080/send', emailObject)
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      });

    this.setState({ name: '', email: '', phoneno: '', message: '' })

    //console.log("click");
  }

  render() {
    return (
      
      <section className="my-5 py-5 ">
        <div className="contimage">
          <h1>Contact Us</h1>
        </div>
        <div className="container">
          <div className="well well-sm">
            
          </div>

          <div className="row">
            
            <div className="col-md-7">
            <h3 className="conttitle">
              <strong className=" text-center ">Our Location</strong>
            </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29813.90955142292!2d74.75028847856923!3d20.92283010756007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec534d160eda9%3A0x996db482d1bd6c53!2sAlumni%20Solutions!5e0!3m2!1sen!2sin!4v1605011649058!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0"
                }}
                allowFullscreen
              />
            </div>

            <div className="col-md-5">
              <h4 className="infodetails">
                <strong>Contact Us</strong>
              </h4>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={this.state.name} onChange={this.onChangeUserName} />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.email} onChange={this.onChangeUserEmail}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                  value={this.state.phoneno} onChange={this.onChangeUserPhone}
                />
              </div>
              <textarea
                className="form-control"
                cols="30"
                rows="3"
                placeholder="Message"
                value={this.state.message} onChange={this.onChangeUserMessage}
              />
              <br />

              <button value="Send" className="btn btn-primary btn-lg  " onClick={this.handleClick}>Send</button>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
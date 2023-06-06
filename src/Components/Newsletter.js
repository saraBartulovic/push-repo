import React, { Component } from 'react';
import Slika from "../images/hades2.jpg";

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subscribedEmail: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    this.setState({
      subscribedEmail: email,
      email: '',
    });
  };
    
    render() {
      const { subscribedEmail, email } = this.state;
    return (
      <a name="newsletter">
        <div className="newsletter">
          <div className="newsletter-form">
            <h2>Newsletter Sign-Up</h2>
            <p className="newstxt">
              Sign up for our newsletter to get updates about Hades 2, the indirect sequel to Hades. You'll receive news on how to participate in early access and its launch.
              <br />
              We promise not to spam you with emails.
            </p>
            <form className="news"  onSubmit={this.handleSubmit}>
              <label htmlFor="email">Enter your email:</label>
              <input
                type="text"
                className="inp"
                placeholder="Email"
                id="email"
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}'
                required
                value={email}
                onChange={this.handleInputChange}
              />
              <label htmlFor="checkbox">
                <input type="checkbox" className="checkbox" id="checkbox" />
                I agree to receive promotional emails (optional)
              </label>
              <br />
              <div className="btncont">
                <button type="submit" className='btn'>Subscribe</button>
              </div>
            </form>
            {email && (
          <div>
            <h4>Inputted Email:</h4>
            <p>{email}</p>
          </div>
        )}
          </div>
          <img className="newimg" src={Slika} alt="" />
        </div>
      </a>
    );
    
  }
}

export default Newsletter;

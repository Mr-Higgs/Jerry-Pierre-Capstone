import React from 'react'
import { Component} from 'react' 
import axios from 'axios'


class SubscriptionSignUp extends Component {
    state = {
        error: "",
        success: false,
    };

    handleSubmit = (event) => {
        event.preventDefault();

        axios
        .post(`https://us6.api.mailchimp.com/3.0/lists/5bf9ee0e534c18f50f8178e38b9b1a46-us10`, {
            first_name: event.target.firstName.value,
            last_name: event.target.lastName.value,
            email: event.target.email.value,
        })
        .then(() => {
            this.setState({ success: true, error: "" });
            event.target.reset();
        })
        .catch((error) => {
            this.setState({ success: false, error: error.response.data });
        });
    };

    render() {
        return (
            <main className="signup-page">
                <div className="container ">
                    <section className="row text-center text-light mb-5">
                        <div className="col-md-6 m-auto">
                            <h1><i className="fas fa-newspaper fa-2x"></i></h1>
                            <h1 className="display-4">Newsletter Signup</h1>
                            <p className="lead">
                            Enter your email to get the latest news and updates.
                            </p>
                            <form action="/about" onSubmit={this.handleSubmit}>
                                <div className="form-group m-2">
                                    <input type="text" name="firstName" id="first-name" className="form-control" placeholder="First Name"
                                    required />
                                </div>
                                <div className="form-group m-2">
                                    <input type="text" name="lastName" id="last-name" className="form-control" placeholder="Last Name" required />
                                </div>
                                <div className="form-group m-2">
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Email" required />
                                </div>
                                <button type="submit" className="btn btn-success mb-2 btn-block"><a href="/success" className="text-decoration-none text-light">
                                    Sign Up
                                </a></button>
                                {/* style <a> tag for presentation purposes */}
                                {this.state.success && <div className="signup__message">Signed up!</div>}
                                {this.state.error && <div className="signup__message">{this.state.error}</div>}
                            </form>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}
export default SubscriptionSignUp


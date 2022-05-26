import React from 'react'
import './SignUpPage.scss'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Input from '../../Components/Input/Input'
import Footer from '../../Components/Footer/Footer'

class SignUpPage extends Component {
    state = {
        error: "",
        success: false,
    };

    handleSubmit = (event) => {
        event.preventDefault();

        axios
        .post("http://localhost:3001/api/users/register", {
            email: event.target.email.value,
            password: event.target.password.value,
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
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
                <form className="signup" onSubmit={this.handleSubmit}>
                    <h1 className="signup__title">Create a new account</h1>

                    <Input type="text" name="first_name" label="First name" />
                    <Input type="text" name="last_name" label="Last name" />
                    <Input type="text" name="email" label="Email" />
                    <Input type="password" name="password" label="Password" />
                    
                    <button className="signup__button">Sign up</button>

                    {this.state.success && <div className="signup__message">Signed up!</div>}
                    {this.state.error && <div className="signup__message">{this.state.error}</div>}
                </form>
                <p className="signup-page__text">
                    Have an account? <Link to="/login">Log in</Link>
                </p>
                <Footer/>
            </main>
        );
    }
}

export default SignUpPage;
import "./SignInPage.scss";
import { Component } from "react";
import Input from '../../Components/Input/Input'
import axios from "axios";
import { Redirect, Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer'


class SignInPage extends Component {
    state = {
        error: "",
        success: false
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:3000/api/users/login', {
                email: event.target.email.value,
                password: event.target.password.value
            })
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                this.setState({ success: true });
            })
            .catch((error) => {
                this.setState({ error: error.response.data });
            });
    };

    render() {
        return (
            <main className="login-page">
                <form className="login" onSubmit={this.handleSubmit}>
                    <h1 className="login__title">Welcome Back!</h1>

                    <Input type="text" name="email" label="Email" placeholder="email@example.com"/>
                    <Input type="password" name="password" label="Password" placeholder="Password"/>
                
                    <button className="login__button">Sign in</button>

                    {this.state.error && <div className="login__message">{this.state.error}</div>}
                    {this.state.success && <Redirect to="/current" />}
                </form>
                <p className="login-page__text">
                    New around here? <Link to="/register">Sign up</Link>
                </p>
                <Footer/>
            </main>
        );
    }
}

export default SignInPage;

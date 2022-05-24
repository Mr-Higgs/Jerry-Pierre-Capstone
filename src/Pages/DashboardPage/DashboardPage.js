import "./DashboardPage.scss";
import { Component } from "react";
import axios from 'axios';
import UserCoursePage from "../UserCoursePage/UserCoursePage";

class DashboardPage extends Component {
    state = {
        user: null,
        failedAuth: false,
    }

    componentDidMount() {
        const token = sessionStorage.getItem('token');

        if (!token) {
            this.setState({ failedAuth: true });
            return;
        }

        // Get the data from the API
        axios
        .get('http://localhost:3000/api/users/current', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then((response) => {
            this.setState({
                user: response.data
            });
        })
        .catch(() => {
            this.setState({
                failedAuth: true
            })
        });
    }

    handleLogout = () => {
        sessionStorage.removeItem("token");
        this.setState({
            user: null,
            failedAuth: true
        })
    };


    render() {
        if (this.state.failedAuth) {
            return (
                <main className="dashboard">
                    <div className="card">
                        <h5 className="card-header">Dashboard</h5>
                        <div className="card-body">
                            <h5 className="card-title">You must be logged in to see this page.</h5>
                            <p className="card-text">If you don't have an account please sign up for access.</p>
                            <a href="/login" className="btn btn-success mx-2">Log In</a>
                            <a href="/register" className="btn btn-success">Sign Up</a>
                        </div>
                    </div>
                </main>
            )
        }

        if (!this.state.user) {
            return (
                <main className="dashboard">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </main>
            )
        }

        const { first_name, last_name, email } = this.state.user;

        return (
            <main className="dashboard">
                <h1 className="dashboard__title">Dashboard</h1>
                <p className="dashboard__greeting">
                    Welcome back, {first_name} {last_name}! 👋
                </p>
                <h2>My Profile</h2>
                <p>Username: {email}</p>
                <UserCoursePage />
                <button className="dashboard__logout btn btn-success" onClick={this.handleLogout}>
                    Log out
                </button>
            </main>
        );
    }
}

export default DashboardPage;
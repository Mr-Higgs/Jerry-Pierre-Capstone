import { render } from '@testing-library/react'
import axios from 'axios'
import React from 'react'
import { Component } from 'react'


class UserCoursePage extends Component{

    state = {
        videos: [], //revisit naming convention
        selectedVideo: null
    }

    componentDidMount(){
        const token = sessionStorage.getItem('token');
        axios
        .get("http://localhost:3001/lessons", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then((response) => {
            const videoResults = response.data
            this.setState({videos: videoResults})
            const video =  videoResults.find((video) => {
                return video.title === this.props.props.match.params.title
            })
            console.log(video)
            this.setState({selectedVideo: video })

        })
        .catch((error) => {
            console.log(error);
        })
    }

    render(){
        console.log(this.state.selectedVideo)
        if(!this.state.selectedVideo){
            return (
                <main className="dashboard">
                    <div className="card">
                        <h5 className="card-header">Cirriculum</h5>
                        <div className="card-body">
                            <h5 className="card-title">Course content is not yet published</h5>
                            <p className="card-text">Return to the home page and select a published lesson</p>
                            <a href="/" className="btn btn-success mx-2">Home</a>
                        </div>
                    </div>
                </main>
            )
        }

        return (
            <div>
                <div>
                    <div>
                        <h1>{this.state.selectedVideo.chapter}</h1>
                        <h3>{this.state.selectedVideo.title}</h3>
                        <iframe 
                            width="727" 
                            height="409"
                            src={`https://www.youtube.com/embed/${this.state.selectedVideo.video}`}>
                        </iframe>
                        <p>{this.state.selectedVideo.content}</p>
                    </div>
                </div>
                    
            </div>
        )
    }
}

export default UserCoursePage
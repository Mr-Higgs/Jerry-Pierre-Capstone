import '../HomePage/HomePage.scss';
import React from 'react';
import { Component } from 'react';
import Video from '../../../src/Components/Video/Video';
import VideoListing from '../../../src/Components/VideoListing/VideoListing';
import VideoDescription from '../../../src/Components/VideoDescription/VideoDescription';
import axios from 'axios';

class UseCoursePage extends Component{
    state = {
        selectedVideo: null,
        videoData: [], 
        stillLoading: true,
    };

    fetchVideoDetails = (videoId) => {
        axios
        .get(`http://localhost:3000/api/users/lessons${videoId}`)
        .then((response) => {
            console.log(videoId)
            const videoDetail = response.data;
            this.setState({ selectedVideo: videoDetail, stillLoading: false }); 
        })
    };

    componentDidMount() {
        axios
        .get(`http://localhost:3000/api/users/lessons`)
        .then((response) => {
            const videoResults = response.data;
            this.setState({ videoData: videoResults });
            this.fetchVideoDetails(videoResults[0].id);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    componentDidUpdate(prevProps, prevState) {
        const newVideoId = this.props.match.params.videoId;
        const firstVideoId = this.state.videoData[0].id;
        if (newVideoId !== prevProps.match.params.videoId) {
            const videoToLoadId = newVideoId !== undefined ? newVideoId : firstVideoId;
            this.fetchVideoDetails(videoToLoadId);
        }
    };
    
    render() {
        if (this.state.stillLoading) {
            return  <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span></div>;
        }
        
        return (
            <div className="Homepage">
                <Video selectedVideo={this.state.selectedVideo}/>
                <div className="Homepage__container">
                    <div className="Homepage__container-section">
                        <VideoDescription selectedVideo={this.state.selectedVideo} />
                    </div>
                    <div className="Homepage__container-listing">
                        <VideoListing VideoFn={this.fetchVideoDetails} />
                    </div>
                </div>
            </div>
        );
    }
}

export default UseCoursePage;
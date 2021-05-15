import React from 'react'
import ReactPlayer from 'react-player/lazy'
import './../App.css';

function Video() {
    return (
        <div className="video">
            <ReactPlayer style={{background: "#E5E5E5"}} width="350px"  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </div>

    );
}

export default Video;

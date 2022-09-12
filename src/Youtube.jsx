import React,{useState} from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Youtube = (props) =>{

  return (
      <>
      <div className="col-md-10 content">
          <div className="topic_name">
              <h1>{props.topic}</h1>
          </div>
          <div className="about_topic">
            <div className="youtube-channel">
              <img src="Images/RYT.PNG"/>
            </div>
            <div className="overlay">
              <h1>Thapa Technical</h1>
              <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_blank"><button className="btn">Subscribe</button></a>
            </div>
          </div>
      </div>
    </>);
}
export default Youtube;
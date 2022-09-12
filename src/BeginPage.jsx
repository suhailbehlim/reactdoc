import React, {useState} from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const BeginPage = () =>{

  return <>
          <div className="homepage">
            <div className="logo">
              <img src="logo192.png" alt="logo"/>
              <h1>Learn ReactJS</h1>
              <h2>Step by step</h2>
              <Link to="/Homepage">
                <Button variant="outlined" color="secondary" className="begin_btn">
                  Let's Begin
                </Button>
              </Link>
            </div>
          </div>
        </>
}
export default BeginPage;
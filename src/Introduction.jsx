import React,{useState} from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Introduction = (props) =>{

  return (
      <>
	    <div className="col-md-10 content">
	        <div className="topic_name">
	            <h1>{props.topic}</h1>
	        </div>
	        <div className="about_topic">
                <div className="subdiv">
                     <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                            <h1>What is React ?</h1>
                          </div>
                            <div className="heading_detail">
                              <ul>
                                <li>React is not a framework, it is an front end JavaScript library for building interactive UI (User Interfaces) or UI components</li>
                                <li>It is also known as ReactJs an React.js, so don't get confused if you read different notation in different places</li>
                                <li>It knows only one thing that is to create an awesome UI</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                 </div>

	            <div className="subdiv">
	                <div className="subdiv_child">
	                    <div className="contentBox">
	                        <div className="heading_name">
	                          <h1>About React ?</h1>
	                        </div>
	                    <div className="heading_detail">
	                        <ul>
	                            <li>Component based approach</li>
	                            <p>"A component is one of the core building blocks of React. In other words, we can say that every application you will
	                               develope in React will be made up of pieces called components. Component make the task of buliding UIs much easier.
	                               Components are work like a function that means it creates once and use again and again when we need it".
	                            </p>
	                            <li>Uses a Declarative approach</li>

	                            <li>DOM updates are handled gracefully</li>
	                            <li>Designed for speed, speed of implementing the application simplicity an scalability</li>
	                        </ul>
	                    </div>
	                	</div>
	                </div>
	            </div>


                <div className="subdiv">
                    <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                                <h1>Why React ?</h1>
                            </div>
                            <div className="heading_detail">
                                <ul>
                                    <li>Created and maintained by Facebook, so you can see how famous React is</li>
                                    <li>It has a huge community on GitHub</li>
                                    <li>Component based approach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="subdiv">
                    <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                                <h1>History of React ?</h1>
                            </div>
                            <div className="heading_detail">
                                <ul>
                                    <li>React was created by Jordan Walke, a software engineer at Facebook</li>
                                    <li>It was first deployed for Facebook news feed around 2011 and in 2013, it was open sourced at JS conference</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="subdiv">
                    <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                                <h1>What should we know before learning React ?</h1>
                            </div>
                            <div className="heading_detail">
                                <ul>
                                    <li>Basic knowledge of HTML, CSS and JavaScript</li>
                                    <li>Basic understanding of ES6 features</li>
                                    <p> "ECMAScript is a standard script language, and ES6 is the 6th version of ECMAScript, it was published in 2015, so it is also known as ECMAScript 2015".</p>
                                    <li>Basic understanding of how to use NPM</li>
                                    <p> NPM (Node Package Manager) is the default package manager. It consists of two main parts - </p>
                                    <p> - A CLI (command-line interface) tool for publishing and downloading packages</p>
                                    <p> - An online repository that hosts JavaScript packages.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
    </>);
}
export default Introduction;
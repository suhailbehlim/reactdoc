import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Installation = (props) =>{
  const [indexfileInf, setIndexfileInf] = useState(true);
  const [appfile, setAppfile] = useState(false);
  const [backcolorInf1, setbackcolorInf1] = useState(true);
  const [backcolorInf2, setbackcolorInf2] = useState(false);

  const showIndexfileInf = () =>{
    setIndexfileInf(true);
    setAppfile(false);
    setbackcolorInf1(true);
    setbackcolorInf2(false);
  }
  const showAppfile = () =>{
    setAppfile(true);
    setIndexfileInf(false);
    setbackcolorInf1(false);
    setbackcolorInf2(true);
  }

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
                          <h1>Environment setup ?</h1>
                        </div>
                          <div className="heading_detail">
                            <ul>
                              <li> Install <Link to="https://nodejs.org/en/"> NodeJS and NPM</Link> ( LTS Recommended version )</li> 
                              <li> Install an code editor <Link to="https://code.visualstudio.com/download"> Visual Studio </Link>/ <Link to="https://www.sublimetext.com/3">Sublime Text</Link></li>
                            </ul>
                          </div>
                      </div>
                  </div>
                </div>

                <div className="subdiv cmdP">
                    <div className="subdiv_child">
                      <div className="contentBox">
                          <div className="heading_name">
                            <h1>React installation ?</h1>
                          </div>
                        <div className="heading_detail">
                          <ul>
                            <li>Open Command Prompt (CMD)</li>
                            <li>Select a drive ( Let we select drive <strong>D</strong> )</li>
                              <p>C:\Users\Name>D:</p>
                            <li>Select a folder where you want to install React ( Let we have a folder <strong>myreact</strong> )</li>
                              <p>D:\cd myreact</p>
                            <li>Install React by using following command</li>
                              <p>D:\myreact>npm install -g create-react-app</p>
                            <li>Create React App ( let app name is  <strong>myfirstapp</strong> )</li>
                              <p>D:\myreact>create-react-app myfirstapp</p>
                             <li>After successfully installation it will be suggest two steps - </li>
                              <h6>i) cd myfirstapp</h6>
                              <p>D:\myreact>cd myfirstapp</p>
                              <h6>ii) npm start</h6>
                              <p>D:\myreact\myfirstapp>npm start</p>
                              <h6>When you start npm , a new tab open automatically on your web browser (Chrome) and it will look like below image</h6>
                              <img src="Images/1.PNG" alt="default image"/>
                          </ul>
                      </div>
                      </div>
                    </div>
                </div>


                <div className="subdiv">
                    <div className="subdiv_child">
                      <div className="contentBox">
                          <div className="heading_name">
                             <h1>About installed React ?</h1>
                          </div>
                          <div className="heading_detail">
                            <ul>
                              <li>Open the folder(myreact) or app (myfirstapp) in code editor</li>
                              <img src="Images/2.PNG" alt="Image"/>
                              <li>This app (myfirstapp) contained 3 folders and some files - </li>
                              <h6> 1) *node_modules</h6>
                              <p>The node_modules folder contained libraries and frameworks (What we will install for React app,  will be installed in this folder).</p><hr/>
                              <h6> 2) *public</h6>
                              <p>The public folder contained our main file which is html file because of this we can display our app/web on browser.</p><hr/>
                              <img src="Images/3.PNG" />
                              <h6> 3) *src</h6>
                              <p> The src folder contained our source code files.</p>
                              <img src="Images/4.PNG" />
                              <p>In src folder we have 3 main files index.js, App.js, and index.css. - index.js is used to render our react component on browser , App.jsx is an react component and index.css is external CSS file which is used to styling our JSX elements, 
                              and we have a pakage.json file which holds installed plugins -</p>
                              <div className="codediv">
                                <div className="filesname">
                                  <ul>
                                    <li style={{background : "#1B1B1B", color : "#ddd"}}>package.json</li>
                                  </ul>
                                </div>
                                <div className="filecode">
                                  <div className="sub_filecode">
                                    <div className="code">
                                      <img src="Images/pkgjson.PNG" alt="Package.json file"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
      </>);
}
export default Installation;
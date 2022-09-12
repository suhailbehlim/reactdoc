import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Introduction from './Introduction';

const KnowBasic = () =>{

  const [indexfile, setIndexfile] = useState(true);
  const [appfile, setAppfile] = useState(false);
  const [backcolor1, setbackcolor1] = useState(true);
  const [backcolor2, setbackcolor2] = useState(false);

  const showIndexfile = () =>{
    setIndexfile(true);
    setAppfile(false);
    setbackcolor1(true);
    setbackcolor2(false);
  }
  const showAppfile = () =>{
    setAppfile(true);
    setIndexfile(false);
    setbackcolor1(false);
    setbackcolor2(true);
  }
  return (
        <>

          <div className="maindiv">
            <div className="row">
              <div className="col-md-2 p-0 topics">
                  <ul>
                    <li>Topic 1</li>
                    <li>Topic 2</li>
                    <li>Topic 3</li>
                    <li>Topic 4</li>
                    <li>Topic 5</li>
                    <li>Topic 6</li>
                    <li>Topic 7</li>
                    <li>Topic 8</li>
                    <li>Topic 9</li>
                    <li>Topic 10</li>
                    <li>Topic 11</li>
                    <li>Topic 12</li>
                    <li>Topic 13</li>
                    <li>Topic 14</li>
                    <li>Topic 15</li>
                    <li>Topic 16</li>
                    <li>Topic 17</li>
                    <li>Topic 18</li>
                    <li>Topic 19</li>
                    <li>Topic 20</li>
                  </ul>
              </div>

              <div className="col-md-10 content">
                <div className="topic_name">
                  <h1>Topic Name</h1>
                </div>
                <div className="about_topic">
                    <div className="div1">
                      <h1>Environment setup ?</h1>
                      <div className="listdiv1">
                        <ul>
                          <li> Install <Link to="https://nodejs.org/en/"> NodeJS and NPM</Link> ( LTS Recommended version )</li> 
                          <li> Install an code editor <Link to="https://code.visualstudio.com/download"> Visual Studio </Link>/ <Link to="https://www.sublimetext.com/3">Sublime Text</Link></li>
                        </ul>
                      </div>
                    </div>

                  <div className="div2">
                    <h1>React installation ?</h1>
                    <div className="listdiv2">
                    <ul>
                      <li>Open Command Prompt (CMD)</li>
                      <li>Select a drive</li>
                        <p>C:\Users\Name> Drive name (let D:)</p>
                      <li>Select a folder where you want to install React</li>
                        <p>D:\cd folder name (let myreact)</p>
                      <li>Install React</li>
                        <p>D:\myreact>npm install -g create-react-app</p>
                      <li>Create React App</li>
                        <p>D:\myreact>create-react-app app-name(let myfirstapp)</p>
                       <li>After successfully installation it will be suggest two steps - </li>
                        <h6>i) cd myfirstapp (app name)</h6>
                        <p>D:\myreact>cd myfirstapp</p>
                        <h6>ii) npm start</h6>
                        <p>D:\myreact\myfirstapp>npm start</p>
                        <h6>When you start npm , a new tab open automatically on your web browser (Chrome) and it will look like below image</h6>
                        <img src="Images/1.PNG" alt="default image"/>
                    </ul>
                    </div>
                  </div>

                  <div className="div3">
                    <h1>About installed React ?</h1>
                    <div className="listdiv3">
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
                          <p>In src folder we have 3 main files index.js, App.js, and index.css. - </p>
                          <p>index.js and App.js files looks like below code and index.css file is used to write our css code.</p>
                            <div className="codediv">
                              <div className="filesname">
                                <ul>
                                  <li onClick={showIndexfile} style={{background : backcolor1 ? "#1B1B1B" : "", color : backcolor1 ? "#ddd" : ""}}>index.js</li>
                                  <li onClick={showAppfile} style={{background : backcolor2 ?  "#1B1B1B" : "", color : backcolor2 ? "#ddd" : ""}}>App.js</li>
                                </ul>
                              </div>
                              <div className="filecode">
                                {indexfile ? 

                                  
                                  <div className="sub_filecode">
                                    <p><span>//</span> This is index.js file</p>
                                    <div className="code">
                                      <pre>
                                        <span style={{color: "#d966ff"}}>import </span>
                                        <span style={{color: "skyblue"}}>React </span>
                                        <span style={{color: "#d966ff"}}>from </span>
                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                        <span style={{color: "#d966ff"}}>import </span>
                                        <span style={{color: "skyblue"}}>ReactDom </span>
                                        <span style={{color: "#d966ff"}}>from </span>
                                        <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/>
                                        <span style={{color: "#d966ff"}}>import </span>
                                        <span style={{color: "#ff8c1a"}}>'./index.css';</span><br/>
                                        <span style={{color: "#d966ff"}}>import </span>
                                        <span style={{color: "skyblue"}}>App </span>
                                        <span style={{color: "#d966ff"}}>from </span>
                                        <span style={{color: "#ff8c1a"}}>'/.App';</span><br/>
                                        <span style={{color: "#d966ff"}}>import </span>
                                        <span style={{color: "skyblue"}}>reportWebVitals </span>
                                        <span style={{color: "#d966ff"}}>from </span>
                                        <span style={{color: "#ff8c1a"}}>'./reportWebVitals';</span><br/><br/>
                                        <span style={{color: "skyblue"}}>ReactDom.</span>
                                        <span style={{color: "#ffff80"}}>render(</span><br/>
                                        <span style={{color: "#33ff77"}}>{'        <React.StrictMode>'}</span><br/>
                                        <span style={{color: "#00b8e6"}}>{'             <h1> '}</span>
                                        <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                        <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                        <span style={{color: "#00b8e6"}}>{'             <p> '}</span>
                                        <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                        <span style={{color: "#00b8e6"}}>{'</p> '}</span><br/>
                                        <span style={{color: "#33ff77"}}>{'        </React.StrictMode>'}</span>
                                        <span style={{color: "#ffffe6"}}>{','}</span><br/>
                                        <span style={{color: "#99ccff"}}>{'        document.'}</span>
                                        <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                        <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                        <span style={{color: "#ffff80"}}>)</span><br/>
                                        <span style={{color: "#ffffe6"}}>);</span><br/><br/>
                                        <span style={{color: "#ff8c1a"}}>{'reportWebVitals();'}</span>
                                      </pre>
                                    </div>
                                  </div>


                                   : null}
                                {appfile ? 


                                  <div className="sub_filecode">
                                    <p><span>//</span> This is App.js file</p>
                                    <div className="code">
                                      <pre>
                                        <span style={{color: "#d966ff"}}>import </span>
                                        <span style={{color: "skyblue"}}>React </span>
                                        <span style={{color: "#d966ff"}}>from </span>
                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                        <span style={{color: "#d966ff"}}>import </span>
                                        <span style={{color: "skyblue"}}>ReactDom </span>
                                        <span style={{color: "#d966ff"}}>from </span>
                                        <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/><br/>
                                        <span style={{color: "skyblue"}}>ReactDom.</span>
                                        <span style={{color: "#ffff80"}}>render(</span><br/>
                                        <span style={{color: "#ff3333"}}>{'        <>'}</span><br/>
                                        <span style={{color: "#00b8e6"}}>{'             <h1> '}</span>
                                        <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                        <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                        <span style={{color: "#00b8e6"}}>{'             <p> '}</span>
                                        <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                        <span style={{color: "#00b8e6"}}>{'</p> '}</span><br/>
                                        <span style={{color: "#ff3333"}}>{'        </>'}</span>
                                        <span style={{color: "#ffffe6"}}>{','}</span><br/>
                                        <span style={{color: "#99ccff"}}>{'        document.'}</span>
                                        <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                        <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                        <span style={{color: "#ffff80"}}>)</span><br/>
                                        <span style={{color: "#ffffe6"}}>);</span>

                                      </pre>
                                    </div>
                                  </div>


                                 : null}
                              </div>
                            </div>
                          <hr/>
                          <p>and we have a pakage.json file which holds installed plugins</p>
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
export default KnowBasic;
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const HelloWorld = (props) =>{

  const [hlRDfun, setHlRDfun] = useState(false);
  const [hlIRDfun, setHlIRDfun] = useState(false);
  const [hlArg, setHlArg] = useState(false);
  const [hlRoot, setHlRoot] = useState(false);
  const [hlLine, setHlLine] = useState(false);
  const [hlMultitag, setHlMultitag] = useState(false);
  const [hlDivtag, setHlDivtag] = useState(false);
  const [hlRFtag, setHlRFtag] = useState(false);
  const [hltag, setHlTag] = useState(false);

  const [output1HWf, showOutput1HWf] = useState(false);
  const [output2HWf, showOutput2HWf] = useState(false);
  const [output3HWf, showOutput3HWf] = useState(false);

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
                              <h1>How to create own web ?</h1>
                            </div>
                            <div className="heading_detail">
                              <ul>
                                <h6>Ignore everything and follow the following steps - </h6>
                                <p className="guidelines"> <strong>Guidelines :</strong> <br/>- Remember each <strong>bold text</strong> <br/> - Tap on each "<span style={{color: "#0000ff"}}>Click here</span>" and as well as see the code <br/>- Try to understand the meaning of each line in code</p><br/>
                                <li>open index.js file and remove all content from this file. Now it must be blank</li>
                                <div className="codediv">
                                  <div className="filesname">
                                    <ul>
                                      <li style={{background : "#1B1B1B", color : "#ddd"}}>index.js</li>
                                    </ul>
                                  </div>
                                  <div className="filecode">
                                  <div className="sub_filecode">
                                    <p><span>//</span> This is index.js file</p>
                                    <div className="code">
                                      <h1>Now, It's Blank !</h1>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                                <p>In index.js file we have a <strong>ReactDom.render() </strong> function <span onClick={() =>{
                                  setHlRDfun(true);
                                  setTimeout(()=>{setHlRDfun(false)},3000);
                                  }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span>,

                                  which purpose is to display the specified HTML code inside the specified HTML element.<br/>It has 2 arguments- <span onClick={() =>{
                                    setHlArg(true);
                                    setTimeout(()=>{setHlArg(false)},3000);
                                  }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span> <br/>

                                  <strong>Argument1</strong> means <strong> "What to show" </strong> and <strong>Argument2</strong> means <strong>"Where it show"</strong></p>
                                  <p>We can't use anything directly in React first we will have to import that thing in file - </p>
                                  <p>So to use <strong>ReactDom.render()</strong> function we will have to import it from <strong>"react.dom"</strong> <span onClick={() =>{
                                    setHlIRDfun(true);
                                    setTimeout(()=>{setHlIRDfun(false)},3000);
                                  }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span></p>

                                  <div className="codediv">
                                    <div className="filesname">
                                      <ul>
                                        <li style={{background : "#1B1B1B", color : "#ddd"}}>index.js</li>
                                      </ul>
                                    </div>
                                    <div className="filecode">
                                      <div className="sub_filecode">
                                        <p><span>//</span> This is index.js file</p>
                                        <div className="code">
                                          <pre>
                                            <span style={{border : hlIRDfun ? "1px dashed #ffff00" : ''}}>
                                            <span style={{color: "#d966ff"}}>{' import '}</span>
                                            <span style={{color: "#99ccff"}}>{' ReactDom '} </span>
                                            <span style={{color: "#d966ff"}}>{' from '} </span>
                                            <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/>
                                            </span><br/>
                                            <span style={{border : hlRDfun ? "1px dashed #ffff00" : ''}}>
                                            <span style={{color: "#99ccff"}}>ReactDom.</span>
                                            <span style={{color: "#ffff80"}}>render(</span>
                                            </span>
                                            <span style={{border : hlArg ? "1px dashed #ffff00" : ""}}><span style={{color: "#99ccff"}}>Argument1, </span>
                                            <span style={{color: "#99ccff"}}>Argument2</span></span>
                                            <span style={{color: "#ffff80"}}>{');'}</span>
                                          </pre>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <p><strong>Q1. What to show ? </strong> (Argument1) / Ans. <strong>What we want to show ? </strong> </p> 
                                  <p><strong>Q2. Where it show ? </strong> (Argument2) / Ans. <strong>On web browser </strong> ( To show on web browser we will use index.html file (in public folder)
                                   where we have a id that is <strong>"root"</strong> <span onClick={() =>{
                                    setHlRoot(true);
                                    setTimeout(()=>{setHlRoot(false)},3000);
                                  }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span>)<br/>
                                 So the result ( "Hello World" ) will display inside the <strong>{'<div id="root"> </div>'}</strong> element and we will can see it on web browser.
                                  </p>
                                  
                                  <div className="codediv">
                                    <div className="filesname">
                                      <ul>
                                        <li style={{background : "#1B1B1B", color : "#ddd"}}>index.html</li>
                                      </ul>
                                    </div>
                                    <div className="filecode">
                                      <div className="sub_filecode">
                                        <p><span>//</span> This is index.html file</p>
                                        <div className="code">
                                          <pre>
                                            <span style={{color: "#d966ff"}}>{'<!DOCTYPE html>'}</span><br/>
                                            <span style={{color: "#00b8e6"}}>{'<html>'}</span><br/>
                                            <span>{''.padStart(3)}</span>
                                            <span style={{color: "#00b8e6"}}>{'<head>'}</span><br/>
                                            <span>{''.padStart(7)}</span>
                                            <span style={{color: "#00b8e6"}}>{'<title>'}</span>
                                            <span style={{color: "#ffffe6"}}> React App </span>
                                            <span style={{color: "#00b8e6"}}>{'</title>'}</span><br/>
                                            <span>{''.padStart(3)}</span>
                                            <span style={{color: "#00b8e6"}}>{'</head>'}</span><br/>
                                            <span>{''.padStart(3)}</span>
                                            <span style={{color: "#00b8e6"}}>{'<body>'}</span><br/>
                                            <span>{''.padStart(7)}</span>
                                            <span style={{color: "#00b8e6"}}>{'<div '}</span>
                                            <span style={{color: "#ff8c1a"}}>{'id'}</span>
                                            <span style={{color: "#00b8e6"}}>{'="'}</span>
                                            <span style={{color: hlRoot ? "#1B1B1B" : "#33ff77", background : hlRoot ? "#ffffe6" : ''}}>{'root'}</span>
                                            <span style={{color: "#00b8e6"}}>{'">'}</span><br/>
                                            <span>{''.padStart(7)}</span>
                                            <span style={{color: "#00b8e6"}}>{'</div>'}</span><br/>
                                            <span>{''.padStart(3)}</span>
                                            <span style={{color: "#00b8e6"}}>{'</body>'}</span><br/>
                                            <span style={{color: "#00b8e6"}}>{'</html>'}</span><br/>
                                          </pre>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <p>So, Whatever we want to show on web browser, we will write that instead of Argument1 and where we want to show, we will write that instead of Argument2.<br/>
                                  Let's take an example for better understanding and print "Hello World" -</p>
                              </ul>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="subdiv">
                      <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                              <h1>How to print "Hello World" ?</h1>
                            </div>
                            <div className="heading_detail">
                              <ul>
                                <div className="codediv">
                                  <div className="filesname">
                                    <ul>
                                      <li style={{background : "#1B1B1B", color : "#ddd"}}>index.js</li>
                                    </ul>
                                  </div>
                                  <div className="filecode">
                                    <div className="sub_filecode">
                                    <p><span>//</span> This is index.js file</p>
                                    <div className="code">
                                      <pre>
                                        <span style={{border : hlLine ? "1px dashed #ffff00" : ''}}>
                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                        <span style={{color: "#ff8c1a"}}>'react';</span>
                                        </span><br/>
                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                        <span style={{color: "#99ccff"}}>{' ReactDom '}</span>
                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                        <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/><br/>
                                        <span style={{color: "#99ccff"}}>ReactDom.</span>
                                        <span style={{color: "#ffff80"}}>render(</span>
                                        <span style={{color: "#00b8e6"}}>{' <h1> '}</span>
                                        <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                        <span style={{color: "#00b8e6"}}>{'</h1>'}</span>
                                        <span style={{color: "#ffffe6"}}>{', '}</span>
                                        <span style={{color: "#99ccff"}}>{'document.'}</span>
                                        <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                        <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                        <span style={{color: "#ffff80"}}>{')'}</span>
                                        <span style={{color: "#ffffe6"}}>{');'}</span><br/><br/>
                                      </pre>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <p>-In this example we imported an extra thing ( first line in above code or <span onClick={() =>{
                                setHlLine(true);
                                setTimeout(()=>{setHlLine(false)},3000);
                              }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span>), This line is required to use <strong>JSX</strong>. <hr/>
                              <strong>JSX (JavaScript XML )</strong>  : It allows to write HTML in React. JSX makes it easier to write and add HTML in React. <br/>In simple words whatever we looks like <strong>HTML</strong> that is our <strong>JSX</strong>.<hr/>
                              And <strong>documemt.getElementById("root")</strong> is used to access that id (root) to display <strong>Hello World</strong>.</p>

                               <div className="outputBox">
                                  {output1HWf ? 
                                    <div className="suboutputBox">
                                      <div className="output">
                                        <div className="inOutput">
                                          <h1>Hello World</h1>
                                            </div>
                                        </div>
                                        <div>
                                          <button className="btn btn-danger hideOp" onClick={()=>{
                                            showOutput1HWf(false);}}>Hide output</button> 
                                          <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                        </div>
                                    </div> 
                                  : <button className="btn btn-primary showOp" onClick={() =>{showOutput1HWf(true); }}>See output</button>}
                              </div>
                          </ul>
                        </div>
                        </div>
                      </div>
                  </div>


                  <div className="subdiv">
                      <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                                <h1>How to use multiple tags ?</h1>
                            </div>
                            <div className="heading_detail">
                              <ul>
                                <div className="codediv">
                                    <div className="filesname">
                                      <ul>
                                        <li style={{background : "#1B1B1B", color : "#ddd"}}>index.js</li>
                                      </ul>
                                    </div>
                                    <div className="filecode">
                                      <div className="sub_filecode">
                                        <p><span>//</span> This is index.js file</p>
                                        <div className="code">
                                          <pre>
                                            <span style={{color: "#d966ff"}}>{' import '}</span>
                                            <span style={{color: "#99ccff"}}>{' React '}</span>
                                            <span style={{color: "#d966ff"}}>{' from '}</span>
                                            <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                            <span style={{color: "#d966ff"}}>{' import '} </span>
                                            <span style={{color: "#99ccff"}}>{' ReactDom '}</span>
                                            <span style={{color: "#d966ff"}}>{' from '}</span>
                                            <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/><br/>
                                            <span style={{color: "#99ccff"}}>ReactDom.</span>
                                            <span style={{color: "#ffff80"}}>render(</span><br/>
                                            <div style={{border : hlMultitag ? "1px dashed #ffff00" : '', width : "400px"}}>
                                            <span>{''.padStart(8)}</span>
                                            <span style={{color: "#00b8e6"}}>{'<h1> '}</span>
                                            <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                            <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                            <span>{''.padStart(8)}</span>
                                            <span style={{color: "#00b8e6"}}>{'<p> '}</span>
                                            <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                            <span style={{color: "#00b8e6"}}>{'</p>'}</span>
                                            <span style={{color: "#ffffe6"}}>{','}</span><br/>
                                            </div>
                                            <span>{''.padStart(7)}</span>
                                            <span style={{color: "#99ccff"}}>{'document.'}</span>
                                            <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                            <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                            <span style={{color: "#ffff80"}}>)</span><br/>
                                            <span style={{color: "#ffffe6"}}>);</span>
                                          </pre>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <p> If we use multiple tags like this <span onClick={() =>{
                                      setHlMultitag(true);
                                      setTimeout(()=>{setHlMultitag(false)},3000);

                                      }

                                    } style={{color: "#0000ff", cursor : "pointer"}}>Click here</span> then it will give an error, because the <strong> render() </strong> function returns only one tag.</p>


                                    <div className="outputBox">
                                    {output2HWf ? 
                                      <div className="suboutputBox">
                                        <div className="output">
                                            <div className="inOutput">
                                                <img src="Images/mterror.PNG" style={{width:"100%"}}/>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                                  showOutput2HWf(false);}}>Hide output</button> 
                                            
                                        </div>
                                      </div> : <button className="btn btn-primary showOp" onClick={() =>{showOutput2HWf(true); }}>See output</button>}
                                    </div>

                                    <p>So, there are some tags to remove this error - </p><br/>
                                 
                                    <h6>By <strong>{'<div>'}</strong> tag <span onClick={() =>{
                                      setHlDivtag(true);
                                      setTimeout(()=>{setHlDivtag(false)},3000);
                                    }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span></h6>

                                    <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                          <li style={{background : "#1B1B1B", color : "#ddd"}}>index.js</li>
                                        </ul>
                                      </div>
                                      <div className="filecode">
                                        <div className="sub_filecode">
                                          <p><span>//</span> This is index.js file</p>
                                          <div className="code">
                                            <pre>
                                              <span style={{color: "#d966ff"}}>{' import '}</span>
                                              <span style={{color: "#99ccff"}}>{' React '}</span>
                                              <span style={{color: "#d966ff"}}>{' from '}</span>
                                              <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                              <span style={{color: "#d966ff"}}>{' import '} </span>
                                              <span style={{color: "#99ccff"}}>{' ReactDom '}</span>
                                              <span style={{color: "#d966ff"}}>{' from '}</span>
                                              <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/><br/>
                                              <span style={{color: "#99ccff"}}>ReactDom.</span>
                                              <span style={{color: "#ffff80"}}>render(</span><br/>
                                              <span>{''.padStart(10)}</span>
                                              <span style={{color: "#00b8e6", border : hlDivtag ? "1px dashed #ffff00" : ''}}>{'<div>'}</span><br/>
                                              <span>{''.padStart(12)}</span>
                                              <span style={{color: "#00b8e6"}}>{'<h1> '}</span>
                                              <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                              <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                              <span>{''.padStart(12)}</span>
                                              <span style={{color: "#00b8e6"}}>{'<p> '}</span>
                                              <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                              <span style={{color: "#00b8e6"}}>{'</p> '}</span><br/>
                                              <span>{''.padStart(10)}</span>
                                              <span style={{color: "#00b8e6", border : hlDivtag ? "1px dashed #ffff00" : ''}}>{'</div>'}</span>
                                              <span style={{color: "#ffffe6"}}>{','}</span><br/>
                                              <span>{''.padStart(7)}</span>
                                              <span style={{color: "#99ccff"}}>{'document.'}</span>
                                              <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                              <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                              <span style={{color: "#ffff80"}}>)</span><br/>
                                              <span style={{color: "#ffffe6"}}>);</span>
                                            </pre>
                                          </div>
                                        </div>
                                      </div>
                                    </div><hr/>

                                    <h6>OR <strong>{'<React.Fragment>'}</strong> tag <span onClick={() =>{
                                      setHlRFtag(true);
                                      setTimeout(()=>{setHlRFtag(false)},3000);
                                    }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span></h6>
                                 
                                    <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                          <li style={{background : "#1B1B1B", color : "#ddd"}}>index.js</li>
                                        </ul>
                                      </div>
                                      <div className="filecode">
                                        <div className="sub_filecode">
                                          <p><span>//</span> This is index.js file</p>
                                          <div className="code">
                                            <pre>
                                              <span style={{color: "#d966ff"}}>{' import '}</span>
                                              <span style={{color: "#99ccff"}}>{' React '}</span>
                                              <span style={{color: "#d966ff"}}>{' from '}</span>
                                              <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                              <span style={{color: "#d966ff"}}>{' import '} </span>
                                              <span style={{color: "#99ccff"}}>{' ReactDom '}</span>
                                              <span style={{color: "#d966ff"}}>{' from '}</span>
                                              <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/><br/>
                                              <span style={{color: "skyblue"}}>ReactDom.</span>
                                              <span style={{color: "#ffff80"}}>render(</span><br/>
                                              <span>{''.padStart(10)}</span>
                                              <span style={{color: "#33ff77", border : hlRFtag ? "1px dashed #ffff00" : ''}}>{'<React.Fragment>'}</span><br/>
                                              <span>{''.padStart(12)}</span>
                                              <span style={{color: "#00b8e6"}}>{'<h1> '}</span>
                                              <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                              <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                              <span>{''.padStart(12)}</span>
                                              <span style={{color: "#00b8e6"}}>{'<p> '}</span>
                                              <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                              <span style={{color: "#00b8e6"}}>{'</p> '}</span><br/>
                                              <span>{''.padStart(10)}</span>
                                              <span style={{color: "#33ff77", border : hlRFtag ? "1px dashed #ffff00" : ''}}>{'</React.Fragment>'}</span>
                                              <span style={{color: "#ffffe6"}}>{','}</span><br/>
                                              <span>{''.padStart(7)}</span>
                                              <span style={{color: "#99ccff"}}>{'document.'}</span>
                                              <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                              <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                              <span style={{color: "#ffff80"}}>)</span><br/>
                                              <span style={{color: "#ffffe6"}}>);</span>
                                            </pre>
                                          </div>
                                        </div>
                                      </div>
                                    </div><hr/>

                                     <h6>OR <strong>{'<>'}</strong> tag <span onClick={() =>{
                                        setHlTag(true);
                                        setTimeout(()=>{setHlTag(false)},3000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span></h6>
                                     
                                     <div className="codediv">
                                        <div className="filesname">
                                          <ul>
                                            <li style={{background : "#1B1B1B", color : "#ddd"}}>index.js</li>
                                          </ul>
                                        </div>
                                        <div className="filecode">
                                          <div className="sub_filecode">
                                            <p><span>//</span> This is index.js file</p>
                                            <div className="code">
                                              <pre>
                                                <span style={{color: "#d966ff"}}>{' import '}</span>
                                                <span style={{color: "#99ccff"}}>{' React '}</span>
                                                <span style={{color: "#d966ff"}}>{' from '}</span>
                                                <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                                <span style={{color: "#d966ff"}}>{' import '} </span>
                                                <span style={{color: "#99ccff"}}>{' ReactDom '}</span>
                                                <span style={{color: "#d966ff"}}>{' from '}</span>
                                                <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/><br/>
                                                <span style={{color: "skyblue"}}>ReactDom.</span>
                                                <span style={{color: "#ffff80"}}>render(</span><br/>
                                                <span>{''.padStart(10)}</span>
                                                <span style={{color: "#ff3333", border : hltag ? "1px dashed #ffff00" : ''}}>{'<>'}</span><br/>
                                                <span>{''.padStart(12)}</span>
                                                <span style={{color: "#00b8e6"}}>{'<h1> '}</span>
                                                <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                                <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                                <span>{''.padStart(12)}</span>
                                                <span style={{color: "#00b8e6"}}>{'<p> '}</span>
                                                <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                                <span style={{color: "#00b8e6"}}>{'</p> '}</span><br/>
                                                <span>{''.padStart(10)}</span>
                                                <span style={{color: "#ff3333", border : hltag ? "1px dashed #ffff00" : ''}}>{'</>'}</span>
                                                <span style={{color: "#ffffe6"}}>{','}</span><br/>
                                                <span>{''.padStart(7)}</span>
                                                <span style={{color: "#99ccff"}}>{'document.'}</span>
                                                <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                                <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                                <span style={{color: "#ffff80"}}>)</span><br/>
                                                <span style={{color: "#ffffe6"}}>);</span>
                                              </pre>
                                            </div>
                                          </div>
                                        </div>
                                    </div>

                                    <h6>Note : You can use any kind of tag but these tags ({'<div>, <React.Fragment>, <>'}) are better.</h6>
                                    
                                    <div className="outputBox">
                                    {output3HWf ? 
                                      <div className="suboutputBox">
                                        <div className="output">
                                            <div className="inOutput">
                                                <h1>Hello World</h1>
                                                <p>Hello World</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                                  showOutput3HWf(false);}}>Hide output</button> 
                                            <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                        </div>
                                      </div> : <button className="btn btn-primary showOp" onClick={() =>{showOutput3HWf(true); }}>See output</button>}
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
export default HelloWorld;
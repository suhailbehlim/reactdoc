import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ReactCss = (props) =>{

  const [hlIlCss, setHlIlCss] = useState(false);
  const [output1RCf, showOutput1RCf] = useState(false);
  const [output2RCf, showOutput2RCf] = useState(false);
  const [output3RCf, showOutput3RCf] = useState(false);
  const [output4RCf, showOutput4RCf] = useState(false);
  const [output5RCf, showOutput5RCf] = useState(false);
  const [hlItCss, setHlItCss] = useState(false);
  const [hlObjname, setHlObjname] = useState(false);
  const [indexfileRCf1, setindexfileRCf1] = useState(true);
  const [cssfileRCf1, setCssfileRCf1] = useState(false);
  const [backcolorRCf1, setbackcolorRCf1] = useState(true);
  const [backcolorRCf2, setbackcolorRCf2] = useState(false);
  const [hlECsscN, setHlECsscN] = useState(false);
  const [hlECssImp, setHlECssImp] = useState(false);
  const [hlDiff1, setHlDiff1] = useState(false);

  const showIndexfileRCf1 = () =>{
    setindexfileRCf1(true);
    setCssfileRCf1(false);
    setbackcolorRCf1(true);
    setbackcolorRCf2(false);
  }
  const showCssfileRCf1 = () =>{
    setCssfileRCf1(true);
    setindexfileRCf1(false);
    setbackcolorRCf1(false);
    setbackcolorRCf2(true);
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
                          <h1>How to use CSS in React ?</h1>
                        </div>
                          <div className="heading_detail">
                            <ul>
                              <li>As you know we have 3 types of CSS - </li>
                              <div style={{padding: "7px 20px"}}>
                                <h6> - Inline CSS</h6>
                                <h6> - Internal CSS</h6>
                                <h6> - External CSS</h6>
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
                          <h1>How to use Inline CSS ?</h1>
                        </div>
                          <div className="heading_detail">
                            <ul>
                              <li>Mainly Inline CSS is less used in any other language but in React Inline CSS plays an important role.</li>
                              <li>In React, Inline Css used as <strong>object</strong><hr/>
                               <strong>Object : </strong>An object is a variable too, but object can contain many values in the form of <strong>Name </strong> (or Key) and <strong>Value </strong>(or Key value)<br/>
                                <img src="Images/object.PNG" style={{width: "620px", height:"300px", marginLeft : "-20px"}}/>
                        
                               <p>Let's try to understand with an example - </p><hr/>
                               
                              </li>
                              <li>This is our <strong>index.js</strong> file and now we are going to apply Inline CSS in this file 
                              and will change the text color from <span style={{color : "#000000"}}>><strong> black  </strong> (#000000)</span>  to <span style={{color : "#FF0000"}}><strong> red </strong>(#FF0000)</span> <span onClick={() =>{
                                setHlIlCss(true);
                                setTimeout(()=>{setHlIlCss(false)},3000);
                              }} style={{color: "#0000FF", cursor : "pointer"}}>Click here</span></li>
                              
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
                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                        <span style={{color: "#99ccff"}}>{' ReactDom '}</span>
                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                        <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/><br/>
                                        <span style={{color: "#99ccff"}}>ReactDom.</span>
                                        <span style={{color: "#ffff80"}}>render(</span><br/>
                                        <span>{''.padStart(13)}</span>
                                        <span style={{color: "#00b8e6"}}>{' <h1 '}</span>
                                        <span style={{border : hlIlCss ? "1px solid #ffff00" : ""}}>
                                        <span style={{color: "#d966ff"}}>{'style={'}</span>
                                        <span style={{color: "#ffff80"}}>{'{'}</span>
                                        <span style={{color: "#ffff80"}}>{'color : "'}</span>
                                        <span style={{color: "#FF0000"}}>{'#FF0000'}</span>
                                        <span style={{color: "#ffff80"}}>{'"'}</span>
                                        <span style={{color: "#ffff80"}}>{'}'}</span>
                                        <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                        <span style={{color: "#00b8e6"}}>{'> '}</span>
                                        <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                        <span style={{color: "#00b8e6"}}>{'</h1>'}</span>
                                        <span style={{color: "#ffffe6"}}>{', '}</span><br/>
                                        <span>{''.padStart(13)}</span>
                                        <span style={{color: "#99ccff"}}>{'document.'}</span>
                                        <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                        <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                        <span style={{color: "#ffff80"}}>{')'}</span><br/>
                                        <span style={{color: "#ffffe6"}}>{');'}</span><br/><br/>
                                      </pre>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>In this Inline CSS we used double curley braces <strong>{'{{  }} '}</strong> 
                              it just because the object <strong> {'{color : "#FF0000"}'} </strong> is not the part of <strong> JSX </strong> it is the part of <strong>JavaScript</strong>, So to use <strong>JavaScript</strong> in <strong> JSX </strong> we will use single curley braces <strong>{'{ }. '}</strong> 
                              It means when we need <strong> JavaScript </strong> then we can use <strong> JavaScript </strong> in single curley braces <strong>{'{  } '}</strong> </p><br/>
                             


                              <div className="outputBox">
                                    {output1RCf ? 
                                      <div className="suboutputBox">
                                        <div className="output">
                                          <div className="inOutput">
                                            <h1 style={{color:"#FF0000"}}>Hello World</h1>
                                          </div>
                                          </div>
                                          <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                            showOutput1RCf(false);}}>Hide output</button>
                                          </div>
                                      </div> 
                                    : <button className="btn btn-primary showOp" onClick={() =>{showOutput1RCf(true); }}>See output</button>}
                                </div>

                              <li>If you want to apply multiple CSS properties then use a <strong>comma</strong> (<strong> , </strong>) and you can add more CSS property one by one after separating with comma.<br/>
                              Let's now we will change the color again from <span style={{color : "#FF0000"}}><strong> red </strong>(#FF0000) </span> to <span style={{color : "#0000FF"}}><strong> blue </strong> (#0000FF)</span>
                              and as well as we will change the <strong> size </strong> of text</li>

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
                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                        <span style={{color: "#99ccff"}}>{' ReactDom '}</span>
                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                        <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/><br/>
                                        <span style={{color: "#99ccff"}}>ReactDom.</span>
                                        <span style={{color: "#ffff80"}}>render(</span><br/>
                                        <span>{''.padStart(13)}</span>
                                        <span style={{color: "#00b8e6"}}>{' <h1 '}</span>
                                        <span style={{border : hlIlCss ? "1px solid #ffff00" : ""}}>
                                        <span style={{color: "#d966ff"}}>{'style={'}</span>
                                        <span style={{color: "#ffff80"}}>{'{'}</span>
                                        <span style={{color: "#ffff80"}}>{'color : "'}</span>
                                        <span style={{color: "#0000FF"}}>{'#0000FF'}</span>
                                        <span style={{color: "#ffff80"}}>{'", '}</span>
                                        <span style={{color: "#ffff80"}}>{'fontSize : "'}</span>
                                        <span style={{color: "#ffff80"}}>{'10px'}</span>
                                        <span style={{color: "#ffff80"}}>{'" '}</span>
                                        <span style={{color: "#ffff80"}}>{'}'}</span>
                                        <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                        <span style={{color: "#00b8e6"}}>{'> '}</span>
                                        <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                        <span style={{color: "#00b8e6"}}>{'</h1>'}</span>
                                        <span style={{color: "#ffffe6"}}>{', '}</span><br/>
                                        <span>{''.padStart(13)}</span>
                                        <span style={{color: "#99ccff"}}>{'document.'}</span>
                                        <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                        <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                        <span style={{color: "#ffff80"}}>{')'}</span><br/>
                                        <span style={{color: "#ffffe6"}}>{');'}</span><br/><br/>
                                      </pre>
                                    </div>
                                  </div>
                                </div>
                              </div>


                              <div className="outputBox">
                                    {output2RCf ? 
                                      <div className="suboutputBox">
                                        <div className="output">
                                          <div className="inOutput">
                                            <h1 style={{color:"#0000FF", fontSize : "15px"}}>Hello World</h1>
                                          </div>
                                          </div>
                                          <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                              showOutput2RCf(false);}}>Hide output</button>
                                          </div>
                                      </div> 
                                    : <button className="btn btn-primary showOp" onClick={() =>{showOutput2RCf(true); }}>See output</button>}
                                </div>
                               <h6>In any other file, you can apply Inline CSS in same way.</h6>
                            </ul>
                          </div>
                      </div>
                  </div>
               </div>

               <div className="subdiv">
                   <div className="subdiv_child">
                      <div className="contentBox">
                          <div className="heading_name">
                          <h1>How to use Internal CSS ?</h1>
                        </div>
                          <div className="heading_detail">
                            <ul>
                              <li>In React, Internal CSS also used as object, In Inline CSS the CSS object creates in In-line but in Internal CSS, first we creates it <span onClick={() =>{
                                setHlItCss(true);
                                setTimeout(()=>{setHlItCss(false)},3000);
                              }} style={{color: "#0000FF", cursor : "pointer"}}>Click here</span> and after we can use this object name in specified tag <span onClick={() =>{
                                setHlObjname(true);
                                setTimeout(()=>{setHlObjname(false)},3000);
                              }} style={{color: "#0000FF", cursor : "pointer"}}>Click here</span></li>
                              <li>Now we are going to apply Internal CSS in <strong>index.js</strong> file
                              and will change the text color from <span style={{color : "#0000FF"}}><strong> blue </strong>(#0000FF)</span>  to <span style={{color : "#008000"}}><strong> green </strong> (#008000)</span>  and as well as its <strong>backgound</strong> <span onClick={() =>{
                                setHlItCss(true);
                                setTimeout(()=>{setHlItCss(false)},3000);
                              }} style={{color: "#0000FF", cursor : "pointer"}}>Click here</span></li>
                              
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
                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                        <span style={{color: "#99ccff"}}>{' ReactDom '}</span>
                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                        <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/><br/>
                                        <span style={{border : hlItCss ? "1px dashed #ffff00" : ""}}>
                                        <span style={{color: "#d966ff"}}>{' var '}</span>
                                        <span style={{border : hlObjname ? "1px dashed #ffff00" : "", padding : hlObjname ? "0 3px" : "null"}}>
                                        <span style={{color: "#ff8c1a"}}>{' myCss'}</span></span>
                                        <span style={{color: "#ff8c1a"}}>{' = {'}</span>
                                        <span style={{color: "#ffff80"}}>{'color : "'}</span>
                                        <span style={{color: "#008000"}}>{'#008000'}</span>
                                        <span style={{color: "#ffff80"}}>{'", '}</span>
                                        <span style={{color: "#ffff80"}}>{'background : "'}</span>
                                        <span style={{color: "#ffff00"}}>{'yellow'}</span>
                                        <span style={{color: "#ffff80"}}>{'"'}</span>
                                        <span style={{color: "#ff8c1a"}}>{'};'}</span>
                                        </span><br/><br/>
                                        <span style={{color: "#99ccff"}}>ReactDom.</span>
                                        <span style={{color: "#ffff80"}}>render(</span><br/>
                                        <span>{''.padStart(13)}</span>
                                        <span style={{color: "#00b8e6"}}>{' <h1 '}</span>
                                        <span style={{border : hlIlCss ? "1px solid #ffff00" : ""}}>
                                        <span style={{color: "#d966ff"}}>{'style={'}</span>
                                        <span style={{border : hlObjname ? "1px dashed #ffff00" : "", padding : hlObjname ? "0 3px" : ""}}>
                                        <span style={{color: "#ff8c1a"}}>{'myCss'}</span></span>
                                        <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                        <span style={{color: "#00b8e6"}}>{'> '}</span>
                                        <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                        <span style={{color: "#00b8e6"}}>{'</h1>'}</span>
                                        <span style={{color: "#ffffe6"}}>{', '}</span><br/>
                                        <span>{''.padStart(13)}</span>
                                        <span style={{color: "#99ccff"}}>{'document.'}</span>
                                        <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                        <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                        <span style={{color: "#ffff80"}}>{')'}</span><br/>
                                        <span style={{color: "#ffffe6"}}>{');'}</span><br/><br/>
                                      </pre>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>In this Inline CSS we used double curley braces <strong>{'{{  }} '}</strong> 
                              it just because the object <strong> {'{color : "#FF0000"}'} </strong> is not the part of <strong> JSX </strong> it is the part of <strong>JavaScript</strong>, So to use <strong>JavaScript</strong> in <strong> JSX </strong> we will use single curley braces <strong>{'{ }. '}</strong> 
                              It means when we need <strong> JavaScript </strong> then we can use <strong> JavaScript </strong> in single curley braces <strong>{'{  } '}</strong> </p><br/>
                             
                              <div className="outputBox">
                                    {output3RCf ? 
                                      <div className="suboutputBox">
                                        <div className="output">
                                          <div className="inOutput">
                                            <h1 style={{color:"#008000", background : "#ffff00"}}>Hello World</h1>
                                          </div>
                                          </div>
                                          <div>
                                             <button className="btn btn-danger hideOp" onClick={()=>{
                                          showOutput3RCf(false);}}>Hide output</button>
                                          </div>
                                      </div> 
                                    : <button className="btn btn-primary showOp" onClick={() =>{showOutput3RCf(true); }}>See output</button>}
                                </div>

                              <li>If you want to apply CSS on multiple tags then create a new object and use the name of that object in specified tag. <strong>comma</strong> (<strong> , </strong>) and you can add more CSS property one by one after separating with comma.<br/>
                              Let's apply CSS on multiple tags and set the <span style={{color : "#0000FF"}}><strong> blue </strong> (#0000FF)</span> color for first tag, <span style={{color : "#FF0000"}}><strong> red </strong> (#FF0000)</span> color for second tag and <span style={{color : "#008000"}}><strong> green </strong> (#008000)</span> color for third tag.</li>

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
                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                        <span style={{color: "#99ccff"}}>{' ReactDom '}</span>
                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                        <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/><br/>
                                        <span style={{border : hlItCss ? "1px dashed #ffff00" : ""}}>
                                        <span style={{color: "#d966ff"}}>{' var '}</span>
                                        <span style={{border : hlObjname ? "1px dashed #ffff00" : "", padding : hlObjname ? "0 3px" : "null"}}>
                                        <span style={{color: "#ff8c1a"}}>{' firstTag'}</span></span>
                                        <span style={{color: "#ff8c1a"}}>{' = {'}</span>
                                        <span style={{color: "#ffff80"}}>{'color : "'}</span>
                                        <span style={{color: "#0000FF"}}>{'#0000FF'}</span>
                                        <span style={{color: "#ffff80"}}>{'"'}</span>
                                        <span style={{color: "#ff8c1a"}}>{'};'}</span><br/>
                                        <span style={{color: "#d966ff"}}>{' var '}</span>
                                        <span style={{border : hlObjname ? "1px dashed #ffff00" : "", padding : hlObjname ? "0 3px" : "null"}}>
                                        <span style={{color: "#ff8c1a"}}>{' secondTag'}</span></span>
                                        <span style={{color: "#ff8c1a"}}>{' = {'}</span>
                                        <span style={{color: "#ffff80"}}>{'color : "'}</span>
                                        <span style={{color: "#FF0000"}}>{'#FF0000'}</span>
                                        <span style={{color: "#ffff80"}}>{'"'}</span>
                                        <span style={{color: "#ff8c1a"}}>{'};'}</span><br/>
                                        <span style={{color: "#d966ff"}}>{' var '}</span>
                                        <span style={{border : hlObjname ? "1px dashed #ffff00" : "", padding : hlObjname ? "0 3px" : "null"}}>
                                        <span style={{color: "#ff8c1a"}}>{' thirdTag'}</span></span>
                                        <span style={{color: "#ff8c1a"}}>{' = {'}</span>
                                        <span style={{color: "#ffff80"}}>{'color : "'}</span>
                                        <span style={{color: "#008000"}}>{'#008000'}</span>
                                        <span style={{color: "#ffff80"}}>{'"'}</span>
                                        <span style={{color: "#ff8c1a"}}>{'};'}</span>
                                        </span><br/><br/>
                                        <span style={{color: "#99ccff"}}>ReactDom.</span>
                                        <span style={{color: "#ffff80"}}>render(</span><br/>
                                        <span>{''.padStart(13)}</span>
                                        <span style={{color: "#00b8e6"}}>{' <h1 '}</span>
                                        <span style={{border : hlIlCss ? "1px solid #ffff00" : ""}}>
                                        <span style={{color: "#d966ff"}}>{'style={'}</span>
                                        <span style={{border : hlObjname ? "1px dashed #ffff00" : "", padding : hlObjname ? "0 3px" : ""}}>
                                        <span style={{color: "#ff8c1a"}}>{'firstTag'}</span></span>
                                        <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                        <span style={{color: "#00b8e6"}}>{'> '}</span>
                                        <span style={{color: "#ffffe6"}}>{'This is firstTag '}</span>
                                        <span style={{color: "#00b8e6"}}>{'</h1>'}</span><br/>
                                        <span>{''.padStart(13)}</span>
                                        <span style={{color: "#00b8e6"}}>{' <h1 '}</span>
                                        <span style={{border : hlIlCss ? "1px solid #ffff00" : ""}}>
                                        <span style={{color: "#d966ff"}}>{'style={'}</span>
                                        <span style={{border : hlObjname ? "1px dashed #ffff00" : "", padding : hlObjname ? "0 3px" : ""}}>
                                        <span style={{color: "#ff8c1a"}}>{'secondTag'}</span></span>
                                        <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                        <span style={{color: "#00b8e6"}}>{'> '}</span>
                                        <span style={{color: "#ffffe6"}}>{'This is secondTag '}</span>
                                        <span style={{color: "#00b8e6"}}>{'</h1>'}</span><br/>
                                        <span>{''.padStart(13)}</span>
                                        <span style={{color: "#00b8e6"}}>{' <h1 '}</span>
                                        <span style={{border : hlIlCss ? "1px solid #ffff00" : ""}}>
                                        <span style={{color: "#d966ff"}}>{'style={'}</span>
                                        <span style={{border : hlObjname ? "1px dashed #ffff00" : "", padding : hlObjname ? "0 3px" : ""}}>
                                        <span style={{color: "#ff8c1a"}}>{'thirdTag'}</span></span>
                                        <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                        <span style={{color: "#00b8e6"}}>{'> '}</span>
                                        <span style={{color: "#ffffe6"}}>{'This is thirdTag '}</span>
                                        <span style={{color: "#00b8e6"}}>{'</h1>'}</span>
                                        <span style={{color: "#ffffe6"}}>{', '}</span><br/>
                                        <span>{''.padStart(13)}</span>
                                        <span style={{color: "#99ccff"}}>{'document.'}</span>
                                        <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                        <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                        <span style={{color: "#ffff80"}}>{')'}</span><br/>
                                        <span style={{color: "#ffffe6"}}>{');'}</span><br/><br/>
                                      </pre>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="outputBox">
                                    {output4RCf ? 
                                      <div className="suboutputBox">
                                        <div className="output">
                                          <div className="inOutput">
                                            <h1 style={{color:"#0000FF"}}>This is firstTag</h1>
                                            <h1 style={{color:"#FF0000"}}>This is secondTag</h1>
                                            <h1 style={{color:"#008000"}}>This is thirdTag</h1>
                                          </div>
                                          </div>
                                          <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                              showOutput4RCf(false);}}>Hide output</button>
                                          </div>
                                      </div> 
                                    : <button className="btn btn-primary showOp" onClick={() =>{showOutput4RCf(true); }}>See output</button>}
                                </div>
                               <h6>In any other file, you can apply Internal CSS in same way.</h6>
                            </ul>
                          </div>
                      </div>
                  </div>
               </div>

               <div className="subdiv">
                   <div className="subdiv_child">
                      <div className="contentBox">
                          <div className="heading_name">
                          <h1>How to use External CSS ?</h1>
                        </div>
                          <div className="heading_detail">
                            <ul>
                              <li>In React, External Css is used same as we used in HTML. But the only difference is that in Recat we use <strong>className</strong> insted of <strong>class </strong>
                              <span onClick={() =>{
                                setHlECsscN(true);
                                setTimeout(()=>{setHlECsscN(false)},3000);
                              }} style={{color: "#0000FF", cursor : "pointer"}}>Click here</span> to access a particular tag because the <strong>class</strong> is a predefine keyword in React.</li>
                              <li>For External CSS, we will use our <strong>index.css</strong> file and to use this css file in <strong>index.js</strong> or any other file, we have to import it in that file <span onClick={() =>{
                                setHlECssImp(true);
                                setTimeout(()=>{setHlECssImp(false)},3000);
                              }} style={{color: "#0000FF", cursor : "pointer"}}>Click here</span></li>
                              <div className="codediv">
                                <div className="filesname">
                                  <ul>
                                    <li onClick={showIndexfileRCf1} style={{background : backcolorRCf1 ? "#1B1B1B" : "", color : backcolorRCf1 ? "#ddd" : ""}}>index.js</li>
                                    <li onClick={showCssfileRCf1} style={{background : backcolorRCf2 ?  "#1B1B1B" : "", color : backcolorRCf2 ? "#ddd" : ""}}>index.css</li>
                                  </ul>
                                </div>

                            <div className="filecode">
                                    {indexfileRCf1 ? 

                                      <div className="sub_filecode">
                                        <p><span>//</span> This is index.js file</p>
                                        <div className="code">
                                          <pre>
                                            <span style={{color: "#d966ff"}}>{' import '}</span>
                                            <span style={{color: "#99ccff"}}>{' React '}</span>
                                            <span style={{color: "#d966ff"}}>{' from '}</span>
                                            <span style={{color: "#ff8c1a"}}>'react;'</span><br/>
                                            <span style={{color: "#d966ff"}}>{' import '} </span>
                                            <span style={{color: "#99ccff"}}>{' ReactDom '}</span>
                                            <span style={{color: "#d966ff"}}>{' from '}</span>
                                            <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/>
                                            <span style={{border : hlECssImp ? "1px dashed #ffff00" : ""}}>
                                            <span style={{color: "#d966ff"}}>{' import '}</span>
                                            <span style={{color: "#ff8c1a"}}>'./index.css';</span></span><br/><br/><br/>
                                            <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                            <span style={{color: "#ffff80"}}>{'render('}</span><br/>
                                            <span>{''.padStart(14)}</span>
                                            <span style={{color: "#00b8e6"}}>{' <h1 '}</span>
                                            <span style={{border : hlECsscN ? "1px dashed #ffff00" : ""}}>
                                            <span style={{color: "#d966ff"}}>{'className'}</span></span>
                                            <span style={{color: "#d966ff"}}>{'="'}</span>
                                            <span style={{color: "#ff8c1a"}}>{'heading'}</span>
                                            <span style={{color: "#d966ff"}}>{'"'}</span>
                                            <span style={{color: "#00b8e6"}}>{'> '}</span>
                                            <span style={{color: "#ffffe6"}}>{'This is Heading Tag '}</span>
                                            <span style={{color: "#00b8e6"}}>{'</h1>'}</span>
                                            <span style={{color: "#ffffe6"}}>{', '}</span><br/>
                                            <span>{''.padStart(13)}</span>
                                            <span style={{color: "#99ccff"}}>{'document.'}</span>
                                            <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                            <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                            <span style={{color: "#ffff80"}}>{')'}</span><br/>
                                            <span style={{color: "#ffffe6"}}>{');'}</span>
                                          </pre>
                                        </div>
                                      </div>

                                       : null}

                                    {cssfileRCf1 ? 

                                      <div className="sub_filecode">
                                        <p><span>//</span> This is index.css file</p>
                                        <div className="code">
                                          <pre>
                                            <span style={{color: "#99ccff"}}>{' .heading'}</span>
                                            <span style={{color: "#99ccff"}}>{'{'}</span><br/>
                                            <span style={{color: "#ffff80"}}>{'   color :'}</span>
                                            <span style={{color: "#FF0000"}}>{' #FF0000 '}</span>
                                            <span style={{color: "#99ccff"}}>{';'}</span><br/>
                                            <span style={{color: "#ffff80"}}>{'   textTransform :'}</span>
                                            <span style={{color: "#ff8c1a"}}>{' uppercase'}</span>
                                            <span style={{color: "#99ccff"}}>{';'}</span><br/>
                                            <span style={{color: "#99ccff"}}>{'}'}</span>
                                          </pre>
                                        </div>
                                      </div>

                                     : null}
                                  </div>
                              </div>

                              <div className="outputBox">
                                    {output5RCf ? 
                                      <div className="suboutputBox">
                                        <div className="output">
                                          <div className="inOutput">
                                            <h1 style={{color:"#FF0000", textTransform : "uppercase"}}>This is Heading Tag</h1>
                                          </div>
                                          </div>
                                          <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                            showOutput5RCf(false);}}>Hide output</button>
                                          </div>
                                      </div> 
                                    : <button className="btn btn-primary showOp" onClick={() =>{showOutput5RCf(true); }}>See output</button>}
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
                          <h1>Difference between <strong>HTML CSS </strong> and <strong>React CSS</strong> ?</h1>
                        </div>
                          <div className="heading_detail">
                            <ul>
                              <li><strong>HTML Inline CSS : </strong><br/> 
                              <div style={{marginLeft:"30px"}}><strong>Syntax : <span style={{marginLeft:"10px", color:"#0000FF"}}> style="" </span></strong> 
                                <p>Example : 
                                    <span style={{color:"#0000FF"}}> style="</span>
                                    <span style={{color:"#ff8c1a"}}>color :</span>
                                    <span style={{color:"#00b8e6"}}> skyblue;</span>
                                    <span style={{border: hlDiff1 ? "1px dashed #000" : ""}}>
                                    <span style={{color:"#ff8c1a"}}> margin-left :</span></span>
                                    <span style={{color:"#00b8e6"}}> 5px;</span>
                                    <span style={{color:"#0000FF"}}>"</span>
                                  </p>
                              </div><br/>

                               <strong>React Inline CSS : </strong><br/>
                               <div style={{marginLeft:"30px"}}><span><strong>Syntax : <span style={{marginLeft:"10px", color:"#0000FF"}}> style={'{  }'} </span></strong></span>
                                 <p>Example : 
                                   <span style={{color:"#0000FF"}}> style={'{{'}</span>
                                   <span style={{color:"#ff8c1a"}}>color :</span>
                                   <span style={{color:"#00b8e6"}}>"skyblue",</span>
                                   <span style={{border: hlDiff1 ? "1px dashed #000" : ""}}>
                                   <span style={{color:"#ff8c1a"}}> marginLeft :</span></span>
                                   <span style={{color:"#00b8e6"}}>"5px"</span>
                                   <span style={{color:"#0000FF"}}>{'}}'}</span>
                                 </p>
                               </div>
                               <p>You noticed, we used margin left as <strong>margin-left</strong> in HTML CSS and <strong>marginLeft</strong> in React CSS <span onClick={() =>{
                                  setHlDiff1(true);
                                  setTimeout(()=>{setHlDiff1(false)},3000);
                                }} style={{color: "#0000FF", cursor : "pointer"}}>Click here</span><br/>
                                In React we uses <strong>camelCase</strong> when we have double-word CSS properties like <strong>margin-left, font-size, text-transform, border-bottom,</strong> etc.
                                So in this case we concate both words and set first word complete in small letters and first letter of second word in capital and rest of letters of second word in small letters ( It means first word in small letters and second word as Capitalized ). 
                                </p><hr/>
                                <p>Example : let we have a CSS property <strong>text-transform</strong>. It has 2 words, <strong>text</strong> and <strong>transform</strong><br/> So we use first word as it is or in small letters and second word as Capitalized then we will get a new word that is <strong>textTransform</strong><br/>
                                So <strong>text-transform</strong> changed into <strong>textTransform</strong></p><hr/>
                              </li>
                              <li>For Internal CSS, we use <strong> {'<style> </style>'} </strong> tag in HTML CSS and in React CSS we use <strong>object = {'{ }'}</strong></li>
                              <li>External CSS is same for both but the only difference is that we use <strong>class </strong>and <strong>id</strong> in HTML CSS and  we use <strong>className</strong> and<strong> id</strong> in React CSS to access a particular element for styling.<br/> And we import css file as <strong>{'<link rel="stylesheet" href="filename.css">'}</strong> in HTML and <strong>import './filename.css';</strong> in React.</li>
                            </ul>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </>);
}
export default ReactCss;
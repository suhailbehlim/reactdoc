import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Newfile = (props) =>{

  const [indexfileNf1, setIndexfileNf1] = useState(true);
  const [funfile1, setFunfile1] = useState(false);
  const [hlRetTag, setHlRetTag] = useState(false);
  const [ffname, setFFname] =useState(false);
  const [bgcolorNf1, setbgcolorNf1] = useState(true);
  const [bgcolorNf2, setbgcolorNf2] = useState(false);
  const [hlMNfile, setHlMNfile] = useState(false);
  const [fileborder, setFileborder] = useState(false);
  const [indexfileNf2, setIndexfileNf2] = useState(true);
  const [funfile2, setFunfile2] = useState(false);
  const [hlExp, setHlExp] = useState(false);
  const [hlImp, setHlImp] = useState(false);
  const [bgcolorNf3, setbgcolorNf3] = useState(true);
  const [bgcolorNf4, setbgcolorNf4] = useState(false);
  const [indexfileNf3, setIndexfileNf3] = useState(true);
  const [funfile3, setFunfile3] = useState(false);
  const [hlProps, setHlProps] = useState(false);
  const [hlMNProps, setHlMNProps] = useState(false);
  const [bgcolorNf5, setbgcolorNf5] = useState(true);
  const [bgcolorNf6, setbgcolorNf6] = useState(false);
  const [indexfileNf4, setIndexfileNf4] = useState(true);
  const [classfile, setClassfile] = useState(false);
  const [bgcolorNf7, setbgcolorNf7] = useState(true);
  const [bgcolorNf8, setbgcolorNf8] = useState(false);
  const [hlComponent, setHlComponent] = useState(false);
  const [output1Nf, showOutput1Nf] = useState(false);
  const [output2Nf, showOutput2Nf] = useState(false);
  const [output3Nf, showOutput3Nf] = useState(false);

  const showIndexfileNf1 = () =>{
    setIndexfileNf1(true);
    setFunfile1(false);
    setbgcolorNf1(true);
    setbgcolorNf2(false);
  }
  const showfunfile1 = () =>{
    setIndexfileNf1(false);
    setFunfile1(true);
    setbgcolorNf1(false);
    setbgcolorNf2(true);
  }
  const showIndexfileNf2 = () =>{
    setIndexfileNf2(true);
    setFunfile2(false);
    setbgcolorNf3(true);
    setbgcolorNf4(false);
  }
  const showFunfile2 = () =>{
    setIndexfileNf2(false);
    setFunfile2(true);
    setbgcolorNf3(false);
    setbgcolorNf4(true);
  }

  const showIndexfileNf3 = () =>{
    setIndexfileNf3(true);
    setFunfile3(false);
    setbgcolorNf5(true);
    setbgcolorNf6(false);
  }
  const showFunfile3 = () =>{
    setIndexfileNf3(false);
    setFunfile3(true);
    setbgcolorNf5(false);
    setbgcolorNf6(true);
  }

  const showIndexfileNf4 = () =>{
    setIndexfileNf4(true);
    setClassfile(false);
    setbgcolorNf7(true);
    setbgcolorNf8(false);
  }
  const showClassfile = () =>{
    setIndexfileNf4(false);
    setClassfile(true);
    setbgcolorNf7(false);
    setbgcolorNf8(true);
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
                            <h1>How to create a new file ?</h1>
                          </div>
                            <div className="heading_detail">
                              <ul>
                                <li>
                                  Go to File -> New File -> Save it with <strong> .jsx </strong> extention because React is all about components and <strong> .jsx </strong> is refers to a component.
                                ( Example : <strong> MyNewfile.jsx </strong>) and file name must be Capitalized. Also you can use <strong> .js </strong> extension</li>
                                
                                <li>In new file, We can write our code in two ways - </li><br/>
                                  <h6>1)By Functional components</h6>
                                    <p>A Functional component is a function that takes <strong>props</strong> and returns <strong>JSX</strong>.</p>
                                    <p>By <strong>Normal function</strong></p>
                                    <div className="syntax">
                                        <pre>
                                          <span style={{color: "#99ccff"}}>{'function '}</span>
                                          <span style={{color: "#ffff80"}}>{'Filename()'}</span>
                                          <span style={{color: "#ffff80"}}>{'{'}</span><br/>
                                          <span>{''.padStart(4)}</span>
                                          <span style={{color: "#d966ff"}}>{'return'}</span>
                                          <span style={{color: "#00b8e6"}}>{' JSX'}</span><br/>
                                          <span style={{color: "#ffff80"}}>{'}'}</span>
                                        </pre>
                                    </div>

                                    <p>OR by <strong>Fat Arrow Function</strong></p>

                                    <div className="syntax">
                                        <pre>
                                          <span style={{color: "#99ccff"}}>{'const '}</span>
                                          <span style={{color: "#ffff80"}}>{'Filename'}</span>
                                          <span style={{color: "#99ccff"}}>{' = '}</span>
                                          <span style={{color: "#ffff80"}}>{'()'}</span>
                                          <span style={{color: "#99ccff"}}>{' => '}</span>
                                          <span style={{color: "#ffff80"}}>{'{'}</span><br/>
                                          <span>{''.padStart(4)}</span>
                                          <span style={{color: "#d966ff"}}>{'return'}</span>
                                          <span style={{color: "#00b8e6"}}>{' JSX'}</span><br/>
                                          <span style={{color: "#ffff80"}}>{'}'}</span>
                                        </pre>
                                    </div>
                                    <p><strong>Fat Arrow Function : </strong> Fat Arrow Function is updated in <strong>ES6</strong> that syntax you can see above. Mostly Fat Arrow Function is used in React.</p>
                                    <hr/>

                                  <h6>2) By Class components</h6>
                                    <p>A class component is a JavaScript class that extends React. Component which has a render method.The JSX to render will be returned inside the render method</p>
                                    <div className="syntax">
                                        <pre>
                                          <span style={{color: "#99ccff"}}>{'class '}</span>
                                          <span style={{color: "#33ff77"}}>{'Filename'}</span>
                                          <span style={{color: "#99ccff"}}>{' extends '}</span>
                                          <span style={{color: "#33ff77"}}>{'Component'}</span>
                                          <span style={{color: "#99ccff"}}>{' { '}</span><br/>
                                          <span>{''.padStart(3)}</span>
                                          <span style={{color: "#ffff80"}}>{'render()'}</span>
                                          <span style={{color: "#ffff80"}}>{' { '}</span><br/>
                                          <span>{''.padStart(4)}</span>
                                          <span style={{color: "#d966ff"}}>{'return'}</span>
                                          <span style={{color: "#00b8e6"}}>{' JSX'}</span><br/>
                                          <span>{''.padStart(3)}</span>
                                          <span style={{color: "#ffff80"}}>{'}'}</span><br/>
                                          <span style={{color: "#99ccff"}}>{'}'}</span><br/>
                                        </pre>
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
                              <h1>Print "Hello World"  By Functional Component ?</h1>
                            </div>
                          <div className="heading_detail">
                            <ul>
                              <li>Use a functional component syntax - </li>
                              
                              <div className="syntax">
                                  <pre>
                                    <span style={{color: "#99ccff"}}>{'const '}</span>
                                    <span style={{color: "#ffff80"}}>{'Filename = () => '}</span>
                                    <span style={{color: "#ffff80"}}>{'{'}</span><br/>
                                    <span>{''.padStart(4)}</span>
                                    <span style={{color: "#d966ff"}}>{'return'}</span>
                                    <span style={{color: "#00b8e6"}}>{' JSX'}</span><br/>
                                    <span style={{color: "#ffff80"}}>{'}'}</span>
                                  </pre>
                              </div>

                              <li>Return "Hello World" by using a tag instead of JSX in MyNewfile.jsx <span onClick={() =>{

                                  showfunfile1(true);
                                  setTimeout(()=>{setHlRetTag(true)},1000);
                                  setTimeout(()=>{setHlRetTag(false)},3000);
                                }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span> ).</li>

                              <p>Note: Function name must be same as filename <span onClick={() =>{
                                    showfunfile1(true);
                                    setTimeout(() => {setFFname(true)},1000);
                                    setTimeout(() => {setFFname(false)},3000);
                                }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span></p>

                              <div className="codediv">
                                  <div className="filesname">
                                    <ul>
                                      <li onClick={showIndexfileNf1} style={{background : bgcolorNf1 ? "#1B1B1B" : "", color : bgcolorNf1 ? "#ddd" : ""}}>index.js</li>
                                      <li onClick={showfunfile1} style={{background : bgcolorNf2 ?  "#1B1B1B" : "", color : bgcolorNf2 ? "#ddd" : "", border : hlMNfile ? "2px dashed #000" : ""}}>
                                      <span style={{ border : ffname ? "1px dashed #ffff00" : "", padding : ffname ? "0 3px" : "" }}>
                                      MyNewfile</span>.jsx</li>
                                    </ul>
                                  </div>

                              <div className="filecode">

                                    {indexfileNf1 ? 
         
                                      <div className="sub_filecode">
                                        <p><span>//</span> This is index.js file</p>
                                        <div className="code">
                                          <pre>
                                            <span style={{color: "#d966ff"}}>{' import '}</span>
                                            <span style={{color: "#99ccff"}}>{' React '}</span>
                                            <span style={{color: "#d966ff"}}>{' from '}</span>
                                            <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                            <span style={{color: "#d966ff"}}>{' import '} </span>
                                            <span style={{color: "#99ccff"}}>{'ReactDom '}</span>
                                            <span style={{color: "#d966ff"}}>{' from '}</span>
                                            <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/>
                                            <span style={{color: "#d966ff"}}>{' import '}</span>
                                            <span style={{color: "skyblue"}}>{' MyNewfile '}</span>
                                            <span style={{color: "#d966ff"}}>{' from '} </span>
                                            <span style={{color: "#ff8c1a"}}>'./MyNewfile';</span><br/><br/>
                                            <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                            <span style={{color: "#ffff80"}}>{'render('}</span>
                                            <span style={{color: "#00b8e6"}}>{' <MyNewfile/> '}</span>
                                            <span style={{color: "#ffffe6"}}>{', '}</span>
                                            <span style={{color: "#99ccff"}}>{'document.'}</span>
                                            <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                            <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                            <span style={{color: "#ffff80"}}>{')'}</span>
                                            <span style={{color: "#ffffe6"}}>{');'}</span>
                                          </pre>
                                        </div>
                                      </div>

                                       : null}

                                    {funfile1 ? 

                                      <div className="sub_filecode">
                                        <p><span>//</span> This is MyNewfile.jsx file</p>
                                        <div className="code">
                                          <pre>
                                            <span style={{color: "#99ccff"}}>{'const '}</span>
                                            <span style={{ border : ffname ? "1px dashed #ffff00" : "", padding : ffname ? "0 3px" : "" }}>
                                            <span style={{color: "#ffff80",}}>{'MyNewfile'}</span></span>
                                            <span style={{color: "#99ccff",}}>{' = () => '}</span>
                                            <span style={{color: "#ffff80"}}>{'{'}</span><br/>
                                            <span>{''.padStart(4)}</span>
                                            <span style={{color: "#d966ff"}}>{'return'}</span>
                                            <span style={{border : hlRetTag ? "1px dashed #ffff00" : ""}}>
                                            <span style={{color: "#00b8e6"}}>{' <h1> '}</span>
                                            <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                            <span style={{color: "#00b8e6"}}>{'</h1> '}</span></span><br/>
                                            <span style={{color: "#ffff80"}}>{'}'}</span>

                                          </pre>
                                        </div>
                                      </div>

                                      : null}

                                    </div>
                                </div>

                              <p>If we use a file in any other file then first we will have to export that file from it <span onClick={() =>{
                                    showFunfile2(true);
                                    setTimeout(() => {setHlExp(true)},1000);
                                    setTimeout(() => {setHlExp(false)},3000);
                                }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span> and after you can import it where you want to use it and use as a tag <span onClick={() =>{
                                    showIndexfileNf2(true);
                                    setTimeout(() => {setHlImp(true)},1000);
                                    setTimeout(() => {setHlImp(false)},3000);
                                }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span></p>
                              


                              <div className="codediv">
                                  <div className="filesname">
                                    <ul>
                                      <li onClick={showIndexfileNf2} style={{background : bgcolorNf3 ? "#1B1B1B" : "", color : bgcolorNf3 ? "#ddd" : ""}}>index.js</li>
                                      <li onClick={showFunfile2} style={{background : bgcolorNf4 ?  "#1B1B1B" : "", color : bgcolorNf4 ? "#ddd" : ""}}>MyNewfile.jsx</li>
                                    </ul>
                                  </div>

                              <div className="filecode">
                                      {indexfileNf2 ? 

                                        <div className="sub_filecode">
                                          <p><span>//</span> This is index.js file</p>
                                          <div className="code">
                                            <pre>
                                              <span style={{color: "#d966ff"}}>{' import '}</span>
                                              <span style={{color: "#99ccff"}}>{' React '}</span>
                                              <span style={{color: "#d966ff"}}>{' from '}</span>
                                              <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                              <span style={{color: "#d966ff"}}>{' import '} </span>
                                              <span style={{color: "#99ccff"}}>{'ReactDom '}</span>
                                              <span style={{color: "#d966ff"}}>{' from '}</span>
                                              <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/>
                                              <span style={{border : hlImp ? "1px dashed #ffff00" : ""}}>
                                              <span style={{color: "#d966ff"}}>{' import '}</span>
                                              <span style={{color: "skyblue"}}>{' MyNewfile '}</span>
                                              <span style={{color: "#d966ff"}}>{' from '} </span>
                                              <span style={{color: "#ff8c1a"}}>'./MyNewfile';</span></span><br/><br/>
                                              <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                              <span style={{color: "#ffff80"}}>{'render('}</span>
                                              <span style={{border : hlImp ? "1px dashed #ffff00" : ""}}>
                                              <span style={{color: "#00b8e6"}}>{' <MyNewfile/>'}</span></span>
                                              <span style={{color: "#ffffe6"}}>{', '}</span>
                                              <span style={{color: "#99ccff"}}>{'document.'}</span>
                                              <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                              <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                              <span style={{color: "#ffff80"}}>{')'}</span>
                                              <span style={{color: "#ffffe6"}}>{');'}</span>
                                            </pre>
                                          </div>
                                        </div>

                                         : null}

                                      {funfile2 ? 

                                        <div className="sub_filecode">
                                          <p><span>//</span> This is MyNewfile.jsx file</p>
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
                                              <span style={{color: "#99ccff"}}>{'const '}</span>
                                              <span style={{color: "#ffff80"}}>{'MyNewfile'}</span>
                                              <span style={{color: "#99ccff"}}>{' = () => '}</span>
                                              <span style={{color: "#ffff80"}}>{'{'}</span><br/>
                                              <span>{''.padStart(4)}</span>
                                              <span style={{color: "#d966ff"}}>{'return'}</span>
                                              <span style={{color: "#00b8e6"}}>{' <h1> '}</span>
                                              <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                              <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                              <span style={{color: "#ffff80"}}>{'}'}</span><br/><br/>
                                              <span style={{border: hlExp ? "1px dashed #ffff00" : ""}}>
                                              <span style={{color: "#d966ff"}}>{'export'}</span>
                                              <span style={{color: "#d966ff"}}>{' default '}</span>
                                              <span style={{color: "#ffffe6"}}>{'MyNewfile;'}</span></span>
                                            </pre>
                                          </div>
                                        </div>

                                       : null}
                                    </div>
                                </div>

                                 <div className="outputBox">
                                  {output1Nf ? 
                                    <div className="suboutputBox">
                                      <div className="output">
                                        <div className="inOutput">
                                          <h1>Hello World</h1>
                                        </div>
                                      </div>
                                      <div>
                                        <button className="btn btn-danger hideOp" onClick={()=>{
                                          showOutput1Nf(false);}}>Hide output</button> 
                                        <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                      </div>
                                    </div> 
                                  : <button className="btn btn-primary showOp" onClick={() =>{showOutput1Nf(true); }}>See output</button>}
                                </div>

                                <p><strong>Props : </strong>
                                In functionl component definition we used a word that is <strong>props,</strong> it is an argument passed into React component (Example : {'<MyNewfile/>'})
                                <br/>Props are like HTML attributes.<br/>Let's do it - <br/>
                                First, we create or pass a props in React Component like this - <code>{'<MyNewfile myName="user">'}</code> <span onClick={() =>{
                                    showIndexfileNf3(true);
                                    setTimeout(() => {setHlProps(true)},1000);
                                    setTimeout(() => {setHlProps(false)},3000);
                                }} style={{color: "#0000ff", cursor : "pointer"}}>Click here </span><br/>
                                and now, we just put this attribute <strong>myName</strong> in that Component file in which we passed it (in MyNewfile.jsx ) by help of props inside curly brackets as well as we will have to pass <strong>props</strong> inside function as parameter <span onClick={() =>{
                                    showFunfile3(true);
                                    setTimeout(() => {setHlMNProps(true)},1000);
                                    setTimeout(() => {setHlMNProps(false)},3000);
                                }} style={{color: "#0000ff", cursor : "pointer"}}>Click here </span>
                                </p><hr/>


                                <div className="codediv">
                                  <div className="filesname">
                                    <ul>
                                      <li onClick={showIndexfileNf3} style={{background : bgcolorNf5 ? "#1B1B1B" : "", color : bgcolorNf5 ? "#ddd" : ""}}>index.js</li>
                                      <li onClick={showFunfile3} style={{background : bgcolorNf6 ?  "#1B1B1B" : "", color : bgcolorNf6 ? "#ddd" : ""}}>MyNewfile.jsx</li>
                                    </ul>
                                  </div>

                              <div className="filecode">
                                      {indexfileNf3 ? 

                                        <div className="sub_filecode">
                                          <p><span>//</span> This is index.js file</p>
                                          <div className="code">
                                            <pre>
                                              <span style={{color: "#d966ff"}}>{' import '}</span>
                                              <span style={{color: "#99ccff"}}>{' React '}</span>
                                              <span style={{color: "#d966ff"}}>{' from '}</span>
                                              <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                              <span style={{color: "#d966ff"}}>{' import '} </span>
                                              <span style={{color: "#99ccff"}}>{'ReactDom '}</span>
                                              <span style={{color: "#d966ff"}}>{' from '}</span>
                                              <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/>
                                              <span style={{color: "#d966ff"}}>{' import '}</span>
                                              <span style={{color: "skyblue"}}>{' MyNewfile '}</span>
                                              <span style={{color: "#d966ff"}}>{' from '} </span>
                                              <span style={{color: "#ff8c1a"}}>'./MyNewfile';</span><br/><br/>
                                              <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                              <span style={{color: "#ffff80"}}>{'render('}</span>
                                              <span style={{color: "#00b8e6"}}>{' <MyNewfile'}</span>
                                              <span style={{border: hlProps ? "1px dashed #ffff00" : ""}}>
                                              <span style={{color: "#ffff80"}}>{' myName="'}</span>
                                              <span style={{color: "#ff8c1a"}}>{'user'}</span>
                                              <span style={{color: "#ffff80"}}>{'"'}</span></span>
                                              <span style={{color: "#00b8e6"}}>{' />'}</span>
                                              <span style={{color: "#ffffe6"}}>{', '}</span>
                                              <span style={{color: "#99ccff"}}>{'document.'}</span>
                                              <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                              <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                              <span style={{color: "#ffff80"}}>{')'}</span>
                                              <span style={{color: "#ffffe6"}}>{');'}</span>
                                            </pre>
                                          </div>
                                        </div>

                                         : null}

                                      {funfile3 ? 

                                        <div className="sub_filecode">
                                          <p><span>//</span> This is MyNewfile.jsx file</p>
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
                                              <span style={{color: "#99ccff"}}>{'const '}</span>
                                              <span style={{color: "#ffff80"}}>{'MyNewfile = ('}</span>
                                              <span style={{border: hlMNProps ? "1px dashed #ffff00" : ""}}>
                                              <span style={{color: "#ff8c1a"}}>{'props'}</span></span>
                                              <span style={{color: "#ffff80"}}>{') => '}</span>
                                              <span style={{color: "#ffff80"}}>{'{'}</span><br/>
                                              <span>{''.padStart(4)}</span>
                                              <span style={{color: "#d966ff"}}>{'return'}</span>
                                              <span style={{color: "#00b8e6"}}>{' <h1> '}</span>
                                              <span style={{color: "#ffffe6"}}>{'Hii,'}</span>
                                              <span style={{border: hlMNProps ? "1px dashed #ffff00" : ""}}>
                                              <span style={{color: "#d966ff"}}>{' {'}</span>
                                              <span style={{color: "#ff8c1a"}}>{'props'}</span>
                                              <span style={{color: "#ffff80"}}>{'.myName'}</span>
                                              <span style={{color: "#d966ff"}}>{'} '}</span></span>
                                              <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                              <span style={{color: "#ffff80"}}>{'}'}</span><br/><br/>
                                              <span style={{color: "#d966ff"}}>{'export'}</span>
                                              <span style={{color: "#d966ff"}}>{' default '}</span>
                                              <span style={{color: "#ffffe6"}}>{'MyNewfile;'}</span>
                                            </pre>
                                          </div>
                                        </div>

                                       : null}
                                    </div>
                                </div>
                                <p>You can use multiple props in React component like <code>{'<MyNewfile props1="props1value" props2="props2value" . . ./>'}</code>  and pass it only one times as paramemter in function and use with props like <code>{'{props.props1}'} {'{props.props2}'} </code>etc.</p>
                                
                                <div className="outputBox">
                                  {output2Nf ? 
                                    <div className="suboutputBox">
                                      <div className="output">
                                        <div className="inOutput">
                                          <h1>Hello World</h1>
                                        </div>
                                      </div>
                                      <div>
                                        <button className="btn btn-danger hideOp" onClick={()=>{
                                          showOutput2Nf(false);}}>Hide output</button> 
                                        <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                      </div>
                                    </div> 
                                  : <button className="btn btn-primary showOp" onClick={() =>{showOutput2Nf(true); }}>See output</button>}
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
                              <h1>Print "Hello World"  By Class Component ?</h1>
                          </div>
                          <div className="heading_detail">
                              <ul>
                                <li>Use a class component syntax - </li>

                                <div className="syntax">
                                    <pre>
                                      <span style={{color: "#99ccff"}}>{'class '}</span>
                                      <span style={{color: "#33ff77"}}>{'Filename'}</span>
                                      <span style={{color: "#99ccff"}}>{' extends '}</span>
                                      <span style={{color: "#33ff77"}}>{'Component'}</span>
                                      <span style={{color: "#99ccff"}}>{' { '}</span><br/>
                                      <span>{''.padStart(3)}</span>
                                      <span style={{color: "#ffff80"}}>{'render()'}</span>
                                      <span style={{color: "#ffff80"}}>{' { '}</span><br/>
                                      <span>{''.padStart(5)}</span>
                                      <span style={{color: "#d966ff"}}>{'return'}</span>
                                      <span style={{color: "#00b8e6"}}>{' JSX'}</span><br/>
                                      <span>{''.padStart(3)}</span>
                                      <span style={{color: "#ffff80"}}>{'}'}</span><br/>
                                      <span style={{color: "#99ccff"}}>{'}'}</span><br/>
                                    </pre>
                                </div>

                                <li>Return "Hello World" with a tag (JSX element) instead of JSX.</li>
                                <p>Note: Class name must be same as filename <span onClick={() =>{
                                      showClassfile(true);
                                      setTimeout(() => {setFFname(true)},1000);
                                      setTimeout(() => {setFFname(false)},3000);
                                  }} style={{color: "#0000ff", cursor : "pointer"}}>Click here</span></p>

                                <div className="codediv">
                                    <div className="filesname">
                                      <ul>
                                        <li onClick={showIndexfileNf4} style={{background : bgcolorNf7 ? "#1B1B1B" : "", color : bgcolorNf7 ? "#ddd" : ""}}>index.js</li>
                                        <li onClick={showClassfile} style={{background : bgcolorNf8 ?  "#1B1B1B" : "", color : bgcolorNf8 ? "#ddd" : ""}}>
                                        <span style={{ border : ffname ? "1px dashed #ffff00" : "", padding : ffname ? "0 3px" : "" }}>
                                        MyNewfile</span>.jsx</li>
                                      </ul>
                                    </div>

                                <div className="filecode">
                                        {indexfileNf4 ? 

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
                                                <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/>
                                                <span style={{color: "#d966ff"}}>{' import '}</span>
                                                <span style={{color: "skyblue"}}>{' MyNewfile '}</span>
                                                <span style={{color: "#d966ff"}}>{' from '} </span>
                                                <span style={{color: "#ff8c1a"}}>'./MyNewfile';</span><br/><br/>
                                                <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                                <span style={{color: "#ffff80"}}>render(</span>
                                                <span style={{color: "#00b8e6"}}>{' <MyNewfile/> '}</span>
                                                <span style={{color: "#ffffe6"}}>{', '}</span>
                                                <span style={{color: "#99ccff"}}>{'document.'}</span>
                                                <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                                <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                                <span style={{color: "#ffff80"}}>)</span>
                                                <span style={{color: "#ffffe6"}}>);</span>
                                              </pre>
                                            </div>
                                          </div>

                                           : null}

                                        {classfile ? 

                                          <div className="sub_filecode">
                                            <p><span>//</span> This is MyNewfile.jsx file</p>
                                            <div className="code">
                                              <pre>
                                                <span style={{color: "#d966ff"}}>{'import'}</span>
                                                <span style={{color: "#99ccff"}}>{' React,'}</span>
                                                <span style={{border : hlComponent ? "1px dashed #ffff00" : ""}}>
                                                <span style={{color: "#99ccff"}}>{'{'}</span>
                                                <span style={{color: "#99ccff"}}>{' Component '}</span>
                                                <span style={{color: "#99ccff"}}>{'}'}</span></span>
                                                <span style={{color: "#d966ff"}}>{' from '}</span>
                                                <span style={{color: "#ff8c1a"}}>'react';</span><br/><br/>
                                                <span style={{color: "#99ccff"}}>{'class '}</span>
                                                <span style={{ border : ffname ? "1px dashed #ffff00" : "", padding : ffname ? "0 3px" : "" }}>
                                                <span style={{color: "#33ff77"}}>{'MyNewfile'}</span></span>
                                                <span style={{color: "#99ccff"}}>{' extends '}</span>
                                                <span style={{color: "#33ff77"}}>{'Component'}</span>
                                                <span style={{color: "#99ccff"}}>{' { '}</span><br/>
                                                <span>{''.padStart(3)}</span>
                                                <span style={{color: "#ffff80"}}>{'render()'}</span>
                                                <span style={{color: "#ffff80"}}>{' { '}</span><br/>
                                                <span>{''.padStart(5)}</span>
                                                <span style={{color: "#d966ff"}}>{'return'}</span>
                                                <span style={{color: "#00b8e6"}}>{' <h1> '}</span>
                                                <span style={{color: "#ffffe6"}}>{'Hello World '}</span>
                                                <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                                <span>{''.padStart(3)}</span>
                                                <span style={{color: "#ffff80"}}>{'}'}</span><br/>
                                                <span style={{color: "#99ccff"}}>{'}'}</span><br/>
                                                <span style={{color: "#d966ff"}}>{'export'}</span>
                                                <span style={{color: "#d966ff"}}>{' default '}</span>
                                                <span style={{color: "#ffffe6"}}>{'MyNewfile;'}</span>
                                              </pre>
                                            </div>
                                          </div>

                                         : null}
                                      </div>
                                  </div>

                                <p>Here, we import an extra thing with <strong>React</strong> that is <strong>Component</strong> <span onClick={() =>{
                                      showClassfile(true);
                                      setTimeout(() => {setHlComponent(true)},1000);
                                      setTimeout(() => {setHlComponent(false)},3000);
                                  }} style={{color: "#0000ff", cursor : "pointer"}}>Click here </span>
                                because here we are using class component and in ReactJS we can't use anything without import that.</p>
                              
                                <div className="outputBox">
                                  {output3Nf ? 
                                    <div className="suboutputBox">
                                      <div className="output">
                                        <div className="inOutput">
                                          <h1>Hello World</h1>
                                        </div>
                                      </div>
                                      <div>
                                        <button className="btn btn-danger hideOp" onClick={()=>{
                                          showOutput3Nf(false);}}>Hide output</button> 
                                        <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                      </div>
                                    </div> 
                                  : <button className="btn btn-primary showOp" onClick={() =>{showOutput3Nf(true); }}>See output</button>}
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
export default Newfile;
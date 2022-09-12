import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Hooks = (props) =>{
  const [output1Hooks, showOutput1Hooks] = useState(false);
  const [displayText1, setDisplayText1] = useState();
  const [indexfileuS, setIndexfileuS] = useState(true);
  const [uSfile, setuSfile] = useState(false);
  const [bgcolorHooks1, setBgcolorHooks1] = useState(true);
  const [bgcolorHooks2, setBgcolorHooks2] = useState(false);
  const [hlImpuS, setHlImpuS] = useState(false);
  const [hluseStateDD, setHluseStateDD] = useState(false);
  const [hlTags, setHlTags] = useState(false);
  const [hlonClick, setHlonClick] = useState(false);
  const [hlonClickdef, setHlonClickdef] = useState(false);
  const [output2Hooks, showOutput2Hooks] = useState(false);
  const [pageLoad1, setpageLoad1] = useState(false);
  const [pageLoad2, setpageLoad2] = useState(false);
  const [countPageload, setCountPageload] = useState(0);
  const [displayText2, setDisplayText2] = useState();
  const [pageRender1, setpageRender1] = useState(false);
  const [pageUpdate1, setpageUpdate1] = useState(false);
  const [countuE, setCountuE] = useState(1);
  const [indexfileuE, setIndexfileuE] = useState(true);
  const [uEfile, setuEfile] = useState(false);
  const [bgcolorHooks3, setBgcolorHooks3] = useState(true);
  const [bgcolorHooks4, setBgcolorHooks4] = useState(false);
  const [hlImpuE, setHlImpuE] = useState(false);
  const [hlpgCont, setHlpgCont] = useState(false);
  const [hluEffect, setHluEffect] = useState(false);
  const [hlcallbackD, setHlcallbackD] = useState(false);
  const [hluE, setHluE] = useState(false);
  const [hlIncallback, setHlIncallback] = useState(false);
  const [output3Hooks, showOutput3Hooks] = useState(false);
  const [displayText3, setDisplayText3] = useState();
  const [pageLoad3, setpageLoad3] = useState(false);
  const [pageRender2, setpageRender2] = useState(false);
  const [pageUpdate2, setpageUpdate2] = useState(false);
  const [countuSuE, setCountuSuE] = useState(1);
  const [indexfileuSuE, setIndexfileuSuE] = useState(true);
  const [uSuEfile, setuSuEfile] = useState(false);
  const [bgcolorHooks5, setBgcolorHooks5] = useState(true);
  const [bgcolorHooks6, setBgcolorHooks6] = useState(false);
  const [hlbothuE, setHlbothuE] = useState(false);
  const [hlFuEArr, setHlFuEArr] = useState(false);
  const [hlSuEArr, setHlSuEArr] = useState(false);
  const [hlbtnId, setHlbtnId] = useState(false);
  const [indexfileuC1, setIndexfileuC1] = useState(true);
  const [fileContext1, setFileContext1] = useState(false);
  const [fileA1, setFileA1] = useState(false);
  const [fileB1, setFileB1] = useState(false);
  const [fileC1, setFileC1] = useState(false);
  const [bgcolorHooks7, setBgcolorHooks7] = useState(true);
  const [bgcolorHooks8, setBgcolorHooks8] = useState(false);
  const [bgcolorHooks9, setBgcolorHooks9] = useState(false);
  const [bgcolorHooks10, setBgcolorHooks10] = useState(false);
  const [bgcolorHooks11, setBgcolorHooks11] = useState(false);
  const [hlCont, setHlCont] = useState(false);
  const [hlImpCont, setHlImpCont] = useState(false);
  const [hlcompA, setHlcompA] = useState(false);
  const [hlcompB, setHlcompB] = useState(false);
  const [hlcompC, setHlcompC] = useState(false);
  const [hlProvider1, setHlProvider1] = useState(false);
  const [hlExpCont1, setHlExpCont1] = useState(false);
  const [hlImpContCons1, setHlImpContCons1] = useState(false);
  const [hlConsumer1, setHlConsumer1] = useState(false);
  const [output4Hooks, showOutput4Hooks] = useState(false);
  const [indexfileuC2, setIndexfileuC2] = useState(true);
  const [fileContext2, setFileContext2] = useState(false);
  const [fileA2, setFileA2] = useState(false);
  const [fileB2, setFileB2] = useState(false);
  const [fileC2, setFileC2] = useState(false);
  const [bgcolorHooks12, setBgcolorHooks12] = useState(true);
  const [bgcolorHooks13, setBgcolorHooks13] = useState(false);
  const [bgcolorHooks14, setBgcolorHooks14] = useState(false);
  const [bgcolorHooks15, setBgcolorHooks15] = useState(false);
  const [bgcolorHooks16, setBgcolorHooks16] = useState(false);
  const [hlbothCont, setHlbothCont] = useState(false);
  const [hlProvider2, setHlProvider2] = useState(false);
  const [hlExpCont2, setHlExpCont2] = useState(false);
  const [hlImpContCons2, setHlImpContCons2] = useState(false);
  const [hlConsumer2, setHlConsumer2] = useState(false);
  const [output5Hooks, showOutput5Hooks] = useState(false);
  const [hlImpuC, setHlImpuC] = useState(false);
  const [hluCD, setHluCD] = useState(false);
  const [hluCPara, setHluCPara] = useState(false);
  

  const showIndexfileHooks1 = () => {
    setIndexfileuS(true);
    setuSfile(false);
    setBgcolorHooks1(true);
    setBgcolorHooks2(false);
  }
  const showuSfile = () => {
    setuSfile(true);
    setIndexfileuS(false);
    setBgcolorHooks1(false);
    setBgcolorHooks2(true);
  }
  const showIndexfileHooks2 = () => {
    setIndexfileuE(true);
    setuEfile(false);
    setBgcolorHooks3(true);
    setBgcolorHooks4(false);
  }
  const showuEfile = () => {
    setuEfile(true);
    setIndexfileuE(false);
    setBgcolorHooks3(false);
    setBgcolorHooks4(true);
  }

  const showIndexfileHooks3 = () => {
    setIndexfileuSuE(true);
    setuSuEfile(false);
    setBgcolorHooks5(true);
    setBgcolorHooks6(false);
  }
  const showuSuEfile = () => {
    setuSuEfile(true);
    setIndexfileuSuE(false);
    setBgcolorHooks5(false);
    setBgcolorHooks6(true);
  }
  const showIndexfileHooks4 = () => {
    setIndexfileuC1(true);
    setFileContext1(false);
    setFileA1(false);
    setFileB1(false);
    setFileC1(false);
    setBgcolorHooks7(true);
    setBgcolorHooks8(false);
    setBgcolorHooks9(false);
    setBgcolorHooks10(false);
    setBgcolorHooks11(false);
  }
  const showfileContext1 = () => {
    setIndexfileuC1(false);
    setFileContext1(true);
    setFileA1(false);
    setFileB1(false);
    setFileC1(false);
    setBgcolorHooks7(false);
    setBgcolorHooks8(true);
    setBgcolorHooks9(false);
    setBgcolorHooks10(false);
    setBgcolorHooks11(false);
  }
  const showfileA1 = () => {
    setIndexfileuC1(false);
    setFileContext1(false);
    setFileA1(true);
    setFileB1(false);
    setFileC1(false);
    setBgcolorHooks7(false);
    setBgcolorHooks8(false);
    setBgcolorHooks9(true);
    setBgcolorHooks10(false);
    setBgcolorHooks11(false);
  }
  const showfileB1 = () => {
    setIndexfileuC1(false);
    setFileContext1(false);
    setFileA1(false);
    setFileB1(true);
    setFileC1(false);
    setBgcolorHooks7(false);
    setBgcolorHooks8(false);
    setBgcolorHooks9(false);
    setBgcolorHooks10(true);
    setBgcolorHooks11(false);
  }
  const showfileC1 = () => {
    setIndexfileuC1(false);
    setFileContext1(false);
    setFileA1(false);
    setFileB1(false);
    setFileC1(true);
    setBgcolorHooks7(false);
    setBgcolorHooks8(false);
    setBgcolorHooks9(false);
    setBgcolorHooks10(false);
    setBgcolorHooks11(true);
  }
  const showIndexfileHooks5 = () => {
    setIndexfileuC2(true);
    setFileContext2(false);
    setFileA2(false);
    setFileB2(false);
    setFileC2(false);
    setBgcolorHooks12(true);
    setBgcolorHooks13(false);
    setBgcolorHooks14(false);
    setBgcolorHooks15(false);
    setBgcolorHooks16(false);
  }
  const showfileContext2 = () => {
    setIndexfileuC2(false);
    setFileContext2(true);
    setFileA2(false);
    setFileB2(false);
    setFileC2(false);
    setBgcolorHooks12(false);
    setBgcolorHooks13(true);
    setBgcolorHooks14(false);
    setBgcolorHooks15(false);
    setBgcolorHooks16(false);
  }
  const showfileA2 = () => {
    setIndexfileuC2(false);
    setFileContext2(false);
    setFileA2(true);
    setFileB2(false);
    setFileC2(false);
    setBgcolorHooks12(false);
    setBgcolorHooks13(false);
    setBgcolorHooks14(true);
    setBgcolorHooks15(false);
    setBgcolorHooks16(false);
  }
  const showfileB2 = () => {
    setIndexfileuC2(false);
    setFileContext2(false);
    setFileA2(false);
    setFileB2(true);
    setFileC2(false);
    setBgcolorHooks12(false);
    setBgcolorHooks13(false);
    setBgcolorHooks14(false);
    setBgcolorHooks15(true);
    setBgcolorHooks16(false);
  }
  const showfileC2 = () => {
    setIndexfileuC2(false);
    setFileContext2(false);
    setFileA2(false);
    setFileB2(false);
    setFileC2(true);
    setBgcolorHooks12(false);
    setBgcolorHooks13(false);
    setBgcolorHooks14(false);
    setBgcolorHooks15(false);
    setBgcolorHooks16(true);
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
                            <h1>Hooks ?</h1>
                          </div>
                            <div className="heading_detail">
                              <ul>
                                <li>Hooks are the React feature that allows you to use state and other React features without writing a class.</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="subdiv">
                      <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                              <h1>How to use Hooks ?</h1>
                            </div>
                          <div className="heading_detail">
                            <ul>
                                <li>To use Hooks first we will import it from react.<br/> There are two ways to import Hooks in our file -  <hr/>
                                i) If we have only one hook - <br/>
                                <div className="hooksImport">
                                  <span>a) You can import it with react -</span><br/>
                                  <code><strong>import React, {'{hookName}'} from 'react';</strong></code><br/> 
                                  <span>b) OR you can also import it separately - </span><br/>
                                  <code><strong>import {'{hookName}'} from 'react';</strong> </code>
                                  <br/>
                                </div><hr/>
                                ii) If we have multiple hooks - 
                                <div className="hooksImport">
                                  <span>a) You can import them together with react -</span><br/>
                                  <code><strong>import React, {'{hook1Name, hook2Name}'} from 'react';</strong></code><br/> 
                                  <span>b) You can import them separately - </span><br/>
                                  <code><strong>import {'{hook1Name}'} from 'react';</strong> </code><br/>
                                  <code><strong>import {'{hook2Name}'} from 'react';</strong> </code><br/>
                                  <span>c) Or You can also import them together - </span><br/>
                                  <code><strong>import {'{hook1Name, hook2Name}'} from 'react';</strong> </code>
                                  </div><hr/>
                                  <p>
                                    <strong>Note : </strong> Hooks should always be used at the top level of the React function and it not work inside classes<br/>
                                    Let's see how hooks is work ?
                                  </p>
                                
                               </li>
                            </ul>
                        </div>
                        </div>
                      </div>
                  </div>


                  <div className="subdiv">
                      <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                                <h1>useState Hook ?</h1>
                            </div>
                            <div className="heading_detail">
                              <ul>
                                  <li>
                                      <p><strong>useState Syntax : <code>{'const [currentValue, updateValue] = useState(); '}</code></strong><br/>
                                        Here, <code>currentValue</code> is hold the current value of state and <code>updateValue</code> is used to update or change the value of state.<hr/>
                                        <strong>Example :</strong> <code>{'const [currentValue, updateValue] = useState(); '}</code> <br/> Here, the currentValue is null because useState has no initial value, so by default it is null. You can set a initial value for currentValue like - <br/>
                                        <code>{'const [currentValue, updateValue] = useState("JavaScript"); '}</code>, So here the currentValue is JavaScript and now we can change it by updateValue like - <code>updateValue("ReactJS");</code> So now, the currentValue is ReactJS<hr/> 
                                        Here, We created a new file for Hooks (Hooks.jsx) but don't worry you can use Hooks in any file and the process will be same but don't forget to import that file in <strong>index.js</strong> file <span onClick={() =>{
                                            showIndexfileHooks1();
                                            setTimeout(() => {setHlImpuS(true)},1000);
                                            setTimeout(() => {setHlImpuS(false)},5000);
                                        }} style={{color: "#0000ff", cursor : "pointer"}}>Click here </span>
                                    </p><br/>
                                      <p>First check output and see how useState is works ? </p>
                                  </li>

                                  <div className="outputBox">
                                    {output1Hooks ? 
                                      <div className="suboutputBox">
                                        <div className="output">
                                            <div className="inOutput">
                                                <h1>{displayText1}</h1>
                                                <button className="btn btn-dark" onClick={()=>{setDisplayText1("You Clicked the button !");}}>Click me</button>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                                  showOutput1Hooks(false);
                                                  setDisplayText1();}}>Hide output</button> 
                                            <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                        </div>
                                      </div> : <button className="btn btn-primary showOp" onClick={() =>{showOutput1Hooks(true); }}>See output</button>}
                                  </div>

                                    <p> As you can see in ouput when we click on <strong>Click me </strong> button then it prints a text line (It's called state changing, when something changess dynamically). So if want to add something like this in our React website then we use <strong>useState </strong>Hook.<br/>
                                    Let's see how can we do it.<br/>
                                  </p>

                                <div className="codediv">
                                    <div className="filesname">
                                        <ul>
                                            <li onClick={showIndexfileHooks1} style={{background : bgcolorHooks1 ? "#1B1B1B" : "", color : bgcolorHooks1 ? "#ddd" : "",}}>index.js</li>
                                            <li onClick={showuSfile} style={{background : bgcolorHooks2 ?  "#1B1B1B" : "", color : bgcolorHooks2 ? "#ddd" : ""}}>Hooks.jsx</li>
                                        </ul>
                                    </div>
                                    <div className="filecode">
                                        {indexfileuS ? 
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
                                                        <span style={{border: hlImpuS ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "skyblue"}}>{' Hooks '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '} </span>
                                                        <span style={{color: "#ff8c1a"}}>'./Hooks';</span></span><br/><br/>
                                                        <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                                        <span style={{color: "#ffff80"}}>render(</span>
                                                        <span style={{border: hlImpuS ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#00b8e6"}}>{' <Hooks/> '}</span></span>
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

                                        {uSfile ? 

                                          <div className="sub_filecode">
                                                <p><span>//</span> This is Hooks.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                      <span style={{border: hluseStateDD ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{'import'}</span>
                                                      <span style={{color: "#99ccff"}}>{' React, { useState } '}</span>
                                                      <span style={{color: "#d966ff"}}>{' from '}</span>
                                                      <span style={{color: "#ff8c1a"}}>'react';</span></span><br/><br/>
                                                      <span style={{color: "#d966ff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{'Hoooks'}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'()'}</span>
                                                      <span style={{color: "#d966ff"}}>{' => '}</span><br/>
                                                      <span style={{border: hluseStateDD ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' [displayText, setDisplayText]'}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#99ccff"}}>{'useState();'}</span></span><br/><br/>
                                                      <div style={{border: hlonClickdef ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{'display'}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'()'}</span>
                                                      <span style={{color: "#d966ff"}}>{' => '}</span><br/>
                                                      <span>{''.padStart(6)}</span>
                                                      <span style={{color: "#99ccff"}}>{' setDisplayText('}</span>
                                                      <span style={{color: "#ffffe6"}}>{'"You Clicked the button !"'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#99ccff"}}>{'}'}</span></div><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                      <span>{''.padStart(8)}</span>
                                                      <span style={{color: "#ff3333"}}>{'<>'}</span><br/>
                                                      <div style={{border: hlTags ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(10)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<h1> '}</span>
                                                      <span style={{color: "#ffffe6"}}>{'{displayText}'}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                                      <span>{''.padStart(10)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<button '}</span>
                                                      <span style={{border: hlonClick ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#ff8c1a"}}>{'onClick={'}</span>
                                                      <span style={{color: "#ffff80"}}>{'display'}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'}'}</span></span>
                                                      <span style={{color: "#00b8e6"}}>{'>'}</span>
                                                      <span style={{color: "#ffffe6"}}>{'Click me '}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</button> '}</span></div>
                                                      <span>{''.padStart(8)}</span>
                                                      <span style={{color: "#ff3333"}}>{'</>'}</span>
                                                      <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span><br/>
                                                      <span style={{color: "#d966ff"}}>{'export'}</span>
                                                      <span style={{color: "#d966ff"}}>{' default '}</span>
                                                      <span style={{color: "#ffffe6"}}>{'Hooks;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                        : null}
                                    </div>
                                </div>
                                <p> Ignore the above code 👆 and follow this process 👇 <br/> In this code, we need three things first is <strong>useState</strong>, second is <strong>button</strong> (for click) and third one is a tag(to display the text). First 
                                    we used both tags <span onClick={() =>{
                                        showuSfile();
                                        setTimeout(() => {setHlTags(true)},1000);
                                        setTimeout(() => {setHlTags(false)},5000);
                                    }} style={{color: "#0000ff", cursor : "pointer"}}>Click here </span> and as we seen in output that when we click the button then it shows us a text, So for that we use <strong>onClick</strong> event for button and call a function, you can set a function name as you want <span onClick={() =>{
                                        showuSfile();
                                        setTimeout(() => {setHlonClick(true)},1000);
                                        setTimeout(() => {setHlonClick(false)},5000);
                                    }} style={{color: "#0000ff", cursor : "pointer"}}>Click here </span><br/>
                                    Now we will define this function and in which we change the value of state by using <strong>useState</strong>. So we will import and declare the <strong>useState</strong> <span onClick={() =>{
                                        showuSfile();
                                        setTimeout(() => {setHluseStateDD(true)},1000);
                                        setTimeout(() => {setHluseStateDD(false)},5000);
                                    }} style={{color: "#0000ff", cursor : "pointer"}}>Click here </span> and update the current value of state by updateValue (setDisplayText)
                                    <span onClick={() =>{
                                        showuSfile();
                                        setTimeout(() => {setHlonClickdef(true)},1000);
                                        setTimeout(() => {setHlonClickdef(false)},5000);
                                    }} style={{color: "#0000ff", cursor : "pointer"}}>Click here </span>
                                </p>
                              </ul>
                            </div>
                        </div>
                    </div>
                  </div>


                  <div className="subdiv">
                    <div className="subdiv_child">
                        <div className="contentBox">
                          <div className="heading_name">
                              <h1>useEffect Hook ?</h1>
                          </div>
                          <div className="heading_detail">
                              <ul>
                                <li>
                                    <p><strong>useEffect Syntax : <code>{'useEffect(callback_function);'}</code></strong><br/>
                                       Here, <code>callback_function</code> means a function which is used as argument in another function.<br/>
                                       There are two ways to use callback_function :<br/><hr/>
                                       i) <code>{'useEffect(functionName);'}</code> <br/>In this way we will call a function as callback_function and define that function. 👇<br/>
                                       
                                      <div className="syntax">
                                        <pre>
                                          <span style={{color: "#d966ff"}}>{'const '}</span>
                                          <span style={{color: "#ffff80"}}>{'functionName'}</span>
                                          <span style={{color: "#d966ff"}}>{' = '}</span>
                                          <span style={{color: "#ffff80"}}>{'()'}</span>
                                          <span style={{color: "#d966ff"}}>{' => '}</span>
                                          <span style={{color: "#ffff80"}}>{'{'}</span><br/>
                                          <span style={{color: "#d966ff"}}>{'   //code ...'}</span><br/>
                                          <span style={{color: "#ffff80"}}>{'}'}</span><br/><br/>
                                          <span style={{color: "#99ccff"}}>{'useEffect('}</span>
                                          <span style={{color: "#ff8c1a"}}>{'functionName'}</span>
                                          <span style={{color: "#99ccff"}}>{');'}</span>
                                        </pre>
                                    </div><hr/>
                                    ii) <code>{'useEffect(() = >{ //code...});'}</code> <br/>In this way we will use a inline callback function. 👇<br/>
                                        
                                      <div className="syntax">
                                        <pre>
                                          <span style={{color: "#99ccff"}}>{'useEffect('}</span>
                                          <span style={{color: "#ffff80"}}>{'() => {'}</span>
                                          <span style={{color: "#d966ff"}}>{' //code...'}</span>]
                                          <span style={{color: "#ffff80"}}>{'}'}</span>
                                          <span style={{color: "#99ccff"}}>{');'}</span>
                                        </pre>
                                    </div>
                                    In this tutorial we will go with Inline callback_function.
                                    </p><hr/>
                                </li>
                                  <h6>First check output and see how useEffect is works ? </h6>

                                  <div className="outputBox">
                                      {output2Hooks ? 
                                          <div className="suboutputBox">
                                              <div className="output">
                                                  <div className="alertBox">
                                                      {(countuE>=0) ? pageRender1 ?
                                                      <div className="alertBoxuE" style={{marginTop: pageUpdate1 ? "-80px" : "-110px"}}>
                                                          <p style={{color: "#fff", fontSize:"13px", marginTop: "5px"}}>Page loaded !</p>
                                                          <button className="btn btn-primary" onClick={()=>{setpageRender1(false); setTimeout(()=>{setCountPageload(countPageload+1);},200);}} style={{marginTop: "10px",marginBottom: "5px", marginRight: "5px", float:"right", width:"30px", height:"20px", fontSize:"10px", display: "flex", justifyContent: "center", alignItems: "center"}}>Ok</button>
                                                      </div> 
                                                      : null : ""}
                                                  </div>
                                                    {(countPageload==2) ?
                                                      <div className="alertBoxuE" style={{marginTop: pageUpdate1 ? "-80px" : "-110px"}}>
                                                          <p style={{color: "#fff", fontSize:"13px", marginTop: "5px"}}>Page updated !</p>
                                                          <button className="btn btn-primary" onClick={()=>{setpageRender1(false); setTimeout(()=>{setCountPageload(countPageload+1);},100);}} style={{marginTop: "10px",marginBottom: "5px", marginRight: "5px", float:"right", width:"30px", height:"20px", fontSize:"10px", display: "flex", justifyContent: "center", alignItems: "center"}}>Ok</button>
                                                      </div>  
                                                    : null}

                                                      {pageLoad1 ? 
                                                    <div className="inOutput">
                                                        <h1>{displayText2}</h1>
                                                        <button className="btn btn-dark" onClick={()=>{
                                                            {if(pageRender1){setpageRender1(false); setTimeout(()=>{setpageRender1(true);},25) }
                                                              else { setDisplayText2("You Clicked the button !"); setTimeout(()=>{setpageRender1(true); setpageUpdate1(true);},500); setCountuE(countuE-1);}}}}>Click me
                                                        </button>
                                                    </div>
                                                  : <img src="Images/loading.GIF" style={{width:"30px", height:"30px"}}/>}

                                            </div> 
                                          <div>
                                              <button className="btn btn-danger hideOp" onClick={()=>{
                                                  showOutput2Hooks(false);
                                                  setDisplayText2();
                                                  setpageRender1(false);
                                                  setpageUpdate1(false);
                                                  setpageLoad1(false);
                                                  setCountuE(1);
                                                  setCountPageload(0);}}>Hide output
                                              </button>
                                              <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                          </div>
                                        </div> 
                                      :   <button className="btn btn-primary showOp" onClick={() =>{
                                              showOutput2Hooks(true);
                                              setTimeout(()=>{setpageLoad1(true)}, 1000);
                                              setTimeout(()=>{setpageRender1(true);}, 1500);}}>See output
                                          </button>}
                                  </div>
                                    <p> As you can see in output that once the page completely loaded then it shows a alert message and it will always show this alert message when page load/reload or something changes/updates in page.<br/>
                                      Let's see how can we do it.
                                    </p>
                 

                                  <div className="codediv">
                                    <div className="filesname">
                                        <ul>
                                            <li onClick={showIndexfileHooks2} style={{background : bgcolorHooks3 ? "#1B1B1B" : "", color : bgcolorHooks3 ? "#ddd" : ""}}>index.js</li>
                                            <li onClick={showuEfile} style={{background : bgcolorHooks4 ?  "#1B1B1B" : "", color : bgcolorHooks4 ? "#ddd" : ""}}>Hooks.jsx</li>
                                        </ul>
                                    </div>

                              <div className="filecode">
                                  {indexfileuE ? 
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
                                                  <span style={{color: "skyblue"}}>{' Hooks '}</span>
                                                  <span style={{color: "#d966ff"}}>{' from '} </span>
                                                  <span style={{color: "#ff8c1a"}}>'./Hooks';</span><br/><br/>
                                                  <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                                  <span style={{color: "#ffff80"}}>render(</span>
                                                  <span style={{color: "#00b8e6"}}>{' <Hooks/> '}</span>
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

                                  {uEfile ?
                                      <div className="sub_filecode">
                                          <p><span>//</span> This is Hooks.jsx file</p>
                                          <div className="code">
                                              <pre>
                                                <span style={{color: "#d966ff"}}>{'import'}</span>
                                                <span style={{color: "#99ccff"}}>{' React, { useState, useEffect } '}</span>
                                                <span style={{color: "#d966ff"}}>{' from '}</span>
                                                <span style={{color: "#ff8c1a"}}>'react';</span><br/><br/>
                                                <span style={{color: "#d966ff"}}>{'const '}</span>
                                                <span style={{color: "#ffff80"}}>{'Hoooks'}</span>
                                                <span style={{color: "#d966ff"}}>{' = '}</span>
                                                <span style={{color: "#ffff80"}}>{'()'}</span>
                                                <span style={{color: "#d966ff"}}>{' => '}</span><br/><br/>
                                                <span>{''.padStart(3)}</span>
                                                <span style={{color: "#d966ff"}}>{'const'}</span>
                                                <span style={{color: "#ffffe6"}}>{' [displayText, setDisplayText]'}</span>
                                                <span style={{color: "#d966ff"}}>{' = '}</span>
                                                <span style={{color: "#99ccff"}}>{'useState();'}</span><br/><br/>
                                                <div style={{border: hluE ? "1px dashed #ffff00" : "", width:"350px"}}>
                                                <span>{''.padStart(5)}</span>
                                                <span style={{color: "#99ccff"}}>{'useEffect('}</span>
                                                <span style={{border: hlIncallback ? "1px dashed #ffff00" : ""}}>
                                                <span style={{color: "#ffff80"}}>{' () => {'}</span>
                                                <span style={{color: "#ff8c1a"}}>{' alert('}</span>
                                                <span style={{color: "#ffffe6"}}>{'"Page loaded !"'}</span>
                                                <span style={{color: "#ffff80"}}>{')'}</span>
                                                <span style={{color: "#99ccff"}}>{' } '}</span></span>
                                                <span style={{color: "#99ccff"}}>{');'}</span></div><br/>
                                                <span>{''.padStart(3)}</span>
                                                <span style={{color: "#d966ff"}}>{'const '}</span>
                                                <span style={{color: "#ffff80"}}>{'display'}</span>
                                                <span style={{color: "#d966ff"}}>{' = '}</span>
                                                <span style={{color: "#ffff80"}}>{'()'}</span>
                                                <span style={{color: "#d966ff"}}>{' => '}</span><br/>
                                                <span>{''.padStart(6)}</span>
                                                <span style={{color: "#99ccff"}}>{' setDisplayText('}</span>
                                                <span style={{color: "#ffffe6"}}>{'"You Clicked the button !"'}</span>
                                                <span style={{color: "#99ccff"}}>{');'}</span><br/>
                                                <span>{''.padStart(3)}</span>
                                                <span style={{color: "#99ccff"}}>{'}'}</span><br/>
                                                <span>{''.padStart(3)}</span>
                                                <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                <span>{''.padStart(8)}</span>
                                                <span style={{color: "#ff3333"}}>{'<>'}</span><br/>
                                                <span>{''.padStart(10)}</span>
                                                <span style={{color: "#00b8e6"}}>{'<h1> '}</span>
                                                <span style={{color: "#ffffe6"}}>{'{displayText}'}</span>
                                                <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                                <span>{''.padStart(10)}</span>
                                                <span style={{color: "#00b8e6"}}>{'<button '}</span>
                                                <span style={{border: hlonClick ? "1px dashed #ffff00" : ""}}>
                                                <span style={{color: "#ff8c1a"}}>{'onClick={'}</span>
                                                <span style={{color: "#ffff80"}}>{'display'}</span>
                                                <span style={{color: "#ff8c1a"}}>{'}'}</span></span>
                                                <span style={{color: "#00b8e6"}}>{'>'}</span>
                                                <span style={{color: "#ffffe6"}}>{'Click me '}</span>
                                                <span style={{color: "#00b8e6"}}>{'</button> '}</span><br/>
                                                <span>{''.padStart(8)}</span>
                                                <span style={{color: "#ff3333"}}>{'</>'}</span>
                                                <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                <span>{''.padStart(3)}</span>
                                                <span style={{color: "#d966ff"}}>{'}'}</span><br/>
                                                <span style={{color: "#d966ff"}}>{'export'}</span>
                                                <span style={{color: "#d966ff"}}>{' default '}</span>
                                                <span style={{color: "#ffffe6"}}>{'Hooks;'}</span>
                                            </pre>
                                          </div>
                                      </div>
                                  : null}
                              </div>
                          </div>
                          <p> In this code, we are going to use previous code (useState code) and we will add one more thing that is <strong>useEffect</strong> 
                              <span onClick={() =>{showuEfile();
                                  setTimeout(() => {setHluE(true)},1000);
                                  setTimeout(() => {setHluE(false)},5000);
                              }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> and as well as we will import <strong>useEffect</strong>(Check first line of above code 👆 ... if you are confused with import then again take a look of <strong>"How to use Hooks ?"</strong>) and rest of code will be same (Compare useEffect code with useState code).
                              As you already seen that the syntax of useEffect in which we defines a inline callback_function or call a callback_function. So here, we will define a inline callback_function and set a alert message inside that function.
                              <span onClick={() =>{showuEfile();
                                  setTimeout(() => {setHlIncallback(true)},1000);
                                  setTimeout(() => {setHlIncallback(false)},5000);
                              }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>. In this file we used two hooks useState and useEffect, useState is used to change/updates page and useEffect is used to showing the message when something changes/updates in page.
                          </p>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="subdiv">
                  <div className="subdiv_child">
                     <div className="contentBox">
                          <div className="heading_name">
                              <h1>How to set useEffect ?</h1>
                          </div>
                          <div className="heading_detail">
                              <ul>
                                  <h6>First check output ... </h6>
                                  <div className="outputBox">
                                      {output3Hooks ? 
                                          <div className="suboutputBox">
                                              <div className="output">
                                                  <div className="alertBox">
                                                      {pageRender2 ?
                                                      <div className="alertBoxuSuE1">
                                                          <p style={{color: "#fff", fontSize:"13px", marginTop: "5px"}}>Page loaded !</p>
                                                          <button className="btn btn-primary" onClick={()=>{setpageRender2(false);}} style={{marginTop: "10px",marginBottom: "5px", marginRight: "5px", float:"right", width:"30px", height:"20px", fontSize:"10px", display: "flex", justifyContent: "center", alignItems: "center"}}>Ok</button>
                                                      </div> 
                                                      : null}
                                            
                                                      { (countuSuE>=0) ? pageUpdate2 ? 
                                                          <div className="alertBoxuSuE2">
                                                              <p style={{color: "#fff", fontSize:"13px", marginTop: "5px"}}>Page updated !</p>
                                                              <button className="btn btn-primary" onClick={()=>{setpageUpdate2(false);}} style={{marginTop: "10px",marginBottom: "5px", marginRight: "5px", float:"right", width:"30px", height:"20px", fontSize:"10px", display: "flex", justifyContent: "center", alignItems: "center"}}>Ok</button>
                                                          </div>
                                                      : null : ""}
                                                  </div>
                                                      {pageLoad3 ? 
                                                    <div className="inOutput">
                                                        <h1>{displayText3}</h1>
                                                        <button className="btn btn-dark" onClick={()=>{
                                                            {if(pageRender2){setpageRender2(false); setTimeout(()=>{setpageRender2(true);},25); }
                                                              else { if(pageUpdate2){setpageUpdate2(false); setTimeout(()=>{setpageUpdate2(true);},25);} else {setDisplayText3("You Clicked the button !"); setTimeout(()=>{setpageUpdate2(true);},500); setCountuSuE(countuSuE-1);}}}}}>Click me
                                                        </button>
                                                    </div>
                                                  : <img src="Images/loading.GIF" style={{width:"30px", height:"30px"}}/>}
                                            </div> 
                                          <div>
                                              <button className="btn btn-danger hideOp" onClick={()=>{
                                                  showOutput3Hooks(false);
                                                  setDisplayText3();
                                                  setpageRender2(false);
                                                  setpageUpdate2(false);
                                                  setpageLoad3(false);
                                                  setCountuSuE(1);}}>Hide output
                                              </button>
                                              <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                          </div>
                                        </div> 
                                      :   <button className="btn btn-primary showOp" onClick={() =>{
                                              showOutput3Hooks(true);
                                              setTimeout(()=>{setpageLoad3(true)}, 1000);
                                              setTimeout(()=>{setpageRender2(true);}, 1500);}}>See output
                                          </button>}
                                  </div>
                                  <p> As you can see in output when page loads then shows "Page loaded !" message and when something changes or update in page it shows "Page updated !" message. <hr/>
                                      <strong>"Can you get a little difference between previous code output and this output ? "</strong> <br/> Let's see - In previous output when page loads then it shows a "Page loaded !" message and when we click on <strong>Click me</strong> button then first it shows us same message again and after it shows "Page updated !" message 
                                      and in this output when page loads then it shows "Page loaded !" message and when we click the button then it direct shows "Page updated !" message (means "Page loaded !" message will show only once when page loads first time).<br/> 
                                      So it means we can set <strong>useEffect</strong> for multiple purposes and we can prevent multiple useEffects from calling again and again.<hr/>
                                      Let's see how can we do it.
                                  </p>

                                  <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                            <li onClick={showIndexfileHooks3} style={{background : bgcolorHooks5 ? "#1B1B1B" : "", color : bgcolorHooks5 ? "#ddd" : ""}}>index.js</li>
                                            <li onClick={showuSuEfile} style={{background : bgcolorHooks6 ?  "#1B1B1B" : "", color : bgcolorHooks6 ? "#ddd" : ""}}>Hooks.jsx</li>
                                        </ul>
                                      </div>
                                    <div className="filecode">
                                          {indexfileuSuE ?
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
                                                        <span style={{color: "skyblue"}}>{' Hooks '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '} </span>
                                                        <span style={{color: "#ff8c1a"}}>'./Hooks';</span><br/><br/>
                                                        <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                                        <span style={{color: "#ffff80"}}>render(</span>
                                                        <span style={{color: "#00b8e6"}}>{' <Hooks/> '}</span>
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

                                          {uSuEfile ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is Hooks.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{border: hluseStateDD ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{'import'}</span>
                                                        <span style={{color: "#99ccff"}}>{' React, { useState, useEffect } '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span></span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{'Hoooks'}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => '}</span><br/><br/>
                                                        <span>{''.padStart(3)}</span>
                                                        <span style={{color: "#d966ff"}}>{'const'}</span>
                                                        <span style={{color: "#ffffe6"}}>{' [displayText, setDisplayText]'}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#99ccff"}}>{'useState();'}</span><br/><br/>
                                                        <div style={{border: hlbothuE ? "1px dashed #ffff00" : "", width:"450px"}}>
                                                        <span>{''.padStart(5)}</span>
                                                        <span style={{color: "#99ccff"}}>{'useEffect('}</span>
                                                        <span style={{color: "#ffff80"}}>{' () => {'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'alert('}</span>
                                                        <span style={{color: "#ffffe6"}}>{'"Page loaded !"'}</span>
                                                        <span style={{color: "#ffff80"}}>{')'}</span>
                                                        <span style={{color: "#99ccff"}}>{'}, '}</span>
                                                        <span style={{border: hlFuEArr ? "1px dashed #ffff00" : "", padding: "0 5px"}}>
                                                        <span style={{color: "#d966ff"}}>{'[ ]'}</span></span>
                                                        <span style={{color: "#99ccff"}}>{');'}</span></div><br/>
                                                        <div style={{border: hlbothuE ? "1px dashed #ffff00" : "", width:"450px"}}>
                                                        <span>{''.padStart(5)}</span>
                                                        <span style={{color: "#99ccff"}}>{'useEffect('}</span>
                                                        <span style={{color: "#ffff80"}}>{' () => {'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'alert('}</span>
                                                        <span style={{color: "#ffffe6"}}>{'"Page updated !"'}</span>
                                                        <span style={{color: "#ffff80"}}>{')'}</span>
                                                        <span style={{color: "#99ccff"}}>{'}, '}</span>
                                                        <span style={{border: hlSuEArr ? "1px dashed #ffff00" : "", padding: "0 5px"}}>
                                                        <span style={{color: "#d966ff"}}>{'[displayText]'}</span></span>
                                                        <span style={{color: "#99ccff"}}>{');'}</span></div><br/><br/>
                                                        <div style={{border: hlonClickdef ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{'     const '}</span>
                                                        <span style={{color: "#ffff80"}}>{'display'}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => '}</span><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#99ccff"}}>{' setDisplayText('}</span>
                                                        <span style={{color: "#ffffe6"}}>{'"You Clicked the button !"'}</span>
                                                        <span style={{color: "#99ccff"}}>{');'}</span><br/>
                                                        <span>{''.padStart(3)}</span>
                                                        <span style={{color: "#99ccff"}}>{'}'}</span></div><br/>
                                                        <span>{''.padStart(3)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(8)}</span>
                                                        <span style={{color: "#ff3333"}}>{'<>'}</span><br/>
                                                        <div style={{border: hlTags ? "1px dashed #ffff00" : ""}}>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#00b8e6"}}>{'<h1>'}</span>
                                                        <span style={{color: "#ffffe6"}}>{' {displayText} '}</span>
                                                        <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#00b8e6"}}>{'<button '}</span>
                                                        <span style={{border: hlonClick ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#ff8c1a"}}>{'onClick={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'display'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'}'}</span></span>
                                                        <span style={{color: "#00b8e6"}}>{'>'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Click me '}</span>
                                                        <span style={{color: "#00b8e6"}}>{'</button> '}</span></div><br/>
                                                        <span>{''.padStart(8)}</span>
                                                        <span style={{color: "#ff3333"}}>{'</>'}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span>{''.padStart(3)}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{'export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Hooks;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}
                                      </div>
                                  </div>
                                  <p> In this code we have two useEffect 
                                      <span onClick={() =>{showuSuEfile();
                                          setTimeout(() => {setHlbothuE(true)},1000);
                                          setTimeout(() => {setHlbothuE(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>
                                      and We added two extra thing with both useEffect that is empty array <strong>[]</strong> and <strong>[displayText]</strong> respectively 
                                      <span onClick={() =>{showuSuEfile();
                                          setTimeout(() => {setHlFuEArr(true); setHlSuEArr(true);},1000);
                                          setTimeout(() => {setHlFuEArr(false); setHlSuEArr(false);},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>.<br/>
                                      When we use empty array <strong>[]</strong> with any useEffect then it will stop to calling that useEffect again and again, after using this <strong>[]</strong>  it will call that useEffect only once when page loads first time and when we pass a element with this array (eg. [displayText]) then it calls that useEffect when we perform something with this element (displayText).<br/>
                                      Let's understand with code - As you know we used two useEffects in this code and added two things with both useEffects that is <strong>[]</strong> and <strong>[displayText]</strong>.
                                      So here, <strong>[]</strong> will stop to calling first useEffect again and again and it will be called only once when page loads (means "Page loaded !" will show when page loads first time) and <strong>[displayText]</strong> is used for changes/updates the page when current value of useState will change then second useEffect will be called (means the "Page updated !" message will show when page updates).
                                  </p>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="subdiv">
                  <div className="subdiv_child">
                     <div className="contentBox">
                          <div className="heading_name">
                              <h1>useContext Hook ?</h1>
                          </div>
                          <div className="heading_detail">
                              <ul>
                                <p>Let we have a parent component <strong>P</strong> and three child components <strong>C1</strong>,<strong>C2</strong> and <strong>C3</strong> -</p>
                                <div className="contextAPI">
                                  <img src="Images/Context.PNG" />
                                </div>
                                <p>If parent component <strong>P</strong> has a data that only <strong>C3</strong> needs then first we have to pass that data to <strong>C1</strong> and <strong>C1</strong> pass to <strong>C2</strong> and <strong>C2</strong> pass for <strong>C3 </strong> 
                                but it's a long way to pass the data and may cause of errors in data. So if we want to pass the data direct from parent component <strong>P</strong> to <strong>C3</strong> then the React provides a concept that is <strong>Context</strong>.<hr/>
                                <h6><strong>Context : </strong></h6></p>
                                <p style={{marginLeft:"80px"}}>Context API allows you to easily access data at different levels of the component tree, without passing props to every level.</p><br/>
                                <h6>Steps to use <strong>Context : </strong></h6>
                                <p> - Create context by <code><strong>createContext();</strong></code> <br/> - Pass the data by using <code><strong>Provider</strong></code> <br/> - And use the data in a particular component by using <code><strong>Consumer.</strong></code></p><hr/>
                                
                                  <p>Let we have one parent component <strong>Hooks</strong> with three child component <strong>A</strong>, <strong>B</strong> and <strong>C</strong>. <br/>
                                      In following code, we are calling component <strong>C</strong> in component <strong>B</strong>
                                      <span onClick={() =>{showfileB1();
                                              setTimeout(() => {setHlcompC(true);},1000);
                                              setTimeout(() => {setHlcompC(false);},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>, 
                                      component <strong>B</strong> in component <strong>A</strong>
                                      <span onClick={() =>{showfileA1();
                                              setTimeout(() => {setHlcompB(true);},1000);
                                              setTimeout(() => {setHlcompB(false);},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> 
                                       and component <strong>A</strong> in parent component <strong>Hooks</strong>
                                      <span onClick={() =>{showfileContext1();
                                              setTimeout(() => {setHlcompA(true);},1000);
                                              setTimeout(() => {setHlcompA(false);},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>. It means we rendering component <strong>C</strong> through multiple levels of component.<br/> Let's see how can we use Context when we have single or multiple data -</p>

                                  <li style={{marginTop: "10px"}}>If we have single data -</li>
                                  
                                  <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                            <li onClick={showIndexfileHooks4} style={{background : bgcolorHooks7 ? "#1B1B1B" : "", color : bgcolorHooks7 ? "#ddd" : ""}}>index.js</li>
                                            <li onClick={showfileContext1} style={{background : bgcolorHooks8 ?  "#1B1B1B" : "", color : bgcolorHooks8 ? "#ddd" : ""}}>Hooks.jsx</li>
                                            <li onClick={showfileA1} style={{background : bgcolorHooks9 ? "#1B1B1B" : "", color : bgcolorHooks9 ? "#ddd" : ""}}>A.jsx</li>
                                            <li onClick={showfileB1} style={{background : bgcolorHooks10 ?  "#1B1B1B" : "", color : bgcolorHooks10 ? "#ddd" : ""}}>B.jsx</li>
                                            <li onClick={showfileC1} style={{background : bgcolorHooks11 ?  "#1B1B1B" : "", color : bgcolorHooks11 ? "#ddd" : ""}}>C.jsx</li>
                                        </ul>
                                      </div>
                                    <div className="filecode">
                                          {indexfileuC1 ?
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
                                                        <span style={{color: "skyblue"}}>{' Hooks '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '} </span>
                                                        <span style={{color: "#ff8c1a"}}>'./Hooks';</span><br/><br/>
                                                        <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                                        <span style={{color: "#ffff80"}}>render(</span>
                                                        <span style={{color: "#00b8e6"}}>{' <Hooks/> '}</span>
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

                                          {fileContext1 ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is Context.js file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{border: hlImpCont ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React, { createContext } '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span></span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' A '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./A';</span><br/><br/>
                                                        <span style={{border: hlCont ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffffe6"}}>{' Name '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#99ccff"}}>{'createContext();'}</span></span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' Context '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#ff0000"}}>{' <>'}</span><br/>
                                                        <div style={{border: hlProvider1 ? "1px dashed #ffff00" : ""}}>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#00b8e6"}}>{'<'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Name.'}</span>
                                                        <span style={{color: "#99ccff"}}>{'Provider '}</span>
                                                        <span style={{color: "#ff8c1a"}}>{' value={'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'"ReactJS"'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'}'}</span>
                                                        <span style={{color: "#00b8e6"}}>{'>'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{border: hlcompA ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#99ccff"}}>{'<A />'}</span></span><br/>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#00b8e6"}}>{'</'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Name.'}</span>
                                                        <span style={{color: "#99ccff"}}>{'Provider'}</span>
                                                        <span style={{color: "#00b8e6"}}>{'>'}</span></div>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#ff0000"}}>{' </>'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'Context;'}</span><br/>
                                                        <span style={{border: hlExpCont1 ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#ffff80"}}>{' { Name };'}</span></span><br/>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileA1 ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is A.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' B '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./B';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' A '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(8)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return'}</span>
                                                        <span style={{border: hlcompB ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#99ccff"}}>{' <B />'}</span></span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'A;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileB1 ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is B.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' C '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./C';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' B '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(8)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return'}</span>
                                                        <span style={{border: hlcompC ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#99ccff"}}>{' <C />'}</span></span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'B;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileC1 ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is C.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{'import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React'}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                                        <span style={{border: hlImpContCons1 ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{'import '}</span>
                                                        <span style={{color: "#99ccff"}}>{'{'}</span>
                                                        <span style={{color: "#99ccff"}}>{' Name '}</span>
                                                        <span style={{color: "#99ccff"}}>{'}'}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Hooks';</span></span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' C '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#ff0000"}}>{' <>'}</span><br/>
                                                        <div style={{border: hlConsumer1 ? "1px dashed #ffff00" : ""}}>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'Name.'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Consumer'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span><br/>
                                                        <span>{''.padStart(15)}</span>
                                                        <span style={{color: "#d966ff"}}>{'{'}</span>
                                                        <span style={{color: "#99ccff"}}>{'('}</span>
                                                        <span style={{color: "#ffff80"}}>{'value'}</span>
                                                        <span style={{color: "#99ccff"}}>{')'}</span>
                                                        <span style={{color: "#99ccff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return'}</span>
                                                        <span style={{color: "#99ccff"}}>{' <h1> '}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Parent component data is '}</span>
                                                        <span style={{color: "#99ccff"}}>{' {'}</span>
                                                        <span style={{color: "#ffff80"}}>{'value'}</span>
                                                        <span style={{color: "#99ccff"}}>{'} '}</span>
                                                        <span style={{color: "#99ccff"}}>{'</h1>'}</span><br/>
                                                        <span>{''.padStart(15)}</span>
                                                        <span style={{color: "#99ccff"}}>{'}'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span><br/>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#99ccff"}}>{'</'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'Name.'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Consumer'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span></div><br/>
                                                        <span>{''.padStart(9)}</span>
                                                        <span style={{color: "#ff0000"}}>{' </>'}</span><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'C;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}
                                      </div>
                                  </div>
                                  <p>According to Context steps, first we will create context. so we have created a context named <strong>Name</strong> by <code>createContext();</code> 
                                      <span onClick={() =>{showfileContext1();
                                        setTimeout(() => {setHlCont(true)},1000);
                                        setTimeout(() => {setHlCont(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> and to use <code>createContext();</code> we have to import it from react 
                                      <span onClick={() =>{showfileContext1();
                                        setTimeout(() => {setHlImpCont(true)},1000);
                                        setTimeout(() => {setHlImpCont(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span><br/>
                                      Now, in second step we will pass the data for a particular component by using a <code>Provider</code>, so let's see how can we pass a data - <br/>
                                      To pass a data we will use our created context as a component like - <br/> <div style={{marginLeft: "40px"}}><code style={{color: "#000"}}><strong><span style={{color: "#0000ff"}}>{'<'}</span>ContextName.<span style={{color: "#0000ff"}}>Provider</span>  <span style={{color:"#ff8c1a"}}>{'value={'}</span>value or data<span style={{color:"#ff8c1a"}}>{'}'}</span><span style={{color: "#0000ff"}}>{'>'}</span> <br/><span style={{color: "#0000ff"}}>{'</'}</span>ContextName.<span style={{color: "#0000ff"}}>Provider</span><span style={{color: "#0000ff"}}>{'>'}</span></strong></code></div>
                                      Let's we pass a data by using above concept 👆 - So first we will take our context name that is <strong>Data</strong> (we have created in first step) after that we connect <code>Provider</code> with a dot (.) and pass our data value by using <code>value</code> attribute and in last we will close context. So we will get - <div style={{marginLeft: "40px"}}><code style={{color: "#000"}}><strong><span style={{color: "#0000ff"}}>{'<'}</span>Name.<span style={{color: "#0000ff"}}>Provider</span><span style={{color:"#ff8c1a"}}>{'value={'}</span>"ReactJS"<span style={{color:"#ff8c1a"}}>{'}'}</span><span style={{color: "#0000ff"}}>{'>'}</span> <br/><span style={{color: "#0000ff"}}>{'<'}</span>Name.<span style={{color: "#0000ff"}}>Provider</span><span style={{color: "#0000ff"}}>{'>'}</span></strong></code></div></p>
                                      <p>and we will use our calling component (<strong>A</strong>) between this context. So finally we will get complete data passing process in code form - <div style={{marginLeft: "40px"}}><code style={{color: "#000"}}><strong><span style={{color: "#0000ff"}}>{'<'}</span>Name.<span style={{color: "#0000ff"}}>Provider</span>  <span style={{color:"#ff8c1a"}}>{'value={'}</span>"ReactJS"<span style={{color:"#ff8c1a"}}>{'}'}</span><span style={{color: "#0000ff"}}>{'>'}</span><br/><span style={{color: "#0000ff", marginLeft: "20px"}}>{'<A />'}</span> <br/><span style={{color: "#0000ff"}}>{'</'}</span>Name.<span style={{color: "#0000ff"}}>Provider</span><span style={{color: "#0000ff"}}>{'>'}</span></strong></code></div>
                                      See above <strong>Hooks.jsx</strong> file or 
                                      <span onClick={() =>{showfileContext1();
                                        setTimeout(() => {setHlProvider1(true)},1000);
                                        setTimeout(() => {setHlProvider1(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span><br/>
                                      In last we will export this context (<strong>Name</strong>) 
                                      <span onClick={() =>{showfileContext1();
                                        setTimeout(() => {setHlExpCont1(true)},1000);
                                        setTimeout(() => {setHlExpCont1(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> and you can see here we import it as a object (in curly braces {'{ }'}) it's because when we have multiple things to export then we exports one this as default ( functional component (Hooks)) and other thing we will export in form of a object.<br/><br/>
                                      After first and second step, now in third step we will use that data in a component (here we are going to use the data in component <strong>C</strong>). so first we have to import that context (<strong>Name</strong>) as a object (as we exported) from parent component (<strong>Hooks.jsx</strong>) to this component (<strong>C</strong>)
                                      <span onClick={() =>{showfileC1();
                                        setTimeout(() => {setHlImpContCons1(true)},1000);
                                        setTimeout(() => {setHlImpContCons1(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span><br/>
                                      After importing, now we are going to consume or get the data from that context by using <code>Consumer</code>, so we will use <code>Consumer</code> keyword with context instead of <code>Provider </code>
                                      and we will get - <div style={{marginLeft: "40px"}}><code style={{color: "#000"}}><strong><span style={{color: "#0000ff"}}>{'<'}</span>Name.<span style={{color: "#0000ff"}}>Consumer</span>  <span style={{color: "#0000ff"}}>{'>'}</span> <br/><span style={{color: "#0000ff"}}>{'</'}</span>Name.<span style={{color: "#0000ff"}}>Consumer</span><span style={{color: "#0000ff"}}>{'>'}</span></strong></code></div>
                                      When we consume the data then the <code>Consumer</code> always want a function with an argument (argument is used to get the data or value which provided by the <code>Provider</code>).
                                      So we will use a callback function for <code>Consumer</code> like <code style={{color: "#0000ff"}}>{'('}<span style={{color:"#ff8c1a"}}>argument</span>{')'} <span>=></span> {'{'} <span style={{color: "#821159"}}>return</span> <span>JSX</span> {'}'}</code> so by this we will get - 
                                        <div style={{marginLeft: "40px"}}>
                                          <code style={{color: "#000"}}>
                                            <strong>
                                              <span style={{color: "#0000ff"}}>{'<'}</span>Name.
                                              <span style={{color: "#0000ff"}}>Consumer</span>
                                              <span style={{color: "#0000ff"}}>{'>'}</span><br/>
                                              <span style={{color: "#0000ff", marginLeft: "20px"}}>{'{'}</span>
                                              <span>{'('}</span>
                                              <span style={{color:"#ff8c1a"}}>{'value'}</span>
                                              <span>{')'}</span>
                                              <span>{' => {'}</span><br/>
                                              <span style={{color: "#821159", marginLeft: "35px"}}>return</span>
                                              <span style={{color: "#0000ff", marginLeft: "20px"}}>{'<h1>'}</span>
                                              <span>{' Parent component data is '}</span>
                                              <span>{'{'}</span>
                                              <span style={{color:"#ff8c1a"}}>{'value'}</span>
                                              <span>{'}'}</span>
                                              <span style={{color: "#0000ff"}}>{' </h1>'}</span><br/>
                                              <span style={{marginLeft: "20px"}}>{'}'}</span>
                                              <span style={{color: "#0000ff"}}>{'}'}</span><br/>
                                              <span style={{color: "#0000ff"}}>{'</'}</span>
                                              <span>Name.</span>
                                              <span style={{color: "#0000ff"}}>Consumer</span>
                                              <span style={{color: "#0000ff"}}>{'>'}</span>
                                            </strong>
                                          </code>
                                        </div>
                                        See above <strong>C.jsx</strong> file or 
                                          <span onClick={() =>{showfileC1();
                                            setTimeout(() => {setHlConsumer1(true)},1000);
                                            setTimeout(() => {setHlConsumer1(false)},5000);
                                          }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>
                                      </p>
                                      <div className="outputBox">
                                        {output4Hooks ? 
                                          <div className="suboutputBox">
                                            <div className="output">
                                              <div className="inOutput">
                                                <h1>Parent component data is <span style={{color: "#ff8c1a"}}>ReactJS</span></h1>
                                                  </div>
                                              </div>
                                              <div>
                                                <button className="btn btn-danger hideOp" onClick={()=>{
                                                  showOutput4Hooks(false);}}>Hide output</button> 
                                                <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                              </div>
                                          </div> 
                                        : <button className="btn btn-primary showOp" onClick={() =>{showOutput4Hooks(true); }}>See output</button>}
                                    </div>
                                  <hr/>


                                  <li style={{marginTop: "10px"}}>If we have multiple data  -</li>
                                  <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                            <li onClick={showIndexfileHooks5} style={{background : bgcolorHooks12 ? "#1B1B1B" : "", color : bgcolorHooks12 ? "#ddd" : ""}}>index.js</li>
                                            <li onClick={showfileContext2} style={{background : bgcolorHooks13 ?  "#1B1B1B" : "", color : bgcolorHooks13 ? "#ddd" : ""}}>Hooks.jsx</li>
                                            <li onClick={showfileA2} style={{background : bgcolorHooks14 ? "#1B1B1B" : "", color : bgcolorHooks14 ? "#ddd" : ""}}>A.jsx</li>
                                            <li onClick={showfileB2} style={{background : bgcolorHooks15 ?  "#1B1B1B" : "", color : bgcolorHooks15 ? "#ddd" : ""}}>B.jsx</li>
                                            <li onClick={showfileC2} style={{background : bgcolorHooks16 ?  "#1B1B1B" : "", color : bgcolorHooks16 ? "#ddd" : ""}}>C.jsx</li>
                                        </ul>
                                      </div>
                                    <div className="filecode">
                                          {indexfileuC2 ?
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
                                                        <span style={{color: "skyblue"}}>{' Hooks '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '} </span>
                                                        <span style={{color: "#ff8c1a"}}>'./Hooks';</span><br/><br/>
                                                        <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                                        <span style={{color: "#ffff80"}}>render(</span>
                                                        <span style={{color: "#00b8e6"}}>{' <Hooks/> '}</span>
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

                                          {fileContext2 ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is Context.js file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React,'}</span>
                                                        <span style={{color: "#99ccff"}}>{' { createContext } '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' A '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./A';</span><br/><br/>
                                                        <div style={{border: hlbothCont ? "1px dashed #ffff00" : "", width: "400px"}}>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffffe6"}}>{' Firstname '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#99ccff"}}>{'createContext();'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffffe6"}}>{' Lastname '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#99ccff"}}>{'createContext();'}</span></div><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' Hooks '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#ff0000"}}>{' <>'}</span><br/>
                                                        <div style={{border: hlProvider2 ? "1px dashed #ffff00" : "", width: "500px"}}>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#00b8e6"}}>{'<'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Firstname.'}</span>
                                                        <span style={{color: "#99ccff"}}>{'Provider '}</span>
                                                        <span style={{color: "#ff8c1a"}}>{' value={'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'"React"'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'}'}</span>
                                                        <span style={{color: "#00b8e6"}}>{'>'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#00b8e6"}}>{'<'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Lastname.'}</span>
                                                        <span style={{color: "#99ccff"}}>{'Provider '}</span>
                                                        <span style={{color: "#ff8c1a"}}>{' value={'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'"JS"'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'}'}</span>
                                                        <span style={{color: "#00b8e6"}}>{'>'}</span><br/>
                                                        <span>{''.padStart(23)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<A />'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#00b8e6"}}>{'</'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Lastname.'}</span>
                                                        <span style={{color: "#99ccff"}}>{'Provider'}</span>
                                                        <span style={{color: "#00b8e6"}}>{'>'}</span><br/>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#00b8e6"}}>{'</'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Firstname.'}</span>
                                                        <span style={{color: "#99ccff"}}>{'Provider'}</span>
                                                        <span style={{color: "#00b8e6"}}>{'>'}</span></div><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#ff0000"}}>{' </>'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'Hooks;'}</span><br/>
                                                        <span style={{border: hlExpCont2 ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#ffff80"}}>{' { Firstname, Lastname };'}</span></span><br/>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileA2 ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is A.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' B '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./B';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' A '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(8)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return'}</span>
                                                        <span style={{color: "#99ccff"}}>{' <B />'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'A;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileB2 ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is B.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' C '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./C';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' B '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(8)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return'}</span>
                                                        <span style={{color: "#99ccff"}}>{' <C />'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'B;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileC2 ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is C.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{'import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React'}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{'import '}</span>
                                                        <span style={{color: "#99ccff"}}>{'{'}</span>
                                                        <span style={{color: "#99ccff"}}>{' Firstname,'}</span>
                                                        <span style={{color: "#99ccff"}}>{' Lastname '}</span>
                                                        <span style={{color: "#99ccff"}}>{'}'}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Context';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' C '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return'}</span>
                                                        <span style={{color: "#ff0000"}}>{' <>'}</span><br/>
                                                        <div style={{border: hlConsumer2 ? "1px dashed #ffff00" : "", width: "900px"}}>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'Firstname.'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Consumer'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'{'}</span>
                                                        <span style={{color: "#99ccff"}}>{'('}</span>
                                                        <span style={{color: "#ffff80"}}>{'firstvalue'}</span>
                                                        <span style={{color: "#99ccff"}}>{')'}</span>
                                                        <span style={{color: "#99ccff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(24)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(30)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'Lastname.'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Consumer'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span><br/>
                                                        <span>{''.padStart(36)}</span>
                                                        <span style={{color: "#99ccff"}}>{'{'}</span>
                                                        <span style={{color: "#99ccff"}}>{'('}</span>
                                                        <span style={{color: "#ffff80"}}>{'lastvalue'}</span>
                                                        <span style={{color: "#99ccff"}}>{')'}</span>
                                                        <span style={{color: "#99ccff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(40)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return '}</span>
                                                        <span style={{color: "#99ccff"}}>{' <h1> '}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Firstname context value is '}</span>
                                                        <span style={{color: "#99ccff"}}>{' {'}</span>
                                                        <span style={{color: "#ffff80"}}>{'firstvalue'}</span>
                                                        <span style={{color: "#99ccff"}}>{'} '}</span>
                                                        <span style={{color: "#ffffe6"}}>{'and Lastname context value is '}</span>
                                                        <span style={{color: "#99ccff"}}>{' {'}</span>
                                                        <span style={{color: "#ffff80"}}>{'lastvalue'}</span>
                                                        <span style={{color: "#99ccff"}}>{'} '}</span>
                                                        <span style={{color: "#99ccff"}}>{' </h1>'}</span><br/>
                                                        <span>{''.padStart(36)}</span>
                                                        <span style={{color: "#99ccff"}}>{'}}'}</span><br/>
                                                        <span>{''.padStart(30)}</span>
                                                        <span style={{color: "#99ccff"}}>{'</'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'Lastname.'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Consumer'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span><br/>
                                                        <span>{''.padStart(24)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'}}'}</span><br/>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#99ccff"}}>{'</'}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'Firstname.'}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Consumer'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span></div><br/>
                                                        <span>{''.padStart(9)}</span>
                                                        <span style={{color: "#ff0000"}}>{' </>'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'C;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}
                                      </div>
                                  </div>
                                  <p>In case of multiple data, we will create multiple context (number of context = number of data). so here we have two data values to pass for a particular component then we will create two context named <strong>Firstname</strong> and <strong>Lastname </strong>
                                    <span onClick={() =>{showfileContext2();
                                        setTimeout(() => {setHlbothCont(true)},1000);
                                        setTimeout(() => {setHlbothCont(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span><br/>
                                      Now, we will go to pass the values by <code>Provider</code>, so we can easily pass the values with both context as we passed in previous code but here the second context (<strong>Lastname</strong>) must be inside first context (<strong>Firstname</strong>) and the calling component (<strong>A</strong>) will use between both context 
                                      <span onClick={() =>{showfileContext2();
                                        setTimeout(() => {setHlProvider2(true)},1000);
                                        setTimeout(() => {setHlProvider2(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> and export both context 
                                      <span onClick={() =>{showfileContext2();
                                        setTimeout(() => {setHlExpCont2(true)},1000);
                                        setTimeout(() => {setHlExpCont2(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span><br/>
                                      In final step, we are going to consume or get both values, so first we have to import both context in any componet but here we will import in componet <strong>C</strong> (see <strong>C.jsx</strong>).
                                      and as you already know that how we can consume the value from the context, so both context consumer use different function with an argument to get the value. <br/>
                                      As we used second context (<strong>Lastname</strong>) inside first context (<strong>Firstname</strong>) when we were passing the values, and here we will <code>return</code> second context (<strong>Lastname</strong>) by first context (<strong>Firstname</strong>) while consuming value and return our final JSX code.
                                      <span onClick={() =>{showfileC2();
                                        setTimeout(() => {setHlConsumer2(true)},1000);
                                        setTimeout(() => {setHlConsumer2(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>
                                  </p>

                                  <div className="outputBox">
                                        {output5Hooks ? 
                                          <div className="suboutputBox">
                                            <div className="output">
                                              <div className="inOutput">
                                                <h1 style={{fontSize:"18px"}}>Firstname context value is <span style={{color: "#ff8c1a"}}>React</span> and Lastname context value is <span style={{color: "#ff8c1a"}}>JS</span></h1>
                                                  </div>
                                              </div>
                                              <div>
                                                <button className="btn btn-danger hideOp" onClick={()=>{
                                                  showOutput5Hooks(false);}}>Hide output</button> 
                                                <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                              </div>
                                          </div> 
                                        : <button className="btn btn-primary showOp" onClick={() =>{showOutput5Hooks(true); }}>See output</button>}
                                    </div>
                                    <p>As you can see when we have two values then the code is too lengthy and complex, let if we have more values to pass then it may create a hell (more complex or lengthy). So to prevent from this hell we use <strong>useContext</strong>. <br/>
                                    <strong>useContext</strong> makes it very easy and short, let's see how can we do it with <strong>useContext</strong> <br/>
                            
                                    All files or components will be same for <strong>useContext</strong> except <strong>C.jsx</strong>. So here, we are going to create only <strong>C.jsx</strong> with <strong>useContext</strong></p>
                                  <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                            <li style={{background : "#1B1B1B", color : "#ddd"}}>C.jsx</li>
                                        </ul>
                                      </div>
                                    <div className="filecode">
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is C.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{border: hlImpuC ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{'import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React, { useContext }'}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span></span><br/>
                                                        <span style={{color: "#d966ff"}}>{'import '}</span>
                                                        <span style={{color: "#99ccff"}}>{'{'}</span>
                                                        <span style={{color: "#99ccff"}}>{' Firstname,'}</span>
                                                        <span style={{color: "#99ccff"}}>{' Lastname '}</span>
                                                        <span style={{color: "#99ccff"}}>{'}'}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Context';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' C '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/><br/>
                                                        <div style={{border: hluCD ? "1px dashed #ffff00" : ""}}>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' firstvalue '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#99ccff"}}>{'useContext('}</span>
                                                        <span style={{border: hluCPara ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#ffffe6"}}>{'Firstname'}</span></span>
                                                        <span style={{color: "#99ccff"}}>{');'}</span><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' lastvalue '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#99ccff"}}>{'useContext('}</span>
                                                        <span style={{border: hluCPara ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#ffffe6"}}>{'Lastname'}</span></span>
                                                        <span style={{color: "#99ccff"}}>{');'}</span></div><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<h1> '}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Firstname context value is '}</span>
                                                        <span style={{color: "#99ccff"}}>{' {'}</span>
                                                        <span style={{color: "#ffff80"}}>{'firstvalue'}</span>
                                                        <span style={{color: "#99ccff"}}>{'} '}</span>
                                                        <span style={{color: "#ffffe6"}}>{'and Lastname context value is '}</span>
                                                        <span style={{color: "#99ccff"}}>{' {'}</span>
                                                        <span style={{color: "#ffff80"}}>{'lastvalue'}</span>
                                                        <span style={{color: "#99ccff"}}>{'} '}</span>
                                                        <span style={{color: "#99ccff"}}>{' </h1>'}</span><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'C;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                      </div>
                                  </div>
                                  <p>Now you can see too much differece between both <strong>C.jsx</strong> files code of previous one and this one, in previous file (Without useContext) the code length is too much and complex but in this file (wih useContext) the code become too short and easy. So, let's see how did we do it -<br/>
                                    To use <strong>useContext</strong>, first we have to import it from react as we imported <strong>useState</strong> and <strong>useEffect</strong> 
                                      <span onClick={() =>{
                                        setTimeout(() => {setHlImpuC(true)},1000);
                                        setTimeout(() => {setHlImpuC(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> after importing we will define useContext as per need, so we are going to define two useContext because we have two values to consume 
                                      <span onClick={() =>{
                                        setTimeout(() => {setHluCD(true)},1000);
                                        setTimeout(() => {setHluCD(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> and use both context <strong>Firstname</strong> and <strong>Lastname</strong> as a parameter in both useContext respectively 
                                      <span onClick={() =>{
                                        setTimeout(() => {setHluCPara(true)},1000);
                                        setTimeout(() => {setHluCPara(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>, that's why both context values (<strong>Firstname</strong> and <strong>Lastname</strong>) have stored in both variables <code>firstvalue</code> and <code>lastvalue</code> respectively 
                                      and we can use that values anywhere by using both variables as we used in <code>{'<h1> </h1>'}</code> and the output will be same.
                                  </p>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </>);
}
export default Hooks;

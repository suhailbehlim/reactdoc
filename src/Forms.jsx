import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Forms = (props) =>{

    const [indexfileForm1, setIndexfileForm1] = useState(true);
    const [siForm1, setSIform1] = useState(false);
    const [bgcolorForm1, setbgcolorForm1] = useState(true);
    const [bgcolorForm2, setbgcolorForm2] = useState(false);
    const [indexfileForm2, setIndexfileForm2] = useState(true);
    const [siForm2, setSIform2] = useState(false);
    const [output1Form, showOutput1Form] = useState(false);
    const [bgcolorForm3, setbgcolorForm3] = useState(true);
    const [bgcolorForm4, setbgcolorForm4] = useState(false);
    const [displayMyName1, setDisplayMyName1] = useState("Your name will appear here...");
    const [output2Form, showOutput2Form] = useState(false);
    const [displayMyName2, setDisplayMyName2] = useState();
    const [storeName, setStoreName] = useState("Your name will appear here when you click the button...");
    const [displayMyName3, setDisplayMyName3] = useState();
    const [storeFullName, setStoreFullName] = useState("Your name will appear here when you click the button...");
    const [fullName, setfullName] = useState({
      firstname: "",
      lastname: ""
    });

    const [indexfileForm3, setIndexfileForm3] = useState(true);
    const [miForm1, setMIform1] = useState(false);
    const [output3Form, showOutput3Form] = useState(false);
    const [bgcolorForm5, setbgcolorForm5] = useState(true);
    const [bgcolorForm6, setbgcolorForm6] = useState(false);
    const [hlInput1, setHlInput1] = useState(false);
    const [hlonChange1, setHlonChange1] = useState(false);
    const [hlgetValue1, setHlgetValue1] = useState(false);
    const [hlobject1, setHlobject1] = useState(false);
    const [hlupdateValue1, setHlupdateValue1] = useState(false);
    const [hlheading1, setHlheading1] = useState(false);
    const [hluseState2, setHluseState2] = useState(false);
    const [hlonClick1, setHlonClick1] = useState(false);
    const [indexfileForm4, setIndexfileForm4] = useState(true);
    const [miForm2, setMIform2] = useState(false);
    const [bgcolorForm7, setbgcolorForm7] = useState(true);
    const [bgcolorForm8, setbgcolorForm8] = useState(false);
    const [hlEH1, setHlEH1] = useState(false);
    const [hlEH2, setHlEH2] = useState(false);
    const [hlEHDefine, setHlEHDefine] = useState(false);
    const [hlonSubmit, setHlonSubmit] = useState(false);
    const [hlonSubmitD, setHlonSubmitD] = useState(false);
    const [hlprevent, setHlprevent] = useState(false);
    const [hlstoreFullname, setHlstoreFullname] = useState(false);
    const [hlh1Tag, setHlh1Tag] = useState(false);
    const [hlgetFullname, setHlgetFullname] = useState(false);
    const [hluseState, setHluseState] = useState(false);
    const [hluSobject, setHluSobject] = useState(false);
    const [hlnameAttr, setHlnameAttr] = useState(false);
    const [hldeObject, setHldeObject] = useState(false);
    const [hlreturnNew, setHlreturnNew] = useState(false);
    const [hloSub, setHloSub] = useState(false);



    const showIndexfileForm1 = () => {
      setIndexfileForm1(true);
      setSIform1(false);
      setbgcolorForm1(true);
      setbgcolorForm2(false);
    }
    const showSIfileForm1 = () => {
      setIndexfileForm1(false);
      setSIform1(true);
      setbgcolorForm1(false);
      setbgcolorForm2(true);
    }
    const getValue1 = (myName) =>{
      setDisplayMyName1(myName.target.value);
    }
    const showIndexfileForm2 = () => {
      setIndexfileForm2(true);
      setSIform2(false);
      setbgcolorForm3(true);
      setbgcolorForm4(false);
    }
    const showSIfileForm2 = () => {
      setIndexfileForm2(false);
      setSIform2(true);
      setbgcolorForm3(false);
      setbgcolorForm4(true);
    }
    const getValue2 = (myName) =>{
      setDisplayMyName2(myName.target.value);
    }
    const showName = () =>{
      setStoreName(displayMyName2);
    }
    const getfullName = (object) =>{
      const {name, value} = object.target;
      setfullName((preValue) =>{
        return {
        ...preValue,
        [name] : value
        };
      });
    }
    
    const submitFullname = (object) =>{
      object.preventDefault();
      setStoreFullName(`${fullName.firstname} ${fullName.lastname}`);
    }
    const showIndexfileForm3 = () => {
      setIndexfileForm3(true);
      setMIform1(false);
      setbgcolorForm5(true);
      setbgcolorForm6(false);
    }
    const showMIfileForm1 = () => {
      setIndexfileForm3(false);
      setMIform1(true);
      setbgcolorForm5(false);
      setbgcolorForm6(true);
    }
    const showIndexfileForm4 = () => {
      setIndexfileForm4(true);
      setMIform2(false);
      setbgcolorForm7(true);
      setbgcolorForm8(false);
    }
    const showMIfileForm2 = () => {
      setIndexfileForm4(false);
      setMIform2(true);
      setbgcolorForm7(false);
      setbgcolorForm8(true);
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
                            <h1>React form ?</h1>
                          </div>
                            <div className="heading_detail">
                              <ul>
                                <li>Just like HTML, React also uses forms to allow users to interact with the web page and the way of adding forms in web page is similar for both HTML and React. </li>
                                <li>But in HTML, form data is usually handled by the DOM and in React, form data is handled by the components. When the the data handled by components, all data is stored by component <code>state</code>.</li>
                                <li> In react we can control input changes by adding event handlers (You can say a function) in <code> onChange</code> attribute</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                  </div>

                <div className="subdiv">
                     <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                            <h1>Single input form ?</h1>
                          </div>
                            <div className="heading_detail">
                              <ul>
                            <strong><li>Example 1 -</li></strong>
                              <p>First check output and see what we are going to do in this Example ?</p>
                                <div className="outputBox">
                                    {output1Form ? 
                                      <div className="suboutputBox">
                                        <div className="output">
                                          <div className="inOutput">
                                            <input type="text" placeholder="Type your name" autocomplete="off" onChange={getValue1}/><br/>
                                            <h1 style={{fontSize: "15px"}}>{displayMyName1}</h1>
                                          </div>
                                          </div>
                                          <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                              showOutput1Form(false); setDisplayMyName1("Your name will appear here...");}}>Hide output</button> 
                                            <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                          </div>
                                      </div> 
                                    : <button className="btn btn-primary showOp" onClick={() =>{showOutput1Form(true); }}>See output</button>}
                                </div>
                                <p>As you can see in output when we type our name in input field then it's displays down.<br/> So let's see how we can do it ?</p>
                                <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                            <li onClick={showIndexfileForm1} style={{background : bgcolorForm1 ? "#1B1B1B" : "", color : bgcolorForm1 ? "#ddd" : ""}}>index.js</li>
                                            <li onClick={showSIfileForm1} style={{background : bgcolorForm2 ?  "#1B1B1B" : "", color : bgcolorForm2 ? "#ddd" : ""}}>Form.jsx</li>
                                        </ul>
                                      </div>
                                      <div className="filecode">
                                        {indexfileForm1 ?
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
                                                          <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/>
                                                          <span style={{color: "#d966ff"}}>{' import '}</span>
                                                          <span style={{color: "skyblue"}}>{' Form '}</span>
                                                          <span style={{color: "#d966ff"}}>{' from '}</span>
                                                          <span style={{color: "#ff8c1a"}}>'./Form';</span><br/><br/>
                                                          <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                                          <span style={{color: "#ffff80"}}>render(</span>
                                                          <span style={{color: "#00b8e6"}}>{' <Form/> '}</span>
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

                                        {siForm1 ?
                                          <div className="sub_filecode">
                                              <p><span>//</span> This is Form.jsx file</p>
                                              <div className="code">
                                                  <pre>
                                                      <span style={{color: "#d966ff"}}>{' import '}</span>
                                                      <span style={{color: "#99ccff"}}>{' React, { useState }'}</span>
                                                      <span style={{color: "#d966ff"}}>{' from '}</span>
                                                      <span style={{color: "#ff8c1a"}}>'react';</span><br/><br/>
                                                      <span style={{color: "#99ccff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' Form '}</span>
                                                      <span style={{color: "#99ccff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'()'}</span>
                                                      <span style={{color: "#99ccff"}}>{' => '}</span>
                                                      <span style={{color: "#99ccff"}}>{' { '}</span><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' [storeName, setStoreName]'}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#99ccff"}}>{'useState('}</span>
                                                      <span style={{color: "#ffffe6"}}>{'"Your name will appear here..."'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span><br/><br/>
                                                      <div style={{border: hlgetValue1 ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' getValue '}</span>
                                                      <span style={{color: "#99ccff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'('}</span>
                                                      <span style={{border: hlobject1 ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#ff8c1a"}}>{'object'}</span></span>
                                                      <span style={{color: "#ffff80"}}>{')'}</span>
                                                      <span style={{color: "#99ccff"}}>{' => '}</span>
                                                      <span style={{color: "#99ccff"}}>{' { '}</span><br/>
                                                      <span>{''.padStart(8)}</span>
                                                      <span style={{border: hlupdateValue1 ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#99ccff"}}>{'setStoreName('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object.target.value'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span></span><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#99ccff"}}>{'}'}</span></div><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#ff0000"}}>{'<>'}</span><br/>
                                                      <div style={{border: hlInput1 ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<input '}</span>
                                                      <span style={{color: "#d966ff"}}>{' type="'}</span>
                                                      <span style={{color: "#ffff80"}}>{'text'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span>
                                                      <span style={{color: "#d966ff"}}>{' placeholder="'}</span>
                                                      <span style={{color: "#ffff80"}}>{' Type your name'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span>
                                                      <span style={{border: hlonChange1 ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{' onChange={'}</span>
                                                      <span style={{color: "#ffff80"}}>{'getValue'}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                                      <span style={{color: "#00b8e6"}}>{'/>'}</span><br/>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{border: hlheading1 ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#00b8e6"}}>{'<h1>'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' {storeName} '}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</h1> '}</span></span></div>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#ff0000"}}>{'</>'}</span>
                                                      <span style={{color: "#d966ff"}}>{' ); '}</span><br/>
                                                      <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                      <span style={{color: "#d966ff"}}>{' export '}</span>
                                                      <span style={{color: "#d966ff"}}>{' default '}</span>
                                                      <span style={{color: "#ffffe6"}}>{' Form;'}</span>
                                                  </pre>
                                              </div>
                                          </div>
                                        : null}
                                    </div>
                                  </div>
                                  <p>This is first example, so the explaining part may be a bit longer but if you understand it well then it will be easy for you in upcoming examples - <br/> First we will create a input field and we can create it easily as we are creates in HTML and as well as we'll use an <strong> {'<h1></h1>'} </strong> or any tag to display the name
                                      <span onClick={() =>{showSIfileForm1();
                                          setTimeout(() => {setHlInput1(true);},1000);
                                          setTimeout(() => {setHlInput1(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>,
                                      and by an <code>onChange</code> attribute of this input, we will call a event handler 
                                      <span onClick={() =>{showSIfileForm1();
                                          setTimeout(() => {setHlonChange1(true);},1000);
                                          setTimeout(() => {setHlonChange1(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> (Here, event handler name is <strong><code>getValue</code></strong> (You can use any name for this event handler)).<br/>
                                      Now, we will define this event handler (<strong><code>getValue</code></strong>) and will get the value of this input field 
                                      <span onClick={() =>{showSIfileForm1();
                                          setTimeout(() => {setHlgetValue1(true);},1000);
                                          setTimeout(() => {setHlgetValue1(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>.<br/> As you can see in declaration of <strong><code>getValue</code></strong>, a parameter is passed that is <code>object</code>
                                      <span onClick={() =>{showSIfileForm1();
                                          setTimeout(() => {setHlobject1(true);},1000);
                                          setTimeout(() => {setHlobject1(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> (but you can write any name instead of this <code>object</code>).<br/>
                                       When someone triggered <code>onChange</code> (starts typing in input field) then this <code>object</code> is passed by event handler and this <code>object </code> 
                                      stores more properties of this input field and from these properties, we have a <code>target</code>  property. By help of <code>target</code> we can access attributes value of input field (It means the attributes value of input fields are stored in the <code>object.target</code><br/>
                                      So in this example, we need only the "value" of input field then we can access this value by help of <code>target</code> as <code>object.target.value</code> ( its because <code>value</code> belongs to <code>target</code> and <code>target</code> belongs to <code>object</code> ).<br/>
                                      And as you already know about <strong>useState</strong> that when we want to change something in web page then we use <strong>useState</strong>, so here, we will use a <strong>useState</strong> and set a initial value for this <strong>useState</strong>(let "Your name will appear here...") 
                                      and when event handler (<code>getName</code>) will be call then update the currentValue of state from input value by <code>object.target.value</code>
                                      <span onClick={() =>{showSIfileForm1();
                                          setTimeout(() => {setHlupdateValue1(true);},1000);
                                          setTimeout(() => {setHlupdateValue1(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span><br/>
                                      So, now input field value has stored in the currentValue of state (here, the currentValue means <strong>storeName</strong> (check useState declaration)) and we can display this value by <strong>{'<h1></h1>'}</strong> or any tag
                                      <span onClick={() =>{showSIfileForm1();
                                          setTimeout(() => {setHlheading1(true);},1000);
                                          setTimeout(() => {setHlheading1(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>
                                 </p>
                              </ul>
                            </div>

                            <div className="heading_detail">
                              <ul><hr/>
                              <strong><li>Example 2 -</li></strong>
                              <p>First check output and see what we are going to do in this Example ?</p>
                                <div className="outputBox">
                                    {output2Form ? 
                                      <div className="suboutputBox">
                                        <div className="output">
                                          <div className="inOutput">
                                            <input type="text" placeholder="Enter your name" autocomplete="off" onChange={getValue2}/><br/>
                                            <button type="submit" className="btn btn-dark" onClick={showName}>Display</button>
                                            <h1 style={{fontSize: "15px"}}>{storeName}</h1>
                                          </div>
                                          </div>
                                          <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                              showOutput2Form(false); setDisplayMyName2(); setStoreName("Your name will appear here when you click the button...");}}>Hide output</button> 
                                            <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                          </div>
                                      </div> 
                                    : <button className="btn btn-primary showOp" onClick={() =>{showOutput2Form(true); }}>See output</button>}
                                </div>
                                <p>As you can see in output, when we click the button after filling input field then it displays our name, and hope you got the difference between previous output and this output that is 
                                  previous output was displaying the name automatically and this output is displaying then name when click the button. So there is only one button difference between both outputs.<br/>
                                  Let's see how we can do it ? </p>
                                <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                            <li onClick={showIndexfileForm2} style={{background : bgcolorForm3 ? "#1B1B1B" : "", color : bgcolorForm3 ? "#ddd" : ""}}>index.js</li>
                                            <li onClick={showSIfileForm2} style={{background : bgcolorForm4 ?  "#1B1B1B" : "", color : bgcolorForm4 ? "#ddd" : ""}}>Form.jsx</li>
                                        </ul>
                                      </div>
                                      <div className="filecode">
                                        {indexfileForm2 ?
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
                                                          <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/>
                                                          <span style={{color: "#d966ff"}}>{' import '}</span>
                                                          <span style={{color: "skyblue"}}>{' Form '}</span>
                                                          <span style={{color: "#d966ff"}}>{' from '}</span>
                                                          <span style={{color: "#ff8c1a"}}>'./Form';</span><br/><br/>
                                                          <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                                          <span style={{color: "#ffff80"}}>render(</span>
                                                          <span style={{color: "#00b8e6"}}>{' <Form/> '}</span>
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

                                        {siForm2 ?
                                          <div className="sub_filecode">
                                              <p><span>//</span> This is Form.jsx file</p>
                                              <div className="code">
                                                  <pre>
                                                      <span style={{color: "#d966ff"}}>{' import '}</span>
                                                      <span style={{color: "#99ccff"}}>{' React, { useState }'}</span>
                                                      <span style={{color: "#d966ff"}}>{' from '}</span>
                                                      <span style={{color: "#ff8c1a"}}>'react';</span><br/><br/>
                                                      <span style={{color: "#99ccff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' Form '}</span>
                                                      <span style={{color: "#99ccff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'()'}</span>
                                                      <span style={{color: "#99ccff"}}>{' => '}</span>
                                                      <span style={{color: "#99ccff"}}>{' { '}</span><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' [storeName, setStoreName]'}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#99ccff"}}>{'useState();'}</span><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{border: hluseState2 ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{'const'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' [displayName, setDisplayName]'}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#99ccff"}}>{'useState('}</span>
                                                      <span style={{color: "#ffffe6"}}>{'"Your name will appear here when you click the button..."'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span></span><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' getValue '}</span>
                                                      <span style={{color: "#99ccff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object'}</span>
                                                      <span style={{color: "#ffff80"}}>{')'}</span>
                                                      <span style={{color: "#99ccff"}}>{' => '}</span>
                                                      <span style={{color: "#99ccff"}}>{' { '}</span><br/>
                                                      <span>{''.padStart(8)}</span>
                                                      <span style={{color: "#99ccff"}}>{'setStoreName('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object.target.value'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#99ccff"}}>{'}'}</span><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' showName '}</span>
                                                      <span style={{color: "#99ccff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'()'}</span>
                                                      <span style={{color: "#99ccff"}}>{' => '}</span>
                                                      <span style={{color: "#99ccff"}}>{' { '}</span><br/>
                                                      <span>{''.padStart(8)}</span>
                                                      <span style={{color: "#99ccff"}}>{'setDisplayName('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'storeName'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#99ccff"}}>{'}'}</span><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#ff0000"}}>{'<>'}</span><br/>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<div>'}</span><br/>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<input '}</span>
                                                      <span style={{color: "#d966ff"}}>{' type="'}</span>
                                                      <span style={{color: "#ffff80"}}>{'text'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span>
                                                      <span style={{color: "#d966ff"}}>{' placeholder="'}</span>
                                                      <span style={{color: "#ffff80"}}>{' Enter your name'}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'" '}</span>
                                                      <span style={{color: "#d966ff"}}>{' onChange={'}</span>
                                                      <span style={{color: "#ffff80"}}>{'getValue'}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span>
                                                      <span style={{color: "#00b8e6"}}>{'/>'}</span><br/>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<button '}</span>
                                                      <span style={{color: "#d966ff"}}>{' type="'}</span>
                                                      <span style={{color: "#ffff80"}}>{'submit'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span>
                                                      <span style={{border: hlonClick1 ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{' onClick={'}</span>
                                                      <span style={{color: "#ffff80"}}>{'showName'}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                                      <span style={{color: "#00b8e6"}}>{'>'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' Display '}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</button> '}</span><br/>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<h1>'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' {displayName} '}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</div>'}</span><br/>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#ff0000"}}>{'</>'}</span>
                                                      <span style={{color: "#d966ff"}}>{' ); '}</span><br/>
                                                      <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                      <span style={{color: "#d966ff"}}>{' export '}</span>
                                                      <span style={{color: "#d966ff"}}>{' default '}</span>
                                                      <span style={{color: "#ffffe6"}}>{' Form;'}</span>
                                                  </pre>
                                              </div>
                                          </div>
                                        : null}
                                    </div>
                                  </div>
                                  <p>It is so simple if you understood How to use useState, and not then don't worry, let's see - <br/>
                                      In this example, We will use previous example code and add an extra useState  
                                      <span onClick={() =>{showSIfileForm2();
                                          setTimeout(() => {setHluseState2(true);},1000);
                                          setTimeout(() => {setHluseState2(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> as well as set the initial value for state that is "Your name will appear here when you click the button...".
                                      and create a button.<br/>
                                      When someone click the button then we will call a function named <strong>showName</strong> by <code>onClick</code> event handler
                                      <span onClick={() =>{showSIfileForm2();
                                          setTimeout(() => {setHlonClick1(true);},1000);
                                          setTimeout(() => {setHlonClick1(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> <br/>
                                       And now, if someone types own name in input field then the name will be stored in <code>storeName</code>, and in declaration of <code>onClick</code> event handler, we will set this name in <code>displayName</code> by <code>setDisplayName</code> and use this <code>displayName</code> in heading tag to display the name.<br/>
                                       In simple words, first we will store complete name or value of input field without displaying it and after when someone click the button then we will call a function and set the stored name in another state by update function of state and display it.
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
                            <h1>Multi input form ?</h1>
                          </div>
                            <div className="heading_detail">
                              <ul>
                              <li>In single input form we had only one input field and we have learned how we can control single input field form but now, we have multi input fields form , 
                                  as the name in this tutorial we may have two or more than two input fields.<br/>
                                  So in this case we have two ways to control multi input fields - let's see both with examples...
                              </li><br/>
                              <p>First check output -</p>
                                <div className="outputBox">
                                    {output3Form ? 
                                      <div className="suboutputBox">
                                        <div className="output">
                                          <div className="inOutput">
                                          <form onSubmit={submitFullname}>
                                            <input type="text" placeholder="Enter your firstname" name="firstname" autocomplete="off" onChange={getfullName}/><br/>
                                            <input type="text" placeholder="Enter your lastname" name="lastname" autocomplete="off" onChange={getfullName}/><br/>
                                            <button type="submit" className="btn btn-dark">Display</button>
                                          </form>
                                            <h1 style={{fontSize: "15px"}}>{storeFullName}</h1>
                                          </div>
                                          </div>
                                          <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                              showOutput3Form(false); setDisplayMyName2(); setStoreFullName("Your name will appear here when you click the button...");}}>Hide output</button> 
                                            <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                          </div>
                                      </div> 
                                    : <button className="btn btn-primary showOp" onClick={() =>{showOutput3Form(true); }}>See output</button>}
                                </div>
                                <p>As you can see in output, we have two input fields first for firstname and second for lastname. When we click the button after filling both name then it prints them down.
                                 So here, we will see two examples and the output of both examples will be same as you already seen above - </p><hr/>
                                <strong><li>Example 1 -</li></strong>

                                <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                            <li onClick={showIndexfileForm3} style={{background : bgcolorForm5 ? "#1B1B1B" : "", color : bgcolorForm5 ? "#ddd" : ""}}>index.js</li>
                                            <li onClick={showMIfileForm1} style={{background : bgcolorForm6 ?  "#1B1B1B" : "", color : bgcolorForm6 ? "#ddd" : ""}}>Form.jsx</li>
                                        </ul>
                                      </div>
                                      <div className="filecode">
                                        {indexfileForm3 ?
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
                                                          <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/>
                                                          <span style={{color: "#d966ff"}}>{' import '}</span>
                                                          <span style={{color: "skyblue"}}>{' Form '}</span>
                                                          <span style={{color: "#d966ff"}}>{' from '}</span>
                                                          <span style={{color: "#ff8c1a"}}>'./Form';</span><br/><br/>
                                                          <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                                          <span style={{color: "#ffff80"}}>render(</span>
                                                          <span style={{color: "#00b8e6"}}>{' <Form/> '}</span>
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

                                        {miForm1 ?
                                          <div className="sub_filecode">
                                              <p><span>//</span> This is Form.jsx file</p>
                                              <div className="code">
                                                  <pre>
                                                      <span style={{color: "#d966ff"}}>{' import '}</span>
                                                      <span style={{color: "#99ccff"}}>{' React, { useState }'}</span>
                                                      <span style={{color: "#d966ff"}}>{' from '}</span>
                                                      <span style={{color: "#ff8c1a"}}>'react';</span><br/><br/>
                                                      <span style={{color: "#99ccff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' Form '}</span>
                                                      <span style={{color: "#99ccff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'()'}</span>
                                                      <span style={{color: "#99ccff"}}>{' => '}</span>
                                                      <span style={{color: "#99ccff"}}>{' { '}</span><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' [firstName, setfirstName]'}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#99ccff"}}>{'useState();'}</span><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' [lastName, setlastName]'}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#99ccff"}}>{'useState();'}</span><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' [storefullName, setStorefullName]'}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#99ccff"}}>{'useState('}</span>
                                                      <span style={{color: "#ffffe6"}}>{'"Your name will appear here when you click the button..."'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span><br/><br/>
                                                      <div style={{border: hlEHDefine ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' getFirstname '}</span>
                                                      <span style={{color: "#99ccff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object'}</span>
                                                      <span style={{color: "#ffff80"}}>{')'}</span>
                                                      <span style={{color: "#99ccff"}}>{' => '}</span>
                                                      <span style={{color: "#99ccff"}}>{' { '}</span><br/>
                                                      <span>{''.padStart(8)}</span>
                                                      <span style={{color: "#99ccff"}}>{'setfirstName('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object.target.value'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#99ccff"}}>{'}'}</span></div><br/>
                                                      <div style={{border: hlEHDefine ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' getLastname '}</span>
                                                      <span style={{color: "#99ccff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object'}</span>
                                                      <span style={{color: "#ffff80"}}>{')'}</span>
                                                      <span style={{color: "#99ccff"}}>{' => '}</span>
                                                      <span style={{color: "#99ccff"}}>{' { '}</span><br/>
                                                      <span>{''.padStart(8)}</span>
                                                      <span style={{color: "#99ccff"}}>{'setlastName('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object.target.value'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#99ccff"}}>{'}'}</span></div><br/><br/>
                                                      <div style={{border: hlonSubmitD ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' submitFullname '}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object'}</span>
                                                      <span style={{color: "#ffff80"}}>{')'}</span>
                                                      <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                      <span>{''.padStart(8)}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object.'}</span>
                                                      <span style={{border: hlprevent ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{'preventDefault();'}</span></span><br/>
                                                      <span style={{border: hlstoreFullname ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(8)}</span>
                                                      <span style={{color: "#99ccff"}}>{'setStorefullName('}</span>
                                                      <span style={{color: "#ffffe6"}}>{'firstName'}</span>
                                                      <span style={{color: "#ff8c1a"}}>{' + '}</span>
                                                      <span style={{color: "#99ccff"}}>{'" "'}</span>
                                                      <span style={{color: "#ff8c1a"}}>{' + '}</span>
                                                      <span style={{color: "#ffffe6"}}>{'lastName'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span></span><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span></div><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                      <span>{''.padStart(10)}</span>
                                                      <span style={{color: "#ff0000"}}>{'<>'}</span><br/>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<form '}</span>
                                                      <span style={{border: hlonSubmit ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{'onSubmit={'}</span>
                                                      <span style={{color: "#ffff80"}}>{'submitFullname'}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                                      <span style={{color: "#00b8e6"}}>{'>'}</span><br/>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<input '}</span>
                                                      <span style={{color: "#d966ff"}}>{' type="'}</span>
                                                      <span style={{color: "#ffff80"}}>{'text'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span>
                                                      <span style={{color: "#d966ff"}}>{' placeholder="'}</span>
                                                      <span style={{color: "#ffff80"}}>{' Enter your firstname'}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'" '}</span>
                                                      <span style={{border: hlEH1 ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{' onChange={'}</span>
                                                      <span style={{color: "#ffff80"}}>{'getFirstname'}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                                      <span style={{color: "#00b8e6"}}>{'/>'}</span><br/>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<input '}</span>
                                                      <span style={{color: "#d966ff"}}>{' type="'}</span>
                                                      <span style={{color: "#ffff80"}}>{'text'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span>
                                                      <span style={{color: "#d966ff"}}>{' placeholder="'}</span>
                                                      <span style={{color: "#ffff80"}}>{' Enter your lastname'}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'" '}</span>
                                                      <span style={{border: hlEH2 ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{' onChange={'}</span>
                                                      <span style={{color: "#ffff80"}}>{'getLastname'}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                                      <span style={{color: "#00b8e6"}}>{'/>'}</span><br/>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<button '}</span>
                                                      <span style={{color: "#d966ff"}}>{' type="'}</span>
                                                      <span style={{color: "#ffff80"}}>{'submit'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span>
                                                      <span style={{color: "#00b8e6"}}>{'>'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' Display '}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</button> '}</span><br/>
                                                      <span style={{border: hlh1Tag ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<h1>'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' {storefullName} '}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</h1> '}</span></span><br/>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</form>'}</span><br/>
                                                      <span>{''.padStart(10)}</span>
                                                      <span style={{color: "#ff0000"}}>{'</>'}</span>
                                                      <span style={{color: "#d966ff"}}>{' ); '}</span><br/>
                                                      <span style={{color: "#99ccff"}}>{' } '}</span><br/><br/>
                                                      <span style={{color: "#d966ff"}}>{' export '}</span>
                                                      <span style={{color: "#d966ff"}}>{' default '}</span>
                                                      <span style={{color: "#ffffe6"}}>{' Form;'}</span>
                                                  </pre>
                                              </div>
                                          </div>
                                        : null}
                                    </div>
                                  </div>
                                  <p> In this example, we will use two different event handler for both input fields and use two <strong>useState</strong> for both input fields to set their values, so here we are using <strong><code>getFirstname</code></strong> event handler for firstname input field 
                                      <span onClick={() =>{showMIfileForm1();
                                          setTimeout(() => {setHlEH1(true);},1000);
                                          setTimeout(() => {setHlEH1(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>and <strong><code>getLastname</code></strong> for lastname input field
                                      <span onClick={() =>{showMIfileForm1();
                                          setTimeout(() => {setHlEH2(true);},1000);
                                          setTimeout(() => {setHlEH2(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> but first we have to define both event handler and inside of them we will store firstname input field value in <code>firstname </code>
                                         and lastname input field value in <code>lastname</code> respectively by using their state.
                                      <span onClick={() =>{showMIfileForm1();
                                          setTimeout(() => {setHlEHDefine(true);},1000);
                                          setTimeout(() => {setHlEHDefine(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span><br/>
                                      So now, if someone enter own firstname and lastname then firstname will be stored in <code>firstname</code> and lastname will be stored in <code>lastname</code>.
                                      Now we are going to display our fullname ( firstname and lastname) by clicking the button, but in multi input form we won't set a <code>onClick</code> event handler as we used in single input form (check Example 2 of Single input form).<br/>
                                      Here we have a <code>onSubmit</code> (<strong>submitFullname</strong>) event handler for form 
                                      <span onClick={() =>{showMIfileForm1();
                                          setTimeout(() => {setHlonSubmit(true);},1000);
                                          setTimeout(() => {setHlonSubmit(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> then we will use this and submit our form and display their data (firstname and lastname)
                                      <span onClick={() =>{showMIfileForm1();
                                          setTimeout(() => {setHlonSubmitD(true);},1000);
                                          setTimeout(() => {setHlonSubmitD(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span><br/>
                                      In declaration of this <code>onSubmit</code>, we have a <strong>preventDefault();</strong> 
                                       <span onClick={() =>{showMIfileForm1();
                                          setTimeout(() => {setHlprevent(true);},1000);
                                          setTimeout(() => {setHlprevent(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>, it stops submission of our form means when we click the button then data will be submitted and page refreshed that's why we can't see the form data. 
                                      And as well as we will store complete fullname (concate both firstname and lastname) by using an another <strong>usestate</strong> 
                                      <span onClick={() =>{showMIfileForm1();
                                          setTimeout(() => {setHlstoreFullname(true);},1000);
                                          setTimeout(() => {setHlstoreFullname(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span><br/>
                                      Finally, we have stored both input values in a state as its currentValue and now, we will display fullname by a heading tag 
                                      <span onClick={() =>{showMIfileForm1();
                                          setTimeout(() => {setHlh1Tag(true);},1000);
                                          setTimeout(() => {setHlh1Tag(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>

                                  </p><hr/>
                                  <strong><li>Example 2 -</li></strong><br/>
                                  <p>In this example, we will face two new concept that is <strong>object destructuring</strong> and <strong>spread operator(...)</strong>, So first we will know about both of them - </p><br/>
                                  <strong>Object destructuring : </strong><br/>
                                      <div style={{marginLeft: "20px"}}>ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables.<br/>
                                      let we have an object - <br/>
                                      <strong><code style={{color:"#000", marginLeft: "20px"}}><span style={{color:"#1376d4"}}>let</span> <span style={{color: "#ab1a9c"}}>myLanguages</span> <span style={{color:"#1376d4"}}>= {'{'}</span>first : <span style={{color:"#ff8c1a"}}>"HTML"</span>, second : <span style={{color:"#ff8c1a"}}>"CSS"</span>, third : <span style={{color:"#ff8c1a"}}>"JavaScript"</span>, fourth : <span style={{color:"#ff8c1a"}}>"ReactJS"</span><span style={{color:"#1376d4"}}>{'};'}</span></code></strong><br/><br/>
                                      <strong style={{fontSize: "14px"}}>Without destructuring - </strong><br/>
                                      <div style={{marginLeft: "20px"}}>
                                        Without destructuring, we can extract data from object as <code>objectName.keyName</code><br/>
                                        Examples :<br/>
                                        <code style={{color:"#000", marginLeft: "20px"}}><span style={{color:"#1376d4"}}>let</span> firstlanguage = <span style={{color: "#ab1a9c"}}>myLanguage</span>.first</code><br/>
                                        <code style={{color:"#000", marginLeft: "20px"}}><span style={{color:"#1376d4"}}>let</span> secondlanguage = <span style={{color: "#ab1a9c"}}>myLanguage</span>.second</code><br/>
                                        <code style={{color:"#000", marginLeft: "20px"}}><span style={{color:"#1376d4"}}>let</span> thirdlanguage = <span style={{color: "#ab1a9c"}}>myLanguage</span>.third</code><br/>
                                        <code style={{color:"#000", marginLeft: "20px"}}><span style={{color:"#1376d4"}}>let</span> fourthlanguage = <span style={{color: "#ab1a9c"}}>myLanguage</span>.fourth</code><br/><br/>
                                        <div style={{marginLeft: "20px"}}>
                                          <span style={{color:"#1376d4"}}>console.log(</span>firstlanguage<span style={{color:"#1376d4"}}>);</span>  <span style={{color: "#4f4a4e", marginLeft:"42px", fontSize: "13px"}}> //output : HTML</span><br/>
                                          <span style={{color:"#1376d4"}}>console.log(</span>secondlanguage<span style={{color:"#1376d4"}}>);</span> <span style={{color: "#4f4a4e", marginLeft:"18px", fontSize: "13px"}}> //output : CSS</span><br/>
                                          <span style={{color:"#1376d4"}}>console.log(</span>thirdlanguage<span style={{color:"#1376d4"}}>);</span>  <span style={{color: "#4f4a4e", marginLeft:"35px", fontSize: "13px"}}> //output : JavaScript</span><br/>
                                          <span style={{color:"#1376d4"}}>console.log(</span>fourthlanguage<span style={{color:"#1376d4"}}>);</span> <span style={{color: "#4f4a4e", marginLeft:"25px", fontSize: "13px"}}> //output : ReactJS</span><br/>
                                        </div><br/>
                                        <p>Here, If we want to extract or get data from object then we have to assign to new variables. So, Instead of assigning values one by one to new variables, we can use the object on the left to extract the data,<br/> let's see how we can do this ?</p>
                                      </div><br/>
                                      <strong style={{fontSize: "14px"}}>With destructuring - </strong><br/>
                                      <div style={{marginLeft: "20px"}}>
                                        Let's repeat the above example with ES6 object destructuring -<br/>
                                        Examples :<br/>
                                        <code style={{color:"#000", marginLeft: "20px"}}><span style={{color:"#1376d4"}}>let</span> <span style={{color:"#1376d4"}}> {'{'}</span>firstLanguage, secondLanguage, thirdLanguage, fourthLanguage<span style={{color:"#1376d4"}}>{'}'}</span> = <span style={{color: "#ab1a9c"}}>myLanguage</span>;</code><br/><br/>
                                        <div style={{marginLeft: "30px"}}>
                                          <span style={{color:"#1376d4"}}>console.log(</span>firstlanguage<span style={{color:"#1376d4"}}>);</span>  <span style={{color: "#4f4a4e", marginLeft:"42px", fontSize: "13px"}}> //output : HTML</span><br/>
                                          <span style={{color:"#1376d4"}}>console.log(</span>secondlanguage<span style={{color:"#1376d4"}}>);</span> <span style={{color: "#4f4a4e", marginLeft:"18px", fontSize: "13px"}}> //output : CSS</span><br/>
                                          <span style={{color:"#1376d4"}}>console.log(</span>thirdlanguage<span style={{color:"#1376d4"}}>);</span>  <span style={{color: "#4f4a4e", marginLeft:"35px", fontSize: "13px"}}> //output : JavaScript</span><br/>
                                          <span style={{color:"#1376d4"}}>console.log(</span>fourthlanguage<span style={{color:"#1376d4"}}>);</span> <span style={{color: "#4f4a4e", marginLeft:"25px", fontSize: "13px"}}> //output : ReactJS</span><br/>
                                        </div>
                                      </div><br/>
                                      <p>here, with ES6 object destructuring we can extract data in a very short and simple way, just we use a object on the left side and original object name in right side.<br/>
                                      It automatically assigns the original object values in left side object respectively ( eg. firstlanguage="HTML", secondlanguage="CSS" etc.)</p>
                                      </div><hr/>
                                      <strong>Spread operator (...) -</strong><br/>
                                      <div style={{marginLeft: "20px"}}>
                                        <p>The spread operator is a new addition to the set of operators in JavaScript ES6. The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability. It is denoted by three dotes (...).</p>
                                        Examples :<br/>
                                        <strong><code style={{color:"#000", marginLeft: "20px"}}><span style={{color:"#1376d4"}}>let</span> <span style={{color: "#ab1a9c"}}>myBio</span> <span style={{color:"#1376d4"}}>= {'{'}</span>Name : <span style={{color:"#ff8c1a"}}>"John"</span>, Country : <span style={{color:"#ff8c1a"}}>"India"</span>, Job : <span style={{color:"#ff8c1a"}}>"Developer"</span><span style={{color:"#1376d4"}}>{'};'}</span></code></strong><br/><br/>
                                        <p>We can use this operator as <strong><code>...myBio</code></strong> <br/>
                                         So here, <strong><code>...myBio</code> = <code style={{color: "#000"}}><span style={{color:"#1376d4"}}> {'{'}</span>Name : <span style={{color:"#ff8c1a"}}>"User"</span>, Country : <span style={{color:"#ff8c1a"}}>"India"</span>, Job : <span style={{color:"#ff8c1a"}}>"Developer"</span><span style={{color:"#1376d4"}}>{'};'}</span></code></strong>
                                         </p><br/>
                                         <p><h6>Let's take an another example -</h6>
                                         <strong><code style={{color:"#000", marginLeft: "20px"}}><span style={{color:"#1376d4"}}>let</span> <span style={{color: "#ab1a9c"}}>commonData</span> <span style={{color:"#1376d4"}}>= {'{'}</span> Country : <span style={{color:"#ff8c1a"}}>"India"</span>, Job : <span style={{color:"#ff8c1a"}}>"Developer"</span><span style={{color:"#1376d4"}}>{'};'}</span></code></strong><br/>
                                         <strong><code style={{color:"#000", marginLeft: "20px"}}><span style={{color:"#1376d4"}}>let</span> <span style={{color: "#ab1a9c"}}>JohnBio</span> <span style={{color:"#1376d4"}}>= {'{'}</span> Name : <span style={{color:"#ff8c1a"}}>"John"</span>, ...commonData <span style={{color:"#1376d4"}}>{'};'}</span></code></strong><br/><br/>
                                         So <strong><code style={{color: "#ab1a9c"}}>JohnBio</code> = <code style={{color: "#000"}}><span style={{color:"#1376d4"}}> {'{'}</span> Name : <span style={{color:"#ff8c1a"}}>"John"</span>, Country : <span style={{color:"#ff8c1a"}}>"India"</span>, Job : <span style={{color:"#ff8c1a"}}>"Developer"</span> <span style={{color:"#1376d4"}}>{'};'}</span></code></strong>
                                         </p><hr/>
                                      </div>

                                <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                            <li onClick={showIndexfileForm4} style={{background : bgcolorForm7 ? "#1B1B1B" : "", color : bgcolorForm7 ? "#ddd" : ""}}>index.js</li>
                                            <li onClick={showMIfileForm2} style={{background : bgcolorForm8 ?  "#1B1B1B" : "", color : bgcolorForm8 ? "#ddd" : ""}}>Form.jsx</li>
                                        </ul>
                                      </div>
                                      <div className="filecode">
                                        {indexfileForm4 ?
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
                                                          <span style={{color: "#ff8c1a"}}>'react-dom';</span><br/>
                                                          <span style={{color: "#d966ff"}}>{' import '}</span>
                                                          <span style={{color: "skyblue"}}>{' Form '}</span>
                                                          <span style={{color: "#d966ff"}}>{' from '}</span>
                                                          <span style={{color: "#ff8c1a"}}>'./Form';</span><br/><br/>
                                                          <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                                          <span style={{color: "#ffff80"}}>render(</span>
                                                          <span style={{color: "#00b8e6"}}>{' <Form/> '}</span>
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

                                        {miForm2 ?
                                          <div className="sub_filecode">
                                              <p><span>//</span> This is Form.jsx file</p>
                                              <div className="code">
                                                  <pre>
                                                      <span style={{color: "#d966ff"}}>{' import '}</span>
                                                      <span style={{color: "#99ccff"}}>{' React, { useState }'}</span>
                                                      <span style={{color: "#d966ff"}}>{' from '}</span>
                                                      <span style={{color: "#ff8c1a"}}>'react';</span><br/><br/>
                                                      <span style={{color: "#99ccff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' Form '}</span>
                                                      <span style={{color: "#99ccff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'()'}</span>
                                                      <span style={{color: "#99ccff"}}>{' => '}</span>
                                                      <span style={{color: "#99ccff"}}>{' { '}</span><br/><br/>
                                                      <span style={{border: hluseState ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' [fullName, setfullName]'}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#99ccff"}}>{'useState('}</span>
                                                      <span style={{border: hluSobject ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#ffffe6"}}>{'{'}</span>
                                                      <span style={{color: "#ffff80"}}>{'firstname : "", '}</span>
                                                      <span style={{color: "#ffff80"}}>{'lastname : ""'}</span>
                                                      <span style={{color: "#ffffe6"}}>{'}'}</span></span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span></span><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' [storefullName, setStorefullName]'}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#99ccff"}}>{'useState('}</span>
                                                      <span style={{color: "#ffffe6"}}>{'"Your name will appear here when you click the button..."'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' getFullname '}</span>
                                                      <span style={{color: "#99ccff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object'}</span>
                                                      <span style={{color: "#ffff80"}}>{')'}</span>
                                                      <span style={{color: "#99ccff"}}>{' => '}</span>
                                                      <span style={{color: "#99ccff"}}>{' { '}</span><br/>
                                                      <span style={{border: hldeObject ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(6)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{'{'}</span>
                                                      <span style={{color: "#ffffe6"}}>{'name, value'}</span>
                                                      <span style={{color: "#ffff80"}}>{'}'}</span>
                                                      <span style={{color: "#ff8c1a"}}>{' = '}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object.target;'}</span></span><br/>
                                                      <span>{''.padStart(8)}</span>
                                                      <span style={{color: "#99ccff"}}>{'setfullName('}</span>
                                                      <span style={{color: "#ffff80"}}>{'('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'preData'}</span>
                                                      <span style={{color: "#ffff80"}}>{')'}</span>
                                                      <span style={{color: "#ffff80"}}>{'=>{'}</span><br/>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#d966ff"}}>{'return{'}</span><br/>
                                                      <span>{''.padStart(18)}</span>
                                                      <span style={{border: hlreturnNew ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#ff8c1a"}}>{'...preData,'}</span>
                                                      <span style={{color: "#ffff80"}}>{' ['}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'name'}</span>
                                                      <span style={{color: "#ffff80"}}>{']'}</span>
                                                      <span style={{color: "#ffff80"}}>{' : '}</span>
                                                      <span style={{color: "#ffff80"}}>{'value'}</span></span><br/>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#d966ff"}}>{'};'}</span><br/>
                                                      <span>{''.padStart(8)}</span>
                                                      <span style={{color: "#99ccff"}}>{'});'}</span><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#99ccff"}}>{'}'}</span><br/><br/>
                                                      <div style={{border: hloSub ? "1px dashed #ffff00" : ""}}>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'const '}</span>
                                                      <span style={{color: "#ffff80"}}>{' submitFullname '}</span>
                                                      <span style={{color: "#d966ff"}}>{' = '}</span>
                                                      <span style={{color: "#ffff80"}}>{'('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object'}</span>
                                                      <span style={{color: "#ffff80"}}>{')'}</span>
                                                      <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                      <span>{''.padStart(5)}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'object.'}</span>
                                                      <span style={{color: "#d966ff"}}>{'preventDefault();'}</span><br/>
                                                      <span>{''.padStart(5)}</span>
                                                      <span style={{color: "#99ccff"}}>{'setStorefullName('}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'`'}</span>
                                                      <span style={{color: "#ffffe6"}}>{'${fullName.firstname} '}</span>
                                                      <span style={{color: "#ffffe6"}}>{' ${fullName.lastname}'}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'`'}</span>
                                                      <span style={{color: "#99ccff"}}>{');'}</span></div><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span><br/><br/>
                                                      <span>{''.padStart(3)}</span>
                                                      <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                      <span>{''.padStart(10)}</span>
                                                      <span style={{color: "#ff0000"}}>{'<>'}</span><br/>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<form '}</span>
                                                      <span style={{color: "#d966ff"}}>{'onSubmit={'}</span>
                                                      <span style={{color: "#ffff80"}}>{'submitFullname'}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span>
                                                      <span style={{color: "#00b8e6"}}>{'>'}</span><br/>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<input '}</span>
                                                      <span style={{color: "#d966ff"}}>{' type="'}</span>
                                                      <span style={{color: "#ffff80"}}>{'text'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span>
                                                      <span style={{color: "#d966ff"}}>{' placeholder="'}</span>
                                                      <span style={{color: "#ffff80"}}>{' Enter your firstname'}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'" '}</span>
                                                      <span style={{border: hlnameAttr ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{' name="'}</span>
                                                      <span style={{color: "#ffff80"}}>{'firstname'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span></span>
                                                      <span style={{border: hlgetFullname ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{' onChange={'}</span>
                                                      <span style={{color: "#ffff80"}}>{'getFullname'}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                                      <span style={{color: "#00b8e6"}}>{'/>'}</span><br/>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<input '}</span>
                                                      <span style={{color: "#d966ff"}}>{' type="'}</span>
                                                      <span style={{color: "#ffff80"}}>{'text'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span>
                                                      <span style={{color: "#d966ff"}}>{' placeholder="'}</span>
                                                      <span style={{color: "#ffff80"}}>{' Enter your lastname'}</span>
                                                      <span style={{color: "#ff8c1a"}}>{'" '}</span>
                                                      <span style={{border: hlnameAttr ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{' name="'}</span>
                                                      <span style={{color: "#ffff80"}}>{'lastname'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span></span>
                                                      <span style={{border: hlgetFullname ? "1px dashed #ffff00" : ""}}>
                                                      <span style={{color: "#d966ff"}}>{' onChange={'}</span>
                                                      <span style={{color: "#ffff80"}}>{'getFullname'}</span>
                                                      <span style={{color: "#d966ff"}}>{'}'}</span></span>
                                                      <span style={{color: "#00b8e6"}}>{'/>'}</span><br/>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<button '}</span>
                                                      <span style={{color: "#d966ff"}}>{' type="'}</span>
                                                      <span style={{color: "#ffff80"}}>{'submit'}</span>
                                                      <span style={{color: "#d966ff"}}>{'" '}</span>
                                                      <span style={{color: "#00b8e6"}}>{'>'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' Display '}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</button> '}</span><br/>
                                                      <span>{''.padStart(14)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'<h1>'}</span>
                                                      <span style={{color: "#ffffe6"}}>{' {storefullName} '}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</h1> '}</span><br/>
                                                      <span>{''.padStart(12)}</span>
                                                      <span style={{color: "#00b8e6"}}>{'</form>'}</span><br/>
                                                      <span>{''.padStart(10)}</span>
                                                      <span style={{color: "#ff0000"}}>{'</>'}</span>
                                                      <span style={{color: "#d966ff"}}>{' ); '}</span><br/>
                                                      <span style={{color: "#99ccff"}}>{' } '}</span><br/><br/>
                                                      <span style={{color: "#d966ff"}}>{' export '}</span>
                                                      <span style={{color: "#d966ff"}}>{' default '}</span>
                                                      <span style={{color: "#ffffe6"}}>{' Form;'}</span>
                                                  </pre>
                                              </div>
                                          </div>
                                        : null}
                                    </div>
                                  </div>
                                  <div> In previous example, we used two different event handler and useState for both input fields but in this example we will used same event handler and useState for both input field. 
                                      So here, we are using an <strong>useState</strong> 
                                      <span onClick={() =>{showMIfileForm2();
                                              setTimeout(() => {setHluseState(true);},1000);
                                              setTimeout(() => {setHluseState(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> and we have intialized its currentValue as an object 
                                      <span onClick={() =>{showMIfileForm2();
                                              setTimeout(() => {setHluSobject(true);},1000);
                                              setTimeout(() => {setHluSobject(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> (It means the currentValue of state (<code>fullName</code>) 
                                       is an object which has two two keys - <code style={{color: "#000"}}>firstname</code> and <code style={{color: "#000"}}>lastname</code> and their values are empty, both keys name are the <code style={{color: "#000"}}>name</code> attribute values of input fields 
                                       <span onClick={() =>{showMIfileForm2();
                                              setTimeout(() => {setHlnameAttr(true);},1000);
                                              setTimeout(() => {setHlnameAttr(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> ) 
                                       and we will use same event handler for both input fields that is <code>getFullname</code> 
                                      <span onClick={() =>{showMIfileForm2();
                                              setTimeout(() => {setHlgetFullname(true);},1000);
                                              setTimeout(() => {setHlgetFullname(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> and as well as we will define that event handler.<br/><br/>
                                      <p>In declaration of event handler, we have a distructured object of <code>object.target</code> 
                                      <span onClick={() =>{showMIfileForm2();
                                              setTimeout(() => {setHldeObject(true);},1000);
                                              setTimeout(() => {setHldeObject(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span><br/><hr/>
                                      If we don't use object destructuring here then it looks like - </p>
                                      <div style={{marginLeft: "50px"}}>
                                        <span style={{color:"#1376d4"}}>const</span> <span style={{color:"#ab1a9c"}}>name</span> = <span style={{color:"#ff8c1a"}}>object.target.name</span>;<br/>
                                        <span style={{color:"#1376d4"}}>const</span> <span style={{color:"#ab1a9c"}}>value</span> = <span style={{color:"#ff8c1a"}}>object.target.value</span>;
                                      </div>
                                        So we used object destructuring and make it short : <strong><span style={{color:"#1376d4"}}>const</span> {'{'}<span style={{color:"#ab1a9c"}}>name</span>, <span style={{color:"#ab1a9c"}}>value</span>{'}'} = <span style={{color:"#ff8c1a"}}>object.target</span>;</strong><br/> because <code>name</code> and <code>value</code> belongs from (<code style={{color:"#ff8c1a"}}>object.target</code>).<hr/>
                                        Now we are going to update first useState value by its update function (<code>setfullName()</code>), in this function we will define a inline callback function and return previous value of state (<code>{'{firstname : "", lastname : ""'}</code>) with new value (<code>{'[name] : value'}</code>) 
                                        <span onClick={() =>{showMIfileForm2();
                                              setTimeout(() => {setHlreturnNew(true);},1000);
                                              setTimeout(() => {setHlreturnNew(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> and you can see here, we passed an argument in callback function that is <code>preData</code> it's because if we want to use previous data of the state then we have to pass an argument and this argument stores the previous value of that state (here, <code>{'{firstname : "", lastname : ""'}</code>).<br/>
                                       As you learned that if we want to add new data with previous data then we use spread operator, and we will update previous data with new data by <code>{'[name] : value'}</code> (First it checks the name attribute of input field and store value in its name key that's why both input field values are stored in a state variable as a object).
                                       And now we can display fullname from this object by using another state with form submit event handler  
                                       <span onClick={() =>{showMIfileForm2();
                                              setTimeout(() => {setHloSub(true);},1000);
                                              setTimeout(() => {setHloSub(false);},6000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> <br/>
                                      Here we used template literals-<hr/>
                                      <h6>Template literals : </h6>
                                      <p>Template Literal in ES6 provides new features to create a string that gives more control over dynamic strings. Traditionally, String is created using single <strong>quotes (‘)</strong> or <strong>double quotes (“)</strong> quotes (eg- <code>var str = 'String';</code> or <code>var str = "String";</code>). Template literal is created using the <strong>backtick (`)</strong> character (eg- <code>var str = `String`;</code>).</p>
                                      <h6>How to use expression : </h6>
                                      <p><code>{'let a = 5;'}<br/> {'let b = 10;'}<br/></code>
                                      Traditionally or Without Template literals : <code>{'let sum = "The sum of" + a + "and" + b + "is" + (a+b);'} </code><br/>
                                      With Template literals : <code>{'let sum = `The sum of ${a} and ${b} is ${a+b}`;'}</code><br/>
                                      As you can see in traditionally way, the concatination of two strings is complex than template literals. To get string value in template literals, we will use <strong>{'${stringName}'}</strong> and the output will be same for both that is <strong>The sum of 5 and 10 is 15</strong>.</p>
                                      <hr/>
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
export default Forms;
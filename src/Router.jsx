import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Router = (props) =>{

  const [output1Router, showOutput1Router] = useState(false);
  const [indexfileRouter, setIndexfileRouter] = useState(true);
  const [fileRouter, setFileRouter] = useState(false);
  const [fileHome, setFileHome] = useState(false);
  const [fileAbout, setFileAbout] = useState(false);
  const [fileContact, setFileContact] = useState(false);
  const [fileLogin, setFileLogin] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [bgcolorRouter1, setBgcolorRouter1] = useState(true);
  const [bgcolorRouter2, setBgcolorRouter2] = useState(false);
  const [bgcolorRouter3, setBgcolorRouter3] = useState(false);
  const [bgcolorRouter4, setBgcolorRouter4] = useState(false);
  const [bgcolorRouter5, setBgcolorRouter5] = useState(false);
  const [bgcolorRouter6, setBgcolorRouter6] = useState(false);
  const [bgcolorRouter7, setBgcolorRouter7] = useState(false);
  const [url, setURL] = useState("localhost:3000");
  const [fullURL, setfullURL] = useState();
  const [pageData, setpageData] = useState("Home page !");
  const [pageRefresh, setPageRefresh] = useState(false);
  const [pageNotFound, setPageNotFound] = useState(false);
  const [output2Router, showOutput2Router] = useState(false);
  const [output3Router, showOutput3Router] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);
  const [hlImpBRouter, setHlImpBRouter] = useState(false);
  const [hlCallBRouter, setHlCallBRouter] = useState(false);
  const [hlaTag, setHlaTag] = useState(false);
  const [hlImpSR, setHlImpSR] = useState(false);
  const [hlRoute1, setHlRoute1] = useState(false);
  const [hlSwitchRoute, setHlSwitchRoute] = useState(false);
  const [hlImpLink, setHlImpLink] = useState(false);
  const [hlImpNavLink, setHlImpNavLink] = useState(false);


  const showIndexfileRouter = () => {
    setIndexfileRouter(true);
    setFileRouter(false);
    setFileHome(false);
    setFileAbout(false);
    setFileContact(false);
    setFileLogin(false);
    setFileError(false);
    setBgcolorRouter1(true);
    setBgcolorRouter2(false);
    setBgcolorRouter3(false);
    setBgcolorRouter4(false);
    setBgcolorRouter5(false);
    setBgcolorRouter6(false);
    setBgcolorRouter7(false);
  }
  const showfileRouter = () => {
    setIndexfileRouter(false);
    setFileRouter(true);
    setFileHome(false);
    setFileAbout(false);
    setFileContact(false);
    setFileLogin(false);
    setFileError(false);
    setBgcolorRouter1(false);
    setBgcolorRouter2(true);
    setBgcolorRouter3(false);
    setBgcolorRouter4(false);
    setBgcolorRouter5(false);
    setBgcolorRouter6(false);
    setBgcolorRouter7(false);
  }
  const showfileHome = () => {
    setIndexfileRouter(false);
    setFileRouter(false);
    setFileHome(true);
    setFileAbout(false);
    setFileContact(false);
    setFileLogin(false);
    setFileError(false);
    setBgcolorRouter1(false);
    setBgcolorRouter2(false);
    setBgcolorRouter3(true);
    setBgcolorRouter4(false);
    setBgcolorRouter5(false);
    setBgcolorRouter6(false);
    setBgcolorRouter7(false);
  }
  const showfileAbout = () => {
    setIndexfileRouter(false);
    setFileRouter(false);
    setFileHome(false);
    setFileAbout(true);
    setFileContact(false);
    setFileLogin(false);
    setBgcolorRouter1(false);
    setBgcolorRouter2(false);
    setBgcolorRouter3(false);
    setBgcolorRouter4(true);
    setBgcolorRouter5(false);
    setBgcolorRouter6(false);
    setBgcolorRouter7(false);
  }
  const showfileContact = () => {
    setIndexfileRouter(false);
    setFileRouter(false);
    setFileHome(false);
    setFileAbout(false);
    setFileContact(true);
    setFileLogin(false);
    setFileError(false);
    setBgcolorRouter1(false);
    setBgcolorRouter2(false);
    setBgcolorRouter3(false);
    setBgcolorRouter4(false);
    setBgcolorRouter5(true);
    setBgcolorRouter6(false);
    setBgcolorRouter7(false);
  }
  const showfileLogin = () => {
    setIndexfileRouter(false);
    setFileRouter(false);
    setFileHome(false);
    setFileAbout(false);
    setFileContact(false);
    setFileLogin(true);
    setFileError(false);
    setBgcolorRouter1(false);
    setBgcolorRouter2(false);
    setBgcolorRouter3(false);
    setBgcolorRouter4(false);
    setBgcolorRouter5(false);
    setBgcolorRouter6(true);
    setBgcolorRouter7(false);
  }
  const showfileError = () => {
    setIndexfileRouter(false);
    setFileRouter(false);
    setFileHome(false);
    setFileAbout(false);
    setFileContact(false);
    setFileLogin(false);
    setFileError(true);
    setBgcolorRouter1(false);
    setBgcolorRouter2(false);
    setBgcolorRouter3(false);
    setBgcolorRouter4(false);
    setBgcolorRouter5(false);
    setBgcolorRouter6(false);
    setBgcolorRouter7(true);
  }
 
  const customURL = (object) =>{
    setURL(object.target.value);
  }
  const getURL = (object) =>{
    object.preventDefault();
    if(url == "localhost:3000" || url == "localhost:3000/"){
      setpageData("Home page !");
      setURL("localhost:3000");
      setPageNotFound(false);
      setTimeout(()=>{setPageRefresh(true);});
      setTimeout(()=>{setPageRefresh(false);},500);
      setActiveAbout(false);
      setActiveContact(false);
      setActiveLogin(false);
    } else if(url == "localhost:3000/About" || url == "localhost:3000/about"){
      setpageData("This is About page !");
      setPageNotFound(false);
      setTimeout(()=>{setPageRefresh(true);});
      setTimeout(()=>{setPageRefresh(false);},500);
      setActiveAbout(true);
      setActiveContact(false);
      setActiveLogin(false);
    } else if(url == "localhost:3000/Contact" || url == "localhost:3000/contact"){
      setpageData("This is Contact page !");
      setPageNotFound(false);
      setTimeout(()=>{setPageRefresh(true);});
      setTimeout(()=>{setPageRefresh(false);},500);
      setActiveAbout(false);
      setActiveContact(true);
      setActiveLogin(false);
    } else if(url == "localhost:3000/Login" || url == "localhost:3000/login"){
      setpageData("This is Login page !");
      setPageNotFound(false);
      setTimeout(()=>{setPageRefresh(true);});
      setTimeout(()=>{setPageRefresh(false);},500);
      setActiveAbout(false);
      setActiveContact(false);
      setActiveLogin(true);
    } else {
      setpageData("Page not found !");
      setPageNotFound(true);
      setTimeout(()=>{setPageRefresh(true);});
      setTimeout(()=>{setPageRefresh(false);},500);
    }
  }
  const goAbout = () => {
    setURL("localhost:3000/about");
    setpageData("This is About page !");
    setTimeout(()=>{setPageRefresh(true);});
    setTimeout(()=>{setPageRefresh(false);},500);
    setActiveAbout(true);
    setActiveContact(false);
    setActiveLogin(false);
  }
  const goContact = () => {
    setURL("localhost:3000/contact");
    setpageData("This is Contact page !");
    setTimeout(()=>{setPageRefresh(true);});
    setTimeout(()=>{setPageRefresh(false);},500);
    setActiveAbout(false);
    setActiveContact(true);
    setActiveLogin(false);
  }
  const goLogin = () => {
    setURL("localhost:3000/login");
    setpageData("This is Login page !");
    setTimeout(()=>{setPageRefresh(true);});
    setTimeout(()=>{setPageRefresh(false);},500);
    setActiveAbout(false);
    setActiveContact(false);
    setActiveLogin(true);
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
                              <h1>Router ?</h1>
                            </div>
                            <div className="heading_detail">
                              <ul>
                                <li>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="subdiv cmdP">
                     <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                              <h1>How to use Router ?</h1>
                            </div>
                            <div className="heading_detail">
                              <ul>
                                <li>To use Router and its properties first we have to install it, so to install use following command in CMD -</li>
                                <li>Install React Router by using following command</li>
                                <p>D:\myreact>npm install react-router-dom</p>
                                Before run this command make sure that in CMD you are on your react-app ( D:\appname ).
                              </ul>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="subdiv">
                      <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                              <h1>Router {'<a>'} ?</h1>
                            </div>
                            <div className="heading_detail">
                              <ul>
                                <div className="RouteroutputBox">
                                <h6>First check the output  and see how Router works with <code>{'<a>'}</code> tag as well as try following URL after <code>{'localhost:3000'}</code> in output URL -</h6>
                                <p>- Type <strong> <code>{'/'}</code></strong> and press Enter key <br/>
                                   - Type <strong> <code>{'/about'}</code></strong> and press Enter key <br/>
                                   - Type <strong> <code>{'/contact'}</code></strong> and press Enter key <br/>
                                   - Type <strong> <code>{'/login'}</code></strong> and press Enter key <br/>
                                   - Type <strong> <code>{'/services'}</code></strong> or any other random URL like <code>{'/abc'}</code>, <code>{'/xyz'}</code> etc. or except above URL</p><br/>
                                    {output1Router ? 
                                      <div className="RoutersuboutputBox">
                                      <form onSubmit={getURL}>
                                        <input type="text" value={url} onChange={customURL} className="RouterURL"/>
                                      </form>
                                        <div className="Routeroutput">
                                        {pageNotFound ? <h1 style={{marginLeft: "35%", marginTop: "90px"}}>{pageData}</h1> :
                                        <div>
                                          {pageRefresh ? 
                                            <div className="page-refresh">
                                              <img src="Images/loading.GIF" style={{width:"30px", height:"30px"}}/>
                                            </div> :
                                            <div className="RouterinOutput">
                                              <div className="Router-navbar">
                                                <h1>Router</h1>
                                                  <ul>
                                                    <li onClick={goAbout}>About</li>
                                                    <li onClick={goContact}>Contact</li>
                                                    <li onClick={goLogin}>Login</li>
                                                  </ul>
                                              </div>
                                              <div className="AboutPage">
                                                  <h1>{pageData}</h1>
                                              </div>
                                            </div>}
                                          </div>}
                                        </div>
                                        <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                              showOutput1Router(false);
                                              setpageData("Home page !");
                                              setURL("localhost:3000");
                                              setPageNotFound(false);}}>Hide output</button> 
                                            <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                        </div>
                                      </div> 
                                    : <button className="btn btn-primary showOp" onClick={() =>{showOutput1Router(true); }}>See output</button>}
                                  </div>
                                  <p>As you can see in output and if you tried that URLs in output URL then the page is redirects us on the linked page (means when we type <code>/</code> after <code>{'localhost:3000'}</code> in output URL then it redirects us on Home page, <code> /about</code> redirects on About page and so on), 
                                  its all for that if user wants to check a random page and type such kind of things in URL then if page found then user will be redirected on that random page and if not then redirect on a Error page which shows a message that "Page not found !" or "Error 404 page not found !" as developer wants to show, so let's see how can we do it -</p>
                                  <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                            <li onClick={showIndexfileRouter} style={{background : bgcolorRouter1 ? "#1B1B1B" : "", color : bgcolorRouter1 ? "#ddd" : ""}}>index.js</li>
                                            <li onClick={showfileRouter} style={{background : bgcolorRouter2 ?  "#1B1B1B" : "", color : bgcolorRouter2 ? "#ddd" : ""}}>Router.jsx</li>
                                            <li onClick={showfileHome} style={{background : bgcolorRouter3 ?  "#1B1B1B" : "", color : bgcolorRouter3 ? "#ddd" : ""}}>Home.jsx</li>
                                            <li onClick={showfileAbout} style={{background : bgcolorRouter4 ? "#1B1B1B" : "", color : bgcolorRouter4 ? "#ddd" : ""}}>About.jsx</li>
                                            <li onClick={showfileContact} style={{background : bgcolorRouter5 ?  "#1B1B1B" : "", color : bgcolorRouter5 ? "#ddd" : ""}}>Contact.jsx</li>
                                            <li onClick={showfileLogin} style={{background : bgcolorRouter6 ?  "#1B1B1B" : "", color : bgcolorRouter6 ? "#ddd" : ""}}>Login.jsx</li>
                                            <li onClick={showfileError} style={{background : bgcolorRouter7 ?  "#1B1B1B" : "", color : bgcolorRouter7 ? "#ddd" : ""}}>Error.jsx</li>
                                        </ul>
                                      </div>
                                    <div className="filecode">
                                          {indexfileRouter ?
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
                                                        <span style={{border: hlImpBRouter ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' { BrowserRouter } '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react-router-dom';</span></span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "skyblue"}}>{' Router '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '} </span>
                                                        <span style={{color: "#ff8c1a"}}>'./Router';</span><br/><br/>
                                                        <span style={{color: "#99ccff"}}>{'ReactDom.'}</span>
                                                        <span style={{color: "#ffff80"}}>render(</span><br/>
                                                        <div style={{border: hlCallBRouter ? "1px dashed #ffff00" : "", width: "400px"}}>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#00b8e6"}}>{' <BrowserRouter> '}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{' <Router /> '}</span><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#00b8e6"}}>{' </BrowserRouter> '}</span>
                                                        <span style={{color: "#ffffe6"}}>{', '}</span></div><br/>
                                                        <span>{''.padStart(8)}</span>
                                                        <span style={{color: "#99ccff"}}>{'document.'}</span>
                                                        <span style={{color: "#ffff80"}}>{'getElementById('}</span>
                                                        <span style={{color: "#ff8c1a"}}>{'"root"'}</span>
                                                        <span style={{color: "#ffff80"}}>)</span><br/>
                                                        <span style={{color: "#ffffe6"}}>);</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileRouter ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is Router.js file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                                        <span style={{border: hlImpSR ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{'{ Switch, Route } '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react-router-dom';</span></span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' Home '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Home';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' About '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./About';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' Contact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Contact';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' Login '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Login';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' Router '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#ff0000"}}>{' <>'}</span><br/>
                                                        <div style={{border: hlaTag ? "1px dashed #ffff00" : "", width: "400px"}}>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<a'}</span>
                                                        <span style={{color: "#d966ff"}}>{' href="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/About'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span>
                                                        <span style={{color: "#ffffe6"}}>{' About '}</span>
                                                        <span style={{color: "#99ccff"}}>{'</a>'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<a'}</span>
                                                        <span style={{color: "#d966ff"}}>{' href="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Contact'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span>
                                                        <span style={{color: "#ffffe6"}}>{' Contact '}</span>
                                                        <span style={{color: "#99ccff"}}>{'</a>'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<a'}</span>
                                                        <span style={{color: "#d966ff"}}>{' href="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Login'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span>
                                                        <span style={{color: "#ffffe6"}}>{' Login '}</span>
                                                        <span style={{color: "#99ccff"}}>{'</a>'}</span></div><br/>
                                                        <div style={{border: hlSwitchRoute ? "1px dashed #ffff00" : ""}}>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Switch>'}</span><br/>
                                                        <span style={{border: hlRoute1 ? "1px dashed #ffff00" : ""}}>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Home'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span></span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/About'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'About'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Contact'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Contact'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Login'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Login'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' path=""'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Error'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'</Switch>'}</span></div><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#ff0000"}}>{' </>'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'Router;'}</span><br/>

                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileHome ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is About.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{'import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' Home '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<h1> '}</span>
                                                        <span style={{color: "#ffffe6"}}>{'Home page '}</span>
                                                        <span style={{color: "#99ccff"}}>{' </h1>'}</span><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'Home;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileAbout ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is About.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{'import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' About '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<h1> '}</span>
                                                        <span style={{color: "#ffffe6"}}>{'This is About page '}</span>
                                                        <span style={{color: "#99ccff"}}>{' </h1>'}</span><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'About;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileContact ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is Contact.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{'import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' Contact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<h1> '}</span>
                                                        <span style={{color: "#ffffe6"}}>{'This is Contact page '}</span>
                                                        <span style={{color: "#99ccff"}}>{' </h1>'}</span><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'Contact;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileLogin ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is Login.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{'import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' Login '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<h1> '}</span>
                                                        <span style={{color: "#ffffe6"}}>{'This is Service page '}</span>
                                                        <span style={{color: "#99ccff"}}>{' </h1>'}</span><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'Login;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}

                                          {fileError ?
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is Error.jsx file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{'import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{'const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' Error '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(12)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<h1> '}</span>
                                                        <span style={{color: "#ffffe6"}}>{' Page not found ! '}</span>
                                                        <span style={{color: "#99ccff"}}>{' </h1>'}</span><br/>
                                                        <span>{''.padStart(6)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' } '}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'Error;'}</span>
                                                    </pre>
                                                </div>
                                            </div>
                                          : null}
                                      </div>
                                  </div>
                                  <div><p>Here we have our <strong>index.js</strong> file and some components or files named <strong>Router.jsx</strong>, <strong>Home.jsx</strong>, <strong>About.jsx</strong>, <strong>Contact.jsx</strong>, <strong>Login.jsx</strong> and <strong>Error.jsx. </strong> 
                                      So let's start with our <strong>index.js</strong> file and this file will be same as our previous index.jsx's files but here we will add an extra thing that is <code>BrowserRouter</code> to use Router in this file
                                      and to use this <code>BrowserRouter</code>, we have to import it from <code>react-router-dom</code>
                                      <span onClick={() =>{showIndexfileRouter();
                                        setTimeout(() => {setHlImpBRouter(true)},1000);
                                        setTimeout(() => {setHlImpBRouter(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>, after that we can use <code>BrowserRouter</code> in our file and use our main component <code>{'<Router />'}</code> inside <code>{'<BrowserRouter>'}</code> <code>{'</BrowserRouter>'}</code><br/>
                                      <span onClick={() =>{showIndexfileRouter();
                                        setTimeout(() => {setHlCallBRouter(true)},1000);
                                        setTimeout(() => {setHlCallBRouter(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span><br/>
                                      Now, we will work with <strong>Router.jsx</strong> component, In Router we uses <code>{'<Link> </Link>'}</code> tags but in this file or component we are using <code>{'<a> </a>'}</code> to redirect the user from current page to any other page, 
                                      <span onClick={() =>{showfileRouter();
                                        setTimeout(() => {setHlaTag(true)},1000);
                                        setTimeout(() => {setHlaTag(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>.
                                      these anchor tags (<code>{'<a> </a>'}</code>) are used only to show the difference between <code>{'<a> </a>'}</code> and <code>{'<Link> </Link>'}</code> ( We will see Link tags further and also mention the diffrence).<br/>
                                      Actually it's not redirects, it shows the redireted page content inside our current page without refreshing the whole page (You can see we used <code>{'<a> </a>'}</code> tags only in <strong>Router.jsx</strong> not in any other components, 
                                      it means it shows the contents of a particular component inside our main component (<strong>Router.jsx</strong>)) but how ? Let's see - <br/>
                                      We can do this by help of <code>Switch</code> and <code>Route</code>,<hr/>
                                      <strong>Switch :</strong><br/>
                                      <p style={{marginLeft: "40px"}}>The Switch component will render exact matches and it only render the first route that matches the path. Once it finds the first route that matches the path, it will not look for any other matches.</p><br/>
                                      <strong>Route :</strong><br/>
                                      <p style={{marginLeft: "40px"}}>Route is the conditionally shown component that renders some UI when its path matches the current URL.</p><hr/>
                                      So, first we have to import both <code>Switch</code> and <code>Route</code> from <code>react-router-dom</code> 
                                      <span onClick={() =>{showfileRouter();
                                        setTimeout(() => {setHlImpSR(true)},1000);
                                        setTimeout(() => {setHlImpSR(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>, we will use both together <code>Switch</code> as parent-component and <code>Route</code> as child-component like - </p>
                                      
                                      <div style={{marginLeft: "40px"}}><code style={{color: "#0000ff"}}><strong>
                                        <span>{'<Switch>'}</span><br/>
                                        <span style={{marginLeft: "20px"}}>{'<Route'}</span>
                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                        <span style={{color: "#ff8c1a"}}>{'filepath '}</span>
                                        <span style={{color: "#d966ff"}}>{'" '}</span>
                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                        <span style={{color: "#ff8c1a"}}>{'componentName'}</span>
                                        <span style={{color: "#d966ff"}}>{'} '}</span>
                                        <span>{' />'}</span><br/>
                                        <span>{'</Switch>'}</span></strong></code></div>
                                      </div>
                                      <p>We can use many <code>Route</code> as per our need.<br/><br/>Here, <code>Route</code> has some attributes like <code>exact, path</code> and <code>component</code> - </p><hr/>
                                      <strong>exact :</strong>
                                      <p style={{marginLeft: "40px"}}>The <code>exact</code> disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current url.</p>
                                      <strong>path :</strong>
                                      <p style={{marginLeft: "40px"}}>The <code>path</code> holds the path of a particular file or component</p>
                                      <strong>component :</strong>
                                      <p style={{marginLeft: "40px"}}>The <code>path</code> holds that component where the user will be redirected after matching the exact path.</p><hr/>
                                      <p>So, now we will set the suitable path for Route - <br/>
                                      You can see in first <code>{'<Route />'}</code>, we have set <code>/</code> as the path for this Route and the component is <code>Home</code> 
                                      <span onClick={() =>{showfileRouter();
                                        setTimeout(() => {setHlRoute1(true)},1000);
                                        setTimeout(() => {setHlRoute1(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span>, so when the url will get this path then it render the Home page data, similalry we will set Route for all component 
                                      <span onClick={() =>{showfileRouter();
                                        setTimeout(() => {setHlSwitchRoute(true)},1000);
                                        setTimeout(() => {setHlSwitchRoute(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span> and if you saw an empty path in last Route, it is for that if the user enter wrong url or no match found then the user will be redirected on a Error page.</p>
                            </ul>
                          </div>
                        </div>
                      </div>
                  </div>

                  <div className="subdiv">
                      <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                              <h1>Router {'<Link>'} ?</h1>
                            </div>
                            <div className="heading_detail">
                              <ul>
                              <h6>First check the output  and see how Router works with <code>{'<Link>'}</code> tag -</h6>
                                <div className="RouteroutputBox">
                                    {output2Router ? 
                                      <div className="RoutersuboutputBox">
                                      <form onSubmit={getURL}>
                                        <input type="text" value={url} onChange={customURL} className="RouterURL"/>
                                      </form>
                                        <div className="Routeroutput">
                                        {pageNotFound ? <h1 style={{marginLeft: "35%", marginTop: "90px"}}>{pageData}</h1> :
                                          <div className="RouterinOutput">
                                            <div className="Router-navbar">
                                              <h1>Router</h1>
                                                <ul>
                                                  <li onClick={goAbout}>About</li>
                                                  <li onClick={goContact}>Contact</li>
                                                  <li onClick={goLogin}>Login</li>
                                                </ul>
                                            </div>
                                            <div className="AboutPage">
                                                <h1>{pageData}</h1>
                                            </div>
                                          </div>}
                                        </div>
                                        <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                              showOutput2Router(false);
                                              setpageData("Home page !");
                                              setURL("localhost:3000");
                                              setPageNotFound(false);}}>Hide output</button> 
                                            <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                        </div>
                                      </div> 
                                    : <button className="btn btn-primary showOp" onClick={() =>{showOutput2Router(true); }}>See output</button>}
                                  </div>
                                  <p>After seeing output if you noticed a difference between previous output and this output then its because of <code>{'<Link> </Link>'}</code> and if did not notice then see - In previous output the page content rendered after refreshing the page but not in this output.<br/>
                                  So Link tags are used to prevent from refreshing the page.</p>
                               		<div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                            <li style={{background :  "#1B1B1B", color : "#ddd"}}>Router.jsx</li>
                                        </ul>
                                      </div>
                                    <div className="filecode">
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is Router.js file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                                        <span style={{border: hlImpLink ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{'{ Switch, Route, Link } '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react-router-dom';</span></span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' Home '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Home';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' About '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./About';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' Contact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Contact';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' Login '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Login';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' Router '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#ff0000"}}>{' <>'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Link'}</span>
                                                        <span style={{color: "#d966ff"}}>{' to="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/About'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span>
                                                        <span style={{color: "#ffffe6"}}>{' About '}</span>
                                                        <span style={{color: "#99ccff"}}>{'</Link>'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Link'}</span>
                                                        <span style={{color: "#d966ff"}}>{' to="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Contact'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span>
                                                        <span style={{color: "#ffffe6"}}>{' Contact '}</span>
                                                        <span style={{color: "#99ccff"}}>{'</Link>'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Link'}</span>
                                                        <span style={{color: "#d966ff"}}>{' to="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Login'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span>
                                                        <span style={{color: "#ffffe6"}}>{' Login '}</span>
                                                        <span style={{color: "#99ccff"}}>{'</Link>'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Switch>'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Home'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/About'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'About'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Contact'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Contact'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Login'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Login'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' path=""'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Error'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'</Switch>'}</span><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#ff0000"}}>{' </>'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'Router;'}</span><br/>
                                                    </pre>
                                                </div>
                                            </div>
                                      </div>
                                  </div>
                                  <p>The whole code will be same but we will use <code>{'<Link> </Link>'}</code> insted of <code>{'<a> </a>'}</code> and <code>to</code> instead of <code>href</code> but don't forget to import <code>Link</code> from <code>react-router-dom</code>
                                  <span onClick={() =>{showfileRouter();
                                        setTimeout(() => {setHlImpLink(true)},1000);
                                        setTimeout(() => {setHlImpLink(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span></p>
                            </ul>
                          </div>
                        </div>
                      </div>
                  </div>

                  <div className="subdiv">
                      <div className="subdiv_child">
                        <div className="contentBox">
                            <div className="heading_name">
                              <h1>Router {'<NavLink>'} ?</h1>
                            </div>
                            <div className="heading_detail">
                              <ul>
                              <h6>First check the output  and see how Router works with <code>{'<NavLink>'}</code> tag -</h6>
                                <div className="RouteroutputBox">
                                    {output3Router ? 
                                      <div className="RoutersuboutputBox">
                                      <form onSubmit={getURL}>
                                        <input type="text" value={url} onChange={customURL} className="RouterURL"/>
                                      </form>
                                        <div className="Routeroutput">
                                        {pageNotFound ? <h1 style={{marginLeft: "35%", marginTop: "90px"}}>{pageData}</h1> :
                                          <div className="RouterinOutput">
                                            <div className="Router-navbar">
                                              <h1>Router</h1>
                                                <ul>
                                                  <li onClick={goAbout} style={{borderBottom: activeAbout ? "2px solid #000" : ""}}>About</li>
                                                  <li onClick={goContact} style={{borderBottom: activeContact ? "2px solid #000" : ""}}>Contact</li>
                                                  <li onClick={goLogin} style={{borderBottom: activeLogin ? "2px solid #000" : ""}}>Login</li>
                                                </ul>
                                            </div>
                                            <div className="AboutPage">
                                                <h1>{pageData}</h1>
                                            </div>
                                          </div>}
                                        </div>
                                        <div>
                                            <button className="btn btn-danger hideOp" onClick={()=>{
                                              showOutput3Router(false);
                                              setpageData("Home page !");
                                              setURL("localhost:3000");
                                              setPageNotFound(false);
                                              setActiveAbout(false);
                                              setActiveContact(false);
                                              setActiveLogin(false);}}>Hide output</button> 
                                            <p style={{fontSize : "15px", fontWeight : "600"}}><strong>Note :</strong> Don't be confused with output. Your output may look different without CSS.</p>
                                        </div>
                                      </div> 
                                    : <button className="btn btn-primary showOp" onClick={() =>{showOutput3Router(true); }}>See output</button>}
                                  </div>
                                  <p>This output is also same as previous output but there is also little bit difference that is previous output don't mentioned the page name means in previous output when we click on a particular element then it renders the page but don't tell us that which page is active in current. <br/>
                                  In simple words, in previous output when we click on <code>About, Contact</code> and <code>Login</code> then there is no any active sign for that element but in this output when you click any one element then it makes a border at bottom of tha element. <br/>
                                  Its all because of <code>{'<NavLink> </NavLink>'}</code> because it provides a <code>active</code> className and you can set a CSS property for this to mention the current page.<br/>
                                  For example - <code><span style={{color: "#ff8c1a"}}>.active</span>{'{'}<span style={{color: "#0000ff"}}>border-bottom:</span> <span style={{color: "#ff0000"}}>2px solid #000</span>{'}'}</code> <span style={{color: "#383838"}}>{'   // External CSS'}</span></p>
                                  <div className="codediv">
                                      <div className="filesname">
                                        <ul>
                                            <li style={{background :  "#1B1B1B", color : "#ddd"}}>Router.jsx</li>
                                        </ul>
                                      </div>
                                    <div className="filecode">
                                            <div className="sub_filecode">
                                                <p><span>//</span> This is Router.js file</p>
                                                <div className="code">
                                                    <pre>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' React '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react';</span><br/>
                                                        <span style={{border: hlImpNavLink ? "1px dashed #ffff00" : ""}}>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{'{ Switch, Route, NavLink } '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'react-router-dom';</span></span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' Home '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Home';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' About '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./About';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' Contact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Contact';</span><br/>
                                                        <span style={{color: "#d966ff"}}>{' import '}</span>
                                                        <span style={{color: "#99ccff"}}>{' Login '}</span>
                                                        <span style={{color: "#d966ff"}}>{' from '}</span>
                                                        <span style={{color: "#ff8c1a"}}>'./Login';</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' const '}</span>
                                                        <span style={{color: "#ffff80"}}>{' Router '}</span>
                                                        <span style={{color: "#d966ff"}}>{' = '}</span>
                                                        <span style={{color: "#ffff80"}}>{'()'}</span>
                                                        <span style={{color: "#d966ff"}}>{' => {'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{'return('}</span><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#ff0000"}}>{' <>'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<NavLink'}</span>
                                                        <span style={{color: "#d966ff"}}>{' activeClassName="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'active'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' to="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/About'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span>
                                                        <span style={{color: "#ffffe6"}}>{' About '}</span>
                                                        <span style={{color: "#99ccff"}}>{'</NavLink>'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<NavLink'}</span>
                                                        <span style={{color: "#d966ff"}}>{' to="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Contact'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span>
                                                        <span style={{color: "#ffffe6"}}>{' Contact '}</span>
                                                        <span style={{color: "#99ccff"}}>{'</NavLink>'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<NavLink'}</span>
                                                        <span style={{color: "#d966ff"}}>{' to="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Login'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#99ccff"}}>{'>'}</span>
                                                        <span style={{color: "#ffffe6"}}>{' Login '}</span>
                                                        <span style={{color: "#99ccff"}}>{'</NavLink>'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Switch>'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Home'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/About'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'About'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{'/>'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Contact'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Contact'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' exact '}</span>
                                                        <span style={{color: "#d966ff"}}>{' path="'}</span>
                                                        <span style={{color: "#ffff80"}}>{'/Login'}</span>
                                                        <span style={{color: "#d966ff"}}>{'"'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Login'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(18)}</span>
                                                        <span style={{color: "#99ccff"}}>{'<Route'}</span>
                                                        <span style={{color: "#d966ff"}}>{' path=""'}</span>
                                                        <span style={{color: "#d966ff"}}>{' component={'}</span>
                                                        <span style={{color: "#ffff80"}}>{'Error'}</span>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span>
                                                        <span style={{color: "#99ccff"}}>{' />'}</span><br/>
                                                        <span>{''.padStart(14)}</span>
                                                        <span style={{color: "#99ccff"}}>{'</Switch>'}</span><br/>
                                                        <span>{''.padStart(10)}</span>
                                                        <span style={{color: "#ff0000"}}>{' </>'}</span><br/>
                                                        <span>{''.padStart(4)}</span>
                                                        <span style={{color: "#d966ff"}}>{');'}</span><br/>
                                                        <span style={{color: "#d966ff"}}>{'}'}</span><br/><br/>
                                                        <span style={{color: "#d966ff"}}>{' export'}</span>
                                                        <span style={{color: "#d966ff"}}>{' default '}</span>
                                                        <span style={{color: "#ffff80"}}>{'Router;'}</span><br/>
                                                    </pre>
                                                </div>
                                            </div>
                                      </div>
                                  </div>
                                  <p>The whole code will be same but we will use <code>{'<NavLink> </NavLink>'}</code> insted of <code>{'<Link> </Link>'}</code> but don't forget to import <code>NavLink</code> from <code>react-router-dom</code>
                                  <span onClick={() =>{showfileRouter();
                                        setTimeout(() => {setHlImpNavLink(true)},1000);
                                        setTimeout(() => {setHlImpNavLink(false)},5000);
                                      }} style={{color: "#0000ff", cursor : "pointer"}}> Click here </span></p>
                            </ul>
                          </div>
                        </div>
                      </div>
                  </div>

              </div>
        </div>
      </>);
}
export default Router;
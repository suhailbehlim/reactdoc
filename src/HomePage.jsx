import React,{useState} from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import Introduction from './Introduction';
import Installation from './Installation';
import HelloWorld from './HelloWorld';
import Newfile from './Newfile';
import ReactCss from './ReactCss';
import Hooks from './Hooks';
import Forms from './Forms';
import Router from './Router';
import Youtube from './Youtube';

const HomePage = () =>{

  const [pageName, setPageName] = useState("React Introduction");
  const [beginPage, setBeginPage] = useState(true);

  return (
      <>
          <div className="hideMobile">
            <i class="fa fa-frown-o" aria-hidden="true"></i>
            <h2>This website is for desktop users</h2>
          </div>
          <div className="showPC">
          <div className="homepage" style={{position: beginPage ? "absolute" : "relative", zIndex: beginPage ? "10" : "0", display: beginPage ? "" : "none"}}>
            <div className="logo">
              <img src="logo192.png" alt="logo"/>
              <h1>Learn ReactJS</h1>
              <h2>Step -> by -> step</h2>
                <Button variant="outlined" color="secondary" className="begin_btn" onClick={()=>{setTimeout(()=>{setBeginPage(false);},500);}}>
                  Let's Begin
                </Button>
            </div>
          </div>

          <div className="maindiv">
            <div className="row">
                <div className="col-md-2 p-0 topics">
                  <ul>
                      <NavLink activeClassName="active" to="/Introduction" onClick={ () => {setPageName("React Introduction");}}><li>Introduction</li></NavLink>
                      <NavLink to="/Installation" onClick={ () => {setPageName("React Installation");}}><li>React install ?</li></NavLink>
                      <NavLink to="/HelloWorld" onClick={ () => {setPageName("How to print rint Hello World ?");}}><li>How to print Hello World ?</li></NavLink>
                      <NavLink to="/Newfile" onClick={ () => {setPageName("How to create new file ?");}}><li>How to create new file ?</li></NavLink>
                      <NavLink to="/ReactCss" onClick={ () => {setPageName("React CSS");}}><li>React CSS </li></NavLink>
                      <NavLink to="/Hooks" onClick={ () => {setPageName("React Hooks");}}><li>React Hooks</li></NavLink>
                      <NavLink to="/Forms" onClick={ () => {setPageName("React Form");}}><li>React Forms</li></NavLink>
                      <NavLink to="/Router" onClick={ () => {setPageName("React Router");}}><li>React Router</li></NavLink>
                      <NavLink to="/Youtube channel" onClick={ () => {setPageName("Recommended Youtube Channel");}}><li style={{fontSize: "16px"}}>Recommended  Youtube channel</li></NavLink>
                  </ul>
                </div>

                <Switch>
                  <Route exact path="/"> <Introduction topic={pageName}/> </Route>
                  <Route exact path="/Introduction"> <Introduction topic={pageName}/> </Route>
                  <Route exact path="/Installation"> <Installation topic={pageName}/> </Route>
                  <Route exact path="/HelloWorld"> <HelloWorld topic={pageName}/> </Route>
                  <Route exact path="/Newfile"> <Newfile topic={pageName}/> </Route>
                  <Route exact path="/ReactCss"> <ReactCss topic={pageName}/> </Route>
                  <Route exact path="/Hooks"> <Hooks topic={pageName}/> </Route>
                  <Route exact path="/Forms"> <Forms topic={pageName}/> </Route>
                  <Route exact path="/Router"> <Router topic={pageName}/> </Route>
                  <Route exact path="/Youtube channel"> <Youtube topic={pageName}/> </Route>
                </Switch>
            </div>
          </div>
          </div>
      </>);
}
export default HomePage

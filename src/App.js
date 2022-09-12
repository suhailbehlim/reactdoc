import  React  from 'react';
 import { Switch, Route, NavLink}  from 'react-router-dom';
 import './index.css';
 import Navbar from './Navbar';
 import Error from './Error';
 import  Installation  from './Installation';
 import  Hooks  from './Hooks';
 import  Router  from './Router';

 const  App  = () => {
    return(
           <>
            <div className="maindiv">
            <div className="row">
                <div className="col-md-2 p-0 topics">
                  <ul>
                     <NavLink activeClassName="active" to="/A"><li>A</li></NavLink>
                     <NavLink to="/B"><li>B</li></NavLink>
                     <NavLink to="/C"><li>C</li></NavLink>
                  </ul>
                </div>

                <Switch>
                  <Route exact  path="/" component={Navbar}/>
                  <Route exact  path="/A" component={Installation}/>
                  <Route exact  path="/B" component={Hooks}/>
                  <Route exact  path="/C" component={Router}/>
                  <Route exact  path=" " component={Error}/>
              </Switch>
            </div>
          </div>
              
           </>
    );
}

 export default App;
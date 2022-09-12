import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

const Temp = () =>{

  const {fname} = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(history);

  const btnclick = () =>{
    alert('You clicked the button');
  }
  return (
    <>
    <div className="UseParam">
      <br/>
      {location.pathname === `/user/${fname}` ? 
      <div>
      <h1>Hii, {fname}</h1>
      <p>This is your URL : {location.pathname}</p>
      <button onClick={btnclick}>Click Me</button>
      </div> : <p>Type your name in URL <span>(eg. localhost:3000/user/Yourname)</span></p>}
    </div>
    </>);
}
export default Temp;
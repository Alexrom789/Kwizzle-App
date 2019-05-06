import React from 'react';
import { Button } from 'react-bootstrap';


const DiffucultyBtns = (props) =>{
let isDisabled = !props.isBack;
return (
  <div className="ButtonsDiv">
      <Button className="Button" onClick={()=>{props.handler('difficult')}} disabled={isDisabled} variant="danger">Difficult</Button>
      <Button className="Button" onClick={()=>{props.handler('so-so')}} disabled={isDisabled} variant="warning">So-So</Button>
      <Button className="Button" onClick={()=>{props.handler('easy')}} disabled={isDisabled} variant="success">Easy</Button>
  </div>
)};

  
export default DiffucultyBtns;
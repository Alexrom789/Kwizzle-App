import React from 'react';
import DiffucultyBtns from '../components/DifficultyBtns';


const FlashCardBack = (props) => (
  <div>
    <div onClick={props.handler} className="FlashCard">
      <h4 className={props.cardState}> {props.frontTxt}</h4>
      <hr></hr>
      <p> {props.backTxt}</p>
    </div>
    <DiffucultyBtns id={props.id} handlerEZ={props.handlerEZ} handlerMED={props.handlerMED} handlerHRD={props.handlerHRD}/>
  </div>

);
 
  
export default FlashCardBack;
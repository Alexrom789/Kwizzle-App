import React from 'react';


const FlashCard = (props) => (
  <div onClick={props.handler} className="FlashCard">
    { props.isBack === false && <p> {props.frontTxt} </p> }
    { props.isBack === true && 
      <div className="FlashCardBack">
        <p className={props.cardState}> {props.frontTxt}</p>
        <hr></hr>
        <p> {props.backTxt}</p>
      </div>
    }
    </div>
);

  
export default FlashCard;
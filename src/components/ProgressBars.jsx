import React from 'react';
import { ProgressBar } from 'react-bootstrap';


const ProgressBars = (props) => (
  <div className="ProgBarsDiv">
    <ProgressBar animated striped variant="success" now={props.numMas/ props.numCards * 100} label={`Mastered ${props.numMas / props.numCards * 100}%`}/>
    <ProgressBar animated striped variant="warning" now={props.numRev / props.numCards * 100} label={`Familiar ${props.numRev / props.numCards * 100}%`}/>
    <ProgressBar animated striped variant="danger" now={props.numNew / props.numCards * 100} label={`Learning ${props.numNew / props.numCards * 100}%`}/>
  </div>
);
  
export default ProgressBars;
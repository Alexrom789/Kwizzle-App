import React from 'react';


const DeckHeader = (props) => (
  <div className="DeckHeader">
    <p className="Title">{props.deckName} ({props.currCard}/{props.numCards})</p>
    <hr></hr>
  </div>
);


export default DeckHeader;
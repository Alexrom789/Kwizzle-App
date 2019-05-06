import React, { Component } from 'react';
import Kwiz from './Kwiz'
import DeckManager from './DeckManager';
import Settings from './Settings';
import {Route} from "react-router-dom";


class Main extends Component {
  constructor() {
    super();
    this.state = {
     }};

    render() {
      return (
        <div className= "MainDiv">
          <Route exact path="/" component={Kwiz}/>
          <Route path="/decks" component={DeckManager}/>
          <Route path="/settings" component={Settings}/>
        </div>
    );
  }
}

export default Main;
import React from 'react';
import {NavLink} from "react-router-dom";


const SideNav= (props) => (
  <div className="SideNav">
    <h1>Kwizzle</h1>
    <hr></hr>
    <ul className="header">
      <li><NavLink to="/">Study</NavLink></li>
      <li><NavLink to="/decks">Manage Decks</NavLink></li>
      <li><NavLink to="/settings">Settings</NavLink></li>
    </ul>
  </div>
);

export default SideNav;
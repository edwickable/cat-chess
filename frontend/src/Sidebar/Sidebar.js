import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <div>*current status*</div>
        <div>*chat messages*</div>
      </div>
    );
  }
}

export default SideBar;
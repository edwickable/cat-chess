import React, { Component } from 'react';
import './SideBar.css';
import StatusBar from '../StatusBar/StatusBar';
import MessageBox from '../MessageBox/MessageBox';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <div className="InnerSideBar">
          <StatusBar />
          <MessageBox />
        </div>
      </div>
    );
  }
}

export default SideBar;
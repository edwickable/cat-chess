import React, { Component } from 'react';
import Chessboard from './Chessboard/Chessboard';
import SideBar from './SideBar/SideBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chessboard />
        <SideBar />
      </div>
    );
  }
}

export default App;

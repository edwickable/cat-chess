import React, { Component } from 'react';
import Chessboard from './Chessboard/Chessboard';
import Sidebar from './Sidebar/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chessboard />
        <Sidebar />
      </div>
    );
  }
}

export default App;

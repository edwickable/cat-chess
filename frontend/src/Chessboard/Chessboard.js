import React, { Component } from 'react';
import Chess from 'react-chess';
import './Chessboard.css';

class Chessboard extends Component {
  constructor(props) {
    super(props)

    this.state = {pieces: Chess.getDefaultLineup()}
    this.handleMovePiece = this.handleMovePiece.bind(this)
  }

  handleMovePiece(piece, fromSquare, toSquare) {
    const newPieces = this.state.pieces
      .map((curr, index) => {
        if (piece.index === index) {
          return `${piece.name}@${toSquare}`
        } else if (curr.indexOf(toSquare) === 2) {
          return false // To be removed from the board
        }
        return curr
      })
      .filter(Boolean)

    this.setState({pieces: newPieces})
  }

  render() {
    const {pieces} = this.state;
    return (
      <div className="Chessboard">
        <Chess
          highlightTarget={false}
          drawLabels={false}
          lightSquareColor="#b8ddf5"
          darkSquareColor="#16a0f7"
          pieces={pieces}
          onMovePiece={this.handleMovePiece}
        />
      </div>
    );
  }
}

export default Chessboard;
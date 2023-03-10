import React, { useState } from "react";
import Square from "./Square";

function Board({ squares, handleClick }) {
    const renderSquare = (i) => {
        return squares ? (
            <Square value={squares[i]} onClick={() => handleClick(i)} />
        ) : null;
    };

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;

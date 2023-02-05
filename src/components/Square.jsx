import React from "react";

function Square({ value, onClick }) {
    return (
        <button
            className={`square ${value === "X" ? "squareX" : "squareO"}  `}
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default Square;

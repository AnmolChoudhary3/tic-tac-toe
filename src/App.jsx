import { useEffect, useRef, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Confetti from "react-confetti";
import Winner from "./components/Winner";

function App() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [status, setStatus] = useState("");
    const [is9x9, setIs9x9] = useState(true);

    const calculateWinner = (squares) => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    };

    const handleRestart = () => {
        setSquares(Array(9).fill(null));
        setIsX(true);
    };

    const handleClick = (i) => {
        if (winner || squares[i]) {
            return;
        }
        squares[i] = isX ? "X" : "O";
        setSquares(squares);
        setIsX(!isX);
    };

    const winner = calculateWinner(squares);
    console.log(isX);

    useEffect(() => {
        if (winner) setStatus("Play Again!");
        else setStatus("Next player: " + (isX ? "X" : "O"));
    }, [winner, isX]);

    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confetiRef = useRef(null);

    useEffect(() => {
        setHeight(confetiRef.current.clientHeight);
        setWidth(confetiRef.current.clientWidth);
    }, []);

    return (
        <div className="App" ref={confetiRef}>
            <h1>Tic Tac Toe</h1>
            <Board squares={squares} handleClick={handleClick} />
            {<div className="status">{status}</div>}
            <button className="restart" onClick={handleRestart}>
                Restart Game!
            </button>
            {winner && <Winner winner={winner} />}
            {winner && (
                <Confetti numberOfPieces={150} width={width} height={height} />
            )}
        </div>
    );
}

export default App;

// https://www.freepik.com/free-vector/gradient-gaming-youtube-channel-art_12978744.htm#query=gamer&position=10&from_view=search&track=sph

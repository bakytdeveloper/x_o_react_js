import React, { useState } from "react";
// import './Game.css';
import Board from "./Board";
import {calculateWinner} from "../helper";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];
        //   ОПРЕДЕЛИТЬ БЫЛ ЛИ УЖЕ КЛИК ПО ЯЧЕЙКИ ИЛИ ИГРА ОКОНЧЕНА
        if (winner || boardCopy[index]) return;

        //   ОПРЕДЕЛИТЬ ЧЕЙ ХОД Х ИЛИ О
        boardCopy[index] = xIsNext ? 'X' : '0'

        //   ОБНОВИТЬ НАШ СТЕЙТ
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }
    const startNewGame = () => {
        return (
            <button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>
        )
    }

    return (
        <div className="wrapper">
            { startNewGame() }
            <Board squares={board} click={handleClick} />
            <p className="game__info">
                {/*{ winner ? "Победитель " + winner + ' !!!' : "Сейчас ходит " + (xIsNext ? 'X' : '0') }*/}
                { winner ? "Победитель " + winner + ' !!!' : "Сейчас ходит " + (xIsNext ? 'X' : '0') }

            </p>
        </div>
    )
}
export default Game;
import { useState } from 'react';
import Player from './components/Player/Player.component';
import GameBoard from './components/GameBoard/GameBoard.component';
import Log from './components/Log/Log.component';
import { WINNING_COMBINATIONS } from './winning-combinations';
import './App.css';
import GameOver from './components/GameOver/GameOver.component';

const PLAYERS = {
	X: 'Player 1',
	O: 'Player 2',
}

const INITIAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gameTurns) {
	let currentPlayer = 'X';

	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O';
	}

	return currentPlayer;
}

function deriveWinner(gameBoard, players) {
	let winner;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol =
			gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol =
			gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = players[firstSquareSymbol];
		}
	}

	return winner;
}

function deriveGameBoard(gameTurns) {
	let gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];

	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}

	return gameBoard;
}

function App() {
	const [players, setPlayers] = useState(PLAYERS);

	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = deriveActivePlayer(gameTurns);

	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);
	const hasDraw = gameTurns.length === 9 && !winner;

	function selectedSquareHandler(rowIndex, colIndex) {
		setGameTurns((prevTurns) => {
			const currentPlayer = deriveActivePlayer(prevTurns);

			const updatedTurns = [
				{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
				...prevTurns,
			];

			return updatedTurns;
		});
	}

	function restartGameHandler() {
		setGameTurns([]);
	}

	function updatePlayerNamesHandler(symbol, newName) {
		setPlayers((prev) => ({ ...prev, [symbol]: newName }));
	}

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player
						name={PLAYERS.X}
						symbol='X'
						isActive={activePlayer === 'X'}
						onChangeName={updatePlayerNamesHandler}
					/>
					<Player
						name={PLAYERS.O}
						symbol='O'
						isActive={activePlayer === 'O'}
						onChangeName={updatePlayerNamesHandler}
					/>
				</ol>
				{(winner || hasDraw) && (
					<GameOver winner={winner} onGameRestart={restartGameHandler} />
				)}
				<GameBoard
					onSelectSquare={selectedSquareHandler}
					activePlayerSymbol={activePlayer}
					turns={gameTurns}
					gameBoard={gameBoard}
				/>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;

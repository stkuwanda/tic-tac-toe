import { useState } from 'react';
import Player from './components/Player/Player.component';
import GameBoard from './components/GameBoard/GameBoard.component';
import Log from './components/Log/Log.component';
import './App.css';

function deriveActivePlayer(gameTurns) {
	let currentPlayer = 'X';

	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O';
	}

	return currentPlayer;
}

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = deriveActivePlayer(gameTurns);

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

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player name='Player 1' symbol='X' isActive={activePlayer === 'X'} />
					<Player name='Player 2' symbol='O' isActive={activePlayer === 'O'} />
				</ol>
				<GameBoard
					onSelectSquare={selectedSquareHandler}
					activePlayerSymbol={activePlayer}
					turns={gameTurns}
				/>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;

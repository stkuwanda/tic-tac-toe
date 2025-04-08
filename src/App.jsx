import { useState } from 'react';
import Player from './components/Player/Player.component';
import GameBoard from './components/GameBoard/GameBoard.component';
import Log from './components/Log/Log.component';
import './App.css';

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const [activePlayer, setActivePlayer] = useState('X');

	function selectedSquareHandler(rowIndex, colIndex) {
		setActivePlayer((currentActivePlayer) =>
			currentActivePlayer === 'X' ? 'O' : 'X'
		);

		setGameTurns((prevTurns) => {
			let currentPlayer = 'X';

			if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
				currentPlayer = 'O';
			}

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
			<Log />
		</main>
	);
}

export default App;

import './App.css';
import Player from './components/Player/Player.component';
import GameBoard from './components/GameBoard/GameBoard.component';
import { useState } from 'react';

function App() {
	const [activePlayer, setActivePlayer] = useState('X');

	function selectedSquareHandler() {
		setActivePlayer((currentActivePlayer) =>
			currentActivePlayer === 'X' ? 'O' : 'X'
		);
	}

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player name='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
					<Player name='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
				</ol>
				<GameBoard onSelectSquare={selectedSquareHandler} activePlayerSymbol={activePlayer}/>
			</div>
			LOG
		</main>
	);
}

export default App;

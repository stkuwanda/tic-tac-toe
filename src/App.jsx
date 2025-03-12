import './App.css';
import Player from './components/Player/Player.component';

function App() {
	return (
		<main>
			<div id='game-container'>
				<ol id='players'>
					<Player name='Player 1' symbol='X' />
					<Player name='Player 2' symbol='O' />
				</ol>
				GAMEBOARD
			</div>
			LOG
		</main>
	);
}

export default App;

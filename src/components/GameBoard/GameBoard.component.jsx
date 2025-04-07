import { useState } from 'react';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function GameBoard() {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function selectedSquareHandler(rowIndex, colIndex) {
		setGameBoard((prevBoard) => {
			// clone board to ensure state update with a new reference.
			// this is updating the board in an immutable way
			const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
			updatedBoard[rowIndex][colIndex] = 'X';
			return updatedBoard;
		});
	}

	return (
		<ol id='game-board'>
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => selectedSquareHandler(rowIndex, colIndex)}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}

export default GameBoard;

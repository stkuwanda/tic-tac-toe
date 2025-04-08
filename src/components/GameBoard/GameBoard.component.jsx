const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function GameBoard({ onSelectSquare, turns }) {
	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function selectedSquareHandler(rowIndex, colIndex) {
	// 	setGameBoard((prevBoard) => {
	// 		// clone board to ensure state update with a new reference.
	// 		// this is updating the board in an immutable way
	// 		const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedBoard;
	// 	});

	// 	onSelectSquare();
	// }

	let gameBoard = initialGameBoard;

	for(const turn of turns) {
		const { square, player } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}

	return (
		<ol id='game-board'>
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => onSelectSquare(rowIndex, colIndex)}
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

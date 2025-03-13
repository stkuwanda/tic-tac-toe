import { useState } from 'react';

function Player({ name, symbol }) {
	const [playerName, setPlayerName] = useState(name);
	const [isEdit, setIsEdit] = useState(false);

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	function handleClick() {
		setIsEdit((val) => !val);
	}

	let displaySetName = <span className='player-name'>{playerName}</span>;
	let buttonText = 'Edit';

	if (isEdit) {
		displaySetName = <input type='text' required value={playerName} onChange={handleChange} />;
		buttonText = 'Save';
	}

	return (
		<li>
			<span className='player'>
				{displaySetName}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleClick}>{buttonText}</button>
		</li>
	);
}

export default Player;

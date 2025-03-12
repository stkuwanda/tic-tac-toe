import { useState, useEffect } from 'react';

// made use of storageKey prop to ensure each instances data isolation 
// inside the localStorage
function Player({ name, symbol, storageKey }) {
	const [playerName, setPlayerName] = useState(name);
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		const storedName = localStorage.getItem(storageKey);

		if(storedName) {
			console.log('storedName:', storedName);
			setPlayerName(storedName);
		}
	}, []);

	function handleChange(event) {
		setPlayerName(() => {
			localStorage.setItem(storageKey, event.target.value); // update localStorage
			return event.target.value;
		});
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

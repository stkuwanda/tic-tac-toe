import { useState } from 'react';

function Player({ name, symbol }) {
	const [isEdit, setIsEdit] = useState(false);

	function handleClick() {
		setIsEdit((val) => !val);
	}

	let displaySetName = <span className='player-name'>{name}</span>;
	let buttonText = 'Edit';

	if (isEdit) {
		displaySetName = <input type='text' required />;
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

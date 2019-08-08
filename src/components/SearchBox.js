import React from 'react';

const SerachBox = ({searchChange}) => {
	return (
		<div>
			<input 
			className = 'pa2 ba b--green bg-lightest-blue'
			type='search' 
			placeholders ='search rovots' 
			onChange  = {searchChange}
			/>
		</div>
		);
}

export default SerachBox;
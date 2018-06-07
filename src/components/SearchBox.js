import React from 'react';

const SearchBox =({searchfield, SearchChange}) =>{
	return (
		<div className='pa3'>
			<input 
				className='bg-light-green'
				type='search'
				placeholder='Search Robots'
				onChange= {SearchChange}
				/>
		</div>
		);
}

export default SearchBox;
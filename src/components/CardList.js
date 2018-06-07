import React from 'react';
import Card from './Card';



const CardList =({robots}) => {
	// const cardcomponents = robots.map((client,i) =>{
	// 	return <Card 
	// 				key={i} 
	// 				id={robots[i].id} 
	// 				name={robots[i].name} 
	// 				email={robots[i].email}
	// 			/>
	// });

	return (
		<div>{
				robots.map((client,i) =>{
					return ( <Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
					/>);
				})
			
			}
			</div>

		);
};

export default CardList;
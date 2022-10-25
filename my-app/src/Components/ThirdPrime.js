import React from 'react';

const ThirdPrime = (props) => {

	console.log("ThirdPrimeComp. props: ", props)

	return (
		<div>
			ThirdPrimeComponent 3 : 
			id: {props.id} 
			name: {props.name} 
			age:{props.age}
		</div>
	)
}

export default ThirdPrime;
import React from 'react';

const FourthPrime = (props) => {

	console.log("FourthPrimeComp. props: ", props)

	return(
		<div>
			FourthPrimeComponent 4 : 
			id: {props.id} 
			name: {props.name} 
			age: {props.age}
		</div>
	)
}

export default FourthPrime;
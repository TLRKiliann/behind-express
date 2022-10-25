import React from 'react';

const Fourth = (props) => {

	console.log("FourthComp. props: ", props)

	return(
		<div>
			FourthComponent 4 : 
			id: {props.id} 
			name: {props.name}
			age: {props.age}
		</div>
	)
}

export default Fourth;
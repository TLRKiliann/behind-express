import React from 'react';

const Third = (props) => {

	console.log("ThirdComp. props: ", props)

	return (
		<div>
			ThirdComponent 3 :
			id: {props.id} 
			name: {props.name}
			age: {props.age}
		</div>
	)
}

export default Third;
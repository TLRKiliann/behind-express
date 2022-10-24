import React from 'react';


const Third = (props) => {

	console.log("ThirdComp.", props)

	return (
		<div>
			Hello 3 : id: {props.id} name: {props.name}
		</div>
	)
}

export default Third;
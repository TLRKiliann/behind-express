import React from 'react';
import ThirdPrime from './ThirdPrime';
import FourthPrime from './FourthPrime';


const SecondPrime = (props) => {

	console.log("SecondComp. props: ", props)
	
	return (
		<div>
			<p>--- PRIME ---</p>
			<h1>
				SecondPrime (Component!)
			</h1>
			<ThirdPrime id={props.id} name={props.name} age={props.age} />
			<FourthPrime id={props.id} name={props.name} age={props.age} />
		</div>
	)
}

export default SecondPrime;
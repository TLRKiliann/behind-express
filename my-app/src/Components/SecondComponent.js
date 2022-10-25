import React from 'react';
import Third from './Third';
import Fourth from './Fourth';


const SecondComponent = (props) => {

  console.log("SecondComp. props: ", props)
  
  return (
    <div>
      <h1>
        SecondComponent ! id: {props.id} - name: {props.name}
      </h1>
      <Third id={props.id} name={props.name} />
      <Fourth id={props.id} name={props.name} />
    </div>
  )
}

export default SecondComponent;
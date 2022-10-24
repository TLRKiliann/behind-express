import React from 'react';
import ReactDOM from 'react-dom';
import SecondComponent from './Components/SecondComponent';
import './styles.css';

class App extends React.Component {
  render() {
    return(
      <div>
        <SecondComponent />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom/client';
import notesService from './services/notesService';
import './index.css';
/*import SecondComponent from './Components/SecondComponent';
import Third from './Components/Third';
import Fourth from './Components/Fourth';

import SecondPrime from './Components/SecondPrime';
import ThirdPrime from './Components/ThirdPrime';
import FourthPrime from './Components/FourthPrime';

import MiddleOne from './Components/MiddleOne';
import MiddleTwo from './Components/MiddleTwo';
import MiddleThree from './Components/MiddleThree';*/


class App extends React.Component {
  state = {
      notes: []
  };

  componentDidUpdate() {
    notesService
      .getAll()
      .then(initialNotes => {
        this.setState(initialNotes.data)
      })
  };

  render() {

    console.log(this.state.notes)
    
    return (
      <div>

        {this.state.notes.map(note => (
          <div
            key={note.id}
            id={note.id}
            name={note.name}
            age={note.age}
          >
          </div>
        ))}
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('app'));
const element = <App />;
root.render(element);

/*
class App extends React.Component {
  state =
    {
      data: 
        [
          {id: 1, name: "Celestine", age: 33},
          {id: 2, name: "Andrea", age: 41},
        ]
    };

  render() {

    console.log(this.state)
    
    return (
      <div>

        {this.state.data.map(data => (
          <SecondComponent
            key={data.id}
            id={data.id}
            name={data.name}
            age={data.age}
          >
            <Third  />
            <Fourth  />
          </SecondComponent>
        ))}

        {this.state.data.map(data => (
          <SecondPrime
            key={data.id}
            id={data.id}
            name={data.name}
            age={data.age}
          >
            <ThirdPrime />
            <FourthPrime />
          </SecondPrime>
        ))}

        {this.state.data.map(data => (
          <div key={data.id} className="last--div">
            <MiddleOne  id={data.id} />
            <MiddleTwo  name={data.name} />
            <MiddleThree  age={data.age} />
          </div>
        ))}

      </div>
    )
  }
}

//ReactDOM.render(<App />, document.getElementById('app'))
const root = ReactDOM.createRoot(document.getElementById('app'));
const element = <App />;
root.render(element);
*/
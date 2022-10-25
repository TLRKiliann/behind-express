import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

//import notesService from './services/notesService';

/*import SecondComponent from './Components/SecondComponent';
import Third from './Components/Third';
import Fourth from './Components/Fourth';

import SecondPrime from './Components/SecondPrime';
import ThirdPrime from './Components/ThirdPrime';
import FourthPrime from './Components/FourthPrime';

import MiddleOne from './Components/MiddleOne';
import MiddleTwo from './Components/MiddleTwo';
import MiddleThree from './Components/MiddleThree';*/

const baseURL = 'http://localhost:5000/api/notes';

const App = () => {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNotes(response.data);
    });
  }, []);

  const handlePut = (id, note) => {
    console.log("clicked")
    axios.post(`{baseURL}/{id}`, note)
      setNotes(response.data)
  };

  console.log("notes", notes)

  return (
    <div>
      {notes.map(note => (
        <div key={note.id}>
          {note.id} - {note.name} - {note.age}
        </div>
      ))}
      <button
        type='button'
        onClick={handlePut}
      >
        Post
      </button>
    </div>
  )
}

export default App;

/*
const root = ReactDOM.createRoot(document.getElementById('app'));
const element = <App />;
root.render(element);
*/

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


/*
class App extends React.Component {

  state = {
      notes: []
  };


  componentDidMount() {
    notesService
      .getAll()
      .then(initialNotes => {
        //console.log(initialNotes)
        this.setState({notes: initialNotes})
      }).catch ((error) => {
        throw error;
      })
  };

  render() {

    console.log("notes", this.state.notes)
    
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
*/
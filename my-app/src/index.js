import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondComponent from './Components/SecondComponent';
import Third from './Components/Third';
import Fourth from './Components/Fourth';


class App extends React.Component {
    state = {data: [
                {id: 1, name: "Paul"},
                {id: 2, name: "Jeffrey"}
        ]
    };

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.data.map(data => (
                    <SecondComponent key={data.id} id={data.id} name={data.name}>
                        <Third id={data.id} />
                        <Fourth id={data.id} />
                    </SecondComponent>
                ))}
            </div>
        )
    }
}

//ReactDOM.render(<App />, document.getElementById('app'))
const root = ReactDOM.createRoot(document.getElementById('app'));
const element = <App />;
root.render(element);


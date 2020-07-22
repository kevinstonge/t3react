import React from 'react';
import './App.css';
import Board from './Board';

export interface AppProps {
  
}
 
export interface appState {
    "first":Boolean;
    "second":Boolean;
}
 
class App extends React.Component<AppProps, appState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { 
      "first":true,
      "second":true
    };
  }
  update = ()=> {
    this.setState({"first":false,"second":true})
  }
  render() { 
    return (
      <div className="App">
        <h1>T3 - ReactJS (--typescript)</h1>
        <Board appstate={this.state}/>
        <button onClick={this.update}>test</button>
      </div>
    );
  }
}
 
export default App;
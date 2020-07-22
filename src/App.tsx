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
  render() { 
    return (
      <div className="App">
        <h1>Tic Tac Toe - ReactJS (--typescript)</h1>
        <Board {this.state<appState>}/>
      </div>
    );
  }
}
 
export default App;
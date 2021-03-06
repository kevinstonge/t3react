import React from 'react';
import './App.css';
import Board from './Board';
import Settings from './Settings';
import processInput from './processInput';

export interface AppProps {
  
}

export interface AppState {
    "gameState":String;
    "firstPlayer":String;
    "difficulty":String;
    "pSymbol":String;
    "cSymbol":String;
    "boardMap":String[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { 
      "gameState":"your turn",
      "firstPlayer":"p",
      "difficulty":"hard",
      "pSymbol":"🙂",
      "cSymbol":"🤖",
      "boardMap":new Array(9).fill("e"),
    };
  }
  updateBoard = (input:number)=> {
    const newState = processInput(input,this.state);
    this.setState(newState)
  }
  changeSetting = (setting:String) => {
    let newSettings:AppState = this.state;
    if (setting==="newGame") {
        newSettings.boardMap.fill("e");
        newSettings.gameState="your turn";
    }
    if (setting==="difficulty") {
        newSettings.difficulty = (newSettings.difficulty==="easy") ? "hard" : "easy";
    }
    this.setState(newSettings);
}
  render() { 
    return (
      <div className="App">
        <h1>T3 - ReactJS (--typescript)</h1>
        <Board {...this.state} update={this.updateBoard}/>
        <Settings {...this.state} updateSettings={this.changeSetting}/>
      </div>
    );
  }
}
 
export default App;

/*
components:
App
  Board
    needs: boardState (array of STRINGS ("x","o") (emoji??) for each cell on board)
    needs: input function from App.tsx to process player input
  Settings
    needs: AppState for settings values
    needs: changeSettings function from App.tsx to change settings

    winningCells:[[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]],

*/
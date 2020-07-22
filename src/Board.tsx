import React from "react";
import { AppState } from "./App";
export interface BoardProps extends AppState {
    update:Function;
}

export interface BoardState {
    "null":String
}
 
class Board extends React.Component<BoardProps, BoardState> {
    render() { 
        return (
            <div>
                <h2>Game status: your turn!</h2>
                <div id="gameBoard">
                {this.props["boardMap"].map((e,i)=>{
                    //TODO: update className based on contents of cell and gameStatus
                    return(<div key={`cell${i}`} className="gameCell" onClick={()=>this.props.update(i)}>
                        {(e!=="e")?e:""}
                    </div>)
                })}
                </div>
            </div>
        );
    }
}
 
export default Board;
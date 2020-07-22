import React from "react";

export interface appState {
    "appstate": {
        "first":Boolean;
        "second":Boolean;
    }
}
 
export interface BoardState {
    "boardMap":Boolean[]
}
 
class Board extends React.Component<appState, BoardState> {
    constructor(props: appState) {
        super(props);
        this.state = { "boardMap":new Array(9).fill(false) };
    }
    render() { 
        return (
            <div>
                <p>{this.state["boardMap"]}</p>
                <p>{JSON.stringify(this.state)}</p>
                <p>{JSON.stringify(this.props)}</p>
            </div>
        );
    }
}
 
export default Board;
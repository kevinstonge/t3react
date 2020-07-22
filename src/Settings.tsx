import React from 'react';
import { AppState } from "./App";

export interface SettingsProps extends AppState {
    updateSettings:Function;
}
 
export interface SettingsState {
    
}
 
class Settings extends React.Component<SettingsProps, SettingsState> {
    render() { 
        const oppositeDifficulty = (this.props.difficulty==="easy") ? "hard" : "easy";
        return (
            <div>
                <h2>options:</h2>
                <button onClick={()=>this.props.updateSettings("newGame")}>new game</button>
                <button onClick={()=>this.props.updateSettings("difficulty")}>set difficulty to {oppositeDifficulty}</button>
            </div>
        );
    }
}
 
export default Settings;
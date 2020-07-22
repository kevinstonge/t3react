import { AppState } from "./App";

const processInput = (cell:number,state:AppState):AppState => {
    let pMap:String[] = new Array(9).fill("e");
    let cMap:String[] = new Array(9).fill("e");
    state.boardMap.forEach((e,i)=>{
        if (e==="p") { pMap[i] = e }
        if (e==="c") { cMap[i] = e }
    })
    return {
        "firstPlayer":"ai",
        "difficulty":"easy",
        "playerSymbol":"X",
        "aiSymbol":"O",
        "boardMap":new Array(9).fill("empty")
    };
};
export default processInput;
import { AppState } from "./App";

const winningCells:number[][] = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

const findPairs = (cells:number[]):number[][] => {
    let foundPairs:number[][] = [];
    winningCells.forEach(winningSet=>{
        let count:number = 0;
        cells.forEach((cell)=>{
            if (winningSet.includes(cell)) { count++; }
            if (count === 2) { foundPairs.push(winningSet)}
        })
    })
    return foundPairs;
}

const processInput = (cell:number,state:AppState):AppState => {
    let pMap:String[] = new Array(9).fill("e");
    let cMap:String[] = new Array(9).fill("e");
    state.boardMap.forEach((e,i)=>{
        if (e==="p") { pMap[i] = e }
        if (e==="c") { cMap[i] = e }
    })
    console.log(findPairs([1,2]))
    return {
        "firstPlayer":"ai",
        "difficulty":"easy",
        "playerSymbol":"X",
        "aiSymbol":"O",
        "boardMap":new Array(9).fill("e")
    };
};
export default processInput;
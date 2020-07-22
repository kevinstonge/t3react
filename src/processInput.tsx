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

const winCheck = (cells:number[]):number[][] => {
    let foundWins:number[][] = [];
    winningCells.forEach(e=>{
        if (cells.includes(e[0]) && cells.includes(e[1]) && cells.includes(e[2])) { 
            foundWins.push(e);
        }
    })
    return foundWins;
}

const processInput = (cell:number,state:AppState):AppState => {
    let newState:AppState = state;
    let pCells:number[] = [];
    let cCells:number[] = [];
    newState.boardMap.forEach((e,i)=>{
        if (e==="p") { pCells.push(i); } 
        if (e==="c") { cCells.push(i); }
    })
    if (pCells.includes(cell) || cCells.includes(cell) || newState.gameState !== "your turn") {
        return newState;
    }
    else {
        pCells.push(cell);
        newState.boardMap[cell] = "p";
    }
    const pWin:number[][] = winCheck(pCells)
    if (pWin.length > 0) { 
        newState.gameState = "you win!";
    }
    let possibleMoves:number[] = [];
    let allPairs:number[][] = findPairs(cCells).concat(findPairs(pCells));
    if (allPairs.length > 0) {
        allPairs.forEach(e=>{
            e.forEach(i=>{
                if (!cCells.includes(i) && !pCells.includes(i)) { possibleMoves.push(i);}
            })
        })
    }
    let bestMoves = [4,0,2,6,8,1,3,5,7];
    if (newState.difficulty === "easy") {
        bestMoves = bestMoves.reverse();
    }
    let cCell:number = -1;
    if (pCells.length === 0 
        && cCells.length === 0 
        && newState.firstPlayer === "c") {
            cCell = (newState.difficulty === "easy") ?
            bestMoves[Math.ceil(Math.random()*(bestMoves.length-1))] :
            bestMoves[0];
    }
    else {
        bestMoves.forEach(e=>{
            if (!cCells.includes(e) && !pCells.includes(e)) {
                possibleMoves.push(e);
            }
        });
        if (possibleMoves[0]>-1) {
            cCell = possibleMoves[0];
        }
    }
    if (cCell !== -1) {
        cCells.push(cCell);
        newState.boardMap[cCell] = "c";
    }
    if (winCheck(cCells).length>0) {
        newState.gameState = "you lost!";
    }
    if (cCells.length + pCells.length === 9) {
        newState.gameState = "nobody won";
    }
    return newState;
};
export default processInput;
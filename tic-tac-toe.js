const boardEl = document.getElementById('board');
const resetBtn = document.getElementById('reset-btn');

const modal = document.getElementById("ttt-modal");
const modalMessage = document.getElementById("ttt-message");
const modalClose = document.getElementById("ttt-close");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"; // player always X
let gameOver = false;

// Initialize board
function createBoard() {
    boardEl.innerHTML = "";
    board.forEach((cell, idx) => {
        const cellEl = document.createElement("div");
        cellEl.classList.add("cell");
        cellEl.dataset.index = idx;
        cellEl.textContent = cell;
        cellEl.addEventListener("click", playerMove);
        boardEl.appendChild(cellEl);
    });
}

// Player move
function playerMove(e) {
    const idx = e.target.dataset.index;
    if(board[idx] === "" && !gameOver) {
        board[idx] = "X";
        updateBoard();
        if(!checkWinner()) setTimeout(botMove, 500); // bot delay
    }
}

// Bot random move
function botMove() {
    if(gameOver) return;
    let empty = board.map((v,i)=>v===""?i:null).filter(v=>v!==null);
    if(empty.length === 0) return;
    const idx = empty[Math.floor(Math.random() * empty.length)];
    board[idx] = "O";
    updateBoard();
    checkWinner();
}

// Update board visually
function updateBoard() {
    board.forEach((v, i) => {
        boardEl.children[i].textContent = v;
    });
}

// Show custom modal
function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = "flex";
}

// Close modal
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    // optionally reset board after closing
    resetBoard();
});

// Check winner
function checkWinner() {
    const wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for(const [a,b,c] of wins){
        if(board[a] && board[a] === board[b] && board[b] === board[c]){
            gameOver = true;
            showModal(board[a]+" wins!");
            return true;
        }
    }

    if(!board.includes("")){
        gameOver = true;
        showModal("Draw!");
        return true;
    }
    return false;
}

// Reset board
function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    createBoard();
}

// Reset button
resetBtn.addEventListener("click", resetBoard);

createBoard();

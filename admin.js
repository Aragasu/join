const gameNameInput = document.getElementById('game-name-input');
const gameUrlInput = document.getElementById('game-url-input');
const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click', () => {
    const name = gameNameInput.value.trim() || "Currently playing nothing";
    const url = gameUrlInput.value.trim() || "#";

    db.collection('gameStatus').doc('current').set({
        name,
        url
    }).then(() => {
        alert('Game status updated!');
        gameNameInput.value = '';
        gameUrlInput.value = '';
    }).catch(err => {
        console.error('Error updating game status:', err);
    });
});
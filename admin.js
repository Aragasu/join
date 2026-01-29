const gameNameInput = document.getElementById('game-name-input');
const gameUrlInput = document.getElementById('game-url-input');
const saveBtn = document.getElementById('save-btn');
const offlineBtn = document.getElementById('offline-btn');

// Save new game status
saveBtn.addEventListener('click', () => {
    const name = gameNameInput.value.trim() || "nothing";
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

// Go offline
offlineBtn.addEventListener('click', () => {
    db.collection('gameStatus').doc('current').set({
        name: "nothing",
        url: "http://aragasu.xyz/nogame"
    }).then(() => {
        alert('Game is now offline.');
    }).catch(err => {
        console.error('Error setting offline:', err);
    });
});

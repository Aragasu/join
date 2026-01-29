const gameNameEl = document.getElementById('game-name');
const joinBtn = document.getElementById('join-btn');

let currentUrl = '#';

function joinGame() {
    if(currentUrl && currentUrl !== '#') {
        window.open(currentUrl, '_blank');
    }
}

// Listen for real-time updates
db.collection('gameStatus').doc('current')
  .onSnapshot((doc) => {
      const data = doc.data();
      gameNameEl.textContent = data.name;
      currentUrl = data.url;
  });
const gameNameEl = document.getElementById('game-name');
const joinBtn = document.getElementById('join-btn');

let currentUrl = '#';

function joinGame() {
    if(currentUrl && currentUrl !== '#') {
        window.open(currentUrl, '_blank');
    }
}

// Real-time updates from Firestore
db.collection('gameStatus').doc('current')
  .onSnapshot((doc) => {
      const data = doc.data();
      const name = data.name || "nothing"; 
      gameNameEl.textContent = `${name}`;
      currentUrl = data.url || '#';
      }
  });

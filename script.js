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
      gameNameEl.textContent = `Currently playing ${name}`;
      currentUrl = data.url || '#';

      // Disable join button if offline
      if(name.toLowerCase() === "nothing") {
          joinBtn.disabled = true;
          joinBtn.style.opacity = 0.5;
          joinBtn.style.cursor = "not-allowed";
      } else {
          joinBtn.disabled = false;
          joinBtn.style.opacity = 1;
          joinBtn.style.cursor = "pointer";
      }
  });

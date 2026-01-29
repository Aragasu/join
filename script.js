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
      currentUrl = data.url || 'https://aragasu.xyz/nogame';
      }
  });


    const tabText = "JoinMe";
let currentIndex = 0;
let isDeleting = false;

function typeTitle() {
    if(!isDeleting) {
        // Typing
        document.title = tabText.slice(0, currentIndex + 1);
        currentIndex++;
        if(currentIndex === tabText.length) {
            // Finished typing, wait 2 seconds then start deleting
            setTimeout(() => { isDeleting = true; typeTitle(); }, 2000);
            return;
        }
    } else {
        // Deleting
        document.title = tabText.slice(0, currentIndex - 1);
        currentIndex--;
        if(currentIndex === 0) {
            // Finished deleting, wait 0.5s then start typing again
            setTimeout(() => { isDeleting = false; typeTitle(); }, 500);
            return;
        }
    }
    setTimeout(typeTitle, 150); // typing/deleting speed (150ms per character)
}

// Start the loop
typeTitle();

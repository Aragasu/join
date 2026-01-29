// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOfIa1JrgNhuFQ7uHCC0pWwCU8P3wWV8c",
  authDomain: "aragasu-join-game.firebaseapp.com",
  projectId: "aragasu-join-game",
  storageBucket: "aragasu-join-game.firebasestorage.app",
  messagingSenderId: "837434790036",
  appId: "1:837434790036:web:5d39fdb8535b2db3f9e481"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// Load data and initialize the bingo grid
let allPhrases = [];

// Fetch the data from JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        allPhrases = data.phrases;
        initializeBingoGrid();
    })
    .catch(error => {
        console.error('Error loading data:', error);
        // Fallback phrases if JSON fails to load
        allPhrases = [
            'Justice pour tous',
            'Égalité devant la loi',
            'Service public',
            'Transparence'
        ];
        initializeBingoGrid();
    });

// Initialize the bingo grid with random phrases
function initializeBingoGrid() {
    const grid = document.getElementById('bingo-grid');
    const shuffled = shuffleArray([...allPhrases]);
    const displayCount = Math.min(16, shuffled.length); // Display up to 16 cards
    
    for (let i = 0; i < displayCount; i++) {
        const card = createBingoCard(shuffled[i]);
        grid.appendChild(card);
    }
}

// Create a single bingo card
function createBingoCard(phrase) {
    const card = document.createElement('div');
    card.className = 'bingo-card';
    
    const text = document.createElement('div');
    text.className = 'bingo-card-text';
    text.textContent = phrase;
    
    card.appendChild(text);
    
    // Add click event
    card.addEventListener('click', () => handleCardClick(card));
    
    return card;
}

// Handle card click
function handleCardClick(card) {
    // Toggle clicked state
    card.classList.add('clicked');
    
    // Play sound
    playSound();
    
    // Trigger confetti
    triggerConfetti(card);
    
    // Remove clicked class after animation
    setTimeout(() => {
        card.classList.remove('clicked');
    }, 300);
}

// Play a simple sound using Web Audio API
function playSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Create a pleasant sound
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
        console.log('Audio not supported:', error);
    }
}

// Trigger confetti explosion with female judge emoji
function triggerConfetti(card) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const confettiCount = 20;
    
    for (let i = 0; i < confettiCount; i++) {
        createConfettiPiece(centerX, centerY);
    }
}

// Create a single confetti piece (female judge emoji)
function createConfettiPiece(startX, startY) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.textContent = '👩‍⚖️';
    
    // Random position offset from center
    const angle = Math.random() * Math.PI * 2;
    const velocity = 100 + Math.random() * 100;
    const offsetX = Math.cos(angle) * velocity;
    const offsetY = Math.sin(angle) * velocity;
    
    confetti.style.left = startX + 'px';
    confetti.style.top = startY + 'px';
    
    // Random animation duration
    const duration = 1.5 + Math.random() * 1;
    confetti.style.animationDuration = duration + 's';
    
    // Add random rotation and movement
    const randomRotation = Math.random() * 360;
    confetti.style.setProperty('--start-x', offsetX + 'px');
    confetti.style.setProperty('--start-y', offsetY + 'px');
    
    document.body.appendChild(confetti);
    
    // Apply transform for initial velocity
    setTimeout(() => {
        confetti.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${randomRotation}deg)`;
    }, 10);
    
    // Remove confetti after animation
    setTimeout(() => {
        confetti.remove();
    }, duration * 1000);
}

// Utility function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

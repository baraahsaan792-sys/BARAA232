/* ===============================
   AUDIO SYSTEM - Loving Homes
   Background Music: flora.mp3
   Click Sound: flora.mp3
================================= */

'use strict';

// ===========================
// BACKGROUND MUSIC (flora.mp3)
// ===========================
let bgAudio = null;
let isMusicPlaying = false;

function initAudio() {
  const audioEl = document.getElementById('bgMusic');
  if (!audioEl) return;
  
  bgAudio = audioEl;
  
  const wasPlaying = sessionStorage.getItem('musicPlaying') === 'true';
  const savedTime = parseFloat(sessionStorage.getItem('musicTime') || '0');
  
  if (!isNaN(savedTime) && savedTime > 0) {
    bgAudio.currentTime = savedTime;
  }
  
  if (wasPlaying) {
    playMusic();
  }
  
  updateMusicUI();
}

function playMusic() {
  if (!bgAudio) return;
  
  bgAudio.play().then(() => {
    isMusicPlaying = true;
    sessionStorage.setItem('musicPlaying', 'true');
    updateMusicUI();
  }).catch(e => {});
}

function pauseMusic() {
  if (!bgAudio) return;
  
  bgAudio.pause();
  isMusicPlaying = false;
  sessionStorage.setItem('musicPlaying', 'false');
  sessionStorage.setItem('musicTime', bgAudio.currentTime);
  updateMusicUI();
}

function toggleMusic() {
  if (isMusicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function updateMusicUI() {
  const btn = document.getElementById('musicBtn');
  const ico = document.getElementById('mico');
  
  if (!btn) return;
  
  if (isMusicPlaying) {
    btn.classList.add('playing');
    if (ico) ico.textContent = '🔊';
  } else {
    btn.classList.remove('playing');
    if (ico) ico.textContent = '🎵';
  }
}

// ===========================
// CLICK SOUND (flora.mp3)
// ===========================
let clickAudio = null;

function initClickSound() {
  clickAudio = new Audio('sound/flora.mp3');
  clickAudio.volume = 0.5;
}

function playClickSound() {
  if (!clickAudio) return;
  
  const sound = clickAudio.cloneNode();
  sound.volume = 0.5;
  sound.play().catch(() => {});
}

// Add click sound to all buttons
function addClickSoundToButtons() {
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('button, .btn, a[href]');
    if (btn && !btn.classList.contains('music-btn')) {
      playClickSound();
    }
  });
}

// ===========================
// SUCCESS SOUND (for forms - ba.mp3)
// ===========================
function playSuccessSound() {
  // Play ba.mp3 as success sound (for sending messages)
  const successSound = new Audio('sound/ba.mp3');
  successSound.volume = 0.7;
  successSound.play().catch(() => {});
}

// ===========================
// SAVE MUSIC STATE ON LEAVE
// ===========================
function saveAudioState() {
  if (bgAudio) {
    sessionStorage.setItem('musicTime', bgAudio.currentTime);
    sessionStorage.setItem('musicPlaying', isMusicPlaying);
  }
}

// ===========================
// INITIALIZE
// ===========================
document.addEventListener('DOMContentLoaded', function() {
  initAudio();
  initClickSound();
  addClickSoundToButtons();
  
  window.addEventListener('beforeunload', saveAudioState);
});

// Export functions
window.AudioSystem = {
  toggleMusic,
  playMusic,
  pauseMusic,
  playClickSound,
  playSuccessSound
};


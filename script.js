/* Script for New Boroughs NYC landing
   - Audio widget with play/pause, mute, volume, and progress bar
   - Autoplay music on page load
   - Persists volume to localStorage
*/

/* ========== DOM references ========== */
const audio = document.getElementById('bg-audio');
const playBtn = document.getElementById('playBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volume');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

const VOLUME_KEY = 'nb_volume_v1';

/* ========== Initialization ========== */
// set initial volume from saved or default
try {
  const savedVol = parseFloat(localStorage.getItem(VOLUME_KEY));
  if(!Number.isNaN(savedVol)) {
    audio.volume = Math.max(0, Math.min(1, savedVol));
    volumeSlider.value = audio.volume.toString();
  } else {
    audio.volume = parseFloat(volumeSlider.value);
  }
} catch(e){
  audio.volume = parseFloat(volumeSlider.value);
}

// Autoplay music on page load
window.addEventListener('load', async () => {
  try {
    await audio.play();
  } catch(err) {
    console.warn('Autoplay prevented (browser policy):', err);
    // User may need to click play button first due to browser autoplay policies
  }
});

/* ========== Audio Controls ========== */

/* Play/pause */
function updatePlayUI(){
  if(audio.paused){
    playBtn.textContent = '▶';
    playBtn.setAttribute('aria-label','Play');
  } else {
    playBtn.textContent = '❚❚';
    playBtn.setAttribute('aria-label','Pause');
  }
}
playBtn.addEventListener('click', async () => {
  if(audio.paused){
    try { await audio.play(); } catch(err) { console.warn('Play prevented:', err); }
  } else {
    audio.pause();
  }
  updatePlayUI();
});
audio.addEventListener('play', updatePlayUI);
audio.addEventListener('pause', updatePlayUI);
audio.addEventListener('ended', updatePlayUI);

/* Mute/unmute */
function updateMuteUI(){
  if(audio.muted || audio.volume === 0){
    muteBtn.textContent = '🔇';
    muteBtn.setAttribute('aria-label','Unmute');
  } else {
    muteBtn.textContent = '🔊';
    muteBtn.setAttribute('aria-label','Mute');
  }
}
muteBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  // if unmuting and volume is zero, set to a sensible default
  if(!audio.muted && audio.volume === 0){
    audio.volume = 0.5;
    volumeSlider.value = audio.volume;
    localStorage.setItem(VOLUME_KEY, audio.volume.toString());
  }
  updateMuteUI();
});
audio.addEventListener('volumechange', updateMuteUI);

/* Volume slider */
volumeSlider.addEventListener('input', e => {
  audio.volume = parseFloat(e.target.value);
  if(audio.volume > 0 && audio.muted) audio.muted = false;
  try { localStorage.setItem(VOLUME_KEY, audio.volume.toString()); } catch(e){}
  updateMuteUI();
});

/* Progress bar: update as audio plays and support seeking */
function formatTime(seconds){
  if(!isFinite(seconds)) return '0:00';
  const s = Math.floor(seconds % 60).toString().padStart(2,'0');
  const m = Math.floor(seconds / 60);
  return `${m}:${s}`;
}
audio.addEventListener('loadedmetadata', () => {
  const dur = audio.duration || 0;
  durationEl.textContent = formatTime(dur);
  progress.max = dur;
});
audio.addEventListener('timeupdate', () => {
  progress.value = audio.currentTime;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});
progress.addEventListener('input', (e) => {
  // seeking preview
  currentTimeEl.textContent = formatTime(parseFloat(e.target.value));
});
progress.addEventListener('change', (e) => {
  audio.currentTime = parseFloat(e.target.value);
});

/* Initialize UI states */
updatePlayUI();
updateMuteUI();

/* ========== Notes ==========
 - Music autoplays on page load (respects browser autoplay policies)
 - Volume is persisted to localStorage
 - Edit button URLs and styles directly in index.html and styles.css
 - Assets in root: background.gif, logo.png, music.mp3
=========================== */

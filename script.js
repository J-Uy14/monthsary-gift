function goToScreen(screenId) {
  // Hide all active screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  // Show target screen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // Play background music on interaction
  const music = document.getElementById('bg-music');
  if (music && music.paused) {
    music.play().catch(() => {});
  }
}

function submitWish() {
  const wishInput = document.getElementById('user-wish');
  const confirmation = document.getElementById('wish-confirmation');

  if (wishInput.value.trim() !== "") {
    confirmation.classList.add('show');
    wishInput.disabled = true;
  }
}
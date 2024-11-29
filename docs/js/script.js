// Get elements
const popupBtn = document.getElementById('popupBtn');
const popupModal = document.getElementById('popupModal');
const closePopup = document.getElementById('closePopup');

// Show the popup
popupBtn.addEventListener('click', () => {
  popupModal.style.display = 'flex';
});

// Close the popup when the "X" button is clicked
closePopup.addEventListener('click', () => {
  popupModal.style.display = 'none';
});

// Close the popup when clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === popupModal) {
    popupModal.style.display = 'none';
  }
});
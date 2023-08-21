const toggleButtons = document.querySelectorAll('.toggle-button');
const additionalTextBlocks = document.querySelectorAll('.additional-text');

toggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Toggle the display of the additional text block
    additionalTextBlocks[index].style.display =
      additionalTextBlocks[index].style.display === 'none' ? 'block' : 'none';
  });
});
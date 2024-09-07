/*document.addEventListener('DOMContentLoaded', () => {
    const bubblesContainer = document.getElementById('bubbles');
    const bubbleCount = 20; // Number of bubbles

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('span');
        bubble.classList.add('bubble');
        bubble.style.setProperty('--left', `${Math.random() * 100}%`);
        bubble.style.setProperty('--duration', `${8 + Math.random() * 12}s`);
        bubblesContainer.appendChild(bubble);
    }
});*/

document.addEventListener('DOMContentLoaded', () => {
    const bubblesContainer = document.getElementById('bubbles');
    const bubbleCount = 40; // Number of bubbles
    const bubbleSize = 50; //Bubble Size
  
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('span');
      bubble.classList.add('bubble');
      
      // Calculate a safe range for the left position
      const maxLeft = 100 - (bubbleSize / bubblesContainer.offsetWidth * 100);
      const left = Math.random() * maxLeft;
      
      bubble.style.setProperty('--left', `${left}%`);
      bubble.style.setProperty('--duration', `${8 + Math.random() * 12}s`);
      bubblesContainer.appendChild(bubble);
    }
  });

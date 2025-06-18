    const colors = ['#ff4d4d', '#ffcc00', '#66ff66', '#66ccff', '#cc99ff'];

    // Create balloons and append randomly on left or right container
    function createBalloon() {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.animationDuration = (Math.random() * 5 + 5) + 's';
      
      // Balloon string
      const string = document.createElement('div');
      string.classList.add('string');
      balloon.appendChild(string);

      // Randomly decide left or right side
      const side = Math.random() < 0.5 ? 'left' : 'right';
      const container = side === 'left' ? document.getElementById('leftBalloons') : document.getElementById('rightBalloons');

      // Random horizontal position within container width
      const containerWidth = container.offsetWidth;
      balloon.style.left = Math.random() * (containerWidth - 40) + 'px';
      balloon.style.top = '100vh'; // Start from bottom for animation

      container.appendChild(balloon);

      // Remove balloon after animation time (approximate)
      setTimeout(() => {
        balloon.remove();
      }, 10000);
    }

    setInterval(createBalloon, 500);
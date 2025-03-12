// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href'); // Get the target section ID
    const targetSection = document.querySelector(targetId); // Find the target section
    if (targetSection) {
      console.log(`Scrolling to ${targetId}`); // Debugging
      targetSection.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start' // Align to the top of the section
      });
    } else {
      console.error(`Target section not found: ${targetId}`); // Debugging
    }
  });
});

// Scroll left and right for features section
const featureScroll = document.querySelector('.feature-scroll');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

scrollLeft.addEventListener('click', () => {
  featureScroll.scrollBy({ left: -300, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
  featureScroll.scrollBy({ left: 300, behavior: 'smooth' });
});

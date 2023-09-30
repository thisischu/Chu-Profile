// Import ScrollMagic and GSAP libraries (make sure to include the library scripts in your HTML)
// Example: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
// Example: <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>

// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Create a scene for the parallax effect on the header
var parallaxScene = new ScrollMagic.Scene({
    triggerElement: '.hero',
    triggerHook: 1,
    duration: '100%'
})
.setTween('.hero', { y: '-50%', ease: Power0.easeNone })
.addTo(controller);

// Add animations to elements as they appear on scroll (use ScrollMagic triggers)
var projectScene = new ScrollMagic.Scene({
    triggerElement: '.project',
    triggerHook: 0.8,
    reverse: false // Set to true if you want animations to reverse on scroll up
})
.setClassToggle('.project', 'fade-in') // Add a CSS class for fading in
.addTo(controller);

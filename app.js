particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 300, // Choose how many bubble you want it in page
      "density": {
        "enable": true,
        "value_area": 4000 // Area that bubble go
      }
    },
    "color": {
      "value": "#00DEE1" // Bubble color
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "00DEE1"// Stroke
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1, // Transparency
      "random": true, // random Transparency
      "anim": { // Animation
        "enable": true,
        "speed": 0.5, // Speed of animation
        "opacity_min": 0,
        "sync": false // Syncronizing
      }
    },
    "size": {
      "value": 10, // Size of bubble
      "random": true, // Don't mind
      "anim": {
        "enable": true, 
        "speed": 2,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": { //Bubble moving
      "enable": true, 
      "speed": 2, // How fast that bubble can move
      "direction": "none", // Ignore
      "random": true, // Go random place
      "straight": false, // Go straight
      "out_mode": "out",
      "bounce": true, //Can bounce
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);

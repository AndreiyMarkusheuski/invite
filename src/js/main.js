// Your JavaScript code will go here
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgSound');
    const soundToggle = document.getElementById('soundToggle');
    const soundOn = soundToggle.querySelector('.sound-on');
    const soundOff = soundToggle.querySelector('.sound-off');
    const firstLayer = document.getElementById('firstLayer');
    const mainContent = document.getElementById('mainContent');

    // Function to play audio
    const playAudio = async () => {
        try {
            await audio.play();
            soundOn.classList.remove('hidden');
            soundOff.classList.add('hidden');
        } catch (err) {
            console.log('Playback failed:', err);
        }
    };

    // Function to pause audio
    const pauseAudio = () => {
        audio.pause();
        soundOn.classList.add('hidden');
        soundOff.classList.remove('hidden');
    };

    // Toggle sound on button click
    soundToggle.addEventListener('click', () => {
        if (audio.paused) {
            playAudio();
        } else {
            pauseAudio();
        }
    });

    // Try to play audio when user interacts with the page
    const startAudio = () => {
        playAudio();
        document.removeEventListener('click', startAudio);
    };

    // Listen for first interaction
    document.addEventListener('click', startAudio);

    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseAudio();
        } else if (!audio.paused) {
            playAudio();
        }
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#ffffff", "#dac5ed", "#f2d5f5"]  // White and golden colors for stars
            },
            shape: {
                type: "star",  // Changed to star shape
                stroke: {
                    width: 0,
                    color: "#ffffff"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.4,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 0.5,
                    sync: false
                }
            },
            line_linked: {
                enable: false  // Disabled lines between particles
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"  // Changed to bubble effect
                },
                onclick: {
                    enable: true,
                    mode: "repulse"
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 150,
                    size: 6,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });

    firstLayer.addEventListener('click', () => {
        // Show main content
        mainContent.classList.remove('hidden');
        
        // Add visible class after a small delay to trigger the fade-in animation
        setTimeout(() => {
            mainContent.classList.add('visible');
        }, 50);
    });
}); 
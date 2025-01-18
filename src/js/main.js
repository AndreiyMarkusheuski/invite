// Your JavaScript code will go here
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const mainWrapper = document.getElementById('mainWrapper');
    const progressElement = document.querySelector('.loader-progress');
    
    // Create a list of all assets to load
    const assetsToLoad = [
        // Images
        '../assets/images/bg.jpg',
        '../assets/images/mail.png',
        '../assets/cursors/frame-1.png',
        '../assets/cursors/frame-2.png',
        '../assets/cursors/frame-3.png',
        '../assets/cursors/frame-4.png',
        '../assets/cursors/frame-5.png',
        '../assets/cursors/frame-6.png',
        '../assets/cursors/frame-7.png',
        '../assets/cursors/frame-8.png',
        // Audio
        '../assets/sounds/bg-sound.mp3'
    ];

    let loadedAssets = 0;
    const totalAssets = assetsToLoad.length;

    // Function to update progress
    const updateProgress = () => {
        loadedAssets++;
        const progress = Math.round((loadedAssets / totalAssets) * 100);
        progressElement.textContent = `${progress}%`;
    };

    // Function to load an image
    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                updateProgress();
                resolve();
            };
            img.onerror = () => {
                console.warn(`Failed to load image: ${src}`);
                updateProgress();
                resolve(); // Resolve anyway to not block the loading
            };
            img.src = src;
        });
    };

    // Function to load audio
    const loadAudio = (src) => {
        return new Promise((resolve, reject) => {
            const audio = new Audio();
            audio.oncanplaythrough = () => {
                updateProgress();
                resolve();
            };
            audio.onerror = () => {
                console.warn(`Failed to load audio: ${src}`);
                updateProgress();
                resolve(); // Resolve anyway to not block the loading
            };
            audio.src = src;
        });
    };

    // Function to initialize the site
    const initializeSite = () => {
        // Hide loader and show content
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            mainWrapper.classList.remove('hidden');
            // Initialize your existing functionality
            initializeExistingFunctionality();
        }, 500);
    };

    // Function to initialize existing functionality
    const initializeExistingFunctionality = () => {
        const audio = document.getElementById('bgSound');
        const soundToggle = document.getElementById('soundToggle');
        const soundOn = soundToggle.querySelector('.sound-on');
        const soundOff = soundToggle.querySelector('.sound-off');
        const firstLayer = document.getElementById('firstLayer');
        const mainContent = document.getElementById('mainContent');
        
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');

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

        // Function to get URL parameters
        const getUrlParameter = (name) => {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        };

        // Function to display the rule based on the name parameter
        const displayRule = () => {
            const nameParam = getUrlParameter('name');
            const messageElement = document.getElementById('message');

            if (nameParam) {
                const names = nameParam.split(','); // Split by comma to handle multiple names
                if (names.length > 1) {
                    messageElement.textContent = 'Welcome dear friends! You are cordially invited to explore my digital space.'; // More than one name
                } else {
                    messageElement.textContent = `Welcome ${names[0]}! You are cordially invited to explore my digital space.`; // Single name
                }
            } else {
                messageElement.textContent = 'Welcome! You are cordially invited to explore my digital space.'; // No name provided
            }
        };

        // Call the displayRule function
        displayRule();

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
    };

    // Load all assets
    Promise.all(
        assetsToLoad.map(asset => {
            if (asset.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
                return loadImage(asset);
            } else if (asset.match(/\.(mp3|wav|ogg)$/i)) {
                return loadAudio(asset);
            }
            return Promise.resolve();
        })
    ).then(() => {
        // Small delay to ensure smooth transition
        setTimeout(initializeSite, 500);
    }).catch(error => {
        console.error('Error loading assets:', error);
        initializeSite(); // Initialize anyway
    });
}); 
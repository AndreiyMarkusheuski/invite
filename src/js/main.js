// Your JavaScript code will go here
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgSound');
    const soundToggle = document.getElementById('soundToggle');
    const soundOn = soundToggle.querySelector('.sound-on');
    const soundOff = soundToggle.querySelector('.sound-off');

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
}); 
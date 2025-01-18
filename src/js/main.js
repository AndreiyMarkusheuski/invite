import { Loader } from './modules/loader.js';
import { AudioController } from './modules/audio-controller.js';
import { WelcomeMessage } from './modules/welcome-message.js';
import { particlesConfig } from './modules/particles-config.js';
import { initModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', () => {
    const loader = new Loader();
    
    loader.loadAll()
        .then(() => {
            setTimeout(() => {
                loader.hide();
                initializeApp();
            }, 500);
        })
        .catch(error => {
            console.error('Error loading assets:', error);
            loader.hide();
            initializeApp();
        });

    function initializeApp() {
        const audioController = new AudioController();
        
        // Initialize particles
        particlesJS('particles-js', particlesConfig);

        // Handle layer transition
        const flowerButton = document.getElementById('flowerButton');
        // const mainContent = document.getElementById('mainContent'); // TODO: add pashal
        
        flowerButton.addEventListener('click', () => {
            // mainContent.classList.remove('hidden');
            setTimeout(() => {
                // mainContent.classList.add('visible');
            }, 50);
        });

        initModal();
    }
}); 
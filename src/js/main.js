import { Loader } from './modules/loader.js';
import { AudioController } from './modules/audio-controller.js';
import { WelcomeMessage } from './modules/welcome-message.js';
import { particlesConfig } from './modules/particles-config.js';

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
        const welcomeMessage = new WelcomeMessage();
        
        // Initialize particles
        particlesJS('particles-js', particlesConfig);
        
        // Display welcome message
        welcomeMessage.display();

        // Handle layer transition
        const firstLayer = document.getElementById('firstLayer');
        const mainContent = document.getElementById('mainContent');
        
        firstLayer.addEventListener('click', () => {
            mainContent.classList.remove('hidden');
            setTimeout(() => {
                mainContent.classList.add('visible');
            }, 50);
        });
    }
}); 
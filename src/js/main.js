import { AudioController } from './modules/audio-controller.js';
import { flyingStarsConfig } from './modules/particles-config.js';
import { initModal } from './modules/modal.js';
import { EasterEgg } from './modules/easter-egg.js';
import ParallaxBackground from './modules/parallax';

/* eslint-disable */
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector("#loader");
    const mainWrapper = document.querySelector("#mainWrapper");
    const message = document.querySelector("#message");

    Pace.options = {
        ajax: false
    };

    Pace.on("done", () => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            mainWrapper.classList.remove('hidden');
            preloader.classList.add('remove');
            setTimeout(() => {
                mainWrapper.classList.add('visible');
            }, 50);
        }, 1000);
        
        initializeApp();
    });
});

function initializeApp() {
    console.log('Прывітанне, даследчык! 😊');
    console.log('Відаць, ты любіш заглядаць у кансоль - гэта добрая рыса!');
    console.log('Спадзяюся, табе спадабаецца наша маленькая забава. Калі знайдзеш штосьці цікавае, падзяліся з намі!');
    console.log('Шчаслівага вандроўніцтва па нашым кода! ✨');
    console.log('І яшчэ адно: увесь гэты сайт быў створаны з дапамогай майго дарагога сябра - Штучнага Інтэлекту!');
    console.log('Мы разам працавалі, каб зрабіць гэтае маленькае цудоўнае месца для вас. Спадзяюся, вам спадабаецца!');
    const audioController = new AudioController();
    const easterEgg = new EasterEgg();

    particlesJS('flyingStars', flyingStarsConfig);
    new ParallaxBackground();

    initModal();
}
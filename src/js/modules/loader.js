export class Loader {
    constructor() {
        this.loader = document.getElementById('loader');
        this.mainWrapper = document.getElementById('mainWrapper');
        this.loadedAssets = 0;
        this.assetsToLoad = [
            '../assets/images/bg.jpg',
            '../assets/cursors/frame-1.png',
            '../assets/cursors/frame-2.png',
            '../assets/cursors/frame-3.png',
            '../assets/cursors/frame-4.png',
            '../assets/cursors/frame-5.png',
            '../assets/cursors/frame-6.png',
            '../assets/cursors/frame-7.png',
            '../assets/cursors/frame-8.png',
            '../assets/sounds/bg-sound.mp3',
            'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js'
        ];
    }

    updateProgress() {
        this.loadedAssets++;
        const progress = Math.round((this.loadedAssets / this.assetsToLoad.length) * 100);
        const blocks = document.querySelectorAll('.loader-blocks .block');
        
        const activeBlocks = Math.floor(progress / 10);
        blocks.forEach((block, index) => {
            if (index < activeBlocks) {
                block.classList.add('active');
            }
        });
    }

    loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                this.updateProgress();
                resolve();
            };
            img.onerror = () => {
                console.warn(`Failed to load image: ${src}`);
                this.updateProgress();
                resolve();
            };
            img.src = src;
        });
    }

    loadAudio(src) {
        return new Promise((resolve, reject) => {
            const audio = new Audio();
            audio.oncanplaythrough = () => {
                this.updateProgress();
                resolve();
            };
            audio.onerror = () => {
                console.warn(`Failed to load audio: ${src}`);
                this.updateProgress();
                resolve();
            };
            audio.src = src;
        });
    }

    loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                this.updateProgress();
                resolve();
            };
            script.onerror = () => {
                console.warn(`Failed to load script: ${src}`);
                this.updateProgress();
                resolve();
            };
            document.head.appendChild(script);
        });
    }

    hide() {
        this.loader.classList.add('hidden');
        setTimeout(() => {
            this.mainWrapper.classList.remove('hidden');
            setTimeout(() => {
                this.mainWrapper.classList.add('visible');
            }, 50);
        }, 600);
    }

    loadAll() {
        return Promise.all(
            this.assetsToLoad.map(asset => {
                if (asset.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
                    return this.loadImage(asset);
                } else if (asset.match(/\.(mp3|wav|ogg)$/i)) {
                    return this.loadAudio(asset);
                } else if (asset.match(/\.js$/i)) {
                    return this.loadScript(asset);
                }
                return Promise.resolve();
            })
        );
    }
} 
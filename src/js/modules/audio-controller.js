export class AudioController {
    constructor() {
        this.audio = document.getElementById('bgSound');
        this.soundToggle = document.getElementById('soundToggle');
        this.soundOn = this.soundToggle.querySelector('.sound-on');
        this.soundOff = this.soundToggle.querySelector('.sound-off');
        this.init();
    }

    init() {
        this.soundToggle.addEventListener('click', () => {
            if (this.audio.paused) {
                this.play();
            } else {
                this.pause();
            }
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pause();
            } else if (!this.audio.paused) {
                this.play();
            }
        });

        document.addEventListener('click', this.startAudio.bind(this), { once: true });
    }

    async play() {
        try {
            await this.audio.play();
            this.soundOn.classList.remove('hidden');
            this.soundOff.classList.add('hidden');
        } catch (err) {
            console.log('Playback failed:', err);
        }
    }

    pause() {
        this.audio.pause();
        this.soundOn.classList.add('hidden');
        this.soundOff.classList.remove('hidden');
    }

    startAudio() {
        this.play();
    }
} 
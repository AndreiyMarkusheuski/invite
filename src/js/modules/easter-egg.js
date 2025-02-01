export class EasterEgg {
    constructor() {
        this.flowerButton = document.getElementById('flowerButton');
        this.mainWrapper = document.getElementById('mainWrapper');
        this.init();
    }

    createEasterEggModal() {
        const modal = document.createElement('div');
        modal.className = 'easter-modal';
        modal.innerHTML = `
            <div class="easter-modal-content">
                <p class="easter-modal-text">Малайчына!</p>
            </div>
        `;
        
        this.mainWrapper.appendChild(modal);
        
        // Remove modal after animation
        setTimeout(() => {
            modal.classList.add('fade-out');
            setTimeout(() => {
                modal.remove();
            }, 1000);
        }, 2000);
    }

    init() {
        this.flowerButton.addEventListener('click', () => {
            this.createEasterEggModal();
        });
    }
}

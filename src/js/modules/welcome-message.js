export class WelcomeMessage {
    constructor() {
        this.messageElement = document.getElementById('message');
    }

    display() {
        const nameParam = new URLSearchParams(window.location.search).get('name');
        let messageText = '';

        if (nameParam) {
            const names = nameParam.split(',');
            if (names.length > 1) {
                messageText = 'Welcome dear friends! You are cordially invited to explore my digital space.';
            } else {
                messageText = `Welcome ${names[0]}! You are cordially invited to explore my digital space.`;
            }
        } else {
            messageText = 'Welcome! You are cordially invited to explore my digital space.';
        }

        this.messageElement.innerHTML = `<span class="ml3">${messageText
            .replace(/\S/g, "<span class='letter'>$&</span>")
            .replace(/\s/g, " ")}</span>`;

        this.animate();
    }

    animate() {
        anime.timeline({loop: false})
            .add({
                targets: '.ml3 .letter',
                opacity: [0,1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 150 * (i+1)
            });
    }
} 
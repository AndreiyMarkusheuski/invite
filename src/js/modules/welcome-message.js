export class WelcomeMessage {
    constructor() {
        this.messageElement = document.getElementById('message');
    }

    display() {
        const nameParam = new URLSearchParams(window.location.search).get('name');
        let messageText = '';

        if (nameParam) {
            const names = nameParam.split(',');
            if (names.length > 2) {
                const lastName = names.pop();
                messageText = `Welcome dear ${names.join(', ')} и ${lastName}! You are cordially invited to explore my digital space.`;
            } else if (names.length === 2) {
                messageText = `Welcome dear ${names[0]} и ${names[1]}! You are cordially invited to explore my digital space.`;
            }
            else {
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
        console.log('animate', anime);
        anime.timeline({loop: false, complete: function(anim) {
            console.log('Animation finished');
            // Your code to be executed when the animation is ready
          }})
            .add({
                targets: '.ml3 .letter',
                opacity: [0,1],
                easing: "easeInOutQuad",
                duration: 2650,
                delay: (el, i) => 220 * (i+1)
            });
    }
} 
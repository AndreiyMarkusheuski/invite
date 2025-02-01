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

                messageText = `Дарагія ${names.join(', ')} i ${lastName}!\nМы запрашаем вас на Наша Вясельная Урачыстасць 18 траўня!\nКаб скончыць чараўніцтва, націсніце…`;
            } else if (names.length === 2) {
                messageText = `Дарагія ${names[0]} i ${names[1]}!\nМы запрашаем вас на Наша Вясельная Урачыстасць 18 траўня!\nКаб скончыць чараўніцтва, націсніце…`;
            }
            else {
                messageText = `Прывітанне ${names[0]}!\nМы запрашаем цябе на Наша Вясельная Урачыстасць 18 траўня!\nКаб скончыць чараўніцтва, націсніце…`;
            }
        } else {
            messageText = 'Прывітанне';
        }

        // Wrap each word or phrase in a span element
         const sentance = messageText.split('\n');
         const wrappedWords = sentance.map(sentence => {
            return `<p class="ml3">${sentence.split(' ').map(word => {
                return `<span class='word'>${word.split('').map(letter => `<span class='letter'>${letter}</span>`).join('')}</span>`;
            }).join(' ')}</p>`;
         });

         console.log(sentance);

        // const words = messageText.split(' ');
        // const wrappedWords = words.map(word => {
        //     return `<span class='word'>${word.split('').map(letter => `<span class='letter'>${letter}</span>`).join('')}</span>`;
        // });

        this.messageElement.innerHTML = `<span class="ml3">${wrappedWords.join(' ')}</span>`;

        this.animate();
    }

    animate() {
        anime.timeline({loop: false, complete: (anim) => {
            const linkButton = document.createElement('a');
            linkButton.href = 'https://docs.google.com/forms/d/1OdO48KtC-nQwa8QJsFPHxeI7QAb-fJG39HiDiQkktlg/viewform?edit_requested=true';
            linkButton.target = '_blank';
            linkButton.textContent = 'Сюды тык';
            linkButton.classList.add('message-button');
            this.messageElement.appendChild(linkButton);
          }})
            .add({
                targets: '.ml3 .word .letter',
                opacity: [0,1],
                easing: "easeInOutQuad",
                duration: 2650,
                delay: (el, i) => 220 * (i+1)
            });
    }
} 
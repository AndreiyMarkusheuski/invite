const formUrl = 'https://docs.google.com/forms/d/1OdO48KtC-nQwa8QJsFPHxeI7QAb-fJG39HiDiQkktlg/viewform?edit_requested=true';

export class WelcomeMessage {
    constructor() {
        this.messageElement = document.getElementById('message');
    }

    getMessageText(names) {
        if (!names) return 'Прывітанне';

        const namesList = names.split(',');
        
        if (namesList.length > 2) {
            const lastName = namesList.pop();
            return `Шаноўныя ${namesList.join(', ')} i ${lastName}!\nЗ вялікай радасцю запрашаем вас на нашае вяселле 18 траўня!\nКаб пачаць рэгістрацыю, націсніце...`;
        }
        
        if (namesList.length === 2) {
            return `Шаноўныя ${namesList[0]} i ${namesList[1]}!\nЗ вялікай радасцю запрашаем вас на нашае вяселле 18 траўня!\nКаб пачаць рэгістрацыю, націсніце...`;
        }
        
        return `Прывітанне ${namesList[0]}!\nЗ вялікай радасцю запрашаем цябе на нашае вяселле 18 траўня!\nКаб пачаць рэгістрацыю, націсніце`;
    }

    wrapTextInSpans(text) {
        const sentences = text.split('\n');
        return sentences.map(sentence => {
            const wrappedWords = sentence.split(' ')
                .map(word => {
                    const wrappedLetters = word.split('')
                        .map(letter => `<span class='letter'>${letter}</span>`)
                        .join('');
                    return `<span class='word'>${wrappedLetters}</span>`;
                })
                .join(' ');
            return `<p class="ml3">${wrappedWords}</p>`;
        }).join(' ');
    }

    createStarEffect() {
        const createStar = () => {
            const star = document.createElement('div');
            star.classList.add('star');
            
            const left = Math.random() * window.innerWidth;
            const size = 8 + Math.random() * 12;
            const duration = 2 + Math.random() * 3;
            
            star.style.left = `${left}px`;
            star.style.fontSize = `${size}px`;
            star.style.animationDuration = `${duration}s`;
            
            document.body.appendChild(star);
            
            document.querySelector('#bgSound').pause();
            document.querySelector('#starsSound').play();
            
            setTimeout(() => {
                if (document.body.contains(star)) {
                    document.body.removeChild(star);
                }
            }, duration * 1000);
        };

        return setInterval(createStar, 20);
    }

    createButton() {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'Cюды';
        button.title = 'кнопка адкрыць форму';
        button.classList.add('message-button');
        
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            button.classList.add('hidden');
            
            this.createStarEffect();

            const popupPromise = new Promise(resolve => {
                setTimeout(() => {
                    const newWindow = window.open(formUrl, '_blank', 'noopener,noreferrer');
                    resolve(newWindow);
                }, 5000);
            });

            const newWindow = await popupPromise;
            if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                const backupText = document.createElement('p');
                backupText.target = '_blank';
                backupText.classList.add('backup-text');
                backupText.textContent = 'калі нічога не адкрылася, то націскай на гэтую кнопку зноў';
                document.querySelector('#message').appendChild(backupText);
                
                button.classList.remove('hidden');
                button.removeEventListener('click', this);
                button.addEventListener('click', () => {
                    window.open(formUrl, '_blank', 'noopener,noreferrer');
                });
            }
        });

        return button;
    }

    display() {
        const nameParam = new URLSearchParams(window.location.search).get('name');
        const messageText = this.getMessageText(nameParam);
        const wrappedText = this.wrapTextInSpans(messageText);
        
        this.messageElement.innerHTML = `<span class="ml3">${wrappedText}</span>`;
        this.animate();
    }

    animate() {
        anime.timeline({
            loop: false, 
            complete: () => {
                
                const button = this.createButton();
                this.messageElement.appendChild(button);
            }
        })
        .add({
            targets: '.ml3 .word .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2650,
            delay: (el, i) => 220 * (i+1)
        });
    }
}
import { WelcomeMessage } from './welcome-message.js';

export function initModal() {
    const modal = document.getElementById("modal");
    const modalButton = document.getElementById("modalButton");
    const message = document.getElementById("message");
    const welcomeMessage = new WelcomeMessage();

    modalButton.onclick = () => {
        modal.classList.add("hidden");

        setTimeout(() => {
            message.classList.remove("hidden");

            setTimeout(() => {
                welcomeMessage.display();
            }, 500);
        }, 500);
    };
}
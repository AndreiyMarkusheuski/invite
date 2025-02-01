import { WelcomeMessage } from './welcome-message.js';

export function initModal() {
    const modal = document.getElementById("modal");
    const modalButton = document.getElementById("modalButton");
    const message = document.getElementById("message");
    const welcomeMessage = new WelcomeMessage();

    const handleModalButtonClick = () => {
        modal.classList.add("hidden");

        setTimeout(() => {
            message.classList.remove("hidden");

            setTimeout(() => {
                welcomeMessage.display();
                modal.classList.add("remove");
            }, 500);
        }, 500);

        modalButton.removeEventListener('click', handleModalButtonClick);
    };

    modalButton.addEventListener('click', handleModalButtonClick);
}
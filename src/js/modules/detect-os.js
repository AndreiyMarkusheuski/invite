export function detectOS() {
    const os = getOS();
    
    if (os) {
        addOSClass(os);
    }

    

    function addOSClass(os) {
        const elements = document.querySelectorAll('#detect-os');
        elements.forEach(element => {
            if (os === 'mac') {
                element.classList.add('--mac');
            } else if (os === 'windows') {
                element.classList.add('--windows');
            }
        });
    }
}

export function getOS() {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    if (isMobile) {
        // Treat iPhone/iPad as Mac, others as Windows
        return /iPhone|iPad|iPod/i.test(userAgent) ? 'mac' : 'windows';
    } else if (userAgent.includes('Mac')) {
        return 'mac';
    } else if (userAgent.includes('Win')) {
        return 'windows';
    }
    return null;
}
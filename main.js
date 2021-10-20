// Mobile Navbar
const sideMenu = document.querySelector('#side-menu');
const mainBody = document.querySelector('#main');

// open or close menu when tapping on burger
const openSlideMenu = () => {
    const width = sideMenu.style.width;
    const overflow = mainBody.style.overflow;
    sideMenu.style.width = (!width || width === '0%') ? '100%' : '0%';
    mainBody.style.overflow = (!overflow || overflow === 'scroll') ? 'hidden' : 'scroll';
}

// close menu when tapping on X
const closeSlideMenu = () => {
    sideMenu.style.width = '0%'
    mainBody.style.overflow = 'scroll'
}
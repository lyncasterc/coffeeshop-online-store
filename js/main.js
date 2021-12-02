// Mobile Navbar
const sideMenu = document.querySelector('#side-menu');
const mainBody = document.querySelector('#main');
const slides = document.querySelectorAll('.slide');
const slideDots = document.querySelectorAll('.dot');
let slideIndex = 0;
let t;




// Mobile/Shopping Cart Slideouts

// open or close menu when tapping on burger
const openSlideMenu = (slideoutID) => {
    const slideout = document.querySelector(`#${slideoutID}`);

    const width = slideout.style.width;

    if(slideoutID === 'mobile-nav') {

        slideout.style.width = (!width || width === '0%') ? '100%' : '0%';
    } else {

        if(window.innerWidth < 768) {

            slideout.style.width = (!width || width === '0%') ? '100%' : '0%';

        } else {

            slideout.style.width = (!width || width === '0%') ? '30%' : '0%';
        }
    }

    const overflow = mainBody.style.overflow;
    mainBody.style.overflow = (!overflow || overflow === 'scroll') ? 'hidden' : 'scroll';
}

// close menu when tapping on X
const closeSlideMenu = (slideoutID) => {
    const slideout = document.querySelector(`#${slideoutID}`);
    slideout.style.width = '0%'
    mainBody.style.overflow = 'scroll'
}


// Index Autoslide show
const dotSlideShow = (n) => {
    slides[slideIndex].classList.remove('slide-active');
    slideDots[slideIndex].classList.remove('dot-active');
    slideIndex = n;
    clearInterval(t);
    slideShow();
}

const slideShow = () => {

    slides[slideIndex].classList.add('slide-active');
    slideDots[slideIndex].classList.add('dot-active');

    t = setInterval(() => {
        slides[slideIndex].classList.remove('slide-active');
        slideDots[slideIndex].classList.remove('dot-active');
        slideIndex++;

        if(slideIndex === slides.length){
            slideIndex = 0;
        }
        
        slides[slideIndex].classList.add('slide-active');
        slideDots[slideIndex].classList.add('dot-active');

    }, 5500);

};

slideShow();

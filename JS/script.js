let slideIndex = 0;

const slideTexts = [
    "Tiside",
    "Dashboard"
];

function changeSlide(n){
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    const slideTextElement = document.getElementById('slide-text');

    slideIndex+= n

    if(slideIndex >= totalSlides){
        slideIndex = 0;
    }
    if(slideIndex < 0){
        slideIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    slideTextElement.textContent = slideTexts[slideIndex];

}

document.getElementById('slide-next').textContent = slideTexts[0];


export default class Slider {
    constructor({
        sliderSelector = '.slider',
        sliderContainerSelector = '.slider__container',
        previousSelector = '.previous',
        nextSelector = '.next',
        transitionTime = 3000,
    } = {} ){
        this.slider = document.querySelector(sliderSelector); /* DIV QUE ENGLOBA TUDO */
        this.slides = document.querySelectorAll(`${sliderContainerSelector} img`).length; /* CONTAINER ONDE AS IMAGENS ESTÃO . LENGTH */
        this.sliderContainer = document.querySelector(sliderContainerSelector); /* CONTAINER ONDE AS IMAGENS ESTÃO  */
        this.previousBtn = document.querySelector(previousSelector); /* Botao Previous */
        this.nextBtn = document.querySelector(nextSelector); /* Botão NEXT */
        this.slideSize = this.slider.offsetWidth;
        this.currentSlide = 0;

        this.setEventListeners();
    }


    moveSlides() {
        this.sliderContainer.style.transform = `translateX(-${this.currentSlide * this.slideSize}px)`;
    }

    nextSlide(){
        console.log(this)
        this.currentSlide = this.currentSlide >= this.slides - 1 ? 0 : this.currentSlide + 1; /* If slideatual >= tamanho total de slides (-1 pq é array) = slide atual : 0         else slideatual = slideatual + 1  */
        this.moveSlides();
    }

    previousSlide() {
        this.currentSlide = this.currentSlide <= 0 ? this.slides -1 : this.currentSlide - 1; /* if slideatual <= 0 então o proximo slide é o ultimo     else slideatual = -1*/
    }

    setEventListeners() {
        this.nextBtn.addEventListener('click', this.nextSlide);
        this.previousBtn.addEventListener('click', this.previousSlide);

    }
}
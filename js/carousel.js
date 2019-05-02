class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.leftButtonElement = document.querySelector(".left-button");
        this.rightButtonElement = document.querySelector(".right-button");
        this.imageElements = this.carouselElement.querySelectorAll("img");
        this.currentIndex = 0;
        this.imageElements[this.currentIndex].style.display = "block";
        this.leftButtonElement.addEventListener('click', () => this.handleLeftButtonClick());
        this.rightButtonElement.addEventListener('click', () => this.handleRightButtonClick());
    }

    handleLeftButtonClick() {
        //infinite loop
        this.currentIndex = this.currentIndex == 0 ? this.imageElements.length - 1 : this.currentIndex - 1;

        //stops on first image
        // if (this.currentIndex > 0) this.currentIndex = this.currentIndex - 1;

        for (let i = 0; i < this.imageElements.length; i++) {
            this.imageElements[i].style.display = "none";
        }
        this.imageElements[this.currentIndex].style.display = "block";
    }

    handleRightButtonClick() {
        //infinite loop
        this.currentIndex = this.currentIndex == (this.imageElements.length - 1) ? 0 : this.currentIndex + 1;

        //stops on last image
        // if (this.currentIndex < (this.imageElements.length - 1)) this.currentIndex = this.currentIndex + 1;

        for (let i = 0; i < this.imageElements.length; i++) {
            this.imageElements[i].style.display = "none";
        }
        this.imageElements[this.currentIndex].style.display = "block";
    }
}


const carouselElement = document.querySelector(".carousel");
new Carousel(carouselElement);
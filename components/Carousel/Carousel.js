class Carousel {
  constructor(carousel) {
    this.Carousel = carousel;
    this.leftBtn = this.Carousel.querySelector(".left-button");
    this.rightBtn = this.Carousel.querySelector(".right-button");
    this.images = Array.from(this.Carousel.querySelectorAll("img"));
    this.currentImgIndex = 0;
    this.leftBtn.addEventListener("click", () => this.setActiveImg("left"));
    this.rightBtn.addEventListener("click", () => this.setActiveImg("right"));
  }
  setActiveImg(direction) {
    // Remove "active-img" class from all images
    this.images.forEach(img => img.classList.remove("active-img"));
    // Set currentImgIndex based on which button was clicked
    if (direction === "left") {
      if (this.currentImgIndex === 0) {
        this.currentImgIndex = this.images.length - 1; // Left at beginning of array goes to end of array
      } else {
        this.currentImgIndex -= 1;
      }
    } else if (direction === "right") {
      if (this.currentImgIndex === this.images.length - 1) {
        this.currentImgIndex = 0; // Right at end of array goes to beginning of array
      } else {
        this.currentImgIndex += 1;
      }
    }
    // Apply "active-img" class to image at [currentImgIndex]
    this.images[this.currentImgIndex].classList.add("active-img");
  }
}

let carousels = document
  .querySelectorAll(".carousel")
  .forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

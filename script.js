let images = [
  {
    url: "https://ir-3.ozone.ru/s3/multimedia-1-c/w1200/6986440776.jpg",
    title: "Rostov-on-Don, Admiral",
  },
  {
    url: "https://mig.pics/uploads/posts/2020-02/1581436732_39-p-intereri-ofisnikh-pomeshchenii-59.jpg",
    title: "Sochi Thieves",
  },
  {
    url: "https://amazinteriors.com/wp-content/uploads/2024/02/office34-min.jpg",
    title: "Rostov-on-Don, Patriotic",
  },
];

function initSlider() {
  if (!images || !images.length) return;
  let sliderImages = document.querySelector(
    ".projects__slider_images"
  );
  let sliderArrows = document.querySelector(
    ".projects__slide-switch"
  );
  let sliderCircles = document.querySelector(".slide-switch__circles");
  let sliderTitles = document.querySelector(".projects-list");

  initImages();
  initArrows();
  initCircles();
  initTitles();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slide-switch__arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initCircles() {
    images.forEach((image, index) => {
      let circle = `<div class="slide-switch__circles_circle n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;
      sliderCircles.innerHTML += circle;
    });
    sliderCircles
      .querySelectorAll(".slide-switch__circles_circle")
      .forEach((circle) => {
        circle.addEventListener("click", function () {
          moveSlider(this.dataset.index);
          sliderCircles.querySelector(".active").classList.remove("active");
          this.classList.add("active");
        });
      });
  }

  function initTitles() {
    images.forEach((image, index) => {
      let title = `<div class="projects-item n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${images[index].title}</div>`;
      sliderTitles.innerHTML += title;
    });
    sliderTitles
      .querySelectorAll(".projects-item")
      .forEach((title) => {
        title.addEventListener("click", function () {
          moveSlider(this.dataset.index);
          sliderTitles.querySelector(".active").classList.remove("active");
          this.classList.add("active");
        });
      });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderCircles.querySelector(".active").classList.remove("active");
    sliderCircles.querySelector(".n" + num).classList.add("active");
    sliderTitles.querySelector(".active").classList.remove("active");
    sliderTitles.querySelector(".n" + num).classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", initSlider);

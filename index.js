document.addEventListener("DOMContentLoaded", function () {
  const stages = document.querySelectorAll(".stages");
  let currentStageIndex = 0;
  const navDots = document.querySelectorAll(".dot");

  const leftBtn = document.querySelector("#left-btn");
  const rightBtn = document.querySelector("#right-btn");

  const carouselMember = document.querySelectorAll(".carousel-member");
  let currentIndexCarousel = 0;
  const carouselRightBtn = document.querySelector("#carousel-right-btn");
  const carouselLeftBtn = document.querySelector("#carousel-left-btn");
  const buttonsCounter = document.querySelector(".carousel_p");

  function updateCarouselCounter() {
    buttonsCounter.innerHTML = `${currentIndexCarousel + 1}/${
      carouselMember.length
    }`;
  }

  function updateCarousel() {
    carouselMember[currentIndexCarousel].classList.remove("active");
    currentIndexCarousel = (currentIndexCarousel + 1) % carouselMember.length;
    carouselMember[currentIndexCarousel].classList.add("active");
    updateCarouselCounter();
    checkBtns();
  }

  function checkBtns() {
    leftBtn.classList.toggle("circle-button-disabled", currentStageIndex === 0);
    rightBtn.classList.toggle(
      "circle-button-disabled",
      currentStageIndex === stages.length - 1
    );

    carouselLeftBtn.classList.toggle(
      "circle-button-disabled",
      currentIndexCarousel === 0
    );
    carouselRightBtn.classList.toggle(
      "circle-button-disabled",
      currentIndexCarousel === carouselMember.length - 1
    );
  }

  carouselRightBtn.addEventListener("click", function () {
    if (currentIndexCarousel < carouselMember.length - 1) {
      carouselMember[currentIndexCarousel].classList.remove("active");

      carouselMember[++currentIndexCarousel].classList.add("active");
    }
    updateCarouselCounter();
    checkBtns();
  });

  carouselLeftBtn.addEventListener("click", function () {
    if (currentIndexCarousel > 0) {
      carouselMember[currentIndexCarousel].classList.remove("active");

      carouselMember[--currentIndexCarousel].classList.add("active");
    }
    updateCarouselCounter();
    checkBtns();
  });

  rightBtn.addEventListener("click", function () {
    if (currentStageIndex < stages.length - 1) {
      stages[currentStageIndex].classList.remove("active");
      navDots[currentStageIndex].classList.remove("active");

      stages[++currentStageIndex].classList.add("active");
      navDots[currentStageIndex].classList.add("active");
    }
    checkBtns();
  });

  leftBtn.addEventListener("click", function () {
    if (currentStageIndex > 0) {
      stages[currentStageIndex].classList.remove("active");
      navDots[currentStageIndex].classList.remove("active");

      stages[--currentStageIndex].classList.add("active");
      navDots[currentStageIndex].classList.add("active");
    }
    checkBtns();
  });

  updateCarouselCounter();
  checkBtns();
  setInterval(updateCarousel, 4000);
});

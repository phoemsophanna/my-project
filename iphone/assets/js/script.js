document
  .querySelector(".summary-banner > button")
  .addEventListener("click", () => {
    modelClick();
  });

document
  .querySelector(".video-container > button")
  .addEventListener("click", () => {
    modelClick();
  });

document.querySelector(".color-box").addEventListener("click", (e) => {
  const button = document.querySelectorAll(".color-box > button");
  const gallaries = document.querySelectorAll(".image-container > img");
  if (e.target.tagName === "BUTTON") {
    for (let i = 0; i < button.length; i++) {
      if (button[i].classList.contains("active")) {
        button[i].classList.remove("active");
      }
    }
    e.target.classList.add("active");
    for (let i = 0; i < gallaries.length; i++) {
      if (gallaries[i].classList.contains("active")) {
        gallaries[i].classList.remove("active");
        gallaries[i].style.animation = "zoomOut 1s";
      }
      if (gallaries[i].attributes.alt.value == e.target.value) {
        gallaries[i].classList.add("active");
        gallaries[i].style.animation = "zoomIn 1s";
      }
    }
  }
});

function modelClick() {
  const model = document.querySelector(".container-model");
  if (model.classList.contains("active")) {
    setTimeout(() => {
      model.classList.toggle("active");
    }, 1500);
    document.querySelector(".video-container > iframe").attributes.src.value =
      "http://www.youtube.com/embed/ihfu7gAlJjU?autoplay=0";
    model.style.animation = "fadeOut 1.5s";
    document.querySelector(".video-container").style.animation = "zoomOut 1.5s";
  } else {
    document.querySelector(".video-container > iframe").attributes.src.value =
      "http://www.youtube.com/embed/ihfu7gAlJjU?autoplay=1";
    model.classList.toggle("active");
    model.style.animation = "fadeIn 2s";
    document.querySelector(".video-container").style.animation = "zoomIn 2s";
  }
}

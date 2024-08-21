const cTime = document.querySelector(".contain-time");
const btn15 = document.querySelector(".btn15");
const btn30 = document.querySelector(".btn30");
const btn45 = document.querySelector(".btn45");
const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");
const video = document.querySelector(".video-play");
const containerPop = document.querySelector(".container-popup");

let min = 0;
let sec = 0;
let tapOnlyOne = true;
let onlyReset = true;
let close = false;
let popup1 = true;

document.querySelector(".closeButton").addEventListener("click", () => {
  close = true;
  popup();
});

function popup() {
  let timePop;
  if (popup1) {
    if (!close) {
      timePop = setTimeout(() => {
        video.innerHTML = `<video width="320" height="240" autoplay>
          <source src="sda.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>`;
        containerPop.classList.add("show");
      }, 2000);
    } else if (close) {
      clearTimeout(timePop);
      video.innerHTML = "";
      containerPop.classList.remove("show");
    }
  } else {
    if (!close) {
      video.innerHTML = `<video width="340" height="auto" autoplay>
          <source src="Shakira - Waka Waka (This Time for Africa) (The Official 2010 FIFA World Cup™ Song).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>`;
      containerPop.classList.add("show");
    } else if (close) {
      video.innerHTML = "";
      containerPop.classList.remove("show");
    }
  }
}

btn15.addEventListener("click", () => {
  if (onlyReset) {
    setTime1(15, ".btn15");
  }
  if (popup1) {
    close = false;
    popup("popup1");
  }
});
btn30.addEventListener("click", () => {
  if (onlyReset) setTime1(30, ".btn30");
  if (popup1) {
    close = false;
    popup("popup1");
  }
});
btn45.addEventListener("click", () => {
  if (onlyReset) setTime1(45, ".btn45");
  if (popup1) {
    close = false;
    popup("popup1");
  }
});

btnStart.addEventListener("click", () => {
  if (tapOnlyOne && min != 0) {
    startTime("start");
    tapOnlyOne = false;
    popup1 = false;
  }
});
btnStop.addEventListener("click", () => {
  startTime("stop");
  tapOnlyOne = true;
});
btnReset.addEventListener("click", () => {
  startTime("reset");
  tapOnlyOne = true;
  onlyReset = true;
});

let timeSet;

function startTime(button) {
  if (button == "start") {
    onlyReset = false;
    if (min != 0) {
      timeSet = setInterval(() => {
        document.querySelector(".contain-time span").innerHTML = `<span>${(sec =
          sec - 1)} sec</span>`;
        if (sec == 0) {
          document.querySelector(".contain-time h2").innerHTML = `<h2>${(min =
            min - 1)} Min</h2>`;
          sec = 60;
        }
        if (min == 0) {
          startTime("reset");
          close = false;
          popup();
          popup1 = true;
          tapOnlyOne = true;
          onlyReset = true;
        }
      }, 50);
    }
  }
  if (button == "stop") {
    clearInterval(timeSet);
  }
  if (button == "reset") {
    min = 0;
    sec = 0;
    clearInterval(timeSet);
    lastButton();
    cTime.innerHTML = `<h2>${min} Min</h2>
        <span>${sec} sec</span>`;
  }
}

function setTime1(time, button) {
  const button1 = document.querySelector(button);
  if (!button1.classList.contains("active1")) {
    lastButton();
    min = time;
    if (sec == 0) {
      sec = 60;
    }
    button1.classList.add("active1");
  } else {
    min = 0;
    sec = 0;
    button1.classList.remove("active1");
  }

  cTime.innerHTML = `<h2>${min} Min</h2>
        <span>${sec} sec</span>`;
}

function lastButton() {
  const lastbutton = document.querySelector(".active1");
  if (lastbutton) {
    lastbutton.classList.remove("active1");
  }
}

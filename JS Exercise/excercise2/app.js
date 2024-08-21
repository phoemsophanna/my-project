let count = 1;
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const back = document.querySelector(".back");
const containBtn = document.querySelector(".container-btn");

btnYes.addEventListener("click", buttonYes);
btnNo.addEventListener("click", buttonNo);
back.addEventListener("click", backBtn);

function backBtn() {
  document.querySelector(
    ".contain-img"
  ).innerHTML = `<img src="giphy.gif" alt="" />`;
  document.querySelector(
    ".container"
  ).style.backgroundImage = `linear-gradient(135deg, rgb(255, 255, 255) 10%, rgb(225 225 225) 100%)`;
  document.querySelector(".title").style.color = `rgb(${0}, ${0}, ${0})`;
  document.querySelector(".title").innerHTML = `<h3>Do you Love Me 💖💖?</h3>`;
  btnYes.style.display = "inline";
  btnNo.style.display = "inline";
  back.style.display = `none`;
  document.querySelector(".btn-no").style.backgroundColor = `rgb(${199}, 0, 0)`;
  document.querySelector(".btn-no").style.fontSize = `${12}px`;
}

function buttonYes() {
  document.querySelector(
    ".contain-img"
  ).innerHTML = `<img src="3NtY188QaxDdC.webp" alt="" />`;
  document.querySelector(
    ".container"
  ).style.backgroundImage = `linear-gradient(135deg, #FFE4D6 10%, #FACBEA 100%)`;
  document.querySelector(".title").style.color = `rgb(${0}, ${0}, ${0})`;
  document.querySelector(
    ".title"
  ).innerHTML = `<h3>Yeye You Love Me Too 💖💖</h3>`;
  back.style.display = `inline`;
  btnYes.style.display = "none";
  btnNo.style.display = "none";
}

function buttonNo() {
  let img = Math.random();
  let imgLevel = 0;
  if (img < 0.25) {
    // document.querySelector(".btn-no").style.top = `${
    //   Math.ceil(Math.random() * 10) * 20
    // }px`;
    imgLevel = 2;
  } else if (img < 0.55) {
    // document.querySelector(".btn-no").style.bottom = `${
    //   Math.ceil(Math.random() * 10) * 20
    // }px`;
    imgLevel = 3;
  } else if (img < 0.75) {
    // document.querySelector(".btn-no").style.left = `${
    //   Math.ceil(Math.random() * 10) * 20
    // }px`;
    imgLevel = 4;
  } else {
    // document.querySelector(".btn-no").style.right = `${
    //   Math.ceil(Math.random() * 10) * 20
    // }px`;
    imgLevel = 5;
  }
  if (count <= 1) {
    document.querySelector(
      ".contain-img"
    ).innerHTML = `<img src="giphy (1).gif" alt="" />`;
    document.querySelector(
      ".container"
    ).style.backgroundColor = `linear-gradient(135deg, rgb(250, 250, 250) 10%, rgb(215 215 215) 100%)`;
    document.querySelector(".title").style.color = `rgb(${0 + 15}, ${0 + 15}, ${
      0 + 15
    })`;
    document.querySelector(".btn-no").style.backgroundColor = `rgb(${
      199 - 15
    }, 0, 0)`;
  } else {
    document.querySelector(
      ".contain-img"
    ).innerHTML = `<img src="giphy (${imgLevel}).gif" alt="" />`;
    document.querySelector(
      ".container"
    ).style.backgroundImage = `linear-gradient(135deg, rgb(${
      250 - count * 5
    }, ${250 - count * 5}, ${250 - count * 5}) 10%, rgb(${215 - count * 10}, ${
      215 - count * 10
    }, ${215 - count * 10}) 100%)`;
    document.querySelector(".title").style.color = `rgb(${0 + count * 10}, ${
      0 + count * 10
    }, ${0 + count * 10})`;
    document.querySelector(".btn-no").style.backgroundColor = `rgb(${
      199 - count * 15
    }, 0, 0)`;
  }
  document.querySelector(".btn-no").style.fontSize = `${12 + count * 2}px`;
  count++;
}

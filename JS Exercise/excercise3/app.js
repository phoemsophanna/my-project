const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const sissors = document.querySelector(".sisscor");
const you = document.querySelector(".you");
const computer = document.querySelector(".computer");

let win = 0;
let lose = 0;
let draw = 0;

rock.addEventListener("click", function () {
  game(1);
});
paper.addEventListener("click", function () {
  game(2);
});
sissors.addEventListener("click", function () {
  game(3);
});

function game(value) {
  const random = Math.random();
  let randomp = 0;
  if (random < 0.3) {
    randomp = 1;
  } else if (random < 0.7) {
    randomp = 2;
  } else {
    randomp = 3;
  }

  if (value == 1) {
    you.innerHTML = `<img src="rock.jpg" alt="" />`;
    if (randomp == 1) computer.innerHTML = `<img src="rock.jpg" alt="" />`;
    else if (randomp == 2)
      computer.innerHTML = `<img src="paper.jpg" alt="" />`;
    else computer.innerHTML = `<img src="sisscor.jpg" alt="" />`;
  } else if (value == 2) {
    you.innerHTML = `<img src="paper.jpg" alt="" />`;
    if (randomp == 1) computer.innerHTML = `<img src="rock.jpg" alt="" />`;
    else if (randomp == 2)
      computer.innerHTML = `<img src="paper.jpg" alt="" />`;
    else computer.innerHTML = `<img src="sisscor.jpg" alt="" />`;
  } else {
    you.innerHTML = `<img src="sisscor.jpg" alt="" />`;
    if (randomp == 1) computer.innerHTML = `<img src="rock.jpg" alt="" />`;
    else if (randomp == 2)
      computer.innerHTML = `<img src="paper.jpg" alt="" />`;
    else computer.innerHTML = `<img src="sisscor.jpg" alt="" />`;
  }
  caculator(value, randomp);
  document.querySelector(
    ".point"
  ).innerHTML = `Win: ${win}, Lose: ${lose}, Draw: ${draw}`;
}

function caculator(value, value1) {
  let result = ``;
  if (value == 1 && value1 == 2) {
    lose++;
    result = "Lose";
  } else if (value == 1 && value1 == 1) {
    draw++;
    result = "Draw";
  } else if (value == 1 && value1 == 3) {
    win++;
    result = "Win";
  }
  if (value == 2 && value1 == 2) {
    draw++;
    result = "Draw";
  } else if (value == 2 && value1 == 1) {
    win++;
    result = "Win";
  } else if (value == 2 && value1 == 3) {
    lose++;
    result = "Lose";
  }
  if (value == 3 && value1 == 2) {
    win++;
    result = "Win";
  } else if (value == 3 && value1 == 1) {
    lose++;
    result = "Lose";
  } else if (value == 3 && value1 == 3) {
    draw++;
    result = "Draw";
  }

  document.querySelector(".result2").innerHTML = `You are ${result}`;
}

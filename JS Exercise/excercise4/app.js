import member from "./data.js";
const container = document.querySelector(".container");

let name = document.getElementById("name");
let email = document.getElementById("email");
let id = document.getElementById("id");
let phone = document.getElementById("phone");
let salary = document.getElementById("salary");

let search = document.getElementById("search");

const price1 = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");

const submit = document.querySelector(".submit");
show();

beforeActive();
function beforeActive() {
  const active = document.querySelectorAll(".filter button");
  active.forEach((button) => {
    button.addEventListener("click", () => {
      active.forEach((newbtn) => newbtn.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

price1.addEventListener("click", function () {
  showPrice(100);

  price1.classList.add(".active");
});
price2.addEventListener("click", function () {
  showPrice(200);
});
price3.addEventListener("click", function () {
  showPrice(300);
});

search.addEventListener("input", () => {
  searchText = search.value.toLowerCase();
  showSearch(searchText);
});

submit.addEventListener("submit", function (e) {
  e.preventDefault();
  submit1();
  show();
});

function submit1() {
  member.push({
    name: `${name.value}`,
    email: `${email.value}`,
    id: `${id.value}`,
    phone: `${phone.value}`,
    salary: `${salary.value}`,
  });
  name.value = "";
  email.value = "";
  id.value = "";
  phone.value = "";
  salary.value = "";
}

function showSearch(search1) {
  let showName = "";
  member.forEach(function (q) {
    const nameSearch = q.name.toLowerCase();
    let member2 = nameSearch.includes(search1);
    console.log(member2 + search1);
    if (member2 == true) {
      showName += `<div class="blog">
        <h5>${q.id}</h5>
        <h4>${q.name}</h4>
        <h4>${q.email}</h4>
        <h4>${q.phone}</h4>
        <h4>${q.salary}</h4>
      </div>`;
    }
  });
  container.innerHTML = showName;
}

function showPrice(price) {
  let member1 = member.filter(function (q) {
    return q.salary >= price;
  });
  console.log(member1);
  let showName = "";
  member1.map(function (q) {
    showName += `<div class="blog">
        <h5>${q.id}</h5>
        <h4>${q.name}</h4>
        <h4>${q.email}</h4>
        <h4>${q.phone}</h4>
        <h4>${q.salary}</h4>
      </div>`;
  });
  container.innerHTML = showName;
}

function show() {
  let showName = "";
  member.forEach(function (q) {
    showName += `<div class="blog">
        <h5>${q.id}</h5>
        <h4>${q.name}</h4>
        <h4>${q.email}</h4>
        <h4>${q.phone}</h4>
        <h4>${q.salary}</h4>
      </div>`;
  });
  container.innerHTML = showName;
}

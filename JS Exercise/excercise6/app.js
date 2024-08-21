const data = "https://www.course-api.com/react-store-products";
let productsAll = "";
const search = document.getElementById("search");

search.addEventListener("input", () => {
  let text = search.value.toLowerCase();
  productsAll = "";
  sompoint(text);
});



const sompoint = async (text) => {
  try {
    const data1 = await fetch(data);
    if (!data1.ok) {
      const errore = "You are Error";
      throw new Error(errore);
    }
    const list = await data1.json();
    list.forEach((element) => {
      if (text != null) {
        showProduct(text, element);
      } else {
        getItem(element);
      }
    });
    document.querySelector(".product-container").innerHTML = productsAll;
  } catch (error) {
    console.log(error);
  }
};
sompoint();

function showProduct(search, element) {
  const element1 = element.name.toLowerCase();
  let show = element1.includes(search);
  if (show == true) {
    productsAll += `<div class="col-lg-3 col-12 mb-4">
          <div class="blog">
            <div class="thumbnail">
              <div
                class="thumbnail2"
                style="background-image: url('${element.image}')"
              ></div>
            </div>
            <div class="detail-product">
              <h3>
                <span
                  >${element.id}
                  <p>${element.company}</p></span
                >${element.name}
              </h3>
              <button>${element.category}</button>
              <h2>Price: $${element.price}</h2>
            </div>
          </div>
        </div>`;
  }
}

function getItem(element) {
  productsAll += `<div class="col-lg-3 col-12 mb-4">
          <div class="blog">
            <div class="thumbnail">
              <div
                class="thumbnail2"
                style="background-image: url('${element.image}')"
              ></div>
            </div>
            <div class="detail-product">
              <h3>
                <span
                  >${element.id}
                  <p>${element.company}</p></span
                >${element.name}
              </h3>
              <button>${element.category}</button>
              <h2>Price: $${element.price}</h2>
            </div>
          </div>
        </div>`;
}

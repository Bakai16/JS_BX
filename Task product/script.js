const productsInner = document.querySelector(".products__inner");
const productsFilters = document.querySelector(".products__filters");
fetch("product.json")  // FETCH API
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((e) => {
      let productsItem = document.createElement("article");
      productsItem.classList = `products__item  ${e.category}`;

      let img = document.createElement("img");
      img.className = "products__item-photo";

      let productsItemInfo = document.createElement("div");
      productsItemInfo.className = "products__item-info";

      let header = document.createElement("header");

      let h3 = document.createElement("h3");

      let productsItemPrice = document.createElement("span");
      productsItemPrice.className = "products__item-price";

      let productsItemText = document.createElement("p");
      productsItemText.className = "products__item-text";

      productsInner.appendChild(productsItem);
      productsItem.appendChild(img);
      productsItem.appendChild(productsItemInfo);
      productsItemInfo.appendChild(header);
      productsItemInfo.appendChild(productsItemText);
      header.appendChild(h3);
      header.appendChild(productsItemPrice);

      img.src = e.img;
      h3.innerHTML = e.title;
      productsItemPrice.textContent = e.price + "сом";
      productsItemText.innerHTML = e.desc;

      const filterCard = document.querySelectorAll(".products__item");
      productsFilters.addEventListener("click", (event) => {
        if (event.target.tagName !== "BUTTON") return false;
        let filterClass = event.target.dataset["filter"];
        filterCard.forEach((e) => {
          e.classList.remove("hide");
          if (!e.classList.contains(filterClass) && filterClass !== "all") {
            e.classList.add("hide");
          }
        });
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
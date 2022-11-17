const categoryButtons = document.querySelectorAll(".category");
const mainContainer = document.querySelectorAll(".main-container");

categoryButtons.forEach((button, index) => {
  button.onclick = () => {
    clear();
    mainContainer[index].classList.remove("invisible");
    categoryButtons[index].style.color = "blue";
  };
});

function clear() {
  for (var i = 0; i < 5; i++) {
    mainContainer[i].classList.add("invisible");
    categoryButtons[i].style.color = "black";
  }
}

class TableSelectApi {
  static #instance = null;

  static getInstance() {
    if (this.#instance == null) {
      this.#instance = new TableSelectApi();
    }
    return this.#instance;
  }

  getCollections() {
    let responseData = null;

    const url = location.href;
    const category = url.substring(url.lastIndexOf("/") + 1);

    $.ajax({
      async: false,
      type: "get",
      url: "/api/products/" + category,
      dataType: "json",
      success: (response) => {
        responseData = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
    return responseData;
  }
}

class TableService {
  static #instatnce = null;

  static getInstance() {
    if (this.#instatnce == null) {
      this.#instatnce = new TableService();
    }
    return this.#instatnce;
  }

  pdtIdList = new Array();

  constructor() {
    this.pdtIdList = new Array();
  }

  loadCollections() {
    const responseData = TableSelectApi.getInstance().getCollections();
    if (responseData.length > 0) {
      console.log(this.pdtIdList);
    } else {
      alert("해당 카테고리에 등록된 상품 정보가 없습니다.");
    }
  }

  getCollections(responseData) {
    const collectionProducts = document.querySelector(".main-container");
    collectionProducts.innerHTML = ``;
    this.pdtIdList.length = 0;
    responseData.forEach((product) => {
      this.pdtIdList.push(product.productId);
      collectionProducts.innerHTML += `
        <div class="product-select">
            <div class="product-images">
                <img src="/static/upload/product/${product.mainImg}">
            </div>
            <div class="product-detail">
                <div class="product-name">${product.productName}</div>
                <div class="product-price"><strong>${product.productPrice}</strong></div>
            </div>
        </div>
        `;
    });
    this.addProductListEvent();
  }

  addProductListEvent() {
    const collectionProducts = document.querySelectorAll(".product-select");

    collectionProducts.forEach((product, index) => {
      product.onclick = () => {
        console.log("이제모름");
      };
    });
  }
}

window.onload = () => {
  TableService.getInstance().loadCollections();
};

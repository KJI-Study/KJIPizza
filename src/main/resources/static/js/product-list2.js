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
    let category = url.substring(url.lastIndexOf("/") + 1);

    $.ajax({
      async: false,
      type: "get",
      url: "/api/products/" + category,
      contentType : "json",
      success: (response) => {
        responseData = response.data;
        console.log(page);
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

  collectionsEntity = {
    page: 1,
    totalCount: 0
  }

  constructor(){
    this.pdtIdList = new Array();
  }

  loadCollections(){
    if(this.collectionsEntity.page == 1){
      const responseData = TableSelectApi.getInstance().getCollections(this.collectionsEntity.page);
      console.log(responseData);

      if(responseData.length > 0){
        this.getCollections(responseData);
      }
    }
  }


  getCollections(responseData) {
    const collectionProducts = document.querySelector(".main-container");
    responseData.forEach(product =>{
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

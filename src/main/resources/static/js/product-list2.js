const categoryButtons = document.querySelectorAll(".category");
const mainContainer = document.querySelectorAll(".main-container");

class TableSelectApi {
  static #instance = null;
  
  static getInstance() {
    if (this.#instance == null) {
      this.#instance = new TableSelectApi();
    }
    return this.#instance;
  }

   getCollections() {
    
    $.ajax({
      async: false,
      type: "get",
      url: "/api/products/" + 1,
      contentType : "json",
      success: (response) => {
        TableService.getInstance().loadCollections(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
}
}

categoryButtons.forEach((button, index) => {
  button.onclick = () => {
    clear();
    mainContainer[index].classList.remove("invisible");
    categoryButtons[index].style.color = "blue";
    
    console.log(index);

    $.ajax({
      async: false,
      type: "get",
      url: "/api/products/" + (index+1),
      contentType : "json",
      success: (response) => {
        // console.log(response.data);
        TableService.getInstance().loadCollections(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  };
});

function clear() {
  for (var i = 0; i < 5; i++) {
    mainContainer[i].classList.add("invisible");
    categoryButtons[i].style.color = "black";
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


  loadCollections(response){
    categoryButtons.forEach((button,index) => {
      mainContainer[index].innerHTML = ``;
      response.data.forEach(product => {
         mainContainer[index].innerHTML += `
        <div class="product-select">
          <div class="product-images">
              <img src="/static/upload/product/${product.Img}">
          </div>
          <div class="product-detail">
              <div class="product-name">${product.productName}</div>
              <div class="product-price"><strong>${product.productPrice}</strong></div>
          </div>
      </div>
      `;
      });
      this.addProductListEvent();
    })
      
  }

   addProductListEvent() {
     const collectionProducts = document.querySelectorAll(".product-select");
     const modalProduct = document.querySelector(".modal-container");
     const close = document.querySelector(".modal-close-btn");


     collectionProducts.forEach((product, index) => {
    product.onclick = () => {
        modalProduct.classList.remove("hidden");
         modalProduct.innerHTML = `
         <div class="bg"></div>
                    <div class="product-modal">
                        <div class="left-modal">
                            <div class="modal-img-container">
                                <img src="/static/images/cheeze.png">
                            </div>
                            <div class="modal-detail">
                                <div class="modal-name">치즈 크러스트 피자</div>
                                <div class="modal-price">24,000원</div>
                            </div>
                        </div>
                        <div class="right-modal">
                            <div class="size-select"><b>1.사이즈 선택</b>
                                <div class="size-select-container">
                                    <label for="s">
                                        <input type="radio" id="s" name="size-select" value="s"> S
                                    </label>
                                    <label for="l">
                                        <input type="radio" id="l" name="size-select" value="l"> L (+4000)
                                    </label>
                                </div>
                            </div>
                            <div class="crust-select"><b>2. 크러스트 선택</b>
                                <div class="curst-select-container">
                                    <label for="normal">
                                        <input type="radio" id="normal" name="crust-select" value="normal"> 기본
                                    </label>
                                    <label for="cc">
                                        <input type="radio" id="cc" name="crust-select" value="cc"> 전부 치즈 크러스트
                                    </label>
                                    <label for="hc">
                                        <input type="radio" id="hc" name="crust-select" value="hc"> 전부 햄크러스트
                                    </label>
                                    <label for="ch">
                                        <input type="radio" id="ch" name="crust-select" value="ch"> 치즈반/햄반 크러스트
                                    </label>
                                </div>
                            </div>
                            <div class="topping-select"><b>3. 토핑 추가</b>
                                <div class="topping-select-container">
                                    <label for="pat">
                                        <input type="radio" id="pat" name="topping-select" value="pat"> 파인애플 토핑
                                    </label>
                                    <label for="ot">
                                        <input type="radio" id="ot" name="topping-select" value="ot"> 양파 토핑
                                    </label>
                                </div>
                            </div>
                            <div class="pdt-modal-btn">
                                <button type="button" class="modal-close-btn btn" ><i class="fa-solid fa-xmark"></i> 취소</button>                         
                                <button type="button" class="modal-cart-btn btn"><i class="fa-solid fa-cart-shopping"></i> 장바구니담기</button>
                            </div>
                        </div>
                    </div>
         `;
         document.querySelector(".modal-close-btn").onclick = () => {
            document.querySelector(".modal-container").classList.add("hidden");
        };
       };

     });
   }
}

 window.onload = () => {
  TableSelectApi.getInstance().getCollections();
 };

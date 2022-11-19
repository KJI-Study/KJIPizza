const categoryButtons = document.querySelectorAll(".category");
const mainContainer = document.querySelectorAll(".main-container");

var entity = {
  index: 1
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
    $.ajax({
      async: false,
      type: "get",
      url: "/api/products/" + (entity.index),
      contentType : "json",
      success: (response) => {
        responseData = response.data
        TableService.getInstance().loadCollections(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
    return responseData;
  }
}

categoryButtons.forEach((button, index) => {
  button.onclick = () => {
    clear();
    mainContainer[index].classList.remove("invisible");
    categoryButtons[index].style.color = "blue";
    this.entity['index'] = (index+1);
    TableSelectApi.getInstance().getCollections(index);
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
      response.data.forEach((product,number) => {
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
     collectionProducts.forEach((product,index) => {
     product.onclick = () => {
      $.ajax({
        async: false,
        type: "get",
        url: "/api/products/option",
        dataType: "json",
        success: (response) => {
          console.log(response.data)
          Option.getInstance().optionCollectionEvent(response);
        },
        error: (error) => {
          console.log(error);
          }
        });
      }
    });
  }
}





class Option {
  static #instance = null;

  static getInstance() {
    if (this.#instance == null) {
      this.#instance = new Option();
    }
    return this.#instance;
  }

  optionCollectionEvent(response) {
    const modalProduct = document.querySelector(".modal-container");

    // const responseData = TableSelectApi.getInstance().getCollections(index);

    // console.log("엔티티번호 : " + index);

    // console.log(responseData);

    modalProduct.classList.remove("hidden");
    modalProduct.innerHTML = `
    <div class="bg"></div>
               <div class="product-modal">
                   <div class="left-modal">
                       <div class="modal-img-container">
                           <img src="/static/upload/product/">
                       </div>
                       <div class="modal-detail">
                           <div class="modal-name"></div>
                           <div class="modal-price"></div>
                       </div>
                   </div>
                   <div class="right-modal">
                       <div class="size-select"><b>1.사이즈 선택</b>
                           <div class="size-select-container">
                               <label for="s">
                                   <input type="radio" id="s" name="size-select" value="${response.data[0].optionId}">${response.data[0].optionName}
                               </label>
                               <label for="l">
                                   <input type="radio" id="l" name="size-select" value="${response.data[1].optionId}">${response.data[1].optionName} (+4000)
                               </label>
                           </div>
                       </div>
                       <div class="crust-select"><b>2. 크러스트 선택</b>
                           <div class="curst-select-container">
                               <label for="normal">
                                   <input type="radio" id="normal" name="crust-select" value="${response.data[2].optionId}"> ${response.data[2].optionName}
                               </label>
                               <label for="cc">
                                   <input type="radio" id="cc" name="crust-select" value="${response.data[3].optionId}"> ${response.data[3].optionName}
                               </label>
                               <label for="hc">
                                   <input type="radio" id="hc" name="crust-select" value="${response.data[4].optionId}"> ${response.data[4].optionName}
                               </label>
                               <label for="ch">
                                   <input type="radio" id="ch" name="crust-select" value="${response.data[5].optionId}"> ${response.data[5].optionName}
                               </label>
                           </div>
                       </div>
                       <div class="topping-select"><b>3. 토핑 추가</b>
                           <div class="topping-select-container">
                               <label for="pat">
                                   <input type="radio" id="pat" name="topping-select" value="${response.data[6].optionId}"> ${response.data[6].optionName}
                               </label>
                               <label for="ot">
                                   <input type="radio" id="ot" name="topping-select" value="${response.data[7].optionId}"> ${response.data[7].optionName}
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
  }
}

 window.onload = () => {
  TableSelectApi.getInstance().getCollections(0);
 };

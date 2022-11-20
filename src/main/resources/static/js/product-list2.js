const categoryButtons = document.querySelectorAll(".category");
const mainContainer = document.querySelectorAll(".main-container");

var entity = {
  btnvalue: "salad",
  page : 1
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
      url: "/api/products/" + entity.btnvalue,
      contentType : "json",
      success: (response) => {
        responseData = response.data
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
    this.entity['btnvalue'] = button.value;
    this.entity['page'] = index;
    TableSelectApi.getInstance().getCollections(entity.btnvalue);
    TableService.getInstance().loadCollections();
    };
  });


function clear() {
  for (var i = 0; i < 5; i++) {
    mainContainer[i].classList.add("invisible");
    mainContainer[i].innerHTML = ``;
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

  pdtList = new Array();

  getOptionMst() {
  $.ajax({
    async: false,
    type: "get",
    url: "/api/products/option",
    dataType: "json",
    success: (response) => {
      TableService.getInstance().addProductListEvent(response)
    },
    error: (error) => {
      console.log(error);
      }
    });
  }


  loadCollections(){

    const responseData = TableSelectApi.getInstance().getCollections(entity.btnvalue);

      mainContainer[entity.page].innerHTML = ``;

      responseData.forEach((product,number) => {
         mainContainer[entity.page].innerHTML += `
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
      TableService.getInstance().getOptionMst();
  }


     addProductListEvent(response) {
      const collectionProducts = document.querySelectorAll(".product-select");
      
      const modalProduct = document.querySelector(".modal-container");

      const responseData = TableSelectApi.getInstance().getCollections(entity.btnvalue);
      
      collectionProducts.forEach((button,index) => {
      button.onclick = () => {
      modalProduct.classList.remove("hidden");
      modalProduct.innerHTML = `
      <div class="bg"></div>
                 <div class="product-modal">
                     <div class="left-modal">
                         <div class="modal-img-container">
                             <img src="/static/upload/product/">
                         </div>
                         <div class="modal-detail">
                             <div class="modal-name">${responseData[index].productName}</div>
                             <div class="modal-price">${responseData[index].productPrice}</div>
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
    });

  }
}

window.onload = () => {
  //TableSelectApi.getInstance().getCollections(entity.btnvalue);
 };



// class Option {
//   static #instance = null;

//   static getInstance() {
//     if (this.#instance == null) {
//       this.#instance = new Option();
//     }
//     return this.#instance;
//   }

//   optionCollectionEvent(response) {
   
//     // const responseData = TableSelectApi.getInstance().getCollections(index);

//     // console.log("엔티티번호 : " + index);

//     // console.log(responseData);

//   }
// }

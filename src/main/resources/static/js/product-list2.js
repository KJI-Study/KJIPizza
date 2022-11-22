const categoryButtons = document.querySelectorAll(".category");
const mainContainer = document.querySelectorAll(".main-container");

const url = location.href;
const tableNumber = url.substring(url.lastIndexOf("/") + 1 ); 



var entity = {
  btnvalue: "salad",
  page : 1
};

var cart = {
  pdtId : 0,
  tableId : tableNumber,
  size: 1,
  crust: 1,
  topping: 1
};



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
              <img src="/static/upload/product/${product.img}">
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
      
      console.log(responseData);
      
      collectionProducts.forEach((button,index) => {
      button.onclick = () => {
      cart['pdtId'] = responseData[index].productId;
      cart['tableId'] = tableNumber;
      collectionProducts[index].classList.remove("goCart");
      modalProduct.classList.remove("hidden");
      modalProduct.innerHTML = `
      <div class="bg"></div>
                 <div class="product-modal">
                     <div class="left-modal">
                         <div class="modal-img-container">
                             <img src="/static/upload/product/${responseData[index].img}">
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
         //재률
         document.querySelector(".modal-cart-btn").onclick = () => {
         document.querySelector(".modal-container").classList.add("hidden");
         document.querySelectorAll(".product-select")[index].classList.add("goCart");

         const sized = document.getElementsByName("size-select").length;  // 2 
         const crusted = document.getElementsByName("crust-select").length;  // 4
         const toppinged = document.getElementsByName("topping-select").length; // 2

           for(var i = 0; i<sized; i++){
             if(document.getElementsByName("size-select")[i].checked == true){
               cart['size'] = document.getElementsByName("size-select")[i].value;
             }
           }
  
           for(var i = 0; i<crusted; i++){
             if(document.getElementsByName("crust-select")[i].checked == true){
               cart['crust'] = document.getElementsByName("crust-select")[i].value;
             }
           }

           for(var i =0; i<toppinged; i++){
             if(document.getElementsByName("topping-select")[i].checked == true){
               cart['topping'] = document.getElementsByName("topping-select")[i].value;
             }
           }
         CartApi.getInstance().getCartId();
         }
      }
    });

  }
}
 
//장바구니 부분

class CartApi {

  static #instance = null;
  
  static getInstance() {
    if (this.#instance == null) {
      this.#instance = new CartApi();
    }
    return this.#instance;
  }


  getCartId(){

    $.ajax({
      async:false,
      type: "post",
      url: "/api/products/cart",
      data: JSON.stringify(cart),
      contentType: "application/json",
      dataType: "json",
      success:(response) => {
        console.log(response);
      },
      error:(error) => {
        console.log(error);
      }
    })
  }
}





window.onload = () => {

    clear();
    mainContainer[0].classList.remove("invisible");
    categoryButtons[0].style.color = "blue";
    this.entity['btnvalue'] = categoryButtons[0].value;
    this.entity['page'] = 0;
    TableSelectApi.getInstance().getCollections(entity.btnvalue);
    TableService.getInstance().loadCollections();

 };


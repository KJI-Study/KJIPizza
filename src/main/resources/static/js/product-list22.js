const categoryButtons = document.querySelectorAll(".category");
const mainContainer = document.querySelectorAll(".main-container");
const url = location.href;
const tableNumber = url.substring(url.lastIndexOf("/") + 1 );
const goCartButton = document.querySelector(".bag-btn");
const resultsum = document.querySelector(".total-price");
const clearbtn = document.querySelector(".cart-clear");
const postOrder = document.querySelector(".order-btn");
const goPayButton = document.querySelector(".order-detail-btn");

goPayButton.onclick = () => {
  location.href = "/order/" + tableNumber;
}

var entity = {
  btnvalue: "salad",
  page : 1
};

const cart = {
  pdtId : 0,
  tableId : tableNumber,
  size: 1,
  crust: 3,
  topping: 3
}

class ProductOption {
  optionId = null;
  optionName = null;
  optionPrice = null;

  constructor(optionId, optionName, optionPrice) {
    this.optionId = optionId;
    this.optionName = optionName;
    this.optionPrice = optionPrice;
  }
}

class Product {
  productId = null;
  productName = null;
  productPrice = null;
  productOptionList = null;
  tableNumber = tableNumber;
  stockValue = null;
  

  constructor(productId, productName, productPrice) {
    this.productId = productId;
    this.productName = productName;
    this.productPrice = productPrice;
    this.stockValue = 1;
    this.productOptionList = new Array();
  }
}


class Cart {
  static #instance = null;
  static getInstance() {
    if(this.#instance == null) {
      this.#instance = new Cart();
    }
    return this.#instance;
  }

  cartList = null;
  stockList = null;

  constructor() {
    this.cartList = new Array();
    this.stockList = new Array();
  }

  addProduct(product) {
    for(let i = 0; i < this.cartList.length; i++) {
      //if(JSON.stringify(this.cartList[i]) == JSON.stringify(product)) {   
        if(this.cartList[i].productOptionList.length == 0 && product.productOptionList.length == 0){
        if((this.cartList[i].productId == product.productId) && (this.cartList[i].productName == product.productName) && (this.cartList[i].productPrice == product.productPrice)) {
          this.stockList[i] += 1;
          this.cartList[i].stockValue++;
          console.log(this.cartList);
          return;
        }
      }
        if(this.cartList[i].productOptionList.length > 0 || product.productOptionList.length > 0 )
           {
            if((this.cartList[i].productId == product.productId) && (this.cartList[i].productName == product.productName) && (this.cartList[i].productPrice == product.productPrice)) {
              if(this.cartList[i].productOptionList[0].optionId == product.productOptionList[0].optionId && this.cartList[i].productOptionList[1].optionId == product.productOptionList[1].optionId
                && this.cartList[i].productOptionList[2].optionId == product.productOptionList[2].optionId){
                  this.stockList[i] += 1;
                  this.cartList[i].stockValue++;
                  console.log(this.cartList);
                  return;
            }
          }
        }
       // this.stockList[i] += 1;
       // this.cartList[i].stockValue++;
        console.log(this.cartList);
        console.log(this.stockList);
       //return;
     // }
    }
    
    this.cartList.push(product);
    this.stockList.push(1);

    console.log(this.cartList);
    console.log(this.stockList);
  }

  createCartList() {
    cartMain.innerHTML = "";
    this.cartList.forEach(items => {
        if(items.productOptionList.length > 1){
          cartMain.innerHTML += `
            <div class="cart-item" value="">
            <div class="cart-item-dtl">
                <div class="cart-item-name">${items.productName}</div>
                <div class="cart-item-option">${items.productOptionList[0].optionName}
                ${items.productOptionList[1].optionName}
                ${items.productOptionList[2].optionName}
                </div>
                <div class="cart-item-price">${items.productPrice + items.productOptionList[0].optionPrice + items.productOptionList[1].optionPrice + items.productOptionList[2].optionPrice}</div>
            </div>
            <button type="button" class="cart-minus-btn">-</button>
            <input type="text" class="numbertext" value=1>
            <button type="button" class="cart-plus-btn">+</button>
            <button type="button" class="cart-remove-btn">삭제</button>
            </div>
          `;
        }else{
            cartMain.innerHTML += `
              <div class="cart-item" value="">
              <div class="cart-item-dtl">
                  <div class="cart-item-name">${items.productName}</div>
                  <div class="cart-item-option"></div>
                  <div class="cart-item-price">${items.productPrice}</div>
              </div>
              <button type="button" class="cart-minus-btn">-</button>
              <input type="text" class="numbertext" value=1>
              <button type="button" class="cart-plus-btn">+</button>
              <button type="button" class="cart-remove-btn">삭제</button>
              </div>
            `;
          }
    })
    Cart.getInstance().deleteProduct();
    Cart.getInstance().clearList();

    Cart.getInstance().miusProduct();
    Cart.getInstance().plusProduct();

   
    //누르자마자 가격 띄우기 완료.
    const btnText = document.querySelectorAll(".numbertext");
    const firstPrice = document.querySelectorAll(".cart-item-price");

    var result = 0;

    for(var i = 0; i<this.stockList.length; i++){
      btnText[i].value = this.stockList[i];
    }


    for(var i = 0; i<btnText.length; i++){
      result += (firstPrice[i].innerText * btnText[i].value);    
    }

    resultsum.value = result;

  }

  miusProduct() {
    const minusbtn = document.querySelectorAll(".cart-minus-btn");
    const btnText = document.querySelectorAll(".numbertext");
    const firstPrice = document.querySelectorAll(".cart-item-price");
    var result = 0;
    minusbtn.forEach((button,index) => {
      button.onclick = () => {
        btnText[index].value--;

        result = resultsum.value;

        result -= (firstPrice[index].innerText * 1);   
      
        resultsum.value = result;
      }
    })
  }
  plusProduct() { 
    const plusbtn = document.querySelectorAll(".cart-plus-btn");
    const btnText = document.querySelectorAll(".numbertext");
    const firstPrice = document.querySelectorAll(".cart-item-price");
    var result = 0;

    plusbtn.forEach((button,index) => {
      button.onclick = () => {
        btnText[index].value++;

        result = 0;

        for(var i = 0; i<plusbtn.length; i++){
          result += (firstPrice[i].innerText * btnText[i].value);    
        }
        resultsum.value = result;
      }
    })
  }
  //재률
  clearList() {

    clearbtn.onclick = () => {
      this.cartList.splice(0, this.cartList.length);
      this.stockList.splice(0, this.stockList.length);
      Cart.getInstance().createCartList();
      Cart.getInstance().sumCartItems();
    }

  }

  deleteProduct() {  
  const deletebtn = document.querySelectorAll(".cart-remove-btn");
    
    deletebtn.forEach((button, index) => {
      button.onclick = () => {
        console.log(this.cartList.indexOf(this.cartList[index]));
        if(index == this.cartList.indexOf(this.cartList[index])) {
          this.cartList.splice(index, 1);
          this.stockList.splice(index, 1);
        }

        Cart.getInstance().createCartList();
        Cart.getInstance().sumCartItems();
      }
    });
    
  }

  sumCartItems() {
    const add = function(stockList) {
      return stockList.reduce((a,b) => a + b, 0);
    };
    var sum = add(this.stockList);
    goCartButton.innerHTML = `
      <i class="fa-solid fa-check"></i> 장바구니${sum}
    `;
  }

  // CartItemsOrder() {

  //   console.log(this.cartList);
  //   $.ajax({
  //     async:false,
  //     type: "post",
  //     url: "/api/cartlist/order/" + tableNumber,
  //     data: JSON.stringify(this.cartList),
  //     contentType: "application/json",
  //     dataType: "json",
  //     success:(response) => {
  //       console.log(response);
  //     },
  //     error:(error) => {
  //       console.log(this.cartList);
  //       console.log(error);
  //     }
  //   })

  // }

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
        console.log(responseData)
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
//장바구니 열었을때 목록 만들어주는것.
goCartButton.onclick = () => {
  Cart.getInstance().createCartList();
}

// postOrder.onclick = () => {
//   Cart.getInstance().CartItemsOrder();
// }


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


  loadCollections() {

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
    
    collectionProducts.forEach((button, index) => {
      button.onclick = () => {
        cart['pdtId'] = responseData[index].productId;
        cart['tableId'] = tableNumber;
        collectionProducts[index].classList.remove("goCart");
        modalProduct.classList.remove("hidden");
        console.log(response.data);
        if((entity.page + 1) == 2){
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
                  <form class="option-form">
                    <div class="right-modal">
                        <div class="size-select"><b>1.사이즈 선택</b>
                            <div class="size-select-container">
                                <label for="s">
                                    <input type="radio" id="s" name="size-select" checked value="${response.data[0].optionId}">${response.data[0].optionName}
                                </label>
                                <label for="l">
                                    <input type="radio" id="l" name="size-select" value="${response.data[1].optionId}">${response.data[1].optionName} (+4000)
                                </label>
                            </div>
                        </div>
                        <div class="crust-select"><b>2. 크러스트 선택</b>
                            <div class="curst-select-container">
                                <label for="normal">
                                    <input type="radio" id="normal" name="crust-select" checked value="${response.data[2].optionId}"> ${response.data[2].optionName} 
                                </label>
                                <label for="cc">
                                    <input type="radio" id="cc" name="crust-select" value="${response.data[3].optionId}"> ${response.data[3].optionName} &nbsp;&nbsp;&nbsp;(+5000)
                                </label>
                                <label for="hc">
                                    <input type="radio" id="hc" name="crust-select" value="${response.data[4].optionId}"> ${response.data[4].optionName} &nbsp;&nbsp;&nbsp;(+5000)
                                </label>
                                <label for="ch">
                                    <input type="radio" id="ch" name="crust-select" value="${response.data[5].optionId}"> ${response.data[5].optionName} &nbsp;&nbsp;&nbsp;(+5000)
                                </label>
                            </div>
                        </div>
                        <div class="topping-select"><b>3. 토핑 추가</b>
                            <div class="topping-select-container">
                                <label for="not">
                                    <input type="radio" id="not" name="topping-select" checked value="${response.data[6].optionId}"> ${response.data[6].optionName}
                                </label>
                                <label for="pat">
                                    <input type="radio" id="pat" name="topping-select" value="${response.data[7].optionId}"> ${response.data[7].optionName} &nbsp;&nbsp;&nbsp;(+2000)
                                </label>
                                <label for="ot">
                                    <input type="radio" id="ot" name="topping-select" value="${response.data[8].optionId}"> ${response.data[8].optionName} &nbsp;&nbsp;&nbsp;(+2000)
                                </label>
                                <label for="mt">
                                    <input type="radio" id="mt" name="topping-select" value="${response.data[9].optionId}"> ${response.data[9].optionName} &nbsp;&nbsp;&nbsp;(+2000)
                                </label>
                                <label for="ct">
                                    <input type="radio" id="ct" name="topping-select" value="${response.data[10].optionId}"> ${response.data[10].optionName} &nbsp;&nbsp;&nbsp;(+3000)
                                </label>
                                <label for="bt">
                                    <input type="radio" id="bt" name="topping-select" value="${response.data[11].optionId}"> ${response.data[11].optionName} &nbsp;&nbsp;&nbsp;(+4000)
                                </label>
                                <label for="bgt">
                                    <input type="radio" id="bgt" name="topping-select" value="${response.data[12].optionId}"> ${response.data[12].optionName} &nbsp;&nbsp;&nbsp;(+4000)
                                </label>
                                <label for="ppt">
                                    <input type="radio" id="ppt" name="topping-select" value="${response.data[13].optionId}"> ${response.data[13].optionName} &nbsp;&nbsp;&nbsp;(+4000)
                                </label>
                            </div>
                        </div>
                        <div class="pdt-modal-btn">
                            <button type="button" class="modal-close-btn btn" ><i class="fa-solid fa-xmark"></i> 취소</button>                         
                            <button type="button" class="modal-cart-btn btn"><i class="fa-solid fa-cart-shopping"></i> 장바구니담기</button>
                        </div>
                    </div>
                  </form>
              </div>
          `;
        } else{
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
                  <div class="modal-content">
                    <i class="fa-solid fa-cart-plus"></i>
                  장바구니에 담으시겠습니까?
                  </div>
                    <div class="pdt-modal-btn">
                        <button type="button" class="modal-close-btn btn" ><i class="fa-solid fa-xmark"></i> 취소</button>                         
                        <button type="button" class="modal-cart-btn btn"><i class="fa-solid fa-cart-shopping"></i> 장바구니담기</button>
                    </div>
                </div>
            </div>
          `;
        }
        document.querySelector(".modal-close-btn").onclick = () => {
          document.querySelector(".modal-container").classList.add("hidden");
        };

        document.querySelector(".bg").onclick =() => {
          document.querySelector(".modal-container").classList.add("hidden");
        };
      
        document.querySelector(".modal-cart-btn").onclick = () => {
          document.querySelector(".modal-container").classList.add("hidden");
          document.querySelectorAll(".product-select")[index].classList.add("goCart");
          
          let product = new Product(responseData[index].productId, responseData[index].productName, responseData[index].productPrice);
          console.log("여기");
          console.log(product);
          if(entity.page + 1 == 2) {
            let formData = new FormData(document.querySelector(".option-form"));

            let selectList = [formData.get("size-select"), formData.get("crust-select"), formData.get("topping-select")]
            
            selectList.forEach(option => {
              response.data.forEach(data => {
                if(data.optionId == option) {
                  let productOption = new ProductOption(data.optionId, data.optionName, data.optionPrice);
                  product.productOptionList.push(productOption);
                  console.log(product.productOptionList);
                }
              })
            });
            Cart.getInstance().addProduct(product);
          }else {
            Cart.getInstance().addProduct(product);
          }
          Cart.getInstance().sumCartItems();
        }
      }
    });

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
   // CartItemsApi.getInstance().getCartItems();
  
 };


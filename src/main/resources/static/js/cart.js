const cartMain = document.querySelector(".cart-main");
const goCartButton = document.querySelector(".bag-btn");
const cartClear = document.querySelector(".cart-clear");
const resultsum = document.querySelector(".total-price");

class CartItemsApi {
    static #instance = null;
  
    static getInstance() {
    if (this.#instance == null) {
        this.#instance = new CartItemsApi();
    }
    return this.#instance;
    }

    constructor() {
        this.getCartItems();
    }

    getCartItems() {

        goCartButton.onclick = () => {

        cartMain.innerHTML = "";
            
        this.getCartList();
       
        }
    }
    
        getCartList(){

        let responseData = null;

        cartMain.innerHTML = "";

        $.ajax({
            async: false,
            type: "get",
            url: "/api/products/cart/item/" +   ,
            dataType: "json",
            success: (response) => {
                responseData = response.data;
                console.log(responseData);
            },
            error: (error) => {
                console.log(error);
            }
        });

        if(responseData.length == 0){
            resultsum.value = 0;
        }


        responseData.forEach(product => {
            if(product.cartegoryId == 2){
                cartMain.innerHTML += `
                <div class="cart-item">
                <div class="cart-item-dtl">
                    <div class="cart-item-name">${product.pdtName}</div>
                    <div class="cart-item-option">${product.cartOptions[0].optionName}
                    ${product.cartOptions[1].optionName}
                    ${product.cartOptions[2].optionName}
                    </div>
                    <div class="cart-item-price">${product.pdtPrice + product.cartOptions[0].optionPrice + product.cartOptions[1].optionPrice + product.cartOptions[2].optionPrice}</div>
                </div>
                <button type="button" class="cart-minus-btn">-</button>
                <input type="text" class="numbertext" value=1>
                <button type="button" class="cart-plus-btn">+</button>
                <button type="button" class="cart-remove-btn">삭제</button>
                </div>
                `;
            }else {
                cartMain.innerHTML += `
                <div class="cart-item">
                <div class="cart-item-dtl">
                    <div class="cart-item-name">${product.pdtName}</div>
                    <div class="cart-item-option"></div>
                    <div class="cart-item-price">${product.pdtPrice}</div>
                </div>
                <button type="button" class="cart-minus-btn">-</button>
                <input type="text" class="numbertext" value=1>
                <button type="button" class="cart-plus-btn">+</button>
                <button type="button" class="cart-remove-btn">삭제</button>
                </div>
            `;
            }

            const itemList = document.querySelectorAll(".cart-item");
            const plusbtn = document.querySelectorAll(".cart-plus-btn");
            const miusbtn = document.querySelectorAll(".cart-minus-btn");
            const numbersum = document.querySelectorAll(".numbertext");
            const deletebtn = document.querySelectorAll(".cart-remove-btn")

            var result = 0;
            
            console.log(responseData.length);

            

            for(var i = 0; i<itemList.length; i++){
                result += responseData[i].pdtPrice;   
            }
            resultsum.value = result;


             plusbtn.forEach((button, index) => {
             button.onclick = () =>{
                numbersum[index].value++;
                result = 0;

                for(var i = 0; i<plusbtn.length; i++){
                    result += responseData[i].pdtPrice * numbersum[i].value;   
                }
                resultsum.value = result;
            }
            })
             miusbtn.forEach((button, index) => {
                button.onclick = () =>{
                   numbersum[index].value--;
                   result = resultsum.value;
                   result -= responseData[index].pdtPrice;   
        
                   resultsum.value = result;

                   }
               })
               deletebtn.forEach((button, index) => {
                button.onclick = () => {
                    DeleteApi.getInstance().deleteCart(responseData[index].cartId);
                    console.log(responseData[index].cartId)
                }
            })
        });
        
    }  
}

class DeleteApi {
    static #instance = null;
  
    static getInstance() {
    if (this.#instance == null) {
        this.#instance = new DeleteApi();
    }
    return this.#instance;
    }
    
    deleteCart(cartId){
        $.ajax({
            async: false,
            type: "delete",
            url: "/api/products/cart/deleteitem/" + cartId,
            data:  JSON.stringify(cartId),
            contentType: "application/json",
            dataType: "json",
            success: (response) => {
                console.log(response.data);
                CartItemsApi.getInstance().getCartList();
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

}

cartClear.onclick = () => {

    $.ajax({
        async: false,
        type: "delete",
        url: "/api/products/cart/item/" + tableNumber,
        data:  JSON.stringify(tableNumber),
        contentType: "application/json",
        dataType: "json",
        success: (response) => {
            console.log(response.data);
            CartItemsApi.getInstance().getCartList();
        },
        error: (error) => {
            console.log(error);
        }
    })

}

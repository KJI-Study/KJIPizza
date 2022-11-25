const cartMain = document.querySelector(".cart-main");
const goCartButton = document.querySelector(".bag-btn");

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
            
            let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/products/cart/item/" + tableNumber,
            dataType: "json",
            success: (response) => {
                responseData = response.data;
                console.log(responseData);
            },
            error: (error) => {
                console.log(error);
            }
        });

        // const obj1 = Object.values(responseData[0]);
        // const obj2 = Object.values(responseData[1]);
        // const obj3 = Object.values(responseData[2]);
        // const sum = obj1.concat(obj2,obj3);
        // const union = sum.filter((item, index) => sum.indexOf(item) === index); //합집합
        // const intersec = sum.filter((item, index) => sum.indexOf(item) !== index); //교집합
        // const difference = union.filter(x => !intersec.includes(x)); // 차집합
        // console.log("합집합 : " + union);
        // console.log("교집합 : " + intersec);
        // console.log("차집합 : " + difference);


    //     for(var k = 0; k<responseData.length; k++){
    //         if(responseData[k].cartegoryId == 2){
    //             for(var i = 0; i<3; i++){
    //                 console.log(responseData[k].cartOptions[i].optionName);
    //         }
    //     }
    // }


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
                    <div class="cart-item-price">${product.pdtPrice}</div>
                </div>
                <button type="button" class="cart-plus-btn">-</button>
                <input type="number">
                <button type="button" class="cart-minus-btn">+</button>
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
                <button type="button" class="cart-plus-btn">-</button>
                <input type="number">
                <button type="button" class="cart-minus-btn">+</button>
                <button type="button" class="cart-remove-btn">삭제</button>
                </div>
            `;
            }
        });
        
        
        }
    }
}

// window.onload = () => {
//     CartItemsApi.getInstance().getCartItems();
// }
const cartList = document.querySelector(".bag-btn");
const cartMain = document.querySelector(".cart-main");

function createCartItem(){
    if(product.cartegoryId == 2){
        cartMain.innerHTML += `
        <div class="cart-item" value="${product.pdtId}">
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
    } else {
        cartMain.innerHTML += `
        <div class="cart-item" value="${product.pdtId}" >
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
}
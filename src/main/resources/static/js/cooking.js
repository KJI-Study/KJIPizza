const centerBox = document.querySelector(".center-box");
const url = location.href;
const tableNumber = url.substring(url.lastIndexOf("/") + 1 );
//tableNumber 선언해줘야함


class PayItemsApi{

    static #instance = null;

    static getInstance(){
        if (this.#instance == null) {
            this.#instance = new PayItemsApi();
        }
        return this.#instance;
    }

    getOrderId() {

        let orderIdData = null;

        $.ajax({
            async : false,
            type : "get",
            url : "/api/products/pay/order/" + tableNumber,
            success : (response) => {
                console.log(response.data);
                orderIdData = response.data;
                this.getPayItems(orderIdData.orderMstId);
            },
            error : (error) => {
                console.log(error);
            }
        });
    }

    getPayItems(orderIdData){
        console.log(orderIdData);

            centerBox.innerHTML = "";

            let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/products/pay/item/" + orderIdData,
            contentType: "json",
            success: (response) => {
                responseData = response.data;
                console.log(responseData);
            },
            error: (error) => {
                console.log(error);
            }
        });
        console.log(responseData);
    }

        // responseData.forEach(product => {
        //     if(product.cartegoryId == 2){
        //     centerBox.innerHTML += `
        //     <div class="mini-box">
        //         <div class="product-images">
        //             <img src="/static/upload/product/${product.save_name}">
        //             <div class="product-detail">
        //                 <div class="product-name"><strong>${product.pdtName}</strong></div>
        //                 <div class="product-size">${product.cartOptions[0].optionName} ${product.cartOptions[1].optionName} ${product.cartOptions[2].optionName}</div>
        //                 <button type="button" class="product-write">상품명 작성</button>
        //                 <button type="button" class="cooking">조리중</button>
        //             </div>
        //         </div>
        //     </div> 
        //     `;
        //     }
        //     else {
        //         centerBox.innerHTML += `
        //     <div class="mini-box">
        //         <div class="product-images">
        //             <img src="/static/upload/product/${product.save_name}">
        //             <div class="product-detail">
        //                 <div class="product-name"><strong>${product.pdtName}</strong></div>
        //                 <button type="button" class="product-write">상품명 작성</button>
        //                 <button type="button" class="cooking">조리중</button>
        //             </div>
        //         </div>
        //     </div> 
        //     `;
        //     }
        // });
    // }
}

window.onload = () => {
    PayItemsApi.getInstance().getOrderId();
}

// document.querySelector(".exit-button").onclick = () => {
//     location.href = "/table/" + tableNumber;
// }

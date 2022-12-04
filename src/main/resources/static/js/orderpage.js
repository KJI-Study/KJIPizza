class ImportApi {
    #IMP = null;

    constructor () {
        this.#IMP = window.IMP;
        this.#IMP.init("imp24504212");
        this.addPaymentEvent();
    }

    addPaymentEvent() {
    this.requestPay();
    }

    requestPay(){
        const price = document.querySelector(".total-price").value;
  
        IMP.request_pay({
            pg: "html5_inicis",
            pay_method: "card",
            merchant_uid: "order_no_" + new Date().getTime(),
            name: tableNumber,
            amount: price,
            buyer_tel: "010-4087-1972"
        }, function (rsp) {
            console.log(rsp);
            if(rsp.success) {
                $.ajax({
                    async:false,
                    type: "post",
                    url: "/api/cartlist/order/" + tableNumber,
                    data: JSON.stringify(Cart.getInstance().cartList),
                    contentType: "application/json",
                    dataType: "json",
                    success:(response) => {
                        console.log(response);
                    },
                    error:(error) => {
                        console.log(Cart.getInstance().cartList);
                        console.log(error);
                    }
                });
            } else {
                console.log("결제 실패")
            }

        });
    
    }

}

document.querySelector(".order-btn").onclick = () => {
    new ImportApi;
}

// 결제 페이지 뿌리기
const goPayButton = document.querySelector(".order-detail-btn");

class PayItemsApi{
    static #instance = null;

    static getInstance(){
    if (this.#instance ==null) {
            this.#instance = new PayItemsApi();
    }
    return this.#instance;
    }

    constructor(){
        this.getPayItems();
        
    }

    getPayItems(){

        goPayButton.onclick = () => {
            centerBox.innerHTML = "";
            let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/products/pay/item/" + tableNumber,
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
        responseData.forEach(product => {
            centerBox.innerHTML += `
            <div class="center-box">
            <div class="mini-box">
                <div class="product-images">${product.saveName}
                    <img src="/static/images/cheeze.png">
                    <div class="product-detail">
                        <div class="product-name"><strong>${product.pdtName}</strong></div>
                        <div class="product-size">[S]</div>
                        <button type="button" class="product-write">상품명 작성</button>
                        <button type="button" class="cooking">조리중</button>
                    </div>
                </div>
            </div>
            <div class="mini-box">
                <div class="product-images">
                    <img src="/static/images/spaghetti.png">
                    <div class="product-detail">
                        <div class="product-name"><strong>오븐치즈스파게티</strong></div>
                        <button type="button" class="product-write">상품명 작성</button>
                        <button type="button" class="cooking">조리중</button>
                    </div>
                </div>
            </div>
            <div class="mini-box">
                <div class="product-images">
                    <img src="/static/images/coke.png">
                    <div class="product-detail">
                        <div class="product-name"><strong>탄산음료(700ml)x1</strong></div>
                        <button type="button" class="product-write">상품명 작성</button>
                        <button type="button" class="cooking">조리중</button>
                    </div>
                </div>
            </div>
        </div>         
            `;
            
        });

        }


    }

}




    

    
        
     
   
        



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
            if(rsp.success) {
                $.ajax({
                    async:false,
                    type: "post",
                    url: "/api/cartlist/order/" + tableNumber,
                    data: JSON.stringify(Cart.getInstance().cartList),
                    contentType: "application/json",
                    dataType: "json",
                    success:(response) => {
                        this.updateAmount();
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



    
        
     
   
        



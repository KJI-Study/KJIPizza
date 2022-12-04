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
            //name: 'tablenum',
            amount: price,
            buyer_tel: "010-4087-1972"
            }, function (rsp) {
            console.log(rsp);
            // 결제검증
            $.ajax({
                type : "POST",
                url : "/payments/complete/" + rsp.imp_uid,
                data : {
                    'imp_uid' : rsp.imp_uid,
                    'merchant_uid' : rsp.merchant_uid,
                    'amount' : rsp.paid_amount
                }
        }).done(function(data) {
                
                console.log(data);
                
                if(rsp.paid_amount == data.response.amount){
                    alert("결제 및 결제검증완료");
                    $.ajax({
                        async: false,
                        type : "post",
                        url : "/api/payments",
                        contentType: "application/json",
                        data : JSON.stringify({
                            merchantUid: rsp.merchant_uid,
                            paidAmount: rsp.paid_amount
                        }),
                        dataType : "json",
                        success : (response) => {
                            console.log(response);
                        },
                        error : (error) => {
                            console.log(error);
                        }
                    });
                    // location.href = "/order/"+ tableNumber;
                } else {
                    alert("결제 실패");
                }
        });
        });
    
    }

    
   
}

document.querySelector(".order-btn").onclick = () => {
    new ImportApi;
}



    
        
     
   
        



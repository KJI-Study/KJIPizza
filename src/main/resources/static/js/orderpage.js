class ImportApi {
    #IMP = null;

    constructor () {
        this.#IMP = window.IMP;
        this.#IMP.init("imp45236213");
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
                merchant_uid: "order_no" + new Date().getTime(),
                //name: 'tablenum',
                amount: price,
                buyer_tel: "010-4087-1972"
             }, function (rsp) {                                                                    
                if (rsp.success) {
    
                } else {
    
                }
             });
    
        }            
   
     }

document.querySelector(".order-btn").onclick = () => {
    new ImportApi;
}



    

    
        
     
   
        



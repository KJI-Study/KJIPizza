document.querySelector(".img-container").onclick = () => {
    document.querySelector(".file-input").click();
}

class PdtRegisterMst{ //앞에 #을 붙이는건 private이라는뜻
    #category;
    #name;
    #price; 
  
    
    constructor(category, name, price){
        this.#category = category;
        this.#name = name;
        this.#price = price; 


    }

    getCategory() {return this.#category;}
    setCategory(category) {this.#category = category;}   

    getName() {return this.#name;}
    setNmae(name) {this.#name =name;}   

    getPrice() {return this.#price;}
    setPrice(price) {this.#price =price;}   
  

    getObject(){ //parameter 요청할때 쓰는코드
        const obj ={
            category  : this.#category, 
            name : this.#name,
            price  : this.#price
        }
        return obj;
    }
}

class CommonApi {

    getCategoryList(){
        
        let responseResult = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/product/category",
            dataType: "json",
            success: (response) => {
                console.log(response.data);
                responseResult = response.data;
            },
            error : (error) => {
                console.log(error);
            }

        })

        return responseResult;

    }
}

class PdtRegisterApi{

    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new PdtRegisterApi();
        }
        return this.#instance;
    }


    createProductRequest(formData){

        let responseData = null;

        $.ajax({
            async : false,
            type: "post",
            url: "/api/admin/product/register",
            enctype: "multipart/form-data",
            contentType: false,
            processData: false,
            data: formData,
            dataType: "json",
            success: (response) => {
                console.log(response.data);
                responseData = response.data;
                alert("상품 등록 완료");
            },

            error : (error) => {
                console.log(error);
            }
        })
        return responseData;
    }
}


class RegisterEventService{

    #categorySelectObj;
    #nameInputObj;
    #priceInputObj;
    #registButtonObj;

    constructor() {

        this.#categorySelectObj = document.querySelectorAll(".product-inputs")[0];
        this.#nameInputObj = document.querySelectorAll(".product-inputs")[1];
        this.#priceInputObj = document.querySelectorAll(".product-inputs")[2];
        this.#registButtonObj = document.querySelector(".pdt-regist-btn");

        this.init();


        this.addCategorySelectEvent();
        this.addNameInputEvent();
        this.addPriceInputEvent();
        this.addRegistButtonEvent();

    }

    init(){

        this.#nameInputObj.disabled = true;
        this.#priceInputObj.disabled = true;
        this.#registButtonObj.disabled = true;

    }

    addCategorySelectEvent(){
        this.#categorySelectObj.onchange =() => {
            if(this.#categorySelectObj.value != "none"){
                this.#nameInputObj.disabled = false;
            }else{
                this.#nameInputObj.disabled = true;
            }
        }
    }    

    addNameInputEvent(){
        this.#nameInputObj.onkeyup = () => {
            if(this.#nameInputObj.value.length != 0) {
                this.#priceInputObj.disabled = false;
            }else{
                this.#priceInputObj.disabled = true;
            }
        }

    }
    
    addPriceInputEvent() {
        this.#priceInputObj.onkeyup =() => {
            if(this.#priceInputObj.value.length != 0 ){
                this.#registButtonObj.disabled = false;
            }else{
                this.#registButtonObj.disabled = true;
            }
         }
    
      }

    addRegistButtonEvent() {
        this.#registButtonObj.onclick = () => {

            const formData = new FormData();

            
            const category = this.#categorySelectObj.value;
            const name = this.#nameInputObj.value;
            const price = this.#priceInputObj.value;
            
            Object.entries(PdtRegisterMst.getObject().obj).forEach(item => formData.append(item[0], item[1]));

            // const pdtRegisterMst = new PdtRegisterMst(formData);
            
            let entries = formData.entries();
            for (const pair of entries) {
            console.log(pair[0]+ ', ' + pair[1]); 
            }


            // PdtRegisterApi.getInstance().createProductRequest(formData);

            // if(pdtRegisterApi.createProductRequest(pdtRegisterMst(formData))){

            //    // location.reload();
            // }

        }
    }

} 
class RegisterService{
    static #instance=null;

    constructor() {
       this.loadRegister();
    
    }
        

    static getInstance(){
        if(this.#instance == null){
            this.#instance = new RegisterService();
        }
        return this.#instance;
        
    }

    loadRegister(){
        new RegisterEventService();
    }

    setRegisterHeaderEvent(){ /*무슨의미*/
        new RegisterEventService();
    }


        
    getCategoryList() {
        const commonApi = new CommonApi();
        const productCategoryList = commonApi.getCategoryList();

        const productCategory = document.querySelector(".regist-category-select");
        productCategory.innerHTML = '<option value="none">상품 종류</option>';

        productCategoryList.forEach(category => {
            productCategory.innerHTML += `
            <option value="${category.id}">${category.name}</option>
            
            `;
        })
            
    }

}

window.onload = () => {
    RegisterService.getInstance().getCategoryList();
    RegisterService.getInstance().setRegisterHeaderEvent();
}
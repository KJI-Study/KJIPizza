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
                alert("제품 등록 완료");
            },

            error : (error) => {
                console.log(error);
                let entries = formData.entries();
                for (const pair of entries) {
                console.log(pair[0]+ ', ' + pair[1]); 
                }
            }
        })
    }

    // registerImgFiles(formData){
    //     $.ajax({
    //         async: false,
    //         type: "post",
    //         url: "/api/admin/product/register",
    //         enctype: "multipart/form-data",
    //         contentType: false, //img form-data 쓸때, contentType, processType : false 설정해줘야함
    //         processType: false,
    //         data: formData,
    //         dataType: "json",
    //         success: (response) => {
    //             alert("이미지 등록 완료");
    //             location.reload();
    //         },
    //         error: (error) => {

    //             console.log(error);
    //         }
    //     })
    // }


    
}


class RegisterEventService{

    #categorySelectObj;
    #nameInputObj;
    #priceInputObj;
    #registButtonObj;
    // #updateButtonObj;
    // #deleteButtonObj;

    constructor() {

        this.#categorySelectObj = document.querySelectorAll(".product-inputs")[0];
        this.#nameInputObj = document.querySelectorAll(".product-inputs")[1];
        this.#priceInputObj = document.querySelectorAll(".product-inputs")[2];
        this.#registButtonObj = document.querySelector(".pdt-regist-btn");
        // this.#updateButtonObj = document.querySelectorAll(".btn")[0];
        // this.#deleteButtonObj = document.querySelectorAll(".btn")[1];

        this.init();

        this.addCategorySelectEvent();
        this.addNameInputEvent();
        this.addPriceInputEvent();
        this.addRegistButtonEvent();
        // this.addUpdateButtonEvent();
        // this.addDeleteButtonEvent();
        
        

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

<<<<<<< HEAD:src/main/resources/static/js/register.js
    addRegistButtonEvent() { //
=======
    addRegistButtonEvent() {
        // const category = document.querySelectorAll(".product-inputs")[0].value;
        // const name = document.querySelectorAll(".product-inputs")[1].value;
        // const price = document.querySelectorAll(".product-inputs")[2].value;


        const filesInput = document.querySelector(".file-input");
        const imgAddButton = document.querySelector(".img-regist-btn");
        const imgContainer = document.querySelector(".preview");

        const formData = new FormData();

        imgAddButton.onclick = () => {
            filesInput.click();
        }

        filesInput.onchange = () => {

            var fileList = filesInput.files;

            var reader = new FileReader();

            reader.readAsDataURL(fileList [0]);

            reader.onload = function  () {
                imgContainer.src = reader.result ;
            }; 
            formData.append("files", filesInput.files[0]);
        }

>>>>>>> main:src/main/resources/static/js/register2.js
        this.#registButtonObj.onclick = () => {

            formData.append("category", this.#categorySelectObj.value);

<<<<<<< HEAD:src/main/resources/static/js/register.js
            const pdtRegisterMst = new PdtRegisterMst(category, name, price);

            // const formData = new FormData();
            // PdtRegisterApi.getInstance().registerImgFiles(formData);
            
            console.log(pdtRegisterMst);
=======
            formData.append("name", this.#nameInputObj.value);
>>>>>>> main:src/main/resources/static/js/register2.js

            formData.append("price", this.#priceInputObj.value);

          
             PdtRegisterApi.getInstance().createProductRequest(formData);

<<<<<<< HEAD:src/main/resources/static/js/register.js
            location.reload();
            }
=======
            // if(pdtRegisterApi.createProductRequest(pdtRegisterMst(formData))){
>>>>>>> main:src/main/resources/static/js/register2.js

            // location.reload();
            // }
        }
    }
<<<<<<< HEAD:src/main/resources/static/js/register.js

    // addUpdateButtonEvent(){ //수정 이벤트
    //     this.#updateButtonObj.onclick = () => {
            
    //         const productinputs = document.querySelector(".pdt-regist"); //pdt-regist 주는게 맞는지요?.?

    //             let product = {
    //                 categoryId : productinputs[0].value,
    //                 pdtName : productinputs[1].value,
    //                 pdtPrice : productinputs[2].value
    //             }
                    

    //             $.ajax({
    //                 async: false,
    //                 type: "PUT",
    //                 url: "/api/admin/product/update",
    //                 contentType : "/application/json",
    //                 data : JSON.stringify(product),
    //                 dataType: "json",
    //                 success: (response) => {
    //                     console.log(response);
    //                     alert("상품 수정 완료");
    //                 },
        
    //                 error: (error) => {
    //                     console.log(error);
    //                 }
    //             });
        
    //         }

    //     }

    //     addDeleteButtonEvent(){
    //         this.#deleteButtonObj.onclick = () => {


    //         }

    //     }
        }

=======
} 
>>>>>>> main:src/main/resources/static/js/register2.js

class RegisterService{
    static #instance=null;

    static getInstance(){
        if(this.#instance == null){
            this.#instance = new RegisterService();
        }
        return this.#instance;
        
    }

    constructor() {
        this.loadRegister();
     }
         
    loadRegister(){
        new RegisterEventService();
    }

<<<<<<< HEAD:src/main/resources/static/js/register.js
    setRegisterHeaderEvent(){ 
        new RegisterEventService();
    }
=======
    // setRegisterHeaderEvent(){ /*무슨의미*/
    //     new RegisterEventService();
    // }
>>>>>>> main:src/main/resources/static/js/register2.js


        
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
//     RegisterService.getInstance().setRegisterHeaderEvent();
}
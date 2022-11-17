document.querySelector(".img-container").onclick = () => {
    document.querySelector(".file-input").click();
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
                responseResult = response.data;
            },
            error : (error) => {
                console.log(error);
            }

        })

        return responseResult;

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

        
    getCategoryList() {
        const commonApi = new CommonApi();
        const productCategoryList = commonApi.getCategoryList();

        const productCategory = document.querySelector(".pdt-regist");
        productCategory.innerHTML = '<option value="none">상품 종류</option>';

            
    }
}

const pdtCategoryListSelect = document.querySelector(".pdt-category-list-select");
const pdtCategoryList = document.querySelectorAll(".pdt-category-list");
const pdtMstSelect = document.querySelector(".product-mst-list");

const categorySelectObj = document.querySelector(".regist-category-select");
const nameInputObj = document.querySelectorAll(".product-inputs")[1];
const priceInputObj = document.querySelectorAll(".product-inputs")[2];

const filesInput = document.querySelector(".file-input");
const imgAddButton = document.querySelector(".img-regist-btn");
const imgContainer = document.querySelector(".preview");
const imgContain = document.querySelector(".img-container");

var deletepdt = {
    pdtId : 0
}


class ListloadApi {

    static #instance = null;
    
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new ListloadApi();
        }
        return this.#instance;
    }

    listload() {

        pdtCategoryList.forEach(category => {
            if(category.value == pdtCategoryListSelect.value) {
    
            let responseData = null;
    
            $.ajax({
                async: false,
                type: "get",
                url: "/api/admin/productlist/" + category.value,
                dataType: "json",
                success: (response) => {
                    responseData = response.data;
                    load.getInstance().loadpdtList(responseData);
                },
                error: (error) => {
                    console.log(error);
                    }
                });
    
                return responseData;
            }
        });
    }
    
}

pdtCategoryListSelect.onchange = () => {
    ListloadApi.getInstance().listload();
}

class pdtUpdateApi{
    static #instance = null;
    
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new pdtUpdateApi();
        }
        return this.#instance;
    }

    updateProduct(formData) {


        $.ajax({
           async : false,
           type: "post",
           url: "/api/admin/product/update",
           enctype: "multipart/form-data",
           contentType: false,
           processData: false,
           data: formData,
           dataType: "json",
           success: (response) => {
               ListloadApi.getInstance().listload();
               alert("제품 수정 완료");
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

}

class pdtDeleteApi{
    static #instance = null;
    
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new pdtDeleteApi();
        }
        return this.#instance;
    }

    deleteProduct(){
        $.ajax({
            async: false,
            type: "delete",
            url: "/api/admin/product/delete",
            contentType: "application/json",
            data: JSON.stringify(deletepdt),
            dataType: "json",
            success: (response) => {
                alert("제품 삭제 완료");
                ListloadApi.getInstance().listload();
            },

            error: (error) => {
                console.log(error);
                alert("제품 삭제 실패");
            }
        })
    }
}



class load {

    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new load();
        }
        return this.#instance;
    }

    loadpdtList(responseData) {

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
        formData.append("file", filesInput.files[0]);
    }
    
    pdtMstSelect.innerHTML = "";

    responseData.forEach((product,index) => {
        
        pdtMstSelect.innerHTML += `
            <tr>
            <td>${product.pdtId}</td>
            <td>${product.categoryName}</td>
            <td>${product.pdtName}</td>
            <td>${product.pdtPrice}</td>
            <td><button type="button" class="btn detail">정보</button></td>
            <td><button type="button" class="btn insert">수정</button></td>
            <td><button type="button" class="btn delete">삭제</button></td>
            </tr>
        `;
        }); 
        
        const detailbutton =  document.querySelectorAll(".detail");
        const updateButton = document.querySelectorAll(".insert");
        const deleteButton = document.querySelectorAll(".delete");

        detailbutton.forEach((button,index) => {
            button.onclick = () => {
                categorySelectObj.value = pdtCategoryListSelect.value ;
                nameInputObj.value = responseData[index].pdtName;
                priceInputObj.value = responseData[index].pdtPrice; 
            }
        })

        updateButton.forEach((button,index) => {

            button.onclick = () => {
                
                const formData = new FormData();

                if(filesInput.files[0] != null && filesInput.files[0] != undefined){
                    formData.append("file", filesInput.files[0]);
                }

                formData.append("id" , responseData[index].pdtId);

                formData.append("category", categorySelectObj.value);

                formData.append("name", nameInputObj.value);

                formData.append("price", priceInputObj.value);

              
                pdtUpdateApi.getInstance().updateProduct(formData);
                
            }
        })
        deleteButton.forEach((button,index) => {

            button.onclick = () => {
                deletepdt['pdtId'] = responseData[index].pdtId;
                pdtDeleteApi.getInstance().deleteProduct();
            }
        })
    }
}



    
        

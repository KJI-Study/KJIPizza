const pdtCategoryListSelect = document.querySelector(".pdt-category-list-select");
const pdtCategoryList = document.querySelectorAll(".pdt-category-list");
const pdtMstSelect = document.querySelector(".product-mst-list");

const categorySelectObj = document.querySelectorAll(".product-inputs")[0];
const nameInputObj = document.querySelectorAll(".product-inputs")[1];
const priceInputObj = document.querySelectorAll(".product-inputs")[2];


pdtCategoryListSelect.onchange = () => {
            

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
        }
    });
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

        const detailbutton =  document.querySelectorAll(".detail");
        const updateButton = document.querySelectorAll(".insert");
        const deleteButton = document.querySelectorAll(".delete");

        [].forEach.call(detailbutton, function(col) {
            col.addEventListener("click",click,false);
        })
        function click(e){ 
            console.log(responseData[e]);
            categorySelectObj.text = responseData[index].categoryName;
            nameInputObj.value = responseData[index].pdtName;
            priceInputObj.value = responseData[index].pdtPrice;
        }
        
        }); 
    }
}
    // updateButton.onclick = () => {
    // const productInputs = document.querySelectorAll(".pdt-regist");

    // let product = {
    //     categoryId : productInputs[0].value,
    //     pdtName : productInputs[1].value,
    //     pdtPrice : productInputs[2].value
                
    //     }
    
    // $.ajax({
    // async: false,
    // type: "PUT",
    // url: "/api/admin/product/update",
    // contentType : "/application/json",
    // data : JSON.stringify(product),
    // dataType: "json",
    // success: (response) => {
    // console.log(response);
    // alert("상품 수정 완료");
    // },
        
    // error: (error) => {
    // console.log(error);
    //      }
    
    // });

//}


    
        

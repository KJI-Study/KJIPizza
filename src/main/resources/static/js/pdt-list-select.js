const pdtCategoryListSelect = document.querySelector(".pdt-category-list-select");
const pdtCategoryList = document.querySelectorAll(".pdt-category-list");
const pdtMstSelect = document.querySelector(".product-mst-list");



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
            },
            error: (error) => {
                console.log(error);
            }
        });

        pdtMstSelect.innerHTML ="";
    
        responseData.forEach(product => {
            pdtMstSelect.innerHTML += `
                <tr>
                <td>${product.pdtId}</td>
                <td>${product.categoryName}</td>
                <td>${product.pdtName}</td>
                <td>${product.pdtPrice}</td>
                <td><button type="button" class="btn">정보</button></td>
                <td><button type="button" class="btn">수정</button></td>
                <td><button type="button" class="btn">삭제</button></td>
                </tr>
            `;
        });
    }
    
        });
    
        
    }
    
const updateButton = document.querySelectorAll(".btn")[0];
const deleteButton = document.querySelectorAll(".btn")[1];
updateButton.onclick = () => {
    const productInputs = document.querySelectorAll(".pdt-regist");

    let product = {
        categoryId : productInputs[0].value,
        pdtName : productInputs[1].value,
        pdtPrice : productInputs[2].value
                
        }
    
    $.ajax({
    async: false,
    type: "PUT",
    url: "/api/admin/product/update",
    contentType : "/application/json",
    data : JSON.stringify(product),
    dataType: "json",
    success: (response) => {
    console.log(response);
    alert("상품 수정 완료");
    },
        
    error: (error) => {
    console.log(error);
         }
    
    });

}


    
        

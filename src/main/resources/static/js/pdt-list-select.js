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
                console.log(response.data);
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
                <td><button type="button" class="btn">수정</button></td>
                <td><button type="button" class="btn">삭제</button></td>
                </tr>
            `;
        });
    }


    
        


    });

    
}
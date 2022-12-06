const create = document.querySelectorAll(".create-sale");
const totSales = document.querySelector(".total-sales");
const optionSales = document.querySelector(".additional-option");

class Sales {
    static #instance = null;

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new Sales();
        }
        return this.#instance;
        }

    getSale(){
        let responseData = null;
        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/sales",
            dataType: "json",
            success: (response) => {
                console.log(response.data);
                responseData = response.data;
                SalesService.getInstance().getSalesProduct(responseData);
            },
            error : (error) => {
                console.log(error);
            }
        })
    }

    getTotalSales() {
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/totalSales",
            dataType: "json",
            success: (response) => {
                console.log(response.data);
                responseData = response.data;
                totSales.innerHTML = `₩${responseData.totalSales}`;
            },
            error : (error) => {
                console.log(error);
            }
        });
        
        responseData.forEach(item => {
            if(item.cartegoryId == 2){
            create[0].innerHTML += `
            <tr>
            <td>추가 옵션</td>
            <td>-</td>
            ${responseData.totalSales}</td>
            </tr>
         `;
            }
            else{
                create[1].innerHTML += `
                <tr>
                <td>${item.pdtName}</td>
                <td>${item.stock}</td>
                <td>${item.pdtPrice * item.stock}</td>
                </tr>
            `;
            }
        });
    }
    
}

    // getOptionSales(){
    //     let responseData = null;

    //     $.ajax({
    //         async: false,
    //         type: "get",
    //         url: "/api/admin/optionSales",
    //         dataType: "json",
    //         success: (response) => {
    //             console.log(response.data);
    //             responseData = response.data;
    //             optionSales.innerHTML = ``
    //         },

    //         error: (error) =>{
    //             console.log(error);
    //         }
    //     })

    // }


class SalesService{
    static #instance = null;

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new SalesService();
        }
        return this.#instance;
    }

    getSalesProduct(responseData) {
        const allresult = document.querySelectorAll(".Allresult");
        var resultsum = 0;
        var result2sum = 0;
        const indexPrice = document.querySelectorAll(".price");
        responseData.forEach(item => {
            if(item.cartegoryId == 2){
            create[0].innerHTML += `
                <tr>
                <td>${item.pdtName}</td>
                <td>${item.stock}</td>
                <td class="price">${item.pdtPrice * item.stock}</td>
                </tr>
         `;
            }
            else{
                create[1].innerHTML += `
                <tr>
                <td>${item.pdtName}</td>
                <td>${item.stock}</td>
                <td>${item.pdtPrice * item.stock}</td>
                </tr>
            `;
            }
        });

        for(var i = 0; i<responseData.length; i++){
            if(responseData[i].cartegoryId == 2){
                resultsum += responseData[i].pdtPrice * responseData[i].stock;
            }else {
                result2sum += responseData[i].pdtPrice * responseData[i].stock;
            }
        }
        allresult[0].innerHTML = `${resultsum}`;
        allresult[1].innerHTML = `${result2sum}`;
    }

}


window.onload = () => {
    Sales.getInstance().getSale();
    Sales.getInstance().getTotalSales();
    Sales.getInstance().getOptionSales();
}
const create = document.querySelector(".create-sale");

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
}

class SalesService{
    static #instance = null;

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new SalesService();
        }
        return this.#instance;
    }

    getSalesProduct(responseData) {
        const allresult = document.querySelector(".Allresult");
        var resultsum = 0;
        
        responseData.forEach(item => {
            create.innerHTML += `
                <tr>
                <td>${item.pdtName}</td>
                <td>${item.stock}</td>
                <td>${item.pdtPrice * item.stock}</td>
                </tr>
        `;
        });
        
        for(var i = 0; i<responseData.length; i++){
            resultsum += (responseData[i].stock * responseData[i].pdtPrice);
        }
        allresult.innerHTML = `${resultsum}`
    }

}

window.onload = () => {
    Sales.getInstance().getSale();
}
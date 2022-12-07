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
                responseData = response.data;
                totSales.innerHTML = `₩${Number(responseData.totalSales).toLocaleString()}`;
            },
            error : (error) => {
                console.log(error);
            }
        });
        return responseData;

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
        const allresult = document.querySelectorAll(".Allresult");
        var resultsum = 0;
        var result2sum = 0;
        var result3sum = 0;
        var result4sum = 0;
        var result5sum = 0;

        responseData.forEach(item => {
            if(item.cartegoryId == 2){
                create[0].innerHTML += `
                    <tr>
                        <td>${item.pdtName}</td>
                        <td>${item.stock}</td>
                        <td class="price">${Number(item.pdtPrice * item.stock).toLocaleString()}</td>
                    </tr>
                `;
            }
            else{
                create[1].innerHTML += `
                    <tr>
                        <td>${item.pdtName}</td>
                        <td>${item.stock}</td>
                        <td class="price">${Number(item.pdtPrice * item.stock).toLocaleString()}</td>
                    </tr>
                `;
            }

        });

        for(var i = 0; i<responseData.length; i++){
            if(responseData[i].cartegoryId == 1){
                resultsum += responseData[i].pdtPrice * responseData[i].stock;
            }else if(responseData[i].cartegoryId == 2){
                result2sum += responseData[i].pdtPrice * responseData[i].stock;
            }else if(responseData[i].cartegoryId == 3){
                result3sum += responseData[i].pdtPrice * responseData[i].stock;
            }else if(responseData[i].cartegoryId == 4){
                result4sum += responseData[i].pdtPrice * responseData[i].stock;
            }else if(responseData[i].cartegoryId == 5){
                result5sum += responseData[i].pdtPrice * responseData[i].stock;
            }
        }


        const totalAmount = Sales.getInstance().getTotalSales();
        const optionsPrice = document.querySelector(".additional-option");
        const optionsAmount = totalAmount.totalSales - result2sum - (resultsum + result3sum + result4sum + result5sum);

        allresult[0].innerHTML = `${Number(result2sum).toLocaleString()}`;

        allresult[1].innerHTML = `${Number(resultsum + optionsAmount + result3sum + result4sum + result5sum).toLocaleString()}`;

        optionsPrice.innerHTML = `${Number(optionsAmount).toLocaleString()}`;
        
        let pieChartData = {
            labels: ['피자', '샐러드', '스파게티', '파스타/라이스', '음료', '기타'],
            datasets: [{
            data: [result2sum, resultsum, result3sum, result4sum, result5sum, optionsAmount],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)']
            }],
            PointStyle: 'circle',
            pointRadius: 1
            };
            
            let ctx = document.getElementById('pieChart').getContext('2d');
                
            window.pieChart = new Chart(ctx, {
                type: 'pie',
                data: pieChartData,
                options: {
                    responsive: false,
                    plugins: {
                        legend: {
                            labels: {
                                usePointStyle: true
                            },
                            position: 'right'
                        }
                    }
                }   
            });
    }

    salesChart() {
        
        
    }

}


window.onload = () => {
    Sales.getInstance().getSale();
    Sales.getInstance().getTotalSales();

}
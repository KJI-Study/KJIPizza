const tableSelect = document.querySelectorAll(".number");

tableSelect.forEach((button,number) => {
    button.onclick = () => {
        console.log(tableSelect[number]);
        location.href=`/table/${number+1}`;
    }
})
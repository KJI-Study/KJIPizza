const increase = document.querySelectorAll("#increase");
const decrease  = document.querySelectorAll("#decrease");
const number = document.querySelectorAll(".number");

increase[0].onclick = () => {
    const current = parseInt(number[0].innerText, 0);
    number[0].innerText = current + 1;
};

decrease[0].onclick = () => {
    const current = parseInt(number[0].innerText, 0);
    if(current > 0){
    number[0].innerText = current - 1;
    }
};

increase[1].onclick = () => {
    const current = parseInt(number[1].innerText, 0);
    number[1].innerText = current + 1;
};

decrease[1].onclick = () => {
    const current = parseInt(number[1].innerText, 0);
    if(current > 0){
    number[1].innerText = current - 1;
    }
};

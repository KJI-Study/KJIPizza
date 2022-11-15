const categoryButtons = document.querySelectorAll(".category");
const mainContainer = document.querySelectorAll(".main-container")


categoryButtons.forEach((button, index)=>{
    button.onclick = () => {
        clear();
        mainContainer[index].classList.remove("invisible");
        categoryButtons[index].style.color = "blue";
    }
});

function clear() {
    for(var i = 0; i<5; i++){
        mainContainer[i].classList.add("invisible");
        categoryButtons[i].style.color = "black";
    }
}



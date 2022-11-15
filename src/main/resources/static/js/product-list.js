document.querySelector(".category1").onclick = () => {
    document.querySelectorAll(".main-container")[0].classList.remove("invisible");
    document.querySelectorAll(".main-container")[1].classList.add("invisible");
    document.querySelectorAll(".main-container")[2].classList.add("invisible");
    document.querySelectorAll(".main-container")[3].classList.add("invisible");
    document.querySelectorAll(".main-container")[4].classList.add("invisible");
}

document.querySelector(".category2").onclick = () => {
    document.querySelectorAll(".main-container")[0].classList.add("invisible");
    document.querySelectorAll(".main-container")[1].classList.remove("invisible");
    document.querySelectorAll(".main-container")[2].classList.add("invisible");
    document.querySelectorAll(".main-container")[3].classList.add("invisible");
    document.querySelectorAll(".main-container")[4].classList.add("invisible");
}

document.querySelector(".category3").onclick = () => {
    document.querySelectorAll(".main-container")[0].classList.add("invisible");
    document.querySelectorAll(".main-container")[1].classList.add("invisible");
    document.querySelectorAll(".main-container")[2].classList.remove("invisible");
    document.querySelectorAll(".main-container")[3].classList.add("invisible");
    document.querySelectorAll(".main-container")[4].classList.add("invisible");
}

document.querySelector(".category4").onclick = () => {
    document.querySelectorAll(".main-container")[0].classList.add("invisible");
    document.querySelectorAll(".main-container")[1].classList.add("invisible");
    document.querySelectorAll(".main-container")[2].classList.add("invisible");
    document.querySelectorAll(".main-container")[3].classList.remove("invisible");
    document.querySelectorAll(".main-container")[4].classList.add("invisible");
}

document.querySelector(".category5").onclick = () => {
    document.querySelectorAll(".main-container")[0].classList.add("invisible");
    document.querySelectorAll(".main-container")[1].classList.add("invisible");
    document.querySelectorAll(".main-container")[2].classList.add("invisible");
    document.querySelectorAll(".main-container")[3].classList.add("invisible");
    document.querySelectorAll(".main-container")[4].classList.remove("invisible");
}


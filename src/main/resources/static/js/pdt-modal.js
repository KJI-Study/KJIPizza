document.querySelector(".product-select").onclick = () => {
    document.querySelector(".modal-container").classList.remove("hidden");
}

document.querySelector(".modal-close-btn").onclick = () => {
    document.querySelector(".modal-container").classList.add("hidden");
}

document.querySelector(".bg").onclick = () => {
    document.querySelector(".modal-container").classList.add("hidden");
}
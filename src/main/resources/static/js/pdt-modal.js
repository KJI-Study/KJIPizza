document.querySelector(".product-select").onclick = () => {
    document.querySelector(".modal-container").classList.remove("hidden");
}

document.querySelector(".modal-close-btn").onclick = () => {
    document.querySelector(".modal-container").classList.add("hidden");
}

document.querySelector(".bg").onclick =() => {
    document.querySelector(".modal-container").classList.add("hidden");
}

const modalCart = document.querySelector(".modal-cart");
const cartOpen = document.querySelector(".bag-btn");
const cartClose = document.querySelector(".cart-close");
const cartBody = document.querySelector(".cart-body");

cartOpen.onclick = () => {
    modalCart.classList.remove("hidden");
}







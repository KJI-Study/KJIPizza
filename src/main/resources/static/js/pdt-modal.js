const modalCart = document.querySelector(".modal-cart");
const cartOpen = document.querySelector(".bag-btn");
const cartClose = document.querySelector(".cart-close");
const cartBody = document.querySelector(".cart-body");

cartOpen.addEventListener("click", e => {
    modalCart.style.display = "flex";
})

cartClose.addEventListener("click", e => {
    modalCart.style.display = "none";
})

modalCart.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("bg")){
        modalCart.style.display = "none";
    }
})
// Show Images according to variant
function showimags(e) {
    var data = e.dataset.imgAlt.toLowerCase();
    var lengthhide = document.querySelectorAll(".product__media-list .product__media-item").length;
    for (let i = 0; i < lengthhide; i++) {
        document.querySelectorAll(".product__media-list .product__media-item")[i].style.display = "none";
    }
    var showlength = document.querySelectorAll(".product__media-list img[alt='"+data+"']").length;
    for (let i = 0; i < showlength; i++) {
        document.querySelectorAll(".product__media-list img[alt='"+data+"']")[i].parentElement.parentElement.parentElement.parentElement.style.display = "block"
    }
}

// Change option according variant
function ecomchange(e) {
    var selectval = e.value;
    document.querySelector(".hide-dropdown [data-img-alt='"+selectval+"']").click();
    document.querySelector(".product-form__submit").style.opacity = "1";
    document.querySelector(".product-form__submit").style.pointerEvents = "unset";
}
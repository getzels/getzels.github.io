document.addEventListener("DOMContentLoaded", function (){
const imgagesToLoad = document.querySelectorAll("[data-src]");
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imageOptions = {};
const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
        if (!item.isIntersecting) {
            return;
        }else{
            loadImages(item.target);
            observer.unobserve(item.target);
        }
    });
}, imageOptions);

imgagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});
});




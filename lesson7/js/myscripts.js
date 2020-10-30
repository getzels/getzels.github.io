const imgagesToLoad = document.querySelectorAll("img[data-src]");

console.log(imgagesToLoad);

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAtribute("data-src");
    };
};


const imageOptions = {};

// if ('IntersectionObserver' in window) {
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

// } else {
// imgagesToLoad.forEach((img) => {
//     loadImages(img);
// });
// }



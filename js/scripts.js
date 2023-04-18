window.addEventListener("scroll", function () {
    var box = document.querySelector(".box");
    var boxPosition = box.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if (boxPosition < screenPosition) {
        box.classList.add("animate");
    } else {
        box.classList.remove("animate");
    }
});

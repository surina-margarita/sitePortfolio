let divImg = document.querySelectorAll(".imgInteret");

for (const divImgElement of divImg) {
    let img = divImgElement.querySelector("img");
    let p = divImgElement.querySelector("a");


    img.addEventListener("mouseover", function () {
        img.style.filter = "blur(10px)";
        visible(p);
    });

    img.addEventListener("mouseout", function () {
        img.style.filter = "blur(0px)";
        cacher(p);
    });

    p.addEventListener("mouseover", function () {
        img.style.filter = "blur(10px)";
        visible(p);
    });

    p.addEventListener("mouseout", function () {
        img.style.filter = "blur(0px)";
        cacher(p);
    });

    cacher(p);


}

function cacher(elem) {
    elem.style.visibility = "hidden";
}
function visible(elem) {
    elem.style.visibility = "visible";
}


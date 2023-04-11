let divImg = document.querySelectorAll(".jsBlur");

for (const divImgElement of divImg) {
    let img = divImgElement.querySelector("img");
    let p = divImgElement.querySelector("a");
    p.style.fontFamily = "Work Sans, sans-serif";
    p.style.color = "#ff9843";
    p.style.fontWeight = "bold";

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

function copy() {
    let bouton = document.getElementById("copy")

    bouton.addEventListener('click', function (){

        let copyText = document.getElementById("num");

        navigator.clipboard.writeText(copyText.innerText);

        alert("L'information est bien copiée: " + copyText.innerText);
    });
}


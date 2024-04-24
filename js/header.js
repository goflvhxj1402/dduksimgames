const header = document.getElementById("header");
const fonts = document.querySelectorAll(".font_white");
const gnbList = document.querySelectorAll("#gnbList a");
const utilList = document.querySelectorAll("#utilList a");
const langBtn = document.querySelector("#langSelect dl");
let color = "white";
let backColor = "transparent";
// header.addEventListener("mouseleave", function (evnet) {
//     if (!isHammerChange) return;
//     header.style.height = "71px";
//     isGnbOpen = false;
//     ToggleHeader();
// })
langBtn.addEventListener("click", function () {
    langBtn.style.height = (langBtn.clientHeight > 35) ? "35px" : "105px";
    langBtn.style.backgroundColor = (langBtn.children[0].className == "font_white") ? "transparent" : "white";
})
// for (let i = 0; i < gnbList.length; i++) {
//     gnbList[i].addEventListener("mouseover", function (event) {
//         if (!isHammerChange) return;
//         if (isGnbOpen) {
//             return;
//         }
//         header.style.height = "160px";
//         isGnbOpen = true;
//         ToggleHeader();
//     })
for (let i = 0; i < gnbList.length; i++) {
    gnbList[i].addEventListener("click", function (event) {
        let index;
        switch (i + 1) {
            case 1:
                index = 1;
                break;
            case 2:
                index = 4;
                break;
            case 3:
                index = 3;
                break;
            case 4:
                index = 6;
                break;
        }
        ScrollPage(0, index);
    })
}
function ToggleHeader(toggleColor) {
    if(toggleColor == "black"){
        color = "black";
        backColor = "white";
    }
    else {
        color = "white";
        backColor = "transparent";
    }
    for (let i = 0; i < fonts.length; i++) {
        fonts[i].className = `font_${color}`;
    }
    utilList[0].children[0].style.color = `${color}`;
    utilList[utilList.length - 1].style.backgroundImage = `url(./img/Header/${color}Nav.png)`;
    header.style.backgroundColor = `${backColor}`;
    header.children[0].style.backgroundImage = `url(./img/Header/${color}Logo.png)`;
}
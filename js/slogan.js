const crackWrap = document.getElementById("crackWrap");
const crack = document.getElementById("crack");
const hammer = document.getElementById("hammer");
const sloganSection = document.getElementById("slogan");
const arrSlogan = document.querySelectorAll("#sloganList li");
const arrSloganText = document.querySelectorAll("#slogan li p");
let sloganMaxIndex = 4;
let sloganCurIndex = 0;
let isHammerChange = false;
let changeSlogan;
let sloganStart;
let isSloganEnd = false;

setTimeout(() => {
    sloganStart = SloganStart();
}, 10);
function SloganStart() {
    return setInterval(() => {
        hammer.style.top = "35%";
        hammer.style.transition = "all 0.5s ease-in";
        setTimeout(Crack, 500);
        clearInterval(sloganStart);
    }, 100);
}
function Crack() {
    crackWrap.style.backgroundImage = "url(./img/Slogan/CrackBlack.png)";
    crackWrap.style.transition = "0.3s";
    // 질문
    crack.style.backgroundSize = "50% 0%";
    // 질문
    setTimeout(ChangeBackColor, 300);
}
function ChangeBackColor() {
    sloganSection.style.backgroundSize = "150%";
    crackWrap.style.backgroundImage = "url(./img/Slogan/CrackWhite.png)";
    hammer.style.backgroundImage = "url(./img/Slogan/HammerWhite.png)";
    sloganSection.style.transition = "all 0.3s ease-in";
    crackWrap.style.transition = "all 0.5s ease-in";
    isHammerChange = true;
    header.style.visibility = "visible";
    setTimeout(() => {
        arrSlogan[0].style.backgroundColor = "black";
        isShowing = false;
    }, 300)
}
function SlideSlogan(dir) {
    if (isShowing || (dir == -1 && sloganCurIndex == 0)) return;
    if (dir == 1 && sloganCurIndex == sloganMaxIndex) {
        scrollTarget = TARGET.PAGE;
        isShowing = false;
        return;
    }
    isShowing = true;

    if (dir == 1) {
        sloganCurIndex += dir;
        arrSlogan[sloganCurIndex].style.left = "0";
        arrSlogan[sloganCurIndex].style.top = "0";    
    }
    else {
        arrSlogan[sloganCurIndex].style.left = arrSlogan[sloganCurIndex].getAttribute("data-posX");
        arrSlogan[sloganCurIndex].style.top = arrSlogan[sloganCurIndex].getAttribute("data-posY");
        sloganCurIndex += dir;
    }
    arrSlogan[sloganCurIndex].style.transition = "0.8s";
    setTimeout(() => {
        isShowing = false;
        arrSloganText[sloganCurIndex].style.opacity = "1";
    }, 800)
}

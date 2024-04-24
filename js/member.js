const arrMemberCard = document.querySelectorAll(".memberCard");
const memberWrap = document.querySelector("#memberCardWrap");
const arrCardRotate = [0, 60, 120, 180, 240, 300];
let isResizing = false;
let resizeChecker;
let elapseTime = 0;
let cardWidth, cardHeight;
let rotateXAngle = -window.innerWidth * (10 / 1920);
let rotateYAngle = 0;
let rotate;
let isMemberActive = false;

window.addEventListener("resize", () => {
    elapseTime = 0;
    SetCard();
    if (!isResizing) {
        isResizing = !isResizing;
        resizeChecker = GetResize();
    }
})

function GetResize() {
    return setInterval(() => {
        elapseTime += 100;
        if (elapseTime > 1000) {
            isResizing = !isResizing;
            elapseTime = 0;
            clearInterval(resizeChecker);
        }
    }, 100)
}

function SetCard() {
    //valueSet
    cardWidth = `${window.innerWidth * (300 / 1920)}px`;
    cardHeight = `${window.innerWidth * (375 / 1920)}px`;
    cardSpacing = cardWidth;
    rotateXAngle = -window.innerWidth * (10 / 1920);
    rotateYAngle = 0;
    memberWrap.style.transform = `rotateX(${rotateXAngle}deg)`;
    //changeCardValue
    for (let i = 0; i < arrMemberCard.length; i++) {
        arrMemberCard[i].style.width = cardWidth;
        arrMemberCard[i].style.height = cardHeight;
        arrMemberCard[i].style.transform =
            `rotateY(${arrCardRotate[i]}deg)  translateZ(${cardSpacing})`;
    }
}

function CardTransistion(){
    for (let i = 0; i < arrMemberCard.length; i++) {
        arrMemberCard[i].style.transition = "1.0s";
        setTimeout(()=>{
            arrMemberCard[i].style.transition = "";
        }, 1000);
    }
}
function GetRotate() {
    return setInterval(function (event) {
        if (isResizing) return;
        memberWrap.style.transform = `rotateX(${rotateXAngle}deg) rotateY(${-rotateYAngle}deg)`;
        rotateYAngle += 0.1;
    }, 10)
}
function SlideMember(){
    if(isMemberActive) return;
    isMemberActive = true;
    CardTransistion();
    SetCard();
    rotate = GetRotate();
    setTimeout(()=>{
        scrollTarget = TARGET.PAGE;
    }, 1500)
}
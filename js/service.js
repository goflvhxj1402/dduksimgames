const serviceWrap = document.getElementById("serviceCardWrap");
const listWrap = document.querySelector("#serviceWrap ul");
let arrCards = document.querySelectorAll("#serviceWrap ul li");
let cloneListWrap;
let listMaxPos;

serviceWrap.style.width = `${window.innerWidth * 0.72 / 3 * arrCards.length * 2}px`
listWrap.style.width = `${window.innerWidth * 0.72 / 3 * arrCards.length}px`;
serviceWrap.style.height = `${listWrap.clientWidth / (arrCards.length - 1) * 10}px`;

for(let i = 0; i < arrCards.length; i++){
    arrCards[i].style.width = `${listWrap.clientWidth / arrCards.length * 0.9}px`;
    arrCards[i].style.height = `${listWrap.clientWidth / (arrCards.length - 1)}px`;
}

cloneListWrap = listWrap.cloneNode(true);
serviceWrap.append(cloneListWrap);
listMaxPos = -listWrap.clientWidth;

let moveAmount = [0, 0];
let moveServiceSlider = MoveServiceSlider();
let margin = listWrap.clientWidth / arrCards.length * 0.1;

listWrap.style.marginRight = `${margin}px`;
cloneListWrap.style.marginRight = `${margin}px`;

arrCards = document.querySelectorAll("#serviceWrap ul li");
for(let i = 0; i < arrCards.length; i++){
    arrCards[i].addEventListener("mouseenter", ()=>{
        clearInterval(moveServiceSlider);
        arrCards[i].style.width = `${arrCards[i].clientWidth * 1.2}px`
        arrCards[i].style.height = `${arrCards[i].clientHeight * 1.2}px`
        arrCards[i].children[0].children[4].style.opacity = "1";
    })
    arrCards[i].addEventListener("mouseleave", ()=>{
        moveServiceSlider = MoveServiceSlider();
        arrCards[i].style.width = `${arrCards[i].clientWidth * 5 / 6}px`
        arrCards[i].style.height = `${arrCards[i].clientHeight * 5 / 6}px`
        arrCards[i].children[0].children[4].style.opacity = "0";
    })
    arrCards[i].addEventListener("click", ()=>{
       
    })
}
function MoveServiceSlider(){
    return setInterval(()=>{
        listWrap.style.transform = `translateX(${moveAmount[0]--}px)`;
        cloneListWrap.style.transform = `translateX(${moveAmount[1]--}px)`;
        if(moveAmount[0] < listMaxPos){
            listWrap.style.transform = `translateX(${-listMaxPos}px)`;
            moveAmount[0] = -listMaxPos;
        }
        if(moveAmount[1] < listMaxPos * 2){
            cloneListWrap.style.transform = `translateX(${0}px)`;
            moveAmount[1] = 0;
        }
    },10)
}

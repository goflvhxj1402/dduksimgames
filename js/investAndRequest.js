const arrInvestCard = document.querySelectorAll("#investCardWrap li");
const arrInvestImg = document.querySelectorAll("#investCardWrap li a");
const arrInvestCover = document.querySelectorAll("#investCardWrap li div")

for(let i = 0; i < arrInvestCard.length; i++){
    arrInvestCard[i].addEventListener("mouseenter", function(){
        arrInvestCard[i].style.zIndex = "5";
        arrInvestImg[i].style.backgroundSize = "200%";
        arrInvestCover[i].style.opacity = "0.1";
        arrInvestImg[i].style.transition = "0.5s";
        arrInvestCover[i].style.transition = "0.5s";
    });
    arrInvestCard[i].addEventListener("mouseleave", function(){
        arrInvestCard[i].style.zIndex = "";
        arrInvestImg[i].style.backgroundSize = "160%";
        arrInvestCover[i].style.opacity = "0.5";
    });
}
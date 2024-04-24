const arrCard = document.querySelectorAll("#cardWrap li");

for(let i = 0; i < arrCard.length; i++){
    arrCard[i].addEventListener("mouseenter", function(){
        EnterCard(i);     
    })
    arrCard[i].addEventListener("mouseleave", function(){
        LeaveCard();
    })
    arrCard[i].addEventListener("transitionend", function(){
        arrCard[i].style.transition = "";
    })
}

function EnterCard(index){
    for(let i = 0; i < arrCard.length; i++){
        if(i == index){
            arrCard[index].style.width = `30vw`;
            continue;
        }
        arrCard[i].style.width = "18vw";
    }
}
function LeaveCard(){
    for(let i = 0; i < arrCard.length; i++){
        arrCard[i].style.width = `22vw`;
    }
}
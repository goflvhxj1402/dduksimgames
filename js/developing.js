const character = document.getElementById("developCharacter");

let moveChar = GetAni();
let curIndex = 0;
let developmoveAmount = character.clientWidth;

window.addEventListener("resize", function(){
    developmoveAmount = character.clientWidth;
})
function GetAni(){
    return setInterval(()=>{
        character.style.backgroundPosition = 
        `left ${-curIndex++ * developmoveAmount}px center`;
        if(curIndex > 7){
            curIndex = 0;
        }
        }, 100)
}
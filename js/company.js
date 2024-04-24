const comCharacter = document.getElementById("companyCharacter");
const quest = document.getElementById("question");
const pageType1 = document.getElementById("companyType1");
const pageType2 = document.getElementById("companyType2");
const companySection = document.getElementById("company");

let isCompanyActive = false;

function LightOn() {
    pageType1.style.opacity = "0";
    pageType2.style.opacity = "1";
    companySection.style.backgroundImage = "url(./img/Company/lightBlackBack.png)";

    pageType1.style.transition = "1.0s";
    pageType2.style.transition = "1.0s";
    companySection.style.transition = "1.0s";

    pageType1.addEventListener("transitionend", () => {
        pageType1.style.transition = "";
    })
    pageType2.addEventListener("transitionend", () => {
        pageType2.style.transition = "";
        isShowing = false;
        scrollTarget = TARGET.PAGE;
        isCompanyActive = true;
    })
    companySection.addEventListener("transitionend", () => {
        companySection.style.transition = "";
    })
}

function SlideCompany(dir) {
    if (isShowing) return;
    if(isCompanyActive && dir == -1){
        scrollTarget = TARGET.PAGE;
        scrollAmount += 70;
        ScrollPage(dir);
        scrollAmount -= 70;
        return;
    }
    isShowing = true;
    LightOn(); 
    ToggleHeader("white");
}
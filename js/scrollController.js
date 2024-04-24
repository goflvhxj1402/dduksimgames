const TARGET = {
    PAGE: 0,
    SECTION: 1
}
const PAGE = {
    SLOGAN: 0,
    COMPANY: 1,
    MEMBER: 2
}
let scrollIndex = 0;
let isSceneChanging = false;
let isShowing = true;
let scrollAmount = window.innerHeight;
let scrollTarget = TARGET.SECTION;

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        scrollTo(0, 0);
    }, performance.now())
})
window.addEventListener("resize", function () {
    scrollAmount = window.innerHeight;
})
window.addEventListener("wheel", function (event) {
    let dir = (event.deltaY > 0) ? 1 : -1;
    switch (scrollTarget) {
        case TARGET.PAGE:
            ScrollPage(dir);
            break;
        case TARGET.SECTION:
            ScrollSection(dir);
            break
    }
    if (isShowing) return;
})
function ScrollPage(dir, index = -1) {
    if (isSceneChanging || (dir == -1 && scrollIndex == 0) || (dir == 1 && scrollIndex == 7)) return;
    isSceneChanging = true;
    scrollIndex += dir;
    if(index != -1){
        scrollIndex = index;
    }
    window.scroll({
        top: scrollAmount * scrollIndex,
        behavior: "smooth"
    })
    if(!isCompanyActive && scrollIndex == 1){
        ToggleHeader("black");
    }
    setTimeout(() => {
        isSceneChanging = false;
        switch (scrollIndex) {
            case PAGE.SLOGAN:
                scrollTarget = TARGET.SECTION;
                break;
            case PAGE.COMPANY:
                scrollTarget = isCompanyActive ? TARGET.PAGE : TARGET.SECTION;
                break;
            case PAGE.MEMBER:
                scrollTarget = isMemberActive ? TARGET.PAGE : TARGET.SECTION;
                break;
            default:
                scrollTarget = TARGET.PAGE;
                break;
        }
    }, 800)
}
function ScrollSection(dir) {
    if (isShowing) return;
    switch (scrollIndex) {
        case 0:
            SlideSlogan(dir);
            break;
        case 1:
            SlideCompany(dir);
            break;
        case 2:
            SlideMember();
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
    }
}
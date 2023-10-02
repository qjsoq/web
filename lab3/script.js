const slider = document.querySelector(".slider").children;
const sliderTime = 6000;
let index = 0;

function slideShow(){
    for(let i = 0; i<slider.length;i++){
        slider[i].classList.remove("active")
    }
    slider[index].classList.add("active");
    if(index === slider.length-1){
        index = 0;
    } else {
        index++;
    }
    setTimeout(() => {
        slideShow();
    },sliderTime)
}

window.onload = () => {
    slideShow();
}

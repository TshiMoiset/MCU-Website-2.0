/*------------------- Images slider -------------------
let sliderAll = document.querySelectorAll('.slide');
const viewportWidth = window.innerWidth ?? document.documentElement.clientWidth;

for (let i = 0; i < sliderAll.length; i++) {
    const slider = sliderAll[i];
    const result = isInViewport(slider);
    
    
    write(result,slider)
    console.log(result);
}

function write(result,slider) {
    if (result === true) {

        if (slider !== undefined) {
        }
        slider.style.display = "none";
    } else {

        if (slider !== undefined) {
            slider.style.display = "block";
        }
    }
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight ?? document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth ?? document.documentElement.clientWidth)
        
        );
    }
    
setInterval(write, 10000);*/



    
